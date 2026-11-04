// Gravecrown Supabase Cloud Integration Client
// Profiles, Expeditions, Vault Cards & Cloud Save
// Supports offline fallback to localStorage if env vars are missing.

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = isConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export function getSupabaseStatus() {
  if (isConfigured) {
    return {
      connected: true,
      label: "Supabase Conectado",
      detail: `Servidor: ${new URL(supabaseUrl).hostname}`
    };
  }
  return {
    connected: false,
    label: "Modo Local (Offline)",
    detail: "Configura VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY en tu archivo .env"
  };
}

// Sincronizar perfil y heráldica del jugador
export async function syncProfileToSupabase(profileData) {
  if (!supabase) {
    return { ok: true, offline: true, data: profileData };
  }

  try {
    const { data, error } = await supabase
      .from("profiles")
      .upsert({
        user_id: profileData.id || "local_player",
        username: profileData.name || "Comandante Errante",
        avatar_data: profileData.custom || "",
        updated_at: new Date().toISOString(),
        stats: profileData.stats || {}
      })
      .select();

    if (error) throw error;
    return { ok: true, offline: false, data };
  } catch (err) {
    console.warn("Error al sincronizar con Supabase, usando guardado local:", err.message);
    return { ok: false, error: err.message, offline: true };
  }
}

// Cargar perfil desde la nube
export async function fetchProfileFromSupabase(userId = "local_player") {
  if (!supabase) return null;

  try {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("user_id", userId)
      .single();

    if (error && error.code !== "PGRST116") throw error;
    return data;
  } catch (err) {
    console.warn("No se pudo obtener el perfil de Supabase:", err.message);
    return null;
  }
}

// Registrar expedición completada o caída en combate
export async function logRunToSupabase(runSummary) {
  if (!supabase) return { ok: true, offline: true };

  try {
    const { data, error } = await supabase
      .from("expeditions")
      .insert({
        zone: runSummary.zone || 0,
        commander: runSummary.commander || "vael",
        victory: Boolean(runSummary.victory),
        gold_earned: runSummary.gold || 0,
        cards_gained: runSummary.cards || [],
        created_at: new Date().toISOString()
      });

    if (error) throw error;
    return { ok: true, offline: false, data };
  } catch (err) {
    console.warn("Fallo al registrar expedición en Supabase:", err.message);
    return { ok: false, error: err.message };
  }
}

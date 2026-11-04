// Gravecrown Profile & Heraldry View (Sección de Perfil del Comandante)
// Metaphor Medieval Aesthetic · Cotton, Cherry Red, Maroon & Noir Black
// Supabase Cloud Sync · Zero emojis (100% SVG vectors)

import { getSupabaseStatus, syncProfileToSupabase, fetchProfileFromSupabase } from "../supabase.js";
import { COMMANDERS } from "./metaphorCascade.js";

export function createMetaphorProfile(containerId, options = {}) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Profile State
  const defaultProfile = {
    name: "Comandante Errante",
    title: "Campeón del Bastión de Ceniza",
    rank: "Rango IV · Hereje Purificado",
    expeditions: 24,
    victories: 11,
    bossesSlain: 18,
    cardsDiscovered: "11 / 11",
    vaultCards: 14,
    avatarUrl: "/assets/commanders/vael.png",
    crest: "bastion"
  };

  let profile = { ...defaultProfile };
  try {
    const saved = localStorage.getItem("gravecrown_profile_data");
    if (saved) Object.assign(profile, JSON.parse(saved));
  } catch (e) {}

  let syncStatus = getSupabaseStatus();
  let isEditingName = false;

  function saveProfileData() {
    try {
      localStorage.setItem("gravecrown_profile_data", JSON.stringify(profile));
    } catch (e) {}
  }

  function render() {
    container.innerHTML = `
      <div class="profile-frame" role="region" aria-label="Perfil del Comandante">
        <!-- Astronomical & Cartographic Hairlines -->
        <div class="engraving-lines" aria-hidden="true">
          <div class="engraving-circle-1" style="width:380px;height:380px;top:-40px;right:-40px;"></div>
          <div class="engraving-horiz-line" style="bottom:70px;"></div>
        </div>

        <!-- Upper Banner -->
        <div class="profile-header-banner">
          <div class="profile-header-title">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="prof-svg"><polygon points="12,2 15,9 22,12 15,15 12,22 9,15 2,12 9,9"/></svg>
            HERÁLDICA & REGISTRO DEL COMANDANTE
          </div>
          <div class="supabase-status-pill ${syncStatus.connected ? 'is-online' : 'is-offline'}" title="${syncStatus.detail}">
            <span class="status-dot"></span>
            <span>${syncStatus.label}</span>
          </div>
        </div>

        <div class="profile-layout-grid">
          <!-- Left Column: Portrait & Heraldic Crest -->
          <div class="profile-portrait-panel">
            <div class="profile-avatar-frame">
              <img 
                src="${profile.avatarUrl}" 
                alt="${profile.name}" 
                class="profile-avatar-img"
                onerror="this.src='/assets/commanders/vael.png';"
              />
              <div class="profile-avatar-overlay"></div>
              <div class="profile-rank-tag">${profile.rank}</div>
            </div>

            <div class="profile-name-strip">
              ${isEditingName ? `
                <div class="profile-name-edit">
                  <input type="text" id="profNameInput" class="profile-input" value="${profile.name}" maxlength="24" />
                  <button class="profile-btn-sm" id="btnSaveName">GUARDAR</button>
                </div>
              ` : `
                <div class="profile-name-display">
                  <h3 class="profile-name-txt">${profile.name}</h3>
                  <button class="profile-btn-icon" id="btnEditName" title="Editar Nombre">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                  </button>
                </div>
              `}
              <div class="profile-title-txt">${profile.title}</div>
            </div>

            <div class="profile-actions-row">
              <label class="profile-action-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="prof-svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                CAMBIAR RETRATO
                <input type="file" id="profAvatarInput" accept="image/png, image/webp, image/jpeg" style="display:none;" />
              </label>
              <button class="profile-action-btn" id="btnSyncCloud">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="prof-svg"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
                SINCRONIZAR
              </button>
            </div>
          </div>

          <!-- Right Column: Stats & Records -->
          <div class="profile-stats-panel">
            <h4 class="profile-subheading">CRÓNICAS DE LA EXPEDICIÓN</h4>

            <div class="profile-stats-grid">
              <div class="stat-chiseled-box">
                <span class="stat-number">${profile.expeditions}</span>
                <span class="stat-label">EXPEDICIONES INICIADAS</span>
              </div>
              <div class="stat-chiseled-box">
                <span class="stat-number" style="color:var(--gold);">${profile.victories}</span>
                <span class="stat-label">VICTORIAS SOBRE EL VACÍO</span>
              </div>
              <div class="stat-chiseled-box">
                <span class="stat-number" style="color:var(--cherry-red);">${profile.bossesSlain}</span>
                <span class="stat-label">JEFES CALCINADOS</span>
              </div>
              <div class="stat-chiseled-box">
                <span class="stat-number">${profile.cardsDiscovered}</span>
                <span class="stat-label">GRIMORIO DESCUBIERTO</span>
              </div>
            </div>

            <!-- Heraldic Crest & Vow of Blood -->
            <div class="profile-vow-box">
              <div class="vow-crest-icon">
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M50 15 L80 30 L80 60 C80 75 50 90 50 90 C50 90 20 75 20 60 L20 30 Z" fill="rgba(129, 1, 0, 0.25)" stroke="var(--cherry-red)"/>
                  <path d="M50 25 L50 80 M35 45 L65 45" stroke="var(--cotton)"/>
                </svg>
              </div>
              <div class="vow-text-content">
                <div class="vow-title">VOTO DE SANGRE Y HIERRO</div>
                <p class="vow-desc">
                  "No hay descanso bajo la corona de ceniza. Cada caída es un registro en la lápida del reino; cada victoria, un latido robado a la muerte."
                </p>
              </div>
            </div>

            <!-- Cloud Sync Details -->
            <div class="profile-cloud-meta">
              <span>Nube Supabase: <strong>${syncStatus.label}</strong></span>
              <span>Último guardado: <span id="profLastSave">${new Date().toLocaleTimeString()}</span></span>
            </div>
          </div>
        </div>
      </div>
    `;

    // Event Listeners
    const editBtn = container.querySelector("#btnEditName");
    if (editBtn) {
      editBtn.addEventListener("click", () => {
        isEditingName = true;
        render();
      });
    }

    const saveNameBtn = container.querySelector("#btnSaveName");
    if (saveNameBtn) {
      saveNameBtn.addEventListener("click", () => {
        const inp = container.querySelector("#profNameInput");
        if (inp && inp.value.trim()) {
          profile.name = inp.value.trim();
          saveProfileData();
        }
        isEditingName = false;
        render();
      });
    }

    const avatarInp = container.querySelector("#profAvatarInput");
    if (avatarInp) {
      avatarInp.addEventListener("change", (e) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (ev) => {
            profile.avatarUrl = ev.target.result;
            saveProfileData();
            render();
          };
          reader.readAsDataURL(file);
        }
      });
    }

    const syncBtn = container.querySelector("#btnSyncCloud");
    if (syncBtn) {
      syncBtn.addEventListener("click", async () => {
        syncBtn.textContent = "SINCRONIZANDO...";
        const res = await syncProfileToSupabase(profile);
        syncStatus = getSupabaseStatus();
        render();
      });
    }
  }

  render();
}

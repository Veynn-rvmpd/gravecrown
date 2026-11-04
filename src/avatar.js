// Avatar: modo capas (estilo Picrew) si existe public/assets/avatar/manifest.json; si no, avatar SVG integrado.
export const SKIN = ["#d9b28c", "#c29b74", "#8c6543", "#543825", "#9e968d"];
export const HAIRC = ["#140f0c", "#3d2717", "#997d4c", "#6b1414", "#b0aba4"];
export const ARMC = ["#261e19", "#1e2933", "#381a1a", "#1d2e22", "#3b3b40"];
export const HS = ["none", "short", "long", "hood", "mohawk", "bun"];
export const ACC = ["none", "crown", "scar", "eyepatch", "horns", "mask"];
export const EYES = ["stern", "narrow", "ember"];

let manifest = null;
export const getManifest = () => manifest;

export async function loadManifest() {
  try {
    const r = await fetch("/assets/avatar/manifest.json");
    if (r.ok) {
      const j = await r.json();
      if (j && Array.isArray(j.layers)) manifest = j;
    }
  } catch {}
  return manifest;
}

export function avatarHTML(a = {}, w = 120) {
  const h = Math.round(w * 1.2);
  if (a.custom) {
    return `<img class="avimg" src="${a.custom}" width="${w}" height="${h}" alt="avatar" style="object-fit:cover;border-radius:4px;">`;
  }
  if (manifest) {
    return `
      <div class="avlayers" style="width:${w}px;height:${h}px">
        ${manifest.layers.map((l) => {
          const i = (a.layers && a.layers[l.id]) ?? (l.default ?? 1);
          return i > 0 ? `<img src="/assets/avatar/${l.id}/${i}.png" alt="" onerror="this.remove()">` : "";
        }).join("")}
      </div>
    `;
  }

  const skin = SKIN[a.skin] || SKIN[0];
  const hair = HAIRC[a.hairColor] || HAIRC[0];
  const arm = ARMC[a.armor] || ARMC[0];
  const hs = a.hairStyle || 0;
  const ey = a.eyes || 0;
  const acc = a.acc || 0;

  // Grimdark eyes: narrow determined slits with intensity
  const eyeColor = ey === 2 ? "#D4AF37" : ey === 1 ? "#D91B24" : "#1A1512";
  const eyeGlow = ey === 2 ? `<circle cx="41" cy="48" r="4" fill="#D4AF37" opacity="0.3"/><circle cx="59" cy="48" r="4" fill="#D4AF37" opacity="0.3"/>` : "";

  return `
    <svg width="${w}" height="${h}" viewBox="0 0 100 120" role="img" aria-label="avatar" class="heraldic-avatar">
      <defs>
        <radialGradient id="avBgGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#2B1F17" stop-opacity="0.8"/>
          <stop offset="100%" stop-color="#0D0B09" stop-opacity="1"/>
        </radialGradient>
      </defs>
      <!-- Dark Heraldic Backdrop -->
      <rect width="100" height="120" rx="6" fill="url(#avBgGlow)" />
      
      <!-- Gothic Armor Shoulders & Gorget -->
      <path d="M10 120 L18 85 L35 72 L50 80 L65 72 L82 85 L90 120 Z" fill="${arm}" stroke="#000" stroke-width="1.5"/>
      <path d="M28 85 L35 72 L65 72 L72 85 Z" fill="#140E0E" stroke="#C59B27" stroke-width="1"/>
      <line x1="50" y1="80" x2="50" y2="120" stroke="#C59B27" stroke-width="1.5" stroke-dasharray="3 3"/>

      <!-- Neck & Chiseled Jawline -->
      <polygon points="43,62 57,62 54,76 46,76" fill="${skin}" opacity="0.85"/>
      <polygon points="32,40 50,68 68,40 68,30 32,30" fill="${skin}"/>
      <polygon points="38,58 50,68 62,58" fill="#000" opacity="0.25"/>

      <!-- Hood/Cowl Option -->
      ${hs === 3 ? `<path d="M24 50 Q22 10 50 8 Q78 10 76 50 L72 75 L28 75 Z" fill="${arm}" stroke="#000" stroke-width="2"/>` : ""}

      <!-- Hair styles (Sharp Gothic strands) -->
      ${hs === 2 ? `<path d="M28 35 Q22 80 32 95 L40 70 M72 35 Q78 80 68 95 L60 70" stroke="${hair}" stroke-width="6" fill="none"/>` : ""}
      ${hs === 1 || hs === 2 ? `<path d="M30 36 Q32 18 50 16 Q68 18 70 36 Q58 26 50 26 Q42 26 30 36 Z" fill="${hair}"/>` : ""}
      ${hs === 4 ? `<polygon points="45,30 50,4 55,30" fill="${hair}" stroke="#000"/>` : ""}
      ${hs === 5 ? `<circle cx="50" cy="14" r="8" fill="${hair}" stroke="#000"/>` : ""}

      <!-- Heavy Brow Shadow & Eye Sockets -->
      <path d="M36 43 L48 45 L50 47 L52 45 L64 43" stroke="#000" stroke-width="2.5" fill="none"/>
      ${eyeGlow}
      <line x1="38" y1="48" x2="44" y2="48" stroke="${eyeColor}" stroke-width="2" stroke-linecap="round"/>
      <line x1="56" y1="48" x2="62" y2="48" stroke="${eyeColor}" stroke-width="2" stroke-linecap="round"/>

      <!-- Nose Bridge & Grim Mouth Line -->
      <path d="M50 45 L48 55 L52 56" stroke="#000" stroke-width="1.5" fill="none" opacity="0.7"/>
      <line x1="45" y1="62" x2="55" y2="62" stroke="#221814" stroke-width="2" stroke-linecap="round"/>

      <!-- Accessories -->
      ${acc === 1 ? `
        <!-- Iron/Gold Crown -->
        <polygon points="30,26 38,10 44,20 50,6 56,20 62,10 70,26" fill="#C59B27" stroke="#111" stroke-width="1.5"/>
        <circle cx="50" cy="18" r="2.5" fill="#D91B24"/>
      ` : ""}
      ${acc === 2 ? `
        <!-- Grim Battle Scar across left eye -->
        <path d="M57 38 L62 58" stroke="#8C1D1D" stroke-width="2.5" stroke-linecap="round"/>
      ` : ""}
      ${acc === 3 ? `
        <!-- Hardened Leather Eyepatch -->
        <polygon points="35,43 45,43 43,53 37,53" fill="#140E0E"/>
        <line x1="28" y1="40" x2="68" y2="52" stroke="#140E0E" stroke-width="1.5"/>
      ` : ""}
      ${acc === 4 ? `
        <!-- Beast Horns -->
        <path d="M32 26 Q18 8 26 0 Q32 14 38 22" fill="#E8E0CC" stroke="#111" stroke-width="1.5"/>
        <path d="M68 26 Q82 8 74 0 Q68 14 62 22" fill="#E8E0CC" stroke="#111" stroke-width="1.5"/>
      ` : ""}
      ${acc === 5 ? `
        <!-- Iron Inquisitor Lower Face Mask -->
        <path d="M34 54 L50 68 L66 54 L64 74 L36 74 Z" fill="#2B3238" stroke="#C59B27" stroke-width="1.5"/>
        <line x1="42" y1="64" x2="58" y2="64" stroke="#111" stroke-width="1.5"/>
      ` : ""}
    </svg>
  `;
}

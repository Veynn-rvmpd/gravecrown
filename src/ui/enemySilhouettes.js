// Procedural Grimdark SVG Silhouettes for Gravecrown Enemies
// Atlus Persona / Metaphor Painterly Dark Fantasy aesthetic
// Guaranteed rendering even when external images are absent or failing

export function getEnemySilhouette(key) {
  const k = key === "tutorial" ? "raider" : key;

  switch (k) {
    case "cinder-hound":
      return `
        <svg viewBox="0 0 300 360" fill="none" class="enemy-svg" style="width:100%;height:100%;">
          <defs>
            <linearGradient id="houndGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#D91B24" stop-opacity="0.9"/>
              <stop offset="40%" stop-color="#8C2C14" stop-opacity="0.95"/>
              <stop offset="100%" stop-color="#140E0E" stop-opacity="1"/>
            </linearGradient>
            <radialGradient id="houndEmber" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#FFDD55"/>
              <stop offset="60%" stop-color="#D91B24"/>
              <stop offset="100%" stop-color="transparent"/>
            </radialGradient>
          </defs>
          <!-- Feral Hound Musculature & Spines -->
          <path d="M40 320 L70 240 Q100 180 150 160 Q180 110 220 100 Q260 90 280 120 Q290 145 270 165 Q230 185 220 220 L240 320 L200 320 L180 250 Q150 250 120 270 L100 320 Z" fill="url(#houndGrad)"/>
          <!-- Glowing Fiery Fangs & Maw -->
          <path d="M230 130 L275 145 L245 160 Z" fill="#FFE57F"/>
          <path d="M250 140 L260 150 L240 152 Z" fill="#D91B24"/>
          <!-- Burning Eyes -->
          <circle cx="235" cy="115" r="5" fill="#FFE57F"/>
          <circle cx="235" cy="115" r="10" fill="url(#houndEmber)" opacity="0.6"/>
          <!-- Back Spikes -->
          <path d="M140 160 L130 120 L160 155 M170 140 L165 95 L190 135 M195 120 L205 80 L215 115" stroke="#E8E0CC" stroke-width="4" stroke-linecap="round"/>
        </svg>
      `;

    case "specter":
      return `
        <svg viewBox="0 0 300 360" fill="none" class="enemy-svg" style="width:100%;height:100%;">
          <defs>
            <linearGradient id="specGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#47A4A9" stop-opacity="0.85"/>
              <stop offset="50%" stop-color="#141E24" stop-opacity="0.95"/>
              <stop offset="100%" stop-color="#0A0909" stop-opacity="1"/>
            </linearGradient>
            <radialGradient id="soulGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#80E5FF"/>
              <stop offset="70%" stop-color="#1B5154"/>
              <stop offset="100%" stop-color="transparent"/>
            </radialGradient>
          </defs>
          <!-- Floating Tattered Cowl & Shroud -->
          <path d="M60 340 Q90 260 80 180 Q80 80 150 50 Q220 80 220 180 Q210 260 240 340 Q190 320 150 335 Q110 320 60 340 Z" fill="url(#specGrad)"/>
          <!-- Hollow Visage & Spectral Eye Orbs -->
          <ellipse cx="150" cy="120" rx="30" ry="40" fill="#0A0909"/>
          <circle cx="138" cy="115" r="4" fill="#80E5FF"/>
          <circle cx="162" cy="115" r="4" fill="#80E5FF"/>
          <circle cx="150" cy="115" r="22" fill="url(#soulGlow)" opacity="0.5"/>
          <!-- Floating Grave Chains -->
          <path d="M100 220 Q90 270 110 310 M200 220 Q210 270 190 310" stroke="#C59B27" stroke-width="3" stroke-dasharray="6 4"/>
        </svg>
      `;

    case "tomb-guardian":
      return `
        <svg viewBox="0 0 300 360" fill="none" class="enemy-svg" style="width:100%;height:100%;">
          <defs>
            <linearGradient id="tombGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#6E7D87" stop-opacity="0.9"/>
              <stop offset="60%" stop-color="#2A333A" stop-opacity="0.95"/>
              <stop offset="100%" stop-color="#0F1418" stop-opacity="1"/>
            </linearGradient>
          </defs>
          <!-- Colossal Granite Shoulders & Helm -->
          <path d="M50 330 L50 200 Q50 110 150 80 Q250 110 250 200 L250 330 Z" fill="url(#tombGrad)"/>
          <!-- Massive Stone Slab Tower Shield -->
          <rect x="75" y="130" width="150" height="190" rx="6" fill="#1C2329" stroke="#9EADB8" stroke-width="5"/>
          <!-- Carved Runes on Shield -->
          <path d="M150 150 L150 290 M110 200 L190 200 M120 250 L180 250" stroke="#C59B27" stroke-width="4"/>
          <!-- Slit Eyes in Helmet -->
          <rect x="125" y="95" width="50" height="8" rx="2" fill="#D6A838"/>
        </svg>
      `;

    case "plague-cultist":
      return `
        <svg viewBox="0 0 300 360" fill="none" class="enemy-svg" style="width:100%;height:100%;">
          <defs>
            <linearGradient id="cultGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#556B2F" stop-opacity="0.9"/>
              <stop offset="50%" stop-color="#2D3B16" stop-opacity="0.95"/>
              <stop offset="100%" stop-color="#0A0909" stop-opacity="1"/>
            </linearGradient>
          </defs>
          <!-- Hooded Robe & Leather Cape -->
          <path d="M70 330 Q80 200 110 140 Q130 60 170 60 Q210 60 220 140 Q240 200 250 330 Z" fill="url(#cultGrad)"/>
          <!-- Raven Beak Mask -->
          <path d="M170 100 Q150 130 110 160 Q150 155 175 140 Z" fill="#E8E0CC" stroke="#000" stroke-width="2"/>
          <!-- Goggles -->
          <circle cx="165" cy="110" r="10" fill="#D6A838" stroke="#111" stroke-width="3"/>
          <!-- Bubbling Plague Vial in Hand -->
          <rect x="210" y="220" width="22" height="36" rx="4" fill="#3E7B44" stroke="#D6A838" stroke-width="2"/>
          <circle cx="221" cy="235" r="4" fill="#99FF66" opacity="0.8"/>
        </svg>
      `;

    case "fearsome":
      return `
        <svg viewBox="0 0 300 360" fill="none" class="enemy-svg" style="width:100%;height:100%;">
          <defs>
            <linearGradient id="fearGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#B22222" stop-opacity="0.9"/>
              <stop offset="40%" stop-color="#4A0E0E" stop-opacity="0.95"/>
              <stop offset="100%" stop-color="#0A0909" stop-opacity="1"/>
            </linearGradient>
          </defs>
          <!-- Hulking Beast Torso & Horns -->
          <path d="M40 330 Q60 180 100 140 L80 60 Q130 90 150 120 Q170 90 220 60 L200 140 Q240 180 260 330 Z" fill="url(#fearGrad)"/>
          <!-- Broken Iron Shackles -->
          <rect x="45" y="240" width="35" height="18" fill="#5A5A60" stroke="#C59B27" stroke-width="2"/>
          <rect x="220" y="240" width="35" height="18" fill="#5A5A60" stroke="#C59B27" stroke-width="2"/>
          <path d="M30 250 L45 250 M255 250 L270 250" stroke="#C59B27" stroke-width="3"/>
          <!-- Red Glowing Eyes & Fangs -->
          <polygon points="135,145 145,150 135,155" fill="#FFE57F"/>
          <polygon points="165,145 155,150 165,155" fill="#FFE57F"/>
          <path d="M125 180 L140 195 L150 185 L160 195 L175 180 Z" fill="#E8E0CC"/>
        </svg>
      `;

    case "ash-tyrant":
      return `
        <svg viewBox="0 0 300 360" fill="none" class="enemy-svg" style="width:100%;height:100%;">
          <defs>
            <linearGradient id="tyrantGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#C59B27" stop-opacity="0.85"/>
              <stop offset="35%" stop-color="#8C2C14" stop-opacity="0.95"/>
              <stop offset="100%" stop-color="#0A0909" stop-opacity="1"/>
            </linearGradient>
          </defs>
          <!-- Warlord Plate Armor & Spiked Pauldrons -->
          <path d="M50 330 L40 210 Q40 140 110 110 L110 50 L150 80 L190 50 L190 110 Q260 140 260 210 L250 330 Z" fill="url(#tyrantGrad)"/>
          <!-- Horned Crown of Ash -->
          <path d="M110 70 L90 20 L130 50 L150 10 L170 50 L210 20 L190 70 Z" fill="#D6A838" stroke="#000" stroke-width="2"/>
          <!-- Glowing Burning Visor -->
          <path d="M125 125 L175 125" stroke="#FFE57F" stroke-width="6" stroke-linecap="round"/>
          <circle cx="150" cy="125" r="14" fill="#D91B24" opacity="0.5" filter="blur(4px)"/>
          <!-- Broadsword Hilt Behind Back -->
          <path d="M150 20 L150 0 M135 10 L165 10" stroke="#E8E0CC" stroke-width="4"/>
        </svg>
      `;

    case "crypt-queen":
      return `
        <svg viewBox="0 0 300 360" fill="none" class="enemy-svg" style="width:100%;height:100%;">
          <defs>
            <linearGradient id="queenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#9E1946" stop-opacity="0.85"/>
              <stop offset="45%" stop-color="#4A0B22" stop-opacity="0.95"/>
              <stop offset="100%" stop-color="#0A0909" stop-opacity="1"/>
            </linearGradient>
          </defs>
          <!-- Royal Shroud & Flowing Mourning Gown -->
          <path d="M70 330 Q80 220 100 160 Q120 70 150 70 Q180 70 200 160 Q220 220 230 330 Z" fill="url(#queenGrad)"/>
          <!-- Skeletal Tiara with Blood Gems -->
          <path d="M120 75 L135 35 L150 55 L165 35 L180 75 Z" fill="#D6A838" stroke="#111" stroke-width="2"/>
          <circle cx="150" cy="55" r="4" fill="#D91B24"/>
          <!-- Spectral Veil Face -->
          <ellipse cx="150" cy="115" rx="24" ry="30" fill="#1C1314"/>
          <circle cx="140" cy="110" r="3" fill="#FF4D6D"/>
          <circle cx="160" cy="110" r="3" fill="#FF4D6D"/>
        </svg>
      `;

    case "crown-wraith":
      return `
        <svg viewBox="0 0 300 360" fill="none" class="enemy-svg" style="width:100%;height:100%;">
          <defs>
            <linearGradient id="wraithGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#844685" stop-opacity="0.9"/>
              <stop offset="50%" stop-color="#2D1130" stop-opacity="0.95"/>
              <stop offset="100%" stop-color="#0A0909" stop-opacity="1"/>
            </linearGradient>
            <radialGradient id="voidCore" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#D4AF37"/>
              <stop offset="50%" stop-color="#844685"/>
              <stop offset="100%" stop-color="transparent"/>
            </radialGradient>
          </defs>
          <!-- Eldritch Swirling Shadow Void -->
          <path d="M50 330 Q90 200 80 120 Q120 40 150 40 Q180 40 220 120 Q210 200 250 330 Q150 280 50 330 Z" fill="url(#wraithGrad)"/>
          <!-- Shattered Floating Crown Shards -->
          <polygon points="120,50 140,25 130,60" fill="#D6A838"/>
          <polygon points="160,50 180,25 170,60" fill="#D6A838"/>
          <polygon points="140,20 150,5 160,20 150,30" fill="#D6A838"/>
          <!-- Glowing Singularity Core -->
          <circle cx="150" cy="130" r="28" fill="url(#voidCore)"/>
          <circle cx="150" cy="130" r="8" fill="#FFF"/>
        </svg>
      `;

    case "raider":
    default:
      return `
        <svg viewBox="0 0 300 360" fill="none" class="enemy-svg" style="width:100%;height:100%;">
          <defs>
            <linearGradient id="raiderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#8B3A2B" stop-opacity="0.85"/>
              <stop offset="40%" stop-color="#421C16" stop-opacity="0.95"/>
              <stop offset="100%" stop-color="#0A0909" stop-opacity="1"/>
            </linearGradient>
          </defs>
          <!-- Scavenger Tattered Cloak & Pauldrons -->
          <path d="M60 330 L70 210 Q80 130 150 90 Q220 130 230 210 L240 330 Z" fill="url(#raiderGrad)"/>
          <!-- Spiked Skull Helmet -->
          <path d="M120 120 Q120 70 150 70 Q180 70 180 120 L170 150 L130 150 Z" fill="#C4B8A5" stroke="#222" stroke-width="2"/>
          <circle cx="138" cy="110" r="5" fill="#140E0E"/>
          <circle cx="162" cy="110" r="5" fill="#140E0E"/>
          <!-- Horn Spikes -->
          <path d="M120 85 L95 65 L125 75 M180 85 L205 65 L175 75" stroke="#E8E0CC" stroke-width="4" stroke-linecap="round"/>
          <!-- Spiked Club Weapon -->
          <path d="M210 280 L250 110" stroke="#7A6553" stroke-width="8" stroke-linecap="round"/>
          <circle cx="250" cy="110" r="14" fill="#524339" stroke="#C59B27" stroke-width="3"/>
          <path d="M245 100 L240 90 M255 100 L265 90 M260 115 L272 120" stroke="#D6A838" stroke-width="3" stroke-linecap="round"/>
        </svg>
      `;
  }
}

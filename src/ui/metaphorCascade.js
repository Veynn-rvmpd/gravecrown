// Gravecrown Cascading Kinetic Menu Component
// Metaphor Medieval Grimdark Painterly Fantasy
// High-legibility Metal Gothic typography · Title Case · Diffused crimson oil wash
// Interactive Commander Artwork switcher · Zero emojis (100% SVG vectors)

export const COMMANDERS = [
  {
    id: "corina",
    name: "Corina la Rosa Desterrada",
    title: "Princesa Exiliada de Aethelgard",
    role: "Ropera & Danza Floral · Pétalos Letales",
    lore: "Despojada de su corona, aprendió el arte del acero con las Espinas Carmesí. Sus estocadas florecen en heridas mortales.",
    art: "/assets/commanders/corina.png",
    accentColor: "#D91B24",
    goldValue: "12,450",
    corruption: "0 / 10",
    silhouette: "duelist"
  },
  {
    id: "lysander",
    name: "Lysander el León de la Guardia",
    title: "Capitán de la Falange de Dragones",
    role: "Lanza de Guerra & Salto con Pica · Impulso Imparable",
    lore: "Último superviviente de la guardia real. Su lanza penetra defensas pesadas con la furia de una tormenta de asedio.",
    art: "/assets/commanders/lysander.png",
    accentColor: "#3B6978",
    goldValue: "9,800",
    corruption: "0 / 10",
    silhouette: "dragoon"
  },
  {
    id: "faye",
    name: "Faye la Cazadora Espectral",
    title: "Ojo de los Pinos Llorones",
    role: "Arco Compuesto & Flechas Fantasma · Foco Letal",
    lore: "El silencio previo a la muerte. Sus disparos lunares atraviesan piedra y armadura sin romper el silencio.",
    art: "/assets/commanders/faye.png",
    accentColor: "#4E878C",
    goldValue: "11,200",
    corruption: "0 / 10",
    silhouette: "archer"
  },
  {
    id: "valerius",
    name: "Valerius el Inquisidor Quebrado",
    title: "Ejecutor de la Alabarda Consagrada",
    role: "Alabarda Pesada & Sentencia Sagrada · Fervor Inquebrantable",
    lore: "Destrozó el altar tras descubrir los sacrificios de los sacerdotes. Purga a los impíos a golpe de hierro bendito.",
    art: "/assets/commanders/paladin.png",
    accentColor: "#D6A838",
    goldValue: "14,600",
    corruption: "0 / 10",
    silhouette: "paladin"
  },
  {
    id: "elora",
    name: "Elora la Druida Marchita",
    title: "Guardiana del Bosque Muerto",
    role: "Zarzas Vivientes & Esporas Tóxicas · Savia Corrupta",
    lore: "Fusionó su carne con raíces y corteza podrida para preservar el latido del bosque primigenio.",
    art: "/assets/commanders/druid.png",
    accentColor: "#3E7B44",
    goldValue: "8,900",
    corruption: "0 / 10",
    silhouette: "druid"
  },
  {
    id: "carmilla",
    name: "Carmilla la Dama Carmesí",
    title: "Condesa de las Agujas de Obsidiana",
    role: "Sifón de Sangre & Velo de Niebla · Inmortalidad Nocturna",
    lore: "Despierta tras siglos en criptas subterráneas. Transmuta la vitalidad de sus víctimas en poder oscuro.",
    art: "/assets/commanders/vampire.png",
    accentColor: "#9E1946",
    goldValue: "18,400",
    corruption: "0 / 10",
    silhouette: "vampire"
  },
  {
    id: "kaelen",
    name: "Kaelen el Bardo del Réquiem",
    title: "Virtuoso de la Corte Imperial",
    role: "Violín Espectral & Disonancia Sónica · Acordes del Réquiem",
    lore: "Cuerdas de acero templado y lamentos de difuntos. Sus sonatas resquebrajan la mente y el acero enemigo.",
    art: "/assets/commanders/bard.png",
    accentColor: "#844685",
    goldValue: "10,500",
    corruption: "0 / 10",
    silhouette: "bard"
  },
  {
    id: "malakor",
    name: "Malakor el Brujo del Abismo",
    title: "Heraldo del Vacío Exterior",
    role: "Pacto Ocular & Fuego Sombrío · Cosecha de Almas",
    lore: "Sacrificó su ojo para sellar un pacto con titanes del abismo. Desata llamas umbrías que devoran almas.",
    art: "/assets/commanders/warlock.png",
    accentColor: "#6B2D5C",
    goldValue: "13,200",
    corruption: "0 / 10",
    silhouette: "warlock"
  },
  {
    id: "roland",
    name: "Roland el Cruzado Inquebrantable",
    title: "Caballero del Santo Sepulcro & Castigador de Herejes",
    role: "Mandoble Sagrado & Escudo de Fe · Celo Devoto",
    lore: "Guardián de los últimos votos de la Orden de la Cruzada. Purifica las tierras profanadas con hierro bendito y devoción ciega.",
    art: "/assets/commanders/roland.png",
    accentColor: "#C59B27",
    goldValue: "15,800",
    corruption: "0 / 10",
    silhouette: "crusader"
  }
];

export function createMetaphorMenu(containerId, options = {}) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const defaultItems = [
    { id: "expedition", title: "Expedición", sub: "Adentrarse en las ruinas y combatir", scale: "sm" },
    { id: "collection", title: "Colección", sub: "Grimorio de cartas descubiertas y reliquias", scale: "sm" },
    { id: "skills", title: "Habilidades", sub: "Árbol de técnicas y talentos del comandante", scale: "lg", active: true },
    { id: "pouch", title: "Zurrón", sub: "Reliquias sagradas, tónicos y ungüentos", scale: "md" },
    { id: "bestiary", title: "Bestiario", sub: "Análisis de enemigos, debilidades y jefes", scale: "sm" },
    { id: "art", title: "Ilustraciones", sub: "Galería de grabados y lienzos de zona", scale: "sm" },
    { id: "lore", title: "Anales", sub: "Crónicas del reino caído y recuerdos", scale: "sm" },
    { id: "account", title: "Heráldica", sub: "Blasón, efigie y registro del comandante", scale: "sm" },
    { id: "settings", title: "Ajustes", sub: "Accesibilidad, sonido y guardado local", scale: "sm" }
  ];

  const items = options.items || defaultItems;
  let activeMenuId = options.initialActive || "skills";
  let activeCommanderId = options.initialCommander || "corina";
  let isDrawerOpen = false;

  // Custom user-uploaded artworks cached in memory and localStorage
  const customArtworks = {};
  try {
    const saved = localStorage.getItem("gravecrown_custom_artworks");
    if (saved) Object.assign(customArtworks, JSON.parse(saved));
  } catch (e) {
    // LocalStorage unavailable
  }

  function getActiveCommander() {
    return COMMANDERS.find((c) => c.id === activeCommanderId) || COMMANDERS[0];
  }

  function getCommanderArtSrc(cmd) {
    if (customArtworks[cmd.id] && typeof customArtworks[cmd.id] === 'string' && customArtworks[cmd.id].trim()) {
      return customArtworks[cmd.id];
    }
    const p = cmd.art || `assets/commanders/${cmd.id}.png`;
    return p.startsWith("/") ? p.slice(1) : p;
  }

  function renderProceduralSilhouette(cmd) {
    if (cmd.silhouette === "necromancer") {
      return `
        <svg viewBox="0 0 400 600" fill="none" style="width:100%;height:100%;">
          <defs>
            <linearGradient id="necroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#9E4BD6" stop-opacity="0.85"/>
              <stop offset="40%" stop-color="#551D78" stop-opacity="0.9"/>
              <stop offset="100%" stop-color="#0A0909" stop-opacity="1"/>
            </linearGradient>
          </defs>
          <!-- Shroud & Skull-Adorned Cowl -->
          <path d="M140 600 L120 400 Q110 260 210 180 Q250 140 280 60 Q300 20 340 30 Q330 90 320 180 Q310 320 330 450 L350 600 Z" fill="url(#necroGrad)"/>
          <!-- Spectral Soul Lantern Hanging from Chains -->
          <circle cx="210" cy="340" r="28" fill="#B36BFF" opacity="0.4" filter="blur(8px)"/>
          <path d="M190 320 L230 320 L220 370 L200 370 Z" fill="#241230" stroke="#D6A838" stroke-width="2"/>
          <path d="M210 240 L210 320" stroke="#8E7835" stroke-width="2" stroke-dasharray="3 3"/>
          <circle cx="210" cy="345" r="8" fill="#E8BFFF"/>
          <!-- Bone Antler Crown -->
          <path d="M250 120 Q230 60 200 40 M270 110 Q280 40 320 10 M285 115 Q330 70 360 50" stroke="#E6DED3" stroke-width="3" stroke-linecap="round"/>
        </svg>
      `;
    }

    if (cmd.silhouette === "duelist") {
      return `
        <svg viewBox="0 0 400 600" fill="none" style="width:100%;height:100%;">
          <defs>
            <linearGradient id="duelistGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#E68A2E" stop-opacity="0.85"/>
              <stop offset="40%" stop-color="#8C2C14" stop-opacity="0.9"/>
              <stop offset="100%" stop-color="#0A0909" stop-opacity="1"/>
            </linearGradient>
          </defs>
          <!-- Dynamic High-Collar Duelist Mantle -->
          <path d="M150 600 L130 410 Q140 280 220 220 Q260 170 290 80 Q330 30 350 70 Q320 140 320 260 Q320 390 360 600 Z" fill="url(#duelistGrad)"/>
          <!-- Vorpal Greatblade with Blood Runes -->
          <path d="M160 550 L310 110 L325 115 L175 555 Z" fill="#E6DED3" stroke="#D91B24" stroke-width="2"/>
          <circle cx="317" cy="112" r="5" fill="#D91B24"/>
          <!-- Flowing Crimson Scarf -->
          <path d="M260 160 Q180 200 130 280 Q180 250 250 200 Z" fill="#D91B24" opacity="0.9"/>
        </svg>
      `;
    }

    if (cmd.silhouette === "alchemist") {
      return `
        <svg viewBox="0 0 400 600" fill="none" style="width:100%;height:100%;">
          <defs>
            <linearGradient id="alchGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#3FA8AF" stop-opacity="0.85"/>
              <stop offset="40%" stop-color="#1B5154" stop-opacity="0.9"/>
              <stop offset="100%" stop-color="#0A0909" stop-opacity="1"/>
            </linearGradient>
          </defs>
          <!-- Alchemist Robe & Cowl -->
          <path d="M130 600 L120 420 Q120 270 210 200 Q260 150 290 90 Q340 50 360 90 Q330 170 320 290 Q310 410 350 600 Z" fill="url(#alchGrad)"/>
          <!-- Swirling Alchemical Flasks -->
          <circle cx="180" cy="380" r="16" fill="#D6A838" opacity="0.85"/>
          <circle cx="215" cy="410" r="14" fill="#D91B24" opacity="0.85"/>
          <circle cx="180" cy="380" r="26" fill="#D6A838" opacity="0.3" filter="blur(6px)"/>
          <!-- Ember Trail -->
          <circle cx="270" cy="190" r="4" fill="#FFF"/>
          <circle cx="290" cy="140" r="3" fill="#D6A838"/>
          <circle cx="310" cy="170" r="5" fill="#D91B24"/>
        </svg>
      `;
    }

    if (cmd.silhouette === "crusader") {
      return `
        <svg viewBox="0 0 400 600" fill="none" style="width:100%;height:100%;">
          <defs>
            <linearGradient id="crusaderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#D4AF37" stop-opacity="0.85"/>
              <stop offset="35%" stop-color="#8B2500" stop-opacity="0.9"/>
              <stop offset="70%" stop-color="#1A1815" stop-opacity="0.95"/>
              <stop offset="100%" stop-color="#0A0909" stop-opacity="1"/>
            </linearGradient>
            <linearGradient id="crossGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#FFFFFF"/>
              <stop offset="100%" stop-color="#D91B24"/>
            </linearGradient>
          </defs>
          <!-- Heavy Crusader Greathelm & Plate Shoulders -->
          <path d="M120 600 L110 400 Q105 280 180 230 Q220 180 250 110 Q280 40 340 30 Q365 40 375 70 Q350 130 330 220 Q310 320 340 430 L370 600 Z" fill="url(#crusaderGrad)"/>
          <!-- Great Helm Cross Slit -->
          <path d="M290 85 L350 85 M320 60 L320 120" stroke="#FFFFFF" stroke-width="4" stroke-linecap="square"/>
          <!-- White & Red Tabard with Holy Cross -->
          <path d="M170 340 Q220 300 270 310 L260 520 Q210 540 160 510 Z" fill="#E8E0CC" opacity="0.9"/>
          <path d="M205 370 L225 370 L225 470 L205 470 Z" fill="url(#crossGrad)"/>
          <path d="M185 400 L245 400 L245 420 L185 420 Z" fill="url(#crossGrad)"/>
          <!-- Massive Two-Handed Greatsword -->
          <path d="M140 580 L290 140 L305 145 L155 585 Z" fill="#D6D6D6" stroke="#C59B27" stroke-width="2"/>
          <path d="M260 170 L330 190" stroke="#C59B27" stroke-width="5" stroke-linecap="round"/>
        </svg>
      `;
    }

    // Default: Vael (Bastion Knight)
    return `
      <svg viewBox="0 0 400 600" fill="none" style="width:100%;height:100%;">
        <defs>
          <linearGradient id="knightGradVael" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#47A4A9" stop-opacity="0.85"/>
            <stop offset="35%" stop-color="#2C6B6F" stop-opacity="0.9"/>
            <stop offset="70%" stop-color="#141E24" stop-opacity="0.95"/>
            <stop offset="100%" stop-color="#0A0909" stop-opacity="1"/>
          </linearGradient>
          <linearGradient id="crestGradVael" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#D91B24"/>
            <stop offset="100%" stop-color="#D6A838"/>
          </linearGradient>
        </defs>
        <!-- Heavy Knight Plate & Bastion Pauldron -->
        <path d="M120 600 L110 420 Q105 320 180 250 Q230 200 270 120 Q310 40 370 20 Q385 15 395 30 Q360 80 340 140 Q310 230 330 330 Q350 420 380 600 Z" fill="url(#knightGradVael)"/>
        <!-- Knight Crest & Golden Filigree -->
        <path d="M260 130 Q330 70 380 30 Q350 100 320 170 Q280 150 260 130 Z" fill="url(#crestGradVael)"/>
        <!-- Crimson Tabard -->
        <path d="M160 380 Q190 320 250 310 Q220 390 190 460 Z" fill="#D91B24" opacity="0.85"/>
        <path d="M220 260 Q270 240 290 190 Q295 240 270 280 Z" fill="#D6A838" opacity="0.9"/>
        <!-- Glowing Visor Slit -->
        <path d="M270 120 Q310 40 370 20" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
      </svg>
    `;
  }

  function render() {
    const cmd = getActiveCommander();
    const artSrc = getCommanderArtSrc(cmd);

    container.innerHTML = `
      <div class="metaphor-showcase" role="region" aria-label="Menú principal táctico de Gravecrown">
        <!-- Top Integrated Utility Bar (Replaces legacy #bar) -->
        <div class="metaphor-topbar">
          <div class="metaphor-topbar__left">
            <span class="metaphor-title-badge">GRAVECROWN // ROSTER TÁCTICO</span>
          </div>
          <div class="metaphor-topbar__right">
            <button id="metaAudioBtn" class="meta-util-btn" type="button" title="Alternar audio">
              ${options.muted ? '🔇 MUTE' : '🔊 AUDIO'}
            </button>
            <div class="meta-lang-picker">
              <button class="meta-lang-btn ${options.lang === 'es' ? 'active' : ''}" data-lang="es">ES</button>
              <button class="meta-lang-btn ${options.lang === 'en' ? 'active' : ''}" data-lang="en">EN</button>
              <button class="meta-lang-btn ${options.lang === 'eu' ? 'active' : ''}" data-lang="eu">EU</button>
            </div>
            ${options.account ? `
              <button id="metaProfileBtn" class="meta-profile-pill" type="button" title="Heráldica y perfil del comandante">
                <span class="meta-profile-av">${options.avatarHTML ? options.avatarHTML(options.account, 24) : ''}</span>
                <span class="meta-profile-name">${options.account.name || 'Sin nombre'}</span>
              </button>
            ` : ''}
          </div>
        </div>

        <!-- Fine Astronomical & Cartographic Hairline Engravings -->
        <div class="engraving-lines" aria-hidden="true">
          <div class="engraving-circle-1"></div>
          <div class="engraving-circle-2"></div>
          <div class="engraving-horiz-line"></div>
          <div class="engraving-coords">ZONA I // CAMPOS DE CENIZA // NODO 07/45</div>
        </div>

        <!-- Interactive Commander Switcher Badge (Click artwork to trigger) -->
        <div class="metaphor-artwork-badge" id="btnToggleCommander" role="button" tabindex="0" title="Haz clic para cambiar de comandante o subir tu ilustración">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
            <path d="M16 11l2 2 4-4"/>
          </svg>
          <span>CAMBIAR PERSONAJE</span>
        </div>

        <!-- Active Commander Summary Display -->
        <div class="metaphor-commander-details" aria-hidden="true">
          <div class="metaphor-commander-name">${cmd.name}</div>
          <div class="metaphor-commander-role">${cmd.title}</div>
        </div>

        <!-- Cascading Typography Menu Stack (Title Case Metal Gothic) -->
        <nav class="metaphor-cascade" role="menu" aria-label="Secciones del juego">
          ${items.map((it) => {
            const isActive = it.id === activeMenuId;
            const scaleClass = isActive ? "cascade-item--lg cascade-item--active" : `cascade-item--${it.scale}`;
            return `
              <div
                class="cascade-item ${scaleClass}"
                role="menuitem"
                tabindex="0"
                data-item-id="${it.id}"
              >
                <span class="cascade-item__title">${it.title}</span>
              </div>
            `;
          }).join("")}
        </nav>

        <!-- Commander Artwork Container in Background / Right Stage -->
        <div class="metaphor-artwork-stage" id="commanderArtworkStage" title="Haz clic en la ilustración para cambiar de comandante">
          <img 
            class="metaphor-artwork-img" 
            src="${artSrc}" 
            alt="${cmd.name}"
            onload="this.style.display='block'; const fb = this.parentElement.querySelector('.metaphor-artwork-fallback'); if (fb) fb.style.display='none';"
            onerror="this.style.display='none'; const fb = this.parentElement.querySelector('.metaphor-artwork-fallback'); if (fb) fb.style.display='block';"
          />
          <div class="metaphor-artwork-fallback" style="display:none;">
            ${renderProceduralSilhouette(cmd)}
          </div>
        </div>

        <!-- Bottom Right Resource HUD -->
        <div class="metaphor-hud-box" aria-label="Recursos">
          <div class="metaphor-hud-row">
            <span class="metaphor-hud-label">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="cmd-svg" style="width:14px;height:14px;"><circle cx="12" cy="12" r="9"/><path d="M12 7v10M9 10h5a2 2 0 0 1 0 4H9"/></svg>
              ORO
            </span>
            <span class="metaphor-hud-val">${cmd.goldValue}</span>
          </div>
          <div class="metaphor-hud-row">
            <span class="metaphor-hud-label">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="cmd-svg" style="width:14px;height:14px;"><polygon points="12,2 15,9 22,12 15,15 12,22 9,15 2,12 9,9"/></svg>
              ${cmd.id === 'corina' ? 'PÉTALOS' : cmd.id === 'lysander' ? 'IMPULSO' : cmd.id === 'faye' ? 'FOCO' : cmd.id === 'valerius' ? 'FERVOR' : cmd.id === 'elora' ? 'SAVIA' : cmd.id === 'carmilla' ? 'SANGRE' : cmd.id === 'kaelen' ? 'ACORDES' : cmd.id === 'roland' ? 'CELO' : 'ALMAS'}
            </span>
            <span class="metaphor-hud-val">${cmd.corruption}</span>
          </div>
        </div>

        <!-- Modal Drawer: Commander Selection & Artwork Upload -->
        ${isDrawerOpen ? `
          <div class="commander-switcher-drawer" role="dialog" aria-modal="true" aria-label="Seleccionar Comandante">
            <div class="commander-switcher-header">
              <div class="commander-switcher-title">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:24px;height:24px;color:var(--gold);"><polygon points="12,2 15,9 22,12 15,15 12,22 9,15 2,12 9,9"/></svg>
                ROSTER DE COMANDANTES // SELECCIÓN
              </div>
              <button class="commander-switcher-close" id="btnCloseCommanderDrawer">CERRAR [X]</button>
            </div>

            <div class="commander-cards-grid">
              ${COMMANDERS.map((c) => {
                const isCurrent = c.id === activeCommanderId;
                const thumb = c.art ? (c.art.startsWith('/') ? c.art.slice(1) : c.art) : `assets/commanders/${c.id}.png`;
                return `
                  <div class="commander-card-choice ${isCurrent ? 'active' : ''}" data-cmd-id="${c.id}" tabindex="0">
                    <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px;">
                      <img src="${thumb}" style="width:42px;height:42px;border-radius:50%;object-fit:cover;border:1px solid var(--gold);box-shadow:0 0 10px rgba(0,0,0,0.8);" alt="">
                      <div>
                        <div class="commander-card-name">${c.name}</div>
                        <div class="commander-card-title">${c.title}</div>
                      </div>
                    </div>
                    <div class="commander-card-lore">${c.lore}</div>
                    ${isCurrent ? `<span class="commander-card-active-tag">SELECCIONADO</span>` : ""}
                  </div>
                `;
              }).join("")}
            </div>

            <div class="commander-upload-strip">
              <span class="commander-upload-note">
                Sube tus ilustraciones en <strong>/public/assets/commanders/${getActiveCommander().id}.png</strong> o cárgalas aquí al instante:
              </span>
              <label class="commander-upload-label">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                Subir Artwork (${getActiveCommander().name})
                <input type="file" id="commanderArtUpload" accept="image/png, image/webp, image/jpeg" style="display:none;" />
              </label>
            </div>
          </div>
        ` : ""}
      </div>
    `;

    // Topbar Utility Controls (Mute, Language, Profile)
    const audioBtn = container.querySelector("#metaAudioBtn");
    if (audioBtn && options.onMuteToggle) {
      audioBtn.addEventListener("click", () => options.onMuteToggle());
    }
    const langBtns = container.querySelectorAll(".meta-lang-btn");
    langBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (options.onLangChange) options.onLangChange(btn.dataset.lang);
      });
    });
    const profileBtn = container.querySelector("#metaProfileBtn");
    if (profileBtn && options.onProfileClick) {
      profileBtn.addEventListener("click", () => options.onProfileClick());
    }

    // 1. Cascading Menu item interactions
    const domItems = container.querySelectorAll(".cascade-item");
    domItems.forEach((el) => {
      const id = el.dataset.itemId;
      el.addEventListener("click", () => {
        activeMenuId = id;
        if (options.onSelect) {
          options.onSelect(id, activeCommanderId);
        }
      });

      el.addEventListener("mouseenter", () => {
        if (activeMenuId !== id) {
          activeMenuId = id;
          render();
        }
      });

      el.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          activeMenuId = id;
          if (options.onSelect) {
            options.onSelect(id, activeCommanderId);
          }
        }
      });
    });

    // 2. Artwork click & Switcher button click triggers drawer
    const artStage = container.querySelector("#commanderArtworkStage");
    if (artStage) {
      artStage.addEventListener("click", () => {
        isDrawerOpen = true;
        render();
      });
    }

    const toggleBtn = container.querySelector("#btnToggleCommander");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        isDrawerOpen = !isDrawerOpen;
        render();
      });
    }

    // 3. Drawer Controls (Close, Select Commander, Upload Artwork)
    if (isDrawerOpen) {
      const closeBtn = container.querySelector("#btnCloseCommanderDrawer");
      if (closeBtn) {
        closeBtn.addEventListener("click", () => {
          isDrawerOpen = false;
          render();
        });
      }

      const choiceCards = container.querySelectorAll(".commander-card-choice");
      choiceCards.forEach((card) => {
        card.addEventListener("click", () => {
          const newId = card.dataset.cmdId;
          if (newId) {
            activeCommanderId = newId;
            isDrawerOpen = false;
            if (options.onCommanderChange) {
              options.onCommanderChange(newId);
            }
            render();
          }
        });
      });

      const fileInput = container.querySelector("#commanderArtUpload");
      if (fileInput) {
        fileInput.addEventListener("change", (e) => {
          const file = e.target.files && e.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = (ev) => {
              customArtworks[activeCommanderId] = ev.target.result;
              try {
                localStorage.setItem("gravecrown_custom_artworks", JSON.stringify(customArtworks));
              } catch (err) {
                // Storage quota exceeded
              }
              render();
            };
            reader.readAsDataURL(file);
          }
        });
      }
    }
  }

  render();

  return {
    setCommander: (cmdId) => {
      activeCommanderId = cmdId;
      render();
    },
    openCommanderDrawer: () => {
      isDrawerOpen = true;
      render();
    }
  };
}

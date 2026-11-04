// Gravecrown Composite Card Component
// Atlus Kinetic x Medieval Punk Grimdark
// Zero emojis: 100% vector SVG emblems.

const TYPE_ICONS = {
  attack: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h6v6L11 19l-3-3z"/><path d="M6 15l-2 5 5-2"/></svg>`,
  defense: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6z"/></svg>`,
  technique: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L5 14h6l-1 8 8-12h-6z"/></svg>`,
  stance: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L5 14h6l-1 8 8-12h-6z"/></svg>`,
  magic: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c1 4 5 6 5 11a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3-1-4 0-7 1-10z"/></svg>`,
  reaction: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12c3-6 7-8 10-8s7 2 10 8c-3 6-7 8-10 8s-7-2-10-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  curse: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a8 8 0 0 0-8 8c0 3 2 4 3 5v3h10v-3c1-1 3-2 3-5a8 8 0 0 0-8-8z"/><circle cx="9" cy="12" r="1.5"/><circle cx="15" cy="12" r="1.5"/></svg>`
};

const SILHOUETTES = {
  attack: `<svg viewBox="0 0 100 75" class="card__sil"><path d="M20 65 L48 20 L52 20 L80 65 L68 67 L53 38 L50 45 L50 67 Z" fill="#0B0A0A" opacity="0.85"/><path d="M30 42 L70 42 L65 47 L35 47 Z" fill="#C1121F"/><circle cx="50" cy="16" r="5" fill="#E8E0CC"/></svg>`,
  defense: `<svg viewBox="0 0 100 75" class="card__sil"><path d="M50 10 L78 22 L70 52 L50 68 L30 52 L22 22 Z" fill="#0B0A0A" opacity="0.85"/><path d="M50 18 L70 28 L64 48 L50 60 L36 48 L30 28 Z" fill="#4A6375" opacity="0.6"/><path d="M48 24 L52 24 L52 54 L48 54 Z" fill="#E8E0CC"/></svg>`,
  technique: `<svg viewBox="0 0 100 75" class="card__sil"><path d="M25 60 L45 15 L55 15 L75 60 L62 62 L50 28 L38 62 Z" fill="#0B0A0A" opacity="0.85"/><path d="M42 35 L68 18 L52 42 L62 42 L38 65 L44 45 Z" fill="#C98A2C"/></svg>`,
  stance: `<svg viewBox="0 0 100 75" class="card__sil"><path d="M25 60 L45 15 L55 15 L75 60 L62 62 L50 28 L38 62 Z" fill="#0B0A0A" opacity="0.85"/><path d="M42 35 L68 18 L52 42 L62 42 L38 65 L44 45 Z" fill="#C98A2C"/></svg>`,
  magic: `<svg viewBox="0 0 100 75" class="card__sil"><circle cx="50" cy="38" r="24" fill="#0B0A0A" opacity="0.85"/><path d="M50 18 C56 26 64 30 64 38 C64 48 56 54 50 54 C44 54 36 48 36 38 C36 30 44 26 50 18 Z" fill="#5B2A86"/><circle cx="50" cy="38" r="6" fill="#E8E0CC"/></svg>`,
  reaction: `<svg viewBox="0 0 100 75" class="card__sil"><ellipse cx="50" cy="38" rx="36" ry="20" fill="#0B0A0A" opacity="0.85"/><path d="M22 38 Q50 16 78 38 Q50 60 22 38 Z" fill="#3F7D3A" opacity="0.6"/><circle cx="50" cy="38" r="10" fill="#E8E0CC"/><circle cx="50" cy="38" r="5" fill="#0B0A0A"/></svg>`,
  curse: `<svg viewBox="0 0 100 75" class="card__sil"><path d="M30 20 L40 32 L50 16 L60 32 L70 20 L74 46 L26 46 Z" fill="#541738"/><path d="M36 44 L64 44 L64 62 L36 62 Z" fill="#0B0A0A" opacity="0.85"/><circle cx="43" cy="52" r="3" fill="#E8E0CC"/><circle cx="57" cy="52" r="3" fill="#E8E0CC"/></svg>`
};

const SVG_ICONS = {
  eye: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:100%;height:100%;padding:2px;"><path d="M2 12c3-6 7-8 10-8s7 2 10 8c-3 6-7 8-10 8s-7-2-10-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  lock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:48px;height:48px;"><rect x="6" y="11" width="12" height="9"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>`
};

export function renderCard(card, o = {}) {
  const type = card.type || "attack";
  const cost = card.cost ?? 0;
  const name = o.name || card.name || "Sin nombre";
  const desc = o.desc || card.description || "";
  const isUnseen = Boolean(o.unseen);

  const container = document.createElement("div");
  container.className = "card-container";

  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = [
    "card",
    `card--type-${type}`,
    o.selected && "card--selected",
    o.disabled && "card--disabled",
    o.playable && "card--playable",
    o.locked && "card--locked",
    isUnseen && "card--unseen"
  ].filter(Boolean).join(" ");

  btn.dataset.cardId = card.id || "";
  btn.setAttribute("aria-label", isUnseen ? "Carta sin descubrir" : `${name}. Coste ${cost}. Tipo: ${type}. ${desc}`);
  btn.title = isUnseen ? "???" : `${name} (${cost}): ${desc}`;

  if (isUnseen) {
    btn.innerHTML = `
      <div class="card__inner card__inner--unseen">
        <div class="card__unseen-mark">?</div>
        <div class="card__unseen-label">INCÓGNITA</div>
      </div>
    `;
    container.appendChild(btn);
    return container;
  }

  const typeIconSvg = TYPE_ICONS[type] || TYPE_ICONS.attack;
  const silSvg = SILHOUETTES[type] || SILHOUETTES.attack;

  const exhaustBadge = card.exhaust ? `<span class="card__tag card__tag--exhaust" title="Agotar tras jugar">AGOTAR</span>` : "";
  const dmgTypeBadge = card.dmgType ? `<span class="card__tag card__tag--${card.dmgType}">${card.dmgType.toUpperCase()}</span>` : "";

  btn.innerHTML = `
    <div class="card__inner">
      <!-- Wax Cost Seal (Anton) -->
      <div class="card__seal" aria-hidden="true">
        <span class="card__cost">${cost}</span>
      </div>

      <!-- Type Badge Icon -->
      <div class="card__type-badge" aria-hidden="true" title="${type}">
        ${typeIconSvg}
      </div>

      <!-- Illustration Window (4:3) -->
      <div class="card__art-frame">
        <div class="card__art-fallback" aria-hidden="true">
          ${silSvg}
        </div>
        ${card.image ? `<img class="card__art-img" src="${card.image}" alt="" loading="lazy">` : ""}
      </div>

      <!-- Name Banner (Gothic Display) -->
      <div class="card__name-banner">
        <span class="card__name-text">${name}</span>
      </div>

      <!-- Tags bar (exhaust / dmgType) -->
      ${(exhaustBadge || dmgTypeBadge) ? `<div class="card__tags">${exhaustBadge}${dmgTypeBadge}</div>` : ""}

      <!-- Description Block (IM Fell English) -->
      <div class="card__desc-box">
        <p class="card__desc-text">${desc}</p>
      </div>

      <!-- Quick Zoom Eye (SVG) -->
      <span class="card__eye" role="button" tabindex="0" title="Ampliar carta" aria-label="Ampliar carta">
        ${SVG_ICONS.eye}
      </span>

      <!-- Lock Indicator (SVG) -->
      ${o.locked ? `<div class="card__lock-icon" aria-hidden="true">${SVG_ICONS.lock}</div>` : ""}
    </div>
  `;

  // Image load error fallback
  const img = btn.querySelector(".card__art-img");
  if (img) {
    img.addEventListener("error", () => {
      img.style.display = "none";
    });
  }

  // Eye button
  const eye = btn.querySelector(".card__eye");
  if (eye) {
    const handleZoom = (e) => {
      e.stopPropagation();
      e.preventDefault();
      if (typeof o.onEnlarge === "function") o.onEnlarge(card);
    };
    eye.addEventListener("click", handleZoom);
    eye.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") handleZoom(e);
    });
  }

  btn.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    if (typeof o.onEnlarge === "function") o.onEnlarge(card);
  });

  let lpTimer;
  btn.addEventListener("pointerdown", (e) => {
    if (e.pointerType === "touch") {
      lpTimer = setTimeout(() => {
        btn.dataset.lp = "1";
        if (typeof o.onEnlarge === "function") o.onEnlarge(card);
      }, 480);
    }
  });

  ["pointerup", "pointerleave", "pointercancel"].forEach((evt) => {
    btn.addEventListener(evt, () => clearTimeout(lpTimer));
  });

  btn.addEventListener("click", (e) => {
    if (btn.dataset.lp) {
      delete btn.dataset.lp;
      e.stopImmediatePropagation();
      return;
    }
    if (typeof o.onClick === "function") o.onClick(card);
  });

  container.appendChild(btn);
  return container;
}

export const renderCardImage = renderCard;

// Deterministic RansomText Component
// Follows strict Atlus meets Medieval Punk guidelines:
// - PRNG based on text + screenId hash (never Math.random in render)
// - Rotation ±8deg, scale 0.9-1.25, offset hard shadow
// - Alternating backgrounds (bone, ink, blood, rust)
// - Font alternation between Grenze Gotisch, IM Fell (reg/it), Cormorant Garamond, Anton
// - Accessible: aria-label on parent, aria-hidden on letters
// - Words never broken in the middle

function hashString(str) {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

function createPrng(seedStr) {
  let s = hashString(seedStr);
  return function next() {
    s |= 0;
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function ransom(text, screenId = "default") {
  if (!text) return "";
  const prng = createPrng(`${text}::${screenId}`);

  const fonts = [
    { family: "var(--font-display)", weight: "800", style: "normal" },
    { family: "var(--font-body)", weight: "400", style: "italic" },
    { family: "var(--font-body)", weight: "400", style: "normal" },
    { family: "var(--font-accent)", weight: "600", style: "italic" },
    { family: "var(--font-numeric)", weight: "400", style: "normal" },
  ];

  const palettes = [
    { bg: "var(--bone)", fg: "var(--ink)" },
    { bg: "var(--ink)", fg: "var(--bone)" },
    { bg: "var(--blood)", fg: "var(--bone)" },
    { bg: "var(--ash)", fg: "var(--bone)" },
  ];

  const words = text.split(/(\s+)/);
  const content = words.map((w) => {
    if (/^\s+$/.test(w)) {
      return `<span class="ransom-space" aria-hidden="true">&nbsp;</span>`;
    }
    const letters = Array.from(w).map((char) => {
      const rot = (prng() * 16 - 8).toFixed(1);
      const scale = (0.92 + prng() * 0.28).toFixed(2);
      const dy = (prng() * 6 - 3).toFixed(1);
      const font = fonts[Math.floor(prng() * fonts.length)];
      const pal = palettes[Math.floor(prng() * palettes.length)];

      return `<span class="ransom-char" aria-hidden="true" style="
        --r-rot: ${rot}deg;
        --r-scale: ${scale};
        --r-y: ${dy}px;
        --r-bg: ${pal.bg};
        --r-fg: ${pal.fg};
        font-family: ${font.family};
        font-weight: ${font.weight};
        font-style: ${font.style};
      ">${char}</span>`;
    }).join("");

    return `<span class="ransom-word" aria-hidden="true">${letters}</span>`;
  }).join("");

  const cleanLabel = text.replace(/"/g, "&quot;");
  return `<span class="ransom-block" role="text" aria-label="${cleanLabel}">${content}</span>`;
}

import { CARDS, COMMANDERS, ENEMIES, ZONES, MENU_MUSIC, REWARD_POOL, TUTORIAL, ITEMS, ART, SKILLS, RELICS } from "./data.js";
import { LORE } from "./lore.js";
import { initIcons } from "./icons.js";
import { avatarHTML, loadManifest, getManifest, SKIN, HAIRC, ARMC, HS, ACC, EYES } from "./avatar.js";
import { t, cname, cdesc, tutText, getLang, setLang, pick, iname, idesc, legalPage } from "./i18n.js";
import { renderCard } from "./ui/card.js";
import { createMetaphorMenu } from "./ui/metaphorCascade.js";
import { ransom } from "./ui/ransom.js";
import { playSfx, setSfxMuted } from "./audio/sfx.js";
import { getEnemySilhouette } from "./ui/enemySilhouettes.js";
const $ = (s) => document.querySelector(s);
const app = $("#app"), dim = $("#dim"), modal = $("#modal"), coll = $("#coll");
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const LS = { get:(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch{return d}}, set:(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch{}} };
let g = null, c = null, tut = null, uid = 0, rl = null, refresh = () => {}, tab = "game", collTab = "all", itemsOpen = false, artTab = "all";
const saveRun = () => { try { if (g && g.hp > 0) LS.set("currentRun", g); else LS.set("currentRun", null); } catch {} };
const seen = new Set(LS.get("seenCards", []));
const markSeen = (id) => { if (!seen.has(id)) { seen.add(id); LS.set("seenCards", [...seen]); } };
let profile = { vault: {}, sp: {}, skills: {}, ...LS.get("profile", {}) };
const saveProfile = () => LS.set("profile", profile);
function perksOf(id) {
  const p = {}; (profile.skills[id] || []).forEach((sid) => { const s = (SKILLS[id] || []).find((x) => x.id === sid); if (s) for (const [k, v] of Object.entries(s.fx)) p[k] = (p[k] || 0) + v; });
  return p;
}
function gainedCards() { // cartas de esta expedición = mazo actual menos mazo inicial
  const cnt = {}; g.start.forEach((id) => (cnt[id] = (cnt[id] || 0) + 1)); const out = [];
  g.deck.forEach((id) => { if (cnt[id] > 0) cnt[id]--; else out.push(id); }); return out;
}
function bankRun() { const n = gainedCards(); profile.vault[g.cmd.id] = [...(profile.vault[g.cmd.id] || []), ...n]; saveProfile(); return n.length; }
const pool = () => REWARD_POOL.filter((id) => !CARDS[id].cmd || CARDS[id].cmd === g.cmd.id);
const zone = () => ZONES[g.zone || 0];
const nodesOf = (z) => [...Array(z.nodes)].map((_, i) => z.enemies[i % z.enemies.length]).concat(z.boss);
function setTheme(z) {
  const bgUrl = z && z.bg ? z.bg : "/assets/backgrounds/ashfields.webp";
  const tint = z && z.tint ? z.tint : "#3a2215";
  document.body.style.background = z
    ? `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.85)), url('${bgUrl}') center/cover fixed, radial-gradient(${tint}, #0d0b09)`
    : "";
}
/* Música: se cambia con playMusic(ruta); si el archivo no existe, simplemente no suena. */
let bgm = null, bgmSrc = "", muted = LS.get("muted", false);
setSfxMuted(muted);
function fade(a, to, done) { const iv = setInterval(() => { a.volume = Math.max(0, Math.min(1, a.volume + (to > a.volume ? 0.04 : -0.04))); if (Math.abs(a.volume - to) < 0.05) { a.volume = to; clearInterval(iv); done && done(); } }, 80); }
function startBgm() { if (bgm && bgm.paused && !muted) bgm.play().then(() => fade(bgm, 0.4)).catch(() => {}); }
function playMusic(src) {
  if (src === bgmSrc) return; bgmSrc = src; const old = bgm; if (old) fade(old, 0, () => old.pause());
  if (!src) { bgm = null; return; }
  bgm = new Audio(src); bgm.loop = true; bgm.volume = 0; bgm.onerror = () => {}; startBgm();
}
function toggleMute() { muted = !muted; LS.set("muted", muted); setSfxMuted(muted); if (muted) { if (bgm) bgm.pause(); } else startBgm(); bar(); }
addEventListener("click", startBgm, { once: true });
function rnd(a, b) { return a + Math.floor(Math.random() * (b - a + 1)); }
const esc = (x) => String(x).replace(/[&<>"]/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[m]));
let account = { name: "", skin: 0, hairStyle: 1, hairColor: 0, armor: 0, acc: 0, eyes: 0, layers: {}, useAvatar: true, custom: "", ...LS.get("account", {}) }, draft = { ...account };
const seenE = new Set(LS.get("seenEnemies", []));
const markEnemy = (k) => { k = k === "tutorial" ? "raider" : k; if (!seenE.has(k)) { seenE.add(k); LS.set("seenEnemies", [...seenE]); } };
const faction = (card) => {
  if (card.cmd) return card.cmd;
  return "neutral";
};

/* ---------- Carta — usa el componente elaborado de src/ui/card.js ---------- */
export function renderCardImage(card, o = {}) {
  if (!card) return document.createElement("div");
  const container = renderCard(
    { ...card, name: cname(card), description: cdesc(card) },
    {
      selected: o.selected,
      disabled: o.disabled,
      playable: o.playable,
      locked: o.locked,
      unseen: o.unseen,
      onEnlarge: () => openModal(card),
    }
  );
  // Devolvemos el <button> interno para compatibilidad con todo el código que asigna .onclick
  const btn = container.querySelector("button") || container;
  btn.dataset.cardId = card.id || "";
  container.dataset.cardId = card.id || "";
  // Preservamos el div contenedor en una propiedad oculta para insertarlo correctamente en el DOM
  btn._cardContainer = container;
  return btn;
}
function openModal(card) {
  modal.hidden = false;
  modal.innerHTML = `<img src="${card.image}" alt="${cname(card)}" onerror="this.replaceWith(Object.assign(document.createElement('p'),{textContent:'${t("missing")}: ${card.image}'}))">
  <div class="modal-info"><h2>${cname(card)}</h2><p>${t("cost")} ${card.cost} · ${t("t_" + card.type)}</p><p>${cdesc(card)}</p>${explain(card)}<button class="btn" id="mclose">${t("close")}</button></div>`;
  $("#mclose").onclick = closeModal;
}
const closeModal = () => { modal.hidden = true; modal.innerHTML = ""; };
modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
modal.addEventListener("contextmenu", (e) => e.preventDefault());
addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

function explain(card) {
  const L = [t("ex_cost", card.cost)];
  if (card.reaction) L.push(t("ex_reaction"));
  card.effects.forEach((f) => L.push(t("ex_" + f.a, f.n, f.burnBonus)));
  L.push(t("ex_discard"));
  return `<ul>${L.map((x) => `<li>${x}</li>`).join("")}</ul>`;
}
function openLegal(k) {
  const p = legalPage(k); modal.hidden = false;
  modal.innerHTML = `<div class="legal"><h2>${p.title}</h2>${p.body.map((x) => `<p>${x}</p>`).join("")}<button class="btn" id="mclose">${t("close")}</button></div>`;
  $("#mclose").onclick = closeModal;
}
/* Muestra todas las cartas del mazo en el modal */
function openDeckModal(deck) {
  modal.hidden = false;
  const counts = {};
  deck.forEach((id) => (counts[id] = (counts[id] || 0) + 1));
  modal.innerHTML = `<div class="legal" style="max-width:820px"><h2>${t("viewDeckTitle", deck.length)}</h2><div class="hand" id="mdeck" style="justify-content:flex-start;flex-wrap:wrap;gap:8px;"></div><button class="btn" id="mclose" style="margin-top:14px">${t("close")}</button></div>`;
  const grid = $("#mdeck");
  Object.entries(counts).forEach(([id, n]) => {
    const card = CARDS[id]; if (!card) return;
    const el = renderCardImage(card);
    el.onclick = () => openModal(card);
    const wrap = document.createElement("div"); wrap.style.cssText = "position:relative;display:inline-block";
    if (n > 1) { const badge = document.createElement("span"); badge.className = "chip"; badge.style.cssText = "position:absolute;top:4px;left:4px;z-index:30;background:#000c"; badge.textContent = `×${n}`; wrap.appendChild(badge); }
    wrap.appendChild(el._cardContainer || el);
    grid.appendChild(wrap);
  });
  $("#mclose").onclick = closeModal;
}
function footer() {
  $("#foot").innerHTML = `<span>© 2026 Gravecrown · ${t("copy")}</span>` + ["privacy", "cookies", "legal"].map((k) => `<button data-l="${k}">${t(k)}</button>`).join("") + `<button id="clr">${t("clear")}</button>`;
  document.querySelectorAll("#foot [data-l]").forEach((b) => (b.onclick = () => openLegal(b.dataset.l)));
  $("#clr").onclick = () => { if (confirm(t("clearConfirm"))) { try { localStorage.clear(); } catch {} location.reload(); } };
}
/* ---------- Barra, navegación y utilidades ---------- */
function subpageHeader(titleKey, descKey, iconSvg = "") {
  return `
    <header class="metaphor-sub-header">
      <div class="metaphor-sub-header__left">
        <button class="metaphor-back-btn" id="btnBackToMenu" type="button" title="Volver al menú principal táctico">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width:16px;height:16px;"><polyline points="15 18 9 12 15 6"/></svg>
          <span>${t("backToMenu")}</span>
        </button>
        <div class="metaphor-sub-titlewrap">
          <div class="metaphor-sub-badge">${iconSvg} ${t(titleKey)}</div>
          <div class="metaphor-sub-desc">${t(descKey) || ''}</div>
        </div>
      </div>
      <div class="metaphor-sub-header__right">
        <button id="subMuteBtn" class="meta-util-btn" type="button" title="Alternar audio">
          ${muted ? '🔇 MUTE' : '🔊 AUDIO'}
        </button>
        <div class="meta-lang-picker">
          <button class="meta-lang-btn ${getLang() === 'es' ? 'active' : ''}" data-lang="es">ES</button>
          <button class="meta-lang-btn ${getLang() === 'en' ? 'active' : ''}" data-lang="en">EN</button>
          <button class="meta-lang-btn ${getLang() === 'eu' ? 'active' : ''}" data-lang="eu">EU</button>
        </div>
        <button id="subWhoBtn" class="meta-profile-pill" type="button" title="Heráldica y perfil">
          <span class="meta-profile-av">${avatarHTML(account, 24)}</span>
          <span class="meta-profile-name">${esc(account.name || t("anon"))}</span>
        </button>
      </div>
    </header>
  `;
}

function bindSubpageHeader() {
  const back = $("#btnBackToMenu");
  if (back) back.onclick = () => showTab("game");
  const mu = $("#subMuteBtn");
  if (mu) mu.onclick = () => { toggleMute(); renderPage(); };
  document.querySelectorAll(".metaphor-sub-header .meta-lang-btn").forEach((b) => {
    b.onclick = () => { setLang(b.dataset.lang); bar(); renderPage(); };
  });
  const who = $("#subWhoBtn");
  if (who) who.onclick = () => showTab("acc");
}

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && tab !== "game") {
    showTab("game");
  }
});

function bar() {
  document.documentElement.lang = getLang();
  const langSel = $("#lang"); if (langSel) langSel.value = getLang();
  document.querySelectorAll("#bar [data-tab]").forEach((b) => { b.textContent = t(b.dataset.tab); b.classList.toggle("on", b.dataset.tab === tab); });
  const mu = $("#mute");
  if (mu) {
    mu.innerHTML = muted ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;vertical-align:middle;"><line x1="1" y1="1" x2="23" y2="23"/><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"/></svg>' : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;vertical-align:middle;"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>';
    mu.onclick = toggleMute;
  }
  const w = $("#who");
  if (w) {
    w.innerHTML = avatarHTML(account, 28) + `<span>${esc(account.name || t("anon"))}</span>`;
    w.onclick = () => showTab("acc");
  }
  footer();
}

function showTab(x) {
  tab = x;
  app.hidden = x !== "game";
  coll.hidden = x === "game";
  document.body.classList.toggle("coll", x !== "game");
  bar();
  if (x !== "game") {
    renderPage();
  } else {
    menu();
  }
}

document.querySelectorAll("#bar [data-tab]").forEach((b) => (b.onclick = () => showTab(b.dataset.tab)));
const langEl = $("#lang");
if (langEl) langEl.onchange = (e) => { setLang(e.target.value); bar(); closeModal(); tab !== "game" ? renderPage() : refresh(); };

function renderPage() {
  ({ coll: renderColl, art: renderArt, skills: renderSkills, lore: renderLore, acc: renderAccount })[tab]();
}

function renderColl() {
  const all = Object.values(CARDS);
  const f = {
    all: () => true,
    seen: (x) => seen.has(x.id),
    unseen: (x) => !seen.has(x.id),
    corina: (x) => faction(x) === "corina",
    lysander: (x) => faction(x) === "lysander",
    faye: (x) => faction(x) === "faye",
    valerius: (x) => faction(x) === "valerius",
    elora: (x) => faction(x) === "elora",
    carmilla: (x) => faction(x) === "carmilla",
    kaelen: (x) => faction(x) === "kaelen",
    malakor: (x) => faction(x) === "malakor",
    roland: (x) => faction(x) === "roland",
    neutral: (x) => faction(x) === "neutral",
  }[collTab] || (() => true);

  const commanderTabs = [
    { id: "all", label: t("all") },
    { id: "seen", label: t("seen") },
    { id: "unseen", label: t("notseen") },
    { id: "corina", label: "Corina", color: "#D91B24" },
    { id: "lysander", label: "Lysander", color: "#3B6978" },
    { id: "faye", label: "Faye", color: "#4E878C" },
    { id: "valerius", label: "Valerius", color: "#D6A838" },
    { id: "elora", label: "Elora", color: "#3E7B44" },
    { id: "carmilla", label: "Carmilla", color: "#9E1946" },
    { id: "kaelen", label: "Kaelen", color: "#844685" },
    { id: "malakor", label: "Malakor", color: "#6B2D5C" },
    { id: "roland", label: "Roland", color: "#C59B27" },
    { id: "neutral", label: t("neutral"), color: "#8C7D73" }
  ];

  const seenCount = all.filter((x) => seen.has(x.id)).length;

  coll.innerHTML = `
    <div class="metaphor-subpage">
      ${subpageHeader("coll", "collSub")}
      <div class="metaphor-filter-strip">
        <div class="metaphor-filter-tabs">
          ${commanderTabs.map((ct) => `
            <button class="metaphor-pill-btn ${ct.id === collTab ? 'active' : ''}" data-ct="${ct.id}" style="${ct.color ? `--pill-color:${ct.color}` : ''}">
              ${ct.label}
            </button>
          `).join("")}
        </div>
        <div class="metaphor-counter-tag">
          ${t("count", seenCount, all.length)} · ${t("right")}
        </div>
      </div>
      <div class="metaphor-cards-viewport">
        <div class="hand metaphor-card-grid" id="cgrid"></div>
      </div>
    </div>
  `;
  bindSubpageHeader();
  coll.querySelectorAll("[data-ct]").forEach((b) => (b.onclick = () => { collTab = b.dataset.ct; renderColl(); }));
  const grid = $("#cgrid");
  all.filter(f).forEach((card) => {
    let el;
    if (seen.has(card.id)) {
      el = renderCardImage(card);
      el.onclick = () => openModal(card);
    } else {
      el = renderCardImage(card, { unseen: true });
    }
    grid.appendChild(el._cardContainer || el);
  });
}

/* ---------- Tutorial ---------- */
const tutStep = () => (tut ? TUTORIAL[tut.step] : null);
function allowed(kind, id) {
  const s = tutStep(); if (!s) return true;
  const a = s.allow; if (a.all) return true;
  return kind === "end" ? !!a.end : !!(a.cards && a.cards.includes(id));
}
function tutEvent(ev) {
  const s = tutStep(); if (!s || s.wait !== ev) return;
  if (tut.step >= TUTORIAL.length - 1) return finishTutorial();
  tut.step++; LS.set("tutorialStep", tut.step); render();
}
function finishTutorial() { LS.set("tutorialCompleted", true); LS.set("tutorialStep", 0); tut = null; c = null; startRun("corina", true); }
function decorateTutorial() {
  document.querySelectorAll(".tut-panel").forEach((e) => e.remove());
  document.querySelectorAll(".tut-hl").forEach((e) => e.classList.remove("tut-hl"));
  const s = tutStep(); dim.hidden = !s; document.body.classList.toggle("tutorial", !!s); if (!s) return;
  const el = document.querySelector(s.target); if (el) el.classList.add("tut-hl");
  const p = document.createElement("div"); p.className = "tut-panel";
  p.innerHTML = `<span>${tutText(tut.step)}</span>` + (s.wait === "next" ? `<button class="btn" id="tnext">${t("next")}</button>` : "");
  document.body.appendChild(p);
  const n = $("#tnext"); if (n) n.onclick = () => tutEvent("next");
}
function resetTutorial() { LS.set("tutorialCompleted", false); LS.set("tutorialStep", 0); }

/* ---------- Pantallas ---------- */
function clearTut() { dim.hidden = true; document.body.classList.remove("tutorial"); tut = null; document.querySelectorAll(".tut-panel").forEach((e) => e.remove()); }
let selectedCmd = "corina";
function menu() {
  refresh = menu; clearTut(); setTheme(null); playMusic(MENU_MUSIC); bar();
  const done = LS.get("tutorialCompleted", false);
  const savedRun = LS.get("currentRun", null);
  if (savedRun && savedRun.deck) {
    savedRun.deck = savedRun.deck.filter((id) => CARDS[id]);
    if (!savedRun.deck.length || !savedRun.cmd || !COMMANDERS[savedRun.cmd.id]) {
      try { LS.set("currentRun", null); } catch {}
    }
  }
  const canResume = savedRun && savedRun.hp > 0 && savedRun.cmd && COMMANDERS[savedRun.cmd.id] && savedRun.deck && savedRun.deck.length > 0;

  app.innerHTML = `<div id="metaphor-menu-root"></div>`;

  let metaMenu = null;
  try {
    const menuItems = [
      { 
        id: "expedition", 
        title: canResume ? "CONTINUAR EXPEDICIÓN" : t("game"), 
        sub: canResume ? `Zona ${(savedRun.zone || 0) + 1} · ${savedRun.hp}/${savedRun.maxHp} HP` : t("pick"), 
        scale: "lg", 
        active: true 
      },
      ...(canResume ? [{ id: "abandon", title: t("abandonExpedition"), sub: "", scale: "sm" }] : []),
      { id: "coll", title: t("coll"), sub: t("collSub"), scale: "sm" },
      { id: "skills", title: t("skills"), sub: t("skillsSub"), scale: "sm" },
      { id: "art", title: t("art"), sub: t("artDesc"), scale: "sm" },
      { id: "lore", title: t("lore"), sub: t("loreDesc"), scale: "sm" },
      { id: "acc", title: t("acc"), sub: t("accDesc"), scale: "sm" },
    ];

    metaMenu = createMetaphorMenu("metaphor-menu-root", {
      items: menuItems,
      initialActive: "expedition",
      initialCommander: selectedCmd,
      muted,
      lang: getLang(),
      account,
      avatarHTML,
      onMuteToggle: () => { toggleMute(); menu(); },
      onLangChange: (newLang) => { setLang(newLang); bar(); menu(); },
      onProfileClick: () => showTab("acc"),
      onCommanderChange: (newId) => {
        if (COMMANDERS[newId]) selectedCmd = newId;
      },
      onSelect: (id, cmdId) => {
        if (id === "abandon") {
          if (confirm(t("abandonConfirm"))) {
            LS.set("currentRun", null);
            menu();
          }
          return;
        }
        if (id === "expedition") {
          if (canResume) {
            g = savedRun;
            mapScreen("runResumed");
          } else if (LS.get("tutorialCompleted", false)) {
            startRun(cmdId && COMMANDERS[cmdId] ? cmdId : selectedCmd);
          } else {
            startTutorial();
          }
        } else {
          showTab(id);
        }
      },
    });
  } catch (e) {
    console.error("Metaphor menu error:", e);
  }
}
function startTutorial() { tut = { step: 0 }; g = { cmd: COMMANDERS.corina, hp: 70, maxHp: 70, perks: {}, deck: [], start: [], relics: [], items: {} }; startCombat("tutorial", true); }
function startRun(id, justTut) { 
  const cmd = COMMANDERS[id] || COMMANDERS.corina, pk = perksOf(id);
  const rawDeck = [...cmd.deck, ...(profile.vault[id] || [])];
  const deck = rawDeck.filter((x) => CARDS[x]);
  g = { cmd, perks: pk, maxHp: cmd.hp + (pk.hp || 0), hp: cmd.hp + (pk.hp || 0), deck, start: [...deck], spGain: 0, relics: [], relicGain: null, node: 0, zone: 0, gold: 0, turns: 0, nextEvt: rnd(8, 12), elite: false, gain: 0, items: Object.fromEntries(Object.values(ITEMS).map((i) => [i.id, i.start + (i.id === "potion" ? pk.potion || 0 : 0)])) }; 
  saveRun(); 
  mapScreen(justTut ? "tutDone" : ""); 
}
function mapScreen(msg = "") {
  refresh = () => mapScreen(msg); c = null; saveRun();
  const z = zone(), list = nodesOf(z); setTheme(z); playMusic(z.music);
  
  app.innerHTML = `
    <div class="metaphor-map-container" style="--zone-bg: url('${z ? z.bg : '/assets/backgrounds/ashfields.webp'}');">
      <div class="metaphor-map-card">
        <div style="display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(214,168,56,0.25);padding-bottom:14px;flex-wrap:wrap;gap:12px;">
          <div>
            <div style="font-family:var(--font-numeric);font-size:0.78rem;letter-spacing:0.18em;color:var(--gold);">
              EXPEDICIÓN TÁCTICA // ${t("zoneN", g.zone + 1, ZONES.length).toUpperCase()}
            </div>
            <h1 style="font-family:var(--font-display);font-size:2rem;color:#FFF;margin:4px 0 0 0;letter-spacing:0.04em;">
              ${pick(z.name)}
            </h1>
          </div>
          <div style="display:flex;align-items:center;gap:10px;">
            <button class="meta-util-btn" id="mapMuteBtn" type="button">${muted ? '🔇 MUTE' : '🔊 AUDIO'}</button>
            <button class="meta-util-btn" id="mapQuit" type="button" style="border-color:var(--ash)">${t("saveAndQuit")}</button>
          </div>
        </div>

        ${msg ? `<div style="padding:10px 14px;background:rgba(214,168,56,0.15);border-left:3px solid var(--gold);color:var(--gold);font-family:var(--font-display);">${t(msg)}</div>` : ''}

        <!-- Commander Status Strip -->
        <div style="display:flex;gap:16px;flex-wrap:wrap;background:rgba(18,24,30,0.85);border:1px solid rgba(140,125,115,0.25);border-radius:6px;padding:14px 18px;align-items:center;">
          <img src="${g.cmd.image}" style="width:48px;height:48px;border-radius:50%;object-fit:cover;border:1px solid var(--gold);box-shadow:0 0 10px rgba(0,0,0,0.8);" alt="">
          <div style="flex:1;">
            <div style="font-family:var(--font-display);font-size:1.1rem;color:#FFF;">${t("c_" + g.cmd.id)}</div>
            <div style="display:flex;gap:12px;margin-top:4px;font-family:var(--font-numeric);font-size:0.8rem;flex-wrap:wrap;">
              <span style="color:#FFA59E;">HP ${g.hp}/${g.maxHp}</span>
              <span style="color:var(--gold);">ORO ${g.gold}</span>
              <span style="color:#8CE8ED;">MAZO ${g.deck.length} CARTAS</span>
              <span style="color:var(--ash);">${t("res_" + g.cmd.id)}</span>
            </div>
          </div>
          <button class="metaphor-pill-btn" id="viewdeck">
            ${t("viewDeck", g.deck.length)}
          </button>
        </div>

        <!-- Node Map Path -->
        <div class="metaphor-map-path">
          ${list.map((n, i) => {
            const isDone = i < g.node;
            const isCur = i === g.node;
            const isBoss = i === list.length - 1;
            const icon = isBoss 
              ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px;"><path d="M12 3a8 8 0 0 0-8 8c0 3 2 4 3 5v3h10v-3c1-1 3-2 3-5a8 8 0 0 0-8-8z"/></svg>`
              : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px;"><path d="M14 4h6v6L11 19l-3-3z"/><path d="M6 15l-2 5 5-2"/></svg>`;
            return `
              <div class="metaphor-map-node ${isDone ? 'done' : ''} ${isCur ? 'cur' : ''} ${isBoss ? 'boss' : ''}">
                ${icon}
                <span>${t("e_" + n)}</span>
                <small style="font-size:10px;opacity:0.7;">NODO ${i + 1}</small>
              </div>
              ${i < list.length - 1 ? `<span class="metaphor-node-arrow">→</span>` : ''}
            `;
          }).join("")}
        </div>

        <!-- Items Bar -->
        ${itemsHTML()}

        <!-- Advance Action -->
        <div style="display:flex;justify-content:center;margin-top:12px;">
          <button class="btn big-btn" id="go" style="min-width:280px;border-color:var(--gold);color:var(--gold);box-shadow:0 0 16px rgba(214,168,56,0.35);">
            ${t("enter")}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width:16px;height:16px;vertical-align:middle;margin-left:6px;"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      </div>
    </div>
  `;
  bindItems();
  const mb = $("#mapMuteBtn"); if (mb) mb.onclick = () => { toggleMute(); mapScreen(msg); };
  $("#go").onclick = () => { playSfx("slash"); startCombat(list[g.node]); };
  $("#viewdeck").onclick = () => { playSfx("card"); openDeckModal(g.deck); };
  $("#mapQuit").onclick = () => { playSfx("click"); saveRun(); menu(); };
}

function end(key, extra = "") {
  c = null; refresh = () => end(key, extra); dim.hidden = true; LS.set("currentRun", null);
  const isWin = key === "done" || key === "cashed";
  if (isWin) playSfx("victory"); else playSfx("defeat");
  const z = zone();
  app.innerHTML = `
    <div class="battle-screen-wrap" style="--zone-bg: url('${z ? z.bg : '/assets/backgrounds/citadel.webp'}');align-items:center;justify-content:center;">
      <div class="metaphor-event-card" style="border-color:${isWin ? 'var(--gold)' : 'var(--cherry-red)'};box-shadow:0 0 35px ${isWin ? 'rgba(214,168,56,0.35)' : 'rgba(217,27,36,0.35)'}">
        <div style="margin-bottom:14px;">${ransom(t(key), key)}</div>
        <p class="metaphor-event-desc">${extra}</p>
        <div style="display:flex;justify-content:center;margin-top:20px;">
          <button class="btn big-btn" id="m" style="min-width:240px;border-color:var(--gold);color:var(--gold);box-shadow:0 0 16px rgba(214,168,56,0.35);">
            ${t("backToMenu")}
          </button>
        </div>
      </div>
    </div>
  `;
  $("#m").onclick = () => { playSfx("click"); menu(); };
}

function rewardScreen(opts = [...pool()].sort(() => Math.random() - 0.5).slice(0, 3)) {
  refresh = () => rewardScreen(opts); c = null; opts.forEach(markSeen);
  playSfx("victory");
  const z = zone();
  app.innerHTML = `
    <div class="battle-screen-wrap" style="--zone-bg: url('${z ? z.bg : '/assets/backgrounds/ashfields.webp'}');align-items:center;padding:36px 20px;">
      <div class="metaphor-event-card" style="max-width:860px;width:100%;">
        <div class="metaphor-event-title">${t("reward")}</div>
        <p class="metaphor-event-desc">
          <span style="color:var(--gold);font-family:var(--font-numeric);font-size:1.1rem;">
            +${g.gain || 0} ${t("gold")}
          </span>
          ${g.spGain ? ` · <span style="color:#8CE8ED;">+${g.spGain} SP</span>` : ""}
          ${g.relicGain ? ` · <span style="color:var(--gold);">${t("relicGain", pick(RELICS[g.relicGain].name))}</span>` : ""}
        </p>
        <p style="color:var(--bone);font-size:0.95rem;margin:0 0 16px 0;">${t("pickCard")}</p>
        <div class="hand" id="rw" style="justify-content:center;gap:14px;margin-bottom:20px;"></div>
        <div style="display:flex;justify-content:center;">
          <button class="btn" id="skip" style="border-color:var(--ash);min-width:160px;">${t("skip")}</button>
        </div>
      </div>
    </div>
  `;
  const take = (id) => {
    playSfx("card");
    if (id) g.deck.push(id);
    g.spGain = 0; g.relicGain = null; const bossDone = !g.elite && g.node >= zone().nodes;
    if (!g.elite) g.node++; g.elite = false;
    saveRun();
    if (bossDone) { if (g.zone >= ZONES.length - 1) return end("done", t("doneN", bankRun())); g.zone++; g.node = 0; g.hp = Math.min(g.maxHp, g.hp + 20); saveRun(); return mapScreen("newZone"); }
    afterNode();
  };
  opts.forEach((id) => {
    const e = renderCardImage(CARDS[id], { playable: true });
    e.onclick = () => take(id);
    $("#rw").appendChild(e._cardContainer || e);
  });
  $("#skip").onclick = () => take(null);
}

/* ---------- Motor de combate ---------- */
function startCombat(key, isTut) {
  refresh = render; fxq = []; markEnemy(key); if (!isTut) g.elite = key === "fearsome"; const sc = isTut ? 1 : 1 + 0.4 * (g.zone || 0), base = ENEMIES[key];
  const e = { ...base, hp: Math.round(base.hp * sc), gold: base.gold && base.gold.map((x) => Math.round(x * sc)), intents: base.intents.map((x) => ({ ...x, n: Math.round(x.n * sc) })) };
  if (!isTut) playMusic(key === zone().boss ? zone().bossMusic : zone().music); const mk = (id) => ({ uid: ++uid, id });
  let deck, hand = [];
  if (isTut) { 
    hand = ["thorn-slash", "petal-guard", "black-lily", "bloody-lotus", "rose-dance"].filter((id) => CARDS[id]).map(mk); 
    deck = Array(8).fill("thorn-slash").map(mk); 
    hand.forEach((x) => markSeen(x.id)); 
  }
  else deck = (g.deck || []).filter((id) => CARDS[id]).map(mk).sort(() => Math.random() - 0.5);
  c = { hp: g.hp, block: g.perks.startBlock || 0, energy: 3 + (g.perks.energy || 0), maxE: 3 + (g.perks.energy || 0), firstAtk: g.perks.firstAtk || 0, corr: 0, bonus5: false, deck, hand, disc: [], turn: 1, phase: "player", log: [], tut: !!isTut, key,
        e: { ...e, max: e.hp, block: 0, burn: 0, i: 0 } };
  if (!isTut) draw(5 + (g.perks.hand || 0));
  say("l_start", t("e_" + key)); render();
}
const say = (k, ...a) => c.log.push([k, a]);
function draw(n) {
  for (let k = 0; k < n; k++) {
    if (c.hand.length >= 10) return;
    if (!c.deck.length) { c.deck = c.disc.sort(() => Math.random() - 0.5); c.disc = []; }
    if (c.deck.length) { const x = c.deck.pop(); c.hand.push(x); markSeen(x.id); playSfx("card"); }
  }
}
const intent = () => c.e.intents[c.e.i % c.e.intents.length];
function canPlay(inst) {
  if (!inst) return false;
  const card = CARDS[inst.id];
  if (!card) return false;
  if (c.phase === "react") return !!card.reaction;
  return c.phase === "player" && !card.reaction && card.cost <= c.energy && allowed("card", inst.id);
}
function gainCorr(n) { // recurso del comandante (Pétalos, Impulso, Foco, Fervor, Savia, Sangre, Acordes, Almas)
  for (let k = 0; k < n; k++) {
    c.corr++;
    if (g.cmd.id === "corina" && (c.corr === 3 || c.corr === 6 || c.corr === 9)) {
      c.bonus5 = true; say("l_corina_fury");
    } else if (g.cmd.id === "lysander" && (c.corr === 3 || c.corr === 6 || c.corr === 9)) {
      c.bonus5 = true; say("l_lysander_fury");
    } else if (g.cmd.id === "faye" && (c.corr === 3 || c.corr === 6 || c.corr === 9)) {
      c.bonus5 = true; say("l_faye_fury");
    } else if (g.cmd.id === "valerius" && (c.corr === 3 || c.corr === 6 || c.corr === 9)) {
      c.bonus5 = true; say("l_valerius_fury");
    } else if (g.cmd.id === "elora" && (c.corr === 3 || c.corr === 6 || c.corr === 9)) {
      say("l_elora_burst"); if (c.e) c.e.burn = (c.e.burn || 0) + 2;
    } else if (g.cmd.id === "carmilla" && (c.corr === 3 || c.corr === 6 || c.corr === 9)) {
      c.bonus5 = true; say("l_carmilla_fury");
    } else if (g.cmd.id === "kaelen" && (c.corr === 3 || c.corr === 6 || c.corr === 9)) {
      c.bonus5 = true; say("l_kaelen_fury");
    } else if (g.cmd.id === "malakor" && (c.corr === 3 || c.corr === 6 || c.corr === 9)) {
      say("l_malakor_burst"); if (c.e) c.e.burn = (c.e.burn || 0) + 2;
    } else if (g.cmd.id === "roland" && (c.corr === 3 || c.corr === 6 || c.corr === 9)) {
      c.bonus5 = true; say("l_roland_fury");
    }
  }
}
function dead() {
  if (c.hp > 0) return false;
  if (c.saved) return true;
  if (g.cmd.id === "corina" && c.corr >= 6) { c.hp = 1; c.corr -= 6; c.block += 10; c.saved = true; say("l_corina_save"); return false; }
  if (g.cmd.id === "lysander" && c.corr >= 6) { c.hp = 1; c.corr -= 6; c.block += 12; c.saved = true; say("l_lysander_save"); return false; }
  if (g.cmd.id === "faye" && c.corr >= 6) { c.hp = 1; c.corr -= 6; c.block += 10; c.saved = true; say("l_faye_save"); return false; }
  if (g.cmd.id === "valerius" && c.corr >= 6) { c.hp = 1; c.corr -= 6; c.block += 14; c.saved = true; say("l_valerius_save"); return false; }
  if (g.cmd.id === "elora" && c.corr >= 6) { c.hp = 1; c.corr -= 6; c.block += 10; c.saved = true; say("l_elora_save"); return false; }
  if (g.cmd.id === "carmilla" && c.corr >= 6) { c.hp = 1; c.corr -= 6; c.block += 8; c.saved = true; say("l_carmilla_save"); return false; }
  if (g.cmd.id === "kaelen" && c.corr >= 6) { c.hp = 1; c.corr -= 6; c.block += 10; c.saved = true; say("l_kaelen_save"); return false; }
  if (g.cmd.id === "malakor" && c.corr >= 6) { c.hp = 1; c.corr -= 6; c.block += 10; c.saved = true; say("l_malakor_save"); return false; }
  if (g.cmd.id === "roland" && c.corr >= 6) { c.hp = 1; c.corr -= 6; c.block += 12; c.saved = true; say("l_roland_save"); return false; }
  return true;
}
function enemyHit(d) {
  d += c.ruin || 0;
  if (c.stance > 0 && !c.stUsed) { d = Math.max(0, d - 5); c.stUsed = true; }
  const before = c.hp; hurt(d);
  if (["lysander", "carmilla", "valerius", "corina", "roland"].includes(g.cmd.id) && c.hp < before) gainCorr(1);
  return d;
}
function addRelic(id) {
  const r = RELICS[id]; g.relics.push(id);
  for (const [k, v] of Object.entries(r.fx)) { g.perks[k] = (g.perks[k] || 0) + v; if (k === "hp") { g.maxHp += v; g.hp += v; } }
}
function useAbility() {
  if (!c || c.phase !== "player" || c.abUsed || tut || c.corr < 2) return;
  if (g.cmd.id === "corina") {
    c.corr -= 2; c.bonus5 = true; draw(1); say("l_ab_corina");
  } else if (g.cmd.id === "lysander") {
    c.corr -= 2; c.block += 8; const a = Math.min(c.e.block, 8); c.e.block -= a; c.e.hp -= 8 - a; flash("#enemy", "-8"); say("l_ab_lysander");
  } else if (g.cmd.id === "faye") {
    c.corr -= 2; c.bonus5 = true; draw(1); say("l_ab_faye");
  } else if (g.cmd.id === "valerius") {
    c.corr -= 2; c.block += 6; c.hp = Math.min(g.maxHp, c.hp + 4); say("l_ab_valerius");
  } else if (g.cmd.id === "elora") {
    c.corr -= 2; c.block += 8; if (c.e) c.e.burn = (c.e.burn || 0) + 3; say("l_ab_elora");
  } else if (g.cmd.id === "carmilla") {
    c.corr -= 2; c.hp = Math.min(g.maxHp, c.hp + 5); const a = Math.min(c.e.block, 6); c.e.block -= a; c.e.hp -= 6 - a; flash("#enemy", "-6"); say("l_ab_carmilla");
  } else if (g.cmd.id === "kaelen") {
    c.corr -= 2; c.energy++; draw(1); say("l_ab_kaelen");
  } else if (g.cmd.id === "malakor") {
    c.corr -= 2; const a = Math.min(c.e.block, 8); c.e.block -= a; c.e.hp -= 8 - a; if (c.e) c.e.burn = (c.e.burn || 0) + 3; flash("#enemy", "-8"); say("l_ab_malakor");
  } else if (g.cmd.id === "roland") {
    c.corr -= 2; c.block += 8; const a = Math.min(c.e.block, 8); c.e.block -= a; c.e.hp -= 8 - a; flash("#enemy", "-8"); say("l_ab_roland");
  }
  c.abUsed = true; fx("#cmdr", "cast"); say("l_ab"); playSfx("spell"); render();
}
function hurt(n) {
  const a = Math.min(c.block, n);
  c.block -= a;
  c.hp -= n - a;
  if (n - a > 0) {
    playSfx("slash");
    flash("#cmdr", "-" + (n - a));
  } else if (a > 0) {
    playSfx("shield");
  }
}
let fxq = [];
function flash(sel, txt) { fxq.push([sel, "hit", txt]); }
function fx(sel, cls) { fxq.push([sel, cls]); }
function runFx() { // aplica las animaciones en cola sobre el DOM recién dibujado
  const q = fxq; fxq = [];
  q.forEach(([sel, cls, txt]) => {
    const el = $(sel); if (!el) return;
    if (cls) { el.classList.add(cls); setTimeout(() => el.classList.remove(cls), 450); }
    if (txt) { const f = document.createElement("span"); f.className = "float"; f.textContent = txt; el.appendChild(f); setTimeout(() => f.remove(), 900); }
  });
}
function play(uidv) {
  const i = c.hand.findIndex((x) => x.uid === uidv); if (i < 0) return;
  const inst = c.hand[i], card = CARDS[inst.id];
  if (!card || !canPlay(inst)) return;
  if (card.reaction) return resolveReaction(inst, i);
  if (card.type === "attack") playSfx("slash");
  else if (card.type === "defense") playSfx("shield");
  else if (card.type === "magic") playSfx("spell");
  else playSfx("card");
  c.energy -= card.cost; c.hand.splice(i, 1); c.disc.push(inst); say("l_play", cname(card)); fx("#cmdr", card.effects.some((f) => f.a === "damage") ? "lunge-r" : "cast");
  for (const f of card.effects) {
    if (f.a === "damage") {
      let d = f.n + (c.e.burn > 0 ? f.burnBonus || 0 : 0);
      if (card.type === "attack" && c.bonus5) { d += 5; c.bonus5 = false; }
      if (card.type === "attack" && c.firstAtk) { d += c.firstAtk; c.firstAtk = 0; }
      if (card.type === "attack" && c.crown > 0) d += 3;
      const a = Math.min(c.e.block, d); c.e.block -= a; c.e.hp -= d - a; flash("#enemy", "-" + d); say("l_dmg", d);
    }
    if (f.a === "block") c.block += f.n;
    if (f.a === "draw") draw(f.n);
    if (f.a === "burn") c.e.burn = f.n;
    if (["corruption","memory","blood","pyro","petal","momentum","focus","fervor","sap","chord","soul","zeal"].includes(f.a)) gainCorr(f.n);
    if (f.a === "hurt") hurt(f.n);
    if (f.a === "ruin") c.ruin = (c.ruin || 0) + f.n;
    if (f.a === "stance") { c.stance = f.n; c.stUsed = false; }
    if (f.a === "heal") { c.hp = Math.min(g.maxHp, c.hp + f.n); flash("#cmdr", "+" + f.n); say("l_heal", f.n); }
  }
  tutEvent("play:" + inst.id);
  if (c.e.hp <= 0) return win();
  if (dead()) return lose();
  render();
}
function win() {
  playSfx("victory");
  c.over = true; c.phase = "over"; c.e.hp = 0;
  if (!c.tut) {
    g.turns += c.turn;
    if (c.key === "fearsome") {
      const left = Object.keys(RELICS).filter((r) => !g.relics.includes(r));
      if (left.length) { g.relicGain = left[rnd(0, left.length - 1)]; addRelic(g.relicGain); }
    }
    const [a, b] = c.e.gold || [0, 0];
    g.gain = Math.round(rnd(a, b) * (1 + (g.perks.gold || 0)));
    g.gold += g.gain;
    if (c.key === zone().boss) {
      profile.sp[g.cmd.id] = (profile.sp[g.cmd.id] || 0) + 1;
      saveProfile();
      g.spGain = 1;
    }
  }
  g.hp = Math.min(g.maxHp, c.hp + 10 + (g.perks.heal || 0));
  saveRun(); render();
  if (c.tut) { tutEvent("win"); return; }
  setTimeout(() => rewardScreen(), 700);
}
function lose() {
  playSfx("defeat");
  c.over = true; c.phase = "over"; c.hp = 0; saveRun(); render();
  setTimeout(() => end("fell"), 700);
}
function resolveReaction(inst, i) {
  playSfx("parry");
  c.hand.splice(i, 1); c.disc.push(inst);
  rl.res({ parried: true, fast: Date.now() - rl.t < 1500 });
}
async function endTurn() {
  if (c.phase !== "player" || !allowed("end")) return;
  playSfx("endTurn");
  const me = c; const gone = () => c !== me || me.over; tutEvent("endturn"); c.phase = "enemy"; render(); await sleep(500); if (gone()) return;
  const e = c.e, name = t("e_" + c.key); e.block = 0;
  if (e.burn > 0) { e.hp -= 3; e.burn--; say("l_burn"); if (e.hp <= 0) return win(); }
  const it = intent();
  if (it.t === "defend") { e.block += it.n; say("l_def", name); }
  else {
    fx("#enemy", "lunge-l"); let dmg = it.n;
    if (c.hand.some((x) => CARDS[x.id].reaction) && (!c.tut || tut.step >= 5) && !c.stun) {
      c.phase = "react"; render();
      const r = await new Promise((res) => { rl = { res, t: Date.now() }; setTimeout(() => res({ parried: false }), 6000); });
      if (gone()) return; c.phase = "enemy";
      if (r.parried) { dmg = 0; say("l_parry"); if (r.fast) { e.hp -= 5; say("l_counter"); flash("#enemy"); } tutEvent("react"); if (e.hp <= 0) return win(); }
    }
    if (dmg) { const dd = enemyHit(dmg); say("l_hit", name, dd); if (it.t === "stun") { c.stun = 2; say("l_stun"); } }
    render(); if (dead()) return lose();
  }
  e.i++; await sleep(300); if (gone()) return;
  if (c.stun > 0) c.stun--; c.stUsed = false; c.abUsed = false;
  if (c.stance > 0) { c.stance--; if (c.stance === 0) { hurt(3); say("l_stanceEnd"); } }
  if (c.crown > 0) { c.crown--; hurt(2); }
  c.turn++; c.energy = c.maxE; c.block = 0; c.phase = "player"; draw(1); render();
  if (dead()) lose();
}

/* ---------- Eventos aleatorios (cada ~10 turnos jugados) ---------- */
function afterNode() {
  if (g.node <= zone().nodes && g.turns >= g.nextEvt) {
    g.turns = 0; g.nextEvt = rnd(8, 12);
    return [merchantScreen, restScreen, fearsomeScreen][rnd(0, 2)]();
  }
  mapScreen();
}
function fearsomeScreen() {
  refresh = fearsomeScreen; c = null;
  app.innerHTML = `
    <div class="battle-screen-wrap" style="--zone-bg: url('/assets/backgrounds/citadel.webp');align-items:center;justify-content:center;">
      <div class="metaphor-event-card" style="border-color:var(--cherry-red);box-shadow:0 0 35px rgba(217,27,36,0.4);">
        <div class="metaphor-event-title" style="color:#FF8A7A;">${t("fearsome")}</div>
        <p class="metaphor-event-desc">${t("fearsomeDesc")}</p>
        <div style="display:flex;justify-content:center;margin-top:16px;">
          <button class="btn big-btn" id="fg" style="min-width:240px;border-color:var(--cherry-red);color:#FFB3BA;box-shadow:0 0 16px rgba(217,27,36,0.35);">
            ${t("fight")}
          </button>
        </div>
      </div>
    </div>
  `;
  $("#fg").onclick = () => { playSfx("slash"); startCombat("fearsome"); };
}

function merchantScreen(ev) {
  ev = ev || { cards: [...pool()].sort(() => Math.random() - 0.5).slice(0, 3).map((id) => ({ id, sold: false, price: CARDS[id].type === "curse" ? 25 : 40 + CARDS[id].cost * 10 })) };
  refresh = () => merchantScreen(ev); c = null; ev.cards.forEach((x) => markSeen(x.id));
  const prices = { potion: 25, tonic: 20, flask: 30 };
  app.innerHTML = `
    <div class="battle-screen-wrap" style="--zone-bg: url('/assets/events/merchant.webp');align-items:center;padding:32px 20px;">
      <div class="metaphor-event-card" style="max-width:860px;width:100%;">
        <div class="metaphor-event-title">${t("merchant")}</div>
        <p class="metaphor-event-desc">${t("merchantDesc")}</p>
        <div style="font-family:var(--font-numeric);font-size:1.15rem;color:var(--gold);margin:8px 0 16px 0;">
          ${t("gold")}: ${g.gold}
        </div>
        <div class="hand" id="mc" style="justify-content:center;gap:14px;margin-bottom:24px;"></div>
        <h2 style="font-family:var(--font-display);color:var(--gold);font-size:1.2rem;margin:12px 0 8px 0;border-bottom:1px solid rgba(214,168,56,0.2);padding-bottom:6px;">
          ${t("items")}
        </h2>
        <div id="mi" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;"></div>
        <div style="display:flex;justify-content:center;">
          <button class="btn" id="leave" style="min-width:180px;border-color:var(--ash);">${t("leave")}</button>
        </div>
      </div>
    </div>
  `;
  ev.cards.forEach((x) => {
    const ok = !x.sold && g.gold >= x.price;
    const w = document.createElement("div"); w.className = "shopcard";
    const el = renderCardImage(CARDS[x.id], { playable: ok, disabled: !ok });
    el.onclick = () => {
      if (!ok) return;
      playSfx("card");
      g.gold -= x.price; x.sold = true; g.deck.push(x.id); refresh();
    };
    const p = document.createElement("div"); p.className = "price";
    p.style.cssText = "font-family:var(--font-numeric);font-size:0.9rem;margin-top:4px;";
    p.textContent = x.sold ? t("sold") : `${t("gold")}: ${x.price}`;
    w.append(el._cardContainer || el, p); $("#mc").appendChild(w);
  });
  $("#mi").innerHTML = Object.keys(ITEMS).map((id) => `
    <div class="item" style="background:rgba(18,24,30,0.85);border:1px solid rgba(140,125,115,0.25);border-radius:4px;padding:8px 12px;">
      <span style="text-align:left;">
        ${ITEMS[id].icon} <b style="color:#FFF;">${iname(id)}</b> <span style="color:var(--gold);">(×${g.items[id] || 0})</span>
        <br><small style="color:var(--ash);font-size:11px;">${idesc(id)}</small>
      </span>
      <button class="metaphor-pill-btn" data-buy="${id}" ${g.gold < prices[id] ? "disabled" : ""} style="padding:4px 10px;font-size:11px;">
        ${prices[id]} ORO
      </button>
    </div>
  `).join("");
  document.querySelectorAll("[data-buy]").forEach((b) => (b.onclick = () => {
    const id = b.dataset.buy; if (g.gold < prices[id]) return;
    playSfx("click");
    g.gold -= prices[id]; g.items[id] = (g.items[id] || 0) + 1; refresh();
  }));
  $("#leave").onclick = () => { playSfx("click"); mapScreen(); };
}

function restScreen(mode) {
  refresh = () => restScreen(mode); c = null;
  if (mode === "remove") {
    app.innerHTML = `
      <div class="battle-screen-wrap" style="--zone-bg: url('/assets/events/rest-site.webp');align-items:center;padding:32px 20px;">
        <div class="metaphor-event-card" style="max-width:860px;width:100%;">
          <div class="metaphor-event-title">${t("restTitle")}</div>
          <p class="metaphor-event-desc">${t("pickRemove")}</p>
          <div class="hand" id="dk" style="justify-content:center;gap:12px;margin:20px 0;"></div>
          <div style="display:flex;justify-content:center;">
            <button class="btn" id="bk" style="min-width:180px;">${t("cancel")}</button>
          </div>
        </div>
      </div>
    `;
    g.deck.forEach((id, i) => {
      const el = renderCardImage(CARDS[id], { playable: true });
      el.onclick = () => {
        if (g.deck.length <= 6) return;
        playSfx("slash");
        g.deck.splice(i, 1);
        mapScreen();
      };
      $("#dk").appendChild(el._cardContainer || el);
    });
    $("#bk").onclick = () => { playSfx("click"); restScreen(); };
    return;
  }
  const heal = Math.floor(g.maxHp * 0.3);
  app.innerHTML = `
    <div class="battle-screen-wrap" style="--zone-bg: url('/assets/events/rest-site.webp');align-items:center;justify-content:center;">
      <div class="metaphor-event-card">
        <div class="metaphor-event-title">${t("restTitle")}</div>
        <p class="metaphor-event-desc">${t("restDesc")}</p>
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-top:16px;">
          <button class="btn big-btn" id="rh" style="min-width:200px;border-color:var(--gold);color:var(--gold);">
            ${t("restHeal", heal)}
          </button>
          <button class="btn big-btn" id="rr" ${g.deck.length <= 6 ? "disabled" : ""} style="min-width:200px;border-color:var(--blood);color:#FF8A7A;">
            ${t("restRemove")}
          </button>
        </div>
        <div style="display:flex;justify-content:center;margin-top:10px;">
          <button class="btn" id="rc" style="border-color:var(--ash);min-width:240px;">
            ${t("cashOut", gainedCards().length)}
          </button>
        </div>
      </div>
    </div>
  `;
  $("#rh").onclick = () => {
    playSfx("heal");
    g.hp = Math.min(g.maxHp, g.hp + heal);
    mapScreen();
  };
  $("#rr").onclick = () => { playSfx("click"); restScreen("remove"); };
  $("#rc").onclick = () => {
    if (confirm(t("cashConfirm"))) end("cashed", t("cashedN", bankRun()));
  };
}

/* ---------- Arte y cuenta ---------- */
function openImage(src, alt) {
  modal.hidden = false;
  modal.innerHTML = `<img src="${src}" alt="${esc(alt)}"><div class="modal-info"><h2>${esc(alt)}</h2><button class="btn" id="mclose">${t("close")}</button></div>`;
  $("#mclose").onclick = closeModal;
}
let loreTab = "world";
function renderLore() {
  const tabs = ["world", "chars", "beasts", "zones"];
  const img = (id) => loreTab === "chars" ? (COMMANDERS[id] && COMMANDERS[id].image) : loreTab === "beasts" ? (ENEMIES[id] && ENEMIES[id].image) : loreTab === "zones" ? (ZONES.find((z) => z.id === id) && ZONES.find((z) => z.id === id).bg) : "";

  coll.innerHTML = `
    <div class="metaphor-subpage">
      ${subpageHeader("lore", "loreDesc")}
      <div class="metaphor-filter-strip">
        <div class="metaphor-filter-tabs">
          ${tabs.map((k) => `
            <button class="metaphor-pill-btn ${k === loreTab ? 'active' : ''}" data-lt="${k}">
              ${t("lt_" + k)}
            </button>
          `).join("")}
        </div>
      </div>
      <div class="metaphor-codex" id="lorelist"></div>
    </div>
  `;
  bindSubpageHeader();
  coll.querySelectorAll("[data-lt]").forEach((b) => (b.onclick = () => { loreTab = b.dataset.lt; renderLore(); }));
  const list = $("#lorelist");
  const lang = getLang();
  const labelMap = {
    weapon: { es: "Arma", en: "Weapon", eu: "Arma" },
    role: { es: "Arquetipo Táctico", en: "Tactical Archetype", eu: "Arketipo Taktikoa" },
    origin: { es: "Origen", en: "Origin", eu: "Jatorria" },
    resource: { es: "Recurso de Combate", en: "Combat Resource", eu: "Borroka Baliabidea" },
    epoch: { es: "Cronología", en: "Chronology", eu: "Kronologia" },
    capital: { es: "Sede Histórica", en: "Historical Seat", eu: "Egoitza Historikoa" },
    artifact: { es: "Reliquia Sagrada", en: "Sacred Relic", eu: "Erlikia Sakratua" },
    primal: { es: "Fuerzas Primordiales", en: "Primal Forces", eu: "Indar Primordialak" },
    peril: { es: "Peligro Mayor", en: "Major Peril", eu: "Arrisku Nagusia" },
    currency: { es: "Moneda de Cambio", en: "Currency", eu: "Trukaketarako Moneta" },
    sanctuary: { es: "Santuario de Tregua", en: "Truce Sanctuary", eu: "Tregua Santutegia" },
    rule: { es: "Ley Suprema", en: "Supreme Law", eu: "Goi Legea" },
    merchant: { es: "Comercio Errante", en: "Wandering Trade", eu: "Merkataritza Ibiltaria" },
    danger: { es: "Clasificación de Amenaza", en: "Threat Level", eu: "Mehatxu Maila" },
    tactics: { es: "Pautas de Combate", en: "Combat Patterns", eu: "Borroka Ereduak" },
    loot: { es: "Botín Estimado", en: "Estimated Loot", eu: "Balioetsitako Harrapakina" },
    climate: { es: "Entorno y Atmósfera", en: "Environment", eu: "Ingurunea eta Giroa" },
    rulers: { es: "Soberanía de Zona", en: "Zone Sovereignty", eu: "Eremuaren Subiranotasuna" }
  };

  const tagMap = {
    world: { es: "CRÓNICA DEL REINO QUEBRADO", en: "CHRONICLE OF THE BROKEN REALM", eu: "ERREINU HAUTSIAREN KRONIKA" },
    chars: { es: "ARCHIVOS DE COMANDANTE", en: "COMMANDER ARCHIVES", eu: "KOMANDANTEAREN ARTXIBOAK" },
    beasts: { es: "BESTIARIO DE CENIZA", en: "CINDER BESTIARY", eu: "ERRAUTS-PIZTIARIOA" },
    zones: { es: "CARTOGRAFÍA DEL PÁRAMO", en: "WASTELAND CARTOGRAPHY", eu: "LURRALDEEN KARTOGRAFIA" }
  };

  (LORE[loreTab] || []).forEach((en) => {
    const locked = loreTab === "beasts" && !seenE.has(en.id);
    const artPath = img(en.id);
    const titleText = locked ? t("loreLocked") : pick(en.t);
    const tag = (tagMap[loreTab] && (tagMap[loreTab][lang] || tagMap[loreTab].es)) || "CÓDICE";

    let badgesHtml = "";
    if (loreTab === "chars" && COMMANDERS[en.id]) {
      const cmd = COMMANDERS[en.id];
      badgesHtml = `
        <div class="metaphor-codex-meta-badges">
          <span class="battle-chip battle-chip--resource">✦ ${cmd.resource}</span>
          <span class="battle-chip battle-chip--hp">❤ ${cmd.hp} HP</span>
        </div>
      `;
    } else if (loreTab === "beasts" && ENEMIES[en.id]) {
      const foe = ENEMIES[en.id];
      badgesHtml = `
        <div class="metaphor-codex-meta-badges">
          <span class="battle-chip battle-chip--hp">❤ ${foe.hp} HP</span>
          <span class="battle-chip">💰 ${foe.gold ? foe.gold[0] + '-' + foe.gold[1] : '15-25'}</span>
        </div>
      `;
    }

    // Quote Block
    let quoteHtml = "";
    if (!locked && en.quote) {
      quoteHtml = `<div class="metaphor-codex-quote">${pick(en.quote)}</div>`;
    }

    // Dossier Specs Grid
    let dossierHtml = "";
    if (!locked && en.dossier) {
      const items = Object.entries(en.dossier).map(([k, val]) => {
        const lbl = (labelMap[k] && (labelMap[k][lang] || labelMap[k].es)) || k;
        return `
          <div class="metaphor-codex-dossier-item">
            <span class="metaphor-codex-dossier-label">${lbl}</span>
            <span class="metaphor-codex-dossier-val">${pick(val)}</span>
          </div>
        `;
      }).join("");
      dossierHtml = `<div class="metaphor-codex-dossier-grid">${items}</div>`;
    }

    // Multi-section narrative or simple body text
    let bodyContent = "";
    if (locked) {
      bodyContent = `<div class="metaphor-codex-text">${t("loreHint")}</div>`;
    } else if (en.sections && en.sections.length > 0) {
      bodyContent = en.sections.map((sec, idx) => {
        const raw = pick(sec.text);
        const secTitle = pick(sec.title);
        let secFormatted = raw;
        if (idx === 0 && raw && raw.length > 0) {
          secFormatted = `<span class="metaphor-dropcap">${raw.charAt(0)}</span>${raw.slice(1)}`;
        }
        return `
          <div class="metaphor-codex-section">
            <h3 class="metaphor-codex-section-title">${secTitle}</h3>
            <div class="metaphor-codex-text">${secFormatted}</div>
          </div>
        `;
      }).join("");
    } else if (en.p) {
      const raw = pick(en.p);
      const formatted = raw && raw.length > 0 ? `<span class="metaphor-dropcap">${raw.charAt(0)}</span>${raw.slice(1)}` : raw;
      bodyContent = `<div class="metaphor-codex-text">${formatted}</div>`;
    }

    const hasArt = artPath && !locked;
    const article = document.createElement("article");
    article.className = `metaphor-codex-entry ${hasArt ? '' : 'metaphor-codex-entry--no-art'}`;

    article.innerHTML = `
      ${hasArt ? `
        <div class="metaphor-codex-visual">
          <div class="metaphor-codex-frame">
            <img class="metaphor-codex-img" src="${artPath}" alt="${titleText}" onerror="this.style.display='none';if(this.nextElementSibling)this.nextElementSibling.style.display='block';">
            <div style="display:none;width:100%;height:100%;">${getEnemySilhouette(en.id)}</div>
          </div>
          ${badgesHtml}
        </div>
      ` : ''}
      <div class="metaphor-codex-body">
        <div class="metaphor-codex-tag">${tag}</div>
        <h2 class="metaphor-codex-title">${titleText}</h2>
        <div class="metaphor-codex-divider"></div>
        ${quoteHtml}
        ${dossierHtml}
        ${bodyContent}
      </div>
    `;
    list.appendChild(article);
  });
}

let skillCmd = "corina";
function renderSkills() {
  const id = skillCmd, list = SKILLS[id] || [], owned = profile.skills[id] || [], sp = profile.sp[id] || 0, vault = profile.vault[id] || [], L = getLang();
  
  coll.innerHTML = `
    <div class="metaphor-subpage">
      ${subpageHeader("skills", "skillsSub")}
      <div class="metaphor-filter-strip">
        <div class="metaphor-filter-tabs">
          ${Object.keys(COMMANDERS).map((k) => `
            <button class="metaphor-pill-btn ${k === id ? 'active' : ''}" data-sc="${k}">
              ${t("c_" + k)}
            </button>
          `).join("")}
        </div>
        <div class="metaphor-sp-badge">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;"><polygon points="12,2 15,9 22,12 15,15 12,22 9,15 2,12 9,9"/></svg>
          ${t("spPoints", sp)}
        </div>
      </div>
      <div class="metaphor-skill-tree">
        ${list.map((s) => {
          const has = owned.includes(s.id);
          const reqSk = s.req && list.find((x) => x.id === s.req);
          const ok = !s.req || owned.includes(s.req);
          return `
            <div class="metaphor-skill-card ${has ? 'unlocked' : ''}">
              <div class="metaphor-skill-header">
                <span class="metaphor-skill-name">${pick(s.name)}</span>
                <span class="metaphor-skill-cost">${s.cost} SP</span>
              </div>
              <p class="metaphor-skill-desc">${pick(s.desc)}</p>
              ${reqSk ? `<div class="metaphor-skill-req">${t("needReq", pick(reqSk.name))}</div>` : ''}
              <button class="metaphor-skill-action" data-sk="${s.id}" ${has || !ok || sp < s.cost ? 'disabled' : ''}>
                ${has ? t("unlocked") : t("unlock", s.cost)}
              </button>
            </div>
          `;
        }).join("")}
      </div>
      ${vault.length ? `
        <div style="margin-top:20px;padding:14px 18px;background:rgba(18,22,25,0.7);border-left:3px solid var(--gold);color:var(--ash);font-size:0.9rem;">
          <strong style="color:var(--gold);font-family:var(--font-display);">${t("vault", vault.length)}:</strong> 
          ${vault.map((x) => cname(CARDS[x])).join(", ")}
        </div>
      ` : ''}
    </div>
  `;
  bindSubpageHeader();
  coll.querySelectorAll("[data-sc]").forEach((b) => (b.onclick = () => { skillCmd = b.dataset.sc; renderSkills(); }));
  coll.querySelectorAll("[data-sk]").forEach((b) => (b.onclick = () => {
    const s = list.find((x) => x.id === b.dataset.sk);
    if (!s || owned.includes(s.id) || sp < s.cost || (s.req && !owned.includes(s.req))) return;
    profile.sp[id] = sp - s.cost;
    profile.skills[id] = [...owned, s.id];
    saveProfile();
    renderSkills();
  }));
}

function renderArt() {
  const groups = ["all", "commanders", "enemies", "relics", "events", "backgrounds"];
  coll.innerHTML = `
    <div class="metaphor-subpage">
      ${subpageHeader("art", "artDesc")}
      <div class="metaphor-filter-strip">
        <div class="metaphor-filter-tabs">
          ${groups.map((k) => `
            <button class="metaphor-pill-btn ${k === artTab ? 'active' : ''}" data-at="${k}">
              ${k === "all" ? t("all") : t("g_" + k)}
            </button>
          `).join("")}
        </div>
      </div>
      <div class="metaphor-art-gallery" id="ag"></div>
    </div>
  `;
  bindSubpageHeader();
  coll.querySelectorAll("[data-at]").forEach((b) => (b.onclick = () => { artTab = b.dataset.at; renderArt(); }));
  const ag = $("#ag");
  ART.filter((a) => artTab === "all" || a.group === artTab).forEach((a) => {
    const nm = pick(a.name);
    const card = document.createElement("div");
    card.className = "metaphor-art-frame";
    const img = document.createElement("img");
    img.src = a.path;
    img.alt = nm;
    img.loading = "lazy";
    img.onerror = () => {
      card.classList.add("art--pending");
      img.remove();
      card.insertAdjacentHTML("afterbegin", `<div class="art__ph" style="padding:40px 10px;text-align:center;color:var(--ash);font-size:12px;">${t("artPending")}<br><small style="opacity:0.6">${a.path}</small></div>`);
    };
    img.onclick = () => openImage(a.path, nm);
    card.append(img);
    card.insertAdjacentHTML("beforeend", `<div class="metaphor-art-caption">${nm}</div>`);
    ag.appendChild(card);
  });
}

function renderAccount() {
  const d = draft, mf = getManifest(), L = getLang();
  const sw = (k, arr) => arr.map((c, i) => `<button class="sw ${d[k] === i ? "on" : ""}" data-k="${k}" data-i="${i}" style="background:${c}" aria-label="${k} ${i + 1}"></button>`).join("");
  const op = (k, names, pre) => names.map((n, i) => `<button class="btn ${d[k] === i ? "on" : ""}" data-k="${k}" data-i="${i}">${t(pre + n)}</button>`).join("");
  const parts = mf ? mf.layers.map((l) => { const cur = (d.layers && d.layers[l.id]) ?? (l.default ?? 1);
      return `<div style="margin-bottom:12px;"><b style="color:var(--gold);font-family:var(--font-display);font-size:0.85rem;letter-spacing:0.08em;text-transform:uppercase;">${esc((l.name && (l.name[L] || l.name.es)) || l.id)}</b><div class="opts" style="margin-top:6px;">${Array.from({ length: l.count + 1 }, (_, i) => (i === 0 && l.required) ? "" : `<button class="thumb ${cur === i ? "on" : ""}" data-l="${l.id}" data-i="${i}">${i === 0 ? "∅" : `<img src="assets/avatar/${l.id}/${i}.png" alt="">`}</button>`).join("")}</div></div>`; }).join("")
    : `<div><b>${t("skin")}</b><div class="opts">${sw("skin", SKIN)}</div></div><div><b>${t("hair")}</b><div class="opts">${op("hairStyle", HS, "hs_")}</div></div>
       <div><b>${t("hairColor")}</b><div class="opts">${sw("hairColor", HAIRC)}</div></div><div><b>${t("eyes")}</b><div class="opts">${op("eyes", EYES, "ey_")}</div></div>
       <div><b>${t("armor")}</b><div class="opts">${sw("armor", ARMC)}</div></div><div><b>${t("accessory")}</b><div class="opts">${op("acc", ACC, "ac_")}</div></div>`;

  coll.innerHTML = `
    <div class="metaphor-subpage">
      ${subpageHeader("acc", "accDesc")}
      <div class="metaphor-account-crest">
        <div class="metaphor-avatar-frame">
          <div class="av">${avatarHTML(d, 220)}</div>
          <div class="row" style="margin-top:14px;justify-content:center;gap:8px;">
            <button class="metaphor-pill-btn" id="arand">${t("rand")}</button>
            <label class="metaphor-pill-btn" style="cursor:pointer;">
              ${t("importImg")}
              <input id="afile" type="file" accept="image/*" hidden>
            </label>
            ${d.custom ? `<button class="metaphor-pill-btn" id="arm" style="border-color:var(--blood);color:var(--blood);">${t("removeImg")}</button>` : ""}
          </div>
        </div>

        <div class="metaphor-account-form">
          <label style="display:block;margin-bottom:16px;">
            <span style="display:block;color:var(--gold);font-family:var(--font-display);font-size:0.85rem;margin-bottom:6px;letter-spacing:0.08em;text-transform:uppercase;">${t("username")}</span>
            <input id="uname" maxlength="16" value="${esc(d.name || "")}" placeholder="${t("anon")}" style="width:100%;max-width:320px;padding:10px 14px;background:#0d1114;border:1px solid #3a444a;color:var(--ink);font-family:inherit;">
            <small style="display:block;margin-top:4px;color:var(--ash);">${t("usernameHint")}</small>
          </label>

          <div style="margin-bottom:16px;">
            <label style="display:flex;align-items:center;gap:8px;cursor:pointer;">
              <input type="checkbox" id="ause" ${d.useAvatar !== false ? "checked" : ""}> 
              <span style="color:var(--ink);">${t("useAvatar")}</span>
            </label>
            <small style="display:block;margin-top:4px;color:var(--ash);">${t("avatarHint")}</small>
          </div>

          <div class="metaphor-avatar-parts">
            ${parts}
          </div>

          <div class="row" style="justify-content:flex-start;margin-top:20px;gap:12px;">
            <button class="btn big-btn" id="asave" style="border-color:var(--gold);color:var(--gold);min-width:180px;">${t("save")}</button>
            <span id="amsg" style="align-self:center;color:var(--gold);"></span>
          </div>

          <section class="pvp" style="margin-top:30px;padding:16px;border-top:1px solid rgba(214,168,56,0.25);">
            <h2 style="font-family:var(--font-display);color:var(--gold);font-size:1.1rem;margin-bottom:6px;">${t("pvpTitle")}</h2>
            <p style="color:var(--ash);font-size:0.85rem;margin-bottom:10px;">${t("pvpDesc")}</p>
            <button class="btn" disabled style="opacity:0.5;">${t("pvpSoon")}</button>
          </section>
        </div>
      </div>
    </div>
  `;
  bindSubpageHeader();
  const keep = () => { draft.name = $("#uname").value; draft.useAvatar = $("#ause").checked; };
  coll.querySelectorAll("[data-k]").forEach((b) => (b.onclick = () => { keep(); draft[b.dataset.k] = +b.dataset.i; draft.custom = ""; renderAccount(); }));
  coll.querySelectorAll("[data-l]").forEach((b) => (b.onclick = () => { keep(); draft.layers = { ...draft.layers, [b.dataset.l]: +b.dataset.i }; draft.custom = ""; renderAccount(); }));
  $("#arand").onclick = () => {
    keep(); draft.custom = "";
    if (mf) draft.layers = Object.fromEntries(mf.layers.map((l) => [l.id, rnd(l.required ? 1 : 0, l.count)]));
    else Object.assign(draft, { skin: rnd(0, SKIN.length - 1), hairStyle: rnd(0, HS.length - 1), hairColor: rnd(0, HAIRC.length - 1), eyes: rnd(0, EYES.length - 1), armor: rnd(0, ARMC.length - 1), acc: rnd(0, ACC.length - 1) });
    renderAccount();
  };
  $("#afile").onchange = (e) => {
    const f = e.target.files[0]; if (!f) return; keep();
    const img = new Image(); img.onload = () => {
      const cv = document.createElement("canvas"); cv.width = 240; cv.height = 288; const cx = cv.getContext("2d");
      const r = Math.max(240 / img.width, 288 / img.height), w = img.width * r, h = img.height * r; cx.drawImage(img, (240 - w) / 2, (288 - h) / 2, w, h);
      draft.custom = cv.toDataURL("image/jpeg", 0.85); URL.revokeObjectURL(img.src); renderAccount();
    }; img.src = URL.createObjectURL(f);
  };
  const rm = $("#arm"); if (rm) rm.onclick = () => { keep(); draft.custom = ""; renderAccount(); };
  $("#asave").onclick = () => {
    const n = $("#uname").value.trim();
    if (n && !/^[\p{L}\p{N}_ -]{3,16}$/u.test(n)) { $("#amsg").textContent = t("saveErr"); return; }
    keep(); draft.name = n; account = { ...draft }; LS.set("account", account); bar(); $("#amsg").textContent = t("saved");
  };
}

/* ---------- Objetos ---------- */
function itemsHTML() {
  const list = Object.keys(ITEMS).filter((id) => (g.items[id] || 0) > 0), n = list.reduce((a, id) => a + g.items[id], 0);
  return `<div class="items"><button class="btn" id="itbtn" ${tut ? "disabled" : ""}>${t("items")} (${n})</button>` +
    (itemsOpen && !tut ? `<div class="items-list">${list.length ? list.map((id) => `<div class="item"><span>${ITEMS[id].icon} <b>${iname(id)}</b> ×${g.items[id]}<br><small>${idesc(id)}</small></span><button class="btn" data-item="${id}">${t("use")}</button></div>`).join("") : `<small>${t("noItems")}</small>`}</div>` : "") + `</div>`;
}
function bindItems() {
  const b = $("#itbtn"); if (b) b.onclick = () => { itemsOpen = !itemsOpen; refresh(); };
  document.querySelectorAll("[data-item]").forEach((x) => (x.onclick = () => useItem(x.dataset.item)));
}
function useItem(id) {
  if (tut || !g.items[id]) return; const it = ITEMS[id];
  if (!c) { if (!it.effects.every((f) => f.a === "heal")) return; } else if (c.over) return;
  g.items[id]--;
  for (const f of it.effects) {
    if (f.a === "heal") { if (c) c.hp = Math.min(g.maxHp, c.hp + f.n); else g.hp = Math.min(g.maxHp, g.hp + f.n); }
    if (f.a === "block") c.block += f.n;
    if (f.a === "damage") { const a = Math.min(c.e.block, f.n); c.e.block -= a; c.e.hp -= f.n - a; flash("#enemy"); }
    if (f.a === "burn") c.e.burn = f.n;
  }
  if (c) { fx("#cmdr", "cast"); say("l_item", iname(id)); if (c.e.hp <= 0) return win(); render(); } else refresh();
}

/* ---------- Render de combate ---------- */
function render() {
  if (!c) return;
  const it = intent(), e = c.e, cm = g.cmd, s = tutStep(), name = t("e_" + c.key), pct = (a, b) => Math.max(0, (a / b) * 100);
  const z = zone();
  const st = [c.hp < g.maxHp / 2 ? `<span class="chip bad">${t("st_wounded")}</span>` : "", c.ruin ? `<span class="chip bad">${t("st_ruin", c.ruin)}</span>` : "",
    c.stance > 0 ? `<span class="chip">${t("st_stance", c.stance)}</span>` : "", c.crown > 0 ? `<span class="chip bad">${t("st_crown", c.crown)}</span>` : "",
    c.stun > 0 ? `<span class="chip bad">${t("st_stun")}</span>` : ""].join("");
  const intentTxt = it.t === "attack" ? t("atk", it.n) : it.t === "stun" ? t("atkStun", it.n) : t("def", it.n);
  const abOk = c.phase === "player" && !c.abUsed && c.corr >= 2 && !tut;

  app.innerHTML = `
    <div class="battle-screen-wrap" style="--zone-bg: url('${z ? z.bg : '/assets/backgrounds/ashfields.webp'}');">
      <header class="battle-topbar">
        <div class="battle-topbar__left">
          <div class="battle-zone-tag">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" style="margin-right:6px;"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            <span>${esc(z ? (z.name || t("zone_" + z.id)) : "Túmulo")} · ${t("node", g.node, z ? z.nodes : 5)}</span>
          </div>
          <div class="battle-chip battle-chip--resource">
            <span>💰 ${g.gold} ${t("gold")}</span>
          </div>
        </div>
        <div class="battle-topbar__right">
          <button id="battleMuteBtn" class="meta-util-btn" type="button" title="Audio">
            ${muted ? '🔇 MUTE' : '🔊 AUDIO'}
          </button>
          <button id="battleFleeBtn" class="meta-util-btn" type="button" title="Rendirse">
            ✕ ${t("flee") || "Huir"}
          </button>
        </div>
      </header>

      <div class="battle-grid-stage">
        <!-- Chronicle Log -->
        <aside class="battle-chronicle-card">
          <div class="battle-chronicle-head">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            <span>${t("combatLog") || "CRÓNICA"}</span>
          </div>
          <div class="battle-chronicle-body" id="log">
            ${c.log.slice(-10).map(([k, a]) => `<div class="battle-log-entry">${t(k, ...a)}</div>`).join("")}
          </div>
          <div class="battle-card-inspect" id="cardinfo">
            ${t("hoverHint")}
          </div>
        </aside>

        <!-- Arena Field -->
        <section class="battle-arena-field">
          <!-- Enemy Combatant -->
          <div class="battle-combatant battle-combatant--foe" id="enemy">
            <div class="battle-portrait-frame">
              ${e.image ? `<img class="battle-portrait-img" src="${e.image}" alt="${name}" onerror="this.style.display='none';if(this.nextElementSibling)this.nextElementSibling.style.display='block';">` : ''}
              <div style="${e.image ? 'display:none;' : ''}width:100%;height:100%;">${getEnemySilhouette(c.key)}</div>
            </div>
            <div class="battle-combatant-info">
              <div class="battle-combatant-name">${name}</div>
              <div class="battle-combatant-role">${t("e_sub_" + c.key) || "Enemigo del Páramo"}</div>
              <div class="battle-hp-bar">
                <div class="battle-hp-fill" style="width:${pct(e.hp, e.max)}%"></div>
              </div>
              <div class="battle-stat-badges">
                <span class="battle-chip battle-chip--hp">❤ ${Math.max(0, e.hp)}/${e.max}</span>
                ${e.block ? `<span class="battle-chip battle-chip--def">🛡 DEF ${e.block}</span>` : ""}
                ${e.burn ? `<span class="battle-chip" style="border-color:#E06020;color:#FFB088;">🔥 ${t("burn", e.burn)}</span>` : ""}
                <span class="battle-intent-badge" id="intent">
                  ${it.t === "attack" ? '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M14.5 2.5L12 5l7 7 2.5-2.5L14.5 2.5zM3 21l3-3 5-5-2-2-5 5-3 3 2 2z"/></svg>' : '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z"/></svg>'}
                  <span>${intentTxt}</span>
                </span>
              </div>
            </div>
          </div>

          <!-- Hero Combatant -->
          <div class="battle-combatant battle-combatant--hero" id="cmdr">
            <div class="battle-portrait-frame">
              <img class="battle-portrait-img" src="${cm.image}" alt="${cm.name}">
            </div>
            <div class="battle-combatant-info">
              <div class="battle-combatant-name">${t("c_" + cm.id)}</div>
              <div class="battle-combatant-role">${t("cmdrTitle_" + cm.id) || cm.title}</div>
              <div class="battle-hp-bar">
                <div class="battle-hp-fill" style="width:${pct(c.hp, g.maxHp)}%"></div>
              </div>
              <div class="battle-stat-badges">
                <span class="battle-chip battle-chip--hp">❤ ${Math.max(0, c.hp)}/${g.maxHp}</span>
                <span class="battle-chip battle-chip--def">🛡 ${c.block}</span>
                <span class="battle-chip battle-chip--energy">⚡ PA ${c.energy}/${c.maxE}</span>
                <span class="battle-chip battle-chip--resource">✦ ${t("res_" + cm.id)}: ${c.corr}</span>
                ${st}
              </div>
            </div>
          </div>
        </section>

        <!-- Rail -->
        <aside class="battle-action-rail">
          <div class="battle-turn-label">${t("turn", c.turn)}</div>

          ${c.phase === "react" ? `
            <div class="react-bar" style="background:rgba(217,27,36,0.25);border:1px solid var(--cherry-red);padding:8px;border-radius:4px;text-align:center;">
              <div style="font-size:0.85rem;margin-bottom:4px;color:#FFB3BA;">${t("react", it.n)}</div>
              <button class="btn" id="take" style="width:100%;font-size:0.85rem;">${t("take")}</button>
            </div>
          ` : ""}

          <button class="battle-end-turn-btn" id="end" ${c.phase !== "player" || !allowed("end") ? "disabled" : ""}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
            <span>${t("end")}</span>
          </button>

          <button class="battle-ability-btn" id="abil" title="${esc(t("abd_" + cm.id))}" ${abOk ? "" : "disabled"}>
            ✦ ${t("ab_" + cm.id)} (2)
          </button>
          <div style="color:var(--ash);font-size:11px;line-height:1.4;text-align:center;">${esc(t("abd_" + cm.id))}</div>

          <div class="deck-counters" style="display:flex;justify-content:space-between;align-items:center;background:rgba(18,24,30,0.8);padding:8px 12px;border-radius:4px;border:1px solid rgba(140,125,115,0.2);">
            <button class="btn" id="vdeck" style="font-size:12px;padding:4px 10px">${t("viewDeck", c.deck.length)}</button>
            <small style="color:var(--ash)">${t("discardCount", c.disc.length)}</small>
          </div>

          ${itemsHTML()}

          ${g.relics && g.relics.length ? `
            <div class="relics" style="margin-top:6px;">
              <small style="color:var(--gold);display:block;margin-bottom:4px;font-family:var(--font-display);">${t("relics")}</small>
              <div style="display:flex;gap:4px;flex-wrap:wrap;">
                ${g.relics.map((id) => `<span class="chip" title="${esc(pick(RELICS[id].desc))}">${esc(pick(RELICS[id].name))}</span>`).join("")}
              </div>
            </div>
          ` : ""}
        </aside>

        <!-- Hand -->
        <div class="hand fan" id="hand" style="grid-area: hand;"></div>
      </div>
    </div>
  `;

  const n = c.hand.length, mid = (n - 1) / 2;
  c.hand.forEach((inst, i) => {
    const card = CARDS[inst.id];
    if (!card) return;
    const ok = canPlay(inst);
    const el = renderCardImage(card, { playable: ok, disabled: !ok && !s, locked: !!s && !ok });
    const target = el._cardContainer || el;
    target.style.setProperty("--r", `${(i - mid) * 2.5}deg`); 
    target.style.setProperty("--y", `${Math.pow(i - mid, 2) * 1.6}px`);
    el.style.setProperty("--r", `${(i - mid) * 2.5}deg`); 
    el.style.setProperty("--y", `${Math.pow(i - mid, 2) * 1.6}px`);
    const info = () => {
      playSfx("hover");
      const b = $("#cardinfo");
      if (b) b.innerHTML = `<b>${cname(card)}</b> — ${cdesc(card)}${explain(card)}`;
    };
    el.addEventListener("mouseenter", info); 
    el.addEventListener("focus", info);
    target.addEventListener("mouseenter", info);
    el.onclick = () => play(inst.uid);
    target.onclick = (e) => {
      if (e.target.closest(".card__eye")) return;
      play(inst.uid);
    };
    $("#hand").appendChild(target);
  });

  const mb = $("#battleMuteBtn"); if (mb) mb.onclick = () => { toggleMute(); render(); };
  const fb = $("#battleFleeBtn"); if (fb) fb.onclick = () => { if (confirm(t("abandonPrompt") || "¿Rendirte y abandonar esta expedición?")) lose(); };
  $("#end").onclick = endTurn;
  $("#abil").onclick = useAbility;
  const tk = $("#take"); if (tk) tk.onclick = () => rl && rl.res({ parried: false });
  const vd = $("#vdeck"); if (vd) vd.onclick = () => openDeckModal(c.deck.map((x) => x.id));
  bindItems();
  const logEl = $("#log"); if (logEl) logEl.scrollTop = 1e6;
  decorateTutorial();
  runFx();
}
initIcons(); loadManifest().then(() => { if (tab === "acc") renderAccount(); });
bar(); menu();

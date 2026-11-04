import { TUTORIAL, SKILLS, ART, ZONES } from "./data.js";
import { LORE } from "./lore.js";
const EN = {
  // Corina
  "thorn-slash":["Thorn Thrust","Deal 8 damage. +4 if enemy is Burning. Gain 1 Petal."],
  "petal-guard":["Petal Ward","Gain 10 Block. Gain 1 Petal."],
  "rose-dance":["Rose Dance","Gain 6 Block, draw 1 card and gain 1 Petal."],
  "bloody-lotus":["Bloody Lotus","Deal 14 damage and apply 2 Burning. Gain 2 Petals."],
  "black-lily":["Black Lily","Only against enemy attack: nullify damage. Counter 5 and gain 1 Petal."],
  "hemlock-strike":["Deadly Hemlock","Deal 16 damage and apply 3 Burning. Gain 1 Ruin and 2 Petals."],
  "briar-wall":["Briar Wall","Gain 16 Block and gain 1 Petal."],
  "petal-tempest":["Petal Tempest","Deal 18 devastating damage and gain 2 Petals."],
  // Lysander
  "lance-thrust":["Lance Thrust","Deal 9 damage. Gain 1 Momentum."],
  "phalanx-guard":["Phalanx Guard","Gain 9 Block and gain 1 Momentum."],
  "vaulting-strike":["Vaulting Strike","Gain 5 Block, draw 1 card and gain 1 Momentum."],
  "dragon-pierce":["Dragon Pierce","Deal 15 piercing damage and gain 2 Momentum."],
  "iron-spearwall":["Spearwall","Gain 18 Block and gain 2 Momentum."],
  "iron-charge":["Vanguard Charge","Deal 16 damage and gain 1 Momentum."],
  // Faye
  "spectral-arrow":["Spectral Arrow","Deal 8 armor-piercing damage. Gain 1 Focus."],
  "hunter-ward":["Hunter's Ward","Gain 9 Block and gain 1 Focus."],
  "wind-step":["Wind Step","Gain 5 Block, draw 1 card and gain 1 Focus."],
  "rain-of-arrows":["Rain of Arrows","Deal 14 damage and gain 2 Focus."],
  "snare-trap":["Bramble Trap","Deal 6 damage, apply 2 Burning and gain 1 Focus."],
  "piercing-gale":["Phantom Gale","Deal 10 damage, draw 1 card and gain 1 Focus."],
  // Valerius
  "halberd-cleave":["Halberd Cleave","Deal 9 heavy damage. Gain 1 Fervor."],
  "holy-bastion":["Sacred Bastion","Gain 9 Block and gain 1 Fervor."],
  "righteous-sweep":["Righteous Sweep","Gain 5 Block, draw 1 card and gain 1 Fervor."],
  "divine-smite":["Radiant Smite","Deal 15 holy damage and gain 2 Fervor."],
  "penitent-prayer":["Penitent's Prayer","Restore 6 health and gain 1 Fervor."],
  "sunburst-barrier":["Sunburst Barrier","Gain 18 consecrated Block and gain 2 Fervor."],
  // Elora
  "bramble-lash":["Bramble Lash","Deal 8 thorn damage. Gain 1 Sap."],
  "barkskin":["Barkskin","Gain 10 natural Block and gain 1 Sap."],
  "spore-cloud":["Spore Cloud","Gain 5 Block, draw 1 card and gain 1 Sap."],
  "wrath-of-nature":["Arboreal Wrath","Deal 14 damage, apply 2 Burning and gain 2 Sap."],
  "root-embrace":["Root Embrace","Restore 6 health, gain 5 Block and gain 1 Sap."],
  "ancient-growth":["Primeval Growth","Gain 18 Block and gain 2 Sap."],
  // Carmilla
  "crimson-sip":["Crimson Bite","Deal 8 damage and restore 3 health. Gain 1 Blood."],
  "mist-veil":["Mist Veil","Gain 9 Block and gain 1 Blood."],
  "bat-swarm":["Bat Swarm","Gain 5 Block, draw 1 card and gain 1 Blood."],
  "blood-feast":["Blood Feast","Deal 15 damage and restore 4 health. Gain 2 Blood."],
  "sanguine-lance":["Blood Lance","Lose 3 health, deal 18 damage and gain 2 Blood."],
  "gothic-embrace":["Crimson Embrace","Gain 18 Block and gain 2 Blood."],
  // Kaelen
  "dissonant-chord":["Dissonant Chord","Deal 8 resonant damage. Gain 1 Chord."],
  "ballad-of-iron":["Ballad of Iron","Gain 9 Block and gain 1 Chord."],
  "crescendo":["Crescendo","Gain 5 Block, draw 1 card and gain 1 Chord."],
  "funeral-sonata":["Funeral Sonata","Deal 14 damage and gain 2 Chords."],
  "screech-of-sorrow":["Requiem Lament","Deal 10 damage, apply 2 Burning and gain 1 Chord."],
  "hymn-of-aegis":["Hymn of Aegis","Gain 18 Block and gain 2 Chords."],
  // Malakor
  "void-bolt":["Void Bolt","Deal 9 dark damage. Gain 1 Soul."],
  "eldritch-ward":["Abyssal Ward","Gain 9 Block and gain 1 Soul."],
  "dark-pact":["Dark Pact","Lose 3 health, draw 2 cards and gain 2 Souls."],
  "soul-harvest":["Soul Harvest","Deal 15 damage and gain 2 Souls."],
  "shadowflame":["Shadowflame","Deal 13 damage, apply 3 Burning and gain 1 Soul."],
  "void-gate":["Threshold of the Void","Gain 18 void Block and gain 2 Souls."],
  // Roland
  "holy-strike":["Cross Slash","Deal 9 holy damage. Gain 1 Zeal."],
  "crusader-shield":["Crusader's Shield","Gain 10 templar Block. Gain 1 Zeal."],
  "battle-hymn":["Hymn of the Vow","Gain 6 Block, draw 1 card and gain 1 Zeal."],
  "smite-heretic":["Smite the Heretic","Deal 16 damage and apply 2 holy Burning. Gain 2 Zeal."],
  "sacred-bulwark":["Templar Bulwark","Gain 18 unbreakable Block and gain 2 Zeal."],
  "consecrated-blade":["Crusade Blade","Deal 15 damage and restore 4 blessed health. Gain 2 Zeal."],
  // Neutral
  "parry":["Parry","Only against an enemy attack: reduce the damage to 0. Counterattack 5."],
  "broken-crown":["Broken Crown","Gain 2 commander resource and draw 2 cards. Take 3 damage and 1 Ruin."],
  "last-oath":["Oath of the Last Knight","For 3 turns, first time taking damage each turn is reduced by 5. Lose 3 health when it ends."]
};
const TUT_EN = [
  "This is Corina, an exiled princess. Your health represents endurance. Energy sets actions. Petals fuel your lethal rapier techniques.",
  "Cards are your actions. Select Thorn Thrust and use it on the Ash Raider.",
  "The enemy announces what it will do. Check the icon and the damage before ending your turn.",
  "Block absorbs damage before it reaches your health. Play Petal Ward.",
  "When you have finished your actions, end the turn. Then enemies carry out their intentions.",
  "Some cards are not played on your turn. Black Lily or Parry answers an enemy attack: end the turn and use it when struck.",
  "Petals blossom with each blow, unlocking lethal power. Play Bloody Lotus.",
  "Finish the enemy. After each fight you will choose rewards: your deck will change during the expedition.",
];
const S = {
 es:{ game:"Juego", coll:"Colección", title:"GRAVECROWN", pick:"Elige a tu comandante.", start:"Iniciar expedición", soon:"Próximamente",
  retut:"Repetir tutorial", tutReq:"El tutorial es obligatorio en la primera partida.", next:"Siguiente", exp:"La expedición", enter:"Entrar al combate",
  info:(h,m,d)=>`Vida: ${h}/${m} · Mazo: ${d} cartas`, reward:"Recompensa", pickCard:"Elige una carta para tu mazo.", skip:"Omitir", back:"Volver al inicio",
  fell:"Has caído. Las cenizas te reclaman.", done:"¡Has completado la expedición!", tutDone:"Tutorial completado. Comienza la expedición.",
  turn:(n)=>`Turno ${n}`, end:"Terminar turno", react:(n)=>`¡El enemigo ataca (${n})! Juega Parada ya para contraatacar.`, take:"Recibir golpe",
  atk:(n)=>`Ataque ${n}`, def:(n)=>`Defensa ${n}`, burn:(n)=>`Quemado ${n}`, res_vael:"Corrupción", res_morra:"Recuerdos",
  close:"Cerrar", cost:"Coste", missing:"Imagen no encontrada", enlarge:"Ampliar", unseen:"Carta sin descubrir", right:"Clic derecho sobre una carta para verla.",
  all:"Todas", seen:"Vistas", notseen:"Sin ver", ash:"Ceniza", neutral:"Neutral", count:(a,b)=>`Descubiertas: ${a}/${b}`,
  t_attack:"Ataque", t_defense:"Defensa", t_technique:"Técnica", t_magic:"Magia", t_reaction:"Reacción", t_curse:"Maldición",
  e_raider:"Saqueador de Ceniza", e_specter:"Espectro de la Cripta", e_tutorial:"Saqueador de Ceniza",
  c_vael:"Vael, Rey de las Cenizas", c_morra:"Morra, Guardiana de las Tumbas",
  l_start:(n)=>`Combate: ${n}.`, l_play:(n)=>`Juegas ${n}.`, l_dmg:(n)=>`Infliges ${n}.`, l_def:(n)=>`${n} se protege.`, l_burn:"El fuego consume al enemigo (3).",
  l_hit:(n,d)=>`${n} te golpea (${d}).`, l_parry:"¡Parada!", l_counter:"Contraataque: 5.", l_c3:"Corrupción 3: tu próximo ataque hace +5.", l_c6:"Corrupción 6: robas 2, recibes 4." },
 en:{ game:"Game", coll:"Collection", title:"GRAVECROWN", pick:"Choose your commander.", start:"Start expedition", soon:"Coming soon",
  retut:"Replay tutorial", tutReq:"The tutorial is mandatory on your first run.", next:"Next", exp:"The expedition", enter:"Enter combat",
  info:(h,m,d)=>`Health: ${h}/${m} · Deck: ${d} cards`, reward:"Reward", pickCard:"Choose a card for your deck.", skip:"Skip", back:"Back to start",
  fell:"You have fallen. The ashes claim you.", done:"You completed the expedition!", tutDone:"Tutorial complete. The expedition begins.",
  turn:(n)=>`Turn ${n}`, end:"End turn", react:(n)=>`The enemy attacks (${n})! Play Parry now to counter.`, take:"Take the hit",
  atk:(n)=>`Attack ${n}`, def:(n)=>`Defend ${n}`, burn:(n)=>`Burning ${n}`, res_vael:"Corruption", res_morra:"Memories",
  close:"Close", cost:"Cost", missing:"Image not found", enlarge:"Enlarge", unseen:"Undiscovered card", right:"Right-click a card to view it.",
  all:"All", seen:"Seen", notseen:"Unseen", ash:"Ash", neutral:"Neutral", count:(a,b)=>`Discovered: ${a}/${b}`,
  t_attack:"Attack", t_defense:"Defense", t_technique:"Technique", t_magic:"Magic", t_reaction:"Reaction", t_curse:"Curse",
  e_raider:"Ash Raider", e_specter:"Crypt Specter", e_tutorial:"Ash Raider",
  c_vael:"Vael, King of Ashes", c_morra:"Morra, Warden of the Tombs",
  l_start:(n)=>`Combat: ${n}.`, l_play:(n)=>`You play ${n}.`, l_dmg:(n)=>`You deal ${n}.`, l_def:(n)=>`${n} defends.`, l_burn:"Fire consumes the enemy (3).",
  l_hit:(n,d)=>`${n} hits you (${d}).`, l_parry:"Parry!", l_counter:"Counterattack: 5.", l_c3:"Corruption 3: your next attack deals +5.", l_c6:"Corruption 6: draw 2, take 4." },
};
let lang = "es"; try { lang = localStorage.getItem("lang") || (["en", "eu"].find((x) => (navigator.language || "es").startsWith(x)) || "es"); } catch {}
export const getLang = () => lang;
export const setLang = (l) => { lang = l; try { localStorage.setItem("lang", l); } catch {} };
export const t = (k, ...a) => { const v = S[lang][k] ?? S.es[k] ?? k; return typeof v === "function" ? v(...a) : v; };
export const cname = (c) => (lang === "es" ? c.name : (CT[lang] || EN)[c.id][0]);
export const cdesc = (c) => (lang === "es" ? c.description : (CT[lang] || EN)[c.id][1]);
export const tutText = (i) => (lang === "es" ? TUTORIAL[i].text : (lang === "eu" ? TUT_EU : TUT_EN)[i]);

/* ---------- Extras: objetos, explicaciones, legal ---------- */
Object.assign(S.es, {
  items:"Objetos", noItems:"No tienes objetos.", use:"Usar", hoverHint:"Pasa el ratón sobre una carta para ver qué hace exactamente.",
  l_item:(n)=>`Usas ${n}.`,
  ex_cost:(n)=>n===0?"Coste 0: no gasta energía.":`Coste ${n}: gasta ${n} de tu energía (tienes 3 por turno).`,
  ex_damage:(n,b)=>`Inflige ${n} de daño${b?` (+${b} si el enemigo está Quemado)`:""}. El Bloqueo del enemigo lo absorbe primero.`,
  ex_block:(n)=>`Obtienes ${n} de Bloqueo: absorbe daño antes que tu vida y desaparece al empezar tu siguiente turno.`,
  ex_draw:(n)=>`Robas ${n} carta(s) del mazo (máximo 10 en mano).`,
  ex_burn:(n)=>`Aplica Quemado ${n} turnos: el enemigo pierde 3 de vida al inicio de su turno.`,
  ex_corruption:(n)=>`Ganas ${n} de Corrupción. Con 3: tu próximo ataque hace +5. Con 6: robas 2 pero recibes 4.`,
  ex_hurt:(n)=>`Recibes ${n} de daño (tu Bloqueo lo absorbe).`, ex_heal:(n)=>`Recuperas ${n} de vida.`,
  ex_reaction:"Reacción: no se juega en tu turno. Solo se usa cuando el enemigo va a atacarte; si lo haces en menos de 1,5 s, contraatacas con 5 de daño.",
  ex_discard:"Al jugarla va al descarte. Cuando el mazo se agota, se baraja el descarte.",
  privacy:"Privacidad", cookies:"Cookies", legal:"Aviso legal", clear:"Borrar datos guardados", clearConfirm:"¿Borrar progreso, tutorial y cartas descubiertas?", copy:"Prototipo",
});
Object.assign(S.en, {
  items:"Items", noItems:"You have no items.", use:"Use", hoverHint:"Hover over a card to see exactly what it does.",
  l_item:(n)=>`You use ${n}.`,
  ex_cost:(n)=>n===0?"Cost 0: uses no energy.":`Cost ${n}: spends ${n} of your energy (you have 3 per turn).`,
  ex_damage:(n,b)=>`Deals ${n} damage${b?` (+${b} if the enemy is Burning)`:""}. Enemy Block absorbs it first.`,
  ex_block:(n)=>`Gain ${n} Block: absorbs damage before your health and fades at the start of your next turn.`,
  ex_draw:(n)=>`Draw ${n} card(s) from your deck (max 10 in hand).`,
  ex_burn:(n)=>`Applies Burning for ${n} turns: the enemy loses 3 health at the start of its turn.`,
  ex_corruption:(n)=>`Gain ${n} Corruption. At 3: your next attack deals +5. At 6: draw 2 but take 4.`,
  ex_hurt:(n)=>`You take ${n} damage (your Block absorbs it).`, ex_heal:(n)=>`Restore ${n} health.`,
  ex_reaction:"Reaction: not played on your turn. Only usable when the enemy is about to attack you; if done within 1.5 s, you counter for 5 damage.",
  ex_discard:"When played it goes to the discard pile. When the deck runs out, the discard is shuffled back.",
  privacy:"Privacy", cookies:"Cookies", legal:"Legal notice", clear:"Delete saved data", clearConfirm:"Delete progress, tutorial and discovered cards?", copy:"Prototype",
});
const IT = { potion:{es:["Poción de ceniza","Recupera 15 de vida."],en:["Ash Potion","Restore 15 health."]},
  tonic:{es:["Tónico de piedra","Obtienes 8 de Bloqueo."],en:["Stone Tonic","Gain 8 Block."]},
  flask:{es:["Frasco incendiario","6 de daño y Quemado 2 turnos."],en:["Fire Flask","6 damage and Burning for 2 turns."]} };
export const iname = (id) => (IT[id][lang] || IT[id].en)[0];
export const idesc = (id) => (IT[id][lang] || IT[id].en)[1];
const LEGAL = {
 es:{ privacy:{title:"Política de privacidad",body:[
  "Gravecrown es un prototipo que se ejecuta por completo en tu navegador. No recogemos, enviamos ni compartimos datos personales con ningún servidor.",
  "Para que el juego funcione guardamos en tu dispositivo (localStorage): idioma elegido, progreso del tutorial y cartas descubiertas. Estos datos no salen de tu equipo.",
  "La cuenta (nombre de usuario y avatar) también se guarda solo en tu dispositivo. Puedes eliminarlos en cualquier momento con «Borrar datos guardados» en el pie de página o limpiando los datos del sitio en tu navegador.",
  "Responsable: [TU NOMBRE / EMPRESA] — Contacto: [TU EMAIL]. Si añades analíticas, publicidad o un servidor, debes actualizar este texto."]},
  cookies:{title:"Política de cookies",body:[
  "Este sitio no utiliza cookies propias ni de terceros para rastreo, analítica o publicidad.",
  "Solo usa almacenamiento local del navegador (localStorage) con claves técnicas: lang, tutorialCompleted, tutorialStep, seenCards, account y profile (cartas guardadas y habilidades). Son necesarias para recordar tu progreso y preferencias.",
  "Si en el futuro se incorporan cookies no esenciales, se pedirá tu consentimiento antes de activarlas."]},
  legal:{title:"Aviso legal",body:[
  "Gravecrown es un proyecto en desarrollo ofrecido «tal cual», sin garantías de disponibilidad ni de ausencia de errores.",
  "Titular: [TU NOMBRE / EMPRESA], [DIRECCIÓN], [NIF/CIF], [EMAIL]. Las imágenes, textos y diseño pertenecen a sus autores; no se permite su reproducción sin permiso.",
  "Este texto es una plantilla orientativa: revísala con un profesional antes de publicar el juego."]}},
 en:{ privacy:{title:"Privacy policy",body:[
  "Gravecrown is a prototype that runs entirely in your browser. We do not collect, send or share personal data with any server.",
  "To make the game work we store on your device (localStorage): chosen language, tutorial progress and discovered cards. This data never leaves your device.",
  "Your account (username and avatar) is also stored only on your device. You can delete it at any time with “Delete saved data” in the footer or by clearing the site data in your browser.",
  "Controller: [YOUR NAME / COMPANY] — Contact: [YOUR EMAIL]. If you add analytics, ads or a server, you must update this text."]},
  cookies:{title:"Cookie policy",body:[
  "This site does not use first- or third-party cookies for tracking, analytics or advertising.",
  "It only uses browser local storage (localStorage) with technical keys: lang, tutorialCompleted, tutorialStep, seenCards, account and profile (saved cards and skills). They are needed to remember your progress and preferences.",
  "If non-essential cookies are added in the future, your consent will be requested before they are activated."]},
  legal:{title:"Legal notice",body:[
  "Gravecrown is a work in progress provided “as is”, with no guarantee of availability or of being error-free.",
  "Owner: [YOUR NAME / COMPANY], [ADDRESS], [TAX ID], [EMAIL]. Images, texts and design belong to their authors; reproduction without permission is not allowed.",
  "This text is a guideline template: have a professional review it before publishing the game."]}},
};
export const legalPage = (k) => (LEGAL[lang] || LEGAL.en)[k];

Object.assign(S.es, {
  art:"Arte", acc:"Cuenta", gold:"Oro", goldGain:(n)=>`Botín: +${n} ORO`, info:(h,m,d,gd)=>`Vida: ${h}/${m} · Mazo: ${d} cartas · ORO: ${gd}`,
  e_fearsome:"Terror Encadenado", merchant:"El Mercader", merchantDesc:"Una figura encapuchada despliega su mercancía entre las cenizas.", sold:"Vendida", leave:"Seguir adelante", cancel:"Cancelar",
  restTitle:"Un lugar de descanso", restDesc:"Las brasas aún están calientes. Puedes descansar o reforzar tu mazo.", restHeal:(n)=>`Descansar (+${n} vida)`, restRemove:"Quitar una carta del mazo", pickRemove:"Elige la carta que quieres eliminar (mínimo 6 en el mazo).",
  fearsome:"¡Un enemigo temible!", fearsomeDesc:"Una criatura encadenada rompe sus grilletes y bloquea el camino. Es más fuerte que cualquier enemigo anterior, pero su botín es enorme.", fight:"Luchar",
  artDesc:"Aquí aparecerán las ilustraciones del juego. Los huecos vacíos esperan su imagen en la ruta indicada.", artPending:"Pendiente de ilustración", g_commanders:"Comandantes", g_enemies:"Enemigos", g_relics:"Reliquias", g_events:"Eventos",
  anon:"Sin nombre", username:"Nombre de usuario", usernameHint:"3-16 caracteres: letras, números, espacios, _ o -.", skin:"Piel", hair:"Peinado", hairColor:"Color de pelo", armor:"Armadura", accessory:"Accesorio",
  hs_none:"Sin pelo", hs_short:"Corto", hs_long:"Largo", hs_hood:"Capucha", ac_none:"Ninguno", ac_crown:"Corona", ac_scar:"Cicatriz", ac_eyepatch:"Parche",
  save:"Guardar", saved:"Guardado", saveErr:"Nombre no válido.", pvpTitle:"Combate PvP", pvpDesc:"Próximamente: duelos entre jugadores con tu avatar y nombre. Necesitará un servidor para guardar tu cuenta y emparejarte; hoy tu cuenta solo vive en este dispositivo.", pvpSoon:"Próximamente",
});
Object.assign(S.en, {
  art:"Art", acc:"Account", gold:"Gold", goldGain:(n)=>`Loot: +${n} GOLD`, info:(h,m,d,gd)=>`Health: ${h}/${m} · Deck: ${d} cards · GOLD: ${gd}`,
  e_fearsome:"Chained Terror", merchant:"The Merchant", merchantDesc:"A hooded figure lays out their wares among the ashes.", sold:"Sold", leave:"Move on", cancel:"Cancel",
  restTitle:"A resting place", restDesc:"The embers are still warm. You can rest or strengthen your deck.", restHeal:(n)=>`Rest (+${n} health)`, restRemove:"Remove a card from your deck", pickRemove:"Choose the card to remove (minimum 6 in the deck).",
  fearsome:"A fearsome foe!", fearsomeDesc:"A chained creature breaks its shackles and blocks the way. It is stronger than any enemy so far, but its loot is huge.", fight:"Fight",
  artDesc:"The game's illustrations will appear here. Empty slots are waiting for an image at the shown path.", artPending:"Illustration pending", g_commanders:"Commanders", g_enemies:"Enemies", g_relics:"Relics", g_events:"Events",
  anon:"Unnamed", username:"Username", usernameHint:"3-16 characters: letters, numbers, spaces, _ or -.", skin:"Skin", hair:"Hairstyle", hairColor:"Hair color", armor:"Armor", accessory:"Accessory",
  hs_none:"Bald", hs_short:"Short", hs_long:"Long", hs_hood:"Hood", ac_none:"None", ac_crown:"Crown", ac_scar:"Scar", ac_eyepatch:"Eyepatch",
  save:"Save", saved:"Saved", saveErr:"Invalid name.", pvpTitle:"PvP combat", pvpDesc:"Coming soon: player duels with your avatar and name. It will need a server to store your account and match you; today your account only lives on this device.", pvpSoon:"Coming soon",
});

Object.assign(S.es, { "e_ash-tyrant":"Tirano de Ceniza", "e_crypt-queen":"Reina de la Cripta", "e_crown-wraith":"Espectro de la Corona",
  newZone:"Has derrotado al jefe y entras en una nueva zona (+20 vida).", zoneN:(a,b)=>`Zona ${a} de ${b}`, g_backgrounds:"Fondos" });
Object.assign(S.en, { "e_ash-tyrant":"Ash Tyrant", "e_crypt-queen":"Crypt Queen", "e_crown-wraith":"Crown Wraith",
  newZone:"You defeated the boss and enter a new zone (+20 health).", zoneN:(a,b)=>`Zone ${a} of ${b}`, g_backgrounds:"Backgrounds" });

Object.assign(S.es, { skills:"Habilidades", spPoints:(n)=>`Puntos de habilidad: ${n}`, unlock:(n)=>`Desbloquear (${n})`, unlocked:"Desbloqueada", needReq:(n)=>`Requiere: ${n}`,
  skillHint:"Se ganan 1 punto al derrotar al jefe de cada zona y se conservan aunque mueras. Las habilidades se aplican desde la siguiente expedición.",
  vault:(n)=>`Cartas guardadas en expediciones: ${n}`, spGain:"+1 punto de habilidad", cashOut:(n)=>`Terminar expedición y guardar cartas (${n} nuevas)`,
  cashConfirm:"¿Terminar la expedición? Conservarás las cartas conseguidas para futuras partidas.", cashed:"Expedición terminada", cashedN:(n)=>`Cartas guardadas: ${n}. Empezarás las próximas expediciones con ellas.`,
  fell:"Has caído. Pierdes las cartas conseguidas en esta expedición; conservas las base y las ya guardadas.", doneN:(n)=>`Cartas guardadas: ${n}.` });
Object.assign(S.en, { skills:"Skills", spPoints:(n)=>`Skill points: ${n}`, unlock:(n)=>`Unlock (${n})`, unlocked:"Unlocked", needReq:(n)=>`Requires: ${n}`,
  skillHint:"You earn 1 point for defeating each zone's boss and keep it even if you die. Skills apply from your next expedition.",
  vault:(n)=>`Cards saved from expeditions: ${n}`, spGain:"+1 skill point", cashOut:(n)=>`End expedition and save cards (${n} new)`,
  cashConfirm:"End the expedition? You will keep the cards you gained for future runs.", cashed:"Expedition ended", cashedN:(n)=>`Cards saved: ${n}. You will start future expeditions with them.`,
  fell:"You have fallen. You lose the cards gained this expedition; you keep your base and previously saved cards.", doneN:(n)=>`Cards saved: ${n}.` });

Object.assign(S.es, { lore:"Información", lt_world:"Mundo", lt_chars:"Personajes", lt_beasts:"Bestiario", lt_zones:"Zonas", loreLocked:"???", loreHint:"Enfréntate a esta criatura para descubrirla." });
Object.assign(S.en, { lore:"Lore", lt_world:"World", lt_chars:"Characters", lt_beasts:"Bestiary", lt_zones:"Zones", loreLocked:"???", loreHint:"Face this creature to discover it." });

/* ---------- Euskara (eu) ---------- */
S.eu = {};
Object.assign(S.eu, {
  game:"Jokoa", coll:"Bilduma", title:"GRAVECROWN", pick:"Aukeratu zure komandantea.", start:"Espedizioa hasi", soon:"Laster",
  retut:"Tutoriala errepikatu", tutReq:"Tutoriala derrigorrezkoa da lehen partidan.", next:"Hurrengoa", exp:"Espedizioa", enter:"Borrokara sartu",
  reward:"Saria", pickCard:"Aukeratu karta bat zure mazorako.", skip:"Saltatu", back:"Hasierara itzuli", done:"Espedizioa osatu duzu!", tutDone:"Tutoriala amaituta. Espedizioa hasten da.",
  turn:(n)=>`${n}. txanda`, end:"Txanda amaitu", react:(n)=>`Etsaiak erasotzen du (${n})! Jokatu Parada orain kontraerasotzeko.`, take:"Kolpea jaso",
  atk:(n)=>`Erasoa ${n}`, def:(n)=>`Defentsa ${n}`, burn:(n)=>`Erreta ${n}`, res_vael:"Ustelkeria", res_morra:"Oroitzapenak",
  close:"Itxi", cost:"Kostua", missing:"Irudia ez da aurkitu", enlarge:"Handitu", unseen:"Aurkitu gabeko karta", right:"Egin klik eskuineko botoiarekin karta bat ikusteko.",
  all:"Guztiak", seen:"Ikusiak", notseen:"Ikusi gabeak", ash:"Errauts", neutral:"Neutroa", count:(a,b)=>`Aurkituak: ${a}/${b}`,
  t_attack:"Erasoa", t_defense:"Defentsa", t_technique:"Teknika", t_magic:"Magia", t_reaction:"Erreakzioa", t_curse:"Madarikazioa",
  e_raider:"Errauts-lapurra", e_specter:"Kriptako mamua", e_tutorial:"Errauts-lapurra", c_vael:"Vael, Errautsen Erregea", c_morra:"Morra, Hilobien Zaindaria",
  l_start:(n)=>`Borroka: ${n}.`, l_play:(n)=>`${n} jokatzen duzu.`, l_dmg:(n)=>`${n} kalte egiten duzu.`, l_def:(n)=>`${n}: defendatu da.`, l_burn:"Suak etsaia kontsumitzen du (3).",
  l_hit:(n,d)=>`${n}: jo zaitu (${d}).`, l_parry:"Parada!", l_counter:"Kontraerasoa: 5.", l_c3:"Ustelkeria 3: zure hurrengo erasoak +5 egiten du.", l_c6:"Ustelkeria 6: 2 karta hartzen dituzu, 4 kalte jasotzen dituzu.",
  items:"Objektuak", noItems:"Ez duzu objekturik.", use:"Erabili", hoverHint:"Jarri sagua karta baten gainean zehazki zer egiten duen ikusteko.", l_item:(n)=>`${n} erabiltzen duzu.`,
  ex_cost:(n)=>n===0?"Kostua 0: ez du energiarik gastatzen.":`Kostua ${n}: zure energiatik ${n} gastatzen du (txanda bakoitzeko 3 dituzu).`,
  ex_damage:(n,b)=>`${n} kalte egiten du${b?` (+${b} etsaia Erreta badago)`:""}. Etsaiaren Babesak lehenengo xurgatzen du.`,
  ex_block:(n)=>`${n} Babes lortzen duzu: bizitza baino lehen xurgatzen du kaltea eta zure hurrengo txanda hastean desagertzen da.`,
  ex_draw:(n)=>`${n} karta hartzen duzu mazotik (gehienez 10 eskuan).`,
  ex_burn:(n)=>`${n} txandatan Erreta ezartzen du: etsaiak 3 bizitza galtzen ditu bere txanda hastean.`,
  ex_corruption:(n)=>`${n} Ustelkeria irabazten duzu. 3an: zure hurrengo erasoak +5. 6an: 2 karta hartzen dituzu baina 4 kalte jasotzen dituzu.`,
  ex_hurt:(n)=>`${n} kalte jasotzen duzu (zure Babesak xurgatzen du).`, ex_heal:(n)=>`${n} bizitza berreskuratzen duzu.`,
  ex_reaction:"Erreakzioa: ez da zure txandan jokatzen. Etsaia erasotzear dagoenean bakarrik erabil daiteke; 1,5 s baino lehen eginez gero, 5 kalteko kontraerasoa egiten duzu.",
  ex_discard:"Jokatzean baztertuen multzora doa. Mazoa amaitzean, baztertuak nahastu egiten dira.",
  privacy:"Pribatutasuna", cookies:"Cookieak", legal:"Lege-oharra", clear:"Gordetako datuak ezabatu", clearConfirm:"Aurrerapena, tutoriala eta aurkitutako kartak ezabatu?", copy:"Prototipoa",
  art:"Artea", acc:"Kontua", gold:"Urrea", goldGain:(n)=>`Harrapakina: +${n} URREA`, info:(h,m,d,gd)=>`Bizitza: ${h}/${m} · Mazoa: ${d} karta · URREA: ${gd}`,
  e_fearsome:"Katebegi Izugarria", merchant:"Merkataria", merchantDesc:"Figura kapela-jantzi batek bere salgaiak zabaltzen ditu errautsen artean.", sold:"Saldua", leave:"Aurrera jarraitu", cancel:"Utzi",
  restTitle:"Atseden-leku bat", restDesc:"Txingarrak oraindik beroak dira. Atseden hartu edo zure mazoa indartu dezakezu.", restHeal:(n)=>`Atseden hartu (+${n} bizitza)`, restRemove:"Mazotik karta bat kendu", pickRemove:"Aukeratu kendu nahi duzun karta (gutxienez 6 mazoan).",
  fearsome:"Etsai beldurgarri bat!", fearsomeDesc:"Katez lotutako izaki batek bere kateak hautsi eta bidea mozten du. Aurreko edozein etsai baino indartsuagoa da, baina harrapakina erraldoia da.", fight:"Borrokatu",
  artDesc:"Hemen agertuko dira jokoaren ilustrazioak. Hutsik dauden zuloek irudia itxaroten dute adierazitako bidean.", artPending:"Ilustrazioa zain",
  g_commanders:"Komandanteak", g_enemies:"Etsaiak", g_relics:"Erlikiak", g_events:"Gertaerak", g_backgrounds:"Atzealdeak",
  anon:"Izenik gabe", username:"Erabiltzaile-izena", usernameHint:"3-16 karaktere: letrak, zenbakiak, zuriuneak, _ edo -.", skin:"Azala", hair:"Orrazkera", hairColor:"Ilearen kolorea", armor:"Armadura", accessory:"Osagarria",
  hs_none:"Burusoila", hs_short:"Laburra", hs_long:"Luzea", hs_hood:"Kapuxa", ac_none:"Bat ere ez", ac_crown:"Koroa", ac_scar:"Orbaina", ac_eyepatch:"Begi-zorroa",
  save:"Gorde", saved:"Gordeta", saveErr:"Izen baliogabea.", pvpTitle:"PvP borroka",
  pvpDesc:"Laster: jokalarien arteko dueluak zure avatar eta izenarekin. Zerbitzari bat beharko da zure kontua gordetzeko eta aurkariak bilatzeko; gaur zure kontua gailu honetan bakarrik dago.", pvpSoon:"Laster",
  "e_ash-tyrant":"Errauts-tiranoa", "e_crypt-queen":"Kriptako erregina", "e_crown-wraith":"Koroaren mamua",
  newZone:"Nagusia garaitu duzu eta eremu berri batean sartzen zara (+20 bizitza).", zoneN:(a,b)=>`${a}. eremua (${b}tik)`,
  skills:"Trebetasunak", spPoints:(n)=>`Trebetasun-puntuak: ${n}`, unlock:(n)=>`Desblokeatu (${n})`, unlocked:"Desblokeatuta", needReq:(n)=>`Behar du: ${n}`,
  skillHint:"Eremu bakoitzeko nagusia garaitzean puntu 1 irabazten duzu, hil arren gordetzen da. Trebetasunak hurrengo espedizioan aplikatzen dira.",
  vault:(n)=>`Espedizioetan gordetako kartak: ${n}`, spGain:"+1 trebetasun-puntu", cashOut:(n)=>`Espedizioa amaitu eta kartak gorde (${n} berri)`,
  cashConfirm:"Espedizioa amaitu? Lortutako kartak etorkizuneko partidetarako gordeko dituzu.", cashed:"Espedizioa amaituta", cashedN:(n)=>`Gordetako kartak: ${n}. Hurrengo espedizioak horiekin hasiko dituzu.`,
  fell:"Erori zara. Espedizio honetan lortutako kartak galtzen dituzu; oinarrizkoak eta lehendik gordetakoak mantentzen dituzu.", doneN:(n)=>`Gordetako kartak: ${n}.`,
  lore:"Informazioa", lt_world:"Mundua", lt_chars:"Pertsonaiak", lt_beasts:"Bestiarioa", lt_zones:"Eremuak", loreLocked:"???", loreHint:"Aurre egin izaki honi aurkitzeko.",
});
const EU = {
  "ash-slash":["Errauts-ebakia","8 kalte egiten ditu. +4 etsaia Erreta badago."],
  "iron-guard":["Burdinazko zaintza","10 Babes lortzen duzu."],
  "ash-step":["Errautsen arteko urratsa","6 Babes lortzen duzu eta karta 1 hartzen duzu."],
  "dying-fire":["Su hilzorian","14 kalte egiten ditu, 2 txandatan Erreta ezartzen du. Ustelkeria 1 irabazten duzu."],
  "parry":["Parada","Etsaiaren eraso baten aurka bakarrik: kaltea 0ra murrizten du. Une egokian eginez gero, 5eko kontraerasoa."],
  "broken-crown":["Koroa hautsia","2 Ustelkeria irabazten dituzu eta 2 karta hartzen dituzu. 3 kalte jasotzen dituzu."],
};
const CT = { en: EN, eu: EU };
const TUT_EU = [
  "Hau Corina da, printzesa erbestetua. Zure bizitzak zenbat denbora iraun dezakezun adierazten du. Energiak zenbat ekintza egin ditzakezun zehazten du. Petaloek zure teknika hilgarriak elikatzen dituzte.",
  "Kartak zure ekintzak dira. Hautatu Arantza-ebakia eta erabili Errauts-lapurraren aurka.",
  "Etsaiak zer egingo duen iragartzen du. Begiratu ikonoari eta kalteari txanda amaitu aurretik.",
  "Babesak kaltea xurgatzen du zure bizitzara iritsi aurretik. Jokatu Petalo-zaintza.",
  "Ekintzak amaitu dituzunean, amaitu txanda. Orduan etsaiek beren asmoak gauzatuko dituzte.",
  "Karta batzuk ez dira zure txandan jokatzen. Lirio Beltzak etsaiaren eraso bati erantzuten dio: amaitu txanda eta erabili jotzen duenean.",
  "Petaloek lore bakoitzarekin botere hilgarria askatzen dute. Jokatu Loto Gorrimina.",
  "Akabatu etsaia. Borroka bakoitzaren ondoren sariak aukeratuko dituzu: zure mazoa aldatuko da espedizioan zehar.",
];
IT.potion.eu = ["Errauts-edabea","15 bizitza berreskuratzen ditu."];
IT.tonic.eu = ["Harri-tonikoa","8 Babes lortzen duzu."];
IT.flask.eu = ["Su-botila","6 kalte eta 2 txandatan Erreta."];
LEGAL.eu = {
  privacy:{title:"Pribatutasun-politika",body:[
    "Gravecrown prototipo bat da, osorik zure nabigatzailean exekutatzen dena. Ez dugu datu pertsonalik biltzen, bidaltzen ez partekatzen inongo zerbitzaritara.",
    "Jokoak funtziona dezan, zure gailuan gordetzen ditugu (localStorage): aukeratutako hizkuntza, tutorialaren aurrerapena eta aurkitutako kartak. Datu hauek ez dute zure gailua uzten.",
    "Kontua (erabiltzaile-izena eta avatarra) eta profila (gordetako kartak eta trebetasunak) ere zure gailuan bakarrik gordetzen dira. Edonoiz ezaba ditzakezu orrialde-oineko «Gordetako datuak ezabatu» botoiarekin edo nabigatzailean guneko datuak garbituz.",
    "Arduraduna: [ZURE IZENA / ENPRESA] — Kontaktua: [ZURE EMAILA]. Analitikak, publizitatea edo zerbitzaria gehitzen badituzu, testu hau eguneratu behar duzu."]},
  cookies:{title:"Cookie-politika",body:[
    "Gune honek ez du cookie propiorik ez hirugarrenen cookierik erabiltzen jarraipenerako, analitikarako edo publizitaterako.",
    "Nabigatzailearen biltegiratze lokala (localStorage) soilik erabiltzen du gako teknikoekin: lang, tutorialCompleted, tutorialStep, seenCards, account eta profile. Zure aurrerapena eta lehentasunak gogoratzeko beharrezkoak dira.",
    "Etorkizunean ezinbestekoak ez diren cookieak gehitzen badira, zure baimena eskatuko da aktibatu aurretik."]},
  legal:{title:"Lege-oharra",body:[
    "Gravecrown garapen-fasean dagoen proiektua da, «dagoen bezala» eskaintzen dena, eskuragarritasun- edo akatsik gabeko bermerik gabe.",
    "Titularra: [ZURE IZENA / ENPRESA], [HELBIDEA], [IFK], [EMAILA]. Irudiak, testuak eta diseinua egileenak dira; baimenik gabe ez da erreproduzitzerik onartzen.",
    "Testu hau orientazio-txantiloi bat da: berrikus ezazu profesional batekin jokoa argitaratu aurretik."]},
};
const SK_EU = {
  "v-vigor":["Txingar-sendotasuna","+10 gehienezko bizitza."], "v-ward":["Hasierako zaintza","Borroka bakoitza 5 Babesekin hasten duzu."],
  "v-greed":["Errauts-gutizia","+%25 urre etsaietatik."], "v-edge":["Hasierako ertza","Borrokako zure lehen erasoak +4 egiten du."],
  "v-hand":["Esku prest","Borrokaren hasieran karta 1 gehiago hartzen duzu."], "v-mend":["Burdinazko josketa","Borroka bakoitzaren ondoren 5 bizitza gehiago berreskuratzen dituzu."],
  "v-spark":["Erregearen txinparta","+1 energia txandako."],
  "m-bones":["Hezur sendoak","+10 gehienezko bizitza."], "m-shroud":["Hil-oihala","Borroka bakoitza 5 Babesekin hasten duzu."],
  "m-tithe":["Hilobien hamarrenak","+%25 urre etsaietatik."], "m-recall":["Oroitzapen bizia","Borrokaren hasieran karta 1 gehiago hartzen duzu."],
  "m-vault":["Kripta lasaia","Borroka bakoitzaren ondoren 5 bizitza gehiago berreskuratzen dituzu."], "m-lantern":["Hileta-farola","+1 energia txandako."],
  "l-vigor":["Odol-sendotasuna","+10 gehienezko bizitza."], "l-ward":["Hasierako jarrera","Borroka bakoitza 5 Babesekin hasten duzu."],
  "l-greed":["Harrapakin gorria","+%25 urre etsaietatik."], "l-edge":["Ertz vorpala","Borrokako zure lehen erasoak +5 egiten du."],
  "l-hand":["Erreflexu gorriminak","Borrokaren hasieran karta 1 gehiago hartzen duzu."], "l-mend":["Odol-ateratze sendagarria","Borroka bakoitzaren ondoren 5 bizitza gehiago berreskuratzen dituzu."],
  "l-spark":["Egarri aseezina","+1 energia txandako."],
  "w-vigor":["Erresistentzia termikoa","+10 gehienezko bizitza."], "w-ward":["Ezkutu-matrazea","Borroka bakoitza 5 Babesekin hasten duzu."],
  "w-greed":["Urrezko krisola","+%25 urre etsaietatik."], "w-edge":["Hasierako errekuntza","Borrokako zure lehen erasoak +4 egiten du."],
  "w-hand":["Erreaktibo azkarrak","Borrokaren hasieran karta 1 gehiago hartzen duzu."], "w-mend":["Balsamo kimikoa","Borroka bakoitzaren ondoren 5 bizitza gehiago berreskuratzen dituzu."],
  "w-spark":["Labe bizia","+1 energia txandako."],
};
const ART_EU = {
  corina:"Corina, Arrosa Erbestetua", lysander:"Lysander, Falangearen Lehoia", faye:"Faye, Ehiztari Espektrala",
  valerius:"Valerius, Inkisidore Hautsia", elora:"Elora, Druida Zimeldua", carmilla:"Carmilla, Dama Gorrimina",
  kaelen:"Kaelen, Réquiem Bardoa", malakor:"Malakor, Amildegiko Brujua",
  vael:"Corina, Arrosa Erbestetua", morra:"Lysander, Falangearen Lehoia", lucan:"Valerius, Inkisidore Hautsia", wren:"Faye, Ehiztari Espektrala",
  "ash-raider":"Errauts-lapurra", "crypt-specter":"Kriptako mamua",
  "fearsome-foe":"Katebegi Izugarria (mini-nagusia)", "ash-tyrant":"Errauts-tiranoa (nagusia)", "crypt-queen":"Kriptako erregina (nagusia)", "crown-wraith":"Koroaren mamua (nagusia)",
  "bg-ashfields":"Atzealdea: Errauts-soroak", "bg-crypt":"Atzealdea: Ahaztutako kripta", "bg-citadel":"Atzealdea: Zitadela kiskalia",
  "iron-crown":"Burdinazko koroa", "hanging-bridge":"Zubi esekia", merchant:"Merkataria", "rest-site":"Atseden-lekua"
};
const ZONE_EU = { ashfields:"Errauts-soroak", crypt:"Ahaztutako kripta", citadel:"Zitadela kiskalia" };
const LORE_EU = {
  realm:["Erreinu hautsia","Gravecrown erreinu oparoa izan zen, Errautsen Koroak gobernatua, hildakoak atsedenean mantentzen zituen artefaktu zahar batek. Koroa hautsi zenean, errauts euria egin zuen zazpi urtez eta hilobiak ireki ziren."],
  forces:["Errautsa eta Oroimena","Bi indarrek gobernatzen dute geratzen dena: Errautsak, kontsumitzen duenak, eta Oroimenak, eusten duenak. Magia debekatua erabiltzen duenak Ustelkeria pilatzen du; hildakoak zaintzen dituenak Oroitzapenak. Bi bideek prezioa kobratzen dute."],
  expeditions:["Espedizioak","Komandanteak erreinuaren bihotzerantz abiatzen dira Koroaren zatien bila. Atseden-leku bakoitza etenaldi bat da: itzultzen denak aurkitutakoa gordetzen du; erortzen denak dena galtzen du, dagoeneko berea zenaz kanpo."],
  corina:["Corina, Arrosa Erbestetua","Aethelgard-eko Zilarrezko Gorteko printzesa, erbestatua izan zen bere leinua erori zenean. Arantza Gorriminak mertzenarioekin batera bere ezpata erabiltzen ikasi zuen: loraldi hilgarri baten antzera mugitzen da."],
  lysander:["Lysander, Falangearen Lehoia","Herensugearen Guardiaren kapitain ohia, bere pika astunarekin milaka etsai garaitu dituena. Bultzada geldiezinarekin etsaien lerroak hausten ditu."],
  faye:["Faye, Ehiztari Espektrala","Baso lanbrotsuan jaiotako ehiztaria. Bere gezi espektralek harria eta altzairua zeharkatzen dituzte zaratarik gabe."],
  valerius:["Valerius, Inkisidore Hautsia","Alabarda sakratu baten jabe, tenpluaren traizioa ikusi ondoren bere bide propioa hasi zuena. Zelo santu eta odoltsuz borrokatzen du."],
  elora:["Elora, Druida Zimeldua","Antzinako baso kiskalduen zaindaria. Arantza, sustrai eta izerdi pozoitsuz estalitako basoko azti indartsua."],
  carmilla:["Carmilla, Dama Gorrimina","Mendeetako loa utzi eta Gravecrown-eko errautsetan ehizara irten den dama banpiro noblea. Odolaren indarrez elikatzen da."],
  kaelen:["Kaelen, Réquiem Bardoa","Burdinazko kordak dituen musika-tresnarekin heriotzaren doinuak jotzen dituen maisua."],
  malakor:["Malakor, Amildegiko Brujua","Amildegiko botere arrotzak menderatzen dituen okultista, arimak bilduz eta hutsaren sua askatuz."],
  vael:["Corina, Arrosa Erbestetua","Aethelgard-eko Zilarrezko Gorteko printzesa erbestatua."],
  morra:["Lysander, Falangearen Lehoia","Herensugearen Guardiaren kapitain ohia."],
  lucan:["Valerius, Inkisidore Hautsia","Alabarda sakratuaren jabea."],
  wren:["Faye, Ehiztari Espektrala","Baso lanbrotsuko ehiztaria."],
  raider:["Errauts-lapurra","Hondakinetan metala eta erlikiak bilatzen dabiltzan desertoreak eta harrapariak. Gogor jotzen dute, baina garestiro ordaintzen dute beren gutizia."],
  "cinder-hound":["Errauts-txakurra","Txingarrez elikatutako txakur basatiak. Oso azkar jotzen dute eta beren hozkadek erredura uzten dute."],
  specter:["Kriptako mamua","Hilobirik gabeko arimak galeria artean ibiltzen direnak. Beren heriotza gogoratzen dute eta behin eta berriz errepikatzen dute hurbiltzen den edonoren aurka."],
  "tomb-guardian":["Hilobi-zaindaria","Antzinako zinez bizitutako granitozko irudia. Bere harrizko babesak kolperik gogorrenak uxatzen ditu."],
  "plague-cultist":["Hondamen-kultista","Koroaren zatiak gurtzen dituzten jarraitzaileak. Hondamena hedatzen dute intrusoen defentsa ahulduz."],
  fearsome:["Katebegi Izugarria","Erregeak setioetan kateatu zuen gerra-piztia. Bere kateak apurtzen dira odola usaintzen duenean. Bere harrapakina erraldoia da."],
  "ash-tyrant":["Errauts-tiranoa","Koroari leial egitea zin egin zuen eta bere erorketatik bizirik atera zen jenerala. Errauts-soroak gobernatzen ditu lapurren armada batekin."],
  "crypt-queen":["Kriptako erregina","Hiriburuaren azpian lurperatutako lehen erregina. Kriptako mamu guztiak bere mendekoak dira, eta bat ere ez zaio desobeditzen."],
  "crown-wraith":["Koroaren mamua","Hautsitako artefaktuaren oihartzuna, Zitadelan oraindik ibiltzen dena. Esaten dute garaitzen duenak Gravecrown-en patua erabakiko duela."],
  ashfields:["Errauts-soroak","Zerumuga oraindik erretzen ari den lautada grisak. Lapurren kanpamenduek eta hezur kiskalduek markatzen dute bidea."],
  crypt:["Ahaztutako kripta","Hiriburuaren azpiko galeria hotzak, hileta-kandelak beren kabuz pizten diren lekuan. Hemen Oroimena harria baino astunagoa da."],
  citadel:["Zitadela kiskalia","Erregearen azken gotorlekua, burdin eta suzko eskeleto bihurtua. Bere tronu-aretoan Koroaren geratzen dena zain dago."],
};
Object.values(SKILLS).flat().forEach((s) => { const x = SK_EU[s.id]; if (x) { s.name.eu = x[0]; s.desc.eu = x[1]; } });
ART.forEach((a) => { if (ART_EU[a.id]) a.name.eu = ART_EU[a.id]; });
ZONES.forEach((z) => { if (ZONE_EU[z.id]) z.name.eu = ZONE_EU[z.id]; });
Object.values(LORE).flat().forEach((en) => { const x = LORE_EU[en.id]; if (x) { if (en.t) en.t.eu = x[0]; if (en.p) en.p.eu = x[1]; } });
export const pick = (o) => o[lang] || o.es;

/* ---------- Textos de Comandantes y Recursos (ES) ---------- */
Object.assign(S.es, {
  t_stance:"Postura", grave:"Tumba", eyes:"Ojos", ey_round:"Redondos", ey_narrow:"Rasgados", ey_ember:"Ascua", rand:"Aleatorio",
  importImg:"Importar imagen (p. ej. de Picrew)", removeImg:"Quitar imagen importada", useAvatar:"Usar mi avatar como retrato en combate",
  avatarHint:"Si añades piezas en public/assets/avatar/ (ver README) el creador funciona por capas, como Picrew. También puedes importar una imagen exportada; respeta la licencia del artista.",
  st_wounded:"Herido", st_ruin:(n)=>`Ruina ${n}`, st_stance:(n)=>`En postura ${n}`, st_crown:(n)=>`Corona Rota ${n}`, st_stun:"Aturdido", atkStun:(n)=>`Ataque ${n} + Aturdir`,
  l_stun:"¡Quedas aturdido! No podrás reaccionar.", l_save:"Los recuerdos te mantienen en pie (1 de vida).", l_c10:"Efecto crítico desatado (+3 daño, 2 dolor por turno).",
  l_stanceEnd:"La postura termina: pierdes 3 de vida.", l_ab:"Usas tu habilidad.", l_ab_empty:"No hay cartas de Defensa o Técnica en el descarte.",

  // Comandantes (ES)
  c_corina:"Corina, la Rosa Desterrada", res_corina:"Pétalos",
  ab_corina:"Floración Carmesí", abd_corina:"Gasta 2 Pétalos: Tu próximo ataque hace +6 y robas 1 carta.",
  l_corina_fury:"Fragancia Letal: Tu próximo ataque hace +5.", l_corina_save:"Los Pétalos te envuelven (1 de vida y 10 de Bloqueo).",
  l_ab_corina:"Floración Carmesí activada (+6 daño en próximo ataque, robas 1 carta).",
  ex_petal:(n)=>`Ganas ${n} Pétalo(s). Cada 3 activa Fragancia (+5 daño). Con 6: sobrevives a un golpe mortal.`,

  c_lysander:"Lysander, el León de la Guardia", res_lysander:"Impulso",
  ab_lysander:"Carga de Ruptura", abd_lysander:"Gasta 2 Impulso: Obtienes 8 de Bloqueo e infliges 8 de daño.",
  l_lysander_fury:"Ímpetu del Dragón: Tu próximo ataque hace +5.", l_lysander_save:"La lanza sostiene tu cuerpo (1 de vida y 12 de Bloqueo).",
  l_ab_lysander:"Carga de Ruptura ejecutada (8 Bloqueo y 8 de daño al enemigo).",
  ex_momentum:(n)=>`Ganas ${n} Impulso. Cada 3 activa Ímpetu (+5 daño). Con 6: sobrevives a un golpe mortal.`,

  c_faye:"Faye, la Cazadora Espectral", res_faye:"Foco",
  ab_faye:"Disparo Certero", abd_faye:"Gasta 2 Foco: Tu próximo ataque hace +8 y robas 1 carta.",
  l_faye_fury:"Mira Espectral: Tu próximo ataque hace +5.", l_faye_save:"Te desvaneces en la niebla (1 de vida y 10 de Bloqueo).",
  l_ab_faye:"Disparo Certero preparado (+8 daño en próximo ataque, robas 1 carta).",
  ex_focus:(n)=>`Ganas ${n} Foco. Cada 3 activa Mira (+5 daño). Con 6: sobrevives a un golpe mortal.`,

  c_valerius:"Valerius, el Inquisidor Quebrado", res_valerius:"Fervor",
  ab_valerius:"Veredicto del Alba", abd_valerius:"Gasta 2 Fervor: Obtienes 6 de Bloqueo y recuperas 4 de vida.",
  l_valerius_fury:"Celo Sagrado: Tu próximo ataque hace +5.", l_valerius_save:"La armadura consagrada resiste (1 de vida y 14 de Bloqueo).",
  l_ab_valerius:"Veredicto del Alba invocado (6 Bloqueo y recuperas 4 de vida).",
  ex_fervor:(n)=>`Ganas ${n} Fervor. Cada 3 activa Celo (+5 daño). Con 6: sobrevives a un golpe mortal.`,

  c_elora:"Elora, la Druida Marchita", res_elora:"Savia",
  ab_elora:"Germinación Salvaje", abd_elora:"Gasta 2 Savia: Obtienes 8 de Bloqueo y aplicas 3 de Quemado/Veneno.",
  l_elora_burst:"Brote Tóxico: Las espinas arden en el enemigo (+2 Quemado).", l_elora_save:"La corteza ancestral te envuelve (1 de vida y 10 de Bloqueo).",
  l_ab_elora:"Germinación Salvaje activada (8 Bloqueo y 3 Quemado al enemigo).",
  ex_sap:(n)=>`Ganas ${n} Savia. Cada 3 envenena al enemigo (+2 Quemado). Con 6: sobrevives a un golpe mortal.`,

  c_carmilla:"Carmilla, la Dama Carmesí", res_carmilla:"Sangre",
  ab_carmilla:"Sifón de Sangre", abd_carmilla:"Gasta 2 Sangre: Recuperas 5 de vida e infliges 6 de daño.",
  l_carmilla_fury:"Sed Insaciable: Tu próximo ataque hace +5.", l_carmilla_save:"La inmortalidad nocturna te salva (1 de vida y 8 de Bloqueo).",
  l_ab_carmilla:"Sifón de Sangre realizado (recuperas 5 de vida y 6 de daño al enemigo).",
  ex_blood:(n)=>`Ganas ${n} Sangre. Cada 3 activa Sed (+5 daño). Con 6: sobrevives a un golpe mortal.`,

  c_kaelen:"Kaelen, el Bardo del Réquiem", res_kaelen:"Acordes",
  ab_kaelen:"Réquiem Final", abd_kaelen:"Gasta 2 Acordes: Obtienes +1 de energía y robas 1 carta.",
  l_kaelen_fury:"Clímax Disonante: Tu próximo ataque hace +5.", l_kaelen_save:"El último acorde resuena y te protege (1 de vida y 10 de Bloqueo).",
  l_ab_kaelen:"Réquiem Final ejecutado (+1 de energía y robas 1 carta).",
  ex_chord:(n)=>`Ganas ${n} Acorde(s). Cada 3 activa Clímax (+5 daño). Con 6: sobrevives a un golpe mortal.`,

  c_malakor:"Malakor, el Brujo del Abismo", res_malakor:"Almas",
  ab_malakor:"Transfusión del Vacío", abd_malakor:"Gasta 2 Almas: Infliges 8 de daño y aplicas 3 de Quemado.",
  l_malakor_burst:"Llama Abisal: El vacío abrasa al enemigo (+2 Quemado).", l_malakor_save:"El pacto cósmico te devuelve al plano mortal (1 de vida y 10 de Bloqueo).",
  l_ab_malakor:"Transfusión del Vacío ejecutada (8 de daño y 3 Quemado).",
  ex_soul:(n)=>`Ganas ${n} Alma(s). Cada 3 abrasa al enemigo (+2 Quemado). Con 6: sobrevives a un golpe mortal.`,

  c_roland:"Roland, el Cruzado Inquebrantable", res_roland:"Celo",
  ab_roland:"Golpe de Cruzada", abd_roland:"Gasta 2 Celo: Obtienes 8 de Bloqueo e infliges 8 de daño.",
  l_roland_fury:"Furia del Cruzado: Tu próximo ataque hace +5.", l_roland_save:"La fe inquebrantable desafía a la muerte (1 de vida y 12 de Bloqueo).",
  l_ab_roland:"Golpe de Cruzada asestado (8 de Bloqueo y 8 de daño).",
  ex_zeal:(n)=>`Ganas ${n} Celo. Cada 3 activa Furia (+5 daño). Con 6: sobrevives a un golpe mortal.`,

  // Compatibilidad legada
  c_vael:"Corina, la Rosa Desterrada", res_vael:"Pétalos", ab_vael:"Floración Carmesí", abd_vael:"Gasta 2 Pétalos: +6 daño y robas 1.",
  c_morra:"Lysander, el León de la Guardia", res_morra:"Impulso", ab_morra:"Carga de Ruptura", abd_morra:"Gasta 2 Impulso: 8 Bloqueo y 8 daño.",
  c_lucan:"Valerius, el Inquisidor Quebrado", res_lucan:"Fervor", ab_lucan:"Veredicto del Alba", abd_lucan:"Gasta 2 Fervor: 6 Bloqueo y sana 4.",
  c_wren:"Faye, la Cazadora Espectral", res_wren:"Foco", ab_wren:"Disparo Certero", abd_wren:"Gasta 2 Foco: +8 daño y robas 1.",

  backToMenu:"VOLVER AL MENÚ",
  collSub:"Grimorio de cartas descubiertas e inventario de reliquias",
  skillsSub:"Árbol de talentos y técnicas arcanas de cada comandante",
  artDesc:"Grabados, lienzos y cronologías del reino quebrado",
  loreDesc:"Anales de Gravecrown, memorias de los comandantes y bestiario",
  accDesc:"Blasón heráldico, efigie y registro de hazañas",
  tab_world:"El Reino Quebrado", tab_chars:"Los 9 Comandantes", tab_beasts:"Bestiario", tab_zones:"Regiones",
  g_commanders:"Comandantes", g_enemies:"Enemigos", g_relics:"Reliquias", g_events:"Eventos", g_backgrounds:"Fondos",
  relicGain:(n)=>`Reliquia: ${n}`, relics:"Reliquias",
  blood:"Sangre", pyro:"Piroclasto", saveAndQuit:"Guardar y Salir al Menú", startWith:(n)=>`Iniciar expedición con ${n}`,
  ex_ruin:(n)=>`Añade ${n} de Ruina: los ataques enemigos te hacen +1 de daño por carga hasta el final del combate.`,
  ex_stance:(n)=>`Postura de ${n} turnos: la primera vez que recibes daño cada turno, lo reduces en 5. Al terminar pierdes 3 de vida.`,
  viewDeck:(n)=>`Ver mazo (${n})`, viewDeckTitle:(n)=>`Mazo · ${n} cartas`, discardCount:(n)=>`Descarte: ${n}`,
  l_heal:(n)=>`Recuperas ${n} de vida.`,
  "e_cinder-hound":"Sabueso de Ceniza", "e_tomb-guardian":"Guardián de Tumba", "e_plague-cultist":"Cultista de la Ruina",
  resumeExpedition:(z,h,m)=>`Continuar expedición (Zona ${z} · ${h}/${m} HP)`,
  abandonExpedition:"Abandonar expedición", abandonConfirm:"¿Seguro que deseas abandonar la expedición actual?", runResumed:"Expedición reanudada."
});

/* ---------- Textos de Comandantes y Recursos (EN) ---------- */
Object.assign(S.en, {
  t_stance:"Stance", grave:"Grave", eyes:"Eyes", ey_round:"Round", ey_narrow:"Narrow", ey_ember:"Ember", rand:"Random",
  importImg:"Import image (e.g. from Picrew)", removeImg:"Remove imported image", useAvatar:"Use my avatar as combat portrait",
  avatarHint:"If you add parts to public/assets/avatar/ (see README) the creator works in layers, like Picrew. You can also import an exported image; respect the artist's license.",
  st_wounded:"Wounded", st_ruin:(n)=>`Ruin ${n}`, st_stance:(n)=>`In stance ${n}`, st_crown:(n)=>`Broken Crown ${n}`, st_stun:"Stunned", atkStun:(n)=>`Attack ${n} + Stun`,
  l_stun:"You are stunned! You cannot react.", l_save:"Memories keep you standing (1 health).", l_c10:"Critical effect unleashed (+3 damage, 2 pain per turn).",
  l_stanceEnd:"The stance ends: you lose 3 health.", l_ab:"You use your ability.", l_ab_empty:"No Defense or Technique cards in discard.",

  c_corina:"Corina, the Exiled Rose", res_corina:"Petals",
  ab_corina:"Crimson Bloom", abd_corina:"Spend 2 Petals: Next attack deals +6 and draw 1 card.",
  l_corina_fury:"Deadly Fragrance: Your next attack deals +5.", l_corina_save:"Protective petals shroud you (1 health and 10 Block).",
  l_ab_corina:"Crimson Bloom activated (+6 damage on next attack, draw 1 card).",
  ex_petal:(n)=>`Gain ${n} Petal(s). Every 3 triggers Fragrance (+5 damage). At 6: survive one lethal hit.`,

  c_lysander:"Lysander, Lion of the Phalanx", res_lysander:"Momentum",
  ab_lysander:"Breaching Charge", abd_lysander:"Spend 2 Momentum: Gain 8 Block and deal 8 damage.",
  l_lysander_fury:"Dragon Impetus: Your next attack deals +5.", l_lysander_save:"Your war lance keeps you standing (1 health and 12 Block).",
  l_ab_lysander:"Breaching Charge executed (8 Block and 8 damage to enemy).",
  ex_momentum:(n)=>`Gain ${n} Momentum. Every 3 triggers Impetus (+5 damage). At 6: survive one lethal hit.`,

  c_faye:"Faye, the Spectral Ranger", res_faye:"Focus",
  ab_faye:"Deadshot", abd_faye:"Spend 2 Focus: Next attack deals +8 and draw 1 card.",
  l_faye_fury:"Spectral Aim: Your next attack deals +5.", l_faye_save:"You fade into the mist (1 health and 10 Block).",
  l_ab_faye:"Deadshot prepared (+8 damage on next attack, draw 1 card).",
  ex_focus:(n)=>`Gain ${n} Focus. Every 3 triggers Aim (+5 damage). At 6: survive one lethal hit.`,

  c_valerius:"Valerius, the Broken Inquisitor", res_valerius:"Fervor",
  ab_valerius:"Dawn's Verdict", abd_valerius:"Spend 2 Fervor: Gain 6 Block and restore 4 health.",
  l_valerius_fury:"Sacred Zeal: Your next attack deals +5.", l_valerius_save:"Consecrated armor deflects the mortal blow (1 health and 14 Block).",
  l_ab_valerius:"Dawn's Verdict invoked (6 Block and heal 4 health).",
  ex_fervor:(n)=>`Gain ${n} Fervor. Every 3 triggers Zeal (+5 damage). At 6: survive one lethal hit.`,

  c_elora:"Elora, the Blighted Druid", res_elora:"Sap",
  ab_elora:"Wild Germination", abd_elora:"Spend 2 Sap: Gain 8 Block and apply 3 Burning/Poison.",
  l_elora_burst:"Toxic Spores: Thorns scorch the enemy (+2 Burning).", l_elora_save:"Ancient bark shields your heart (1 health and 10 Block).",
  l_ab_elora:"Wild Germination activated (8 Block and 3 Burning to enemy).",
  ex_sap:(n)=>`Gain ${n} Sap. Every 3 inflicts 2 Burning. At 6: survive one lethal hit.`,

  c_carmilla:"Carmilla, the Sanguine Countess", res_carmilla:"Blood",
  ab_carmilla:"Blood Siphon", abd_carmilla:"Spend 2 Blood: Restore 5 health and deal 6 damage.",
  l_carmilla_fury:"Insatiable Thirst: Your next attack deals +5.", l_carmilla_save:"Nocturnal immortality preserves you (1 health and 8 Block).",
  l_ab_carmilla:"Blood Siphon drained (restore 5 health and deal 6 damage to enemy).",
  ex_blood:(n)=>`Gain ${n} Blood. Every 3 triggers Thirst (+5 damage). At 6: survive one lethal hit.`,

  c_kaelen:"Kaelen, the Requiem Maestro", res_kaelen:"Chords",
  ab_kaelen:"Final Requiem", abd_kaelen:"Spend 2 Chords: Gain +1 energy and draw 1 card.",
  l_kaelen_fury:"Discordant Climax: Your next attack deals +5.", l_kaelen_save:"The final chord resonates to save you (1 health and 10 Block).",
  l_ab_kaelen:"Final Requiem performed (+1 energy and draw 1 card).",
  ex_chord:(n)=>`Gain ${n} Chord(s). Every 3 triggers Climax (+5 damage). At 6: survive one lethal hit.`,

  c_malakor:"Malakor, the Void Warlock", res_malakor:"Souls",
  ab_malakor:"Void Transfusion", abd_malakor:"Spend 2 Souls: Deal 8 damage and apply 3 Burning.",
  l_malakor_burst:"Abyssal Flame: The void burns the enemy (+2 Burning).", l_malakor_save:"Cosmic pact draws you back from death (1 health and 10 Block).",
  l_ab_malakor:"Void Transfusion channeled (8 damage and 3 Burning to enemy).",
  ex_soul:(n)=>`Gain ${n} Soul(s). Every 3 burns the enemy (+2 Burning). At 6: survive one lethal hit.`,

  c_roland:"Roland, the Unbroken Crusader", res_roland:"Zeal",
  ab_roland:"Crusader Smite", abd_roland:"Spend 2 Zeal: Gain 8 Block and deal 8 damage.",
  l_roland_fury:"Crusader Fury: Your next attack deals +5.", l_roland_save:"Unbroken faith defies death (1 health and 12 Block).",
  l_ab_roland:"Crusader Smite unleashed (8 Block and 8 damage).",
  ex_zeal:(n)=>`Gain ${n} Zeal. Every 3 triggers Fury (+5 damage). At 6: survive one lethal hit.`,

  c_vael:"Corina, the Exiled Rose", res_vael:"Petals", ab_vael:"Crimson Bloom", abd_vael:"Spend 2 Petals: +6 damage and draw 1.",
  c_morra:"Lysander, Lion of the Phalanx", res_morra:"Momentum", ab_morra:"Breaching Charge", abd_morra:"Spend 2 Momentum: 8 Block and 8 damage.",
  c_lucan:"Valerius, the Broken Inquisitor", res_lucan:"Fervor", ab_lucan:"Dawn's Verdict", abd_lucan:"Spend 2 Fervor: 6 Block and heal 4.",
  c_wren:"Faye, the Spectral Ranger", res_wren:"Focus", ab_wren:"Deadshot", abd_wren:"Spend 2 Focus: +8 damage and draw 1.",

  backToMenu:"BACK TO MENU",
  collSub:"Grimoire of discovered cards and relics",
  skillsSub:"Talent tree and arcane techniques for each commander",
  artDesc:"Engravings, canvases, and chronologies of the broken realm",
  loreDesc:"Annals of Gravecrown, commander memories, and bestiary",
  accDesc:"Heraldic crest, effigy, and record of deeds",
  tab_world:"The Broken Realm", tab_chars:"The 9 Commanders", tab_beasts:"Bestiary", tab_zones:"Regions",
  g_commanders:"Commanders", g_enemies:"Enemies", g_relics:"Relics", g_events:"Events", g_backgrounds:"Backgrounds",
  relicGain:(n)=>`Relic: ${n}`, relics:"Relics",
  blood:"Blood", pyro:"Pyroclast", saveAndQuit:"Save & Exit to Menu", startWith:(n)=>`Start expedition with ${n}`,
  ex_ruin:(n)=>`Adds ${n} Ruin: enemy attacks deal +1 damage to you per stack until the end of combat.`,
  ex_stance:(n)=>`${n}-turn stance: the first time you take damage each turn, reduce it by 5. When it ends you lose 3 health.`,
  viewDeck:(n)=>`View deck (${n})`, viewDeckTitle:(n)=>`Deck · ${n} cards`, discardCount:(n)=>`Discard: ${n}`,
  l_heal:(n)=>`Restore ${n} health.`,
  "e_cinder-hound":"Cinder Hound", "e_tomb-guardian":"Tomb Guardian", "e_plague-cultist":"Ruin Cultist",
  resumeExpedition:(z,h,m)=>`Resume expedition (Zone ${z} · ${h}/${m} HP)`,
  abandonExpedition:"Abandon expedition", abandonConfirm:"Are you sure you want to abandon the current expedition?", runResumed:"Expedition resumed."
});

/* ---------- Textos de Comandantes y Recursos (EU) ---------- */
Object.assign(S.eu, {
  t_stance:"Jarrera", grave:"Hilobia", eyes:"Begiak", ey_round:"Biribilak", ey_narrow:"Estuak", ey_ember:"Txingarra", rand:"Ausazkoa",
  importImg:"Irudia inportatu (adib. Picrew-etik)", removeImg:"Inportatutako irudia kendu", useAvatar:"Erabili nire avatarra borrokako erretratu gisa",
  avatarHint:"public/assets/avatar/ karpetan piezak jartzen badituzu (ikus README), sortzaileak Picrew bezala geruzaka funtzionatzen du. Esportatutako irudi bat ere inportatu dezakezu; errespetatu artistaren lizentzia.",
  st_wounded:"Zauritua", st_ruin:(n)=>`Hondamena ${n}`, st_stance:(n)=>`Jarreran ${n}`, st_crown:(n)=>`Koroa hautsia ${n}`, st_stun:"Zorabiatua", atkStun:(n)=>`Erasoa ${n} + Zorabiatu`,
  l_stun:"Zorabiatu zara! Ezingo duzu erreakzionatu.", l_save:"Oroitzapenek zutik mantentzen zaituzte (1 bizitza).", l_c10:"Ondorio larria: (+3 kalte, 2 min txandako).",
  l_stanceEnd:"Jarrera amaitzen da: 3 bizitza galtzen dituzu.", l_ab:"Zure trebetasuna erabiltzen duzu.", l_ab_empty:"Ez dago Defentsa edo Teknika kartarik baztertuetan.",

  c_corina:"Corina, Arrosa Erbestetua", res_corina:"Petaloak",
  ab_corina:"Loraldi Gorrimina", abd_corina:"2 Petalo gastatu: Hurrengo erasoak +6 egiten du eta karta 1 hartu.",
  l_corina_fury:"Usain Hilgarria: Zure hurrengo erasoak +5 egiten du.", l_corina_save:"Petaloek babesten zaituzte (1 bizitza eta 10 Babes).",
  l_ab_corina:"Loraldi Gorrimina aktibatuta (+6 kalte, karta 1 hartu).",
  ex_petal:(n)=>`${n} Petalo irabazten dituzu. 3 bakoitzeko +5 kalte. 6an: kolpe hilgarri bati ihes egiten diozu.`,

  c_lysander:"Lysander, Falangearen Lehoia", res_lysander:"Bultzada",
  ab_lysander:"Hautsitze Karga", abd_lysander:"2 Bultzada gastatu: 8 Babes lortu eta 8 kalte egin.",
  l_lysander_fury:"Herensugearen Bultzada: Zure hurrengo erasoak +5 egiten du.", l_lysander_save:"Lantzari esker zutik zaude (1 bizitza eta 12 Babes).",
  l_ab_lysander:"Hautsitze Karga burutua (8 Babes eta 8 kalte etsaiari).",
  ex_momentum:(n)=>`${n} Bultzada irabazten dituzu. 3 bakoitzeko +5 kalte. 6an: kolpe hilgarri bati ihes egiten diozu.`,

  c_faye:"Faye, Ehiztari Espektrala", res_faye:"Fokua",
  ab_faye:"Tiro Ziurra", abd_faye:"2 Foku gastatu: Hurrengo erasoak +8 egiten du eta karta 1 hartu.",
  l_faye_fury:"Puntu Espektrala: Zure hurrengo erasoak +5 egiten du.", l_faye_save:"Lainoan desagertzen zara (1 bizitza eta 10 Babes).",
  l_ab_faye:"Tiro Ziurra prestatuta (+8 kalte, karta 1 hartu).",
  ex_focus:(n)=>`${n} Foku irabazten dituzu. 3 bakoitzeko +5 kalte. 6an: kolpe hilgarri bati ihes egiten diozu.`,

  c_valerius:"Valerius, Inkisidore Hautsia", res_valerius:"Fervorea",
  ab_valerius:"Argiaren Epaia", abd_valerius:"2 Fervor gastatu: 6 Babes lortu eta 4 bizitza berreskuratu.",
  l_valerius_fury:"Zelo Santua: Zure hurrengo erasoak +5 egiten du.", l_valerius_save:"Armadura bedeinkatuak babesten zaitu (1 bizitza eta 14 Babes).",
  l_ab_valerius:"Argiaren Epaia burutua (6 Babes eta 4 bizitza sendatu).",
  ex_fervor:(n)=>`${n} Fervor irabazten dituzu. 3 bakoitzeko +5 kalte. 6an: kolpe hilgarri bati ihes egiten diozu.`,

  c_elora:"Elora, Druida Zimeldua", res_elora:"Izerdia",
  ab_elora:"Ernetze Basatia", abd_elora:"2 Izerdi gastatu: 8 Babes lortu eta 3 Erreta ezarri.",
  l_elora_burst:"Espora Toxikoak: Arantzek etsaia erretzen dute (+2 Erreta).", l_elora_save:"Antzinako azal naturak babesten zaitu (1 bizitza eta 10 Babes).",
  l_ab_elora:"Ernetze Basatia aktibatuta (8 Babes eta 3 Erreta).",
  ex_sap:(n)=>`${n} Izerdi irabazten dituzu. 3 bakoitzeko 2 Erreta. 6an: kolpe hilgarri bati ihes egiten diozu.`,

  c_carmilla:"Carmilla, Dama Gorrimina", res_carmilla:"Odola",
  ab_carmilla:"Odol-Sifoia", abd_carmilla:"2 Odol gastatu: 5 bizitza sendatu eta 6 kalte egin.",
  l_carmilla_fury:"Aseezina: Zure hurrengo erasoak +5 egiten du.", l_carmilla_save:"Hilezkortasunak bizirik mantentzen zaitu (1 bizitza eta 8 Babes).",
  l_ab_carmilla:"Odol-Sifoia burutua (5 bizitza sendatu eta 6 kalte etsaiari).",
  ex_blood:(n)=>`${n} Odol irabazten duzu. 3 bakoitzeko +5 kalte. 6an: kolpe hilgarri bati ihes egiten diozu.`,

  c_kaelen:"Kaelen, Réquiem Bardoa", res_kaelen:"Akordeak",
  ab_kaelen:"Azken Réquiema", abd_kaelen:"2 Akorde gastatu: +1 energia lortu eta karta 1 hartu.",
  l_kaelen_fury:"Klimax Disonantea: Zure hurrengo erasoak +5 egiten du.", l_kaelen_save:"Azken notak babesten zaitu (1 bizitza eta 10 Babes).",
  l_ab_kaelen:"Azken Réquiema jo da (+1 energia eta karta 1 hartu).",
  ex_chord:(n)=>`${n} Akorde irabazten dituzu. 3 bakoitzeko +5 kalte. 6an: kolpe hilgarri bati ihes egiten diozu.`,

  c_malakor:"Malakor, Amildegiko Brujua", res_malakor:"Arimak",
  ab_malakor:"Hutsaren Transfusioa", abd_malakor:"2 Arima gastatu: 8 kalte egin eta 3 Erreta ezarri.",
  l_malakor_burst:"Amildegiko Sua: Hutsak etsaia erretzen du (+2 Erreta).", l_malakor_save:"Hitzarmen kosmikoak heriotzatik ateratzen zaitu (1 bizitza eta 10 Babes).",
  l_ab_malakor:"Hutsaren Transfusioa aktibatuta (8 kalte eta 3 Erreta).",
  ex_soul:(n)=>`${n} Arima irabazten dituzu. 3 bakoitzeko 2 Erreta. 6an: kolpe hilgarri bati ihes egiten diozu.`,

  c_roland:"Roland, Gurutzatu Hautsezina", res_roland:"Zeloa",
  ab_roland:"Gurutzada Kolpea", abd_roland:"2 Zelo gastatu: 8 Babes lortu eta 8 kalte egin.",
  l_roland_fury:"Gurutzatuaren Furia: Zure hurrengo erasoak +5 egiten du.", l_roland_save:"Fede hautsezinak heriotzari desafio egiten dio (1 bizitza eta 12 Babes).",
  l_ab_roland:"Gurutzada Kolpea jo da (8 Babes eta 8 kalte).",
  ex_zeal:(n)=>`${n} Zelo irabazten dituzu. 3 bakoitzeko +5 kalte. 6an: kolpe hilgarri bati ihes egiten diozu.`,

  c_vael:"Corina, Arrosa Erbestetua", res_vael:"Petaloak", ab_vael:"Loraldi Gorrimina", abd_vael:"2 Petalo gastatu: +6 kalte eta karta 1.",
  c_morra:"Lysander, Falangearen Lehoia", res_morra:"Bultzada", ab_morra:"Hautsitze Karga", abd_morra:"2 Bultzada: 8 Babes eta 8 kalte.",
  c_lucan:"Valerius, Inkisidore Hautsia", res_lucan:"Fervorea", ab_lucan:"Argiaren Epaia", abd_lucan:"2 Fervor: 6 Babes eta 4 sendatu.",
  c_wren:"Faye, Ehiztari Espektrala", res_wren:"Fokua", ab_wren:"Tiro Ziurra", abd_wren:"2 Foku: +8 kalte eta karta 1.",

  backToMenu:"MENURA ITZULI",
  collSub:"Aurkitutako karten grimorioa eta erlikiak",
  skillsSub:"Komandante bakoitzaren trebetasun-arbola eta teknika arkanoak",
  artDesc:"Erresuma hautsiaren grabatuak, oihalak eta kronologiak",
  loreDesc:"Gravecrown-eko analak, komandanteen oroitzapenak eta piztiarioa",
  accDesc:"Blasoi heraldikoa, efigiea eta balentrien erregistroa",
  tab_world:"Erreinu Hautsia", tab_chars:"9 Komandanteak", tab_beasts:"Piztiarioa", tab_zones:"Eskualdeak",
  g_commanders:"Komandanteak", g_enemies:"Etsaiak", g_relics:"Erlikiak", g_events:"Gertaerak", g_backgrounds:"Atzealdeak",
  relicGain:(n)=>`Erlikia: ${n}`, relics:"Erlikiak",
  blood:"Odola", pyro:"Piroklastoa", saveAndQuit:"Gorde eta Menura irten", startWith:(n)=>`Espedizioa hasi ${n}-(r)ekin`,
  ex_ruin:(n)=>`${n} Hondamen gehitzen ditu: etsaiaren erasoek +1 kalte egiten dizute karga bakoitzeko.`,
  ex_stance:(n)=>`${n} txandako jarrera: kaltea jasotzean 5 murriztu. Amaitzean 3 bizitza galdu.`,
  viewDeck:(n)=>`Mazoa ikusi (${n})`, viewDeckTitle:(n)=>`Mazoa · ${n} karta`, discardCount:(n)=>`Baztertuak: ${n}`,
  l_heal:(n)=>`${n} bizitza berreskuratu duzu.`,
  "e_cinder-hound":"Errauts-txakurra", "e_tomb-guardian":"Hilobi-zaindaria", "e_plague-cultist":"Hondamen-kultista",
  resumeExpedition:(z,h,m)=>`Espedizioa jarraitu (${z}. eremua · ${h}/${m} HP)`,
  abandonExpedition:"Espedizioa utzi", abandonConfirm:"Ziur al zaude uneko espedizioa utzi nahi duzula?", runResumed:"Espedizioa berreskuratua."
});
Object.assign(EN, {
  "grave-guard":["Grave Guard","Gain 9 Block. Gain 1 Memory."], "crypt-hand":["Crypt Hand","Deal 8 damage. Gain 1 Memory."],
  "funerary-candle":["Funerary Candle","Gain 5 Block, draw 1 card and gain 1 Memory."], "fading-memory":["Fading Memory","Deal 12 damage and gain 2 Memories."],
  "soul-siphon":["Soul Siphon","Deal 7 damage. Restore 4 health and gain 1 Memory."],
  "ossuary-wall":["Ossuary Wall","Gain 18 Block and gain 2 Memories."],
  "pyre-strike":["Pyre Strike","Deal 16 damage and apply 3 Burning. Gain 1 Ruin."],
  "ashen-shield":["Ashen Shield","Gain 16 Block."],
  "crimson-thrust":["Crimson Thrust","Deal 9 damage. Gain 1 Blood."],
  "duelist-parry":["Duelist Guard","Gain 8 Block and gain 1 Blood."],
  "blood-feint":["Blood Feint","Gain 5 Block, draw 1 card and gain 1 Blood."],
  "vorpal-rend":["Vorpal Rend","Deal 15 damage and gain 2 Blood."],
  "blood-pact":["Blood Pact","Take 4 damage and gain 3 Blood. Draw 1 card."],
  "alchem-spark":["Alchemical Spark","Deal 7 damage and apply 2 Burning. Gain 1 Pyroclast."],
  "volatile-barrier":["Volatile Barrier","Gain 9 Block and gain 1 Pyroclast."],
  "distill":["Distill","Gain 5 Block, draw 1 card and gain 1 Pyroclast."],
  "pyro-burst":["Pyroclastic Burst","Deal 14 damage (+5 if Burning) and gain 2 Pyroclast."],
  "transmute-flesh":["Transmute Flesh","Restore 8 health and gain 1 Pyroclast."],
  "last-oath":["Oath of the Last Knight","For 3 turns, the first time you take damage each turn, reduce it by 5. When it ends, lose 3 health."],
  "broken-crown":["Broken Crown","Gain 2 Corruption and draw 2 cards. Take 3 damage and gain 1 Ruin."] });
Object.assign(EU, {
  // Corina
  "thorn-slash":["Arantza-sastada","8 kalte egiten ditu (+4 Erreta badago). Petalo 1 irabazi."],
  "petal-guard":["Petalo-zaintza","10 Babes lortzen duzu. Petalo 1 irabazi."],
  "rose-dance":["Arrosa-dantza","6 Babes lortu, karta 1 hartu eta Petalo 1 irabazi."],
  "bloody-lotus":["Loto Odoltsua","14 kalte egin eta 2 Erreta ezarri. 2 Petalo irabazi."],
  "black-lily":["Lirio Beltza","Etsaiaren erasoan soilik: kaltea 0ra murriztu. Kontraerasoa 5 eta Petalo 1 irabazi."],
  "hemlock-strike":["Zikuta Hilgarria","16 kalte egin eta 3 Erreta ezarri. Hondamen 1 eta 2 Petalo irabazi."],
  "briar-wall":["Arantza-harresia","16 Babes lortu eta Petalo 1 irabazi."],
  "petal-tempest":["Petalo-ekaitza","18 kalte ikaragarri egin eta 2 Petalo irabazi."],
  // Lysander
  "lance-thrust":["Lantza-sastada","9 kalte egiten ditu. Bultzada 1 irabazi."],
  "phalanx-guard":["Falange-zaintza","9 Babes lortu eta Bultzada 1 irabazi."],
  "vaulting-strike":["Pika-jauzia","5 Babes lortu, karta 1 hartu eta Bultzada 1 irabazi."],
  "dragon-pierce":["Herensuge-zulatzailea","15 kalte sarkor egin eta 2 Bultzada irabazi."],
  "iron-spearwall":["Pika-harresia","18 Babes lortu eta 2 Bultzada irabazi."],
  "iron-charge":["Banguardia Karga","16 kalte egin eta Bultzada 1 irabazi."],
  // Faye
  "spectral-arrow":["Gezi Espektrala","8 kalte egiten ditu babesa zeharkatuz. Foku 1 irabazi."],
  "hunter-ward":["Ehiztariaren Zaintza","9 Babes lortu eta Foku 1 irabazi."],
  "wind-step":["Haizearen Urratsa","5 Babes lortu, karta 1 hartu eta Foku 1 irabazi."],
  "rain-of-arrows":["Gezi-Euria","14 kalte egin eta 2 Foku irabazi."],
  "snare-trap":["Arantza-Tranpa","6 kalte egin, 2 Erreta ezarri eta Foku 1 irabazi."],
  "piercing-gale":["Haize-Mamu Zakarrada","10 kalte egin, karta 1 hartu eta Foku 1 irabazi."],
  // Valerius
  "halberd-cleave":["Alabarda-Ukabilkada","9 kalte handi egin. Fervor 1 irabazi."],
  "holy-bastion":["Baluarte Santua","9 Babes lortu eta Fervor 1 irabazi."],
  "righteous-sweep":["Ekorketa Justua","5 Babes lortu, karta 1 hartu eta Fervor 1 irabazi."],
  "divine-smite":["Sententzia Distiratsua","15 kalte santu egin eta 2 Fervor irabazi."],
  "penitent-prayer":["Damutuaren Otoitza","6 bizitza berreskuratu eta Fervor 1 irabazi."],
  "sunburst-barrier":["Egunsentiaren Harresia","18 Babes bedeinkatu lortu eta 2 Fervor irabazi."],
  // Elora
  "bramble-lash":["Látigo de Zarzas","8 kalte punzante egin. Izerdi 1 irabazi."],
  "barkskin":["Haritz-Azala","10 Babes natural lortu eta Izerdi 1 irabazi."],
  "spore-cloud":["Espora-Hodeia","5 Babes lortu, karta 1 hartu eta Izerdi 1 irabazi."],
  "wrath-of-nature":["Basoko Haserrea","14 kalte egin, 2 Erreta ezarri eta 2 Izerdi irabazi."],
  "root-embrace":["Erroen Besarkada","6 bizitza sendatu, 5 Babes lortu eta Izerdi 1 irabazi."],
  "ancient-growth":["Hazkunde Nagusia","18 Babes lortu eta 2 Izerdi irabazi."],
  // Carmilla
  "crimson-sip":["Hozkada Gorrimina","8 kalte egin eta 3 bizitza sendatu. Odol 1 irabazi."],
  "mist-veil":["Laino-Oihala","9 Babes lortu eta Odol 1 irabazi."],
  "bat-swarm":["Saguzar-Hodeia","5 Babes lortu, karta 1 hartu eta Odol 1 irabazi."],
  "blood-feast":["Odol-Oturuntza","15 kalte egin eta 4 bizitza sendatu. 2 Odol irabazi."],
  "sanguine-lance":["Odol-Lantza","3 bizitza galdu, 18 kalte egin eta 2 Odol irabazi."],
  "gothic-embrace":["Besarkada Gorrimina","18 Babes lortu eta 2 Odol irabazi."],
  // Kaelen
  "dissonant-chord":["Akorde Disonantea","8 kalte egin. Akorde 1 irabazi."],
  "ballad-of-iron":["Burdinaren Balada","9 Babes lortu eta Akorde 1 irabazi."],
  "crescendo":["Crescendo","5 Babes lortu, karta 1 hartu eta Akorde 1 irabazi."],
  "funeral-sonata":["Hileta-Sonata","14 kalte egin eta 2 Akorde irabazi."],
  "screech-of-sorrow":["Réquiem Negarra","10 kalte egin, 2 Erreta ezarri eta Akorde 1 irabazi."],
  "hymn-of-aegis":["Egida-Ereserkia","18 Babes lortu eta 2 Akorde irabazi."],
  // Malakor
  "void-bolt":["Hutsaren Deskarga","9 kalte ilun egin. Arima 1 irabazi."],
  "eldritch-ward":["Amildegi-Babesa","9 Babes lortu eta Arima 1 irabazi."],
  "dark-pact":["Itun Iluna","3 bizitza galdu, 2 karta hartu eta 2 Arima irabazi."],
  "soul-harvest":["Arima-Bilketa","15 kalte egin eta 2 Arima irabazi."],
  "shadowflame":["Itzal-Sua","13 kalte egin, 3 Erreta ezarri eta Arima 1 irabazi."],
  "void-gate":["Hutsaren Atea","18 Babes lortu eta 2 Arima irabazi."],
  // Roland
  "holy-strike":["Gurutze-Ebaki","9 kalte santu egin. Zelo 1 irabazi."],
  "crusader-shield":["Gurutzatuaren Ezkutua","10 tenplario-babes lortu. Zelo 1 irabazi."],
  "battle-hymn":["Zinaren Ereserkia","6 Babes lortu, karta 1 hartu eta Zelo 1 irabazi."],
  "smite-heretic":["Herexearen Zigorra","16 kalte egin eta 2 Erreta santu ezarri. 2 Zelo irabazi."],
  "sacred-bulwark":["Baluarte Tenplarioa","18 Babes hautsezin lortu eta 2 Zelo irabazi."],
  "consecrated-blade":["Gurutzadaren Ezpata","15 kalte egin eta 4 bizitza bedeinkatu sendatu. 2 Zelo irabazi."],
  // Neutral
  "parry":["Parada","Etsaiaren erasoan soilik: kaltea 0ra murriztu. Kontraerasoa 5."],
  "broken-crown":["Koroa Hautsia","Komandantearen 2 errekurtso eta 2 karta hartu. 3 kalte eta Hondamen 1 jaso."],
  "last-oath":["Azken Zaldunaren Zina","3 txandatan lehen kaltea 5 murriztu. Amaitzean 3 bizitza galdu."]
});

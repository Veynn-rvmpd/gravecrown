// Rutas de imágenes configurables aquí. Archivos en public/assets/...
const A = "/assets/cards/";

export const CARDS = {
  // ---- CORINA (Princesa Desterrada / Ropera / Flores) ----
  "thorn-slash": { id:"thorn-slash", cmd:"corina", name:"Estocada de Espina", image:A+"ash/ash-slash.webp", type:"attack", cost:1,
    description:"Inflige 8 de daño. +4 si el enemigo tiene Quemado. Ganas 1 Pétalo.", effects:[{a:"damage",n:8,burnBonus:4},{a:"petal",n:1}] },
  "petal-guard": { id:"petal-guard", cmd:"corina", name:"Guardia de Pétalos", image:A+"ash/ember-guard.webp", type:"defense", cost:1,
    description:"Obtienes 10 de Bloqueo. Ganas 1 Pétalo.", effects:[{a:"block",n:10},{a:"petal",n:1}] },
  "rose-dance": { id:"rose-dance", cmd:"corina", name:"Danza de Rosas", image:A+"ash/ash-step.webp", type:"technique", cost:1,
    description:"Obtienes 6 de Bloqueo, robas 1 carta y ganas 1 Pétalo.", effects:[{a:"block",n:6},{a:"draw",n:1},{a:"petal",n:1}] },
  "bloody-lotus": { id:"bloody-lotus", cmd:"corina", name:"Loto Sangriento", image:A+"ash/dying-fire.webp", type:"magic", cost:2,
    description:"Inflige 14 de daño y aplica 2 de Quemado. Ganas 2 Pétalos.", effects:[{a:"damage",n:14},{a:"burn",n:2},{a:"petal",n:2}] },
  "black-lily": { id:"black-lily", cmd:"corina", name:"Lirio Negro", image:A+"ash/parry.webp", type:"reaction", cost:0, reaction:true,
    description:"Solo ante un ataque enemigo: reduce el daño a 0. Contraataque de 5 y ganas 1 Pétalo.", effects:[{a:"petal",n:1}] },
  "hemlock-strike": { id:"hemlock-strike", cmd:"corina", name:"Cicuta Mortal", image:A+"ash/pyre-strike.webp", type:"attack", cost:2,
    description:"Inflige 16 de daño y aplica 3 de Quemado. Ganas 1 de Ruina y 2 Pétalos.", effects:[{a:"damage",n:16},{a:"burn",n:3},{a:"ruin",n:1},{a:"petal",n:2}] },
  "briar-wall": { id:"briar-wall", cmd:"corina", name:"Muro de Espinas", image:A+"ash/ashen-shield.webp", type:"defense", cost:2,
    description:"Obtienes 16 de Bloqueo y ganas 1 Pétalo.", effects:[{a:"block",n:16},{a:"petal",n:1}] },
  "petal-tempest": { id:"petal-tempest", cmd:"corina", name:"Tormenta de Pétalos", image:A+"ash/crimson-thrust.webp", type:"magic", cost:2,
    description:"Inflige 18 de daño devastador y ganas 2 Pétalos.", effects:[{a:"damage",n:18},{a:"petal",n:2}] },

  // ---- LYSANDER (Lancero / Impulso) ----
  "lance-thrust": { id:"lance-thrust", cmd:"lysander", name:"Estocada de Lanza", image:A+"grave/crypt-hand.webp", type:"attack", cost:1,
    description:"Inflige 9 de daño. Ganas 1 Impulso.", effects:[{a:"damage",n:9},{a:"momentum",n:1}] },
  "phalanx-guard": { id:"phalanx-guard", cmd:"lysander", name:"Guardia de Falange", image:A+"grave/grave-guard.webp", type:"defense", cost:1,
    description:"Obtienes 9 de Bloqueo y ganas 1 Impulso.", effects:[{a:"block",n:9},{a:"momentum",n:1}] },
  "vaulting-strike": { id:"vaulting-strike", cmd:"lysander", name:"Salto con Pica", image:A+"grave/funerary-candle.webp", type:"technique", cost:1,
    description:"Obtienes 5 de Bloqueo, robas 1 carta y ganas 1 Impulso.", effects:[{a:"block",n:5},{a:"draw",n:1},{a:"momentum",n:1}] },
  "dragon-pierce": { id:"dragon-pierce", cmd:"lysander", name:"Perforadragones", image:A+"grave/fading-memory.webp", type:"magic", cost:2,
    description:"Inflige 15 de daño penetrante y ganas 2 Impulso.", effects:[{a:"damage",n:15},{a:"momentum",n:2}] },
  "iron-spearwall": { id:"iron-spearwall", cmd:"lysander", name:"Muro de Picas", image:A+"grave/ossuary-wall.webp", type:"defense", cost:2,
    description:"Obtienes 18 de Bloqueo y ganas 2 Impulso.", effects:[{a:"block",n:18},{a:"momentum",n:2}] },
  "iron-charge": { id:"iron-charge", cmd:"lysander", name:"Carga de Vanguardia", image:A+"grave/soul-siphon.webp", type:"attack", cost:2,
    description:"Inflige 16 de daño y ganas 1 Impulso.", effects:[{a:"damage",n:16},{a:"momentum",n:1}] },

  // ---- FAYE (Arquera Espectral / Foco) ----
  "spectral-arrow": { id:"spectral-arrow", cmd:"faye", name:"Flecha Espectral", image:A+"ash/alchem-spark.webp", type:"attack", cost:1,
    description:"Inflige 8 de daño que atraviesa armaduras. Ganas 1 Foco.", effects:[{a:"damage",n:8},{a:"focus",n:1}] },
  "hunter-ward": { id:"hunter-ward", cmd:"faye", name:"Guardia de la Cazadora", image:A+"ash/volatile-barrier.webp", type:"defense", cost:1,
    description:"Obtienes 9 de Bloqueo y ganas 1 Foco.", effects:[{a:"block",n:9},{a:"focus",n:1}] },
  "wind-step": { id:"wind-step", cmd:"faye", name:"Paso del Viento", image:A+"ash/distill.webp", type:"technique", cost:1,
    description:"Obtienes 5 de Bloqueo, robas 1 carta y ganas 1 Foco.", effects:[{a:"block",n:5},{a:"draw",n:1},{a:"focus",n:1}] },
  "rain-of-arrows": { id:"rain-of-arrows", cmd:"faye", name:"Lluvia de Flechas", image:A+"ash/pyro-burst.webp", type:"magic", cost:2,
    description:"Inflige 14 de daño y ganas 2 Foco.", effects:[{a:"damage",n:14},{a:"focus",n:2}] },
  "snare-trap": { id:"snare-trap", cmd:"faye", name:"Trampa de Espinas", image:A+"ash/transmute-flesh.webp", type:"technique", cost:1,
    description:"Inflige 6 de daño, aplica 2 Quemado y ganas 1 Foco.", effects:[{a:"damage",n:6},{a:"burn",n:2},{a:"focus",n:1}] },
  "piercing-gale": { id:"piercing-gale", cmd:"faye", name:"Ráfaga Fantasma", image:A+"ash/ash-step.webp", type:"magic", cost:1,
    description:"Inflige 10 de daño, robas 1 carta y ganas 1 Foco.", effects:[{a:"damage",n:10},{a:"draw",n:1},{a:"focus",n:1}] },

  // ---- VALERIUS (Paladín con Alabarda / Fervor) ----
  "halberd-cleave": { id:"halberd-cleave", cmd:"valerius", name:"Hachazo de Alabarda", image:A+"ash/crimson-thrust.webp", type:"attack", cost:1,
    description:"Inflige 9 de daño contundente. Ganas 1 Fervor.", effects:[{a:"damage",n:9},{a:"fervor",n:1}] },
  "holy-bastion": { id:"holy-bastion", cmd:"valerius", name:"Bastión Sagrado", image:A+"ash/duelist-parry.webp", type:"defense", cost:1,
    description:"Obtienes 9 de Bloqueo y ganas 1 Fervor.", effects:[{a:"block",n:9},{a:"fervor",n:1}] },
  "righteous-sweep": { id:"righteous-sweep", cmd:"valerius", name:"Barrido Justiciero", image:A+"ash/blood-feint.webp", type:"technique", cost:1,
    description:"Obtienes 5 de Bloqueo, robas 1 carta y ganas 1 Fervor.", effects:[{a:"block",n:5},{a:"draw",n:1},{a:"fervor",n:1}] },
  "divine-smite": { id:"divine-smite", cmd:"valerius", name:"Sentencia Radiante", image:A+"ash/vorpal-rend.webp", type:"magic", cost:2,
    description:"Inflige 15 de daño sagrado y ganas 2 Fervor.", effects:[{a:"damage",n:15},{a:"fervor",n:2}] },
  "penitent-prayer": { id:"penitent-prayer", cmd:"valerius", name:"Plegaria del Penitente", image:A+"ash/blood-pact.webp", type:"technique", cost:1,
    description:"Recuperas 6 de vida y ganas 1 Fervor.", effects:[{a:"heal",n:6},{a:"fervor",n:1}] },
  "sunburst-barrier": { id:"sunburst-barrier", cmd:"valerius", name:"Muro del Alba", image:A+"ash/ashen-shield.webp", type:"defense", cost:2,
    description:"Obtienes 18 de Bloqueo consagrado y ganas 2 Fervor.", effects:[{a:"block",n:18},{a:"fervor",n:2}] },

  // ---- ELORA (Druida / Savia y Raíces) ----
  "bramble-lash": { id:"bramble-lash", cmd:"elora", name:"Látigo de Zarzas", image:A+"grave/crypt-hand.webp", type:"attack", cost:1,
    description:"Inflige 8 de daño punzante. Ganas 1 Savia.", effects:[{a:"damage",n:8},{a:"sap",n:1}] },
  "barkskin": { id:"barkskin", cmd:"elora", name:"Piel de Roble", image:A+"grave/grave-guard.webp", type:"defense", cost:1,
    description:"Obtienes 10 de Bloqueo natural y ganas 1 Savia.", effects:[{a:"block",n:10},{a:"sap",n:1}] },
  "spore-cloud": { id:"spore-cloud", cmd:"elora", name:"Nube de Esporas", image:A+"grave/funerary-candle.webp", type:"technique", cost:1,
    description:"Obtienes 5 de Bloqueo, robas 1 carta y ganas 1 Savia.", effects:[{a:"block",n:5},{a:"draw",n:1},{a:"sap",n:1}] },
  "wrath-of-nature": { id:"wrath-of-nature", cmd:"elora", name:"Furia Arbórea", image:A+"grave/fading-memory.webp", type:"magic", cost:2,
    description:"Inflige 14 de daño, aplica 2 Quemado y ganas 2 Savia.", effects:[{a:"damage",n:14},{a:"burn",n:2},{a:"sap",n:2}] },
  "root-embrace": { id:"root-embrace", cmd:"elora", name:"Abrazo de Raíces", image:A+"grave/soul-siphon.webp", type:"technique", cost:1,
    description:"Recuperas 6 de vida, obtienes 5 de Bloqueo y ganas 1 Savia.", effects:[{a:"heal",n:6},{a:"block",n:5},{a:"sap",n:1}] },
  "ancient-growth": { id:"ancient-growth", cmd:"elora", name:"Crecimiento Primigenio", image:A+"grave/ossuary-wall.webp", type:"defense", cost:2,
    description:"Obtienes 18 de Bloqueo y ganas 2 Savia.", effects:[{a:"block",n:18},{a:"sap",n:2}] },

  // ---- CARMILLA (Vampira / Sangre) ----
  "crimson-sip": { id:"crimson-sip", cmd:"carmilla", name:"Mordisco Carmesí", image:A+"ash/crimson-thrust.webp", type:"attack", cost:1,
    description:"Inflige 8 de daño y recuperas 3 de vida. Ganas 1 Sangre.", effects:[{a:"damage",n:8},{a:"heal",n:3},{a:"blood",n:1}] },
  "mist-veil": { id:"mist-veil", cmd:"carmilla", name:"Velo de Niebla", image:A+"ash/duelist-parry.webp", type:"defense", cost:1,
    description:"Obtienes 9 de Bloqueo y ganas 1 Sangre.", effects:[{a:"block",n:9},{a:"blood",n:1}] },
  "bat-swarm": { id:"bat-swarm", cmd:"carmilla", name:"Enjambre de Murciélagos", image:A+"ash/blood-feint.webp", type:"technique", cost:1,
    description:"Obtienes 5 de Bloqueo, robas 1 carta y ganas 1 Sangre.", effects:[{a:"block",n:5},{a:"draw",n:1},{a:"blood",n:1}] },
  "blood-feast": { id:"blood-feast", cmd:"carmilla", name:"Festín de Sangre", image:A+"ash/vorpal-rend.webp", type:"magic", cost:2,
    description:"Inflige 15 de daño y recuperas 4 de vida. Ganas 2 Sangre.", effects:[{a:"damage",n:15},{a:"heal",n:4},{a:"blood",n:2}] },
  "sanguine-lance": { id:"sanguine-lance", cmd:"carmilla", name:"Lanza de Sangre", image:A+"ash/blood-pact.webp", type:"technique", cost:0,
    description:"Pierdes 3 de vida, infliges 18 de daño y ganas 2 Sangre.", effects:[{a:"hurt",n:3},{a:"damage",n:18},{a:"blood",n:2}] },
  "gothic-embrace": { id:"gothic-embrace", cmd:"carmilla", name:"Abrazo Carmesí", image:A+"ash/ashen-shield.webp", type:"defense", cost:2,
    description:"Obtienes 18 de Bloqueo y ganas 2 Sangre.", effects:[{a:"block",n:18},{a:"blood",n:2}] },

  // ---- KAELEN (Bardo / Acordes) ----
  "dissonant-chord": { id:"dissonant-chord", cmd:"kaelen", name:"Acorde Disonante", image:A+"ash/alchem-spark.webp", type:"attack", cost:1,
    description:"Inflige 8 de daño que resuena en el cráneo enemigo. Ganas 1 Acorde.", effects:[{a:"damage",n:8},{a:"chord",n:1}] },
  "ballad-of-iron": { id:"ballad-of-iron", cmd:"kaelen", name:"Balada de Hierro", image:A+"ash/volatile-barrier.webp", type:"defense", cost:1,
    description:"Obtienes 9 de Bloqueo y ganas 1 Acorde.", effects:[{a:"block",n:9},{a:"chord",n:1}] },
  "crescendo": { id:"crescendo", cmd:"kaelen", name:"Crescendo", image:A+"ash/distill.webp", type:"technique", cost:1,
    description:"Obtienes 5 de Bloqueo, robas 1 carta y ganas 1 Acorde.", effects:[{a:"block",n:5},{a:"draw",n:1},{a:"chord",n:1}] },
  "funeral-sonata": { id:"funeral-sonata", cmd:"kaelen", name:"Sonata Fúnebre", image:A+"ash/pyro-burst.webp", type:"magic", cost:2,
    description:"Inflige 14 de daño y ganas 2 Acordes.", effects:[{a:"damage",n:14},{a:"chord",n:2}] },
  "screech-of-sorrow": { id:"screech-of-sorrow", cmd:"kaelen", name:"Lamento del Réquiem", image:A+"ash/dying-fire.webp", type:"magic", cost:1,
    description:"Inflige 10 de daño, aplica 2 Quemado y ganas 1 Acorde.", effects:[{a:"damage",n:10},{a:"burn",n:2},{a:"chord",n:1}] },
  "hymn-of-aegis": { id:"hymn-of-aegis", cmd:"kaelen", name:"Himno de la Égida", image:A+"ash/ember-guard.webp", type:"defense", cost:2,
    description:"Obtienes 18 de Bloqueo y ganas 2 Acordes.", effects:[{a:"block",n:18},{a:"chord",n:2}] },

  // ---- MALAKOR (Brujo / Almas y Vacío) ----
  "void-bolt": { id:"void-bolt", cmd:"malakor", name:"Descarga del Vacío", image:A+"grave/crypt-hand.webp", type:"attack", cost:1,
    description:"Inflige 9 de daño umbrío. Ganas 1 Alma.", effects:[{a:"damage",n:9},{a:"soul",n:1}] },
  "eldritch-ward": { id:"eldritch-ward", cmd:"malakor", name:"Barrera Abisal", image:A+"grave/grave-guard.webp", type:"defense", cost:1,
    description:"Obtienes 9 de Bloqueo y ganas 1 Alma.", effects:[{a:"block",n:9},{a:"soul",n:1}] },
  "dark-pact": { id:"dark-pact", cmd:"malakor", name:"Pacto Sombrío", image:A+"ash/blood-pact.webp", type:"technique", cost:0,
    description:"Pierdes 3 de vida, robas 2 cartas y ganas 2 Almas.", effects:[{a:"hurt",n:3},{a:"draw",n:2},{a:"soul",n:2}] },
  "soul-harvest": { id:"soul-harvest", cmd:"malakor", name:"Cosecha de Almas", image:A+"grave/fading-memory.webp", type:"magic", cost:2,
    description:"Inflige 15 de daño y ganas 2 Almas.", effects:[{a:"damage",n:15},{a:"soul",n:2}] },
  "shadowflame": { id:"shadowflame", cmd:"malakor", name:"Llama Umbría", image:A+"ash/dying-fire.webp", type:"attack", cost:2,
    description:"Inflige 13 de daño, aplica 3 Quemado y ganas 1 Alma.", effects:[{a:"damage",n:13},{a:"burn",n:3},{a:"soul",n:1}] },
  "void-gate": { id:"void-gate", cmd:"malakor", name:"Umbral del Abismo", image:A+"grave/ossuary-wall.webp", type:"defense", cost:2,
    description:"Obtienes 18 de Bloqueo del vacío y ganas 2 Almas.", effects:[{a:"block",n:18},{a:"soul",n:2}] },

  // ---- ROLAND (El Cruzado Inquebrantable / Celo) ----
  "holy-strike": { id:"holy-strike", cmd:"roland", name:"Tajo de la Cruz", image:A+"ash/crimson-thrust.webp", type:"attack", cost:1,
    description:"Inflige 9 de daño consagrado. Ganas 1 Celo.", effects:[{a:"damage",n:9},{a:"zeal",n:1}] },
  "crusader-shield": { id:"crusader-shield", cmd:"roland", name:"Escudo del Cruzado", image:A+"ash/duelist-parry.webp", type:"defense", cost:1,
    description:"Obtienes 10 de Bloqueo templario y ganas 1 Celo.", effects:[{a:"block",n:10},{a:"zeal",n:1}] },
  "battle-hymn": { id:"battle-hymn", cmd:"roland", name:"Himno del Voto", image:A+"ash/blood-feint.webp", type:"technique", cost:1,
    description:"Obtienes 6 de Bloqueo, robas 1 carta y ganas 1 Celo.", effects:[{a:"block",n:6},{a:"draw",n:1},{a:"zeal",n:1}] },
  "smite-heretic": { id:"smite-heretic", cmd:"roland", name:"Castigo al Hereje", image:A+"ash/pyre-strike.webp", type:"magic", cost:2,
    description:"Inflige 16 de daño y aplica 2 de Quemado santo. Ganas 2 Celo.", effects:[{a:"damage",n:16},{a:"burn",n:2},{a:"zeal",n:2}] },
  "sacred-bulwark": { id:"sacred-bulwark", cmd:"roland", name:"Baluarte Templario", image:A+"ash/ashen-shield.webp", type:"defense", cost:2,
    description:"Obtienes 18 de Bloqueo inquebrantable y ganas 2 Celo.", effects:[{a:"block",n:18},{a:"zeal",n:2}] },
  "consecrated-blade": { id:"consecrated-blade", cmd:"roland", name:"Espada de la Cruzada", image:A+"ash/vorpal-rend.webp", type:"attack", cost:2,
    description:"Inflige 15 de daño y recuperas 4 de vida bendita. Ganas 2 Celo.", effects:[{a:"damage",n:15},{a:"heal",n:4},{a:"zeal",n:2}] },

  // ---- NEUTRALES / COMUNES ----
  "parry": { id:"parry", name:"Parada", image:A+"ash/parry.webp", type:"reaction", cost:0, reaction:true,
    description:"Solo ante un ataque enemigo: reduce el daño a 0. Si es rápida, contraataque de 5.", effects:[] },
  "broken-crown": { id:"broken-crown", name:"Corona Rota", image:A+"neutral/broken-crown.webp", type:"curse", cost:0,
    description:"Ganas 2 del recurso de tu comandante y robas 2 cartas. Recibes 3 de daño y 1 de Ruina.", effects:[{a:"petal",n:2},{a:"momentum",n:2},{a:"focus",n:2},{a:"fervor",n:2},{a:"sap",n:2},{a:"blood",n:2},{a:"chord",n:2},{a:"soul",n:2},{a:"zeal",n:2},{a:"draw",n:2},{a:"hurt",n:3},{a:"ruin",n:1}] },
  "last-oath": { id:"last-oath", name:"Juramento del Último Caballero", image:A+"ash/last-oath.webp", type:"stance", cost:2,
    description:"Durante 3 turnos, la primera vez que recibes daño cada turno, lo reduces en 5. Al terminar, pierdes 3 de vida.", effects:[{a:"stance",n:3}] },
};

export const COMMANDERS = {
  corina:{ id:"corina", name:"Corina, la Rosa Desterrada", resource:"Pétalos", image:"/assets/commanders/corina.png", hp:70, ready:true,
    deck:["thorn-slash","thorn-slash","thorn-slash","thorn-slash","petal-guard","petal-guard","petal-guard","rose-dance","bloody-lotus","black-lily","black-lily"] },
  lysander:{ id:"lysander", name:"Lysander, el León de la Guardia", resource:"Impulso", image:"/assets/commanders/lysander.png", hp:75, ready:true,
    deck:["lance-thrust","lance-thrust","lance-thrust","lance-thrust","phalanx-guard","phalanx-guard","phalanx-guard","vaulting-strike","dragon-pierce","parry","parry"] },
  faye:{ id:"faye", name:"Faye, la Cazadora Espectral", resource:"Foco", image:"/assets/commanders/faye.png", hp:68, ready:true,
    deck:["spectral-arrow","spectral-arrow","spectral-arrow","spectral-arrow","hunter-ward","hunter-ward","hunter-ward","wind-step","rain-of-arrows","parry","parry"] },
  valerius:{ id:"valerius", name:"Valerius, el Inquisidor Quebrado", resource:"Fervor", image:"/assets/commanders/paladin.png", hp:76, ready:true,
    deck:["halberd-cleave","halberd-cleave","halberd-cleave","halberd-cleave","holy-bastion","holy-bastion","holy-bastion","righteous-sweep","divine-smite","parry","parry"] },
  elora:{ id:"elora", name:"Elora, la Druida Marchita", resource:"Savia", image:"/assets/commanders/druid.png", hp:72, ready:true,
    deck:["bramble-lash","bramble-lash","bramble-lash","bramble-lash","barkskin","barkskin","barkskin","spore-cloud","wrath-of-nature","parry","parry"] },
  carmilla:{ id:"carmilla", name:"Carmilla, la Dama Carmesí", resource:"Sangre", image:"/assets/commanders/vampire.png", hp:66, ready:true,
    deck:["crimson-sip","crimson-sip","crimson-sip","crimson-sip","mist-veil","mist-veil","mist-veil","bat-swarm","blood-feast","parry","parry"] },
  kaelen:{ id:"kaelen", name:"Kaelen, el Bardo del Réquiem", resource:"Acordes", image:"/assets/commanders/bard.png", hp:70, ready:true,
    deck:["dissonant-chord","dissonant-chord","dissonant-chord","dissonant-chord","ballad-of-iron","ballad-of-iron","ballad-of-iron","crescendo","funeral-sonata","parry","parry"] },
  malakor:{ id:"malakor", name:"Malakor, el Brujo del Abismo", resource:"Almas", image:"/assets/commanders/warlock.png", hp:65, ready:true,
    deck:["void-bolt","void-bolt","void-bolt","void-bolt","eldritch-ward","eldritch-ward","eldritch-ward","dark-pact","soul-harvest","parry","parry"] },
  roland:{ id:"roland", name:"Roland, el Cruzado Inquebrantable", resource:"Celo", image:"/assets/commanders/roland.png", hp:74, ready:true,
    deck:["holy-strike","holy-strike","holy-strike","holy-strike","crusader-shield","crusader-shield","crusader-shield","battle-hymn","smite-heretic","parry","parry"] },
};

export const ENEMIES = {
  raider:{ name:"Saqueador de Ceniza", image:"/assets/enemies/ash-raider.webp", hp:40, gold:[15,25], intents:[{t:"attack",n:8},{t:"attack",n:11},{t:"defend",n:8},{t:"attack",n:18}] },
  "cinder-hound":{ name:"Sabueso de Ceniza", image:"/assets/enemies/cinder-hound.webp", hp:32, gold:[12,20], intents:[{t:"attack",n:6},{t:"attack",n:10},{t:"attack",n:14}] },
  specter:{ name:"Espectro de la Cripta", image:"/assets/enemies/crypt-specter.webp", hp:50, gold:[20,30], intents:[{t:"attack",n:9},{t:"attack",n:12},{t:"defend",n:10},{t:"stun",n:7},{t:"attack",n:20}] },
  "tomb-guardian":{ name:"Guardián de Tumba", image:"/assets/enemies/tomb-guardian.webp", hp:55, gold:[22,32], intents:[{t:"defend",n:12},{t:"attack",n:10},{t:"defend",n:14},{t:"attack",n:16}] },
  "plague-cultist":{ name:"Cultista de la Ruina", image:"/assets/enemies/plague-cultist.webp", hp:44, gold:[18,28], intents:[{t:"attack",n:8},{t:"defend",n:8},{t:"stun",n:6},{t:"attack",n:15}] },
  fearsome:{ name:"Terror Encadenado", image:"/assets/enemies/fearsome-foe.webp", hp:90, gold:[60,80], intents:[{t:"attack",n:12},{t:"defend",n:12},{t:"attack",n:16},{t:"attack",n:26}] },
  "ash-tyrant":{ name:"Tirano de Ceniza", image:"/assets/enemies/ash-tyrant.webp", hp:110, gold:[80,100], intents:[{t:"attack",n:10},{t:"defend",n:12},{t:"attack",n:14},{t:"attack",n:24}] },
  "crypt-queen":{ name:"Reina de la Cripta", image:"/assets/enemies/crypt-queen.webp", hp:130, gold:[90,110], intents:[{t:"attack",n:11},{t:"defend",n:14},{t:"attack",n:15},{t:"attack",n:26}] },
  "crown-wraith":{ name:"Espectro de la Corona", image:"/assets/enemies/crown-wraith.webp", hp:160, gold:[120,150], intents:[{t:"attack",n:13},{t:"defend",n:16},{t:"attack",n:18},{t:"attack",n:30}] },
  tutorial:{ name:"Saqueador de Ceniza", image:"/assets/enemies/ash-raider.webp", hp:24, intents:[{t:"attack",n:8}] },
};

export const ZONES = [
  { id:"ashfields", name:{es:"Campos de Ceniza",en:"Ashfields",eu:"Errauts-soroak"}, bg:"/assets/backgrounds/ashfields.webp", tint:"#3a2215",
    music:"/assets/music/ashfields.mp3", bossMusic:"/assets/music/ashfields-boss.mp3", enemies:["raider","cinder-hound","specter"], nodes:3, boss:"ash-tyrant" },
  { id:"crypt", name:{es:"La Cripta Olvidada",en:"The Forgotten Crypt",eu:"Ahaztutako kripta"}, bg:"/assets/backgrounds/crypt.webp", tint:"#1b2a30",
    music:"/assets/music/crypt.mp3", bossMusic:"/assets/music/crypt-boss.mp3", enemies:["specter","tomb-guardian","plague-cultist"], nodes:3, boss:"crypt-queen" },
  { id:"citadel", name:{es:"Ciudadela Calcinada",en:"Scorched Citadel",eu:"Zitadela kiskalia"}, bg:"/assets/backgrounds/citadel.webp", tint:"#2e1414",
    music:"/assets/music/citadel.mp3", bossMusic:"/assets/music/citadel-boss.mp3", enemies:["tomb-guardian","cinder-hound","plague-cultist","specter"], nodes:4, boss:"crown-wraith" },
];

export const MENU_MUSIC = "/assets/music/menu.mp3";

export const REWARD_POOL = [
  "thorn-slash","petal-guard","rose-dance","bloody-lotus","black-lily","hemlock-strike","briar-wall","petal-tempest",
  "lance-thrust","phalanx-guard","vaulting-strike","dragon-pierce","iron-spearwall","iron-charge",
  "spectral-arrow","hunter-ward","wind-step","rain-of-arrows","snare-trap","piercing-gale",
  "halberd-cleave","holy-bastion","righteous-sweep","divine-smite","penitent-prayer","sunburst-barrier",
  "bramble-lash","barkskin","spore-cloud","wrath-of-nature","root-embrace","ancient-growth",
  "crimson-sip","mist-veil","bat-swarm","blood-feast","sanguine-lance","gothic-embrace",
  "dissonant-chord","ballad-of-iron","crescendo","funeral-sonata","screech-of-sorrow","hymn-of-aegis",
  "void-bolt","eldritch-ward","dark-pact","soul-harvest","shadowflame","void-gate",
  "holy-strike","crusader-shield","battle-hymn","smite-heretic","sacred-bulwark","consecrated-blade",
  "parry","broken-crown","last-oath"
];

export const TUTORIAL = [
  {text:"Esta es Corina, princesa desterrada. Tu vida representa tu resistencia. La energía determina cuántas acciones puedes realizar. Los Pétalos alimentan tus técnicas con la ropera.", target:"#cmdr", wait:"next", allow:{}},
  {text:"Las cartas son tus acciones. Selecciona Estocada de Espina y úsala contra el Saqueador de Ceniza.", target:'[data-card-id="thorn-slash"]', wait:"play:thorn-slash", allow:{cards:["thorn-slash"]}},
  {text:"El enemigo anuncia lo que hará. Observa el icono y la cantidad de daño antes de terminar el turno.", target:"#intent", wait:"next", allow:{}},
  {text:"El Bloqueo absorbe el daño antes de que llegue a tu vida. Juega Guardia de Pétalos.", target:'[data-card-id="petal-guard"]', wait:"play:petal-guard", allow:{cards:["petal-guard"]}},
  {text:"Cuando hayas terminado tus acciones, finaliza el turno. Entonces los enemigos ejecutarán sus intenciones.", target:"#end", wait:"endturn", allow:{end:true}},
  {text:"Algunas cartas no se juegan durante tu turno. Parada o Lirio Negro responden al ataque: termina el turno y úsalas al recibir el golpe.", target:'[data-card-id="black-lily"]', wait:"react", allow:{end:true,cards:["black-lily","parry"]}},
  {text:"Los Pétalos florecen con cada golpe y desatan efectos mortales. Juega Loto Sangriento.", target:'[data-card-id="bloody-lotus"]', wait:"play:bloody-lotus", allow:{cards:["bloody-lotus"]}},
  {text:"Remata al enemigo. Después de cada combate elegirás recompensas: tu mazo cambiará durante la expedición.", target:"#enemy", wait:"win", allow:{all:true}},
];

export const ITEMS = {
  potion:{ id:"potion", icon:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;vertical-align:middle;"><path d="M10 2v5L4 18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2L14 7V2"/></svg>`, start:2, effects:[{a:"heal",n:15}] },
  tonic:{ id:"tonic", icon:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;vertical-align:middle;"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`, start:1, effects:[{a:"block",n:8}] },
  flask:{ id:"flask", icon:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;vertical-align:middle;"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`, start:1, effects:[{a:"damage",n:6},{a:"burn",n:2}] },
};

export const ART = [
  {id:"corina",group:"commanders",path:"/assets/commanders/corina.png",name:{es:"Corina, la Rosa Desterrada",en:"Corina, the Exiled Rose"}},
  {id:"lysander",group:"commanders",path:"/assets/commanders/lysander.png",name:{es:"Lysander, el León de la Guardia",en:"Lysander, Lion of the Phalanx"}},
  {id:"faye",group:"commanders",path:"/assets/commanders/faye.png",name:{es:"Faye, la Cazadora Espectral",en:"Faye, the Spectral Ranger"}},
  {id:"valerius",group:"commanders",path:"/assets/commanders/paladin.png",name:{es:"Valerius, el Inquisidor Quebrado",en:"Valerius, the Broken Inquisitor"}},
  {id:"elora",group:"commanders",path:"/assets/commanders/druid.png",name:{es:"Elora, la Druida Marchita",en:"Elora, the Blighted Druid"}},
  {id:"carmilla",group:"commanders",path:"/assets/commanders/vampire.png",name:{es:"Carmilla, la Dama Carmesí",en:"Carmilla, the Sanguine Countess"}},
  {id:"kaelen",group:"commanders",path:"/assets/commanders/bard.png",name:{es:"Kaelen, el Bardo del Réquiem",en:"Kaelen, the Requiem Maestro"}},
  {id:"malakor",group:"commanders",path:"/assets/commanders/warlock.png",name:{es:"Malakor, el Brujo del Abismo",en:"Malakor, the Void Warlock"}},
  {id:"roland",group:"commanders",path:"/assets/commanders/roland.png",name:{es:"Roland, el Cruzado Inquebrantable",en:"Roland, the Unbroken Crusader"}},
  {id:"ash-raider",group:"enemies",path:"/assets/enemies/ash-raider.webp",name:{es:"Saqueador de Ceniza",en:"Ash Raider"}},
  {id:"crypt-specter",group:"enemies",path:"/assets/enemies/crypt-specter.webp",name:{es:"Espectro de la Cripta",en:"Crypt Specter"}},
  {id:"fearsome-foe",group:"enemies",path:"/assets/enemies/fearsome-foe.webp",name:{es:"Terror Encadenado (miniboss)",en:"Chained Terror (miniboss)"}},
  {id:"iron-crown",group:"relics",path:"/assets/relics/iron-crown.webp",name:{es:"Corona de Hierro",en:"Iron Crown"}},
  {id:"hanging-bridge",group:"events",path:"/assets/events/hanging-bridge.webp",name:{es:"Puente Colgante",en:"Hanging Bridge"}},
  {id:"ash-tyrant",group:"enemies",path:"/assets/enemies/ash-tyrant.webp",name:{es:"Tirano de Ceniza (jefe)",en:"Ash Tyrant (boss)"}},
  {id:"crypt-queen",group:"enemies",path:"/assets/enemies/crypt-queen.webp",name:{es:"Reina de la Cripta (jefe)",en:"Crypt Queen (boss)"}},
  {id:"crown-wraith",group:"enemies",path:"/assets/enemies/crown-wraith.webp",name:{es:"Espectro de la Corona (jefe)",en:"Crown Wraith (boss)"}},
  {id:"bg-ashfields",group:"backgrounds",path:"/assets/backgrounds/ashfields.webp",name:{es:"Fondo: Campos de Ceniza",en:"Background: Ashfields"}},
  {id:"bg-crypt",group:"backgrounds",path:"/assets/backgrounds/crypt.webp",name:{es:"Fondo: La Cripta Olvidada",en:"Background: Forgotten Crypt"}},
  {id:"bg-citadel",group:"backgrounds",path:"/assets/backgrounds/citadel.webp",name:{es:"Fondo: Ciudadela Calcinada",en:"Background: Scorched Citadel"}},
  {id:"merchant",group:"events",path:"/assets/events/merchant.webp",name:{es:"Mercader",en:"Merchant"}},
  {id:"rest-site",group:"events",path:"/assets/events/rest-site.webp",name:{es:"Lugar de descanso",en:"Rest Site"}},
];

// Habilidades desbloqueables con puntos (1 punto por jefe de zona). fx: hp, startBlock, firstAtk, gold, hand, energy, heal, potion
const sk = (id, cost, fx, es, en, des, den, req) => ({ id, cost, fx, req, name:{es,en}, desc:{es:des,en:den} });

export const SKILLS = {
  corina: [
    sk("c-vigor",1,{hp:10},"Vigor de la Rosa","Rose Vigor","+10 de vida máxima.","+10 max health."),
    sk("c-ward",1,{startBlock:5},"Guardia de Pétalos","Petal Guard","Empiezas cada combate con 5 de Bloqueo.","Start each combat with 5 Block."),
    sk("c-greed",1,{gold:0.25},"Dote de Espinas","Thorn Bounty","+25% de oro de los enemigos.","+25% gold from enemies."),
    sk("c-edge",2,{firstAtk:4},"Estocada Inicial","Opening Thrust","Tu primer ataque de cada combate hace +4.","Your first attack each combat deals +4.","c-ward"),
    sk("c-hand",2,{hand:1},"Reflejos Florales","Floral Reflexes","Robas 1 carta más al empezar el combate.","Draw 1 extra card at combat start.","c-vigor"),
    sk("c-mend",2,{heal:5},"Néctar Sanador","Healing Nectar","Tras cada combate recuperas 5 de vida extra.","Recover 5 extra health after each combat.","c-vigor"),
    sk("c-spark",3,{energy:1},"Floración Perfecta","Flourishing Bloom","+1 de energía por turno.","+1 energy per turn.","c-hand"),
  ],
  lysander: [
    sk("ly-vigor",1,{hp:10},"Vigor del Dragón","Dragon Vigor","+10 de vida máxima.","+10 max health."),
    sk("ly-ward",1,{startBlock:6},"Formación de Picas","Pike Formation","Empiezas cada combate con 6 de Bloqueo.","Start each combat with 6 Block."),
    sk("ly-greed",1,{gold:0.25},"Botín de Falange","Phalanx Spoils","+25% de oro de los enemigos.","+25% gold from enemies."),
    sk("ly-edge",2,{firstAtk:5},"Punta de Lanza","Spearhead Strike","Tu primer ataque de cada combate hace +5.","Your first attack each combat deals +5.","ly-ward"),
    sk("ly-hand",2,{hand:1},"Avance Rápido","Rapid Advance","Robas 1 carta más al empezar el combate.","Draw 1 extra card at combat start.","ly-vigor"),
    sk("ly-mend",2,{heal:5},"Curación de Campaña","Field Remedy","Tras cada combate recuperas 5 de vida extra.","Recover 5 extra health after each combat.","ly-vigor"),
    sk("ly-spark",3,{energy:1},"Ímpetu Heroico","Heroic Surge","+1 de energía por turno.","+1 energy per turn.","ly-hand"),
  ],
  faye: [
    sk("f-vigor",1,{hp:10},"Paso Silvestre","Wildwood Stride","+10 de vida máxima.","+10 max health."),
    sk("f-ward",1,{startBlock:5},"Camuflaje Sombrío","Shadow Camouflage","Empiezas cada combate con 5 de Bloqueo.","Start each combat with 5 Block."),
    sk("f-greed",1,{gold:0.25},"Ojo Cazador","Hunter's Eye","+25% de oro de los enemigos.","+25% gold from enemies."),
    sk("f-edge",2,{firstAtk:5},"Flecha Certera","Trueflight Arrow","Tu primer ataque de cada combate hace +5.","Your first attack each combat deals +5.","f-ward"),
    sk("f-hand",2,{hand:1},"Carcaj Espectral","Spectral Quiver","Robas 1 carta más al empezar el combate.","Draw 1 extra card at combat start.","f-vigor"),
    sk("f-mend",2,{heal:5},"Bálsamo de Pino","Pine Balm","Tras cada combate recuperas 5 de vida extra.","Recover 5 extra health after each combat.","f-vigor"),
    sk("f-spark",3,{energy:1},"Tiro Fantasma","Phantom Draw","+1 de energía por turno.","+1 energy per turn.","f-hand"),
  ],
  valerius: [
    sk("val-vigor",1,{hp:12},"Armadura Penitente","Penitent Plate","+12 de vida máxima.","+12 max health."),
    sk("val-ward",1,{startBlock:6},"Baluarte Sagrado","Sacred Bulwark","Empiezas cada combate con 6 de Bloqueo.","Start each combat with 6 Block."),
    sk("val-greed",1,{gold:0.25},"Diezmo Expiatorio","Expiatory Tithe","+25% de oro de los enemigos.","+25% gold from enemies."),
    sk("val-edge",2,{firstAtk:5},"Hendedura Justiciera","Righteous Cleave","Tu primer ataque de cada combate hace +5.","Your first attack each combat deals +5.","val-ward"),
    sk("val-hand",2,{hand:1},"Guardia Inquisitorial","Inquisitor's Vigil","Robas 1 carta más al empezar el combate.","Draw 1 extra card at combat start.","val-vigor"),
    sk("val-mend",2,{heal:6},"Fe Restauradora","Restoring Faith","Tras cada combate recuperas 6 de vida extra.","Recover 6 extra health after each combat.","val-vigor"),
    sk("val-spark",3,{energy:1},"Fervor Eterno","Eternal Fervor","+1 de energía por turno.","+1 energy per turn.","val-hand"),
  ],
  elora: [
    sk("el-vigor",1,{hp:12},"Raíces Profundas","Deep Roots","+12 de vida máxima.","+12 max health."),
    sk("el-ward",1,{startBlock:6},"Espinas Protectoras","Protective Thorns","Empiezas cada combate con 6 de Bloqueo.","Start each combat with 6 Block."),
    sk("el-greed",1,{gold:0.25},"Cosecha Fúngica","Fungal Harvest","+25% de oro de los enemigos.","+25% gold from enemies."),
    sk("el-edge",2,{firstAtk:4},"Zarzal Venenoso","Venomous Briar","Tu primer ataque de cada combate hace +4.","Your first attack each combat deals +4.","el-ward"),
    sk("el-hand",2,{hand:1},"Mente Silvana","Sylph Mind","Robas 1 carta más al empezar el combate.","Draw 1 extra card at combat start.","el-vigor"),
    sk("el-mend",2,{heal:6},"Savia Nutricia","Nutrient Sap","Tras cada combate recuperas 6 de vida extra.","Recover 6 extra health after each combat.","el-vigor"),
    sk("el-spark",3,{energy:1},"Despertar del Bosque","Forest Awakening","+1 de energía por turno.","+1 energy per turn.","el-hand"),
  ],
  carmilla: [
    sk("car-vigor",1,{hp:10},"Inmortalidad Carmesí","Crimson Immortality","+10 de vida máxima.","+10 max health."),
    sk("car-ward",1,{startBlock:5},"Velo del Sepulcro","Grave Veil","Empiezas cada combate con 5 de Bloqueo.","Start each combat with 5 Block."),
    sk("car-greed",1,{gold:0.30},"Herencia de Sangre","Blood Heritage","+30% de oro de los enemigos.","+30% gold from enemies."),
    sk("car-edge",2,{firstAtk:5},"Colmillo Voraz","Voracious Fang","Tu primer ataque de cada combate hace +5.","Your first attack each combat deals +5.","car-ward"),
    sk("car-hand",2,{hand:1},"Reflejos Aristocráticos","Noble Reflexes","Robas 1 carta más al empezar el combate.","Draw 1 extra card at combat start.","car-vigor"),
    sk("car-mend",2,{heal:6},"Festín Nocturno","Night Feast","Tras cada combate recuperas 6 de vida extra.","Recover 6 extra health after each combat.","car-vigor"),
    sk("car-spark",3,{energy:1},"Éxtasis Sanguíneo","Blood Ecstasy","+1 de energía por turno.","+1 energy per turn.","car-hand"),
  ],
  kaelen: [
    sk("ka-vigor",1,{hp:10},"Vigor Lírico","Lyrical Vigor","+10 de vida máxima.","+10 max health."),
    sk("ka-ward",1,{startBlock:5},"Resonancia de Acero","Steel Resonance","Empiezas cada combate con 5 de Bloqueo.","Start each combat with 5 Block."),
    sk("ka-greed",1,{gold:0.25},"Mecenazgo Macabro","Macabre Patronage","+25% de oro de los enemigos.","+25% gold from enemies."),
    sk("ka-edge",2,{firstAtk:4},"Apertura Disonante","Discordant Opening","Tu primer ataque de cada combate hace +4.","Your first attack each combat deals +4.","ka-ward"),
    sk("ka-hand",2,{hand:1},"Mano Virtuosa","Virtuoso Hand","Robas 1 carta más al empezar el combate.","Draw 1 extra card at combat start.","ka-vigor"),
    sk("ka-mend",2,{heal:5},"Balada Balsámica","Soothing Ballad","Tras cada combate recuperas 5 de vida extra.","Recover 5 extra health after each combat.","ka-vigor"),
    sk("ka-spark",3,{energy:1},"Sinfonía del Réquiem","Requiem Symphony","+1 de energía por turno.","+1 energy per turn.","ka-hand"),
  ],
  malakor: [
    sk("ma-vigor",1,{hp:10},"Cuerpo Rúnico","Runic Flesh","+10 de vida máxima.","+10 max health."),
    sk("ma-ward",1,{startBlock:6},"Egida del Vacío","Void Aegis","Empiezas cada combate con 6 de Bloqueo.","Start each combat with 6 Block."),
    sk("ma-greed",1,{gold:0.25},"Tributo de Almas","Soul Tribute","+25% de oro de los enemigos.","+25% gold from enemies."),
    sk("ma-edge",2,{firstAtk:5},"Rayo Abisal","Abyssal Beam","Tu primer ataque de cada combate hace +5.","Your first attack each combat deals +5.","ma-ward"),
    sk("ma-hand",2,{hand:1},"Pacto del Ojo","Pact of the Eye","Robas 1 carta más al empezar el combate.","Draw 1 extra card at combat start.","ma-vigor"),
    sk("ma-mend",2,{heal:5},"Drenaje Espectral","Spectral Drain","Tras cada combate recuperas 5 de vida extra.","Recover 5 extra health after each combat.","ma-vigor"),
    sk("ma-spark",3,{energy:1},"Singularidad Arcana","Arcane Singularity","+1 de energía por turno.","+1 energy per turn.","ma-hand"),
  ],
  roland: [
    sk("ro-vigor",1,{hp:12},"Vigor Templario","Templar Vigor","+12 de vida máxima.","+12 max health."),
    sk("ro-ward",1,{startBlock:6},"Guardia de la Cruz","Guard of the Cross","Empiezas cada combate con 6 de Bloqueo.","Start each combat with 6 Block."),
    sk("ro-greed",1,{gold:0.25},"Botín de la Cruzada","Crusade Spoils","+25% de oro de los enemigos.","+25% gold from enemies."),
    sk("ro-edge",2,{firstAtk:5},"Golpe Purificador","Purifying Blow","Tu primer ataque de cada combate hace +5.","Your first attack each combat deals +5.","ro-ward"),
    sk("ro-hand",2,{hand:1},"Determinación Férrea","Iron Resolve","Robas 1 carta más al empezar el combate.","Draw 1 extra card at combat start.","ro-vigor"),
    sk("ro-mend",2,{heal:6},"Bálsamo del Penitente","Penitent Balm","Tras cada combate recuperas 6 de vida extra.","Recover 6 extra health after each combat.","ro-vigor"),
    sk("ro-spark",3,{energy:1},"Celo Sagrado","Sacred Zeal","+1 de energía por turno.","+1 energy per turn.","ro-hand"),
  ],
};

export const RELICS = {
  "iron-crown": { id:"iron-crown", image:"/assets/relics/iron-crown.webp", fx:{hp:8}, name:{es:"Corona de Hierro",en:"Iron Crown",eu:"Burdinazko koroa"}, desc:{es:"+8 de vida máxima.",en:"+8 max health.",eu:"+8 gehienezko bizitza."} },
  "ash-locket": { id:"ash-locket", image:"/assets/relics/ash-locket.webp", fx:{hand:1}, name:{es:"Relicario de Ceniza",en:"Ash Locket",eu:"Errauts-medailoia"}, desc:{es:"Robas 1 carta más al empezar el combate.",en:"Draw 1 extra card at combat start.",eu:"Borrokaren hasieran karta 1 gehiago hartzen duzu."} },
  "ember-shard": { id:"ember-shard", image:"/assets/relics/ember-shard.webp", fx:{firstAtk:3}, name:{es:"Esquirla de Ascua",en:"Ember Shard",eu:"Txingar-zatia"}, desc:{es:"Tu primer ataque de cada combate hace +3.",en:"Your first attack each combat deals +3.",eu:"Borrokako zure lehen erasoak +3 egiten du."} },
  "blood-chalice": { id:"blood-chalice", image:"/assets/relics/blood-chalice.webp", fx:{energy:1}, name:{es:"Cáliz de Sangre",en:"Blood Chalice",eu:"Odol-kaliza"}, desc:{es:"+1 de energía por turno.",en:"+1 energy per turn.",eu:"+1 energia txandako."} },
  "obsidian-mirror": { id:"obsidian-mirror", image:"/assets/relics/obsidian-mirror.webp", fx:{startBlock:6}, name:{es:"Espejo de Obsidiana",en:"Obsidian Mirror",eu:"Obsidiana-ispilua"}, desc:{es:"Empiezas cada combate con 6 de Bloqueo.",en:"Start each combat with 6 Block.",eu:"Borroka bakoitza 6 Babesekin hasten duzu."} },
  "grave-candle": { id:"grave-candle", image:"/assets/relics/grave-candle.webp", fx:{heal:4}, name:{es:"Vela del Sepulcro",en:"Sepulcher Candle",eu:"Hilobi-kandela"}, desc:{es:"Tras cada combate recuperas 4 de vida extra.",en:"Recover 4 extra health after each combat.",eu:"Borroka bakoitzaren ondoren 4 bizitza gehiago berreskuratzen dituzu."} },
  "golden-urn": { id:"golden-urn", image:"/assets/relics/golden-urn.webp", fx:{gold:0.35}, name:{es:"Urna Dorada",en:"Golden Urn",eu:"Urrezko hautestontzia"}, desc:{es:"+35% de oro de los enemigos.",en:"+35% gold from enemies.",eu:"+%35 urre etsaietatik."} },
};

ART.push(
  {id:"ash-locket",group:"relics",path:"/assets/relics/ash-locket.webp",name:{es:"Relicario de Ceniza",en:"Ash Locket"}},
  {id:"ember-shard",group:"relics",path:"/assets/relics/ember-shard.webp",name:{es:"Esquirla de Ascua",en:"Ember Shard"}},
  {id:"blood-chalice",group:"relics",path:"/assets/relics/blood-chalice.webp",name:{es:"Cáliz de Sangre",en:"Blood Chalice"}},
  {id:"obsidian-mirror",group:"relics",path:"/assets/relics/obsidian-mirror.webp",name:{es:"Espejo de Obsidiana",en:"Obsidian Mirror"}},
  {id:"grave-candle",group:"relics",path:"/assets/relics/grave-candle.webp",name:{es:"Vela del Sepulcro",en:"Sepulcher Candle"}},
  {id:"golden-urn",group:"relics",path:"/assets/relics/golden-urn.webp",name:{es:"Urna Dorada",en:"Golden Urn"}}
);

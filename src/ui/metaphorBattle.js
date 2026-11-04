// Gravecrown Tactical Battle Arena
// Based on turn-based card battler layout (Hero Left, Enemy Right, Cards in Hand at Bottom).
// Features: Atlus Critical Eye Cut-In, Sprite Lunge Attack, Enemy Intent above head, Action Points.
// Zero emojis: 100% SVG vector emblems.

import { renderCard } from "./card.js";

const SVGS = {
  sword: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" class="b-svg"><path d="M14 4h6v6L11 19l-3-3z"/><path d="M6 15l-2 5 5-2"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" class="b-svg"><path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6z"/></svg>`,
  flame: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" class="b-svg"><path d="M12 3c1 4 5 6 5 11a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3-1-4 0-7 1-10z"/></svg>`,
  energy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="b-svg"><circle cx="12" cy="12" r="9"/><polygon points="12,6 15,12 12,18 9,12" fill="currentColor"/></svg>`
};

export function createMetaphorBattleUI(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Battle State
  let heroHp = 58;
  const heroMaxHp = 70;
  let heroBlock = 10;
  let enemyHp = 86;
  const enemyMaxHp = 110;
  let currentAP = 3;
  const maxAP = 3;

  const handCards = [
    {
      id: "ash-slash",
      name: "Tajo Carbonizado",
      type: "attack",
      cost: 1,
      dmg: 8,
      description: "Inflige 8 de daño. +4 si el enemigo está Quemado.",
      dmgType: "fire"
    },
    {
      id: "iron-guard",
      name: "Guardia de Hierro",
      type: "defense",
      cost: 1,
      block: 10,
      description: "Obtienes 10 de Bloqueo defensivo."
    },
    {
      id: "dying-fire",
      name: "Fuego Mortecino",
      type: "magic",
      cost: 2,
      dmg: 14,
      description: "Inflige 14 de daño y aplica Quemado.",
      exhaust: true,
      dmgType: "fire"
    },
    {
      id: "parry",
      name: "Parada",
      type: "reaction",
      cost: 0,
      description: "Solo ante un ataque enemigo: reduce el daño a 0."
    }
  ];

  function render() {
    container.innerHTML = `
      <div class="battle-stage" id="battleStage">
        <!-- Atlus Critical Eye Cut-In Overlay -->
        <div class="critical-cutin-layer" id="criticalCutinLayer" aria-hidden="true">
          <div class="cutin-banner">
            <span class="cutin-slash-kana">斩!</span>
            <!-- Intense Knight Eyes Vector Graphic -->
            <svg class="cutin-eyes-art" viewBox="0 0 800 140" fill="none">
              <!-- Dark Hair Strands framing face -->
              <path d="M0 0 L180 0 L120 70 L200 40 L160 120 L100 80 L60 140 L0 140 Z" fill="#0A0909"/>
              <path d="M800 0 L620 0 L680 70 L600 40 L640 120 L700 80 L740 140 L800 140 Z" fill="#0A0909"/>
              <path d="M260 0 L320 65 L360 0 Z" fill="#0A0909"/>
              <path d="M540 0 L480 65 L440 0 Z" fill="#0A0909"/>

              <!-- Left Eye (Fierce chiaroscuro) -->
              <path d="M220 75 Q280 48 350 72 Q290 98 220 75 Z" fill="#F0EAE1" stroke="#0A0909" stroke-width="4"/>
              <circle cx="285" cy="72" r="14" fill="#1C1414" stroke="#D91B24" stroke-width="3"/>
              <circle cx="288" cy="70" r="5" fill="#FFF"/>
              <!-- Fierce Brow Lines -->
              <path d="M200 52 Q280 32 360 62" stroke="#0A0909" stroke-width="6" stroke-linecap="round"/>
              <path d="M240 60 L270 52 M310 52 L340 60" stroke="#0A0909" stroke-width="2.5"/>

              <!-- Right Eye -->
              <path d="M580 75 Q520 48 450 72 Q510 98 580 75 Z" fill="#F0EAE1" stroke="#0A0909" stroke-width="4"/>
              <circle cx="515" cy="72" r="14" fill="#1C1414" stroke="#D91B24" stroke-width="3"/>
              <circle cx="512" cy="70" r="5" fill="#FFF"/>
              <!-- Right Brow Lines -->
              <path d="M600 52 Q520 32 440 62" stroke="#0A0909" stroke-width="6" stroke-linecap="round"/>
              <path d="M560 60 L530 52 M490 52 L460 60" stroke="#0A0909" stroke-width="2.5"/>

              <!-- Bridge of Nose Shadow -->
              <path d="M380 70 L400 95 L420 70 Z" fill="#0A0909" opacity="0.4"/>
            </svg>
            <span class="cutin-label">CRITICAL STRIKE // ASALTO CRÍTICO</span>
          </div>
        </div>

        <!-- BATTLEFIELD UPPER ARENA (Hero Left, Enemy Right) -->
        <div class="battlefield-arena">
          <!-- Background Atmospheric Perspective Ground -->
          <div class="arena-floor" aria-hidden="true"></div>

          <!-- HERO (LEFT SIDE) -->
          <div class="unit-fighter unit-hero" id="heroFighter">
            <!-- Hero Status Header -->
            <div class="fighter-stats">
              <div class="fighter-title-row">
                <span class="fighter-name">REY VAEL</span>
                <span class="fighter-tag">CORRUPCIÓN: 3/10</span>
              </div>
              <div class="fighter-hp-track">
                <div class="fighter-hp-fill hero-hp-color" style="width: ${(heroHp / heroMaxHp) * 100}%;">
                  <span class="fighter-hp-text">${heroHp} / ${heroMaxHp} HP</span>
                </div>
              </div>
              <div class="hero-shields-row">
                <span class="block-badge">${SVGS.shield} ${heroBlock} BLOQUEO</span>
              </div>
            </div>

            <!-- Hero Sprite Graphic (Lunge Animated) -->
            <div class="fighter-sprite-box" id="heroSprite">
              <svg class="fighter-sprite" viewBox="0 0 200 280" fill="none">
                <!-- Knight Armor with Crimson Cape -->
                <path d="M40 280 L50 140 Q60 80 100 80 Q140 80 150 140 L160 280 Z" fill="#241E1E" stroke="#4D3535" stroke-width="2"/>
                <!-- Cape behind -->
                <path d="M30 140 L20 280 L70 280 L55 140 Z" fill="#8A151C"/>
                <path d="M145 140 L160 280 L180 280 L170 140 Z" fill="#8A151C"/>
                <!-- Helmet Visor -->
                <path d="M70 70 Q100 30 130 70 Q135 110 100 115 Q65 110 70 70 Z" fill="#3D3333" stroke="#D6A838" stroke-width="2"/>
                <path d="M80 80 L120 80 L115 88 L85 88 Z" fill="#D91B24"/>
                <line x1="100" y1="40" x2="100" y2="75" stroke="#D6A838" stroke-width="2"/>
                <!-- Drawn Sword in Hand -->
                <path d="M150 160 L185 100 L195 105 L155 170 Z" fill="#E8E0CC" stroke="#000" stroke-width="1.5"/>
                <path d="M145 165 L165 175" stroke="#D6A838" stroke-width="4"/>
              </svg>
            </div>
          </div>

          <!-- ENEMY (RIGHT SIDE) -->
          <div class="unit-fighter unit-enemy" id="enemyFighter">
            <!-- Enemy Intent directly above head (as in reference Image 1) -->
            <div class="enemy-intent-badge" id="enemyIntentBadge">
              <span class="intent-ico">${SVGS.sword}</span>
              <span class="intent-dmg">18</span>
              <span class="intent-label">ASALTO</span>
            </div>

            <!-- Enemy Status Header -->
            <div class="fighter-stats enemy-stats">
              <div class="fighter-title-row">
                <span class="fighter-name">TIRANO DE CENIZA</span>
                <span class="fighter-tag">JEFE I</span>
              </div>
              <div class="fighter-hp-track">
                <div class="fighter-hp-fill enemy-hp-color" style="width: ${(enemyHp / enemyMaxHp) * 100}%;">
                  <span class="fighter-hp-text">${enemyHp} / ${enemyMaxHp} HP</span>
                </div>
              </div>
              <div class="weakness-strip">
                <span class="w-chip w-weak">[FIS: DÉBIL]</span>
                <span class="w-chip w-resist">[IGN: RESISTE]</span>
              </div>
            </div>

            <!-- Enemy Sprite Graphic -->
            <div class="fighter-sprite-box" id="enemySprite">
              <svg class="fighter-sprite" viewBox="0 0 220 280" fill="none">
                <!-- Massive Ash Tyrant Silhouette -->
                <path d="M50 280 L40 130 Q50 60 110 50 Q170 60 180 130 L170 280 Z" fill="#1C1012" stroke="#5E1418" stroke-width="2"/>
                <!-- Spiked Pauldrons -->
                <path d="M30 110 L15 80 L50 95 Z" fill="#4A181C" stroke="#D91B24" stroke-width="1.5"/>
                <path d="M190 110 L205 80 L170 95 Z" fill="#4A181C" stroke="#D91B24" stroke-width="1.5"/>
                <!-- Glowing Fiery Skull Head -->
                <path d="M80 65 Q110 25 140 65 Q145 105 110 110 Q75 105 80 65 Z" fill="#0A0909" stroke="#8A151C" stroke-width="2"/>
                <circle cx="95" cy="72" r="5" fill="#FF3B47"/>
                <circle cx="125" cy="72" r="5" fill="#FF3B47"/>
                <!-- Heavy War Axe -->
                <path d="M25 180 L25 50" stroke="#4A3535" stroke-width="6"/>
                <path d="M25 60 Q-15 40 10 20 Q35 40 25 70 Z" fill="#D91B24" stroke="#000" stroke-width="1.5"/>
              </svg>
            </div>

            <!-- Floating Damage Text Container -->
            <div class="floating-dmg-anchor" id="floatingDmgTarget"></div>
          </div>
        </div>

        <!-- BATTLE BOTTOM AREA: Cards in Hand + Action Points (Image 1 Layout) -->
        <div class="battle-hand-dock">
          <!-- Left: Action Points Energy Orb -->
          <div class="action-points-cluster">
            <div class="ap-orb-container">
              <div class="ap-orb">
                <span class="ap-num">${currentAP}</span>
                <span class="ap-max">/${maxAP}</span>
              </div>
              <span class="ap-label">PUNTOS ACCIÓN</span>
            </div>
            <!-- Test Action Triggers -->
            <div class="battle-actions-col">
              <button class="btn-wedge" id="testCriticalBtn" type="button" style="border-color:var(--blood); padding:8px 16px; min-height:40px; font-size:0.95rem;">
                ASALTO CRÍTICO (OJOS)
              </button>
              <button class="btn-wedge" id="resetBattleBtn" type="button" style="padding:6px 14px; min-height:36px; font-size:0.85rem;">
                REINICIAR VIDA
              </button>
            </div>
          </div>

          <!-- Center: Playable Cards in Hand -->
          <div class="cards-hand-row" id="battleCardsHand">
            <!-- Cards rendered below -->
          </div>

          <!-- Right: End Turn Button -->
          <div class="end-turn-cluster">
            <button class="btn-wedge is-playable" id="endTurnBtn" type="button" style="min-height:56px; padding:12px 24px;">
              TERMINAR TURNO
            </button>
          </div>
        </div>
      </div>
    `;

    // Render interactive hand cards
    const handContainer = container.querySelector("#battleCardsHand");
    handCards.forEach((cardData) => {
      const cardEl = renderCard(cardData, {
        name: cardData.name,
        desc: cardData.description,
        onClick: () => executeCardAction(cardData)
      });
      handContainer.appendChild(cardEl);
    });

    // Action Triggers
    const critBtn = container.querySelector("#testCriticalBtn");
    critBtn.addEventListener("click", () => {
      triggerCriticalLunge(18, true);
    });

    const resetBtn = container.querySelector("#resetBattleBtn");
    resetBtn.addEventListener("click", () => {
      enemyHp = enemyMaxHp;
      heroHp = heroMaxHp;
      currentAP = maxAP;
      render();
    });

    const endTurnBtn = container.querySelector("#endTurnBtn");
    endTurnBtn.addEventListener("click", () => {
      currentAP = maxAP;
      // Enemy attack lunge animation back at hero
      triggerEnemyAttack();
    });
  }

  // Execute card action when player clicks card
  function executeCardAction(card) {
    if (currentAP < card.cost) {
      alert("¡No tienes suficientes Puntos de Acción!");
      return;
    }
    currentAP -= card.cost;

    if (card.type === "attack" || card.type === "magic") {
      const isCrit = card.id === "dying-fire"; // Dying fire triggers cut-in!
      triggerCriticalLunge(card.dmg || 8, isCrit);
    } else if (card.type === "defense") {
      heroBlock += card.block || 10;
      spawnFloatingText(container.querySelector("#heroFighter"), `+${card.block} BLOQUEO`, "text-block");
      render();
    } else {
      spawnFloatingText(container.querySelector("#heroFighter"), "PARADA LISTA", "text-parry");
      render();
    }
  }

  // Critical Eye Cut-In + Sprite Lunge Animation
  function triggerCriticalLunge(damage, isCritical) {
    const cutin = container.querySelector("#criticalCutinLayer");
    const heroSprite = container.querySelector("#heroSprite");
    const enemySprite = container.querySelector("#enemySprite");
    const enemyFighter = container.querySelector("#enemyFighter");

    const doLunge = () => {
      // 1. Hero lunges forward (sprite animation)
      heroSprite.classList.add("hero-lunge-attack");

      setTimeout(() => {
        // 2. Enemy shakes & flashes on impact
        enemySprite.classList.add("enemy-impact-hit");
        enemyHp = Math.max(0, enemyHp - damage);

        // 3. Floating Damage Number
        spawnFloatingText(enemyFighter, `-${damage} ${isCritical ? "CRÍTICO!" : ""}`, isCritical ? "text-crit" : "text-dmg");

        setTimeout(() => {
          heroSprite.classList.remove("hero-lunge-attack");
          enemySprite.classList.remove("enemy-impact-hit");
          render();
        }, 320);
      }, 180);
    };

    if (isCritical) {
      // Trigger Atlus Eye Cut-in first!
      cutin.classList.add("is-active");
      setTimeout(() => {
        cutin.classList.remove("is-active");
        doLunge();
      }, 1200);
    } else {
      doLunge();
    }
  }

  // Enemy counter-attack animation
  function triggerEnemyAttack() {
    const enemySprite = container.querySelector("#enemySprite");
    const heroSprite = container.querySelector("#heroSprite");
    const heroFighter = container.querySelector("#heroFighter");

    enemySprite.classList.add("enemy-lunge-attack");
    setTimeout(() => {
      heroSprite.classList.add("hero-impact-hit");
      const unblockedDmg = Math.max(0, 18 - heroBlock);
      heroBlock = Math.max(0, heroBlock - 18);
      heroHp = Math.max(0, heroHp - unblockedDmg);

      spawnFloatingText(heroFighter, `-18 DAÑO`, "text-dmg");
      setTimeout(() => {
        enemySprite.classList.remove("enemy-lunge-attack");
        heroSprite.classList.remove("hero-impact-hit");
        render();
      }, 320);
    }, 180);
  }

  // Floating text utility
  function spawnFloatingText(targetEl, text, className) {
    if (!targetEl) return;
    const floater = document.createElement("div");
    floater.className = `floating-combat-text ${className}`;
    floater.textContent = text;
    targetEl.appendChild(floater);
    setTimeout(() => floater.remove(), 950);
  }

  render();
}

# Gravecrown (prototipo)
Roguelike de combate centrado en un comandante. HTML + CSS + JS (Vite solo como herramienta).

    npm install
    npm run dev      # desarrollo
    npm run build    # build estático en dist/

## Imágenes (las pones tú)
Colócalas en `public/assets/` y las rutas se configuran en `src/data.js` (campo `image`). Sin espacios ni tildes.
Formato recomendado: WebP (PNG si hay transparencia). Proporción 5:7, misma resolución (p. ej. 750×1050).

| Carta | Ruta |
|---|---|
| Tajo Carbonizado | public/assets/cards/ash/ash-slash.webp |
| Guardia de Hierro | public/assets/cards/ash/ember-guard.webp |
| Paso entre Cenizas | public/assets/cards/ash/ash-step.webp |
| Fuego Mortecino | public/assets/cards/ash/dying-fire.webp |
| Parada | public/assets/cards/ash/parry.webp |
| Corona Rota | public/assets/cards/neutral/broken-crown.webp |
| Vael / Morra | public/assets/commanders/vael.webp, morra.webp |
| Enemigos | public/assets/enemies/ash-raider.webp, crypt-specter.webp |

Para asociar una imagen a una carta, edita `image` de esa carta en `src/data.js`. Si falta, se muestra una tarjeta de error
(nombre, "Imagen no encontrada", ruta e id) y el juego no se rompe. Si un retrato falta, se ve el nombre sobre fondo oscuro.

## Mejoras y novedades añadidas
- **Integración visual Metaphor**: Se utiliza el componente de cartas elaborado (`card.js`) con sello de cera de coste, marco de arte 4:3, etiquetas, silueta de fallback vectorial y zoom táctil/clic.
- **Menú principal cinético (`metaphorCascade.js`)**: Menú interactivo en cascada con selección de comandantes, siluetas vectoriales y animación inspirada en Metaphor: ReFantazio.
- **Autoguardado y reanudación de expedición**: El progreso de la run se guarda automáticamente en `localStorage`. Si cierras o recargas el navegador, puedes reanudar la expedición desde el menú principal.
- **Visualizador de mazo completo**: Botón "Ver mazo" en el mapa de expedición y en combate para consultar en cualquier momento la composición de tu mazo con conteo de copias.
- **Contador de mazo y descarte en combate**: Indicador permanente en el panel lateral durante la batalla.
- **Nuevas cartas**:
  - *Golpe de Pira* (Ataque, Ceniza): 16 de daño, 3 de Quemado, 1 de Ruina.
  - *Escudo de Cenizas* (Defensa, Ceniza): 16 de Bloqueo.
  - *Sifón de Almas* (Magia, Morra): 7 de daño, recuperas 4 de vida y ganas 1 Recuerdo.
  - *Muro del Osario* (Defensa, Morra): 18 de Bloqueo y ganas 2 Recuerdos.
- **Nuevas reliquias**:
  - *Cáliz de Sangre*: +1 de energía por turno.
  - *Espejo de Obsidiana*: Empiezas cada combate con 6 de Bloqueo.
  - *Vela del Sepulcro*: Recuperas 4 de vida adicional tras cada victoria.
  - *Urna Dorada*: +35% de oro obtenido de los enemigos.
- **Nuevos enemigos distribuidos por zonas**:
  - *Sabueso de Ceniza* (Campos de Ceniza): Ataque rápido y agresivo.
  - *Guardián de Tumba* (Cripta / Ciudadela): Alta defensa y contraataques pesados.
  - *Cultista de la Ruina* (Cripta / Ciudadela): Ataque con aturdimiento y acumulación de Ruina.
- **Efecto curación en cartas (`heal`)**: Soporte nativo para que cartas de comandante puedan restaurar vida en combate.
- **Soporte de ejecución**: Compatible tanto con Node (`npm run build`) como con Deno (`deno run -A npm:vite build`).

## Cómo añadir una carta
1. Copia la imagen (WebP, proporción 5:7, sin espacios ni tildes) a `public/assets/cards/<carpeta>/mi-carta.webp`.
   Si la carpeta es `ash` va a la pestaña Ceniza de la colección; cualquier otra, a Neutral.
2. En `src/data.js`, dentro de `CARDS`, añade:
   `"mi-carta": { id:"mi-carta", name:"Mi Carta", image:"/assets/cards/ash/mi-carta.webp", type:"attack", cost:1, description:"Inflige 6 de daño.", effects:[{a:"damage",n:6}] }`
   Efectos disponibles: `damage` (n, burnBonus), `block`, `draw`, `burn`, `corruption`, `hurt`. Para una reacción añade `reaction:true`.
3. En `src/i18n.js`, objeto `EN`, añade la traducción: `"mi-carta":["My Card","Deal 6 damage."]`. Los tipos nuevos van en `t_...`.
4. Para que salga en el juego: añade el id a `deck` del comandante (mazo inicial) y/o a `REWARD_POOL` (recompensas).
5. Un efecto nuevo: añade su `if (f.a === "...")` en `play()` (src/main.js) y su texto `ex_...` en i18n.js (es y en).

## Objetos
Se definen en `ITEMS` (src/data.js) con sus efectos (`heal`, `block`, `damage`, `burn`) y el inventario inicial (`start`).
Los textos van en `IT` (src/i18n.js). Se usan sin gastar energía en cualquier momento del combate; en el mapa, solo los de curación.

## Páginas legales
Textos en `LEGAL` (src/i18n.js). Sustituye los [CORCHETES] por tus datos y revísalos con un profesional antes de publicar.

## Animaciones
Todo el combate se redibuja con `render()`, así que las animaciones se ponen en cola y se aplican justo después de dibujar:
`fx("#cmdr","lunge-r")` añade una clase CSS temporal, y `flash("#enemy","-8")` añade clase `hit` + número flotante.
Para una animación nueva: 1) crea `@keyframes` y una clase en `src/style.css`; 2) llama a `fx(selector, "tu-clase")` donde ocurra la acción
(en `play()`, `endTurn()` o `useItem()`). Para animar según la carta, añade un campo `anim:"slash"` en la carta y usa `fx("#cmdr", card.anim)`.
Para sprites/sprite sheets usa `background-position` con `steps()` en el `@keyframes`; para animaciones complejas, `element.animate()` (Web Animations API).

## Eventos, oro y cuenta
- Cada enemigo suelta oro (`gold:[min,max]` en `ENEMIES`). Se gasta en el mercader.
- Se cuentan los turnos jugados; cada 8-12 turnos aparece al azar un mercader, un lugar de descanso o el miniboss (`fearsome`).
- Sección Arte: lista `ART` en `src/data.js`; pon la imagen en la ruta indicada y aparece sola.
- Cuenta: nombre y avatar se guardan en localStorage (`account`). El PvP requerirá un servidor.

## Zonas, fondos y música
Definidas en `ZONES` (src/data.js): cada zona tiene `nodes` combates y un jefe (`boss`). Al vencer al jefe pasas a la siguiente zona (+20 vida),
cambian el fondo y la música, y los enemigos escalan un 40% por zona. Para añadir una zona: nueva entrada en `ZONES`, el jefe en `ENEMIES` y su nombre `e_<id>` en `src/i18n.js`.
Archivos (los pones tú, usa música con licencia): `public/assets/backgrounds/{ashfields,crypt,citadel}.webp` y
`public/assets/music/{menu,ashfields,ashfields-boss,crypt,crypt-boss,citadel,citadel-boss}.mp3`. Si falta un fondo se usa un degradado del color de la zona; si falta música no suena.
El navegador solo permite sonido tras el primer clic. El botón 🔊/🔇 de la barra silencia y se recuerda.

## Guardar cartas y habilidades
- En un lugar de descanso puedes **terminar la expedición**: las cartas conseguidas en la run se guardan (`profile.vault`) y empezarás las siguientes expediciones con ellas.
  Si sigues y mueres, pierdes las cartas conseguidas en esa run; conservas el mazo base y lo ya guardado. Al completar la última zona también se guardan.
- Cada jefe de zona da **1 punto de habilidad** (se conserva aunque mueras). Pestaña Habilidades: cada personaje tiene su árbol (`SKILLS` en src/data.js).
  Efectos disponibles en `fx`: `hp`, `startBlock`, `firstAtk`, `gold`, `hand`, `energy`, `heal`, `potion`. Se aplican desde la siguiente expedición.
- Todo se guarda en localStorage (`profile`).

## Información (lore)
Textos en `src/lore.js` (mundo, personajes, bestiario, zonas; en español e inglés). Las imágenes se reutilizan de retratos y fondos.
Las criaturas del bestiario aparecen como "???" hasta que te enfrentas a ellas (se guarda en localStorage `seenEnemies`).

## Idiomas
Español (es), English (en) y Euskara (eu). El selector está en la barra superior; si el navegador está en euskera o inglés se elige solo la primera vez.
Para añadir un idioma: una entrada en `S` (src/i18n.js), su traducción de cartas (`EN`/`EU`), tutorial (`TUT_*`), objetos (`IT`), textos legales (`LEGAL`),
y los campos de habilidades, arte, zonas y lore (`SK_EU`, `ART_EU`, `ZONE_EU`, `LORE_EU` al final de i18n.js). Si falta algo, se usa el español.
Al añadir cartas nuevas, añade también su traducción en `EN` y `EU`.

## Avatar por capas (estilo Picrew)
Sin archivos, el creador usa un avatar SVG integrado (piel, peinado, color, ojos, armadura, accesorio, aleatorio).
Para el modo capas: crea `public/assets/avatar/manifest.json` y las piezas `public/assets/avatar/<capa>/<n>.png` (todas del mismo tamaño, transparentes; 0 = sin pieza):

    {"layers":[
      {"id":"base","name":{"es":"Cuerpo","en":"Body","eu":"Gorputza"},"count":4,"required":true},
      {"id":"hair","name":{"es":"Pelo","en":"Hair","eu":"Ilea"},"count":8},
      {"id":"outfit","name":{"es":"Ropa","en":"Outfit","eu":"Arropa"},"count":6},
      {"id":"acc","name":{"es":"Accesorio","en":"Accessory","eu":"Osagarria"},"count":5}]}

El orden del array es el orden de las capas (la primera queda detrás). También puedes **importar una imagen** (por ejemplo exportada de Picrew). Ojo: respeta la licencia de cada creador de Picrew.
El avatar se usa como retrato del comandante en combate (se puede desactivar en Cuenta), en la cabecera y en la cuenta.

## Mecánicas añadidas
- Morra es jugable: Recuerdos (se ganan con sus cartas y al recibir daño); habilidad "Recordar" (2) y, con 7, sobrevive una vez a un golpe mortal.
- Habilidad activa por comandante (botón en el panel derecho): Vael "Sangrar la Corona" (2 Corrupción → +1 energía).
- Estados: Herido (<50%), Ruina (acumulable), En postura (carta Juramento del Último Caballero), Corona Rota (Corrupción 10), Aturdido (el Espectro aturde: no puedes reaccionar).
- Reliquias (`RELICS` en data.js): las da el miniboss. Pulsación larga en táctil = ver carta.
- Los emojis se sustituyen por pictogramas SVG (`src/icons.js`); para añadir uno, define su dibujo en `P` y su emoji en `M`.
- Pendiente: varios enemigos a la vez y PvP (requiere servidor).

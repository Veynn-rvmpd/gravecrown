# Gravecrown: The Broken Realm

> **Roguelike táctico de construcción de mazos (Deckbuilder) con estética grimdark inspirada en *Metaphor: ReFantazio* y *Darkest Dungeon*.**  
> Desarrollado en JavaScript moderno (ES Modules), HTML5, CSS semántico con tipografía iluminada y Vite.

---

## Descripción del Juego

En las tierras calcinadas de **Aethelgard**, la *Corona de Ceniza* —un antiguo artefacto que mantenía a los muertos en su reposo eterno— fue destrozada por la codicia del último Soberano. Tras siete años de lluvia incesante de polvo gris y criptas abiertas, los muertos se alzan en busca de calor vital.

Toma el mando de uno de los **9 Comandantes Desterrados** y lidera una expedición a través de los **Campos de Ceniza**, las profundidades de la **Cripta Olvidada** y las ruinas de la **Ciudadela Calcinada** para reclamar los fragmentos de la corona.

---

##  Características Principales

###  9 Comandantes con Mecánicas Propias
1. **Corina, la Rosa Desterrada**: Esgrima ágil con ropera y mecánica de **Pétalos Carmesí**. Con cada estocada acumula pétalos que potencian remates mortales como *Loto Sangriento* o la habilidad *Floración Carmesí*.
2. **Lysander, el León de la Guardia**: Tácticas de hoplita con escudo pesado y pica de guerra. Habilidad *Guardia Inquebrantable* y acumulación de **Falange**.
3. **Faye, la Cazadora Espectral**: Arquería a distancia y maniobras de viento. Dispara flechas de energía espiritual y activa *Paso del Viento* para eludir contragolpes.
4. **Valerius, el Inquisidor Quebrado**: Alabardero fanático guiado por la expiación y el celo implacable. Transforma el sufrimiento en poder sagrado.
5. **Elora, la Druida Marchita**: Manipulación de espinas venenosas, esporas y corrupción botánica (*Abrazo de Espinas*).
6. **Carmilla, la Dama Carmesí**: Vástago de la noche con mecánicas de **Sangrado** y **Festín Vampírico** que absorben la vitalidad del rival.
7. **Kaelen, el Bardo del Réquiem**: Melodías fúnebres y acordes disonantes que alternan entre soporte táctico, aturdimientos y sonatas sónicas.
8. **Malakor, el Brujo del Abismo**: Pactos sombríos, fuego fatuo y manipulación de la **Corrupción** del Vacío.
9. **Roland, el Cruzado Inquebrantable**: Caballero de la Orden Sagrada con armadura gótica pesada, escudo bendito y espada consagrada para sentenciar a los herejes.

---

### Dirección de Arte Grimdark & Metaphor Cascade
- **Menú Cinético en Cascada (`metaphorCascade.js`)**: Menú estilizado con transiciones de alto impacto, navegación ágil (teclado, ratón y táctil), siluetas vectoriales y selección dinámica de personajes.
- **Cartas Metaphor (`card.js` & `card.css`)**: Sellos de cera con el coste de energía, marco ornamental 4:3, etiquetas góticas, siluetas vectoriales dinámicas en caso de falta de arte y efecto de inspección ampliada.
- **Fondos Pictóricos de Alta Resolución**:
  - *Menú y Crónicas*: Vista de catedral gótica en ruinas bajo cielos calcinados con viñeta dorada.
  - *Campos de Ceniza (`ashfields.webp`)*: Párramos desolados y vestigios de guerra bajo ceniza constante.
  - *La Cripta Olvidada (`crypt.webp`)*: Catacumbas sombrías con arcos de piedra y runas etéreas.
  - *Ciudadela Calcinada (`citadel.webp`)*: Bastión central envuelto en fuego oscuro y nubes de tormenta.
  - *Lugar de Descanso (`rest-site.webp`)*: Hoguera solitaria entre espadas rotas.
  - *Mercader Errante (`merchant.webp`)*: Tenderete ambulante de reliquias a la luz de una lámpara de aceite.

---

###  Expedición y Combate Táctico
- **Mapa de Nodos**: Avanza por nodos de combate, encuentros con enemigos de élite (*Fearsome Miniboss*), mercaderes misteriosos y campamentos de descanso.
- **Sistema de Turnos e Intenciones**: Los enemigos anuncian previamente sus acciones (Ataques simples, Ataques con aturdimiento, Bloqueo o acumulación de Ruina).
- **Cartas de Reacción**: Cartas instantáneas que se activan al recibir un golpe fuera de tu turno (como *Parada* o *Lirio Negro*).
- **Reliquias Antiguas**: Artefactos pasivos como la *Corona de Hierro*, el *Cáliz de Sangre*, la *Vela del Sepulcro* o el *Espejo de Obsidiana*.
- **Pociones y Objetos**: Consumibles tácticos utilizables sin coste de energía (Poción de Vida, Tónico de Energía y Frasco de Fuego).
- **Campamento y Bóveda de Cartas**: En los campamentos puedes descansar para sanar o retirar cartas de tu baraja. También puedes concluir la expedición de forma segura para guardar tus cartas ganadas en la Bóveda del Comandante (`profile.vault`).

---

###  Subpáginas del Roster
- **Colección**: Explorador completo de cartas filtradas por comandante y cartas neutrales.
- **Habilidades**: Árboles de talentos pasivos desbloqueables mediante victorias frente a los jefes de zona.
- **Arte / Galería**: Museo visual para inspeccionar ilustraciones de comandantes, bestias, reliquias, eventos y fondos.
- **Información (Crónica del Reino Quebrado)**: Enciclopedia de lore medieval con 4 grandes volúmenes (*El Reino Quebrado*, *Los 9 Comandantes*, *Bestiario*, *Cartografía del Páramo*), capitulares iluminadas, cronología histórica y citas litúrgicas.
- **Cuenta**: Perfil del jugador con estadísticas de expedición, rango de la Orden y creador de avatar personalizado.

---

###  Soporte Multilingüe (i18n)
El juego cuenta con traducción dinámica completa entre 3 idiomas:
- 🇪🇸 **Español**
- 🇬🇧 **English**
- 🇪🇺 **Euskara (Vasco)**

El idioma puede cambiarse al instante desde la barra superior de utilidades sin perder la sesión de juego.

---

### Audio Procedural y BGM
- **Efectos de sonido procedurales (`sfx.js`)**: Desarrollados con **Web Audio API** para garantizar sonido instantáneo sin necesidad de cargar archivos externos pesados (cortes de espada, colocación de cartas, defensa con escudo, victoria, derrota).
- **Música ambiental**: Soporte para pistas de audio en bucle por zona y combate contra jefes, con control de silencio persistente en `localStorage`.

---

##  Instalación y Ejecución

### Opción 1: Con Node.js y npm

```bash
# 1. Clonar el repositorio
git clone https://github.com/Veynn-rvmpd/gravecrown.git
cd gravecrown

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo local
npm run dev

# 4. Generar la compilación para producción (carpeta dist/)
npm run build
```

### Opción 2: Con Deno

```bash
# Iniciar servidor de desarrollo con Deno
deno run -A npm:vite --port 3000 --host 127.0.0.1

# Compilar para producción
deno run -A npm:vite build
```

---

## Estructura del Proyecto

```
gravecrown/
├── index.html                   # Entrada principal de la aplicación
├── style-tile.html              # Muestrario de diseño atómico y tokens visuales
├── vite.config.js               # Configuración del empaquetador Vite
├── package.json                 # Dependencias y scripts de ejecución
├── push.bat                     # Utilidad rápida para sincronizar con GitHub
├── public/
│   └── assets/
│       ├── backgrounds/         # Fondos de zonas (ashfields, crypt, citadel, menu)
│       ├── commanders/          # Ilustraciones y retratos de los 9 héroes
│       ├── enemies/             # Retratos de monstruos y jefes
│       ├── events/              # Ilustraciones de eventos (mercader, descanso)
│       ├── fonts/               # Tipografías góticas e históricas (Woff2)
│       └── relics/              # Iconografía de reliquias
└── src/
    ├── main.js                  # Lógica del bucle de juego, estados y pantallas
    ├── data.js                  # Base de datos de cartas, comandantes, enemigos y zonas
    ├── i18n.js                  # Motor de localización (ES, EN, EU)
    ├── lore.js                  # Crónicas del reino, bestiario e historia
    ├── icons.js                 # Pictogramas vectoriales SVG
    ├── avatar.js                # Generador de avatares heráldicos SVG
    ├── supabase.js              # Adaptador para persistencia en nube (opcional)
    ├── audio/
    │   └── sfx.js               # Sintetizador de audio con Web Audio API
    ├── styles/
    │   ├── tokens.css           # Paleta de colores, sombras eclesiásticas y tipografías
    │   ├── card.css             # Estilos de cartas, marcos 4:3 y sellos de cera
    │   ├── components.css       # Botones heráldicos, cajas de eventos y barras de vida
    │   └── metaphorPages.css    # Layout cinematográfico Metaphor y subpáginas
    └── ui/
        ├── card.js              # Renderizador interactivo de cartas
        ├── metaphorCascade.js   # Menú principal cinético en cascada
        ├── metaphorBattle.js    # Pantalla de batalla táctica
        ├── metaphorProfile.js   # Interfaz de gestión de cuenta y avatar
        └── ransom.js            # Generador de tipografía iluminada
```

---

## Guía de Extensión y Modding

### Añadir una Carta Nueva
1. En `src/data.js`, añade la carta dentro del objeto `CARDS`:
   ```javascript
   "cuchilla-oscura": {
     id: "cuchilla-oscura",
     name: "Cuchilla Oscura",
     cmd: "malakor",               // Id del comandante o neutral si se omite
     type: "attack",               // "attack", "skill", "reaction", "curse"
     cost: 1,                      // Coste de energía (PA)
     effects: [{ a: "damage", n: 9 }, { a: "burn", n: 2 }],
     description: "Inflige 9 de daño y aplica 2 de Quemado."
   }
   ```
2. Añade las traducciones correspondientes en `src/i18n.js` dentro de `EN` y `EU`:
   ```javascript
   "cuchilla-oscura": ["Dark Blade", "Deal 9 damage and apply 2 Burn."]
   ```
3. Agrégala al mazo inicial del comandante o a la lista de recompensas `REWARD_POOL`.

---

## Licencia

Proyecto de código abierto desarrollado bajo la licencia **MIT**.  
Tipografías medievales y fuentes góticas utilizadas bajo licencia *SIL Open Font License (OFL)*.

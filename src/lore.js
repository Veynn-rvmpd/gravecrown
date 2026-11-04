// Textos de información/lore de Gravecrown (ES / EN / EU).
// Estilo Grimdark táctico (Persona / Metaphor: ReFantazio / Dark Souls).
const e = (es, en, eu) => ({ es, en, eu: eu || es });

export const LORE = {
  world: [
    {
      id: "realm",
      t: e("El Reino Quebrado y la Noche de la Fractura", "The Broken Realm and the Night of Ruin", "Erreinu Hautsia eta Hondamenaren Gaua"),
      quote: e(
        "«Siete años de ceniza apagaron el sol, pero no el rencor de los reyes que yacen bajo tierra.» — Crónicas del Sepulcro",
        "«Seven years of falling ash blotted out the sun, yet could not quench the malice of kings entombed below.» — Chronicles of the Sepulcher",
        "«Zazpi urteko errautsak eguzkia itzali zuen, baina ez lur azpian dauden erregeen herra.» — Hilobiko Kronikak"
      ),
      dossier: {
        epoch: e("Era de la Ceniza Tardía (Año 41 post-fractura)", "Late Ash Era (Year 41 Post-Shattering)", "Errauts Berantiarraren Aroa (Hautsi ondorengo 41. urtea)"),
        capital: e("Aethelgard / Ciudadela Calcinada", "Aethelgard / Scorched Citadel", "Aethelgard / Zitadela Kiskalia"),
        artifact: e("La Corona de Ceniza (5 fragmentos dispersos)", "The Crown of Ash (5 scattered shards)", "Errautsen Koroa (sakabanatutako 5 zati)")
      },
      sections: [
        {
          title: e("La Gran Prosperidad de Aethelgard", "The Golden Age of Aethelgard", "Aethelgard-eko Oparotasun Handia"),
          text: e(
            "Durante más de seis siglos, Gravecrown floreció bajo el amparo de la Corona de Ceniza, una reliquia forjada antes de que el hombre conociera el hierro. El artefacto actuaba como un candado metafísico sobre los umbrales de la muerte: los caídos descansaban en paz eterna, las almas no vagaban atormentadas y las cosechas crecían alimentadas por ríos puros. Los grandes reyes gobernaban desde la Corte de Plata, erigiendo catedrales cuyas agujas rozaban el firmamento.",
            "For more than six centuries, Gravecrown flourished under the aegis of the Crown of Ash, a relic forged before humanity first struck iron. The artifact served as a metaphysical lock upon the gates of death: the fallen slept in eternal tranquility, souls did not wander in torment, and harvests grew bountiful, nurtured by pure mountain springs. Grand monarchs ruled from the Silver Court, raising cathedrals whose spires pierced the sky.",
            "Sei mende baino gehiagotan, Gravecrown Errautsen Koroaren babespean loratu zen, gizakiak burdina landu aurretik forjatutako erlikia zahar batek gidatuta. Artefaktuak sarraila metafisiko gisa jokatzen zuen heriotzaren atalaseen gainean: hildakoek betiko bakean atseden hartzen zuten, arimak ez ziren oinazean noraezean ibiltzen, eta uztak mendiko iturri garbiek elikatuta hazten ziren. Errege handiek Zilarrezko Gortetik gobernatzen zuten, zerua ukitzen zuten katedralak eraikiz."
          )
        },
        {
          title: e("El Cisma Real y los Siete Años de Pólvora Gris", "The Royal Schism and the Seven Years of Gray Ash", "Zisma Erreala eta Errauts Griseko Zazpi Urteak"),
          text: e(
            "La codicia del último Soberano, obsesionado con la inmortalidad carnal, desató la catástrofe. En un ritual secreto en lo profundo de la cripta imperial, el monarca intentó fusionar la reliquia con su propia sangre. La Corona no admitió dueño mortal y estalló en una tempestad de luz negra. El trono se partió en dos, la tierra se agrietó y una lluvia incesante de ceniza calcinada cubrió el cielo durante siete años. Los túmulos reventaron desde adentro, y los muertos, privados de su reposo, alzaron sus manos en busca de calor vital.",
            "The vanity of the final Sovereign, obsessed with perpetual flesh, unleashed the doom. Within a sanctum beneath the imperial crypt, the king attempted to bind the relic into his own veins. The Crown rejected mortal mastery and shattered in a maelstrom of black luminescence. The throne cleaved in twain, the earth split open, and a relentless downpour of charred ash obscured the sun for seven years. Tombs burst open from within, and the dead, denied their peace, stretched forth cold claws in search of living warmth.",
            "Azken Buruzagiaren harrokeriak, haragiaren betikotasunarekin obsesionatuta, hondamena askatu zuen. Kripta inperialaren sakoneko ezkutuko erritu batean, monarkak erlikia bere odolarekin lotzen saiatu zen. Koroak ez zuen giza jaberik onartu eta argi beltzezko ekaitz batean lehertu zen. Tronua bitan banatu zen, lurra pitzatu zen eta zazpi urtez errauts kiskalizko euria egin zuen eguzkia estaliz. Hilobiak barrutik lehertu ziren, eta hildakoek, atsedena ukatuta, beren esku hotzak luzatu zituzten bizi-beroaren bila."
          )
        },
        {
          title: e("El Presente: Ceniza, Ruina y los Fragmentos", "The Present: Ash, Ruin, and the Shards", "Gaur Egungoa: Errautsa, Hondamena eta Zatiak"),
          text: e(
            "Hoy, Gravecrown es un osario a cielo abierto. Bandas de saqueadores se disputan los lingotes oxidados de las armerías reales; monstruos nacidos de la podredumbre acechan en los valles; y los cinco fragmentos supervivientes de la Corona emiten pulsos de poder arcano que atraen a los comandantes más desesperados del continente.",
            "Today, Gravecrown is an open-sky ossuary. Raider warbands war over rusted ingots from forgotten imperial arsenals; abominations spawned from rot stalk the desolate valleys; and the five surviving shards of the Crown pulse with eldritch authority, beckoning the most desperate warlords across the continent.",
            "Gaur egun, Gravecrown zeru irekiko hezurtegi bat da. Lapur taldeek borroka egiten dute armategi inperialetako lingote herdoilduengatik; ustelkeriatik jaiotako munstroak haranetan ezkutatzen dira; eta bizirik atera diren Koroaren bost zatiek aginte boteretsua zabaltzen dute, kontinenteko komandante etsituenak erakarriz."
          )
        }
      ]
    },
    {
      id: "forces",
      t: e("La Metafísica: Ceniza, Corrupción y Recuerdos", "Metaphysics: Ash, Corruption, and Memory", "Metafisika: Errautsa, Ustelkeria eta Oroitzapenak"),
      quote: e(
        "«Todo acero se dobla ante el óxido; toda alma se quiebra ante el olvido.» — Proverbio de los Herejes del Sepulcro",
        "«All steel yields to rust; all spirits fracture before oblivion.» — Proverb of the Sepulcher Heretics",
        "«Altzairu orok herdoilaren aurrean amore ematen du; arima orok ahanzturaren aurrean hausten da.» — Hilobiko Herejeen Esaera Zaharra"
      ),
      dossier: {
        primal: e("La Ceniza (Consunción) vs La Memoria (Persistencia)", "Ash (Consumption) vs Memory (Persistence)", "Errautsa (Kontsumitzea) vs Oroimena (Eustea)"),
        peril: e("La Ruina del Alma (Corrupción Arcana)", "Soul Ruin (Arcane Corruption)", "Arimaren Hondamena (Ustelkeria Arkanoa)"),
        currency: e("Astillas de Ánima y Recuerdos Sellados", "Anima Shards and Sealed Memories", "Arima Ezpalak eta Oroitzapen Sigilatuak")
      },
      sections: [
        {
          title: e("La Ceniza que Consume", "The Consuming Ash", "Kontsumitzen duen Errautsa"),
          text: e(
            "La Ceniza no es simple polvo mineral: es residuo ontológico, el subproducto de almas y materia devoradas por el vacío. Cuando se asienta en la piel de los seres vivos, marchita el vigor y engendra tumores de hollín. Quien emplea artes mágicas prohibidas o invoca las llamas del abismo acelera este proceso, acumulando Corrupción hasta que la carne se petrifica y el juicio se disuelve en locura.",
            "The Ash is no ordinary dust: it is ontological residue, the byproduct of matter and souls consumed by the void. As it settles upon living flesh, it withers vitality and breeds smoldering soot-cancers. Those who invoke forbidden sorceries or summon void-fire accelerate this blight, amassing Corruption until sinew turns to stone and reason dissolves into howling madness.",
            "Errautsa ez da hautsa bakarrik: hustasunak irentsitako arimen eta materiaren hondakina da. Izaki bizidunen azalean finkatzen denean, indarra zimeltzen du eta kedar-tumoreak sortzen ditu. Magia debekatuak erabiltzen dituztenek Ustelkeria pilatzen dute, haragia harri bihurtu eta zentzua eromena bihurtu arte."
          )
        },
        {
          title: e("La Memoria que Resiste", "The Enduring Memory", "Eusten duen Oroimena"),
          text: e(
            "Frente a la consunción de la ceniza se alza la Memoria. En Gravecrown, recordar con lucidez es un acto de rebelión física. Los comandantes canalizan sus recuerdos más intensos —un voto jurado sobre la tumba de un hermano, el dolor de un exilio, la nota final de una elegía— para manifestar milagros tácticos, erigir barreras de luz heráldica y resistir embestidas mortales.",
            "Opposing the ravenous ash stands Memory. In Gravecrown, lucid recollection is an act of physical defiance. Commanders channel their fiercest memories—an oath sworn upon a brother's fresh mound, the bitter agony of exile, the final cadence of an elegy—to manifest tactical miracles, raise radiant shields of heraldry, and withstand lethal blows.",
            "Errautsaren aurrean Oroimena zutitzen da. Gravecrown-en, argitasunez gogoratzea matxinada fisiko bat da. Komandanteek beren oroitzapen biziak bideratzen dituzte —anaia baten hilobiaren gainean egindako zina, erbesteko mina, elegia baten azken doinua— mirari taktikoak agertzeko eta kolpe hilgarriei aurre egiteko."
          )
        }
      ]
    },
    {
      id: "expeditions",
      t: e("El Pacto de las Expediciones y la Hoguera", "The Pact of Expeditions and the Hearth", "Espedizioen Ituna eta Sutea"),
      quote: e(
        "«La tregua dura lo que tarda el fuego en convertirse en brasa. Al amanecer, volvemos a matarnos.» — Roland, ante la hoguera",
        "«The truce endures only while embers burn bright. At daybreak, the blades clash anew.» — Roland, beside the hearth",
        "«Treguak suak txingarrak mantentzen dituen bitartean dirau. Egunsentian, berriro hiltzen dugu elkar.» — Roland, suaren ondoan"
      ),
      dossier: {
        sanctuary: e("Hogueras de Ceniciento (Tregua Sagrada)", "Cinder Hearths (Sacred Truce)", "Errautsezko Suak (Tregua Sakratua)"),
        rule: e("Quien cae lo pierde todo salvo su nombre", "Whoever falls forfeits all save their name", "Erortzen denak dena galtzen du bere izena izan ezik"),
        merchant: e("El Alquimista Errante y sus Reliquias", "The Wandering Alchemist and his Relics", "Alkimista Ibiltaria eta bere Erlikiak")
      },
      sections: [
        {
          title: e("Las Rutas Hacia la Ciudadela", "The Routes Toward the Citadel", "Zitadelarako Bideak"),
          text: e(
            "Nadie viaja a Gravecrown en ejércitos numerosos; el hedor de las marchas multitudinarias despierta a los titanes enterrados. Las expediciones se componen de un único comandante y su séquito de reliquias, avanzando de nodo en nodo a través de llanuras y catacumbas.",
            "No army marches into Gravecrown en masse; the tread of legions awakens the colossal slumbering horrors beneath the rock. Expeditions are mounted by solitary warlords bearing caches of relics, pressing forward node by node across desolate wastes and labyrinthine crypts.",
            "Inor ez da armada ugaritan sartzen Gravecrown-era; martxen usainak lurpeko titan lozorroak esnatzen ditu. Espedizioak komandante bakarti batez osatuta daude, nodoz nodo eremu mortuetan eta katakonbetan aurrera eginez."
          )
        },
        {
          title: e("La Ley de las Hogueras", "The Law of the Hearths", "Suen Legea"),
          text: e(
            "Incluso en un mundo condenado rigen ciertas leyes no escritas. Los círculos de piedras rúnicas donde arden las ascuas de hoguera son zonas de inviolabilidad absoluta. Allí, asesinos y caballeros santos comparten caldo de raíces, afilan sus armas y comercian con el Alquimista Errante antes de internarse de nuevo en la niebla donde aguardan los terrores encadenados.",
            "Even within a doomed realm, unwritten laws persist. The runic stone circles holding hearth-embers are sanctums of unconditional truce. There, ruthless assassins and holy knights share bitter root broth, hone dull blades, and barter with the Wandering Alchemist before stepping back into the killing mist where chained monstrosities hunger.",
            "Mundu kondenatu batean ere lege ez-idatzi batzuk mantentzen dira. Suak piztuta dauden harrizko zirkuluak bortxaezinak dira. Bertan, hiltzaileek eta zaldun santuek salda partekatzen dute, armak zorrozten dituzte eta Alkimista Ibiltariarekin salerosten dute berriro lanbroan sartu aurretik."
          )
        }
      ]
    }
  ],
  chars: [
    {
      id: "corina",
      t: e("Corina, la Rosa Desterrada", "Corina, the Exiled Rose", "Corina, Arrosa Erbestetua"),
      quote: e(
        "«Una rosa no pide perdón por florecer en la carroña, ni sus espinas se disculpan al desgarrar la carne del rey.»",
        "«A rose never begs pardon for blooming upon carrion, nor do its thorns apologize for tearing the king's throat.»",
        "«Arrosak ez du barkamenik eskatzen sarraskian loratzeagatik, eta bere arantzek ez dute aitzakiarik erregearen lepoa zulatzean.»"
      ),
      dossier: {
        role: e("Duelista de Estocada y Danza Venenosa", "Thrust Duelist & Venom Dancer", "Ezpata-dantzaria eta Pozoi Lorezaina"),
        weapon: e("Ropera de Espinas Carmesí (Acero de Aethelgard)", "Crimson Thorn Rapier (Aethelgard Tempered Steel)", "Arantza Gorriminen Ezpata (Aethelgard-eko altzairua)"),
        origin: e("Corte de Plata de Aethelgard (Princesa de Sangre)", "Silver Court of Aethelgard (Royal Blood Princess)", "Aethelgard-eko Zilarrezko Gortea (Leinuko Printzesa)"),
        resource: e("Pétalos Venenosos (Potenciación de Ataques)", "Poison Petals (Attack Amplification)", "Petalo Pozoitsuak (Eraso Indartuak)")
      },
      sections: [
        {
          title: e("El Linaje de Plata y la Noche de los Puñales", "The Silver Lineage and the Night of Daggers", "Zilarrezko Leinua eta Labanen Gaua"),
          text: e(
            "Nacida como la heredera primogénita de la dinastía de Aethelgard, Corina creció en los salones de mármol blanco de la Corte de Plata. Su infancia estuvo marcada por la música de laúdes, tratados de botánica imperial y el estudio de las flores más raras del continente. Sin embargo, en la víspera de su coronación, los grandes cancilleres y sus propios tíos orquestaron un golpe de estado en las sombras. En una sola noche de horror, su familia fue degollada y sus aposentos pasto de las llamas. Despojada de su tiara y marcada con hierro candente como supuesta parricida, fue arrojada a los yermos para que las alimañas devoraran su cuerpo moribundo.",
            "Born the firstborn heir to the Aethelgard dynasty, Corina was reared within the alabaster chambers of the Silver Court. Her youth was shaped by lutes, classical botanical treatises, and the study of the realm's rarest flora. Yet on the eve of her coronation, grand chancellors and her own kin engineered a palace slaughter. In a single night of blood, her family was butchered and her quarters reduced to cinders. Stripped of her crown and branded a parricide with searing iron, she was cast into the dead wastes to be devoured by scavengers.",
            "Aethelgard dinastiako lehen oinordeko jaioa, Corina Zilarrezko Gorteko jauregi zurietan hazi zen. Haurtzaroan lauteak entzuten eta lore arraroenak ikasten aritu zen. Baina bere koroatze bezperan, kantzilerrek eta osabek estatu-kolpea eman zuten. Gau bakarrean bere familia eraila izan zen eta gelak kiskalita. Koroa kendu eta burdin goriaz markatu ondoren, basamortura bota zuten piztiek jan zezaten."
          )
        },
        {
          title: e("El Refugio de las Espinas Carmesí", "Sanctuary of the Crimson Thorns", "Arantza Gorriminen Babesa"),
          text: e(
            "Cuando la fiebre de las heridas estaba a punto de apagar su vida, fue rescatada por las Espinas Carmesí, una hermandad errante de duelistas y proscritos que operaba en los barrancos de ceniza. Su líder, un anciano maestro de esgrima condenado a muerte en la capital, no vio en ella a una princesa desvalida, sino a un horno ardiente de rencor. Durante siete años la instruyeron en el arte del florete y la ropera, enseñándole a sustituir el llanto por la precisión milimétrica del acero templado.",
            "As fever consumed her remaining strength, she was found by the Crimson Thorns, a nomadic fellowship of outlaw duelists haunting the ash ravines. Their master, an exiled fencing prodigy sentenced to hang in the capital, saw not a fragile princess, but a furnace of white-hot vengeance. For seven grueling years they forged her in the art of the rapier, teaching her to trade tears for the razor precision of tempered steel.",
            "Zaurien sukarrak bere bizitza itzaltzear zegoenean, Arantza Gorriminek erreskatatu zuten, errauts-hondakinetan bizi ziren mertzenarioek. Haien maisuak ez zuen printzesa ahul bat ikusi, mendekuz betetako bihotza baizik. Zazpi urtez ezpata eta floretearen artean hezi zuten, malkoak altzairu zorrotzaren zehaztasunagatik ordezkatuz."
          )
        },
        {
          title: e("La Esgrima de las Flores Mortales", "The Fencing of Deadly Blooms", "Lore Hilgarrien Esgrima"),
          text: e(
            "Corina adaptó las técnicas de duelo combinándolas con su profundo conocimiento de las toxinas florales. Su hoja, forjada con acero plegado y acanaladuras microscópicas, destila extractos de adelfa negra, belladona y loto carmesí. Cada estocada en combate sigue el compás grácil de una flor que se abre: hermosas fintas que hipnotizan al adversario antes de que el filo atraviese la carótida. Para Corina, cada combate es un recital botánico donde la sangre del enemigo riega las espinas de su acero.",
            "Corina reinvented martial fencing by fusing swordplay with botanical alchemy. Her rapier, fashioned with layered steel and channeled micro-grooves, sweats deadly tinctures of black oleander, belladonna, and crimson lotus. Each thrust mimics the unfolding of a flower: mesmerizing feints that charm the foe before cold steel pierces the windpipe. To Corina, duel is high court theater where the blood of usurpers feeds the blossom of her blade.",
            "Corinak borroka-estiloa eraldatu zuen bere ezagutza botanikoarekin. Bere ezpatak adelfa beltza, bela-belarra eta loto gorriminaren pozoiak jariatzen ditu. Kolpe bakoitzak lore baten irekiera imitatzen du: itxura ederreko mugimenduekin etsaia liluratu eta berehala zintzurra zulatzen du. Berarentzat, borroka bakoitza errezitaldi bat da, non usurpatzaileen odolak bere altzairuaren arantzak ureztatzen dituen."
          )
        },
        {
          title: e("El Juramento del Retorno", "The Vow of Return", "Itzuleraren Zina"),
          text: e(
            "Ahora marcha hacia el corazón de Gravecrown. No busca restaurar el trono de su estirpe ni compadecerse de los muertos, sino ejecutar uno a uno a los cancilleres supervivientes que convirtieron el reino en ceniza. Para Corina, el mundo entero es un jardín marchito que necesita ser podado con la punta de su espada.",
            "Now she marches toward the shattered heart of Gravecrown. She seeks neither to restore her dynasty's throne nor mourn the quiet dead, but to hunt down and dissect every surviving chancellor who turned her realm to ash. To Corina, the world is a rotting garden in dire need of ruthless pruning.",
            "Orain Gravecrown-eko bihotzera doa. Ez du tronua berreskuratu nahi, ezta hildakoez errukitu ere: erreinua errauts bihurtu zuten kantziler guztiak banan-banan exekutatu nahi ditu. Bere ustez, mundua lorategi ustel bat da, ezpataz inausi behar dena."
          )
        }
      ]
    },
    {
      id: "lysander",
      t: e("Lysander, el León de la Guardia", "Lysander, Lion of the Phalanx", "Lysander, Falangearen Lehoia"),
      quote: e(
        "«Una falange no retrocede mientras un solo corazón siga latiendo tras el escudo.»",
        "«A phalanx never yields ground while a single heart still beats behind the iron shield.»",
        "«Falange batek ez du atzera egiten armarriaren atzean bihotz bakar batek taupadaka jarraitzen duen bitartean.»"
      ),
      dossier: {
        role: e("Maestro de la Pica y Control de Alcance", "Master of Pike & Spacing Control", "Pika Maisua eta Distantzia Kontrola"),
        weapon: e("Lanza Pesada del Dragón y Broquel", "Heavy Dragon War Lance & Targe", "Herensugearen Pika Astuna eta Babeslea"),
        origin: e("Primera Falange Imperial (Capitán de Élite)", "First Imperial Phalanx (Elite Captain)", "Lehen Falange Inperiala (Kapitain Elitea)"),
        resource: e("Impulso Táctico (Maniobras de Penetración)", "Tactical Momentum (Penetration Maneuvers)", "Bultzada Taktikoa (Zulaketa Maniobrak)")
      },
      sections: [
        {
          title: e("El Muro del Este y la Caída de la Falange", "The Eastern Wall and the Phalanx's Fall", "Ekialdeko Harresia eta Falangearen Erorketa"),
          text: e(
            "Lysander fue el capitán más joven en comandar la legendaria Guardia de Dragones, la unidad de infantería pesada encargada de custodiar la Puerta del Sol en Aethelgard. Cuando la Corona estalló y la marea de cenizas cayó como un alud sobre la fortaleza, la falange de Lysander sostuvo la brecha durante catorce días consecutivos sin dormir. Sus hombres formaron un erizo impenetrable de picas contra hordas de muertos que trepaban sobre los cadáveres de sus propios hermanos. Al decimoquinto día, la niebla asfixió a toda su línea; solo Lysander sobrevivió, erguido entre una montaña de dos mil cuerpos caídos.",
            "Lysander was the youngest officer ever to command the legendary Dragon Guard, the heavy infantry tasked with defending the Sun Gate of Aethelgard. When the Crown fractured and ash cascaded over the fortress like an avalanche, Lysander's phalanx held the breaches for fourteen days without slumber. His warriors locked shields into an impenetrable hedgehog of pikes against surging tides of restless dead climbing mounds of their own fallen kin. On the fifteenth dawn, toxic miasma choked his entire regiment; only Lysander endured, standing solitary atop a rampart of two thousand corpses.",
            "Lysander Herensugearen Guardia agintzen zuen ofizial gazteena izan zen, Eguzkiaren Atea zaintzen zuena. Koroa hautsi zenean, falangeak hamalau egunez eutsi zion arrakalari lorik egin gabe. Hamabosgarren egunean lanbro pozoidunak bere gudari guztiak itotzen zituen; Lysander bakarrik geratu zen zutik bi mila gorputzen mendiaren gainean."
          )
        },
        {
          title: e("La Disciplina de la Pica Solitaria", "Discipline of the Solitary Pike", "Pika Bakartiaren Diziplina"),
          text: e(
            "Incapaz de perdonarse haber sobrevivido a sus camaradas, Lysander cargó la pica de guerra de su falange y juró convertir su propio cuerpo en una vanguardia viviente. Su técnica de combate desafía el sentido común: mediante pértigas con el asta de fresno reforzado con hierro, se eleva por encima de las cabezas enemigas y desciende en picado con una violencia colosal, partiendo escudos y quebrando corazas de granito antes de que el adversario pueda cerrar la distancia.",
            "Unable to forgive his own survival, Lysander took up the banner-lance of his regiment and swore to become a walking vanguard. His martial style defies orthodox warfare: utilizing the iron-shod ash haft as a vaulting pivot, he launches into the air, plunging down with colossal kinetic devastation that shatters tower shields and granite plate before adversaries can close the distance.",
            "Bere kideak baino gehiago bizi izanaz errudun sentituz, pika hartu eta abangoardia ibiltari bihurtu zen. Salto itzelak eginez etsaien gainetik igarotzen da eta indar kolosalez lurreratzen da, armarriak eta granitozko plakak erdibituz."
          )
        }
      ]
    },
    {
      id: "faye",
      t: e("Faye, la Cazadora Espectral", "Faye, the Spectral Ranger", "Faye, Ehiztari Espektrala"),
      quote: e(
        "«El silbido de mi cuerda no es una advertencia; es el réquiem que llega después de que tu sangre ya empapa el suelo.»",
        "«The whistle of my bowstring is no warning; it is the requiem whispered after your blood has already stained the mud.»",
        "«Nire sokaren txistua ez da abisu bat; zure odolak lurra busti ondoren entzuten den errekiena da.»"
      ),
      dossier: {
        role: e("Tiradora de Francotirador y Proyectiles Etéreos", "Sniper Marksman & Ethereal Projectiles", "Tiratzaile Zehatza eta Gezi Etereoak"),
        weapon: e("Arco Compuesto de Filamento Lunar", "Lunar Filament Composite Recurve", "Ilargi Hari Konposatuko Arkua"),
        origin: e("Bosque de los Pinos Llorones", "Forest of the Weeping Pines", "Pinu Negartien Basoa"),
        resource: e("Foco Espectral (Ataques Perforantes)", "Spectral Focus (Piercing Volleys)", "Foku Espektrala (Eraso Zulagarriak)")
      },
      sections: [
        {
          title: e("La Guardiana de la Niebla Eterna", "Watcher of the Unending Mist", "Betiko Lanbroaren Zaindaria"),
          text: e(
            "En las cordilleras septentrionales de los Pinos Llorones, la niebla es tan espesa que ningún rayo de sol ha tocado el suelo en cien años. Allí creció Faye, una huérfana acogida por los eremitas ciegos del risco. Aprendió a orientarse no con los ojos, sino con las vibraciones del aire y los susurros de los espíritus errantes. Su arco, tallado en tejo petrificado y enhebrado con filamentos de luna extraídos de lágrimas de espectro, dispara flechas que no obedecen a la gravedad ni a las leyes de la física.",
            "Within the northern ridges of the Weeping Pines, mist hangs so dense that sunlight has not touched pine needles in a century. There Faye was raised by blind mountain hermits. She learned to navigate not with sight, but through air currents and the murmurs of restless phantoms. Her bow, carved from fossilized yew and strung with lunar filaments spun from specter tears, looses arrows that ignore gravity, armor, and mortal physics.",
            "Pinu Negartien mendietan lanbroa hain da lodia non eguzkiak ez baitu lurra ikusi mende batean. Bertan hazi zen Faye, basoko mamuen xuxurlak entzunez. Bere arkuak mamuen malkoz egindako hariekin tiro egiten du, fisikari eta grabitateari muzin eginez."
          )
        },
        {
          title: e("El Disparo a Través del Velo", "The Shot Piercing the Veil"),
          text: e(
            "Cuando Faye tensa la cuerda, contiene la respiración y ralentiza los latidos de su corazón hasta detenerlos por completo durante breves segundos. Sus proyectiles atraviesan paredes de piedra maciza y armaduras pesadas como si fueran humo, materializándose en el interior del torso del blanco para desgarrarle el corazón desde dentro.",
            "When Faye draws her bowstring, she halts her breath and stills her heartbeat entirely for fleeting moments. Her spectral arrows pass cleanly through granite walls and plate harness like smoke, rematerializing inside the victim's chest cavity to rupture heart and marrow from within.",
            "Fayek arku-soka tenkatzen duenean, bihotz-taupadak eten egiten ditu. Bere gezi espektralek harrizko hormak eta burnizko korazak zeharkatzen dituzte kearen antzera, biktima bular barrutik lehertuz."
          )
        }
      ]
    },
    {
      id: "valerius",
      t: e("Valerius, el Inquisidor Quebrado", "Valerius, the Broken Inquisitor", "Valerius, Inkisidore Hautsia"),
      quote: e(
        "«Nos dijeron que el fuego de los altares purificaba el mundo. Solo cuando probé su calor comprendí que estábamos asando las almas de nuestros hijos.»",
        "«They preached that altar-flames cleansed creation. Only when I tasted the heat did I realize we were roasting the souls of our own children.»",
        "«Aldareetako suak mundua garbitzen zuela esan ziguten. Beroa dastatu nuenean bakarrik ulertu nuen gure seme-alaben arimak erretzen ari ginela.»"
      ),
      dossier: {
        role: e("Paladín de Castigo Pesado y Fanatismo", "Heavy Retribution & Fanatical Cleave", "Zigor Astuneko Paladina"),
        weapon: e("Gran Alabarda del Sacrilegio (Hoja Dentada)", "Grand Halberd of Sacrilege (Serrated Blade)", "Sakrilegioaren Alabarda Handia"),
        origin: e("La Sagrada Orden del Alba (Sumo Ejecutor)", "The Holy Dawn Order (Supreme Enforcer)", "Egunsentiaren Orden Sakratua"),
        resource: e("Fervor Sagrado (Castigos de Área y Escudo)", "Holy Fervor (Area Smites & Aegis)", "Zelo Santua (Inguruko Zigorrak)")
      },
      sections: [
        {
          title: e("El Verdugo de la Fe Ciega", "Executioner of Blind Zeal", "Fede Itsuaren Exekutorea"),
          text: e(
            "Valerius era el terror personificado de la Orden del Alba. Con su armadura de hierro negro bendecida por los arzobispos y su alabarda de dos metros y medio, ejecutó a más de trescientos supuestos herejes durante los primeros años de la lluvia de cenizas. Creía con devoción fanática que el sufrimiento terrenal aplacaría la ira divina y reconstituiría la Corona rota.",
            "Valerius was terror incarnate for the Holy Dawn Order. Encased in black iron armor blessed by grand archbishops and wielding a halberd nine feet long, he executed more than three hundred accused heretics during the early years of the ash blight. He believed with unflinching zeal that mortal agony would appease divine wrath and mend the shattered Crown.",
            "Valerius Egunsentiaren Ordenaren beldurra zen. Hirurehun heretiko baino gehiago erail zituen bere alabardarekin, oinazeak Koroa hautsia sendatuko zuela sinetsita."
          )
        },
        {
          title: e("La Noche del Sacrilegio", "The Night of Sacrilege", "Sakrilegioaren Gaua"),
          text: e(
            "Todo cambió cuando irrumpió sin previo aviso en la cámara subterránea del Gran Patriarca. Allí descubrió que las pilas de fuego sagrado no ardían con aceites benditos, sino con la sangre destilada de cientos de huérfanos cuyas almas eran sacrificadas para mantener jóvenes a los sacerdotes. Enloquecido de ira y desengaño, Valerius descargó su alabarda sobre el altar mayor, decapitando al Patriarca y quemando el templo entero hasta los cimientos. Despojado de sus títulos y perseguido como el mayor apóstata de la historia, vaga buscando una expiación que sabe imposible.",
            "Everything shattered when he breached the Patriarch's hidden sanctum. There he witnessed the grand sacred pyres fed not with sanctified oils, but with the distilled blood of orphan children whose souls were butchered to preserve the priests' immortal flesh. Consumed by howling fury and despair, Valerius brought his halberd down upon the golden altar, cleaving the Patriarch in twain and burning the cathedral to ash. Stripped of honors and hunted as the kingdom's greatest heretic, he roams seeking an expiation he knows will never arrive.",
            "Patriarkaren ganbera sekretuan sartu zenean dena aldatu zen: suak haur umezurtzen odolez elikatzen ziren apaizak gazte mantentzeko. Haserre bizian, Patriarka moztu eta tenplua erre zuen. Orain barkaezina den barkamenaren bila dabil."
          )
        }
      ]
    },
    {
      id: "elora",
      t: e("Elora, la Druida Marchita", "Elora, the Blighted Druid", "Elora, Druida Zimeldua"),
      quote: e(
        "«La naturaleza no perdona; la naturaleza simplemente se pudre, y de la podredumbre nacen espinas que te estrangularán mientras duermes.»",
        "«Nature does not forgive; nature merely rots, and from the rot sprout briars that choke you in your sleep.»",
        "«Naturak ez du barkatzen; natura usteldu egiten da, eta ustelduratik arantzak sortzen dira lo zaudenean itotzeko.»"
      ),
      dossier: {
        role: e("Invocadora de Espinas y Veneno Fúngico", "Thorn Summoner & Fungal Spores", "Arantza Deitzailea eta Esporak"),
        weapon: e("Báculo de Raíz Pétrea y Garras de Zarza", "Petrified Root Staff & Bramble Talons", "Harrizko Sustrai Makila"),
        origin: e("Arboleda Primordial del Valle de los Robles", "Primeval Grove of Oak Vale", "Haritzen Haraneko Basoa"),
        resource: e("Savia Corrupta (Regeneración y Espinas)", "Blighted Sap (Regeneration & Brambles)", "Izerdi Usteldua (Birsorkuntza)")
      },
      sections: [
        {
          title: e("El Incendio del Bosque Madre", "The Burning of the Mother Wood", "Baso Ama Kiskalia"),
          text: e(
            "Cuando la ceniza cayó sobre el valle primordial, los árboles milenarios no murieron de inmediato: ardieron desde el interior de sus troncos en un fuego sordo y venenoso. Elora, la guardiana más devota del bosque, presenció la agonía de las criaturas y la agonía de la tierra. Desesperada por salvar el último latido del corazón del bosque, realizó un rito impío: ingirió la savia putrefacta del Árbol Padre, permitiendo que raíces parasitarias se incrustaran en su médula espinal y reemplazaran sus venas.",
            "When the ash descended upon the primordial vale, the thousand-year oaks did not perish swiftly: they smoldered from within with smoldering, toxic fire. Elora, the grove's most devoted warden, watched the agonizing extinction of beasts and root-spirits. Desperate to preserve the forest's final pulse, she enacted an abominable rite: drinking the black sap of the Father Tree, allowing parasitic roots to burrow into her spinal marrow and supplant her blood.",
            "Errautsa erori zenean, basoko zuhaitz zaharrak barrutik erre ziren. Basoa salbatu nahian, Elorak Zuhaitz Aitaren izerdi beltza edan zuen, sustraiek bere hezurrak eta zainak ordezkatzea baimenduz."
          )
        },
        {
          title: e("La Fusión Monstruosa", "The Monstrous Symbiosis", "Sinbiosi Izugarria"),
          text: e(
            "Elora ya no es del todo humana. Su piel está cuarteada como corteza calcinada, y de sus brazos brotan zarzas vivientes que responden a sus impulsos homicidas. Donde sus pies desnudos pisan, la tierra estéril vomita hongos carnívoros y raíces que aprisionan los tobillos de los viajeros. No busca salvar a la humanidad de la ceniza; busca que la ceniza se convierta en abono para un nuevo bosque de espinas monstruosas.",
            "Elora is no longer entirely mortal. Her skin is cracked like charred bark, and from her arms burst living brambles that lash out at her murderous whim. Where her bare feet step, barren soil vomits carnivorous spores and strangling roots that crush travelers' limbs. She seeks no salvation for humanity; she wishes only for ash to serve as mulch for a nightmarish forest of predatory thorns.",
            "Elora ez da jada gizakia. Bere azala azal kiskalia da, eta besoetatik arantza biziak ateratzen zaizkio. Oinez doan lekuan perretxiko haragijaleak sortzen dira. Ez du inor salbatu nahi; errautsa arantzen basorako ongarri izatea nahi du."
          )
        }
      ]
    },
    {
      id: "carmilla",
      t: e("Carmilla, la Dama Carmesí", "Carmilla, the Sanguine Countess", "Carmilla, Dama Gorrimina"),
      quote: e(
        "«Vuestro reino cayó en siete años; mi sed lleva mil inviernos ardiendo. Decidme, mortal, ¿cuál de los dos imperios os parece más duradero?»",
        "«Your kingdom fell in seven brief years; my thirst has burned for a thousand winters. Tell me, mortal, which empire seems more enduring?»",
        "«Zuen erreinua zazpi urtetan erori zen; nire egarriak mila negu daramatza erretzen. Esadazu, hilkorra, zein inperio iruditzen zaizu iraunkorragoa?»"
      ),
      dossier: {
        role: e("Drenadora Sanguínea y Evasión Sombría", "Blood Drainer & Shadow Evasion", "Odol Xurgatzailea eta Itzala"),
        weapon: e("Dagas de Cristal Sangriento y Velo de Niebla", "Sanguine Glass Daggers & Mist Veil", "Odol-beirazko Daguek eta Lanbroa"),
        origin: e("Agujas de Obsidiana de los Picos Negros", "Obsidian Spires of the Black Crags", "Mendi Beltzetako Obsidiana Orratzak"),
        resource: e("Esencia de Sangre (Robo de Vida y Niebla)", "Blood Essence (Lifesteal & Mist Shifting)", "Odol Esentzia (Bizitza Xurgatzea)")
      },
      sections: [
        {
          title: e("La Nobleza de la Sangre Antigua", "Nobility of Ancient Blood", "Antzinako Odolaren Nobletza"),
          text: e(
            "Siglos antes de que Aethelgard colocara su primera piedra angular, las Agujas de Obsidiana ya albergaban a la corte de los no-muertos. Carmilla gobernaba con una crueldad exquisita, vestida con sedas teñidas en la sangre de doncellas y deleitándose en banquetes donde el vino era sustituido por la esencia vital de príncipes cautivos. Cuando la Corona de Ceniza fue forjada, su poder repelió a los vampiros a las simas más profundas de la tierra, confinándola a un letargo de piedra y tinieblas.",
            "Centuries before Aethelgard laid its first cornerstone, the Obsidian Spires already housed the court of the undead. Carmilla ruled with exquisite cruelty, cloaked in silks steeped in virgin blood and presiding over banquets where wine was supplanted by the vital essence of captured princes. When the Crown of Ash was first forged, its sacred authority drove vampires into the deepest trenches of the earth, sealing her into centuries of stony hibernation.",
            "Aethelgard sortu aurretik, Obsidianako dorreek banpiroen gortea hartzen zuten. Carmillak ankerkeriaz gobernatzen zuen, harrapatutako printzeen odolez elikatuz. Koroak sakonera bota zuen lozorrora."
          )
        },
        {
          title: e("El Banquete del Mundo Muerto", "Banquet of the Dying World", "Mundu Hilaren Oturuntza"),
          text: e(
            "La fractura de la Corona rompió los sellos de su cripta. Al emerger y contemplar el reino convertido en ceniza y desolación, Carmilla no sintió horror, sino deleite. Los humanos desesperados eran presas fáciles y sazonadas con el sabor amargo de la agonía. Se mueve por el campo de batalla como un torbellino de terciopelo carmesí y garras afiladas, transformándose en murciélagos y niebla venenosa cada vez que una hoja intenta rozar su pálida piel.",
            "The shattering of the Crown dissolved her prison wards. Emerging into a world of smoking ash and ruin, Carmilla felt no horror, but intoxicating ecstasy. Desperate survivors were easy quarry, seasoned with the exquisite bitter tang of despair. She dances across the battleground as a tempest of crimson velvet and razor talons, dissolving into screeching bats and toxic mist whenever blades threaten her porcelain skin.",
            "Koroaren hausteak bere zigiluak apurtu zituen. Mundu erraustua ikustean gozamena sentitu zuen. Saguzar eta lanbro bihurtzen da bere azala ukitu nahi duen edozein ezpataren aurrean."
          )
        }
      ]
    },
    {
      id: "kaelen",
      t: e("Kaelen, el Bardo del Réquiem", "Kaelen, the Requiem Maestro", "Kaelen, Réquiem Bardoa"),
      quote: e(
        "«La muerte tiene una cadencia precisa; si escuchas con atención el crujido de tus costillas, oirás la nota más hermosa jamás escrita.»",
        "«Death has an exquisite cadence; listen closely to the splintering of your ribs, and you shall hear the sublime note I ever composed.»",
        "«Heriotzak kadentzia zehatza du; zure saihetsen karraska arretaz entzuten baduzu, inoiz idatzitako notarik ederrena entzungo duzu.»"
      ),
      dossier: {
        role: e("Manipulador de Disonancia y Apoyo Sónico", "Dissonance Maestro & Sonic Weaver", "Disonantziaren Maisua"),
        weapon: e("Laúd de Hueso Encordado con Alambre y Almas", "Bone Lute Strung with Wire & Screaming Souls", "Hezurrezko Laute Kordatua"),
        origin: e("Teatro Imperial de la Corte de Oro", "Imperial Opera House of the Gold Court", "Urrezko Gorteko Antzokia"),
        resource: e("Acordes de Discordia (Efectos Modales)", "Dissonant Chords (Modal Effects)", "Discordia Akordeak")
      },
      sections: [
        {
          title: e("El Compositor del Apocalipsis", "The Composer of the End", "Apokalipsiaren Konpositorea"),
          text: e(
            "Kaelen fue el prodigio musical más venerado de Gravecrown, capaz de hacer llorar a emperadores con una sola sonata. La noche en que el cielo se tiñó de negro y la ceniza ardió sobre la capital, Kaelen se encontraba en el balcón del Gran Teatro dirigiendo su obra maestra. Mientras la orquesta era engullida por las llamas y el público se pisoteaba en las salidas de emergencia, la mente de Kaelen se quebró. En lugar de huir, continuó dirigiendo el concierto del fin del mundo, fascinado por la armonía sublime que surgía de los alaridos humanos y el estruendo de los campanarios colapsando.",
            "Kaelen was Gravecrown's most celebrated musical prodigy, capable of moving hardened emperors to tears with a single movement. The night the sky blackened and fiery ash rained over the capital, Kaelen stood upon the Grand Opera balcony conducting his magnum opus. While his orchestra was swallowed by leaping flames and patrons crushed one another at the exits, Kaelen's mind fractured. Instead of fleeing, he continued conducting the apocalypse, captivated by the horrific harmony of screaming crowds and tumbling bell towers.",
            "Kaelen musikari ohoratua zen. Hiriburua erretzen ari zen bitartean bere burua galdu zuen: ihes egin beharrean, hondamendiaren kontzertua zuzentzen jarraitu zuen, oihuen eta erortzen ziren dorreen harmonian murgilduz."
          )
        },
        {
          title: e("El Laúd de Almas", "The Lute of Wailing Souls", "Arimen Lautea"),
          text: e(
            "Recuperó huesos de los violinistas muertos para reconstruir la caja de resonancia de su laúd y enhebró el mástil con hilos de piano y los lamentos atrapados de los difuntos. Al rasgar sus cuerdas, no produce música ordinaria: emite frecuencias subsónicas y disonancias arcanas que revientan los vasos sanguíneos de sus enemigos, inducen parálisis cerebral instantánea o insuflan en sus aliados un trance homicida que anula el dolor.",
            "He scavenged bones from fallen violinists to rebuild his instrument's soundbox and strung the neck with piano wire and the trapped wails of deceased choirboys. Strumming its cords yields no mortal music: it unleashes subsonic frequencies and eldritch discord that burst enemy blood vessels, induce instant neural paralysis, or plunge allies into an ecstatic homicidal frenzy impervious to agony.",
            "Hildako biolin-jotzaileen hezurrak bildu zituen bere musika-tresna egiteko. Bere sokak jotzean, etsaien odol-hodiak lehertzen dituzten maiztasun arkanoak sortzen ditu."
          )
        }
      ]
    },
    {
      id: "malakor",
      t: e("Malakor, el Brujo del Abismo", "Malakor, the Void Warlock", "Malakor, Amildegiko Brujua"),
      quote: e(
        "«Buscáis coronas de metal en un reino podrido, mientras las estrellas allá afuera devoran soles enteros sin pestañear.»",
        "«You grovel for rusted iron crowns upon a rotting hill, while cosmic titans beyond the stars swallow entire suns without blinking.»",
        "«Burdinezko koroak bilatzen dituzue erresuma ustel batean, kanpoko izarrek eguzki osoak begirik kliskatu gabe irensten dituzten bitartean.»"
      ),
      dossier: {
        role: e("Brujo de Fuego Sombrío y Cosecha de Almas", "Shadowflame Warlock & Soul Harvester", "Hutsaren Sua eta Arimen Biltzailea"),
        weapon: e("Cadenas Arcanas y Ojo del Vacío", "Void Chains & Eldritch Eye Oculus", "Hutsaren Begia eta Kateak"),
        origin: e("Observatorio de las Torres Prohibidas", "Observatory of the Forbidden Spires", "Dorre Debekatuen Behatokia"),
        resource: e("Almas Cosechadas (Deflagración y Quemadura)", "Harvested Souls (Deflagration & Soulburn)", "Bildutako Arimak")
      },
      sections: [
        {
          title: e("El Ojo Arrancado al Conocimiento", "The Eye Torn for Forbidden Truth", "Egia Debekatuari Kendutako Begia"),
          text: e(
            "En las bibliotecas selladas de Aethelgard, Malakor era un sabio respetado hasta que descubrió que la Corona de Ceniza no era un artefacto divino, sino un fragmento caído de una entidad titánica que mora en el espacio negro entre las constelaciones. Obsesionado con contactar con dicha inteligencia, utilizó una daga de obsidiana para arrancarse el ojo derecho en un ritual solitario, incrustando en la cuenca vacía un orbe de cristal abisal. A través de esa lente cósmica contempló verdades que derritieron su cordura y le otorgaron el dominio de las llamas oscuras.",
            "Within the sealed archives of Aethelgard, Malakor was a respected scholar until deciphering ancient texts proving the Crown of Ash was no divine gift, but a broken scale shed by an eldritch entity lurking in the void between stars. Consumed by obsession to commune with this titan, he carved out his own right eye with an obsidian blade, embedding a glass oculus of void crystal into the empty socket. Through this cosmic lens he beheld revelations that dissolved his mortal sanity and granted him dominion over dark flame.",
            "Malakor jakintsu bat zen, Koroa kosmostik eroritako izaki baten zatia zela deskubritu zuen arte. Berarekin hitz egiteko obsesioz, bere eskuin begia erauzi eta beirazko orbe bat sartu zuen, su beltzaren boterea lortuz."
          )
        },
        {
          title: e("El Coleccionista de Esencias", "The Harvester of Essences", "Esentzien Biltzailea"),
          text: e(
            "El cuerpo de Malakor está vendado y sujeto por cadenas rúnicas para evitar que el fuego frío que arde en sus pulmones lo desintegre. En combate, proyecta rayos de antimateria y extrae los espectros de quienes caen ante él, almacenando sus almas para desatar tormentas de quemadura que consumen la armadura y la carne de los enemigos más imponentes.",
            "Malakor's flesh is bound with heavy runic chains to prevent the freezing black fire raging in his chest from disintegrating his ribs. In battle, he channels beams of antimatter and extracts the shrieking souls of those who fall before him, hoarding their essence to unleash devastating firestorms that reduce heavy armor and bone to smoking cinders.",
            "Bere gorputza kateez lotuta dago su hotzak desegin ez dezan. Hildakoen arimak biltzen ditu ekaitz beltzak sortzeko eta etsaien armadurak errautsetan desegiteko."
          )
        }
      ]
    },
    {
      id: "roland",
      t: e("Roland, el Cruzado Inquebrantable", "Roland, the Unbroken Crusader", "Roland, Gurutzatu Etsigaitza"),
      quote: e(
        "«Que la ceniza cubra mi yelmo y que la carne se pudra bajo mi cota de malla. Mientras pueda levantar este mandoble, ningún demonio pasará.»",
        "«Let ash cover my helm and flesh rot beneath iron mail. While I can raise this greatsword, no abomination shall cross this threshold.»",
        "«Estal dezala errautsak nire kaskoa eta uste dadila haragia nire sarearen azpian. Ezpata hau altxa dezakedan bitartean, deabru bakar batek ere ez du muga hau gaindituko.»"
      ),
      dossier: {
        role: e("Paladín de Vanguardia y Juicio Divino", "Vanguard Crusader & Divine Smite", "Abangoardiako Gurutzatua"),
        weapon: e("Mandoble del Sagrado Sepulcro y Relicario", "Greatsword of the Holy Sepulcher & Reliquary", "Hilobi Sakratuko Ezpata Handia"),
        origin: e("Orden de los Caballeros del Sepulcro Eterno", "Order of the Eternal Sepulcher Knights", "Betiko Hilobiko Zaldunak"),
        resource: e("Celo Santo (Golpe Purificador y Escudo)", "Holy Zeal (Cleansing Smite & Bulwark)", "Zelo Santua (Kolpe Garbitzailea)")
      },
      sections: [
        {
          title: e("El Último Guardián de la Cruz Carmesí", "Last Knight of the Crimson Cross", "Gurutze Gorriminaren Azken Zaindaria"),
          text: e(
            "Roland pertenecía a la orden militar más rigurosa del imperio: los Caballeros del Sepulcro Eterno. Hombres y mujeres que tomaban los votos de silencio, pobreza y guerra permanente. Cuando los muertos se levantaron tras la caída de la Corona, la orden entera marchó hacia la Gran Cripta para sellar las catacumbas desde adentro. Durante siete meses lucharon en la oscuridad total sin víveres ni relevos. Uno a uno, sus trescientos hermanos de armas sucumbieron a las heridas o a la locura. Roland fue el último en pie; utilizando los huesos de sus camaradas como barricadas, mantuvo la puerta sellada hasta que los muertos dejaron de empujar.",
            "Roland belonged to the empire's most austere military brotherhood: the Knights of the Eternal Sepulcher. Men and women sworn to lifelong vows of silence, poverty, and unending war. When the dead rose following the Crown's shattering, the entire order marched into the Great Crypt to seal the subterranean gates from within. For seven months they waged war in total darkness without bread or relief. One by one, his three hundred battle-brothers perished from gangrene, exhaustion, or madness. Roland stood alone at the last; using the bones of his fallen brothers as barricades, he held the doors until the scratching ceased.",
            "Roland Betiko Hilobiko Zaldunen parte zen. Koroa hautsi zenean, orden osoak katakonbak barrutik zigilatu zituen. Zazpi hilabetez borrokatu zuten ilunpean. Bere hirurehun anaiak hil ziren arte; Roland izan zen zutik geratu zen azkena, kideen hezurrekin ateak eutsiz."
          )
        },
        {
          title: e("La Armadura que Jamás se Despoja", "The Armor Never Removed", "Inoiz Kentzen Ez Den Armadura"),
          text: e(
            "Roland juró ante los despojos de su Gran Maestre no quitarse jamás la armadura de placas ni limpiar la sangre de su tabardo hasta que cada abominación engendrada por la ceniza sea purificada con fuego y acero. Su armadura es ahora una segunda piel herrumbrosa; sus articulaciones rechinan como engranajes de catedral, pero sus brazos aún blanden el colosal mandoble consagrado con una fuerza capaz de partir a un jinete y a su montura de un solo tajo. Roland no teme a la muerte porque, en el fondo de su corazón de hierro, sabe que ya murió aquel día en las catacumbas.",
            "Roland swore upon his Grand Master's remains never to doff his plate harness nor wash the dried blood from his heraldic tabard until every abomination spawned by the ash is cleansed by iron and fire. His armor is now a second skin of rust and scarred steel; his joints screech like cathedral clockwork, yet his arms swing the consecrated greatsword with devastating momentum capable of cleaving rider and warhorse in a single arc. Roland fears neither wound nor grave, for within his iron heart, he knows he already died on that dark day in the deep crypts.",
            "Rolandek zin egin zuen ez zuela inoiz bere armadura kenduko munstro guztiak garbitu arte. Bere armadura bigarren azala da; ez du heriotzaren beldurrik, badakielako egunean katakonbetan dagoeneko hil zela."
          )
        }
      ]
    }
  ],
  beasts: [
    {
      id: "raider",
      t: e("Saqueador de Ceniza", "Ash Raider", "Errauts-lapurra"),
      quote: e(
        "«No me mires así, forastero. En este páramo, o vendes el metal de los muertos o eres tú el metal que otro venderá mañana.»",
        "«Spare me your glare, wanderer. In these wastes, you either scavenge dead men's iron or you become the iron someone else sells tomorrow.»",
        "«Ez nazazu horrela begiratu. Basamortu honetan, hildakoen metala saltzen duzu edo bihar beste batek salduko duen metala zara.»"
      ),
      dossier: {
        danger: e("Amenaza Común · Bando de Carroñeros", "Common Threat · Scavenger Warband", "Mehatxu Arrunt · Harraparien Taldea"),
        tactics: e("Ataques por la espalda, emboscadas de filo oxidado", "Flanking strikes, rusted cleaver ambushes", "Bizkarrezko erasoak, segadak"),
        loot: e("Monedas de bronce carcomido y astillas de hierro", "Tarnished bronze coins and iron scrap", "Brontzezko txanponak eta burdina")
      },
      sections: [
        {
          title: e("Desertores de la Guardia Imperial", "Deserters of the Imperial Cohorts", "Guardia Inperialaren Desertoreak"),
          text: e(
            "La mayoría de los saqueadores fueron antaño soldados de línea, campesinos o sirvientes de los palacios que huyeron cuando las llamas alcanzaron la capital. Al agotarse las reservas de grano, recurrieron a saquear tumbas, desenterrar mausoleos y matar a cualquier viajero solitario por un mendrugo de pan podrido o una hebilla de plata. Visten harapos reforzados con cuero cuarteado y empuñan hachas melladas y machetes de despiece.",
            "Most raiders were once line soldiers, serfs, or palace servants who fled when the firestorms engulfed the capital. When granaries dried up, they turned to looting burial crypts, ransacking noble tombs, and butchering solitary travelers for a crust of moldy hardtack or a silver belt clasp. They wrap themselves in rags reinforced with cracked boiled leather and wield notched woodcutter axes and butchering cleavers.",
            "Lapur gehienak hiriburuko soldadu ohiak eta nekazariak dira. Janaria amaitzean, hilobiak arpilatzen hasi ziren eta bidaiariak hiltzen ogi zati bategatik. Larruz estalitako trapuak eta aizkora herdoilduak daramatzate."
          )
        }
      ]
    },
    {
      id: "cinder-hound",
      t: e("Sabueso de Ceniza", "Cinder Hound", "Errauts-txakurra"),
      quote: e(
        "«No ladran. Solo oyes el crujido de las ascuas en su garganta medio segundo antes de que sus colmillos cierren sobre tu tendón de Aquiles.»",
        "«They never bark. You hear only the sizzle of coals in their throats half a breath before fangs snap shut around your Achilles tendon.»",
        "«Ez dute zaunkarik egiten. Beren eztarrian txingarren hotsa entzuten duzu bakarrik beren letaginek orpazurda ixten duten unean.»"
      ),
      dossier: {
        danger: e("Amenaza Veloz · Caza en Jauría", "Fast Threat · Pack Hunters", "Mehatxu Azkarra · Talde Ehiztariak"),
        tactics: e("Mordedura con quemadura de ascuas y salto", "Cinder-bite burns and leap flanking", "Hozkada errekin eta jauziak"),
        loot: e("Colmillos incandescentes y piel curtida", "Smoldering fangs and scorched pelt", "Letagin goriak eta larru kiskalia")
      },
      sections: [
        {
          title: e("Los Canes Mutados del Sepulcro", "Mutated Hounds of the Sepulcher", "Hilobiko Txakur Mutatuak"),
          text: e(
            "Antiguos lebreles de caza de la nobleza que sobrevivieron alimentándose de carroña calcinada y bebiendo agua saturada de azufre y ceniza. A lo largo de las décadas, la mutación ha transformado sus órganos internos en un horno orgánico: sus ojos arden con fósforo pálido y de sus hocicos gotean chispas y baba incendiaria. Cazan en manadas de cuatro o cinco miembros, flanqueando a su presa con saltos zigzagueantes.",
            "Once prized hunting wolfhounds of the nobility that survived by gnawing charred carrion and drinking sulfur-choked ash pools. Over decades, unnatural mutation turned their entrails into organic kilns: their eyes burn with sickly pale phosphorus, and glowing embers drip from their slavering jowls. They hunt in packs of four or five, encircling quarry with erratic, bounding leaps.",
            "Nobleen ehiza-txakurrak ziren, errautsetan mutatu direnak. Beren erraiak labe organikoak dira: begiek distira egiten dute eta ahoetatik txingarrak tantaka erortzen zaizkie. Lau edo bosteko taldeetan ehizatzen dute."
          )
        }
      ]
    },
    {
      id: "specter",
      t: e("Espectro de la Cripta", "Crypt Specter", "Kriptako Mamua"),
      quote: e(
        "«Recuerdan el frío de la espada atravesando su pecho... y están desesperados por compartir ese mismo frío con cualquiera que tenga sangre caliente.»",
        "«They recall the icy agony of steel sliding between their ribs... and burn with desperate hunger to share that same cold with any living soul.»",
        "«Ezpatak bularra zeharkatu zieneko hotza gogoratzen dute... eta hotz hori bera partekatzeko irrikaz daude odol beroa duen edonorekin.»"
      ),
      dossier: {
        danger: e("Amenaza Arcana · Intangibilidad Parcial", "Arcane Threat · Partial Intangibility", "Mehatxu Arkanoa · Ezin Ukigarria"),
        tactics: e("Alarido de aturdimiento y toque entumecedor", "Stunning wail and numbing grasp", "Zorabiatzeko garrasia eta izozketa"),
        loot: e("Ectoplasma cristalizado y gemas funerarias", "Crystalline ectoplasm and funerary gems", "Ektoplasma eta hileta-harriak")
      },
      sections: [
        {
          title: e("Las Almas Privadas de Sepultura", "Souls Denied the Grave", "Hilobirik Gabeko Arimak"),
          text: e(
            "Cuando la Corona de Ceniza se quebró, las oraciones fúnebres perdieron su eficacia litúrgica. Aquellos que fallecieron con terror o rencor quedaron atrapados en la niebla que baña las catacumbas. Los espectros flotan sobre el suelo rocoso como siluetas deshilachadas de sombra y sudarios rasgados. Sus ataques no cortan la carne exterior, sino que hielan la sangre y detienen el ritmo del corazón mediante frío sepulcral.",
            "When the Crown of Ash fractured, funeral liturgies lost their binding power. Those who died in screaming terror or venomous spite were caught in the freezing mists flooding the catacombs. Specters drift above the stone floors as tattered silhouettes of mist and shredded grave-shrouds. Their attacks inflict no mere flesh wound; they chill arterial blood to slush and still the heart through grave-frost.",
            "Koroa haustean otoitzek indarra galdu zuten. Beldurrez hildakoak katakonbetako lainoan harrapatuta geratu ziren. Beren erasoek odola izoztu eta bihotza geldiarazten dute."
          )
        }
      ]
    },
    {
      id: "tomb-guardian",
      t: e("Guardián de Tumba", "Tomb Guardian", "Hilobi-zaindaria"),
      quote: e(
        "«Fueron esculpidos para resistir el paso de las eras; vuestras espadas son ramitas secas contra su losa de granito.»",
        "«They were carved to outlast the crumbling of stars; your mortal blades are brittle twigs against their granite slabs.»",
        "«Aroen igarotzeari aurre egiteko zizelkatu ziren; zuen ezpatak adar lehorrak dira beren granitozko harriaren aurka.»"
      ),
      dossier: {
        danger: e("Amenaza Pesada · Blindaje Pétreo Impenetrable", "Heavy Threat · Impenetrable Stone Plate", "Mehatxu Astuna · Harrizko Koraza"),
        tactics: e("Bloqueo de losa masiva y golpe de mazo de piedra", "Slab bulwark defense and crushing granite blow", "Babes masiboa eta harrizko kolpea"),
        loot: e("Piedra rúnica consagrada y placas de bronce antiguo", "Sanctified runestone and ancient bronze filings", "Harri errunikoa eta antzinako brontzea")
      },
      sections: [
        {
          title: e("Colosos de Granito y Sangre Imperial", "Colossi of Granite and Royal Blood", "Granito eta Odol Inperialeko Kolosoak"),
          text: e(
            "Efigies monumentales talladas por los maestros masones de la primera dinastía para custodiar los sarcófagos de los reyes santos. En su interior albergan un núcleo de piedra rúnica activado por juramentos milenarios sellados con sangre real. No conocen el miedo, la fatiga ni la compasión. Su escudo es una losa de sepulcro que pesa media tonelada, capaz de resistir proyectiles balísticos y aplastar a un caballero armado con la facilidad con que se pisa un fruto podrido.",
            "Monumental effigies sculpted by master masons of the first dynasty to watch over holy king sarcophagi. Within their hollow stone chests pulses a runic core bound by thousand-year oaths sealed with monarchic blood. They know neither fatigue, dread, nor mercy. Their shield is a tombstone weighing half a ton, capable of deflecting ballista bolts and flattening an armored knight as easily as overripe fruit.",
            "Erregeen hilobiak zaintzeko zizelkatutako irudi erraldoiak. Ez dute beldurrik ez nekerik ezagutzen. Beren armarriak tona erdi pisatzen du eta zaldun armatu bat zapaldu dezake."
          )
        }
      ]
    },
    {
      id: "plague-cultist",
      t: e("Cultista de la Ruina", "Ruin Cultist", "Hondamen-kultista"),
      quote: e(
        "«La carne es una enfermedad efímera; la ceniza es la perfección final. Deja que rocíe tus heridas con bendición negra.»",
        "«Flesh is a fleeting plague; ash is ultimate perfection. Yield, and let me bathe your gashes in dark benediction.»",
        "«Haragia gaixotasun iragankorra da; errautsa azken perfekzioa da. Utzidazu zure zauriak bedeinkazio beltzez bustitzen.»"
      ),
      dossier: {
        danger: e("Amenaza Corrosiva · Ruina de Escudo", "Corrosive Threat · Shield Rot", "Mehatxu Korrosiboa · Babesaren Hondamena"),
        tactics: e("Infección de Ruina y debilitamiento continuo", "Ruin afflictions and continuous attrition", "Hondamen infekzioa eta ahultzea"),
        loot: e("Incienso herético y páginas del códice prohibido", "Heretical incense and forbidden codex leaves", "Inzentsu heretikoa eta orri debekatuak")
      },
      sections: [
        {
          title: e("La Herejía de los Enmascarados de Hollín", "Heresy of the Soot-Masked", "Kedar-Mozorrodunen Herejia"),
          text: e(
            "Fanáticos desquiciados que veneran la Ceniza como la encarnación visible de un dios primordial del silencio. Se cortan los labios y cubren sus rostros con máscaras de hierro forjado que representan calaveras coronadas. En sus calderos portátiles hierven mezclas de hiel de espectro y ceniza concentrada que arrojan a los ojos de los guerreros, disolviendo escudos mágicos y haciendo que cualquier armadura se fracture al menor roce.",
            "Deranged zealots who revere the Ash as the visible manifestation of a primordial deity of absolute silence. They sever their lips and weld horned iron masks depicting crowned skulls over their visages. In portable censers they boil concoctions of specter bile and concentrated cinder-dust, flinging it into warriors' eyes to rot arcane barriers and cause tempered armor to crumble like dry chalk.",
            "Isiltasunaren jainkoa gurtzen duten fanatikoak. Burdinazko maskarak daramatzate eta errauts-nahasketak botatzen dituzte begietara armadurak desegiteko."
          )
        }
      ]
    },
    {
      id: "fearsome",
      t: e("Terror Encadenado", "Chained Terror", "Katebegi Izugarria"),
      quote: e(
        "«Los eslabones de hierro fueron forjados para contener a un titán; cuando el olor a sangre los corroe, no hay dios que pueda salvarte.»",
        "«The iron links were forged to bind a titan; when the scent of spilled blood rusts them through, no god can save you.»",
        "«Burdinezko katebegiak titan bat eusteko forjatu ziren; odol usainak herdoiltzen dituenean, ez dago salbatuko zaituen jainkorik.»"
      ),
      dossier: {
        danger: e("Amenaza Élite · Bestia de Guerra Asedio", "Elite Threat · Siege Warbeast", "Eliteko Mehatxua · Setio-piztia"),
        tactics: e("Embestida furiosa, aumento de daño por sangre", "Enraged charge, blood-triggered damage scaling", "Eraso amorratua eta kalte handia"),
        loot: e("Reliquias Legendarias y enormes cofres de oro", "Legendary Relics and massive gold hoards", "Kondairazko Erlikiak eta urrea")
      },
      sections: [
        {
          title: e("El Arma Secreta del Último Asedio", "The Secret Weapon of the Final Siege", "Azken Setioko Arma Sekretua"),
          text: e(
            "Durante las guerras civiles que precedieron a la fractura, los ingenieros reales capturaron abominaciones de las fosas subterráneas y las sometieron a cirugía arcana, insertando grilletes de acero templado y espinas de hierro directamente en sus tendones. El Terror Encadenado fue encerrado en catacumbas reforzadas como último recurso defensivo. Con el colapso del reino, la bestia devoró a sus carceleros y aguarda en la penumbra. Derrotar a este titán otorga reliquias de poder inimaginable, pero pocos sobreviven a sus embestidas colosales.",
            "During the civil wars preceding the fall, royal engineers captured abominations from subterranean rifts and subjected them to torturous arcane surgery, welding tempered iron shackles directly into their muscle tendons. The Chained Terror was locked within deep reinforced vaults as a desperate weapon of last resort. With the kingdom's fall, the brute devoured its keepers and slumbers in gloom. Slaying this behemoth yields relics of immense power, but few live through its earth-shattering charges.",
            "Lurpeko zuloetatik ateratako abominazioa, katez josia. Koroa erortzean zaindariak jan zituen eta ilunpean itxaroten du. Garaitzen duenak erlikia paregabeak lortuko ditu."
          )
        }
      ]
    },
    {
      id: "ash-tyrant",
      t: e("Tirano de Ceniza", "Ash Tyrant", "Errauts-tiranoa"),
      quote: e(
        "«Este suelo no pertenece a los reyes que huyeron ni a los mendigos que lloran. Pertenece al hierro que todavía tiene fuerza para cortar.»",
        "«This dirt belongs neither to kings who fled nor beggars who whimper. It belongs to the iron still sharp enough to butcher.»",
        "«Lur hau ez da ihes egin zuten erregeena, ezta negar egiten duten eskaleena ere. Oraindik mozteko indarra duen burdinarena da.»"
      ),
      dossier: {
        danger: e("Jefe de Zona: Campos de Ceniza", "Zone Boss: Ashfields", "Eremuko Buruzagia: Errauts-soroak"),
        tactics: e("Comando de saqueadores, mandoble ardiente", "Raider commander volleys, blazing greatsword cleave", "Lapurren agintea eta ezpata sutsua"),
        loot: e("Fragmento de la Corona de Ceniza (I) y 200 de oro", "Crown of Ash Shard (I) & 200 Gold", "Koroaren Zatia (I) eta 200 urre")
      },
      sections: [
        {
          title: e("El Señor de la Guerra de los Campos Grises", "Warlord of the Gray Plains", "Lautada Grisen Gerra-Jauna"),
          text: e(
            "Antiguo general de brigada que se negó a morir cuando la capital sucumbió. Reuniendo a los desertores más brutales bajo su estandarte de un puño envuelto en fuego negro, conquistó los Campos de Ceniza a sangre y fuego. Su armadura completa está forjada con los restos de las campanas de las catedrales caídas, y en combate blande una espada colosal de dos manos imbuida en fuego fatuo que no se apaga ni con la lluvia.",
            "A former field general who refused to perish when the capital drowned in flame. Gathering the most savage deserters beneath his banner of a black-flamed fist, he forged dominion over the Ashfields through sheer bloodletting. His plate armor is hammered from the bronze bells of fallen cathedrals, and in combat he swings a colossal two-handed greatsword wreathed in persistent witchfire.",
            "Hiriburua erori zenean hiltzeari uko egin zion jenerala. Desertore basatiak bildu eta Errauts-soroak konkistatu zituen. Katedraletako kanpaiekin egindako armadura eta suzko ezpata handia daramatza."
          )
        }
      ]
    },
    {
      id: "crypt-queen",
      t: e("Reina de la Cripta", "Crypt Queen", "Kriptako Erregina"),
      quote: e(
        "«Creéis que la muerte es el final de la soberanía. Pobres niños de carne... aquí abajo, mi reinado dura para siempre.»",
        "«You fools imagine death marks the end of sovereign rule. Pitiful children of clay... down here, my reign endures forever.»",
        "«Heriotza subiranotasunaren amaiera dela uste duzue. Haragizko ume gajoak... hemen behean, nire erregealdiak betiko dirau.»"
      ),
      dossier: {
        danger: e("Jefe de Zona: La Cripta Olvidada", "Zone Boss: The Forgotten Crypt", "Eremuko Buruzagia: Kripta Ahaztua"),
        tactics: e("Invocación espectral masiva, frío absoluto", "Mass specter summoning, absolute frost drain", "Mamu deitzea eta hotz absolutua"),
        loot: e("Fragmento de la Corona de Ceniza (II) y Reliquia Regia", "Crown of Ash Shard (II) & Regalia Relic", "Koroaren Zatia (II) eta Errege Erlikia")
      },
      sections: [
        {
          title: e("La Primera Monarca del Reino", "First Monarch of the Kingdom", "Erreinuko Lehen Erregina"),
          text: e(
            "La soberana fundadora que unificó las tribus del este hace mil años. Su sarcófago de mármol negro fue depositado en el corazón más profundo de la tierra para que su sabiduría bendijera las raíces del imperio. Sin embargo, la fractura de la Corona profanó su descanso eterno, despertándola como una reina espectral cuya voz resuena como miles de susurros glaciares. Todos los espectros y guardianes de las catacumbas se postran ante ella.",
            "The founding queen who united eastern tribes a millennium ago. Her obsidian sarcophagus was sealed within the earth's deepest stratum so her wisdom might sanctify the empire's roots. Yet the Crown's shattering defiled her repose, rousing her as a sovereign phantom whose voice echoes like ten thousand freezing whispers. Every specter and animated effigy in the labyrinthine catacombs bows to her cold decree.",
            "Duela mila urte tribuak batu zituen lehen erregina. Bere sarkofago beltza lurpean zegoen, baina Koroaren hausteak bere atsedena profanatu eta erregina espektral gisa esnatu zuen."
          )
        }
      ]
    },
    {
      id: "crown-wraith",
      t: e("Espectro de la Corona", "Crown Wraith", "Koroaren Mamua"),
      quote: e(
        "«Yo soy la memoria del mundo que quemasteis; y seré el fuego que consuma la última ceniza de vuestros huesos.»",
        "«I am the living memory of the world you burned; and I shall be the final flame consuming the ash of your bones.»",
        "«Zuek erretako munduaren oroimena naiz ni; eta zuen hezurren azken errautsa kontsumituko duen sua izango naiz.»"
      ),
      dossier: {
        danger: e("Jefe Final: Ciudadela Calcinada", "Final Boss: Scorched Citadel", "Azken Buruzagia: Zitadela Kiskalia"),
        tactics: e("Distorsión temporal, mareas de ceniza y aniquilación", "Temporal warping, ash storm tides, total annihilation", "Denbora distortsioa eta errauts-ekaitza"),
        loot: e("La Restauración de Gravecrown o el Vacío Eterno", "The Restoration of Gravecrown or Eternal Void", "Gravecrown-en Berrezartzea edo Hutsa")
      },
      sections: [
        {
          title: e("La Entidad Nacida de la Fractura", "The Entity Born of the Shattering", "Hautsitik Jaiotako Izakia"),
          text: e(
            "El Espectro de la Corona no es un muerto viviente ni un demonio: es la conciencia fracturada del artefacto mismo, amalgamada con las agonías de los millones de seres que perecieron durante los siete años de ceniza. Flota sobre el Trono Calcinado de la Ciudadela como un vórtice de luz dorada corrupta y sombras afiladas. En combate manipula el tiempo, revive ecos de ataques pasados y desata tormentas que borran la existencia misma de sus oponentes.",
            "The Crown Wraith is neither zombie nor demon: it is the shattered consciousness of the artifact itself, fused with the collected agony of millions who perished through seven winters of ash. It hovers above the Scorched Throne as an incandescent vortex of corrupted gold and razor shadows. In battle it bends time, manifests echoes of past slashes, and summons storms that erase the very reality of its challengers.",
            "Ez da hildako bat, Koroaren beraren kontzientzia hautsia baizik, zazpi urteko errautsetan hildakoen oinazeekin bat egina. Denbora manipulatzen du eta etsaiak deuseztatzeko ekaitzak sortzen ditu."
          )
        }
      ]
    }
  ],
  zones: [
    {
      id: "ashfields",
      t: e("Campos de Ceniza", "Ashfields", "Errauts-soroak"),
      quote: e(
        "«El viento aquí huele a metal quemado y carne seca. No bebas del agua que encuentres en los charcos, a menos que quieras toser sangre antes del anochecer.»",
        "«The wind here reeks of scorched steel and desiccated flesh. Drink not from the pools you stumble upon, lest you cough up blood before dusk.»",
        "«Hemen haizeak erretako metalaren eta haragi lehorraren usaina du. Ez edan putzuetako uretatik, ilundu aurretik odola eztul egin nahi ez baduzu.»"
      ),
      dossier: {
        climate: e("Llanura de Ceniza Volcánica y Fuego Fatuo", "Volcanic Ash Steppe & Witchfire", "Errauts Lautada eta Su Fatuak"),
        rulers: e("Bandas del Tirano de Ceniza", "Warbands of the Ash Tyrant", "Errauts-tiranoaren Taldeak"),
        peril: e("Tormentas de ceniza ardiente y emboscadas", "Blazing cinder-storms and roadside ambushes", "Errauts-ekaitzak eta bideko segadak")
      },
      sections: [
        {
          title: e("El Paisaje del Desastre", "The Landscape of Calamity", "Hondamenaren Paisaia"),
          text: e(
            "Los Campos de Ceniza ocupan lo que antaño fueron los valles agrícolas más fértiles del reino. Hoy son una inmensidad gris salpicada por esqueletos de molinos de viento quemados, carromatos abandonados y montículos de huesos blanqueados por el viento. Las tormentas de polvo azufrado son frecuentes y pueden cegar a un batallón entero en cuestión de minutos.",
            "The Ashfields occupy what once were the realm's most fertile granaries. Today they stretch as a gray wasteland punctuated by the charred skeletons of windmills, overturned wagons, and cairns of wind-bleached bones. Sulfur dust squalls occur without warning, blinding entire caravans within heartbeats.",
            "Antzina erreinuko haranik oparoenak zirenak gaur egun lautada gris amaigabeak dira. Errotetako hezurdura kiskaliak eta haizeak zuritutako hezurrak daude nonahi."
          )
        }
      ]
    },
    {
      id: "crypt",
      t: e("La Cripta Olvidada", "The Forgotten Crypt", "Kripta Ahaztua"),
      quote: e(
        "«Las velas funerarias llevan cuarenta años encendidas sin que nadie les ponga cera nueva. No preguntes qué alimenta esa llama.»",
        "«The burial candles have burned for forty winters without mortal hands adding tallow. Inquire not what feeds that flame.»",
        "«Hileta-kandeletan berrogei urte daramatzate piztuta inork ezti berririk jarri gabe. Ez galdetu zerk elikatzen duen sugar hori.»"
      ),
      dossier: {
        climate: e("Galerías Subterráneas de Mármol Glacial", "Subterranean Galleries of Glacial Marble", "Marmol Glaziarrezko Lurpeko Galeriak"),
        rulers: e("Corte Espectral de la Primera Reina", "Spectral Court of the First Queen", "Lehen Erreginaren Gorte Espektrala"),
        peril: e("Frío entumecedor, trampas arcanas y espectros", "Numbing frost, arcane deadfalls, and phantoms", "Hotz izoztatzailea, tranpa arkanoak")
      },
      sections: [
        {
          title: e("Las Entrañas de la Capital Caída", "The Underbelly of the Fallen Capital", "Hiriburu Erordiaren Hesteak"),
          text: e(
            "Excavadas a lo largo de diez siglos bajo la Ciudadela imperial, las catacumbas albergan más de treinta niveles de mausoleos reales, salas de embalsamamiento y criptas de guerreros santos. El aire aquí abajo es gélido y huele a incienso rancio y piedra mojada. Las losas de los sepulcros están desencajadas y de las hendiduras brota un vapor azulado que hiela las extremidades de los intrusos.",
            "Excavated across ten centuries beneath the imperial Citadel, the catacombs house more than thirty subterranean tiers of royal mausoleums, embalming vaults, and knightly crypts. The air below is glacial, smelling of rancid myrrh and damp stone. Sarcophagus lids are shoved askew, and from dark crevices drifts a pale blue vapor that numbs mortal limbs.",
            "Zitadelaren azpian hamar mendetan zehar zulatutako katakonbak dira. Airea hotza da eta lurrun urdinxkak intrusoen gorputzak izozten ditu."
          )
        }
      ]
    },
    {
      id: "citadel",
      t: e("Ciudadela Calcinada", "Scorched Citadel", "Zitadela Kiskalia"),
      quote: e(
        "«El trono sigue allí arriba, esperando a alguien con suficiente sangre en las venas para pagar el precio de la corona.»",
        "«The throne remains aloft, awaiting one with enough blood in their veins to pay the Crown's terrible price.»",
        "«Tronuak hor goian jarraitzen du, zainetan koroaren prezioa ordaintzeko adina odol duen norbaiten zain.»"
      ),
      dossier: {
        climate: e("Fortaleza de Obsidiana e Incandescencia Perpetua", "Obsidian Fortress & Perpetual Incandescence", "Obsidiana Gotorlekua eta Sugar Iraunkorrak"),
        rulers: e("El Espectro de la Corona de Ceniza", "The Wraith of the Crown of Ash", "Errautsen Koroaren Mamua"),
        peril: e("Colapso estructural, fuego de vacío y guardianes", "Structural collapse, void-flame, and titan sentinels", "Hutsaren sua eta titan zaindariak")
      },
      sections: [
        {
          title: e("El Corazón del Apocalipsis", "The Epicenter of the Apocalypse", "Apokalipsiaren Bihotza"),
          text: e(
            "El epicentro de la catástrofe donde la Corona estalló. Las torres de basalto negro están retorcidas como dedos quemados que intentan arañar el cielo. Ríos de fuego espectral fluyen por lo que antes eran avenidas de adoquines dorados. En la cúspide de la Gran Torre, la Sala del Trono se eleva sobre el abismo; allí espera el Espectro de la Corona a todo aquel que haya demostrado suficiente determinación para atravesar los horrores del reino.",
            "The ground zero of disaster where the Crown fractured. Spires of black basalt twist toward the heavens like blackened fingers clawing at the sky. Rivers of spectral flame course through what were once gold-cobbled promenades. At the summit of the High Spire, the Throne Room hangs precariously over the abyss; there the Crown Wraith waits for any who possess the ferocious iron resolve to endure the realm's horrors.",
            "Koroa lehertu zen hondamendiaren erdigunea. Basalto beltzezko dorreak zerua urratzen saiatzen diren atzamar kiskaliak bezala daude bihurrituta. Dorre Handiaren tontorrean Tronuaren Aretoa dago amildegiaren gainean; han Koroaren Mamuak zain dago erreinuko izugarrikeriak gainditzeko adinako kemena erakutsi duen edonorentzat."
          )
        }
      ]
    }
  ]
};

Object.values(LORE).flat().forEach((entry) => {
  if (!entry.p && entry.sections && entry.sections.length > 0) {
    entry.p = entry.sections[0].text;
  }
});

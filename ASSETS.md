# Gravecrown · Registro de Assets y Licencias

Este documento registra todas las fuentes y recursos externos incluidos en el proyecto para garantizar su compatibilidad de licencia y trazabilidad.

## 1. Tipografías (Autoalojadas en `/public/assets/fonts/`)

Todas las fuentes del rediseño están autoalojadas en formato `.woff2` (sin dependencias de CDNs en runtime) y se distribuyen bajo la licencia **SIL Open Font License (OFL) 1.1**, que permite su uso comercial, redistribución e inclusión en software.

| Token | Familia | Subsets / Pesos | Licencia | Autor / Fundición | Enlace Oficial |
|---|---|---|---|---|---|
| `--font-display` | **Metal Gothic** | Regular 400, Latin | Free Demo / Nirmana Visual | Sigit Dwipa (Nirmana Visual) | [DaFont](https://www.dafont.com/metal-gothic.font) |
| Fallback Gothic | **UnifrakturCook** | Regular / Bold 700, Latin | OFL 1.1 | J. 'Mach' Wust | [Google Fonts](https://fonts.google.com/specimen/UnifrakturCook) |
| `--font-gothic-alt` | **Pirata One** | Regular 400, Latin + Latin-ext | OFL 1.1 | Rodrigo Fuenzalida, Nicolas Massi | [Google Fonts](https://fonts.google.com/specimen/Pirata+One) |
| Fallback Display | **Grenze Gotisch** | Variable (100–900), Latin + Latin-ext | OFL 1.1 | Renata Polastri, Omnibus-Type | [Google Fonts](https://fonts.google.com/specimen/Grenze+Gotisch) |
| `--font-body` | **IM Fell English** | Regular 400 + Italic 400, Latin | OFL 1.1 | Igino Marini | [Google Fonts](https://fonts.google.com/specimen/IM+Fell+English) |
| `--font-accent` | **Cormorant Garamond** | Regular 400, Italic 400, SemiBold 600, Italic 600, Latin + Latin-ext | OFL 1.1 | Christian Thalmann | [Google Fonts](https://fonts.google.com/specimen/Cormorant+Garamond) |
| `--font-numeric` | **Anton** | Regular 400, Latin + Latin-ext | OFL 1.1 | Vernon Adams | [Google Fonts](https://fonts.google.com/specimen/Anton) |

### Reglas de uso estricto de tipografía
- **UnifrakturCook**: Gótica Fraktur pura medieval para títulos principales, cabeceras y nombres de cartas.
- **IM Fell English**: Solo disponible en regular e itálica. Prohibido `font-weight: bold` sintético (`font-synthesis: none`). El énfasis se realiza mediante cursiva o acento de color.
- **Cormorant Garamond**: Peso mínimo 500–600 en texto de gameplay legible; pesos 300–400 reservados exclusivamente para ornamentos o grandes números serif.
- **Anton**: Reservado exclusivamente para valores numéricos de alto impacto (daño, coste, vida, energía) y etiquetas cortas tipo cartel.

---

## 2. Texturas Procedurales e Iconografía
- **Iconografía**: Cero emojis Unicode. 100% pictogramas vectoriales SVG limpios e integrados.
- **Oil Canvas & Impasto**: Textura de lienzo al óleo generada mediante SVG procedural y filtros acelerados por hardware.

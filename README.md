# Margot Madina

Brand / portfolio site for a double vocation:

- **Events** — planning and production of weddings and gatherings
- **Language** — research into language technology for people with disabilities, plus writing

Static site, no build step. Open `index.html`, or serve it:

    python3 -m http.server 4321

## Structure

    index.html          single page; sections commented in order
    styles/main.css     design tokens at the top, then section by section
    scripts/main.js     scroll reveal, nav, capabilities sync, word fade, clock
    assets/             real imagery + generated placeholders
    images/             source originals (not served — convert into assets/)
    tools/gen-placeholders.mjs

## Page order

    hero        statement + gateway cards [01] Events / [02] Language
    #about      portrait right, scroll-driven word fade
    #events     (Selected Events.) — 5-column grid, bottom-aligned
    #writing    lead-in + posts, each opening its own page in writing/
    #contact    three rows
    footer      one line

## Imagery

Source files live in `images/`. Convert before use — browsers cannot render HEIC:

    sips -s format jpeg -s formatOptions 82 -Z 1800 images/NAME.HEIC --out assets/NAME.jpg

The `assets/*.svg` files are generated placeholders; regenerate with
`node tools/gen-placeholders.mjs`. Replace them with real photography as it arrives.

## Design system

Everything tunable is in `:root` in `styles/main.css` — palette, three font
families, a fluid type scale, gutters, section rhythm, easing. Changing
`--cream`, `--ink` and `--olive` re-skins the whole site.

## Still placeholder

- both social URLs (`instagram.com/`, `linkedin.com/`)
- four of five event photos, and all five venue names
- the three writing entries (titles and bodies are stand-ins)

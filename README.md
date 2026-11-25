# finmarketing

Marketingbibliotheek van Blinqx Verzekering & Hypotheek: gratis en freemium marketingmateriaal, campagnes, klanttools en rekentools voor adviseurs.

- `index.html`: de complete site in één bestand (geen build-step, geen externe API's, geen localStorage).
- `brochure.html`: brochure PortefeuilleSignalen (8 pagina's A4, print naar PDF).
- `bronnen/`: originele aangeleverde bronbestanden.

## Inhoud toevoegen
Items staan in de `ITEMS`-array in `index.html` (campagnes en selecties in `CAMP` en `SEL`). Voeg een object toe met `id`, `cat`, `kind`, `model` (`gratis`, `freemium`, `betaald`, `aanvraag`), `title`, `summary` en `tags`; zoeken en filteren werken daarna automatisch.

## Instellingen
`CONFIG.contactEmail` in `index.html` bepaalt waar vragen en wensen van adviseurs naartoe gaan.

## Publiceren
Bijvoorbeeld via GitHub Pages (Settings → Pages → branch `main`, map `/`).

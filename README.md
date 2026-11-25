# finmarketing

Marketingbibliotheek van Blinqx Verzekering & Hypotheek: gratis en freemium marketingmateriaal, campagnes, klanttools en rekentools voor adviseurs.

**Live:** https://jeroen-o.github.io/finmarketing/

## Wat staat waar
- `index.html`: de complete site in één bestand (geen build-step nodig om te hosten, geen externe API's, geen localStorage; geschikt voor Google Sites-embed).
- `brochure.html`: brochure PortefeuilleSignalen (8 pagina's A4, print naar PDF).
- `toolkit-52/`: Adviseurstoolkit 52+ (toolkit, presentatie en gesprekshulp "Hypotheek straks"), in Blinqx-stijl.
- `bronnen/`: originele aangeleverde bronbestanden.
- `bouw/`: de bronnen waaruit `index.html` en `brochure.html` worden gebouwd.

## Onderdelen van de site
- Catalogus met 8 categorieën, zoeker (met synoniemen en kennisbanktreffers) en filters op model en aanbieder.
- Tools: Verantwoord hypotheekrapport, Aflossingsvrije hypotheek nu & straks, Kansentool, Woontoekomst-check, Nieuwsbrief-generator, campagnes met mailsjablonen, selecties, e-cards, social-postbank, brievenbank.
- Tabbladen: Kalender (klantactiviteiten 2027 met .ics) en Kennisbank (152 artikelen).

## Aanpassen
1. Pas `bouw/template.html` of de data in `bouw/data/` aan:
   - `ITEMS` (catalogus), `KALENDER`, `POSTS` en de tools staan in `bouw/template.html`;
   - campagnes/selecties in `bouw/data/camp.js`, nieuwsbrief in `bouw/data/nb.js`, kennisbank in `bouw/data/kb.js`.
2. Bouw opnieuw: `python3 bouw/build.py`
3. Commit en push; GitHub Pages publiceert automatisch.

`bouw/patches/` bevat de scripts waarmee eerdere uitbreidingen zijn doorgevoerd (al toegepast; niet opnieuw draaien).

## Instellingen
- Vragen en wensen gaan naar Jeroen Oversteegen (jeroen.oversteegen@blinqx.tech), in te stellen in `bouw/build.py`.
- Rekenaannames van de tools (woonquotes, AOW, WW/WIA, maximumdagloon) staan in de objecten `VH` en `AV` in `bouw/template.html` en moeten jaarlijks worden bijgewerkt.

## Disclaimer
Alle materialen en tools zijn indicatief en worden "as is" ter beschikking gesteld; gebruik is voor eigen rekening en risico. Zie de disclaimer op de site.

"""PortefeuilleSignalen: per signaal 'Lees meer: zo werkt het' met stappen en directe links."""
import os
B = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
p = os.path.join(B, 'template.html')
s = open(p, encoding='utf-8').read()

i = s.index('const SIGNALEN = ['); j = s.index('];', i) + 2
new = '''/* [icoon, titel, korte tekst, zo werkt het (stappen), links: [label, doel]]; doel = nummer (opgeslagen zoekopdracht in PortefeuilleSignalen), "#/..." (eigen pagina), "#sel-list" of URL */
const SIGNALEN = [
  ["for sale","Woning te koop","Geen groter moment om waarde toe te voegen dan wanneer een klant zijn woning te koop zet. Wat zijn de plannen? Ondersteun de klant bij de volgende stap.",
    ["PortefeuilleSignalen vergelijkt je klantenbestand met het woningaanbod en meldt het zodra een woning van een klant te koop staat of onder voorbehoud is verkocht.","Bel de klant: wat zijn de plannen? Verhuizen, kleiner wonen of uit elkaar gaan vraagt elk om ander advies.","Help met de volgende stap: meenemen of oversluiten van de hypotheek, een feitencheck van de nieuwe woning en het verzekeren van de nieuwe situatie."],
    [["Relaties met woning verkocht onder voorbehoud",1430],["Relaties zonder hypotheek met woning in de verkoop",1567],["Gratis woningwaarderapport","#/item/woningwaarderapport"],["Campagne: huis verkopen en energiezuinig terughuren","#/item/campagne-verkopen-terughuren"]]],
  ["leaf","Verduurzamen","Signaleert klanten die kunnen besparen door te verduurzamen. De software meldt, jij adviseert: winst voor klant én adviseur.",
    ["Het signaal kijkt naar energielabel, bouwjaar en de rentevaste periode van de hypotheek.","Klanten met kans op rentekorting of besparing op de energierekening komen bovenaan.","Stuur de campagnemail en bespreek de financiering: extra leenruimte, rentekorting bij een beter label en het NHG-verduurzamingsbudget."],
    [["Selectie: klanten met energielabel A",5711],["Selectie: klanten met energielabel B en C",5712],["Campagne: einde rentevast en verduurzamen","#/item/campagne-rentevast-duurzaam"],["Klantcheck: duurzaamheid","#/item/check-duurzaam"],["Duurzaamheidsprofiel","#/item/duurzaamheidsprofiel"]]],
  ["pension","Bijna met pensioen","Na 2031 kunnen veel huizenbezitters hun hypotheekrente niet meer aftrekken. Breng op tijd in beeld bij wie dit speelt, voor een heldere mail met tips en eventueel advies.",
    ["De kant-en-klare campagne selecteert klanten van wie de renteaftrek of de aflossingsvrije periode binnen afzienbare tijd afloopt, of die de AOW-leeftijd naderen.","Je stuurt ruim op tijd een heldere mail met praktische tips.","Klanten die dat willen, krijgen een gesprek over betaalbaarheid na pensioen, aflossen of omzetten."],
    [["Selectie: nu aflossen in verband met leeftijd",1857],["Selectie: meer dan 80% LTV aflossingsvrij",2132],["Campagne: betaalbaarheid bij pensioen","#/item/campagne-pensioen"],["Tool: aflossingsvrije hypotheek nu & straks","#/item/aflossingsvrij-check"]]],
  ["hourglass","Einde rentevaste periode","Nooit meer zoeken naar een naald in een hooiberg: je krijgt ruim op tijd een melding en informeert klanten tijdig.",
    ["PortefeuilleSignalen houdt de einddatum van elke rentevaste periode bij.","Je krijgt ruim op tijd een melding, van 3 maanden tot 10 jaar vooruit.","Nodig de klant uit vóór het verlengingsvoorstel van de bank binnenkomt en vergelijk verlengen, oversluiten en verduurzamen."],
    [["Loopt af binnen 3 maanden",1849],["Binnen 6 maanden",1850],["Binnen 1 jaar",1851],["Binnen 2 jaar",1852],["Selectie snurkers: renteverlengers","#/item/sel-renteverlengers"]]],
  ["percentage","Topafslag","Combineert de actuele woningwaarde met de al afgeloste hypotheek en laat zien welke klanten naar een lagere risicoklasse kunnen.",
    ["Door aflossen en een hogere woningwaarde daalt de verhouding tussen hypotheek en woningwaarde (LTV).","PortefeuilleSignalen rekent met de actuele (geïndexeerde) woningwaarde en de resterende hypotheek.","Klanten die in een lagere risicoklasse vallen, kunnen vaak een lagere rente krijgen; vraag een nieuwe taxatie of waardebepaling aan."],
    [["Annuïteitenhypotheek afgesloten vóór 2012",2208],["Oorspronkelijke LTV > 100%, nu < 90%",2209],["Oorspronkelijke LTV > 100%, nu < 85%",2210],["LTV lager dan 80%",1421]]],
  ["swap","Hypotheek oversluiten","Maakt inzichtelijk wie kan profiteren van oversluiten en kan automatisch berichten sturen om de klant hierop te attenderen.",
    ["PortefeuilleSignalen vergelijkt de huidige rente van de klant met de actuele rente, inclusief de boete bij oversluiten.","Je ziet wie per saldo kan besparen en hoe snel de kosten zijn terugverdiend.","Berichten aan de klant kunnen automatisch worden verstuurd; daarna volgt het advies."],
    [["Relaties die kunnen besparen",3370],["Boetevrij oversluiten (DSB Bank)",4045],["Selectie: relaties die kunnen besparen","#/item/sel-kunnen-besparen"]]],
  ["orv","ORV oversluiten","Veel klanten betalen te veel voor hun overlijdensrisicoverzekering. Je ziet wanneer oversluiten de klant iets oplevert.",
    ["PortefeuilleSignalen vergelijkt de premie van de lopende ORV met de actuele premies.","Vooral oudere polissen en klanten die zijn gestopt met roken kunnen flink besparen.","Let op de gezondheid van de klant: een nieuwe polis vraagt een nieuwe gezondheidsverklaring. Zeg de oude polis pas op als de nieuwe is geaccepteerd."],
    [["Gestopte rokers actie",1465],["Relaties zonder ORV",1440],["Klantcheck: ORV","#/item/check-orv"]]],
  ["filter","(Eigen) campagnes & selecties","Kant-en-klare campagnes en eigen selecties: inloggen, klikken, en de selectie opent in een nieuw tabblad.",
    ["Log eenmalig in op je Hypotheekbond-account (PortefeuilleSignalen).","Klik hieronder op een voorbeeldselectie: die opent direct in PortefeuilleSignalen, in een nieuw tabblad.","Wil je specifieker selecteren? Stel zelf een selectie samen via uitgebreid zoeken en sla die op."],
    [["Naar de voorbeeldselecties","#sel-list"],["Uitgebreid zoeken in PortefeuilleSignalen","https://www.hypotheekbond.nl/tussenpersoon/klanten/zoek-uitgebreid/"]]]
];'''
s = s[:i] + new + s[j:]

a = '''    <div class="cats">${SIGNALEN.map(([i,t,d])=>`<div class="cat cut" style="cursor:default"><div class="h"><span class="hexi">${icon(i,18)}</span><h3>${esc(t)}</h3></div><p>${esc(d)}</p></div>`).join("")}</div>'''
assert s.count(a) == 1
s = s.replace(a, '''    <div class="cats sig-cards">${SIGNALEN.map(([i,t,d,stappen,links])=>`<div class="cat cut" style="cursor:default"><div class="h"><span class="hexi">${icon(i,18)}</span><h3>${esc(t)}</h3></div><p>${esc(d)}</p>
      <details class="sig-meer"><summary>Lees meer: zo werkt het</summary>
        <ol class="steps" style="margin:8px 0 10px;font-size:.88rem">${stappen.map(x=>`<li>${esc(x)}</li>`).join("")}</ol>
        <div class="links">${links.map(([l,doel])=>typeof doel==="number"?`<a href="${psSel(doel)}" target="_blank" rel="noopener"><span>${esc(l)}</span><small>↗</small></a>`:/^https?:/.test(doel)?`<a href="${doel}" target="_blank" rel="noopener"><span>${esc(l)}</span><small>↗</small></a>`:doel.startsWith("#sel")?`<a href="${doel}" data-scroll="1"><span>${esc(l)}</span><small>↓</small></a>`:`<a href="${doel}"><span>${esc(l)}</span><small>→</small></a>`).join("")}</div>
        <p class="hint" style="margin:8px 0 0">Selecties met ↗ openen direct in PortefeuilleSignalen (eerst inloggen). <a href="https://verzekeringhypotheek.blinqx.tech/oplossingen/signalen" target="_blank" rel="noopener">Meer over de signalen ↗</a></p></details></div>`).join("")}</div>''')

a = '  $("#sel-q").addEventListener("input", draw); draw();\n}'
assert s.count(a) == 1
s = s.replace(a, '  $("#sel-q").addEventListener("input", draw); draw();\n  $$("[data-scroll]").forEach(x=>x.onclick=e=>{ e.preventDefault(); $("#sel-list").scrollIntoView({behavior:"smooth"}); });\n}')

a = '  .partners-band{padding:8px 0 30px}'
assert s.count(a) == 1
s = s.replace(a, '''  .sig-meer summary{cursor:pointer;font-weight:800;font-size:.85rem;margin-top:6px;list-style:none;display:inline-flex;align-items:center;gap:6px;background:var(--y);padding:6px 10px}
  .sig-meer summary::-webkit-details-marker{display:none}
  .sig-meer summary::after{content:"▾"}.sig-meer[open] summary::after{content:"▴"}
  .sig-cards{align-items:start}
''' + a)
open(p, 'w', encoding='utf-8').write(s)
print('patch 13 ok')

/* ============================================================
   EXTRA: blijven wonen & verzorgd achterblijven, pensioensparen/lijfrente, formulierenbank
   ============================================================ */
const EXTRA_CAMP = [
{ id:"campagne-blijven-wonen", title:"Kunnen je partner en kinderen in het huis blijven wonen? Blijven ze verzorgd achter?", short:"Blijven wonen en verzorgd achterblijven",
  summary:"De vraag die elke ouder zich stelt: kunnen mijn partner en kinderen in ons huis blijven wonen als ik overlijd of arbeidsongeschikt raak, en blijven ze goed verzorgd achter? Voor huurders én huiseigenaren.",
  waarom:["Bij overlijden of langdurige arbeidsongeschiktheid daalt het inkomen vaak flink, terwijl de huur of hypotheek gewoon doorloopt. De ANW-uitkering is beperkt en inkomensafhankelijk, een nabestaandenpensioen is niet altijd geregeld en ondernemers hebben geen wettelijk vangnet.",
    "Voor gezinnen met kinderen is dit de kernvraag: kan het gezin in de vertrouwde omgeving blijven wonen? Met een paar concrete cijfers maak je het bespreekbaar, en vaak blijkt een overlijdensrisicoverzekering of inkomensvoorziening goed betaalbaar."],
  blokken:[["Huiseigenaren",["Verantwoord Hypotheekrapport: overlijden en AO per partner","Overlijdensrisicoverzekering afgestemd op de hypotheek","Woonlasten- of arbeidsongeschiktheidsverzekering","Testament en voogdij"]],["Huurders",["Woonlastencheck: huur als deel van het inkomen","Nabestaandenpensioen en ANW in kaart","Overlijdensrisicoverzekering voor het inkomen","Buffer en vaste lasten"]]],
  doelgroep:["Gezinnen met kinderen","Samenwonenden met één hoofdinkomen","Ondernemers en zzp'ers","Huurders én huiseigenaren"],
  watDoen:"Stel de vraag concreet: kunnen je partner en kinderen in het huis blijven wonen? Bied de woonlastencheck (huur) of het Verantwoord Hypotheekrapport (koop) aan, en bespreek daarna de nabestaandencheck.",
  stappen:[["Mail","Stuur de mail voor huurders of voor huiseigenaren."],["Inzicht","Laat de klant de woonlastencheck of het rapport invullen, of vul het samen in."],["Gesprek","Bespreek de uitkomst, de nabestaanden en eventuele voorzieningen."],["Vastleggen","Leg advies en keuze vast, ook als de klant niets regelt."]],
  sjablonen:[
    {naam:"Mail: huiseigenaren", onderwerp:"Kunnen uw partner en kinderen in uw huis blijven wonen?", tekst:`{aanhef},

Het is een vraag die veel ouders zich stellen: kunnen mijn partner en kinderen in ons huis blijven wonen als mij iets overkomt? En blijven ze goed verzorgd achter?

## Wat gebeurt er met uw hypotheek?
Bij overlijden of langdurige arbeidsongeschiktheid daalt het inkomen vaak, terwijl de hypotheek gewoon doorloopt. Met het Verantwoord Hypotheekrapport ziet u per situatie of de hypotheek betaalbaar blijft, voor u én voor uw partner.

## En verder?
- Wat ontvangt uw partner aan nabestaandenpensioen of ANW?
- Is er een overlijdensrisicoverzekering, en sluit die nog aan op de hypotheek?
- Is er een testament met een voogd voor uw kinderen?

Wij bekijken het graag samen met u, in alle rust. Bel ons op {tel} of reageer op deze mail.

Met vriendelijke groet,

{adviseur}
{kantoor}`},
    {naam:"Mail: huurders", onderwerp:"Kunnen uw partner en kinderen in uw huis blijven wonen?", tekst:`{aanhef},

Kunnen uw partner en kinderen in uw huis blijven wonen als u overlijdt of langdurig arbeidsongeschikt raakt? De huur en de vaste lasten lopen dan gewoon door, terwijl het inkomen vaak daalt.

## Doe de woonlastencheck
In een paar minuten ziet u welk deel van het inkomen naar de huur gaat, nu en als een inkomen wegvalt:
[link naar de woonlastencheck]

## Blijven ze verzorgd achter?
Daarnaast bekijken we graag wat uw partner ontvangt aan nabestaandenpensioen of ANW, en of een overlijdensrisicoverzekering zinvol is. Bel ons op {tel}.

Met vriendelijke groet,

{adviseur}
{kantoor}`}],
  links:[{label:"Klantcheck: woonlasten", url:"#/item/check-woonlasten"},{label:"Klantcheck: nabestaanden", url:"#/item/check-nabestaanden"},{label:"Verantwoord Hypotheekrapport", url:"#/item/verantwoord-hypotheekrapport"}],
  tags:["blijven wonen","nabestaanden","overlijden","arbeidsongeschiktheid","huur","hypotheek","gezin","kinderen","orv","verzorgd achterblijven"],
  compliance:"Benader dit onderwerp met tact. Advies over ORV, AOV en woonlastenverzekeringen vraagt een volledige klantinventarisatie (Wft-zorgplicht)." },

{ id:"campagne-pensioensparen", title:"Extra pensioen sparen: nu of nooit? Maak optimaal gebruik van de fiscale voordelen", short:"Extra pensioensparen en lijfrenteaftrek",
  summary:"Met lijfrente of een lijfrenterekening spaar je fiscaal voordelig extra voor je pensioen: de inleg is aftrekbaar binnen je jaarruimte en reserveringsruimte. Wie niet benut, verliest ruimte. Help klanten vóór het einde van het jaar.",
  waarom:["Veel mensen hebben een pensioentekort, zeker ondernemers, zzp'ers, mensen met een onderbroken loopbaan en wie parttime werkt. Met een lijfrenteverzekering, -rekening of -beleggingsrecht kun je fiscaal voordelig bijsparen: de inleg is aftrekbaar van het inkomen in box 1, binnen de jaarruimte.",
    "Niet-benutte jaarruimte van eerdere jaren kun je beperkt inhalen via de reserveringsruimte, maar oude ruimte vervalt na verloop van tijd. Daarom is het ‘nu of nooit’: wie dit jaar wil aftrekken, moet vóór 31 december inleggen. Hoe eerder je begint, hoe meer je profiteert van rendement op rendement."],
  blokken:[["Het fiscale voordeel",["Inleg aftrekbaar in box 1 (binnen de jaarruimte)","Teruggave tegen je marginale tarief","Vermogen valt niet in box 3","Uitkering later belast, vaak tegen een lager tarief"]],["Voor wie?",["Ondernemers en zzp'ers zonder pensioenregeling","Werknemers met een pensioentekort of parttime","Wie een (hoge) eindejaarsuitkering of bonus krijgt","Wie onbenutte ruimte uit eerdere jaren heeft"]]],
  doelgroep:["Ondernemers en zzp'ers","Klanten van 40–60 jaar met een mogelijk pensioentekort","Benaderen in oktober–december (vóór 31 december)"],
  watDoen:"Wijs klanten op hun jaarruimte en reserveringsruimte, laat zien wat extra sparen oplevert met de lijfrente-rekenhulp en help ze vóór 31 december in te leggen.",
  stappen:[["Mail","Stuur in oktober of november de mail ‘nu of nooit’."],["Rekenen","Bereken de jaarruimte (rekenhulp Belastingdienst) en laat het effect zien met de lijfrente-rekenhulp."],["Advies","Kies samen een passend product en zorg dat de inleg vóór 31 december binnen is."],["Vastleggen","Leg het advies en de keuze vast."]],
  sjablonen:[
    {naam:"Mail: nu of nooit", onderwerp:"Extra pensioen sparen met belastingvoordeel: vóór 31 december", tekst:`{aanhef},

Wist u dat u met extra pensioensparen belasting kunt besparen? Met een lijfrenteverzekering, -rekening of -beleggingsrecht is uw inleg aftrekbaar van uw inkomen, binnen uw zogeheten jaarruimte.

## Waarom nu?
- Wilt u de aftrek dit jaar benutten, dan moet de inleg vóór 31 december binnen zijn.
- Ruimte die u in eerdere jaren niet heeft gebruikt, kunt u beperkt inhalen. Oude ruimte vervalt na verloop van tijd.
- Hoe eerder u begint, hoe langer uw geld kan renderen.

## Wat levert het op?
Uw inleg levert een belastingteruggave op tegen uw hoogste belastingtarief. Later betaalt u belasting over de uitkering, vaak tegen een lager tarief omdat uw inkomen dan lager is.

Benieuwd wat het voor u betekent? Wij berekenen graag uw jaarruimte en het voordeel. Bel ons op {tel} of reageer op deze mail.

Met vriendelijke groet,

{adviseur}
{kantoor}`},
    {naam:"Mail voor ondernemers en zzp'ers", onderwerp:"Ondernemer? Regel uw pensioen fiscaal slim", tekst:`{aanhef},

Als ondernemer bouwt u niet automatisch pensioen op. De AOW alleen is voor de meeste mensen niet genoeg om de levensstandaard vast te houden.

## Fiscaal voordelig bijsparen
Met lijfrente is uw inleg aftrekbaar van uw winst of inkomen, binnen uw jaarruimte. Heeft u in eerdere jaren niets ingelegd? Dan kunt u een deel inhalen via de reserveringsruimte.

## Doe het vóór 31 december
Wilt u dit jaar profiteren van de aftrek, dan moet de inleg vóór 31 december binnen zijn. Wij rekenen graag voor u uit hoeveel ruimte u heeft en wat het oplevert.

Bel ons op {tel} of reageer op deze mail.

Met vriendelijke groet,

{adviseur}
{kantoor}`},
    {naam:"Klanttekst: wat is lijfrenteaftrek?", onderwerp:"Lijfrenteaftrek: zo werkt het", tekst:`## Lijfrenteaftrek: zo werkt het
Met lijfrente spaart u extra voor uw pensioen. De inleg is aftrekbaar van uw inkomen in box 1, zolang u binnen uw jaarruimte blijft. Over de uitkering betaalt u later inkomstenbelasting.

## Jaarruimte en reserveringsruimte
Hoeveel u mag aftrekken, hangt af van uw inkomen en uw pensioenopbouw via een werkgever (jaarruimte). Heeft u ruimte uit eerdere jaren niet gebruikt? Dan kunt u die onder voorwaarden inhalen (reserveringsruimte). Met de rekenhulp van de Belastingdienst berekent u uw ruimte.

## Waarom het loont
- U krijgt belasting terug tegen uw hoogste tarief.
- Het gespaarde vermogen valt niet in box 3.
- Na pensionering is uw inkomen vaak lager, waardoor u minder belasting betaalt over de uitkering.

## Let op
Het geld is vastgezet voor een aanvulling op uw inkomen; eerder opnemen kan alleen onder voorwaarden en kost vaak belasting. Laat u adviseren over wat bij u past.` }],
  links:[{label:"Lijfrente-rekenhulp", url:"#/item/lijfrente-rekenhulp"},{label:"Rekenhulp jaarruimte (Belastingdienst)", url:"https://www.belastingdienst.nl/wps/wcm/connect/nl/aftrek-en-kortingen/content/hulpmiddel-lijfrentepremie-2016-en-daarna"},{label:"Mijnpensioenoverzicht.nl", url:"https://www.mijnpensioenoverzicht.nl"}],
  tags:["pensioen","lijfrente","lijfrenteaftrek","jaarruimte","reserveringsruimte","pensioentekort","zzp","ondernemer","31 december","belastingvoordeel"],
  compliance:"Lijfrenteproducten zijn financiële producten onder de Wft; advies vraagt een volledige inventarisatie. Fiscale regels en tarieven wijzigen jaarlijks; noem de jaarruimte alleen na berekening. Beloof geen rendement." }
];
EXTRA_CAMP.forEach(c => { CAMP.push(c); ITEMS.push({ id:c.id, cat:"campagnes", kind:"campagne", model:"gratis", title:"Campagne: "+c.title, by:"Blinqx V&H",
  summary:c.summary, channels:["Eigen e-mail","Blinqx Connect","Word"], tags:["campagne",...c.tags], data:c }); });

ITEMS.push({ id:"lijfrente-rekenhulp", cat:"klanttools", kind:"lijfrente", model:"gratis",
  title:"Lijfrente-rekenhulp: wat levert extra pensioensparen op?", by:"Blinqx V&H",
  summary:"Bereken het fiscale voordeel van lijfrente: inleg, belastingteruggave, netto kosten, opgebouwd kapitaal en de netto aanvulling per maand na pensioen. Met een indicatie van de jaarruimte.",
  channels:["Eigen website","Eigen e-mail","Klantgesprek"], tags:["pensioen","lijfrente","lijfrenteaftrek","jaarruimte","rekentool","belastingvoordeel","pensioentekort","zzp"] });

/* ---------- Formulierenbank ---------- */
ITEMS.push({ id:"formulierenbank", cat:"scans", kind:"formulieren", model:"gratis",
  title:"Formulierenbank: digitale klantformulieren", by:"Blinqx V&H · Actiefbeheerscan",
  summary:"Negen kant-en-klare klantformulieren in Blinqx-stijl: jaarlijkse nazorg, hypotheekcheck, aflossingsvrij, pensioen, uitvaart, schade, bedrijf, auto en klanttevredenheid. Gebruik ze direct, maak zelf een formulier met de teksten, of werk met Actiefbeheerscan.nl.",
  channels:["Eigen website","Eigen e-mail","Actiefbeheerscan"], tags:["formulieren","digitale formulieren","vragenlijst","actiefbeheerscan","nazorg","klantformulier","scan","webformulier"] });
FORMS.forEach(f => ITEMS.push({ id:f.id, cat:"scans", kind:"form", model:"gratis", title:"Formulier: "+f.titel, by:"Blinqx V&H · Actiefbeheerscan",
  summary:f.sub, channels:["Eigen website","Eigen e-mail","Actiefbeheerscan"], tags:["formulier","vragenlijst","actiefbeheerscan",f.thema.toLowerCase()], data:f }));

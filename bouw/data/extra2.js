/* ============================================================
   EXTRA 2: eindejaarscheck, box 3 vs lijfrente, WOZ, extra klantchecks,
   woningwaarderapport, PortefeuilleSignalen-koppelingen, extra actie-ideeën
   ============================================================ */
const EXTRA2_CAMP = [
{ id:"campagne-eindejaar-belasting", title:"Verlaag je belastingdruk: maak dit jaar nog gebruik van de lijfrenteaftrek", short:"Eindejaarscheck belastingdruk",
  summary:"Vóór 31 december kunnen klanten nog belastingvoordeel benutten: lijfrente-inleg binnen de jaarruimte, en vóór de peildatum van 1 januari kijken naar box 3, extra aflossen, schenken en giften. Een waardevolle eindejaarsservice.",
  waarom:["Aan het einde van het jaar laten veel klanten belastingvoordeel liggen. De lijfrenteaftrek geldt alleen voor inleg die vóór 31 december is betaald, en onbenutte ruimte uit eerdere jaren vervalt na verloop van tijd.",
    "Box 3 kijkt naar het vermogen op 1 januari. Extra aflossen op de hypotheek of een schenking vóór die datum kan de box 3-heffing beïnvloeden. Dat vraagt maatwerk, maar een korte check aan het einde van het jaar levert klanten vaak direct iets op."],
  blokken:[["Vóór 31 december",["Lijfrente-inleg binnen de jaarruimte","Inhalen van onbenutte ruimte (reserveringsruimte)","Extra aflossen (let op boetevrije ruimte)","Schenkingen en periodieke giften"]],["Peildatum 1 januari",["Box 3: vermogen en schulden op 1 januari","Spaargeld inzetten voor aflossen of lijfrente?","Buffer aanhouden voor onvoorziene uitgaven","Gevolgen voor toeslagen meenemen"]]],
  doelgroep:["Klanten met een hoog inkomen of eindejaarsuitkering","Ondernemers en zzp'ers","Klanten met spaargeld in box 3","Benaderen in november en begin december"],
  watDoen:"Stuur in november een eindejaarsmail met de belangrijkste kansen en bied een korte check aan. Reken het voordeel van lijfrente door met de rekenhulp.",
  stappen:[["Mail","Stuur in november de eindejaarsmail."],["Rekenen","Gebruik de lijfrente-rekenhulp en de vergelijker box 3 of lijfrente."],["Actie vóór 31 december","Help de klant de inleg of aflossing op tijd te regelen."],["Vastleggen","Leg advies en keuze vast."]],
  sjablonen:[
    {naam:"Mail: eindejaarscheck", onderwerp:"Verlaag uw belastingdruk: dit kan nog vóór 31 december", tekst:`{aanhef},

Het jaar loopt ten einde. Dat is hét moment om te kijken of u nog belastingvoordeel kunt benutten.

## Lijfrenteaftrek: nu of nooit
Met lijfrente spaart u extra voor uw pensioen en is uw inleg aftrekbaar binnen uw jaarruimte. Wilt u dit jaar aftrekken, dan moet de inleg vóór 31 december binnen zijn. Heeft u in eerdere jaren ruimte laten liggen? Een deel kunt u mogelijk nog inhalen.

## Box 3: de peildatum is 1 januari
Box 3 kijkt naar uw vermogen op 1 januari. Extra aflossen op uw hypotheek of een schenking vóór die datum kan gevolgen hebben voor uw belasting. Of dat verstandig is, hangt af van uw buffer en uw situatie.

## Laat het doorrekenen
Wij rekenen graag voor u uit wat het u oplevert. Bel ons op {tel} of reageer op deze mail, dan plannen we een kort gesprek.

Met vriendelijke groet,

{adviseur}
{kantoor}`}],
  links:[{label:"Lijfrente-rekenhulp", url:"#/item/lijfrente-rekenhulp"},{label:"Vergelijker box 3 of lijfrente", url:"#/item/box3-lijfrente"}],
  tags:["belasting","eindejaar","31 december","lijfrente","jaarruimte","box 3","peildatum","extra aflossen","schenken","giften"],
  compliance:"Fiscale gevolgen zijn persoonlijk; noem mogelijkheden, geen zekerheden. Advies over lijfrenteproducten valt onder de Wft. Wijs bij extra aflossen op het belang van een buffer en op mogelijke boete." },

{ id:"campagne-box3-lijfrente", title:"Vermogensopbouw: box 3, lijfrente of aanvullend pensioen?", short:"Box 3, lijfrente of aanvullend pensioen",
  summary:"Sparen of beleggen in box 3 is flexibel, maar je betaalt jaarlijks vermogensrendementsheffing. Lijfrente en aanvullend pensioen geven belastingvoordeel bij inleg, maar het geld zit vast. Help klanten de juiste keuze te maken.",
  waarom:["Klanten die extra willen opbouwen voor later, kunnen kiezen tussen vrij vermogen in box 3, een lijfrente in box 1 of (via de werkgever) aanvullende pensioenopbouw. Elke route heeft eigen voordelen: flexibiliteit tegenover belastingvoordeel en zekerheid.",
    "Met de vergelijker zie je in een paar minuten het verschil in netto eindwaarde, en kun je het gesprek voeren over wat de klant belangrijk vindt: vrij opneembaar, fiscaal voordeel of een levenslange aanvulling."],
  blokken:[["Box 3",["Vrij opneembaar en flexibel","Jaarlijks vermogensrendementsheffing","Heffingsvrij vermogen","Geen belasting bij opname"]],["Lijfrente / aanvullend pensioen",["Inleg aftrekbaar (binnen de jaarruimte)","Geen box 3 tijdens de opbouw","Uitkering belast, vaak tegen een lager tarief","Geld zit vast tot de uitkeringsfase"]]],
  doelgroep:["Klanten met spaargeld of een spaarwens","Ondernemers en zzp'ers","Werknemers met een (mogelijk) pensioentekort"],
  watDoen:"Bespreek het doel van de klant (vrij vermogen of inkomen later) en laat met de vergelijker zien wat de routes netto opleveren.",
  stappen:[["Mail of gesprek","Stuur de mail of bespreek het tijdens de jaarlijkse nazorg."],["Vergelijken","Gebruik de vergelijker box 3 of lijfrente."],["Advies","Bespreek flexibiliteit, risico en fiscaal voordeel en leg de keuze vast."]],
  sjablonen:[
    {naam:"Mail: box 3 of lijfrente?", onderwerp:"Spaart u voor later? Box 3 of lijfrente maakt verschil", tekst:`{aanhef},

Spaart of belegt u voor later? Dan is het slim om te kijken wáár u dat doet. Het verschil tussen vrij vermogen in box 3 en een lijfrente of aanvullend pensioen kan flink oplopen.

## Box 3: flexibel
Spaargeld en beleggingen in box 3 zijn vrij opneembaar. U betaalt wel elk jaar belasting over uw vermogen boven het heffingsvrije bedrag.

## Lijfrente of aanvullend pensioen: belastingvoordeel
Uw inleg is aftrekbaar binnen uw jaarruimte, en tijdens de opbouw betaalt u geen box 3-heffing. Later betaalt u belasting over de uitkering, vaak tegen een lager tarief. Het geld zit wel vast.

## Wat past bij u?
Dat hangt af van uw doel, uw inkomen en hoeveel flexibiliteit u wilt. Wij laten u graag zien wat het verschil voor u is. Bel ons op {tel}.

Met vriendelijke groet,

{adviseur}
{kantoor}`},
    {naam:"Klanttekst: box 3, lijfrente of aanvullend pensioen?", onderwerp:"Vermogen opbouwen: welke route past bij u?", tekst:`## Vermogen opbouwen: welke route past bij u?
Wie extra wil sparen of beleggen voor later, kan grofweg kiezen uit drie routes.

## 1. Vrij vermogen in box 3
Spaargeld en beleggingen zijn vrij opneembaar. Over het vermogen boven het heffingsvrije bedrag betaalt u jaarlijks belasting op basis van een (forfaitair of werkelijk) rendement.

## 2. Lijfrente in box 1
U legt in via een lijfrenteverzekering, -rekening of -beleggingsrecht. De inleg is aftrekbaar binnen uw jaarruimte en het opgebouwde vermogen valt niet in box 3. Vanaf de uitkering betaalt u inkomstenbelasting. Het geld is bedoeld als aanvulling op uw inkomen en zit vast.

## 3. Aanvullend pensioen via de werkgever
Sommige pensioenregelingen bieden vrijwillige extra opbouw of een netto pensioen. Vraag uw werkgever of pensioenuitvoerder naar de mogelijkheden.

## Welke route kiest u?
Wilt u flexibiliteit, dan past box 3 vaak beter. Gaat het om een aanvulling op uw pensioen en wilt u belastingvoordeel, dan is lijfrente of aanvullend pensioen vaak gunstiger. Laat u adviseren over wat bij u past.`}],
  links:[{label:"Vergelijker box 3 of lijfrente", url:"#/item/box3-lijfrente"},{label:"Lijfrente-rekenhulp", url:"#/item/lijfrente-rekenhulp"}],
  tags:["box 3","lijfrente","aanvullend pensioen","vermogensopbouw","sparen","beleggen","vermogensrendementsheffing","jaarruimte"],
  compliance:"Box 3 is in beweging (overgang naar een stelsel op basis van werkelijk rendement); controleer de actuele regels. Beleggen kent risico's; beloof geen rendement. Advies over lijfrente valt onder de Wft." },

{ id:"campagne-woz-bezwaar", title:"WOZ-beschikking ontvangen? Check of bezwaar zin heeft", short:"WOZ-bezwaar",
  summary:"In februari en maart ontvangen huiseigenaren hun WOZ-beschikking. Een te hoge WOZ-waarde betekent te veel OZB en een hoger eigenwoningforfait. Help klanten checken of bezwaar zin heeft, binnen de termijn van zes weken.",
  waarom:["De WOZ-waarde bepaalt onder meer de onroerendezaakbelasting, het eigenwoningforfait en soms de waterschapsbelasting. Een te hoge waarde kost de klant dus elk jaar geld.",
    "Bezwaar maken is gratis en moet binnen zes weken na de datum van de beschikking. Een korte tip in februari is een eenvoudige en gewaardeerde service."],
  blokken:[["Wanneer bezwaar?",["De WOZ-waarde ligt hoger dan vergelijkbare woningen in de buurt","Gebreken aan de woning (onderhoud, fundering) niet meegenomen","Kenmerken kloppen niet (oppervlakte, bouwjaar)","Peildatum: 1 januari van het jaar ervoor"]],["Zo help je",["Wijs op de termijn van 6 weken","Verwijs naar het WOZ-waardeloket","Vergelijk met PandWise of het Funderingscijfer","Leg vast dat je de tip hebt gegeven"]]],
  doelgroep:["Alle klanten met een koopwoning","Benaderen in februari–maart"],
  watDoen:"Stuur in februari een korte mail met de WOZ-tip en de checklist.",
  stappen:[["Mail","Stuur de WOZ-mail in februari."],["Check","Laat de klant de WOZ-waarde vergelijken (WOZ-waardeloket, PandWise)."],["Bezwaar","Wijs op de termijn van zes weken en de site van de gemeente."]],
  sjablonen:[{naam:"Mail: WOZ-beschikking", onderwerp:"Uw WOZ-waarde ontvangen? Check of die klopt", tekst:`{aanhef},

U heeft (of krijgt binnenkort) de WOZ-beschikking voor uw woning. De WOZ-waarde bepaalt onder meer de onroerendezaakbelasting en het eigenwoningforfait in uw aangifte. Een te hoge waarde kost u dus elk jaar geld.

## Klopt de waarde?
- Vergelijk de waarde met vergelijkbare woningen in uw buurt via het WOZ-waardeloket.
- Kloppen de kenmerken, zoals oppervlakte en bouwjaar?
- Zijn gebreken aan de woning, zoals achterstallig onderhoud of funderingsproblemen, meegenomen?

## Bezwaar maken
Bezwaar maken is gratis en moet binnen zes weken na de datum op de beschikking, meestal via de website van uw gemeente.

Twijfelt u? Wij denken graag met u mee. Bel ons op {tel}.

Met vriendelijke groet,

{adviseur}
{kantoor}`}],
  links:[{label:"WOZ-waardeloket", url:"https://www.wozwaardeloket.nl/"},{label:"Klantcheck: WOZ-bezwaar", url:"#/item/check-woz"},{label:"PandWise", url:"https://pandwise.nl/"}],
  tags:["woz","woz-bezwaar","ozb","eigenwoningforfait","gemeente","februari","belasting"],
  compliance:"Geef een tip, geen garantie op succes. Bezwaar indienen doet de klant zelf of via een gespecialiseerde partij." }
];
EXTRA2_CAMP.forEach(c => { CAMP.push(c); ITEMS.push({ id:c.id, cat:"campagnes", kind:"campagne", model:"gratis", title:"Campagne: "+c.title, by:"Blinqx V&H",
  summary:c.summary, channels:["Eigen e-mail","Blinqx Connect","Word"], tags:["campagne",...c.tags], data:c }); });

/* ---------- Extra klantchecks (inspiratie: nazorgchecks uit de markt) ---------- */
Object.assign(CHECKS, {
  "check-orv": { titel:"ORV-check: is uw overlijdensrisicoverzekering nog passend?", h1:"Past uw overlijdensrisicoverzekering nog?", intro:"Premies zijn gedaald en uw situatie verandert. Zeven vragen over uw overlijdensrisicoverzekering.", mail:"ORV-check",
    secties:[{ key:"orv", titel:"Uw overlijdensrisicoverzekering", items:[
      {k:"oud", q:"Is uw ORV langer dan 5 jaar geleden afgesloten?", s:"", w:2, tip:"De premies zijn de afgelopen jaren flink gedaald. Vergelijken kan een besparing opleveren, maar let op uw gezondheid: een nieuwe polis vraagt opnieuw een gezondheidsverklaring."},
      {k:"rook", q:"Rookte u bij het afsluiten, maar bent u inmiddels gestopt?", s:"", w:2, tip:"Niet-rokers betalen vaak een flink lagere premie. Vraag na of aanpassing mogelijk is."},
      {k:"hyp", q:"Is uw hypotheek veranderd (verhoogd, afgelost, overgesloten)?", s:"", w:2, tip:"Controleer of het verzekerd bedrag en de looptijd nog aansluiten op de hypotheek."},
      {k:"gezin", q:"Is uw gezinssituatie veranderd (kinderen, samenwonen, scheiding)?", s:"", w:2, tip:"Bekijk of het verzekerd bedrag en de begunstiging nog kloppen."},
      {k:"vorm", q:"Weet u niet of uw dekking gelijkblijvend, dalend of annuïtair dalend is?", s:"", w:1, tip:"Bij een dalende dekking neemt het verzekerd bedrag af. Past dat nog bij uw situatie?"},
      {k:"begunstigd", q:"Weet u niet wie de begunstigde is?", s:"", w:1, tip:"Controleer de begunstiging, zeker na een scheiding of nieuw partnerschap."},
      {k:"kruislings", q:"Weet u niet of de polis ‘kruislings’ is afgesloten?", s:"Dat kan erfbelasting schelen.", w:1, tip:"Bij ongehuwd samenwonen of grote bedragen kan een kruislings afgesloten ORV erfbelasting voorkomen."}]}]},
  "check-woz": { titel:"WOZ-bezwaar-check: betaalt u te veel?", h1:"Klopt uw WOZ-waarde?", intro:"Een te hoge WOZ-waarde betekent te veel onroerendezaakbelasting en een hoger eigenwoningforfait. Vijf vragen om te zien of bezwaar zin kan hebben.", mail:"WOZ-check",
    secties:[{ key:"woz", titel:"Uw WOZ-beschikking", items:[
      {k:"hoger", q:"Ligt uw WOZ-waarde hoger dan die van vergelijkbare woningen in de buurt?", s:"Vergelijk via het WOZ-waardeloket.", w:2, tip:"Een hogere waarde dan vergelijkbare woningen is een goede reden om bezwaar te overwegen."},
      {k:"kenmerken", q:"Kloppen kenmerken niet, zoals oppervlakte, bouwjaar of type woning?", s:"", w:2, tip:"Onjuiste kenmerken zijn een sterke grond voor bezwaar. Vraag het taxatieverslag op bij de gemeente."},
      {k:"gebreken", q:"Heeft de woning gebreken die niet zijn meegenomen (onderhoud, fundering, overlast)?", s:"", w:2, tip:"Gebreken kunnen de waarde verlagen. Leg ze vast met foto's of rapporten."},
      {k:"stijging", q:"Is de waarde veel sterker gestegen dan in de buurt?", s:"", w:1, tip:"Vergelijk de stijging met die van vergelijkbare woningen."},
      {k:"termijn", q:"Is de datum op de beschikking minder dan zes weken geleden?", s:"Bezwaar moet binnen zes weken.", w:1, tip:"Let op de termijn van zes weken na de datum op de beschikking; bezwaar maken is gratis."}]}]},
  "check-aktepassering": { titel:"Na de aktepassering: hoe was het?", h1:"Gefeliciteerd met uw woning! Hoe ging het?", intro:"Uw hypotheek is gepasseerd. Een paar korte vragen over uw ervaring en wat er nog geregeld moet worden.", mail:"Check na passeren",
    secties:[{ key:"ervaring", titel:"Uw ervaring", items:[
      {k:"vragen", q:"Heeft u nog vragen over uw hypotheek of de stukken van de notaris?", s:"", w:2, tip:"Wij beantwoorden uw vragen graag. Bewaar de akte en de offerte goed."},
      {k:"onduidelijk", q:"Was er iets in het traject onduidelijk of niet naar wens?", s:"", w:1, tip:"Uw feedback helpt ons beter te worden. Wij nemen contact met u op."}]},
     { key:"regelen", titel:"Nog regelen", items:[
      {k:"opstal", q:"Is de opstalverzekering nog niet ingegaan per de datum van passeren?", s:"", w:2, tip:"Zorg dat de woning vanaf de sleuteloverdracht verzekerd is."},
      {k:"inboedel", q:"Heeft u uw inboedelverzekering nog niet aangepast aan het nieuwe adres?", s:"", w:2, tip:"Geef de verhuizing door en check of de inboedelwaarde nog klopt."},
      {k:"teruggave", q:"Heeft u nog geen voorlopige teruggave voor de hypotheekrenteaftrek aangevraagd?", s:"", w:1, tip:"Met een voorlopige teruggave ontvangt u het belastingvoordeel maandelijks."},
      {k:"depot", q:"Heeft u een bouwdepot en weet u niet hoe u declaraties indient?", s:"", w:1, tip:"Wij leggen graag uit hoe en wanneer u facturen uit het bouwdepot laat betalen."}]}]},
  "check-aov": { titel:"AOV-check voor ondernemers: past uw dekking nog?", h1:"Is uw inkomen goed beschermd als u arbeidsongeschikt raakt?", intro:"Als ondernemer heeft u geen wettelijk vangnet. Zes vragen over uw arbeidsongeschiktheidsverzekering.", mail:"AOV-check",
    secties:[{ key:"aov", titel:"Uw arbeidsongeschiktheidsverzekering", items:[
      {k:"geen", q:"Heeft u geen arbeidsongeschiktheidsverzekering of broodfonds?", s:"", w:2, tip:"Zonder voorziening valt uw inkomen weg bij ziekte. Bekijk een AOV, broodfonds of een basisdekking."},
      {k:"bedrag", q:"Is uw inkomen gestegen sinds u de AOV afsloot?", s:"", w:2, tip:"Controleer of het verzekerd bedrag nog past bij uw inkomen en vaste lasten."},
      {k:"premie", q:"Is de premie flink gestegen of te hoog geworden?", s:"", w:1, tip:"Bekijk opties zoals een langere wachttijd, een lagere dekking of een ander beroepscriterium."},
      {k:"eind", q:"Loopt uw AOV af vóór uw AOW-leeftijd?", s:"", w:1, tip:"Check de einddatum en of die aansluit bij uw plannen."},
      {k:"beroep", q:"Is uw werk of beroep veranderd?", s:"", w:2, tip:"Geef wijzigingen door: het beroep bepaalt de dekking en de premie."},
      {k:"wachttijd", q:"Weet u niet welke wachttijd u heeft, en of uw buffer die periode overbrugt?", s:"", w:1, tip:"Stem de wachttijd af op uw buffer: een langere wachttijd verlaagt de premie."}]}]},
  "check-duurzaam": { titel:"Duurzaamheidscheck: wilt u uw woning verduurzamen?", h1:"Wilt u het komende jaar verduurzamen?", intro:"Vijf vragen over uw woning en wensen. Zo ziet u welke mogelijkheden er zijn, ook voor de financiering.", mail:"Duurzaamheidscheck",
    secties:[{ key:"duurzaam", titel:"Uw woning", items:[
      {k:"plan", q:"Wilt u het komende jaar uw woning verduurzamen?", s:"Bijvoorbeeld isoleren, zonnepanelen of een warmtepomp.", w:2, tip:"Bekijk de mogelijkheden met het gratis Duurzaamheidsprofiel en bespreek de financiering."},
      {k:"label", q:"Heeft uw woning energielabel C of slechter?", s:"Of weet u het niet?", w:2, tip:"Met een beter label kunt u bij sommige geldverstrekkers rentekorting krijgen."},
      {k:"rentevast", q:"Loopt uw rentevaste periode binnen 2 jaar af?", s:"", w:1, tip:"Combineer oversluiten met verduurzamen: vaak een goed moment voor rentekorting en extra leenruimte."},
      {k:"geld", q:"Heeft u geen spaargeld om te verduurzamen?", s:"", w:1, tip:"Er is vaak extra leenruimte voor energiebesparende maatregelen. Ook zijn er subsidies en leningen."},
      {k:"verzekering", q:"Heeft u al zonnepanelen of een warmtepomp, maar niet doorgegeven aan uw verzekeraar?", s:"", w:1, tip:"Geef installaties door aan uw opstalverzekeraar, zodat ze goed verzekerd zijn."}]}]}
});
[["check-orv","Klantcheck: ORV-check","Zeven vragen over de overlijdensrisicoverzekering: leeftijd polis, roken, hypotheek, gezin, dekkingsvorm, begunstiging en kruislings.",["orv","overlijdensrisicoverzekering","premie","roken","begunstigde","kruislings"]],
 ["check-woz","Klantcheck: WOZ-bezwaar","Vijf vragen om te zien of bezwaar tegen de WOZ-waarde zin kan hebben, met de termijn van zes weken.",["woz","woz-bezwaar","ozb","eigenwoningforfait"]],
 ["check-aktepassering","Klantcheck: na de aktepassering","Zes vragen na het passeren: ervaring, vragen, opstal, inboedel, voorlopige teruggave en bouwdepot.",["aktepassering","passeren","nazorg","tevredenheid","voorlopige teruggave","bouwdepot"]],
 ["check-aov","Klantcheck: AOV voor ondernemers","Zes vragen over de arbeidsongeschiktheidsverzekering van ondernemers: dekking, inkomen, premie, einddatum, beroep en wachttijd.",["aov","arbeidsongeschiktheid","ondernemer","zzp","broodfonds","wachttijd"]],
 ["check-duurzaam","Klantcheck: duurzaamheid","Vijf vragen over verduurzamingsplannen, energielabel, rentevaste periode, financiering en verzekering.",["duurzaamheid","verduurzamen","energielabel","zonnepanelen","warmtepomp","rentekorting"]]
].forEach(([id,title,summary,tags]) => ITEMS.push({ id, cat:"klanttools", kind:"check", model:"gratis", title, by:"Blinqx V&H", summary,
  channels:["Eigen website","Eigen e-mail","Print/PDF"], tags:["klantcheck","vragenlijst","nazorg",...tags] }));

/* ---------- Tools ---------- */
ITEMS.push({ id:"woningwaarderapport", cat:"klanttools", kind:"woningwaarde", model:"gratis",
  title:"Gratis woningwaarderapport", by:"Blinqx · PandWise",
  summary:"Vul een adres in en bekijk direct het gratis woningwaarderapport van PandWise: waarde-indicatie, fundering, klimaat en geluid. Met insluitcode voor je eigen website. Klanten van PortefeuilleSignalen kunnen ook het RWWR-woningwaarderapport gebruiken.",
  channels:["Eigen website (embed)","Eigen e-mail","Klantgesprek"], tags:["woningwaarde","woningwaarderapport","waarde-indicatie","pandwise","rwwr","taxatie","woz"] });
ITEMS.push({ id:"box3-lijfrente", cat:"klanttools", kind:"box3", model:"gratis",
  title:"Vergelijker: vermogen in box 3 of lijfrente?", by:"Blinqx V&H",
  summary:"Vergelijk dezelfde netto inleg in box 3 met een lijfrente: netto eindwaarde, belastingvoordeel en flexibiliteit. Met een overzicht van de voor- en nadelen van box 3, lijfrente en aanvullend pensioen.",
  channels:["Klantgesprek","Eigen e-mail"], tags:["box 3","lijfrente","aanvullend pensioen","vermogensopbouw","vergelijken","rekentool","belasting"] });
ITEMS.push({ id:"ps-koppelingen", cat:"leads", kind:"item", model:"aanvraag",
  title:"PortefeuilleSignalen: koppelingen en extensies", by:"Blinqx V&H",
  summary:"PortefeuilleSignalen is verbonden met geldverstrekkers, mijn-omgevingen, apps en tools: uwkluis, Fastlane, Elements, MijnHuiszaken, het RWWR-woningwaarderapport en Holland Webservices. Data blijft actueel, van de eerste hypotheek tot het pensioen.",
  contents:["uwkluis: white-label klantomgeving voor digitale communicatie, inventarisatie en beheer","Fastlane: hypotheekadvies van oriëntatie tot jaarlijkse hypotheekcheck, aanvragen via HDN","Elements (Faster Forward): automatische signalen in je CRM","MijnHuiszaken: woningaanbod vóór publicatie, afgestemd op de wensen van de klant","RWWR: up-to-date woningwaarderapport, gratis voor klanten van PortefeuilleSignalen","Holland Webservices: reken-API's en feeds voor website, app of eigen software","Life-event-signalen: verduurzamen, verhuizen, naderend pensioen (vóór 57 jaar), einde rentevast"],
  links:[{label:"uwkluis", url:"https://www.uwkluis.nl"},{label:"Fastlane", url:"https://fastlane.hypotheekbond.nl"},{label:"Elements", url:"https://www.fasterforward.nl/elements/"},{label:"MijnHuiszaken", url:"https://aansluiten.mijnhuiszaken.nl"},{label:"RWWR", url:"https://www.rwwr.nl"},{label:"Holland Webservices", url:"https://www.hollandwebservices.nl/nl/"},{label:"PortefeuilleSignalen", url:"https://www.portefeuillesignalen.nl/"}],
  priceLabel:"Abonnement", price:"Op aanvraag", premium:["Demo op aanvraag"],
  channels:["Intern"], tags:["portefeuillesignalen","koppelingen","uwkluis","fastlane","elements","mijnhuiszaken","rwwr","woningwaarde","api","crm"] });

/* ---------- Extra actie-ideeën door het jaar ---------- */
IDEEEN.push(
  {t:"WOZ-beschikking: bezwaar?", wanneer:"februari–maart", d:"Help klanten checken of de WOZ-waarde klopt; bezwaar binnen zes weken.", i:"campagne-woz-bezwaar"},
  {t:"Eindejaarscheck belastingdruk", wanneer:"november–december", d:"Lijfrente vóór 31 december, box 3-peildatum 1 januari, extra aflossen en schenken.", i:"campagne-eindejaar-belasting"},
  {t:"Box 3, lijfrente of aanvullend pensioen?", wanneer:"het hele jaar; bij spaargeld", d:"Vergelijk de routes voor vermogensopbouw.", i:"box3-lijfrente"},
  {t:"ORV-check", wanneer:"bij polissen ouder dan 5 jaar", d:"Premies zijn gedaald; check dekking, begunstiging en kruislings.", i:"check-orv"},
  {t:"Na de aktepassering", wanneer:"2–4 weken na passeren", d:"Tevredenheid, vragen, opstal, inboedel en voorlopige teruggave.", i:"check-aktepassering"},
  {t:"AOV-check voor ondernemers", wanneer:"jaarlijks; bij premieverhoging", d:"Dekking, verzekerd bedrag, wachttijd en einddatum.", i:"check-aov"},
  {t:"Duurzaamheidscheck", wanneer:"voorjaar; bij einde rentevast", d:"Verduurzamingsplannen, label, financiering en verzekering.", i:"check-duurzaam"},
  {t:"Jaarlijkse nazorg en klanttevredenheid", wanneer:"jaarlijks", d:"Korte uitvraag van wijzigingen en een tevredenheidsmeting.", i:"formulierenbank"}
);

/* ---------- Insluitcodes voor de eigen website ---------- */
ITEMS.push({ id:"insluitcodes", cat:"klanttools", kind:"insluiten", model:"gratis",
  title:"Insluitcodes: tools op je eigen website", by:"Blinqx V&H",
  summary:"Zet PandWise, Duurzaamheidsprofiel of een klanttool uit deze bibliotheek met één stukje code op je eigen website, in Google Sites, WordPress of Wix. Met je kantoornaam, logo en kleuren vooraf ingevuld.",
  channels:["Eigen website (embed)","Google Sites","WordPress","Wix"], tags:["insluitcode","embed","iframe","website","google sites","wordpress","wix","pandwise","duurzaamheidsprofiel","woningwaarde","code"] });

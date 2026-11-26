/* ============================================================
   CAMPAGNES & SELECTIES (PortefeuilleSignalen)
   Sjablonen: {aanhef} {kantoor} {adviseur} {tel} {email} {web}
   Regels: "## " = tussenkop, "- " = opsomming, lege regel = alinea.
   ============================================================ */
const PS_URL = "https://www.portefeuillesignalen.nl/";
const CAMP = [
  { id:"campagne-rentevast-duurzaam", title:"Einde rentevaste periode in zicht? Sluit over en bespaar op woonlasten",
    short:"Einde rentevast + duurzame geldverstrekker",
    summary:"Klanten met energielabel A, B of C en het einde van de rentevaste periode binnen 2 jaar kunnen dubbel besparen: lagere woonlasten én rentekorting bij een duurzame geldverstrekker na een labelsprong.",
    waarom:["Wil je meer halen uit je huidige portefeuille door klanten proactief te benaderen? Met deze campagne ontdek je welke klanten direct kunnen besparen op hun hypotheeklasten, hoe je ze op weg helpt en welke klanten makkelijk kunnen verduurzamen om extra te besparen.",
      "Een duurzame geldverstrekker beloont een labelsprong naar energielabel B, A of A++++ met rentekorting. Samen met de lagere energiekosten levert dat de klant een dubbele besparing op de maandlasten op. Verduurzamen is vaak makkelijker dan gedacht: een woning uit de jaren ’70 is vaak met enkele aanpassingen al flink te verbeteren."],
    blokken:[["Heeft je klant al energielabel A?",["Laat hem profiteren van duurzaamheidskorting","Bespreek simpele verduurzaming om de energierekening te verlagen","Creëer zekerheid in tijden van stijgende rente"]],
             ["Heeft je klant energielabel B of C?",["Verduurzaam het huis en verlaag de energiekosten","Verhoog eenvoudig de lening om verduurzamen te financieren","Profiteer van duurzaamheidskorting","Verhoog de woningwaarde en het wooncomfort","Creëer zekerheid in tijden van stijgende rente"]]],
    doelgroep:["Woning met energielabel A, B of C","Einde rentevaste periode binnen 2 jaar"],
    watDoen:"Wijs deze doelgroep op de mogelijkheden van oversluiten. Is de klant zich bewust van het naderende einde van de rentevaste periode, en van de duurzaamheidskortingen in de markt waarvoor hij bij renteherziening zonder boete in aanmerking kan komen?",
    stappen:[["Mail de klant","Kondig aan dat je contact opneemt over oversluiten in combinatie met verduurzamen. Kies het sjabloon voor label A of voor label B/C."],["Bel de klant","Bel na een paar dagen: is de mail ontvangen? Ga het gesprek aan over situatie en wensen en rond af met een vervolgafspraak. Geen interesse? Bevestig dat aan de klant."],["Help de klant verduurzamen","Laat de klant de verduurzamingsmogelijkheden checken (bijv. met het gratis Duurzaamheidsprofiel). Meer zekerheid nodig? Regel een energieadviseur aan huis voor een rapport op maat."]],
    sjablonen:[
      {naam:"Mail: klanten met energielabel A", onderwerp:"Sluit uw hypotheek duurzaam over en profiteer van lagere woonlasten", tekst:`{aanhef},

U heeft er misschien al eens over nagedacht: het einde van de rentevaste periode van uw hypotheek komt dichterbij. Wat is verstandig om te doen nu de rente de afgelopen periode is gestegen?

## Op zoek naar lagere woonlasten?
Wist u dat woningen met een groen energielabel (label A en B) bij sommige geldverstrekkers in aanmerking komen voor een korting op de rente? Omdat uw woning energielabel A heeft, biedt dit een mooie kans. Aan het einde van uw rentevaste periode kunt u zonder boete overstappen naar een duurzame geldverstrekker die zo'n korting biedt. Ik help u daar graag bij.

## Ook uw energierekening verlagen?
Omdat uw woning energielabel A heeft, kan het interessant zijn om uw hypotheek duurzaam over te sluiten. Daarbij kijken we ook naar mogelijkheden om verder te verduurzamen en zo uw energierekening te verlagen.

## Interesse in duurzaam oversluiten?
Wilt u samen bespreken wat dit voor u kan betekenen? Neem dan contact met mij op via {tel} of {email}. Hoor ik niets van u, dan neem ik binnenkort zelf contact met u op.

Met vriendelijke groet,

{adviseur}
{kantoor}`},
      {naam:"Mail: klanten met energielabel B of C", onderwerp:"Sluit uw hypotheek duurzaam over en profiteer van lagere woonlasten", tekst:`{aanhef},

U heeft er misschien al eens over nagedacht: het einde van de rentevaste periode van uw hypotheek komt dichterbij. Wat is verstandig om te doen nu de rente de afgelopen periode is gestegen? Uw woning heeft energielabel B of C. Wilt u uw woonlasten verlagen? Dan kan het interessant zijn om uw hypotheek duurzaam over te sluiten.

## Wat is duurzaam oversluiten?
Oversluiten betekent dat u uw huidige hypotheek aflost en een nieuwe afsluit, bij uw huidige of een andere geldverstrekker. Duurzaam oversluiten combineert dat met het verduurzamen van uw woning. Er zijn duurzame geldverstrekkers die rentekorting geven voor woningen met een groen energielabel (A of B). Voor uw woning lijkt dat binnen bereik. Daarnaast kan het veel schelen op uw energierekening.

## Waarom nu?
Aan het einde van uw rentevaste periode kunt u zonder boete overstappen naar een andere geldverstrekker. Duurzaam oversluiten kan een aantal voordelen hebben:
- Lagere woonlasten door korting op de hypotheekrente
- Lagere energierekening door duurzame maatregelen
- Hogere woningwaarde
- Goed voor het milieu

## Meer zekerheid over verduurzamen
Wilt u weten welke maatregelen nodig zijn voor een beter energielabel? Dan kan ik kosteloos een energieadviseur bij u langs laten komen voor een verduurzamingsrapport op maat. Vaak levert extra isolatie of zonnepanelen al een labelsprong op.

## Interesse?
Wilt u samen bespreken wat dit voor u kan betekenen? Neem dan contact met mij op via {tel} of {email}. Hoor ik niets van u, dan neem ik binnenkort zelf contact met u op.

Met vriendelijke groet,

{adviseur}
{kantoor}`}],
    links:[{label:"Duurzaamheidsprofiel.nl (gratis verduurzamingscheck)", url:"https://www.duurzaamheidsprofiel.nl/"},{label:"Milieu Centraal", url:"https://www.milieucentraal.nl/"},{label:"PortefeuilleSignalen", url:PS_URL}],
    tags:["rentevaste periode","oversluiten","verduurzamen","energielabel","duurzame geldverstrekker","rentekorting","label a","label b","label c"],
    compliance:"Noem rentekorting en besparing als mogelijkheid, niet als zekerheid; ze verschillen per geldverstrekker. Oversluiten kan kosten met zich meebrengen. Een energieadviseur ‘kosteloos’ noemen alleen als dat voor de klant echt zo is." },

  { id:"campagne-verkopen-terughuren", title:"Huis verkopen en energiezuinig terughuren", short:"Verkopen en terughuren (AOW, label > C)",
    summary:"AOW’ers met meer dan 50% overwaarde en een ongunstig energielabel zitten soms klem tussen een bescheiden pensioen en een hoge energierekening. Verkopen en in verduurzaamde staat terughuren is dan een alternatief.",
    waarom:["Veel senioren hebben een flinke overwaarde, maar hun huis is vaak wat ouder en heeft een ongunstig energielabel. Sommige bewoners zitten klem tussen een bescheiden pensioen en een torenhoge energierekening. Zelf verduurzamen via een hypotheek is niet altijd een optie en voor mensen op leeftijd een hoop gedoe.",
      "De woning verkopen en in verduurzaamde staat terughuren is dan een alternatief, bijvoorbeeld via Levius. Het is ook een extra service voor wie om andere redenen de overwaarde wil benutten. Het past niet bij iedere consument: zie het als aanvulling op je palet van diensten. Ook de eigenaarslasten gaan met de verkoop over."],
    doelgroep:["AOW-gerechtigd","Meer dan 50% overwaarde","Energielabel slechter dan C"],
    watDoen:"Vraag of de relatie last heeft van hoge energielasten en de woning comfortabeler en zuiniger zou willen maken. Leg uit dat daarvoor geleend kan worden, eventueel via een hypotheek, maar dat er ook een alternatief is: de overwaarde vrijspelen terwijl een ander het verduurzamen voor zijn rekening neemt. Ook zonder verduurzamen kan zo een bedrag vrijkomen als aanvulling op het pensioen.",
    stappen:[["Mail de klant","Gebruik het sjabloon, pas het aan of verzorg je eigen aankondiging. Per e-mail of per post."],["Geen reactie? Bel","Vraag of de aankondiging is ontvangen en ga het gesprek aan. Rond af met een vervolgafspraak of een bevestiging dat de klant er (voorlopig) van afziet."],["Breng de klant in contact met de partner","Vindt de klant het interessant, geef de lead dan door aan de aanbieder (bijv. Levius). Informeer de klant en maak een voorbehoud: verkopen en terughuren is niet altijd mogelijk."]],
    sjablonen:[{naam:"Mail: verkopen, verduurzamen en terughuren", onderwerp:"Uw woning verkopen, laten verduurzamen en weer terughuren", tekst:`{aanhef},

Heeft uw woning nog geen goede isolatie, moderne ramen en kozijnen, zonnepanelen of een zuinige cv-ketel? Dan kan de energierekening flink oplopen. En wie zuinig probeert te doen, zit al snel in de kou. Maar de woning verduurzamen kost geld en is een hoop gedoe. Hoe pakt u dat aan?

## Uw overwaarde benutten én comfortabel en zuinig wonen?
Misschien heeft u al eens uitgerekend wat uw woning nu zou opleveren. De huizenprijzen zijn de afgelopen jaren flink gestegen en nieuwere woningen hebben veel lagere energielasten. Maar verhuizen? U woont met plezier in uw buurt. Er is een mogelijkheid die nog weinig mensen kennen.

U verkoopt de woning en beschikt daarmee over een bedrag ineens. Met de koper spreekt u af dat deze de woning op eigen kosten verduurzaamt en aan u terugverhuurt. U betaalt huur, verbruikt minder energie en het onderhoud komt voortaan voor rekening van de verhuurder. Sommige maatregelen zorgen bovendien voor meer comfort: minder kou, tocht en lawaai.

Deze oplossing heeft ook nadelen en grote gevolgen: u bent geen eigenaar meer en gaat huur betalen. Of het bij u past, hangt af van uw situatie.

## Interesse?
Wilt u samen bespreken wat er in uw situatie mogelijk is? Neem dan contact met mij op via {tel} of {email}. Hoor ik niets van u, dan neem ik binnenkort zelf contact met u op.

Met vriendelijke groet,

{adviseur}
{kantoor}`}],
    links:[{label:"Levius", url:"https://www.levius.nl/"},{label:"PortefeuilleSignalen", url:PS_URL}],
    tags:["senioren","aow","overwaarde","verkopen","terughuren","energielabel","levius","verzilveren","pensioen"],
    compliance:"Verkopen en terughuren heeft grote, vaak onomkeerbare gevolgen (huurrisico, verlies van eigendom, fiscale gevolgen). Alleen bespreken na een zorgvuldige inventarisatie; de mailtekst benoemt daarom ook de nadelen. Vraag toestemming voordat je een lead doorgeeft (AVG)." },

  { id:"campagne-pensioen", title:"Betaalbaarheid bij pensioen", short:"Betaalbaarheid bij pensioen (50–57 jaar)",
    summary:"Relaties van 50–57 jaar met een volledig aflossingsvrije hypotheek: tijdig informeren over de invloed van pensioeninkomen op financieringsmogelijkheden en het einde van de renteaftrek. Met drie mails per leeftijdsgroep.",
    waarom:["Veel huizenbezitters kunnen vanaf 2031 hun hypotheekrente niet meer aftrekken. Wie dan nog niet heeft afgelost, kan hogere netto lasten krijgen. Daarnaast telt bij geldverstrekkers het pensioeninkomen steeds eerder mee (bij sommige vanaf 15 jaar vóór de AOW-leeftijd). Met deze campagne breng je de klanten waarbij dit speelt op tijd in beeld."],
    doelgroep:["Relaties van 50–57 jaar","100% aflossingsvrije hypotheek"],
    watDoen:"Vraag of de relatie na pensionering de netto maandlasten nog kan betalen. Leg uit dat verlengen of oversluiten niet altijd mogelijk is. Betrek restschuld, woningwaarde en pensioeninkomen op de einddatum. De rente kan dan hoger zijn en op enig moment niet meer aftrekbaar. Zijn er eigen middelen om (deels) af te lossen?",
    stappen:[["Mail de klant","Kies de mail die past bij de leeftijd: 50–52, 53–55 of 56–57 jaar."],["Geen reactie? Bel","Vraag of de mail is ontvangen en ga het gesprek aan. Rond af met een vervolgafspraak of een bevestiging dat de klant er (voorlopig) van afziet."],["Bevestig de uitkomst per e-mail","Leg vast wat is afgesproken, met motivatie, en voeg het toe aan het klantdossier. Ook als je de relatie herhaaldelijk niet kon bereiken (zorgplicht)."]],
    sjablonen:[
      {naam:"Mail 1: leeftijd 50–52 (bewustwording)", onderwerp:"Waarom uw inkomen ‘straks’ nu al invloed heeft op uw woonwensen", tekst:`{aanhef},

Wist u dat uw pensioeninkomen al vóór uw pensioen invloed kan hebben op uw financieringsmogelijkheden, en dus op uw woonwensen? Dat klinkt misschien opmerkelijk. Daarom leggen wij het als uw adviseur graag uit.

## Straks minder mogelijkheden om te wonen zoals u wilt?
Misschien wilt u later anders gaan wonen, of een deel van de waarde van uw huis gebruiken om ruimer te leven of uw (klein)kinderen te helpen. Daarvoor wilt u dan uw hypotheek aanpassen. Geldverstrekkers rekenen echter steeds eerder met uw inkomen na pensionering; bij sommige al vanaf ongeveer 15 jaar vóór uw AOW-leeftijd. Dat inkomen is bijna altijd lager dan nu, zeker bij een pensioentekort. Uw mogelijkheden kunnen dan beperkter zijn.

## Goed geïnformeerd, op tijd
U hoeft nu nog niets te doen. Wij nodigen u later uit om samen te kijken wat voor u de beste opties zijn. Het is wel verstandig om er nu al over na te denken: goede plannen over wonen en leven kosten tijd.

## Liever nu al een afspraak?
Dat kan natuurlijk. Neem contact met ons op via {tel} of {email}, dan plannen we een gesprek in.

Met vriendelijke groet,

{adviseur}
{kantoor}`},
      {naam:"Mail 2: leeftijd 53–55 (uitnodiging)", onderwerp:"Denkt u aan de toekomst? Denk dan ook aan uw woonwensen en uw hypotheek", tekst:`{aanhef},

Iedereen denkt weleens na over de toekomst. Denk daarbij ook eens aan uw hypotheek. Geldverstrekkers rekenen steeds eerder met uw inkomen na pensionering, en dat heeft invloed op uw mogelijkheden om uw hypotheek aan te passen, over te sluiten of betaalbaar te houden.

## Straks minder mogelijkheden?
Misschien wilt u later anders gaan wonen, of de waarde van uw huis gebruiken om ruimer te leven of uw (klein)kinderen te helpen. Uw pensioeninkomen is bijna altijd lager dan uw huidige inkomen, zeker bij een pensioentekort. Daardoor kunnen uw mogelijkheden beperkter worden. Nu heeft u nog de gelegenheid om maatregelen te treffen.

## Maak een afspraak voor een oriënterend gesprek
We bekijken graag samen met u welke mogelijkheden u heeft. Neem contact met ons op via {tel} of {email}, dan plannen we een afspraak in. We vertellen u dan ook waar andere huiseigenaren tegenaan lopen en hoe zij dat oplossen.

Met vriendelijke groet,

{adviseur}
{kantoor}`},
      {naam:"Mail 3: leeftijd 56–57 (herinnering)", onderwerp:"Maak een afspraak over uw hypotheek na uw pensioen", tekst:`{aanhef},

Eerder informeerden wij u over de invloed van uw pensioeninkomen op uw hypotheekmogelijkheden. Omdat u dichter bij die leeftijd komt, sturen wij u deze herinnering.

## Minder mogelijkheden na uw pensioen?
Misschien wilt u later anders gaan wonen, of een deel van de waarde van uw huis gebruiken. Geldverstrekkers rekenen daarbij met uw inkomen na pensionering, dat meestal lager is dan nu. Dat kan uw mogelijkheden beperken, soms ook om te blijven wonen zoals u wilt. Hoe eerder u dit in beeld heeft, hoe meer keuzes u nog heeft.

## Wij helpen u graag
Plan een oriënterend gesprek via {tel} of {email}. We bekijken samen uw situatie en uw mogelijkheden. U bepaalt uiteraard zelf of en welke stappen u wilt zetten.

Met vriendelijke groet,

{adviseur}
{kantoor}`}],
    links:[{label:"Tool: Aflossingsvrije hypotheek nu & straks", url:"#/item/aflossingsvrij-check"},{label:"Rabobank: nieuw beleid maart 2027", url:"https://www.rabobank.nl/particulieren/hypotheek/nieuw-beleid"},{label:"PortefeuilleSignalen", url:PS_URL}],
    tags:["pensioen","2031","renteaftrek","aflossingsvrij","50-57","52+","senioren","netto lasten","aow"],
    compliance:"Vermijd onterechte tijdsdruk (“de tijd dringt”). De oorspronkelijke sjablonen noemden een vaste grens van 57 jaar; beleid verschilt per geldverstrekker en is in deze versie algemener verwoord. Het 2031-vraagstuk is nog niet definitief besloten. Noem een gesprek alleen ‘kosteloos’ als dat klopt." },

  { id:"campagne-kvk", title:"KvK-registratie gevonden", short:"KvK-registratie gevonden",
    summary:"Relaties bij wie op het correspondentieadres een KvK-registratie is gevonden: aanleiding om ondernemersrisico’s te bespreken (aansprakelijkheid, overlijden, arbeidsongeschiktheid, pensioen) en besparingen door verduurzamen.",
    waarom:["Voor ondernemers is het juist in onzekere tijden belangrijk om te kijken naar besparingen, bijvoorbeeld door verduurzamen of het aanpassen van verzekeringen, en naar ondernemersrisico’s: bedrijfsaansprakelijkheid, overlijden, arbeidsongeschiktheid en pensioenopbouw."],
    doelgroep:["Relaties met een KvK-registratie op het correspondentieadres"],
    watDoen:"Vraag of de relatie zich bewust is van de risico’s en welke voorzieningen er zijn getroffen: bedrijfsaansprakelijkheid, overlijden, arbeidsongeschiktheid en pensioenopbouw.",
    stappen:[["Mail de klant","Gebruik het sjabloon of verzorg je eigen aankondiging."],["Geen reactie? Bel","Ga het gesprek aan en rond af met een vervolgafspraak of een bevestiging dat de klant er (voorlopig) van afziet."],["Bevestig de uitkomst per e-mail","Leg de afspraken met motivatie vast in het klantdossier (zorgplicht)."]],
    sjablonen:[{naam:"Mail: financiële check voor ondernemers", onderwerp:"Financiële check voor ondernemers", tekst:`{aanhef},

Als ondernemer heeft u met andere risico’s te maken dan in loondienst. Daarom is het verstandig om af en toe te kijken of de belangrijkste risico’s goed zijn afgedekt en of er kansen zijn om te besparen. Wij nodigen u graag uit voor een persoonlijk gesprek.

## Waar we het over hebben
In het gesprek kijken we samen naar uw vaste lasten, besparen door verduurzamen en het afdekken van ondernemersrisico’s zoals bedrijfsaansprakelijkheid, overlijden, arbeidsongeschiktheid en pensioenopbouw. Daarbij beantwoorden we uiteraard al uw vragen.

Het gesprek duurt ongeveer een uur.

## Maak een afspraak
Neem contact met ons op via {tel} of {email}, dan plannen we een moment dat u uitkomt.

Met vriendelijke groet,

{adviseur}
{kantoor}`}],
    links:[{label:"PortefeuilleSignalen", url:PS_URL}],
    tags:["ondernemer","zzp","kvk","aov","avb","schade","zakelijk","pensioen","verduurzamen"],
    compliance:"Gebruik KvK-gegevens alleen binnen een bestaande klantrelatie en leg de grondslag vast (AVG). Noem het gesprek alleen ‘kosteloos’ als dat klopt." },

  { id:"campagne-duurzaam-oversluiten", title:"Duurzaam oversluiten", short:"Duurzaam oversluiten",
    summary:"Is oversluiten voordelig? Neem verduurzaming mee in het adviesgesprek: lagere maandlasten, meer wooncomfort, een hogere verkoopprijs en een gunstiger rente bij een beter energielabel.",
    waarom:["Slim investeren in verduurzaming zorgt voor lagere maandlasten, meer wooncomfort en een hogere verkoopprijs. Een gunstig energielabel leidt bij een duurzame geldverstrekker bovendien tot een lagere hypotheekrente. Iets positiefs doen voor het milieu én er financieel beter van worden."],
    doelgroep:["Energielabel A, B, C of D","Geen spaarhypotheek","Rente boven 3,5%","Boete tot en met € 15.000","Maximaal 85% LTV"],
    watDoen:"Wijs de relatie op de voordelen van oversluiten in combinatie met het verduurzamen van de woning.",
    stappen:[["Mail de klant","Kies het sjabloon voor label A of voor label B/C."],["Geen reactie na 2 weken? Bel","Vraag of de mail is ontvangen en ga het gesprek aan. Geen interesse? Bevestig dat aan de klant."],["Bevestig de uitkomst per e-mail","Leg de afspraken met motivatie vast in het klantdossier."],["Vraag een duurzaamheidsrapport op maat aan","Heeft de klant behoefte aan meer zekerheid, laat dan een onafhankelijke energieadviseur langskomen voor een rapport met het haalbare energielabel en de benodigde investering."]],
    sjablonen:[
      {naam:"Mail: klanten met energielabel A", onderwerp:"Sluit uw hypotheek duurzaam over en profiteer van lagere woonlasten", tekst:`{aanhef},

Woningen met een groen energielabel (A en B) komen bij sommige geldverstrekkers in aanmerking voor een korting op de rente. Uw woning heeft energielabel A; dat biedt een mooie kans.

## Op zoek naar lagere woonlasten?
Misschien heeft u er al eens over nagedacht: uw hypotheek oversluiten. Afhankelijk van uw huidige rente, de boete en de kosten kan dat interessant zijn. Door over te stappen naar een duurzame geldverstrekker die uw energielabel beloont, kunt u mogelijk besparen op uw maandlasten. Wij rekenen graag voor u uit of dat in uw situatie zo is.

## Interesse in duurzaam oversluiten?
Neem contact met mij op via {tel} of {email}. Hoor ik niets van u, dan neem ik binnenkort zelf contact met u op.

Met vriendelijke groet,

{adviseur}
{kantoor}`},
      {naam:"Mail: klanten met energielabel B of C", onderwerp:"Sluit uw hypotheek duurzaam over en profiteer van lagere woonlasten", tekst:`{aanhef},

Uw woning heeft energielabel B of C. Wilt u uw woonlasten verlagen? Dan kan het interessant zijn om uw hypotheek duurzaam over te sluiten.

## Wat is duurzaam oversluiten?
Oversluiten betekent dat u uw huidige hypotheek aflost en een nieuwe afsluit, bij uw huidige of een andere geldverstrekker. Duurzaam oversluiten combineert dat met het verduurzamen van uw woning. Er zijn duurzame geldverstrekkers die rentekorting geven voor woningen met een groen energielabel (A of B). Voor uw woning lijkt dat binnen bereik.

## De mogelijke voordelen
- Lagere woonlasten door korting op de hypotheekrente
- Lagere energierekening door duurzame maatregelen
- Hogere woningwaarde
- Goed voor het milieu

## Doe de verduurzamingscheck
Met een gratis verduurzamingscheck, bijvoorbeeld via duurzaamheidsprofiel.nl, ziet u welke investering nodig is voor een beter energielabel en wat dat kan opleveren.

## Meer zekerheid over verduurzamen
Ik kan een energieadviseur bij u langs laten komen voor een verduurzamingsrapport op maat. Vaak levert extra isolatie of zonnepanelen al een labelsprong op.

## Interesse?
Neem contact met mij op via {tel} of {email}. Hoor ik niets van u, dan neem ik binnenkort zelf contact met u op.

Met vriendelijke groet,

{adviseur}
{kantoor}`}],
    links:[{label:"Duurzaamheidsprofiel.nl", url:"https://www.duurzaamheidsprofiel.nl/"},{label:"PortefeuilleSignalen", url:PS_URL}],
    tags:["oversluiten","verduurzamen","energielabel","duurzame geldverstrekker","rentekorting","boete","ltv"],
    compliance:"Oversluiten loont niet altijd (boete, advies-, taxatie- en notariskosten). Formuleer besparing als mogelijkheid. Het oorspronkelijke sjabloon sprak van ‘de rente is momenteel laag’; dat is uit deze versie gehaald." }
];

CAMP.push({ id:"campagne-opstal-inboedel", title:"Jaarlijkse check: is de opstal- en inboedeldekking nog passend?", short:"Jaarlijkse check opstal & inboedel",
  summary:"Een vast jaarlijks contactmoment voor schadeklanten: zijn herbouwwaarde, inboedelwaarde, eigen risico en dekking nog passend na verbouwing, verduurzaming, dure aankopen of een andere gezinssituatie?",
  waarom:["Woningen en inboedels veranderen, polissen niet vanzelf. Na een verbouwing, zonnepanelen of een warmtepomp, dure aankopen of een verhuizing lopen veel klanten ongemerkt het risico op onderverzekering. Bij schade keert de verzekeraar dan mogelijk maar een deel uit.",
    "Een jaarlijkse check is goede nazorg en een logisch moment voor contact. Je laat zien dat je meedenkt, voorkomt teleurstelling bij schade en vindt vaak ook kansen: een betere dekking, een passend eigen risico of een bundel."],
  blokken:[["Opstal: waar let je op?",["Herbouwwaarde langer dan 5 jaar geleden bepaald","Verbouwing, uitbouw of verduurzaming","Verhuur, leegstand of bedrijf aan huis","Garantie tegen onderverzekering"]],
           ["Inboedel: waar let je op?",["Inboedelwaarde langer dan 3 jaar geleden berekend","Dure aankopen: e-bike, elektronica, sieraden","Samenwonen, gezinsuitbreiding, kinderen uit huis","Thuiswerken en huurdersbelang"]]],
  doelgroep:["Klanten met een opstal- en/of inboedelverzekering","Bij voorkeur 1–2 maanden vóór de prolongatiedatum","Extra aandacht: polis ouder dan 3 jaar zonder wijziging, of een signaal van verbouwing, verduurzaming of verhuizing"],
  watDoen:"Nodig de klant jaarlijks uit om de dekking te controleren. Stuur de link naar de check, bespreek de uitkomst en leg vast wat je hebt besproken en wat de klant besluit.",
  stappen:[["Mail de klant","Stuur de uitnodiging met de link naar de check opstal & inboedel (maak je persoonlijke link via de tool)."],["Bespreek de uitkomst","De klant stuurt de samenvatting naar je. Bel of plan een kort gesprek, en laat zo nodig de herbouw- of inboedelwaarde opnieuw bepalen."],["Pas aan en bevestig","Verwerk wijzigingen bij de verzekeraar en bevestig de uitkomst per e-mail, ook als de klant niets wil wijzigen (zorgplicht en dossiervorming)."],["Geen reactie? Herinner","Stuur na twee weken een korte herinnering en leg vast dat je de klant hebt benaderd."]],
  sjablonen:[
    {naam:"Mail: uitnodiging jaarlijkse check", onderwerp:"Is uw woning en inboedel nog goed verzekerd?", tekst:`{aanhef},

Uw woning en uw spullen veranderen in de loop van de tijd, uw verzekering niet vanzelf. Daarom nodigen wij u uit voor de jaarlijkse check van uw opstal- en inboedelverzekering.

## Waarom is dit belangrijk?
Heeft u verbouwd, zonnepanelen of een warmtepomp laten plaatsen, dure spullen gekocht of is uw gezinssituatie veranderd? Dan past uw verzekering mogelijk niet meer. Bij onderverzekering keert de verzekeraar bij schade soms maar een deel uit.

## Doe de check in drie minuten
Via de link hieronder beantwoordt u vijftien korte vragen. U ziet direct of uw dekking nog passend lijkt, en u kunt de uitkomst naar ons sturen:
[link naar de check]

Liever direct even bellen? Dat kan via {tel}.

Met vriendelijke groet,

{adviseur}
{kantoor}`},
    {naam:"Mail: na een verbouwing of verduurzaming", onderwerp:"Verbouwd of verduurzaamd? Check uw verzekering", tekst:`{aanhef},

Gefeliciteerd met uw verbouwing of verduurzaming. Een mooie stap, en een goed moment om ook naar uw verzekeringen te kijken.

## Waar moet u aan denken?
- Een uitbouw, nieuwe keuken of badkamer verhoogt vaak de herbouwwaarde van uw woning.
- Zonnepanelen, een warmtepomp, thuisbatterij of laadpaal zijn niet altijd automatisch (volledig) meeverzekerd.
- Is uw woning meer waard geworden, dan kan ook uw inboedel zijn veranderd.

Wij controleren graag of uw opstal- en inboedelverzekering hier nog bij passen. Reageer op deze mail of bel ons op {tel}.

Met vriendelijke groet,

{adviseur}
{kantoor}`},
    {naam:"Mail: herinnering", onderwerp:"Herinnering: jaarlijkse check van uw woonverzekeringen", tekst:`{aanhef},

Enige tijd geleden nodigden wij u uit voor de jaarlijkse check van uw opstal- en inboedelverzekering. Wij hebben nog niets van u gehoord.

De check kost ongeveer drie minuten en helpt u verrassingen bij schade te voorkomen:
[link naar de check]

Is er niets veranderd in uw situatie? Dan hoort u dat ook graag van u, zodat we dat kunnen vastleggen.

Met vriendelijke groet,

{adviseur}
{kantoor}`},
    {naam:"Mail: bevestiging van het gesprek", onderwerp:"Bevestiging: uitkomst check opstal en inboedel", tekst:`{aanhef},

Dank voor het prettige contact over uw opstal- en inboedelverzekering. Hierbij bevestigen wij wat we hebben besproken.

## Wat we hebben besproken
- [bijvoorbeeld: herbouwwaarde opnieuw bepaald / zonnepanelen meeverzekerd / inboedelwaarde aangepast]
- [eventuele wijziging in eigen risico of dekking]

## Uw keuze
- [wijziging doorgevoerd per ... / u heeft besloten niets te wijzigen]

Klopt dit niet, of verandert er iets in uw situatie? Laat het ons dan weten. Wij nemen volgend jaar weer contact met u op.

Met vriendelijke groet,

{adviseur}
{kantoor}`}],
  links:[{label:"Tool: check opstal & inboedel", url:"#/item/verzekeringscheck"},{label:"Klimaatcijfer.nl", url:"https://klimaatcijfer.nl/"},{label:"Funderingscijfer.nl", url:"https://funderingscijfer.nl/"}],
  tags:["opstal","inboedel","schadeverzekering","onderverzekering","herbouwwaarde","inboedelwaarde","nazorg","prolongatie","verbouwing","zonnepanelen"],
  compliance:"De check is een hulpmiddel, geen advies; de polisvoorwaarden zijn leidend. Leg advies en de keuze van de klant vast, ook als de klant niets wijzigt. Commerciële mail alleen aan klanten of met toestemming, met afmeldmogelijkheid." });

const SEL = [
  { id:"sel-scheiding", title:"Mogelijke relaties in scheiding", tekst:["Uit de praktijk blijkt dat ongeveer twee op de drie relaties in deze selectie in een scheiding zitten en daarna goed advies nodig hebben over de gevolgen voor hun hypotheek. Andere relaties blijken vaak te verhuizen, bijvoorbeeld vanwege een nieuwe baan."], tip:"Bel deze relaties met een servicecall: “Enige tijd geleden heeft u via ons kantoor uw hypotheek afgesloten. Hoe gaat het nu met u?”", tags:["scheiding","verhuizen","service-call","woning te koop"], compliance:"Benoem een vermoedelijke scheiding nooit richting de klant; open het gesprek neutraal." },
  { id:"sel-gestopte-rokers", title:"Gestopte rokers actie", tekst:["Stoppen met roken levert een flinke besparing op de premie van een overlijdensrisicoverzekering op. Deze selectie laat zien welke klanten een ORV van vóór 2012 hebben en toen rookten. Benader ze met een nieuwsbrief of update over de mogelijke besparing als ze inmiddels gestopt zijn."], tags:["orv","roken","besparen","premie","overlijdensrisicoverzekering"], compliance:"Rookgedrag is gevoelige informatie: vraag er niet naar in een massamail, maar informeer algemeen." },
  { id:"sel-zekerheid", title:"Zekerheid actie", tekst:["Laat zien welke klanten kunnen profiteren van meer zekerheid, bijvoorbeeld door de rente langer vast te zetten. De zoekcriteria zorgen ervoor dat er goede oversluitmogelijkheden zijn. Nodig deze klanten uit voor een oriënterend gesprek over zekerheid in onzekere tijden."], tags:["zekerheid","rentevast","oversluiten","10 jaar vast"] },
  { id:"sel-nu-aflossen-leeftijd", title:"Nu aflossen in verband met leeftijd", tekst:["Benader relaties die relatief veel aflossingsvrije hypotheek hebben ten opzichte van hun leeftijd en eigenlijk zouden moeten gaan aflossen, omdat:"], punten:["de betaalbaarheid op de pensioendatum mogelijk in gevaar is","de renteaftrek komt te vervallen","ze vanwege hun leeftijd mogelijk voor het laatst een nieuwe looptijd kunnen kiezen zonder dat het pensioeninkomen zwaar meetelt","ze ouders van 75 tot 85 jaar hebben (erfenis of schenking kan een rol spelen)"], tags:["aflossingsvrij","aflossen","pensioen","renteaftrek","leeftijd","erfenis","schenking"], links:[{label:"Tool: Aflossingsvrije hypotheek nu & straks", url:"#/item/aflossingsvrij-check"}], compliance:"Vraag niet in een mailing naar een verwachte erfenis; bespreek dat alleen persoonlijk en met tact." },
  { id:"sel-nhg", title:"NHG actie", tekst:["Laat zien welke relaties volgens de standaardvoorwaarden in aanmerking komen voor NHG. Controleer na het draaien van de selectie twee dingen:"], punten:["Staan de gegevens correct in het systeem, vooral de tariefklasse?","Wat is de financiële situatie van de klant: staat de hypotheek ‘onder water’ en is oversluiten financieel haalbaar?"], tags:["nhg","tariefklasse","oversluiten","rentekorting"], compliance:"Controleer de actuele NHG-kostengrens (2027: € 500.000, € 530.000 met energiebesparende voorzieningen)." },
  { id:"sel-verjaardagen", title:"Verjaardagen", tekst:["Bekijk de verjaardagen binnen je portefeuille: binnen een week, twee weken, een maand, twee maanden of drie maanden. Een kaartje of bloemetje is een laagdrempelig contactmoment."], links:[{label:"Greetz verjaardagskaarten", url:"https://www.greetz.nl/kaarten/verjaardag"},{label:"Topbloemen.nl", url:"https://topbloemen.nl/categorie-boeketten"}], tags:["verjaardag","klantbinding","kaart","bloemen","contactmoment"] },
  { id:"sel-verzilver", title:"Verzilverhypotheek / OverwaardePlan", tekst:["Selectie voor 60-plussers die hun overwaarde willen gebruiken, bijvoorbeeld als aanvulling op het inkomen, voor verbouwen of om (klein)kinderen te helpen."], punten:["Iedereen met een hypotheek","Aanvrager en/of partner 60 jaar of ouder","Geschatte LTV tot 50% van de marktwaarde"], extra:"Aanbieders van verzilverproducten waren onder meer Florius (Verzilver Hypotheek) en Rabobank (Krediethypotheek en OverwaardePlan). Bij een verzilverhypotheek hangt het leenbedrag niet af van inkomen maar van overwaarde, leeftijd en rente; de rente wordt vaak bijgeschreven op de lening en pas bij verkoop afgelost.", tags:["verzilveren","overwaarde","60+","senioren","florius","rabobank","overwaardeplan","pensioen"], historisch:true, compliance:"De productinformatie in de bron dateert uit 2017. Controleer het actuele aanbod en de voorwaarden; een oplopende schuld door bijgeschreven rente moet je duidelijk uitleggen." },
  { id:"sel-renteverlengers", title:"Selectie snurkers: renteverlengers", tekst:["Vier selecties die de belangrijkste signalen voor renteverlenging laten zien:"], punten:["Renteverlengers over 1–12 maanden, hypotheek vanaf € 150.000, tot 56 jaar","Renteverlengers over 12–24 maanden, hypotheek vanaf € 150.000, tot 56 jaar","Renteverlengers over 1–12 maanden, hypotheek vanaf € 150.000, vanaf 56 jaar","Renteverlengers over 12–24 maanden, hypotheek vanaf € 150.000, vanaf 56 jaar"], tags:["renteverlenging","snurkers","rentevaste periode","oversluiten","behoud"] },
  { id:"sel-kunnen-besparen", title:"Relaties die kunnen besparen", tekst:["Uitgangspunten van de selectie:"], punten:["Ingangsdatum hypotheek tussen 1-1-2010 en 1-1-2016","Rentevaste periode van 10 jaar","Rente hoger dan 4%","Huidige LTV maximaal 80%","Nu geen NHG"], extra:"Aanleidingen voor een gesprek: een lagere risicoklasse door gestegen woningwaarde en aflossing, intern of extern oversluiten (een lagere rente versnelt bij annuïtair en lineair ook de aflossing) en rentemiddeling.", tags:["besparen","risicoklasse","oversluiten","rentemiddeling","ltv","topafslag"] },
  { id:"sel-overwaarde", title:"Selectie overwaardehypotheek", tekst:["Veel senioren hebben een groot deel van hun vermogen in hun huis zitten, vaak meer dan in spaargeld, beleggingen of pensioen. Ze zijn gehecht aan hun woning en omgeving en willen die vaak levensbestendig maken tegen lage maandlasten.","Er zijn grofweg vier manieren om ‘geld uit de stenen’ te halen:"], punten:["Lenen via een hypotheek met de woning als onderpand (verzilver- of overwaardehypotheek)","Lenen via de gemeente met de woning als onderpand (bijv. via SVn)","De woning verkopen en blijven wonen als huurder","De grond verkopen en erfpacht gaan betalen"], extra:"Voorbeeldselecties: LTV < 50% vanaf 60 jaar · LTV < 60% vanaf 67 jaar · LTV < 70% vanaf 75 jaar. Minimale leeftijden verschillen per aanbieder.", tags:["overwaarde","verzilveren","senioren","60+","erfpacht","svn","levensloopbestendig"], historisch:true, compliance:"Aanbieders en voorwaarden uit de bron (2019) kunnen zijn gewijzigd; controleer het actuele aanbod." },
  { id:"sel-boete-gemaximeerd", title:"Boete gemaximeerd", tekst:["Bij sommige geldverstrekkers is de boete bij oversluiten gemaximeerd. Grote boetes zijn dan geen struikelblok meer: de besparing is groter en de terugverdientijd korter."], voorbeeld:[["Hoofdsom","€ 200.000"],["Boetevrij (10% per kalenderjaar)","€ 20.000"],["Restant","€ 180.000"],["Boete (gemaximeerd op 3%)","€ 5.400"]], tags:["boete","gemaximeerd","oversluiten","besparen","terugverdientijd"], compliance:"Rekenvoorbeeld is illustratief; controleer de actuele boeteregeling per geldverstrekker. Boete is niet altijd fiscaal aftrekbaar." },
  { id:"sel-boetevrij", title:"Boetevrij oversluiten", tekst:["Selecteer relaties bij geldverstrekkers waar (tijdelijk) helemaal geen boete geldt bij oversluiten of extra aflossen. Voorbeeld uit de praktijk: klanten met een DSB Bank-hypotheek konden vanaf 1 april 2020 volledig boetevrij aflossen."], tags:["boetevrij","oversluiten","dsb","aflossen","besparen"], historisch:true,
    sjablonen:[{naam:"Brief: zonder boete oversluiten", onderwerp:"U kunt mogelijk besparen: oversluiten zonder boete", tekst:`{aanhef},

Bij uw huidige geldverstrekker kunt u uw hypotheek zonder boete aflossen. Daardoor kan het interessant zijn om over te stappen naar een andere geldverstrekker: er is geen boete, en mogelijk krijgt u een lagere rente en lagere maandlasten. Ook de voorwaarden kunnen gunstiger zijn.

Wij rekenen graag voor u uit wat u kunt besparen. Daarvoor bellen we u binnenkort om een afspraak te plannen. Is overstappen voor u voordelig, dan regelen we alles voor u.

Wilt u niet op ons telefoontje wachten? Neem gerust contact op via {tel} of {email}.

Met vriendelijke groet,

{adviseur}
{kantoor}`}],
    compliance:"De DSB-regeling is historisch (2020). Gebruik de brief alleen voor klanten bij wie boetevrij aflossen nu daadwerkelijk geldt, en houd rekening met overige kosten." },
  { id:"sel-duurzame-geldverstrekker", title:"Duurzame geldverstrekker: einde rentevast", tekst:["Selectie van klanten met energielabel A, B of C en het einde van de rentevaste periode binnen 2 jaar. Bij een duurzame geldverstrekker kunnen zij profiteren van rentekorting na een labelsprong naar B, A of A++++. Zie de bijbehorende campagne voor de mailsjablonen."], punten:["Klanten met energielabel A","Klanten met energielabel B en C"], links:[{label:"Campagne: einde rentevast + verduurzamen", url:"#/item/campagne-rentevast-duurzaam"}], tags:["duurzame geldverstrekker","energielabel","rentekorting","rentevaste periode","verduurzamen"] }
];

CAMP.forEach(c => ITEMS.push({ id:c.id, cat:"campagnes", kind:"campagne", model:"freemium", title:"Campagne: "+c.title, by:"PortefeuilleSignalen",
  summary:c.summary, channels:["Eigen e-mail","Blinqx Connect","Word"], tags:["campagne",...c.tags], data:c }));
SEL.forEach(s => ITEMS.push({ id:s.id, cat:"campagnes", kind:"selectie", model:"freemium", title:"Selectie: "+s.title, by:"PortefeuilleSignalen",
  summary:s.tekst.join(" ").slice(0,220)+(s.tekst.join(" ").length>220?"…":""), channels:["PortefeuilleSignalen"], tags:["selectie",...s.tags], data:s }));

/* ============================================================
   SCHADE- EN INKOMENSACTIES: campagnes, klantchecks en actie-ideeën
   ============================================================ */
const MAILSLOT = `

Met vriendelijke groet,

{adviseur}
{kantoor}`;

const SCHADE_CAMP = [
{ id:"campagne-wintersport", title:"Op wintersport? Check je reisverzekering", short:"Wintersport en reisverzekering",
  summary:"Een standaard reisverzekering dekt wintersport vaak niet of beperkt. Help klanten vóór vertrek met de juiste dekking voor ski-uitrusting, ongevallen, repatriëring en medische kosten in het buitenland.",
  waarom:["Elk jaar gaan veel Nederlanders op wintersport. Een ongeluk op de piste kan duur uitpakken: medische kosten in het buitenland worden door de basisverzekering vaak maar tot het Nederlandse tarief vergoed, en vervoer naar huis of een helikopterredding valt er meestal niet onder.",
    "Veel klanten weten niet dat wintersport bij hun reisverzekering een aparte (aanvullende) dekking is. Een korte mail in het najaar is een waardevolle service en een natuurlijk contactmoment."],
  blokken:[["Waar let je op?",["Is wintersport meeverzekerd (ook off-piste)?","Ski- en snowboarduitrusting: eigen en gehuurd","Buitenlandse medische kosten en repatriëring","Annulering en ongevallendekking"]],["Doelgroep-tips",["Gezinnen met (schoolgaande) kinderen: kerst- en voorjaarsvakantie","Klanten met een doorlopende reisverzekering","Jongeren en studenten (vaak geen eigen reispolis)"]]],
  doelgroep:["Klanten met een doorlopende reisverzekering","Gezinnen met kinderen","Benaderen in oktober–november en januari"],
  watDoen:"Stuur klanten vóór het wintersportseizoen een korte mail: check of wintersport is meeverzekerd, welke uitrusting gedekt is en hoe het zit met medische kosten in het buitenland.",
  stappen:[["Selecteer","Klanten met een reisverzekering en gezinnen met kinderen."],["Mail","Stuur de wintersportmail in oktober of november."],["Volg op","Pas de dekking aan waar nodig en bevestig per mail."]],
  sjablonen:[{naam:"Mail: op wintersport?", onderwerp:"Op wintersport? Check eerst uw reisverzekering", tekst:`{aanhef},

Gaat u deze winter skiën of snowboarden? Dan is het verstandig om vóór vertrek uw reisverzekering te checken. Wintersport is namelijk niet altijd standaard meeverzekerd.

## Waar moet u op letten?
- Is wintersport meeverzekerd, en geldt dat ook buiten de piste?
- Is uw eigen of gehuurde ski- of snowboarduitrusting verzekerd?
- Hoe zit het met medische kosten in het buitenland? De basisverzekering vergoedt vaak maar tot het Nederlandse tarief.
- Zijn vervoer naar huis (repatriëring) en hulp bij een ongeval gedekt?
- Heeft u een annuleringsverzekering, bijvoorbeeld als u vlak voor vertrek ziek wordt?

Wij kijken graag met u mee, zodat u zorgeloos op vakantie gaat. Reageer op deze mail of bel ons op {tel}.` + MAILSLOT}],
  links:[], tags:["wintersport","reisverzekering","skiën","snowboard","annulering","repatriëring","medische kosten buitenland","vakantie"],
  compliance:"Noem dekkingen als aandachtspunt, niet als garantie; de polisvoorwaarden zijn leidend. Vermeld bij acties met korting de voorwaarden." },

{ id:"campagne-avp", title:"Aansprakelijkheidsverzekering: klein bedrag, groot verschil", short:"Aansprakelijkheidsverzekering (AVP)",
  summary:"De aansprakelijkheidsverzekering is niet verplicht, maar een schade aan een ander kan flink oplopen. Check of klanten (en hun gezin) goed verzekerd zijn.",
  waarom:["Iedereen kan per ongeluk schade aan een ander veroorzaken: een fietsongeluk, een omgestoten laptop of een kind dat met een bal een ruit kapotgooit. Zonder aansprakelijkheidsverzekering betaal je die schade zelf, en dat kan om grote bedragen gaan.",
    "Ouders zijn aansprakelijk voor schade door kinderen tot 14 jaar. Bij uitwonende of studerende kinderen, nieuwe partners en geleende spullen is de dekking niet altijd duidelijk. Een goede gelegenheid voor een check."],
  blokken:[["Aandachtspunten",["Gezinsdekking of alleenstaand?","Uitwonende en studerende kinderen meeverzekerd?","Geleende en gehuurde spullen (opzicht)","Verzekerd bedrag en eigen risico"]],["Momenten",["Samenwonen of trouwen","Kind krijgen","Kind gaat uit huis of studeren","Huisdier aanschaffen"]]],
  doelgroep:["Klanten zonder AVP in je portefeuille","Gezinnen met kinderen","Klanten met een gewijzigde gezinssituatie"],
  watDoen:"Wijs klanten op het belang van een AVP en check of de gezinssituatie nog klopt op de polis.",
  stappen:[["Selecteer","Klanten zonder AVP, of met een AVP voor alleenstaanden terwijl ze samenwonen."],["Mail","Stuur de AVP-mail."],["Volg op","Bespreek en leg de keuze van de klant vast."]],
  sjablonen:[{naam:"Mail: bent u goed verzekerd als u schade veroorzaakt?", onderwerp:"Schade aan een ander? Zo bent u goed verzekerd", tekst:`{aanhef},

Een ongelukje zit in een klein hoekje. U fietst tegen een auto aan, stoot bij vrienden een dure laptop om, of uw kind gooit met een bal een ruit in. Wie betaalt dan de schade?

## De aansprakelijkheidsverzekering
Met een aansprakelijkheidsverzekering voor particulieren (AVP) is schade die u, uw partner of uw kinderen per ongeluk aan anderen toebrengen, verzekerd. Voor kinderen tot 14 jaar zijn de ouders aansprakelijk.

## Klopt uw dekking nog?
- Staat uw gezinssituatie goed op de polis (samenwonend, kinderen)?
- Zijn uitwonende of studerende kinderen nog meeverzekerd?
- Hoe zit het met schade aan geleende of gehuurde spullen?

Wij checken het graag voor u. Reageer op deze mail of bel ons op {tel}.` + MAILSLOT}],
  links:[], tags:["aansprakelijkheid","avp","gezin","kinderen","schade aan anderen","opzicht","verzekering"],
  compliance:"Geen absolute uitspraken over dekking; voorwaarden verschillen per verzekeraar. Leg vast als een klant bewust geen AVP wil." },

{ id:"campagne-gezin", title:"Gezin met kinderen: is alles goed geregeld?", short:"Gezin met kinderen",
  summary:"Met kinderen verandert er veel: gezinsdekking, inkomen bij overlijden of arbeidsongeschiktheid, voogdij en de juiste verzekeringen. Een gezinscheck brengt het in één gesprek in beeld.",
  waarom:["De komst van een kind is een van de belangrijkste momenten om verzekeringen en voorzieningen opnieuw te bekijken. Kunnen de achterblijvers in het huis blijven wonen als een van de ouders overlijdt? Is er voldoende inkomen bij arbeidsongeschiktheid? En is er een testament met een voogd?",
    "Gezinnen hebben vaak meerdere polissen bij verschillende partijen. Een gezinscheck geeft rust en levert vaak verbeteringen op, van een passende AVP tot een overlijdensrisicoverzekering."],
  blokken:[["Bescherming",["Overlijdensrisicoverzekering (ORV)","Inkomen bij arbeidsongeschiktheid","Testament en voogdij","Uitvaartverzekering"]],["Dagelijks",["AVP met gezinsdekking","Inboedel (meer spullen)","Reis- en annuleringsverzekering","Zorgverzekering (kinderen tot 18 gratis)"]]],
  doelgroep:["Klanten met jonge kinderen","Klanten die net ouder zijn geworden","Samenwonende stellen met een hypotheek"],
  watDoen:"Nodig gezinnen uit voor de gezinscheck en bespreek de uitkomst in een gesprek.",
  stappen:[["Mail","Stuur de uitnodiging met de link naar de gezinscheck."],["Gesprek","Bespreek de uitkomst: bescherming, dagelijkse verzekeringen en regelingen."],["Vastleggen","Bevestig de afspraken en keuzes per mail."]],
  sjablonen:[{naam:"Mail: gezinscheck", onderwerp:"Met kinderen goed geregeld? Doe de gezinscheck", tekst:`{aanhef},

Met kinderen verandert er veel, ook in uw verzekeringen en financiële zaken. Daarom bieden wij een gezinscheck aan.

## Wat bekijken we?
- Kunt u in uw huis blijven wonen als een van u overlijdt of arbeidsongeschikt raakt?
- Is uw aansprakelijkheidsverzekering op het hele gezin afgestemd?
- Is er een testament met een voogd voor uw kinderen?
- Zijn reis-, inboedel- en uitvaartverzekering nog passend?

Met de gezinscheck ziet u in een paar minuten waar aandachtspunten liggen:
[link naar de gezinscheck]

Daarna bespreken we de uitkomst graag met u. Bel ons op {tel} of reageer op deze mail.` + MAILSLOT}],
  links:[{label:"Klantcheck: gezin met kinderen", url:"#/item/check-gezin"},{label:"Verantwoord Hypotheekrapport", url:"#/item/verantwoord-hypotheekrapport"}],
  tags:["gezin","kinderen","baby","ouders","voogdij","testament","orv","avp","gezinscheck"],
  compliance:"Een gezinscheck is een inventarisatie, geen advies. Advies over ORV, AOV of uitvaart vraagt een volledige klantinventarisatie (Wft)." },

{ id:"campagne-studenten", title:"Studerende kinderen: welke verzekeringen hebben ze nodig?", short:"Studerende kinderen",
  summary:"Gaat een kind studeren of op kamers? Dan veranderen zorgverzekering, aansprakelijkheid, inboedel, reis en (e-)bike. Help ouders en studenten met een duidelijk overzicht.",
  waarom:["Vanaf 18 jaar is een eigen zorgverzekering verplicht. Gaat een kind op kamers, dan is niet altijd duidelijk of het nog via de polissen van de ouders is meeverzekerd voor aansprakelijkheid, inboedel en reis. En een dure laptop of e-bike is snel gestolen.",
    "Ouders stellen deze vragen graag aan hun adviseur. Een mail aan het begin van het studiejaar maakt je de vaste vraagbaak van het gezin, en van de volgende generatie klanten."],
  blokken:[["Voor de student",["Zorgverzekering (verplicht vanaf 18) en zorgtoeslag","Aansprakelijkheid: nog via de ouders?","Inboedel op de kamer: laptop, fiets","Reis- en studie/stage in het buitenland"]],["Voor de ouders",["Check de gezinspolissen op uitwonende kinderen","Leeftijdsgrenzen en voorwaarden","Kostbaarheden (laptop, telefoon)","Kind op de autoverzekering?"]]],
  doelgroep:["Klanten met kinderen van 17 tot 25 jaar","Benaderen in juli–september (start studiejaar)"],
  watDoen:"Stuur ouders een overzicht van wat er verandert als hun kind gaat studeren, en bied een check aan voor de gezinspolissen.",
  stappen:[["Selecteer","Klanten met kinderen van 17–25 jaar."],["Mail","Stuur de mail aan ouders, en eventueel de studentenmail."],["Check","Bekijk de gezinspolissen op uitwonende kinderen en pas aan waar nodig."]],
  sjablonen:[
    {naam:"Mail aan ouders: uw kind gaat studeren", onderwerp:"Uw kind gaat studeren: is alles goed verzekerd?", tekst:`{aanhef},

Gaat uw zoon of dochter studeren of op kamers? Een mooie stap. Er verandert dan ook het een en ander op het gebied van verzekeringen.

## Waar moet u aan denken?
- Zorgverzekering: vanaf 18 jaar moet uw kind een eigen zorgverzekering hebben. Mogelijk heeft uw kind recht op zorgtoeslag.
- Aansprakelijkheid: uitwonende studerende kinderen zijn vaak nog via uw AVP meeverzekerd, maar dat verschilt per verzekeraar en leeftijd.
- Inboedel op de kamer: spullen buiten uw woning zijn vaak maar beperkt verzekerd. Denk aan laptop, telefoon en fiets.
- Reizen, studie of stage in het buitenland: check de reis- en zorgverzekering.

Wij bekijken graag voor u wat er via uw polissen geregeld is en wat uw kind zelf moet regelen. Doe de studentencheck of bel ons op {tel}:
[link naar de studentencheck]` + MAILSLOT},
    {naam:"Mail aan de student", onderwerp:"Op kamers? Dit moet je regelen", tekst:`Hoi {aanhef},

Ga je studeren of op kamers? Dan moet je een paar dingen goed regelen:

- Zorgverzekering: vanaf je 18e verplicht. Check of je recht hebt op zorgtoeslag.
- Aansprakelijkheid: ben je nog via je ouders verzekerd? Dat hangt af van hun polis.
- Je spullen: laptop, telefoon en fiets zijn op je kamer niet altijd goed verzekerd.
- Op reis of stage in het buitenland? Check je reis- en zorgverzekering.

Twijfel je? Vraag het ons gerust, of bel {tel}.` + MAILSLOT}],
  links:[{label:"Klantcheck: studerende kinderen", url:"#/item/check-student"}],
  tags:["student","studerende kinderen","op kamers","zorgverzekering","zorgtoeslag","avp","inboedel","laptop","fiets","stage buitenland"],
  compliance:"Meeverzekering van uitwonende kinderen verschilt per verzekeraar en leeftijd; check de voorwaarden. Geen advies over de zorgverzekering als je daar geen vergunning voor hebt." },

{ id:"campagne-svi", title:"Waarom een SVI beter beschermt dan een ongevallenverzekering voor inzittenden", short:"SVI versus ongevallen inzittenden",
  summary:"Een schadeverzekering inzittenden (SVI) vergoedt de werkelijke schade van bestuurder en passagiers, ook bij eigen schuld. Een ongevallenverzekering voor inzittenden keert alleen vaste bedragen uit. Leg het verschil uit en check autopolissen.",
  waarom:["Bij een ongeluk waarbij de bestuurder zelf schuld heeft, is diens eigen letselschade niet gedekt door de verplichte WA-verzekering. Een schadeverzekering inzittenden (SVI) vergoedt dan de werkelijke schade: medische kosten, inkomensverlies, smartengeld en schade aan spullen, voor bestuurder én passagiers.",
    "Een ongevallenverzekering voor inzittenden (OVI) keert alleen een vast bedrag uit bij overlijden of blijvende invaliditeit. Dat bedrag kan veel lager zijn dan de werkelijke schade, bijvoorbeeld bij langdurig inkomensverlies. Veel klanten hebben nog een OVI of geen van beide."],
  blokken:[["SVI",["Vergoedt de werkelijke schade","Ook letsel van de bestuurder bij eigen schuld","Inkomensverlies, medische kosten, smartengeld","Schade aan kleding en spullen van inzittenden"]],["Ongevallen inzittenden",["Vast bedrag bij overlijden of blijvende invaliditeit","Geen vergoeding van werkelijk inkomensverlies","Vaak lagere premie, maar ook veel minder dekking","Bedrag staat los van de werkelijke schade"]]],
  doelgroep:["Klanten met een autoverzekering zonder SVI","Klanten met een ongevallenverzekering inzittenden","Gezinnen en veelrijders"],
  watDoen:"Leg het verschil uit en bied aan de autopolis te checken. Wijs op het moment van prolongatie of bij een nieuwe auto.",
  stappen:[["Selecteer","Autopolissen zonder SVI of met een OVI."],["Mail","Stuur de uitlegmail."],["Wijzig","Pas de dekking aan op verzoek en bevestig per mail."]],
  sjablonen:[
    {naam:"Mail: SVI of ongevallenverzekering?", onderwerp:"Rijdt u veilig verzekerd? Het verschil tussen SVI en ongevallendekking", tekst:`{aanhef},

Bij een ongeluk met de auto denkt u eerst aan de schade aan de auto. Maar wat als u of uw passagiers gewond raken, zeker als u zelf de schuldige bent?

## Wat is het verschil?
- Schadeverzekering inzittenden (SVI): vergoedt de werkelijke schade van de bestuurder en de passagiers, ook als u zelf schuld heeft. Denk aan medische kosten, inkomensverlies, smartengeld en schade aan spullen.
- Ongevallenverzekering voor inzittenden: keert alleen een vast bedrag uit bij overlijden of blijvende invaliditeit. Dat bedrag kan veel lager zijn dan de werkelijke schade.

## Waarom is dit belangrijk?
De verplichte WA-verzekering vergoedt alleen schade aan anderen, niet uw eigen letselschade als bestuurder. Een SVI vult dat gat.

Wilt u weten welke dekking u nu heeft? Wij kijken het graag voor u na. Bel ons op {tel} of reageer op deze mail.` + MAILSLOT},
    {naam:"Klanttekst voor website of nieuwsbrief", onderwerp:"SVI of ongevallenverzekering voor inzittenden?", tekst:`## SVI of ongevallenverzekering voor inzittenden?
Bij uw autoverzekering kunt u kiezen voor een schadeverzekering inzittenden (SVI) of een ongevallenverzekering voor inzittenden. Ze lijken op elkaar, maar het verschil is groot.

## Schadeverzekering inzittenden (SVI)
De SVI vergoedt de werkelijke schade van iedereen in de auto, ook van de bestuurder als die zelf schuld heeft. Bijvoorbeeld medische kosten die niet door de zorgverzekering worden vergoed, inkomensverlies, smartengeld en schade aan kleding of spullen.

## Ongevallenverzekering voor inzittenden
Deze verzekering keert een vast bedrag uit bij overlijden of blijvende invaliditeit na een ongeval. Het bedrag staat vast, ongeacht de werkelijke schade. Inkomensverlies wordt niet vergoed.

## Ons advies in het kort
Voor de meeste automobilisten biedt een SVI betere bescherming, omdat de werkelijke schade wordt vergoed. Wilt u weten wat in uw situatie past? Neem contact met ons op.` + MAILSLOT}],
  links:[], tags:["svi","schadeverzekering inzittenden","ongevallenverzekering","inzittenden","autoverzekering","letselschade","wa"],
  compliance:"‘Beter’ is een algemene vergelijking; de passende dekking hangt af van de situatie van de klant. Controleer de voorwaarden (o.a. maximumbedragen) per verzekeraar." },

{ id:"campagne-woonlasten-inkomen", title:"Kunnen jullie de hypotheek of huur nog betalen bij overlijden of arbeidsongeschiktheid?", short:"Woonlasten bij overlijden en AO",
  summary:"Overlijden of arbeidsongeschiktheid van een partner kan het inkomen flink verlagen. Help klanten (kopers én huurders) inzien of de woonlasten dan nog betaalbaar zijn, en welke voorzieningen er zijn.",
  waarom:["Veel huishoudens rekenen op twee inkomens. Valt er één weg door overlijden of arbeidsongeschiktheid, dan blijven de woonlasten vaak gelijk. De ANW-uitkering is beperkt en inkomensafhankelijk, en bij arbeidsongeschiktheid daalt het inkomen na twee jaar meestal flink. Ondernemers hebben geen wettelijke vangnet.",
    "Dit gesprek is geschikt voor iedereen: met een hypotheek gebruik je het Verantwoord Hypotheekrapport, met een huurwoning de woonlastencheck."],
  blokken:[["Bij overlijden",["Nabestaandenpensioen en ANW (beperkt)","Overlijdensrisicoverzekering","Kan de partner in het huis blijven wonen?","Testament en voogdij"]],["Bij arbeidsongeschiktheid",["Loondoorbetaling 2 jaar, daarna WIA","Ondernemers: geen wettelijke dekking","Arbeidsongeschiktheids- of woonlastenverzekering","Buffer en vaste lasten"]]],
  doelgroep:["Samenwonende klanten met een hypotheek of huurwoning","Gezinnen met kinderen","Ondernemers en zzp'ers"],
  watDoen:"Nodig klanten uit voor de woonlastencheck of het Verantwoord Hypotheekrapport, en bespreek de uitkomst.",
  stappen:[["Mail","Stuur de uitnodiging: hypotheek → Verantwoord Hypotheekrapport; huur → woonlastencheck."],["Gesprek","Bespreek de uitkomst en mogelijke voorzieningen."],["Vastleggen","Leg advies en keuze vast."]],
  sjablonen:[
    {naam:"Mail: met een hypotheek", onderwerp:"Kunt u uw hypotheek blijven betalen als het tegenzit?", tekst:`{aanhef},

Niemand staat er graag bij stil, maar wat gebeurt er met uw woonlasten als een van u overlijdt of langdurig arbeidsongeschikt raakt? Het inkomen daalt dan vaak, terwijl de hypotheek gewoon doorloopt.

## Inzicht in één rapport
Met het Verantwoord Hypotheekrapport ziet u per situatie of de hypotheek betaalbaar blijft: bij overlijden, arbeidsongeschiktheid, werkloosheid en pensioen. Zo weet u waar u staat en of een voorziening verstandig is.

Zullen we een moment plannen om het samen te bekijken? Bel ons op {tel} of reageer op deze mail.` + MAILSLOT},
    {naam:"Mail: met een huurwoning", onderwerp:"Kunt u de huur blijven betalen als het tegenzit?", tekst:`{aanhef},

Wat gebeurt er met uw inkomen als een van u overlijdt of langdurig arbeidsongeschikt raakt? De huur en andere vaste lasten lopen dan gewoon door.

## Doe de woonlastencheck
In een paar minuten ziet u hoe uw woonlasten zich verhouden tot uw inkomen, nu en als het tegenzit:
[link naar de woonlastencheck]

Wij bespreken de uitkomst graag met u, en kijken of een voorziening zinvol is. Bel ons op {tel}.` + MAILSLOT}],
  links:[{label:"Klantcheck: woonlasten bij overlijden en AO", url:"#/item/check-woonlasten"},{label:"Verantwoord Hypotheekrapport", url:"#/item/verantwoord-hypotheekrapport"}],
  tags:["overlijden","arbeidsongeschiktheid","woonlasten","huur","hypotheek","orv","aov","woonlastenverzekering","anw","nabestaanden"],
  compliance:"Advies over ORV, AOV en woonlastenverzekeringen valt onder de Wft-zorgplicht: volledige klantinventarisatie nodig. Uitkomsten van checks zijn indicatief." },

{ id:"campagne-nabestaanden-uitvaart", title:"Goed geregeld voor je nabestaanden: het belang van een (natura) uitvaartverzekering", short:"Nabestaanden en uitvaart",
  summary:"Heb ik alles goed geregeld voor mijn nabestaanden? Help klanten met een overzicht: testament, nabestaandenvoorzieningen, uitvaartwensen en het verschil tussen een natura- en kapitaalverzekering voor de uitvaart.",
  waarom:["Een uitvaart kost al snel duizenden euro's, en nabestaanden moeten in korte tijd veel regelen. Met een uitvaartverzekering en vastgelegde wensen neem je hen veel zorg uit handen.",
    "Bij een naturaverzekering is de uitvaart zelf verzekerd: diensten en producten volgens een pakket, die meestal meegroeien met de prijzen. Bij een kapitaalverzekering keert de verzekeraar een vast bedrag uit, dat door prijsstijgingen te laag kan blijken. Veel klanten weten niet welke soort ze hebben, of hebben een oude polis die niet meer past."],
  blokken:[["Naturaverzekering",["De uitvaart zelf is verzekerd (diensten en producten)","Pakket groeit vaak mee met de prijzen","Nabestaanden hoeven minder zelf te regelen","Let op keuzevrijheid van uitvaartonderneming"]],["Kapitaalverzekering",["Vast bedrag bij overlijden","Vrij te besteden","Risico dat het bedrag te laag blijkt","Check of het bedrag nog passend is"]]],
  doelgroep:["Klanten van 50+ en gezinnen","Klanten met een oude uitvaartpolis","Rond Allerzielen (2 november) of na een overlijden in de familie (met tact)"],
  watDoen:"Bied een rustig gesprek aan over nabestaanden en uitvaart, met de nabestaandencheck als voorbereiding.",
  stappen:[["Mail","Stuur de uitnodiging met de nabestaandencheck."],["Gesprek","Bespreek testament, voorzieningen, uitvaartwensen en de bestaande uitvaartpolis."],["Vastleggen","Leg wensen, advies en keuze vast."]],
  sjablonen:[
    {naam:"Mail: heeft u alles goed geregeld?", onderwerp:"Heeft u alles goed geregeld voor uw naasten?", tekst:`{aanhef},

Het is geen onderwerp waar we dagelijks bij stilstaan. Toch geeft het rust om te weten dat uw naasten goed verzorgd achterblijven als u overlijdt.

## Waar kunt u aan denken?
- Is er voldoende inkomen voor uw partner en kinderen, en kunnen zij in het huis blijven wonen?
- Heeft u een testament, en zijn uw wensen bekend?
- Is uw uitvaart verzekerd, en past de verzekering nog bij de huidige kosten?

## Natura of kapitaal?
Bij een naturaverzekering is de uitvaart zelf verzekerd; het pakket groeit meestal mee met de prijzen. Bij een kapitaalverzekering krijgen nabestaanden een vast bedrag, dat door prijsstijgingen te laag kan blijken.

Met de nabestaandencheck ziet u in een paar minuten wat al geregeld is:
[link naar de nabestaandencheck]

Wij bespreken het graag met u, in alle rust. Bel ons op {tel}.` + MAILSLOT},
    {naam:"Klanttekst: natura- of kapitaalverzekering voor de uitvaart", onderwerp:"Natura- of kapitaalverzekering voor de uitvaart?", tekst:`## Natura- of kapitaalverzekering voor de uitvaart?
Met een uitvaartverzekering zorgt u ervoor dat de kosten van uw uitvaart zijn gedekt en dat uw nabestaanden niet voor onverwachte uitgaven komen te staan. Er zijn twee soorten.

## Naturaverzekering
U verzekert de uitvaart zelf: een pakket met diensten en producten, zoals verzorging, kist en ceremonie. Het pakket groeit meestal mee met de prijzen. Nabestaanden hoeven minder zelf te regelen en te betalen. Let op de keuzevrijheid in uitvaartonderneming en wat er in het pakket zit.

## Kapitaalverzekering
De verzekeraar keert een vast bedrag uit. Uw nabestaanden zijn vrij in de besteding, maar door prijsstijgingen kan het bedrag te laag blijken.

## Wat past bij u?
Dat hangt af van uw wensen, budget en wat al geregeld is. Heeft u al een (oude) uitvaartpolis? Laat dan checken of de dekking nog passend is.` + MAILSLOT}],
  links:[{label:"Klantcheck: goed geregeld voor nabestaanden", url:"#/item/check-nabestaanden"}],
  tags:["uitvaart","uitvaartverzekering","natura","kapitaal","nabestaanden","testament","overlijden","allerzielen","wensen"],
  compliance:"Benader dit onderwerp met tact. Advies over uitvaart- en levensverzekeringen vraagt een klantinventarisatie (Wft). Geen druk zetten; respecteer als een klant dit (nu) niet wil bespreken." }
];
SCHADE_CAMP.forEach(c => { CAMP.push(c); ITEMS.push({ id:c.id, cat:"campagnes", kind:"campagne", model:"gratis", title:"Campagne: "+c.title, by:"Blinqx V&H",
  summary:c.summary, channels:["Eigen e-mail","Blinqx Connect","Word"], tags:["campagne","schadeverzekering",...c.tags], data:c }); });

/* ---------- Klantchecks (generieke vragenlijsten) ---------- */
const CHECKS = {
  "check-gezin": { titel:"Gezinscheck: is alles goed geregeld?", h1:"Gezin met kinderen: is alles goed geregeld?", intro:"Met kinderen verandert er veel. Beantwoord een paar korte vragen en zie waar aandachtspunten liggen.", mail:"Gezinscheck",
    secties:[
      { key:"bescherming", titel:"Bescherming van het gezin", items:[
        {k:"orv", q:"Weet u niet zeker of er voldoende geld is als een van de ouders overlijdt?", s:"Bijvoorbeeld om in het huis te blijven wonen.", w:2, tip:"Laat berekenen of de nabestaanden rond kunnen komen. Een overlijdensrisicoverzekering kan een tekort opvangen."},
        {k:"ao", q:"Daalt uw inkomen flink als u langdurig arbeidsongeschikt raakt?", s:"Ondernemers hebben geen wettelijke uitkering.", w:2, tip:"Bekijk wat u ontvangt bij arbeidsongeschiktheid en of een aanvullende voorziening nodig is."},
        {k:"testament", q:"Heeft u (nog) geen testament met daarin een voogd voor uw kinderen?", s:"", w:2, tip:"Leg in een testament vast wie voor uw kinderen zorgt. Bespreek dit met een notaris."},
        {k:"uitvaart", q:"Weet u niet of uw uitvaart (en die van uw kinderen) verzekerd is?", s:"", w:1, tip:"Check of er een uitvaartverzekering is en of kinderen zijn meeverzekerd."}]},
      { key:"dagelijks", titel:"Dagelijkse verzekeringen", items:[
        {k:"avp", q:"Heeft u geen aansprakelijkheidsverzekering voor het hele gezin?", s:"Ouders zijn aansprakelijk voor schade door kinderen tot 14 jaar.", w:2, tip:"Een AVP met gezinsdekking verzekert schade die u of uw kinderen per ongeluk aan anderen toebrengen."},
        {k:"inboedel", q:"Is de inboedelwaarde niet aangepast sinds de komst van de kinderen?", s:"", w:1, tip:"Met kinderen groeit de inboedel. Bereken de inboedelwaarde opnieuw."},
        {k:"reis", q:"Gaat u met het gezin op reis zonder (doorlopende) reisverzekering?", s:"", w:1, tip:"Een doorlopende gezinsreisverzekering is vaak voordeliger dan losse polissen. Denk ook aan annulering."},
        {k:"zorg", q:"Weet u niet of de zorgverzekering past bij uw gezin (bijv. tandarts, beugel)?", s:"Kinderen tot 18 zijn gratis meeverzekerd.", w:1, tip:"Kies een aanvullende verzekering die past bij de zorg die uw kinderen nodig hebben."}]}
    ]},
  "check-student": { titel:"Studentencheck: welke verzekeringen heeft uw kind nodig?", h1:"Studerende kinderen: wat moet er geregeld zijn?", intro:"Gaat uw kind studeren of op kamers? Beantwoord een paar vragen en zie wat er verandert.", mail:"Studentencheck",
    secties:[
      { key:"student", titel:"Uw kind", items:[
        {k:"zorg", q:"Is uw kind 18 of ouder en heeft het nog geen eigen zorgverzekering?", s:"", w:2, tip:"Vanaf 18 jaar is een eigen zorgverzekering verplicht. Check ook het recht op zorgtoeslag."},
        {k:"kamer", q:"Gaat uw kind op kamers of uitwonend studeren?", s:"", w:1, tip:"Spullen op een studentenkamer zijn via de inboedelverzekering van de ouders vaak beperkt verzekerd. Check de voorwaarden of overweeg een eigen (studenten)verzekering."},
        {k:"spullen", q:"Heeft uw kind dure spullen, zoals een laptop, telefoon of (e-)bike?", s:"", w:1, tip:"Voor diefstal buitenshuis en fietsen gelden vaak beperkingen. Bekijk of een aanvulling nodig is."},
        {k:"buitenland", q:"Gaat uw kind in het buitenland studeren, op stage of reizen?", s:"", w:2, tip:"Check de dekking van de zorg- en reisverzekering in het buitenland, ook bij een langer verblijf."},
        {k:"auto", q:"Rijdt uw kind in een auto van u, of krijgt het een eigen auto?", s:"", w:1, tip:"Meld jonge bestuurders bij de autoverzekeraar; voor jonge bestuurders gelden vaak andere voorwaarden of een hoger eigen risico."}]},
      { key:"ouders", titel:"Uw eigen polissen", items:[
        {k:"avp", q:"Weet u niet of uw kind nog via uw aansprakelijkheidsverzekering is meeverzekerd?", s:"Dat verschilt per verzekeraar en leeftijd.", w:2, tip:"Uitwonende studerende kinderen zijn vaak meeverzekerd tot een bepaalde leeftijd. Controleer de voorwaarden van uw AVP."},
        {k:"reis", q:"Weet u niet of uw kind nog onder uw doorlopende reisverzekering valt?", s:"", w:1, tip:"Kinderen die zelfstandig wonen of reizen vallen niet altijd meer onder de gezinsreisverzekering."}]}
    ]},
  "check-woonlasten": { titel:"Woonlastencheck: kunt u de huur of hypotheek blijven betalen?", h1:"Kunt u uw woonlasten blijven betalen als het tegenzit?", intro:"Bij overlijden of arbeidsongeschiktheid daalt het inkomen vaak, terwijl huur of hypotheek doorlopen. Vul een paar bedragen in en beantwoord enkele vragen.", mail:"Woonlastencheck",
    calc:true,
    secties:[
      { key:"voorzieningen", titel:"Wat is er geregeld?", items:[
        {k:"orv", q:"Is er geen overlijdensrisicoverzekering of nabestaandenpensioen?", s:"Of weet u niet hoeveel het oplevert?", w:2, tip:"Breng in kaart wat uw partner ontvangt bij uw overlijden. De ANW-uitkering is beperkt en inkomensafhankelijk."},
        {k:"ao", q:"Daalt uw inkomen flink bij langdurige arbeidsongeschiktheid?", s:"Werknemers: na 2 jaar loondoorbetaling volgt de WIA. Ondernemers: geen wettelijke uitkering.", w:2, tip:"Bekijk wat u ontvangt bij arbeidsongeschiktheid en of een arbeidsongeschiktheids- of woonlastenverzekering zinvol is."},
        {k:"buffer", q:"Heeft u minder dan drie maanden vaste lasten als buffer?", s:"", w:1, tip:"Een buffer geeft lucht in de eerste maanden na een tegenvaller."},
        {k:"twee", q:"Is uw huishouden afhankelijk van twee inkomens om de woonlasten te betalen?", s:"", w:1, tip:"Kijk per partner wat er gebeurt als het andere inkomen wegvalt."}]}
    ]},
  "check-nabestaanden": { titel:"Nabestaandencheck: heeft u alles goed geregeld?", h1:"Heeft u alles goed geregeld voor uw nabestaanden?", intro:"Een paar vragen over inkomen, wensen en de uitvaart. Zo ziet u in rust wat al geregeld is en waar aandachtspunten liggen.", mail:"Nabestaandencheck",
    secties:[
      { key:"inkomen", titel:"Inkomen en wonen", items:[
        {k:"inkomen", q:"Weet u niet of uw partner en kinderen financieel rond kunnen komen als u overlijdt?", s:"", w:2, tip:"Laat in kaart brengen wat uw nabestaanden ontvangen (nabestaandenpensioen, ANW, ORV) en wat ze nodig hebben."},
        {k:"woning", q:"Weet u niet of uw partner in het huis kan blijven wonen?", s:"", w:2, tip:"Bekijk of de hypotheek of huur betaalbaar blijft op één inkomen. Het Verantwoord Hypotheekrapport geeft inzicht."}]},
      { key:"wensen", titel:"Wensen en regelingen", items:[
        {k:"testament", q:"Heeft u (nog) geen testament, of is het ouder dan 10 jaar?", s:"", w:1, tip:"Een testament voorkomt onduidelijkheid. Bespreek met een notaris of het nog past bij uw situatie."},
        {k:"wensen", q:"Zijn uw uitvaartwensen niet vastgelegd?", s:"", w:1, tip:"Leg uw wensen vast en bespreek ze met uw naasten. Dat geeft hen houvast."},
        {k:"overzicht", q:"Weten uw naasten niet waar uw polissen, rekeningen en wachtwoorden te vinden zijn?", s:"", w:1, tip:"Maak een overzicht van polissen, rekeningen en digitale accounts, en vertel waar het ligt."}]},
      { key:"uitvaart", titel:"Uitvaartverzekering", items:[
        {k:"verzekerd", q:"Heeft u geen uitvaartverzekering, of weet u het niet?", s:"", w:2, tip:"Een uitvaart kost al snel duizenden euro's. Een uitvaartverzekering voorkomt dat nabestaanden voor de kosten opdraaien."},
        {k:"kapitaal", q:"Heeft u een kapitaalverzekering die al lang niet is aangepast?", s:"Of weet u niet of het een natura- of kapitaalverzekering is?", w:2, tip:"Bij een kapitaalverzekering kan het bedrag door prijsstijgingen te laag zijn. Een naturaverzekering groeit meestal mee met de prijzen."},
        {k:"kinderen", q:"Weet u niet of uw kinderen (nog) zijn meeverzekerd?", s:"", w:1, tip:"Kinderen zijn vaak meeverzekerd tot een bepaalde leeftijd. Daarna moeten ze een eigen polis hebben."}]}
    ]}
};
const CHECK_ITEMS = [
  ["check-gezin","Klantcheck: gezin met kinderen","Acht vragen over bescherming en dagelijkse verzekeringen voor gezinnen: ORV, arbeidsongeschiktheid, voogdij, AVP, inboedel, reis en zorg.",["gezin","kinderen","gezinscheck","orv","avp","voogdij","testament"]],
  ["check-student","Klantcheck: studerende kinderen","Zeven vragen voor ouders van studerende kinderen: zorgverzekering, op kamers, laptop en fiets, buitenland, auto en meeverzekering via de ouders.",["student","studerende kinderen","op kamers","zorgverzekering","avp","laptop","fiets"]],
  ["check-woonlasten","Klantcheck: woonlasten bij overlijden en arbeidsongeschiktheid","Voor huurders én kopers: woonlasten als deel van het netto inkomen, nu en als een inkomen wegvalt, plus vier vragen over voorzieningen.",["woonlasten","huur","hypotheek","overlijden","arbeidsongeschiktheid","orv","aov","woonlastenverzekering"]],
  ["check-nabestaanden","Klantcheck: goed geregeld voor nabestaanden","Acht vragen over inkomen, wonen, testament, wensen en de uitvaartverzekering (natura of kapitaal).",["nabestaanden","uitvaart","natura","testament","overlijden","wensen"]]
];
CHECK_ITEMS.forEach(([id,title,summary,tags]) => ITEMS.push({ id, cat:"klanttools", kind:"check", model:"gratis", title, by:"Blinqx V&H", summary,
  channels:["Eigen website","Eigen e-mail","Print/PDF"], tags:["klantcheck","vragenlijst",...tags] }));

/* ---------- Actie-ideeën schadeverzekeringen ---------- */
const IDEEEN = [
  {t:"Wintersport en reisverzekering", wanneer:"oktober–januari", d:"Check of wintersport, ski-uitrusting en buitenlandse medische kosten gedekt zijn.", i:"campagne-wintersport"},
  {t:"Aansprakelijkheid (AVP)", wanneer:"het hele jaar; bij gezinsuitbreiding", d:"Klanten zonder AVP of met een AVP voor alleenstaanden terwijl ze samenwonen.", i:"campagne-avp"},
  {t:"Jaarlijkse check opstal en inboedel", wanneer:"1–2 maanden vóór prolongatie", d:"Herbouwwaarde, inboedelwaarde, verbouwing en verduurzaming.", i:"campagne-opstal-inboedel"},
  {t:"SVI in plaats van ongevallen inzittenden", wanneer:"bij prolongatie of nieuwe auto", d:"Werkelijke letselschade van bestuurder en passagiers verzekeren.", i:"campagne-svi"},
  {t:"Studerende kinderen", wanneer:"juli–september", d:"Zorgverzekering, op kamers, laptop en fiets, buitenland.", i:"campagne-studenten"},
  {t:"Gezin met kinderen", wanneer:"na geboorte; het hele jaar", d:"ORV, arbeidsongeschiktheid, voogdij en gezinsdekking.", i:"campagne-gezin"},
  {t:"Woonlasten bij overlijden en AO", wanneer:"het hele jaar", d:"Voor kopers en huurders: blijven de woonlasten betaalbaar?", i:"campagne-woonlasten-inkomen"},
  {t:"Nabestaanden en uitvaart", wanneer:"rond Allerzielen (2 november)", d:"Testament, wensen en natura- of kapitaalverzekering.", i:"campagne-nabestaanden-uitvaart"},
  {t:"E-bike en fiets", wanneer:"voorjaar", d:"Dure fietsen zijn vaak beperkt verzekerd via de inboedel. Wijs op een fietsverzekering.", i:"verzekeringscheck"},
  {t:"Jonge bestuurder", wanneer:"bij het rijbewijs van een kind", d:"Meld het kind bij de autoverzekeraar en bespreek het eigen risico.", i:"check-student"},
  {t:"Stormseizoen", wanneer:"september–oktober", d:"Tips om schade te voorkomen en check van de opstaldekking (dakpannen, zonnepanelen, schutting).", i:"verzekeringscheck"},
  {t:"Verhuizing", wanneer:"bij een signaal ‘woning te koop’", d:"Adreswijziging, inboedel, opstal en eventueel een nieuwe hypotheek.", i:"portefeuillesignalen"},
  {t:"Rechtsbijstand", wanneer:"bij een nieuwe baan, verbouwing of scheiding", d:"Wijs op hulp bij juridische geschillen, bijvoorbeeld met een aannemer of werkgever.", i:"verzekeringscheck"},
  {t:"Ondernemers", wanneer:"het hele jaar", d:"Aansprakelijkheid, arbeidsongeschiktheid en inventaris voor zzp'ers en ondernemers.", i:"campagne-kvk"}
];
ITEMS.push({ id:"actie-ideeen-schade", cat:"campagnes", kind:"ideeen", model:"gratis", title:"Actie-ideeën door het jaar: schade, inkomen, wonen en fiscaal", by:"Blinqx V&H",
  summary:"Veertien kant-en-klare actie-ideeën voor schadeklanten, met het beste moment, de doelgroep en het materiaal: van wintersport en AVP tot SVI, studenten, e-bikes, stormseizoen en uitvaart.",
  channels:["Jaarplanning","Eigen e-mail"], tags:["schadeverzekeringen","acties","ideeën","jaarplanning","wintersport","avp","svi","e-bike","storm","rechtsbijstand","uitvaart","studenten"] });

/* Formulierenbank: vragenlijsten (bron: digitale formulieren Actiefbeheerscan.nl, Blinqx V&H) */
const FORMS = [
{
"id": "form-jaarlijkse-nazorg",
"titel": "Jaarlijkse nazorg: is er iets veranderd?",
"sub": "Een korte jaarlijkse uitvraag: inkomen, hypotheek, woning, gezin en wensen.",
"thema": "Nazorg & hypotheek",
"intro": "",
"stappen": [
{
"titel": "Inkomen",
"vragen": [
{
"v": "Is het (gezamenlijk) inkomen veranderd?",
"t": "een",
"o": [
"Nee",
"Ja"
]
}
]
},
{
"titel": "Hypotheek",
"vragen": [
{
"v": "Is de hypotheek aangepast?",
"t": "een",
"o": [
"Nee",
"Ja"
]
}
]
},
{
"titel": "Woning",
"vragen": [
{
"v": "Is er iets veranderd in de woonsituatie?",
"t": "een",
"o": [
"Nee",
"Ja"
]
}
]
},
{
"titel": "Gezinssituatie",
"vragen": [
{
"v": "Is de gezinssituatie veranderd?",
"t": "een",
"o": [
"Nee",
"Ja"
]
}
]
},
{
"titel": "Wensen",
"vragen": [
{
"v": "Welke wensen zijn er voor de toekomst?",
"t": "meer",
"s": "Meerdere antwoorden zijn mogelijk",
"o": [
"Verhuizen naar een andere woning",
"De huidige woning verbouwen",
"(Eerder) stoppen met werken",
"De woonlasten verlagen",
"Extra aflossen op de hypotheek",
"Geld vrijmaken uit de overwaarde",
"Geen specifieke wensen",
"Anders, namelijk:"
]
}
]
},
{
"titel": "Overige vragen",
"vragen": [
{
"v": "Zijn er andere (financiële) vragen waarbij wij mogen helpen?",
"t": "open"
}
]
}
]
},
{
"id": "form-status-hypotheek",
"titel": "Hypotheekcheck: past je hypotheek nog?",
"sub": "Is er iets veranderd in inkomen, werk, vermogen, woning of gezin? Dan is het tijd voor een check.",
"thema": "Nazorg & hypotheek",
"intro": "Een hypotheek afsluiten doe je niet zomaar, het is een beslissing die je voor een lange termijn neemt. De kans is groot dat er tijdens de looptijd omstandigheden zijn die ertoe kunnen leiden dat het tussentijds aanpassen van de hypotheek voor jou een slimme keuze is. Denk maar eens aan de sterk flucturerende hypotheekrentes of een verandering in je inkomen. En misschien is je persoonlijke situatie wel gewijzigd?\n\nBeantwoord in de volgende stappen de vragen en wij gaan na of je je hypotheek kunt verbeteren.",
"stappen": [
{
"titel": "Relatie en gezin",
"vragen": [
{
"v": "Is er in je relatie iets veranderd? Of verwacht je binnenkort een verandering?",
"t": "een",
"o": [
"Ik ben getrouwd, of ga binnenkort trouwen",
"Ik heb nu een geregistreerde partner of krijg die binnenkort",
"Ik ben gaan samenwonen, of ga dat binnenkort doen",
"Ik ben gescheiden of ga scheiden",
"Ik heb of verwacht een extra kind",
"Nee, geen wijzigingen"
]
}
]
},
{
"titel": "Inkomen, vermogen en wonen",
"vragen": [
{
"v": "Is er iets veranderd in je (gezins)inkomen?",
"t": "een",
"o": [
"Ja, dat is hoger geworden",
"Ja, dat is lager geworden",
"Nee"
]
},
{
"v": "Is er iets in je werksituatie veranderd? Of gaat dat mogelijk binnenkort gebeuren?",
"t": "meer",
"o": [
"Ja, ik ben van werkgever veranderd, of ga dat doen",
"Ik ben zelfstandig ondernemer geworden, of ben dat van plan",
"Ik ben werkloos geworden, of dreig dat te worden",
"Ik ben (deels) arbeidsongeschikt verklaard",
"Ik ben of ga binnenkort met (vroeg)pensioen",
"Nee, geen wijzigingen",
"Anders, namelijk:"
]
},
{
"v": "Hoe ontwikkelt je vermogen zich? En heb je (of verwacht je) financiële problemen?",
"t": "meer",
"o": [
"Mijn vermogen is toegenomen (spaargeld, aandelen, onroerend goed)",
"Mijn vermogen is afgenomen",
"Mijn schuld is toegenomen (pers.lening, creditcard, enz.)",
"Mijn schuld is gedaald",
"Ik heb een erfenis ontvangen",
"Ik heb een schenking ontvangen of gedaan",
"Ik kom (structureel) maandelijks financieel niet uit",
"Mijn pensioen is versoberd of verbeterd",
"Geen wijzigingen",
"Andere wijzigingen:"
]
},
{
"v": "Is er iets veranderd omtrent je woning? Of heb je daar plannen voor?",
"t": "meer",
"o": [
"Mijn woning is in waarde gestegen.",
"Mijn woning is in waarde gedaald.",
"Ik heb mijn woning verbouwd (of denk daarover na)of aangepast (of ben dat van plan)",
"Ik heb mijn woning energiezuiniger gemaakt (of denk daarover na)",
"Ik heb een 2e woning gekocht (of denk daarover na)",
"Ik ben verhuisd (of ben dat van plan)",
"Nee, geen (grote) wijzingingen",
"Andere wijzigingen:"
]
}
]
}
]
},
{
"id": "form-extra-aflossen",
"titel": "Aflossingsvrije hypotheek: op termijn nog betaalbaar?",
"sub": "Voor klanten met (deels) aflossingsvrij: einde looptijd, woningwaarde, inkomen en vermogen.",
"thema": "Nazorg & hypotheek",
"intro": "Mogelijk los jij (een deel van) jouw hypotheek niet maandelijks af. Voor veel hypotheken stopt de hypotheekrenteaftrek in 2031. De vraag is of jij het netto maandbedrag van jouw hypotheek dan nog kunt betalen? Het verlengen van de hypotheek of een nieuwe hypotheek afsluiten op de einddatum van de hypotheek is niet altijd mogelijk en zal afhangen van factoren als; de restschuld op de eindatum, jouw (pensioen)inkomen, de waarde van jouw woning en jouw middelen om de hypotheekschuld mogelijk te kunnen verlagen. Vul onderstaande vragen in en wij gaan graag voor je na of jouw hypotheek mogelijk aanpassing behoeft.",
"stappen": [
{
"titel": "Hypotheekgegevens",
"vragen": [
{
"v": "Heb jij je 1e hypotheek afgesloten vóór 1 januari 2013?",
"t": "een",
"o": [
"Nee",
"Ja",
"Dat weet ik niet"
]
},
{
"v": "Heb jij een leningdeel waarop je niet aflost?",
"t": "een",
"s": "Maak een keuze. De grootte van de hypotheekschuld blijft voor dat deel dus elk jaar gelijk.",
"o": [
"Ja, een aflossingsvrije lening",
"Ja, een spaarhypotheek",
"Ja, een leven- of beleggingshypotheek",
"Een combinatie van bovenstaande",
"Nee, ik los mijn hypotheek volledig af"
]
},
{
"v": "Wanneer loopt je aflossingsvrije hypotheek af?",
"t": "een",
"o": [
"Binnen 5 jaar",
"Binnen 10 jaar",
"Binnen 15 jaar",
"Over meer dan 15 jaar"
]
},
{
"v": "Hoe hoog is het aflossingsvrije hypotheek(deel) ten opzichte van de huidige waarde van je woning?",
"t": "een",
"s": "Maak een keuze. (voorbeeld: aflossingsvrije deel = € 100.000 | woningwaarde = € 400.000 => 100/400 = 25%)",
"o": [
"Schuld is minder dan 50%",
"Schuld is meer dan 50%",
"Weet ik niet precies"
]
}
]
},
{
"titel": "Woning",
"vragen": [
{
"v": "Hoeveel is je woning waard ten opzichte van het totaal van je hypotheekschuld?",
"t": "een",
"s": "Maak een keuze. (voorbeeld: totale hypotheek = € 300.000 | woningwaarde = € 400.000 => 400/300 = 133%)",
"o": [
"Tot 20% meer",
"Meer dan 20% meer",
"De hypotheek is hoger dan de woningwaarde",
"Weet ik niet"
]
},
{
"v": "Ben je van plan de woning te verkopen vóór of rond de einddatum van de hypotheek?",
"t": "een",
"o": [
"Ja, voor een kleinere woning of huren",
"Ja, wegens vertrek naar het buitenland",
"Nee, ik wil hier blijven wonen"
]
}
]
},
{
"titel": "Inkomen en vermogen",
"vragen": [
{
"v": "Hoeveel bedraagt op dit moment je bruto jaarinkomen (incl. eventuele partner) ten opzichte van het aflossingsvrije hypotheekdeel?",
"t": "een",
"o": [
"Minder dan 20%",
"Meer dan 20%",
"Weet ik niet"
]
},
{
"v": "Heb je vermogen beschikbaar om de hypotheekschuld te verlagen ?",
"t": "een",
"o": [
"Ja, tot maximaal € 25.000",
"Ja, tot maximaal € 50.000",
"Ja, tot maximaal € 100.000",
"Ja, meer dan € 100.000",
"Nee"
]
},
{
"v": "Hoeveel bedraagt na je pensioen je bruto jaarinkomen (inclusief dat van je eventuele partner) ten opzichte van het aflossingsvrije hypotheekdeel?",
"t": "een",
"s": "Maak een keuze. Het gaat om totaal van AOW + werkgeverspensioen*, plus eventuele lijfrente inkomsten (* zie: www.mijnpensioenoverzicht.nl)",
"o": [
"Minder dan 20%",
"Meer dan 20%",
"Weet ik niet"
]
},
{
"v": "Ben je in staat om te sparen? Of eventueel bereid maandelijks alsnog (een deel van) je hypotheek af te lossen?",
"t": "meer",
"s": "Meerdere antwoorden mogelijk",
"o": [
"Ja, ik houd maandelijks geld over",
"Ja, ik wil (misschien) wel extra aflossen",
"Nee, dit kan of wil ik niet"
]
},
{
"v": "Wat is je leeftijd?",
"t": "een",
"o": [
"Jonger dan 50",
"Tussen 50 en 57",
"Ouder dan 57"
]
}
]
},
{
"titel": "Aflossingsvrije hypotheek",
"vragen": [
{
"v": "Hoe kunnen we je verder helpen?",
"t": "meer",
"o": [
"Ik wil graag een check op mijn schadeverzekeringen",
"Ik wil graag een check op mijn hypotheek",
"Ik wil graag een check op mijn lopende leningen",
"Anders, namelijk"
]
}
],
"sub": "Kunnen wij (ter controle) jouw naam en adres ontvangen?"
}
]
},
{
"id": "form-gerust-pensioen",
"titel": "Pensioenscan: gerust met pensioen?",
"sub": "Inzicht in werkgever, pensioenopbouw en inkomen na pensionering.",
"thema": "Pensioen & inkomen",
"intro": "Je pensioeninkomen kan bestaan uit 3 'pijlers'. De 1e pijler is het pensioen dat je ontvangt van de overheid (AOW). De 2e pijler is het pensioen dat je via je werkgever opbouwt en de 3e pijler is het pensioen dat je 'privé' hebt opgebouwd via bijvoorbeeld een lijfrenteverzekering (of andere spaartegoeden). Jouw pensioeninkomen is niet alleen van belang om later prettig te kunnen leven maar is bijvoorbeeld ook van belang bij overlijden (voor je nabestaanden) of bij het kunnen aanvragen of verlengen van een hypotheek. Geldverstrekkers nemen daarbij al vanaf de 57-jarige leeftijd het pensioeninkomen mee in hun beoordeling. Vul onderstaande vragen in en wij gaan graag voor je na of jouw pensioenvoorziening aanpassing behoeft.",
"stappen": [
{
"titel": "Algemeen",
"vragen": [
{
"v": "Ben je na je 15e levensjaar in Nederland komen wonen?",
"t": "een",
"s": "Maak een keuze. Voor elk jaar dat je niet in Nederland hebt gewoond, 50 jaar voor je pensioendatum, word je 2% gekort op de AOW uitkering.",
"o": [
"Nee",
"Ja"
]
},
{
"v": "Ben je na je 25e levensjaar 1 of meerdere keren van werkgever veranderd?",
"t": "een",
"o": [
"Nee",
"Nee, ik ben altijd (zelfstandig) ondernemer geweest",
"Ja, 1 keer",
"Ja, meerdere keren",
"Ja, maar ik ben nu (zelfstandig) ondernemer"
]
},
{
"v": "Heb je pensioen opgebouwd via je werkgever of als zelfstandig ondernemer?",
"t": "een",
"o": [
"Via mijn werkgever",
"Als zelfstandige via een lijfrente (bancair of verzekering)",
"Beide",
"Geen van beide"
]
},
{
"v": "Ben je 1 of meerdere keren gescheiden in je leven?",
"t": "een",
"o": [
"Nee",
"Nee, ik ben nooit gehuwd geweest",
"Ja"
]
},
{
"v": "Heb je een relatie?",
"t": "een",
"o": [
"Nee",
"Ja, we wonen apart van elkaar",
"Ja, we wonen samen zonder samenlevingsovereenkomst",
"Ja, we wonen samen met een samenlevingsovereenkomst",
"Ja, we zijn gehuwd",
"Ja, we heb een geregistreerd partnerschap"
]
}
]
},
{
"titel": "Werkgever",
"vragen": [
{
"v": "Weet jij wat voor pensioenregeling jouw werkgever aanbiedt?",
"t": "een",
"o": [
"Een beschikbare premieregeling",
"Een beschikbare premieregeling",
"Ik bouw (aanvullend) pensioen op via een lijfrente (verzekering of bancair)",
"Dat weet ik niet"
]
},
{
"v": "Weet jij wat voor pensioenregelingen jouw voormalige werkgevers aanboden?",
"t": "meer",
"o": [
"Een middelloonregeling",
"Een beschikbare premieregeling",
"Ik bouw (aanvullend) pensioen op via een lijfrente (verzekering of bancair)",
"Dat weet ik niet",
"Ik heb maar 1 werkgever gehad"
]
},
{
"v": "Hebben jouw huidige werkgever de pensioenregeling tijdens jouw dienstverband (grondig) gewijzigd?",
"t": "een",
"o": [
"Nee",
"Ja",
"Dat weet ik niet"
]
}
]
},
{
"titel": "Inkomen",
"vragen": [
{
"v": "Ben je momenteel zzp’er, freelancer of ondernemer?",
"t": "een",
"o": [
"Nee",
"Ja"
]
},
{
"v": "Zijn er perioden geweest na je 25e levensjaar waarin je substantieel minder bent gaan verdienen?",
"t": "een",
"o": [
"Nee",
"Ja, een korte periode",
"Ja, een langere periode van meerdere jaren"
]
}
]
},
{
"titel": "Contactgegevens",
"vragen": [
{
"v": "Hoe kunnen we je verder helpen?",
"t": "meer",
"o": [
"Ik wil graag een check op mijn schadeverzekeringen",
"Ik wil graag een check op mijn hypotheek",
"Ik wil graag een check op mijn lopende leningen",
"Anders, namelijk"
]
}
],
"sub": "Kunnen wij (ter controle) jouw naam en adres ontvangen?"
}
]
},
{
"id": "form-uitvaartverzekering",
"titel": "Uitvaartkosten-scan",
"sub": "Zijn de uitvaartkosten gedekt? Vragen over bestaande verzekeringen en financiële middelen.",
"thema": "Leven & nabestaanden",
"intro": "",
"stappen": [
{
"titel": "Uitvaartkosten scan",
"vragen": [
{
"v": "Heb je momenteel een uitvaartverzekering?",
"t": "een",
"o": [
"Nee",
"Ja",
"Dat weet ik niet"
]
}
],
"info": "Een sterfgeval in de familie, daar denk je liever niet aan. Toch is het goed af en toe wel even stil te staan bij het onvermijdelijke. Kunnen de nabestaanden de kosten van een uitvaart betalen? Vaak worden deze kosten te laag ingeschat.\n\nMet een uitvaartverzekering (of begrafenisverzekering) voorkom je dat je nabestaanden moeten opdraaien voor de kosten, als er onvoldoende spaargeld is. Vul onderstaande vragen in en wij gaan graag voor je na of financiële zaken rondom een overlijden aanpassing behoeven."
},
{
"titel": "Financiële middelen",
"vragen": [
{
"v": "Zijn er voldoende middelen om een uitvaart van jou en/of je gezinsleden te betalen?",
"t": "een",
"s": "Maak een keuze. Een uitvaart kost minimaal € 7.500,-",
"o": [
"Nee",
"Ja",
"Dat weet ik niet"
]
},
{
"v": "Wil je meer informatie over een uitvaartverzekering?",
"t": "een",
"o": [
"Nee",
"Ja"
]
}
]
},
{
"titel": "Contactgegevens",
"vragen": [
{
"v": "Hoe kunnen we je verder helpen?",
"t": "meer",
"o": [
"Ik wil graag een check op mijn schadeverzekeringen",
"Ik wil graag een check op mijn hypotheek",
"Ik wil graag een check op mijn lopende leningen",
"Anders, namelijk"
]
}
],
"sub": "Graag ontvangen we (ter controle) de volgende gegevens:"
}
]
},
{
"id": "form-schadeverzekering",
"titel": "Schadeverzekeringen-scan",
"sub": "Gezin, woning, auto, inzittenden (OIV of SVI) en overige verzekeringen in één scan.",
"thema": "Schadeverzekeringen",
"intro": "Een eenmaal gesloten schadeverzekering behoeft een periodieke toets om te beoordelen of de dekking nog wel aansluit bij (veranderingen in) jouw situatie. Het kan na verloop van tijd gebeuren dat je onderverzekerd bent of oververzekerd, bijvoorbeeld omdat dekkingen elkaar overlappen.",
"stappen": [
{
"titel": "Gezin en inkomen",
"vragen": [
{
"v": "Is je gezinssituatie gewijzigd of is er een kind 18 jaar geworden?",
"t": "een",
"o": [
"Nee",
"Ja, namelijk"
]
},
{
"v": "Is je (gezamenlijke) bruto-inkomen gewijzigd?",
"t": "een",
"s": "Maak een keuze. Bijvoorbeeld als gevolg van de Corona crisis.",
"o": [
"Nee",
"Ja namelijk"
]
}
]
},
{
"titel": "Woning",
"vragen": [
{
"v": "Heb je verbouwd of staat er een verbouwing gepland?",
"t": "een",
"o": [
"Nee",
"Ja, namelijk"
]
},
{
"v": "Verhuur jij (een deel van) je woning wel eens tijdelijk?",
"t": "een",
"s": "Maak een keuze. Denk bijvoorbeeld aan platforms zoals Airbnb",
"o": [
"Nee",
"Ja, namelijk"
]
},
{
"v": "Heb je energiebesparende maatregelen getroffen of ben je dat van plan?",
"t": "een",
"s": "Maak een keuze. Denk bijvoorbeeld aan zonnepanelen, HR ketel, enz.",
"o": [
"Nee",
"Ja, namelijk"
]
},
{
"v": "Heb je een substantieel deel van je interieur vervangen of ben je van plan dat te gaan doen?",
"t": "een",
"o": [
"Nee",
"Ja, namelijk"
]
}
]
},
{
"titel": "Auto",
"vragen": [
{
"v": "Hoe is je auto verzekerd?",
"t": "een",
"o": [
"WA",
"WA + beperkt casco",
"All Risk",
"Anders, namelijk"
]
},
{
"v": "Ben je (veel) meer of minder kilometers gaan rijden in de afgelopen jaren?",
"t": "een",
"s": "Bij een verandering graag het totaal aantal jaarlijkse kilometers vermelden",
"o": [
"Nee",
"Ja, vermeld de jaarlijks kilometers"
]
},
{
"v": "Hoe oud is je auto?",
"t": "een",
"o": [
"0 tot 5 jaar",
"5 tot 10 jaar",
"Ouder dan 10 jaar"
]
}
]
},
{
"titel": "Ongevallen inzittendenverzekering (OIV) en schadeverzekering inzittenden (SVI)",
"vragen": [
{
"v": "Heb je al eens nagedacht over een ongevallen inzittendenverzekering (OIV) of een schadeverzekering inzittenden (SVI)?",
"t": "een",
"o": [
"Ja, dat heb ik geregeld in mijn verzekering",
"Nee, daar heb ik geen interesse in",
"Nooit over nagedacht",
"Ik weet onvoldoende wat het inhoudt"
]
}
],
"info": "Passagiers kunnen schade altijd claimen op de WA-verzekering van de bestuurder of op die van de tegenpartij. Medische kosten zijn, zowel voor de bestuurder als de passagiers, gedekt via de zorgverzekering.\n\nEen inzittendenverzekering is vooral belangrijk voor de bestuurder die zelf een ongeluk veroorzaakt. Via de inzittendenverzekering kun je dan een groot deel van die schade verhalen.\n\nEen ongevallen inzittendenverzekering (OIV) keert een vast bedrag uit bij invaliditeit of overlijden van de inzittenden van de auto door een verkeersongeval. Deze uitkering staat los van de werkelijk geleden schade.\n\nEen schadeverzekering inzittenden (SVI) is iets duurder dan een ongevallen inzittendenverzekering, maar de dekking is veel uitgebreider. Deze verzekering is vooral nuttig voor mensen die graag zoveel mogelijk risico uitsluiten. \n\nEen schadeverzekering inzittenden keert de werkelijke schade uit na een ongeval. De vaststelling van die schade gaat op dezelfde manier als bij de WA-verzekering. De schuldvraag speelt bij de schade-inzittendenverzekering echter niet mee voor de uitkering."
},
{
"titel": "Overig",
"vragen": [
{
"v": "Wil je dat kostbaarheden ook buitenshuis verzekerd zijn tegen beschadiging, verlies en diefstal?",
"t": "een",
"s": "Maak een keuze. Denk aan smartphones, tablets, laptops, kleding, sieraden.",
"o": [
"Ja",
"Nee",
"Ik heb er onvoldoende zicht op wat er standaard al meeverzekerd is"
]
},
{
"v": "Ga je vaker of op een andere manier op vakantie?",
"t": "een",
"s": "Maak een keuze. Denk hierbij bijvoorbeeld aan nieuwe vakantielanden, dure kleding in de bagage, gevaarlijke of bijzondere sporten of de ziektekostendekking in dure landen.",
"o": [
"Nee",
"Ja, namelijk"
]
},
{
"v": "Vind je dat je voldoende beschermd bent tegen juridische claims of conflicten?",
"t": "een",
"o": [
"Ja",
"Nee",
"Daar heb ik onvoldoende zicht op"
]
},
{
"v": "Heb je behoefte aan meer informatie of advies omtrent schadepreventie?",
"t": "een",
"o": [
"Ja",
"Nee"
]
}
]
},
{
"titel": "Contactgegevens",
"vragen": [
{
"v": "Hoe kunnen we je verder helpen?",
"t": "meer",
"o": [
"Ik wil graag een check op mijn schadeverzekeringen",
"Ik wil graag een check op mijn hypotheek",
"Ik wil graag een check op mijn lopende leningen",
"Anders, namelijk"
]
}
],
"sub": "Kunnen wij (ter controle) jouw naam en adres ontvangen?"
}
]
},
{
"id": "form-bedrijfsverzekering",
"titel": "Bedrijfsverzekeringen-scan",
"sub": "Voor ondernemers: werknemers, eigenaren, omzet, schade-, aansprakelijkheids- en inkomensverzekeringen en oudedagsvoorziening.",
"thema": "Zakelijk",
"intro": "Met jouw bedrijf loop je risico’s. Soms kun je deze zelf dragen, maar vaak is het nodig risico’s te verzekeren. Wij vinden het belangrijk om een goede risicoanalyse te maken. Met de quickscan krijg je van ons heldere antwoorden op belangrijke vragen. Bijvoorbeeld of je verzekeringen nog passen bij je huidige bedrijfssituatie? Sluiten ze nog aan op de wet- en regelgeving? En kun je besparen op de kosten voor de verzekeringen? Vul onderstaande vragen in en wij gaan graag voor je na of de bedrijfsverzekeringen aanpassing behoeven.",
"stappen": [
{
"titel": "Algemeen",
"vragen": [
{
"v": "Wat zijn de kernactiviteiten van het bedrijf?",
"t": "open",
"s": "Omschrijf de belangrijkste werkzaamheden, handel, productie, binnen- en of buitenlandse activiteiten"
},
{
"v": "Zijn er belangrijke wijzigingen geweest in de bedrijfsvoering?",
"t": "een",
"s": "Maak een keuze. Denk hierbij aan wijziging van bedrijfsactiviteiten, omzetverandering, im- en export van/naar buiten de EU, overnames etc.",
"o": [
"Nee",
"Ja, namelijk"
]
}
]
},
{
"titel": "Werknemers",
"vragen": [
{
"v": "Hoeveel werknemers zijn er?",
"t": "open",
"s": "Vul een getal in. Ga uit van de situatie zoals die was aan het einde van het laatste boekjaar"
},
{
"v": "Hoeveel bedroeg het totale jaarloon voor de werknemers in loondienst (SV-loon)?",
"t": "open",
"s": "Vul een bedrag in. Ga uit van de situatie zoals die was aan het einde van het laatste boekjaar"
},
{
"v": "Hoeveel werknemers waren er niet in loondienst?",
"t": "open",
"s": "Vul een getal in"
},
{
"v": "Hoeveel % bedroeg het ziekteverzuim onder de werknemers in loondienst?",
"t": "open",
"s": "Vul een percentage in. Ga uit van de situatie zoals die was aan het einde van het laatste boekjaar"
}
]
},
{
"titel": "Eigenaars/DGA's/Firmanten",
"vragen": [
{
"v": "Hoeveel eigenaren/DGA's/firmanten zijn er?",
"t": "open",
"s": "Vul een getal in. Ga uit van de situatie zoals die was aan het einde van het laatste boekjaar"
},
{
"v": "Hoeveel bedroeg het totale jaarloon van eigenaren / DGA's / Firmanten",
"t": "open",
"s": "Vul een bedrag in. Ga uit van de situatie zoals die was aan het einde van het laatste boekjaar"
}
]
},
{
"titel": "Omzet en winst",
"vragen": [
{
"v": "Hoeveel bedroeg de jaaromzet?",
"t": "open",
"s": "Vul een bedrag in. Ga uit van de situatie zoals die was aan het einde van het laatste boekjaar"
},
{
"v": "Hoeveel bedroeg de bruto winst ? (jaaromzet minus kosten)",
"t": "open",
"s": "Vul een bedrag in. Ga uit van de situatie zoals die was aan het einde van het laatste boekjaar"
}
]
},
{
"titel": "Schadeverzekeringen",
"vragen": [
{
"v": "Bezit je bedrijf personenauto's",
"t": "een",
"o": [
"Nee",
"Ja, vul een aantal in"
]
},
{
"v": "Bezit je bedrijf bestelauto's?",
"t": "een",
"o": [
"Nee",
"Ja, vul een aantal in"
]
},
{
"v": "Bezit je bedrijf vrachtauto's?",
"t": "een",
"o": [
"Nee",
"Ja, vul een aantal in"
]
},
{
"v": "Heeft het bedrijf een rechtsbijstandverzekering?",
"t": "een",
"o": [
"Nee",
"Ja"
]
}
]
},
{
"titel": "Aansprakelijkheidsverzekeringen",
"vragen": [
{
"v": "Heeft je bedrijf een beroepsaansprakelijkheidsverzekering en/of bestuurdersaansprakelijkheidsverzekering?",
"t": "een",
"o": [
"Nee",
"Ja, beroepsaansprakelijkheid",
"Ja, bestuurdersaansprakelijkheid",
"Ja, beide"
]
},
{
"v": "Is de bruto-winst het afgelopen jaar (sterk) gewijzigd?",
"t": "een",
"o": [
"Nee",
"Ja, vul het verschil in met vorig jaar"
]
}
]
},
{
"titel": "Inkomensverzekeringen",
"vragen": [
{
"v": "Heeft het bedrijf een ziekteverzuimverzekering?",
"t": "een",
"o": [
"Nee",
"Ja, vul de jaarpremie in"
]
},
{
"v": "Is het bedrijf eigen risicodrager voor de WGA?",
"t": "een",
"o": [
"Nee",
"Ja, vul de jaarpremie in"
]
},
{
"v": "Heeft het bedrijf een WIA verzekering? (hiaat of plus)",
"t": "een",
"o": [
"Nee",
"Ja, vul de jaarpremie in"
]
},
{
"v": "Hebben de eigenaren / DGA's / Firmanten een arbeidsongeschiktheidsverzekering",
"t": "een",
"o": [
"Nee",
"Ja, vul de (gemiddelde) jaarpremie in"
]
}
]
},
{
"titel": "Oudedagsvoorzieningen",
"vragen": [
{
"v": "Heeft het bedrijf het overlijden van werknemers verzekerd?",
"t": "een",
"o": [
"Nee",
"Ja, als nabestaandenpensioen in de (verplichte of verzekerde) pensioenregeling",
"Ja, als een separate collectieve overlijdensrisicoverzekering",
"Anders namelijk:"
]
},
{
"v": "Heeft het bedrijf (ouderdoms)pensioen verzekerd voor de werknemers?",
"t": "een",
"o": [
"Nee",
"Ja, totale jaarpremie pensioenverzekering: €",
"Ja, wij zijn verplicht aangesloten bij een bedrijfs(tak)penioenfonds",
"Anders, namelijk"
]
}
]
},
{
"titel": "Contactgegevens",
"vragen": [
{
"v": "Hoe kunnen we je verder helpen?",
"t": "meer",
"o": [
"Ik wil graag een check op mijn schadeverzekeringen",
"Ik wil graag een check op mijn hypotheek",
"Ik wil graag een check op mijn lopende leningen",
"Anders, namelijk"
]
}
],
"sub": "Kunnen wij (ter controle) je naam en adres ontvangen?"
}
]
},
{
"id": "form-autoverzekering",
"titel": "Autoverzekering-scan: goedkoper of beter?",
"sub": "Privé- en gezinsauto's, aanvullende dekkingen en OIV of SVI.",
"thema": "Schadeverzekeringen",
"intro": "Via de onderstaande vragen beoordelen we of je huidige autoverzekering nog het beste past bij jouw situatie. Deze service kost € 25.- en is gratis als deze verzekering loopt via ons kantoor of als je hem hierna bij ons onderbrengt.",
"stappen": [
{
"titel": "Auto prive",
"vragen": [
{
"v": "Hoe oud is je auto?",
"t": "een",
"o": [
"0 tot 5 jaar",
"5 tot 10 jaar",
"Ouder dan 10 jaar"
]
},
{
"v": "Hoe is je auto verzekerd?",
"t": "een",
"o": [
"WA",
"WA + beperkt casco",
"All risk",
"Anders, namelijk:"
]
},
{
"v": "Reed je het afgelopen jaar veel meer of minder kilometers dan daarvoor?",
"t": "een",
"o": [
"Ongeveer hetzelfde",
"Minder, namelijk",
"Meer, namelijk"
]
},
{
"v": "Gebruik je je auto wel eens 'zakelijk'?",
"t": "meer",
"s": "Maak een keuze. Denk aan personen- of goederenvervoer",
"o": [
"Nee",
"Ja, voor het bezorgen van pakjes of maaltijden",
"Ja, voor personenvervoer tegen betaling",
"Anders, namelijk"
]
}
]
},
{
"titel": "Auto gezin",
"vragen": [
{
"v": "Wordt je auto binnen het gezin regelmatig door een kind gebruikt?",
"t": "een",
"o": [
"Nee / n.v.t.",
"Ja, namelijk"
]
},
{
"v": "Beschikt je gezin over meerdere auto's?",
"t": "een",
"s": "Maak een keuze. Dit gaat over mensen binnen jouw huishouden (zelfde adres)",
"o": [
"Nee (er is 1 auto)",
"Ja, namelijk"
]
}
]
},
{
"titel": "Aanvullende verzekeringen",
"vragen": [
{
"v": "Heb je pechhulp meeverzekerd?",
"t": "een",
"o": [
"Ja",
"Nee",
"Dat weet ik niet",
"Ik kan niet beoordelen of dat verstandig is voor mij"
]
},
{
"v": "Heb je verkeersrechtsbijstand verzekerd?",
"t": "een",
"s": "Maak keuze",
"o": [
"Ja",
"Nee",
"Dat weet ik niet",
"Ik kan niet beoordelen of dat verstandig is voor mij"
]
}
]
},
{
"titel": "Ongevallen inzittendenverzekering (OIV) en schadeverzekering inzittenden (SVI)",
"vragen": [
{
"v": "Heb je al eens nagedacht over een ongevallen inzittendenverzekering (OIV) of een schadeverzekering inzittenden (SVI)?",
"t": "een",
"o": [
"Ja, dat heb ik geregeld in mijn verzekering",
"Nee, daar heb ik geen interesse in",
"Nooit over nagedacht",
"Ik weet onvoldoende wat het inhoudt"
]
}
],
"info": "Passagiers kunnen schade altijd claimen op de WA-verzekering van de bestuurder of op die van de tegenpartij. Medische kosten zijn, zowel voor de bestuurder als de passagiers, gedekt via de zorgverzekering.\n\nEen inzittendenverzekering is vooral belangrijk voor de bestuurder die zelf een ongeluk veroorzaakt. Via de inzittendenverzekering kun je dan een groot deel van die schade verhalen.\n\nEen ongevallen inzittendenverzekering (OIV) keert een vast bedrag uit bij invaliditeit of overlijden van de inzittenden van de auto door een verkeersongeval. Deze uitkering staat los van de werkelijk geleden schade.\n\nEen schadeverzekering inzittenden (SVI) is iets duurder dan een ongevallen inzittendenverzekering, maar de dekking is veel uitgebreider. Deze verzekering is vooral nuttig voor mensen die graag zoveel mogelijk risico uitsluiten. \n\nEen schadeverzekering inzittenden keert de werkelijke schade uit na een ongeval. De vaststelling van die schade gaat op dezelfde manier als bij de WA-verzekering. De schuldvraag speelt bij de schade-inzittendenverzekering echter niet mee voor de uitkering."
},
{
"titel": "Contactgegevens",
"vragen": [
{
"v": "Hoe kunnen we je verder helpen?",
"t": "meer",
"o": [
"Ik wil graag een check op mijn schadeverzekeringen",
"Ik wil graag een check op mijn hypotheek",
"Ik wil graag een check op mijn lopende leningen",
"Anders, namelijk"
]
}
],
"sub": "Kunnen wij (ter controle) jouw naam en adres ontvangen?"
}
]
},
{
"id": "form-klanttevredenheid",
"titel": "Klanttevredenheidsonderzoek",
"sub": "Hoe tevreden zijn klanten over de adviseur, de informatievoorziening en de dienstverlening?",
"thema": "Kantoor & kwaliteit",
"intro": "",
"stappen": [
{
"titel": "Klanttevredenheidsonderzoek, ben je tevreden over ons?",
"vragen": [
{
"v": "Wat is voor jou de belangrijkste reden geweest om voor ons kantoor te kiezen? (meerdere keuzes mogelijk)",
"t": "meer",
"o": [
"Persoonlijke band met adviseur",
"Tarief van onze dienstverlening",
"Kwaliteit van onze dienstverlening",
"Verwijzing/ reputatie van ons kantoor in mijn familie-/vrienden-/kennissenkring",
"Verwijzing in mijn familie-/vrienden-/kennissenkring",
"Prettige eerste kennismaking tijdens oriënterend gesprek",
"Promotie via social media",
"Anders namelijk.."
]
}
]
},
{
"titel": "Onze adviseur",
"vragen": [
{
"v": "Hoe tevreden ben je over je adviseur?",
"t": "een",
"o": [
"Zeer tevreden",
"Tevreden",
"Redelijk tevreden",
"Ontevreden",
"Zeer ontevreden"
]
},
{
"v": "Wil je je mening over onze adviseur toelichten?",
"t": "open",
"s": "Schrijf een toelichting"
}
]
},
{
"titel": "Informatievoorziening",
"vragen": [
{
"v": "Wat vind je van onze informatievoorziening?",
"t": "een",
"s": "Denk aan onze nieuwsbrief, emails, brieven, persoonlijk contact",
"o": [
"Zeer goed",
"Goed",
"Matig",
"Slecht",
"Zeer slecht"
]
},
{
"v": "Vind je dat we jou vaak genoeg en pro actief informeren?",
"t": "een",
"o": [
"Zeer goed",
"Goed",
"Voldoende",
"Matig",
"Slecht"
]
},
{
"v": "Wil je jouw mening over onze informatievoorziening toelichten?",
"t": "open",
"s": "Schrijf een toelichting"
}
]
},
{
"titel": "Overige vragen",
"vragen": [
{
"v": "Als je telefonisch contact hebt gehad met ons; Hoe heb je dat contact ervaren?",
"t": "een",
"o": [
"Prettig, mijn vragen werden goed en duidelijk beantwoord",
"Voldoende, ik werd geholpen",
"Moeizaam, ik ben niet geholpen en/of mijn vragen zijn niet naar wens beantwoord",
"Ik heb het afgelopen jaar gene contact gehad"
]
},
{
"v": "Heb je nog opmerkingen of suggesties die je ons wilt meegeven?",
"t": "een",
"o": [
"Nee",
"Ja, schrijf een toelichting"
]
},
{
"v": "Hoe beoordeel je in het algemeen onze dienstverlening?",
"t": "score",
"s": "Score"
}
]
},
{
"titel": "Klanttevredenheidsonderzoek",
"vragen": [
{
"v": "Kunnen we je verder helpen?",
"t": "meer",
"o": [
"Ik wil graag een check op mijn schadeverzekeringen",
"Ik wil graag een check op mijn hypotheek",
"Ik wil graag een check op mijn lopende leningen",
"Anders, namelijk"
]
}
],
"sub": "Kunnen wij (ter controle) jouw naam en adres ontvangen?"
}
]
}
];

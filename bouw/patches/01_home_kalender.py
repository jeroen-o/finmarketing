"""Homepage (uitgelicht, zo werkt het, deze maand), marketingkalender 2027, favicon/meta, kennisbank-badges."""
import os
p = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'template.html')
t = open(p, encoding='utf-8').read()


def rep(a, b, cnt=1):
    global t
    assert t.count(a) == cnt, (a[:70], t.count(a))
    t = t.replace(a, b)


# ---------- favicon + meta ----------
rep('<meta name="description" content="Gratis en freemium marketingmateriaal, klanttools en rekentools van Blinqx Verzekering & Hypotheek en partners, voor adviseurs.">',
    '''<meta name="description" content="Gratis en freemium marketingmateriaal, klanttools en rekentools van Blinqx Verzekering & Hypotheek en partners, voor adviseurs.">
<meta name="theme-color" content="#FFCD00">
<meta property="og:title" content="Marketingbibliotheek Blinqx Verzekering & Hypotheek">
<meta property="og:description" content="Nieuwsbrieven, campagnes, klanttools en rekentools voor adviseurs. Gratis te gebruiken, in je eigen huisstijl.">
<meta property="og:type" content="website">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 36'%3E%3Cpath d='M16 0l16 9v18l-16 9L0 27V9z' fill='%23FFCD00'/%3E%3Cpath d='M16 7l9 5v12l-9 5-9-5V12z' fill='%23000'/%3E%3C/svg%3E">''')

# ---------- CSS ----------
rep('''  /* Footer */''', '''  /* Uitgelicht, stappen, kalender */
  .feat-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px;margin-bottom:40px}
  .fcard{display:flex;flex-direction:column;gap:10px;padding:22px 20px;text-decoration:none;color:inherit;position:relative;transition:transform .15s}
  .fcard:hover{transform:translateY(-3px)}
  .fcard .hexi{width:44px;height:50px}
  .fcard h3{font-size:1.12rem}
  .fcard p{font-size:.9rem;color:var(--ink-2);margin:0}
  .fcard .go{margin-top:auto;font-weight:800;font-size:.88rem}
  .fcard.dark{background:var(--k);color:#fff}
  .fcard.dark p{color:#d7dde5}
  .fcard.dark .go{color:var(--y)}
  .steps3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px;margin-bottom:44px}
  .step{background:#fff;padding:20px;position:relative}
  .step b.n{display:inline-flex;width:36px;height:40px;background:var(--y);align-items:center;justify-content:center;font-size:1.1rem;clip-path:polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%);margin-bottom:8px}
  .step h3{font-size:1rem;margin-bottom:6px}
  .step p{font-size:.9rem;margin:0;color:var(--ink-2)}
  .month-band{background:var(--k);color:#fff;padding:22px;display:grid;grid-template-columns:auto minmax(0,1fr) auto;gap:22px;align-items:center;margin-bottom:44px}
  .month-band .mname{font-size:2rem;font-weight:800;color:var(--y);line-height:1}
  .month-band ul{margin:0;padding-left:1.1rem}
  .month-band a{color:var(--y)}
  .kal{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}
  .kmaand{background:#fff;padding:18px;display:flex;flex-direction:column;gap:10px}
  .kmaand.nu{box-shadow:inset 0 0 0 3px var(--y)}
  .kmaand h3{display:flex;justify-content:space-between;align-items:center;font-size:1.15rem}
  .kact{border-top:1px solid var(--line-2);padding-top:10px}
  .kact b{display:block;font-size:.95rem}
  .kact p{font-size:.86rem;color:var(--ink-2);margin:4px 0 6px}
  .kact .chan a{background:var(--y-soft);text-decoration:none;font-weight:700;font-size:.75rem;padding:4px 8px}
  .kact .datum{font-size:.75rem;font-weight:800;color:var(--y-ink)}
  @media (max-width:900px){ .feat-grid,.kal{grid-template-columns:1fr 1fr} .steps3{grid-template-columns:1fr} .month-band{grid-template-columns:1fr} }
  @media (max-width:600px){ .feat-grid,.kal{grid-template-columns:1fr} }

  /* Footer */''')

# ---------- nav ----------
rep('''      <a href="#/kennisbank" data-nav="kennisbank">Kennisbank</a>''', '''      <a href="#/kalender" data-nav="kalender">Kalender</a>
      <a href="#/kennisbank" data-nav="kennisbank">Kennisbank</a>''')

# ---------- kalenderdata + view ----------
rep('''/* ---------- Kennisbank ---------- */''', '''/* ---------- Marketing- en klantactiviteitenkalender 2027 ---------- */
const MAANDEN = ["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"];
const KALENDER = [
  { m:1, a:[
    {t:"Nieuwsbrief: wat verandert er in 2027?", d:"De nieuwe leennormen, NHG-grens en aftrekpercentages gelden vanaf 1 januari. Een goed moment voor je eerste nieuwsbrief van het jaar.", i:["nieuwsbrief-hypotheekbeleid-2027","kennisbank"]},
    {t:"Renteverlengers van dit jaar in beeld", d:"Breng alle klanten met een aflopende rentevaste periode in 2027 in kaart en plan de gesprekken.", i:["sel-renteverlengers","campagne-rentevast-duurzaam","portefeuillesignalen"]}]},
  { m:2, a:[
    {t:"Aangifteseizoen: fiscale vragen beantwoorden", d:"Klanten doen aangifte inkomstenbelasting. Deel uitleg over renteaftrek, eigenwoningforfait en voorlopige teruggave.", i:["kennisbank","nieuwsbrief-hypotheekbeleid-2027"]},
    {t:"Jaarlijkse update van klantgegevens", d:"Stuur de korte jaarlijkse update (5 kernvragen) aan je hele portefeuille.", i:["stappenscan-52","checklist-publicatie"]}]},
  { m:3, a:[
    {t:"Nieuw bankbeleid: pensioen telt eerder mee", d:"Rabobank en Obvion toetsen vanaf maart 2027 al 15 jaar vóór de AOW-leeftijd op pensioeninkomen. Benader klanten van 50–57 jaar.", i:["campagne-pensioen","aflossingsvrij-check","rabobank-beleid"], dt:"2027-03-01"},
    {t:"Bomen planten met het Hypotheekbos", d:"In maart zijn de bomenplantdagen. Deel het op social en laat zien dat je kantoor groen is.", i:["hypotheekbos"]}]},
  { m:4, a:[
    {t:"Voorjaar: verduurzamen", d:"Klanten denken in het voorjaar aan isoleren en zonnepanelen. Wijs op extra leenruimte en rentekorting bij een beter energielabel.", i:["campagne-duurzaam-oversluiten","duurzaamheidsprofiel","klimaatcijfer"]}]},
  { m:5, a:[
    {t:"Woningmarkt in beweging: verhuizers", d:"Signaleer klanten die hun woning te koop zetten en help kopers met een feitencheck van hun nieuwe woning.", i:["portefeuillesignalen","pandwise","funderingscijfer"]},
    {t:"LinkedIn-campagne “Hypotheek vanaf 52”", d:"Start de campagne van zeven posts in vier weken.", i:["linkedin-52","adviseurstoolkit-52"]}]},
  { m:6, a:[
    {t:"Hypotheekverjaardag", d:"Verras klanten op de verjaardag van hun hypotheek met een kaartje en een verantwoord hypotheekrapport.", i:["verantwoord-hypotheekrapport","ecards","sel-verjaardagen"]},
    {t:"Woontoekomst-check voor 55-plussers", d:"Blijven of gaan? Laat oudere klanten in vier vragen aangeven hoe ze later willen wonen.", i:["woontoekomst-check","campagne-verkopen-terughuren"]}]},
  { m:7, a:[
    {t:"Zomercheck: overlijdensrisicoverzekering", d:"ORV-premies zijn gedaald. Laat zien wie kan besparen, ook gestopte rokers.", i:["sel-gestopte-rokers","portefeuillesignalen"]}]},
  { m:8, a:[
    {t:"Ondernemers in beeld", d:"Benader relaties met een KvK-registratie over aansprakelijkheid, arbeidsongeschiktheid en pensioen.", i:["campagne-kvk"]}]},
  { m:9, a:[
    {t:"Prinsjesdag: plannen voor 2028", d:"Op Prinsjesdag (dinsdag 21 september 2027) worden de fiscale plannen bekend. Stuur een korte update over wat dit voor huiseigenaren betekent.", i:["nieuwsbrief-hypotheekbeleid-2027","kennisbank"], dt:"2027-09-21"},
    {t:"Nibud-advies leennormen 2028", d:"Het Nibud publiceert rond september het advies voor de normen van volgend jaar. Deel wat er verandert voor de maximale hypotheek.", i:["adviseurstools"]}]},
  { m:10, a:[
    {t:"Pensioen en aflossingsvrij: 2031 komt dichterbij", d:"Help klanten met een oude aflossingsvrije hypotheek vooruitkijken: kan de hypotheek straks nog betaald worden?", i:["aflossingsvrij-check","campagne-pensioen","hypotheek-straks"]},
    {t:"Fundering en klimaat", d:"Najaarsstormen en wateroverlast: een goed moment voor het klimaat- en funderingscijfer.", i:["funderingscijfer","klimaatcijfer","woningcijfer"]}]},
  { m:11, a:[
    {t:"Leennormen 2028 bekend", d:"De Kamerbrief met de leennormen voor volgend jaar verschijnt in het najaar. Werk je klanttekst en nieuwsbrief bij.", i:["nieuwsbrief-hypotheekbeleid-2027","checklist-publicatie"]},
    {t:"Portefeuille-scan voor het nieuwe jaar", d:"Bereken hoeveel kansen er in je portefeuille zitten en plan de renteverlengers van volgend jaar.", i:["kansentool","sel-renteverlengers","brochure-verborgen-kansen"]}]},
  { m:12, a:[
    {t:"Bedankt en fijne feestdagen", d:"Sluit het jaar persoonlijk af met een kaartje aan je klanten.", i:["ecards"]},
    {t:"Jaarplanning marketing 2028", d:"Kijk terug op het jaar en plan je campagnes. Dien je wensen voor nieuw materiaal in.", i:["checklist-publicatie"]}]}
];
function icsVoor(acts){
  const pad = n => String(n).padStart(2,"0"), stamp = new Date().toISOString().replace(/[-:]/g,"").slice(0,15)+"Z";
  const lines = ["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Blinqx VH//Marketingkalender//NL","CALSCALE:GREGORIAN"];
  acts.forEach(({m,a},mi)=>a.forEach((x,ai)=>{
    const d = x.dt ? x.dt.replace(/-/g,"") : `2027${pad(m)}01`;
    const y = +d.slice(0,4), mo = +d.slice(4,6)-1, da = +d.slice(6,8), nd = new Date(Date.UTC(y,mo,da+1));
    const end = `${nd.getUTCFullYear()}${pad(nd.getUTCMonth()+1)}${pad(nd.getUTCDate())}`;
    const esc2 = s => s.replace(/[\\\\,;]/g, c=>"\\\\"+c).replace(/\\n/g,"\\\\n");
    lines.push("BEGIN:VEVENT",`UID:blinqx-kal-${m}-${ai}@marketingbibliotheek`,`DTSTAMP:${stamp}`,`DTSTART;VALUE=DATE:${d}`,`DTEND;VALUE=DATE:${end}`,
      `SUMMARY:${esc2("Marketing: "+x.t)}`,`DESCRIPTION:${esc2(x.d)}`,"END:VEVENT");
  }));
  lines.push("END:VCALENDAR");
  return lines.join("\\r\\n");
}
const kalLinks = ids => ids.map(id=>ITEMS.find(i=>i.id===id)).filter(Boolean).map(i=>`<a href="#/item/${i.id}">${esc(i.title.replace(/^(Campagne|Selectie): /,""))} →</a>`).join("");
function viewKalender(){
  setNav("kalender");
  const nu = new Date(), mNu = nu.getFullYear() < 2027 ? 1 : nu.getMonth()+1;
  smallHero([`<b>Kalender</b>`], `
    <div class="detail-head"><div><span class="badge gratis">Gratis</span> <span class="badge cat">Jaarplanning</span>
      <h1>Marketing- en klantactiviteitenkalender 2027</h1><p>Per maand een of twee concrete klantactiviteiten, met het materiaal dat je er direct voor kunt gebruiken. Zet ze in één keer in je agenda.</p></div>
      <div class="btns"><button class="btn btn-k" id="ics-all">${icon("calendar",18)} Hele jaar in mijn agenda (.ics)</button></div></div>`);
  app.innerHTML = `<div class="wrap"><div class="kal">${KALENDER.map(({m,a})=>`
    <section class="kmaand cut ${m===mNu?"nu":""}" id="maand-${m}">
      <h3><span>${MAANDEN[m-1][0].toUpperCase()+MAANDEN[m-1].slice(1)}</span>${m===mNu?`<span class="badge freemium">Eerstvolgend</span>`:""}</h3>
      ${a.map(x=>`<div class="kact">${x.dt?`<span class="datum">${new Date(x.dt).toLocaleDateString("nl-NL",{day:"numeric",month:"long",year:"numeric"})}</span>`:""}<b>${esc(x.t)}</b><p>${esc(x.d)}</p><div class="chan">${kalLinks(x.i)}</div></div>`).join("")}
      <button class="btn btn-o btn-sm" data-ics="${m}" style="margin-top:auto;align-self:flex-start">${icon("calendar",16)} In mijn agenda</button>
    </section>`).join("")}</div>
    <div class="note" style="margin-top:18px"><strong>Let op:</strong> data van bankbeleid, Prinsjesdag en publicaties zijn indicatief. Controleer ze voordat je communiceert en leg verzending vast in het klantdossier.</div></div>`;
  $("#ics-all").onclick = () => { download("marketingkalender-2027.ics", icsVoor(KALENDER), "text/calendar"); toast("Agendabestand gedownload"); };
  $$("[data-ics]").forEach(b=>b.onclick=()=>{ const m=+b.dataset.ics; download(`marketingkalender-2027-${MAANDEN[m-1]}.ics`, icsVoor(KALENDER.filter(k=>k.m===m)), "text/calendar"); toast("Agendabestand gedownload"); });
  if (mNu) setTimeout(()=>{ const el=document.getElementById("maand-"+mNu); if (el && mNu>1) el.scrollIntoView({block:"center"}); }, 50);
}

/* ---------- Kennisbank ---------- */''')

# catalogus-item
rep('''  { id:"ecards", cat:"content", kind:"kaarten", model:"gratis",''', '''  { id:"marketingkalender", cat:"content", kind:"kalender", model:"gratis",
    title:"Marketing- en klantactiviteitenkalender 2027", by:"Blinqx V&H",
    summary:"Per maand concrete klantactiviteiten met het bijbehorende materiaal: van de nieuwsbrief in januari tot de hypotheekverjaardag in juni en Prinsjesdag in september. Met agendabestand (.ics).",
    channels:["Agenda","Jaarplanning"], tags:["kalender","jaarplanning","agenda","ics","klantactiviteiten","campagne","prinsjesdag","maand"] },
  { id:"ecards", cat:"content", kind:"kaarten", model:"gratis",''')
rep('''kaarten:viewKaarten, kennisbank:viewKennisbank}''', '''kaarten:viewKaarten, kennisbank:viewKennisbank, kalender:viewKalender}''')
rep('''  else if (path==="/kennisbank"){''', '''  else if (path==="/kalender"){ viewKalender(); document.title="Kalender · Marketingbibliotheek Blinqx V&H"; window.scrollTo(0,0); }
  else if (path==="/kennisbank"){''')

# ---------- homepage-secties ----------
rep('''  app.innerHTML = `<div class="wrap">

    <h2 class="sec-title">Kies een <u>categorie</u></h2>''', '''  const FEAT = [
    ["verantwoord-hypotheekrapport","life events","Risico's, besparingen en maximale hypotheek in één rapport. Perfect voor de hypotheekverjaardag.","dark"],
    ["nieuwsbrief-hypotheekbeleid-2027","news","Kant-en-klaar met je eigen kantoorgegevens. Download als Word of kopieer voor je mail.",""],
    ["woontoekomst-check","house","Vier vragen voor 55-plussers: blijven of gaan? Antwoorden komen direct bij jou binnen.",""],
    ["kansentool","target","Hoeveel oversluiters, renteverlengers en verhuizers zitten er in je portefeuille?",""],
    ["campagne-pensioen","pension","Drie mails voor klanten van 50–57 jaar met een aflossingsvrije hypotheek.",""],
    ["marketingkalender","calendar","Per maand een klantactiviteit, met het materiaal erbij. Zet het jaar in je agenda.","dark"]
  ].map(([id,ic,txt,cls])=>{ const it=ITEMS.find(i=>i.id===id); return it ? `<a class="fcard cut ${cls}" href="#/item/${id}"><span class="hexi">${icon(ic,24)}</span>${badge(it.model)}<h3>${esc(it.title)}</h3><p>${esc(txt)}</p><span class="go">Aan de slag →</span></a>` : ""; }).join("");
  const mNu = new Date().getFullYear() < 2027 ? 1 : new Date().getMonth()+1, kM = KALENDER.find(k=>k.m===mNu);
  app.innerHTML = `<div class="wrap">

    <h2 class="sec-title">Direct <u>aan de slag</u></h2>
    <p class="sec-sub">De meest gebruikte tools en campagnes voor klantcontact.</p>
    <div class="feat-grid">${FEAT}</div>

    <div class="month-band">
      <div><div class="eyebrow" style="margin:0 0 4px">${new Date().getFullYear() < 2027 ? "Start van 2027" : "Deze maand"}</div><div class="mname">${MAANDEN[mNu-1]}</div></div>
      <ul>${kM.a.map(x=>`<li><b>${esc(x.t)}</b>: ${esc(x.d)}</li>`).join("")}</ul>
      <a class="btn btn-y" href="#/kalender" style="color:var(--k)">Bekijk de kalender →</a>
    </div>

    <h2 class="sec-title">Zo <u>werkt</u> het</h2>
    <p class="sec-sub">Van materiaal naar klantcontact in drie stappen.</p>
    <div class="steps3">
      <div class="step cut"><b class="n">1</b><h3>Kies je materiaal</h3><p>Zoek op onderwerp of kies een categorie: nieuwsbrief, campagne, klanttool of kennisbankartikel.</p></div>
      <div class="step cut"><b class="n">2</b><h3>Maak het van jou</h3><p>Vul je kantoornaam, contactgegevens en huisstijlkleur in. Alles blijft in je browser.</p></div>
      <div class="step cut"><b class="n">3</b><h3>Verstuur of plaats</h3><p>Via je eigen mail, je website, Blinqx Connect of DFO. Of download als Word of PDF.</p></div>
    </div>

    <h2 class="sec-title">Kies een <u>categorie</u></h2>''')

# ---------- kennisbank: badge mogelijk verouderd ----------
rep('''<summary style="cursor:pointer;font-weight:800;display:flex;justify-content:space-between;gap:12px;align-items:center;list-style:none"><span>${highlight(a.t,T)}</span><span class="badge cat kb-th">${esc(a.th)}</span></summary>''',
    '''<summary style="cursor:pointer;font-weight:800;display:flex;justify-content:space-between;gap:12px;align-items:center;list-style:none"><span>${highlight(a.t,T)}</span><span style="display:flex;gap:6px;flex-wrap:wrap;flex:none">${kbOud(a)?`<span class="badge betaald" title="Bevat jaartallen of bedragen van vóór 2021">Mogelijk verouderd</span>`:""}<span class="badge cat kb-th">${esc(a.th)}</span></span></summary>''')
rep('''const kbState = { q:"", th:"alle" };''', '''const kbState = { q:"", th:"alle" };
const kbOud = a => /\\b(19\\d\\d|20[01]\\d|2020)\\b|290\\.000|265\\.000|levensloop|52%|51%|50,5%/i.test(a.t+" "+a.b);''')

open(p, 'w', encoding='utf-8').write(t)
print('ok')

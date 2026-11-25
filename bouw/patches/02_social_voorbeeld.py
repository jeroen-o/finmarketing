"""Social-postbank en 'Vul voorbeeld in' bij de rekentools."""
import os
p = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'template.html')
t = open(p, encoding='utf-8').read()


def rep(a, b, cnt=1):
    global t
    assert t.count(a) == cnt, (a[:70], t.count(a))
    t = t.replace(a, b)


# ---------- item ----------
rep('''  { id:"ecards", cat:"content", kind:"kaarten", model:"gratis",''', '''  { id:"social-posts", cat:"content", kind:"social", model:"gratis",
    title:"Social-postbank: posts voor elke maand", by:"Blinqx V&H",
    summary:"Veertien kant-en-klare posts voor LinkedIn, Facebook en Instagram over leennormen, pensioen, verduurzamen, ORV, fundering en meer. Met je eigen kantoornaam en link, een passende afbeelding en hashtags.",
    channels:["LinkedIn","Facebook","Instagram","Social"], tags:["social","linkedin","facebook","instagram","posts","social media","hashtags","content"] },
  { id:"ecards", cat:"content", kind:"kaarten", model:"gratis",''')

# ---------- data + view ----------
rep('''/* ---------- E-cards ---------- */''', '''/* ---------- Social-postbank ---------- */
const POSTS = [
  {m:1, t:"Leennormen 2027", beeld:"Raket", i:"nieuwsbrief-hypotheekbeleid-2027", x:"Nieuw jaar, nieuwe hypotheekregels. Sinds 1 januari gelden de leennormen voor 2027: de NHG-grens is verhoogd naar € 500.000 en veel huishoudens kunnen iets meer lenen.\\n\\nWat betekent dit voor jouw situatie? We rekenen het graag met je door.\\n\\n👉 {link}", h:"#hypotheek #leennormen2027 #NHG"},
  {m:2, t:"Aangifte en hypotheekrenteaftrek", beeld:"Zon", i:"kennisbank", x:"Het aangifteseizoen is begonnen. Heb je een eigen woning? Dan is je hypotheekrente in veel gevallen aftrekbaar, maar let ook op het eigenwoningforfait.\\n\\nTwijfel je wat je moet invullen of wil je weten of een voorlopige teruggave iets voor jou is? Stel gerust je vraag.\\n\\n👉 {link}", h:"#belastingaangifte #hypotheekrenteaftrek #eigenwoning"},
  {m:3, t:"Pensioen telt eerder mee", beeld:"Bakkie pleur", i:"campagne-pensioen", x:"Wist je dat sommige banken bij een nieuwe of aangepaste hypotheek al 15 jaar vóór je AOW-leeftijd naar je pensioeninkomen kijken?\\n\\nBen je tussen de 50 en 57 en heb je plannen met je woning? Dan is het slim om dit nu al in beeld te hebben. Een kort gesprek geeft veel duidelijkheid.\\n\\n👉 {link}", h:"#pensioen #hypotheek #50plus"},
  {m:4, t:"Verduurzamen loont dubbel", beeld:"Grow-Voorkant", i:"campagne-duurzaam-oversluiten", x:"Isoleren, zonnepanelen of een warmtepomp? Verduurzamen kan je energierekening verlagen. Bij sommige geldverstrekkers krijg je bovendien rentekorting bij een beter energielabel.\\n\\nBenieuwd wat er voor jouw woning mogelijk is? Begin met een gratis duurzaamheidscheck en bespreek de financiering met ons.\\n\\n👉 {link}", h:"#verduurzamen #energielabel #duurzaamwonen"},
  {m:5, t:"Woning op het oog?", beeld:"Welkom", i:"pandwise", x:"Een woning op het oog? Kijk verder dan de foto's. Met een gratis feitencheck zie je informatie over fundering, klimaat, geluid en een waarde-indicatie op basis van open data.\\n\\nEn daarna? Dan helpen wij je graag met de hypotheek.\\n\\n👉 {link}", h:"#huiskopen #woningzoeker #hypotheekadvies"},
  {m:6, t:"Je hypotheek is jarig", beeld:"Verjaardag", i:"verantwoord-hypotheekrapport", x:"Dat mag gevierd worden! 🎉 Is je hypotheek weer een jaartje ouder? Dan is het een goed moment om te kijken of hij nog past bij je situatie: bij pensioen, arbeidsongeschiktheid, werkloosheid of als je wilt verhuizen.\\n\\nVraag ons naar je verantwoord hypotheekrapport.\\n\\n👉 {link}", h:"#hypotheekverjaardag #hypotheek #financieelgezond"},
  {m:6, t:"Blijven of gaan?", beeld:"Super", i:"woontoekomst-check", x:"Hoe wil jij later wonen? Bijna negen op de tien 55-plussers denken erover na, maar de helft doet er (nog) niets mee.\\n\\nDoe de woontoekomst-check: vier vragen, drie minuten, geen cijfers. Jij bepaalt of en hoe we contact opnemen.\\n\\n👉 {link}", h:"#55plus #wonen #woontoekomst"},
  {m:7, t:"Betaal je te veel voor je ORV?", beeld:"Thumbs up", i:"sel-gestopte-rokers", x:"De premies voor overlijdensrisicoverzekeringen zijn de afgelopen jaren flink gedaald. Heb je je ORV al een tijd geleden afgesloten, of ben je gestopt met roken? Dan kun je mogelijk besparen.\\n\\nWe zoeken het graag voor je uit.\\n\\n👉 {link}", h:"#overlijdensrisicoverzekering #besparen #verzekeren"},
  {m:8, t:"Ondernemer? Check je risico's", beeld:"Bakkie pleur", i:"campagne-kvk", x:"Als ondernemer regel je veel zelf, ook je inkomen bij ziekte en je pensioen. Is je bedrijf goed verzekerd tegen aansprakelijkheid? En wat gebeurt er met je hypotheek als je arbeidsongeschikt raakt?\\n\\nPlan een vrijblijvende check.\\n\\n👉 {link}", h:"#ondernemer #zzp #aov"},
  {m:9, t:"Prinsjesdag", beeld:"Zon", i:"nieuwsbrief-hypotheekbeleid-2027", x:"Vandaag is het Prinsjesdag. De plannen voor volgend jaar worden bekend, ook voor huiseigenaren. Wat verandert er voor jouw hypotheek, renteaftrek of eigenwoningforfait?\\n\\nWe zetten de belangrijkste punten voor je op een rij.\\n\\n👉 {link}", h:"#prinsjesdag #hypotheek #wonen"},
  {m:10, t:"Aflossingsvrij: 2031 komt dichterbij", beeld:"Raket", i:"aflossingsvrij-check", x:"Heb je een aflossingsvrije hypotheek van vóór 2001? Dan stopt de hypotheekrenteaftrek mogelijk vanaf 2031. Over een overgangsregeling is nog geen besluit genomen.\\n\\nWeet jij of je hypotheek straks betaalbaar blijft? Doe de check of plan een gesprek.\\n\\n👉 {link}", h:"#aflossingsvrij #hypotheek #pensioen"},
  {m:10, t:"Funderingsrisico", beeld:"Welkom", i:"funderingscijfer", x:"Vanaf 2027 kan het funderingsrisico van een woning meetellen in de hypotheekbeoordeling. Benieuwd hoe jouw woning scoort?\\n\\nBekijk gratis een indicatief funderingscijfer op basis van openbare bronnen. Vragen? Wij helpen je verder.\\n\\n👉 {link}", h:"#fundering #woning #huiskopen"},
  {m:11, t:"Rentevaste periode loopt af?", beeld:"Thumbs up", i:"campagne-rentevast-duurzaam", x:"Loopt je rentevaste periode binnen twee jaar af? Wacht niet op het verlengingsvoorstel van de bank. Door op tijd te vergelijken weet je wat je opties zijn, en soms is oversluiten zonder boete mogelijk.\\n\\nPlan op tijd een gesprek.\\n\\n👉 {link}", h:"#rentevast #hypotheekrente #oversluiten"},
  {m:12, t:"Bedankt", beeld:"Bedankt he", i:"ecards", x:"Bedankt voor je vertrouwen dit jaar! We kijken ernaar uit om je ook in het nieuwe jaar te helpen met je hypotheek en verzekeringen.\\n\\nFijne feestdagen en een gezond nieuwjaar!", h:"#bedankt #fijnefeestdagen"}
];
const sp = { kantoor:"", link:"" };
function viewSocial(item){
  setNav("content");
  smallHero([`<a href="#/?cat=content">Content &amp; campagnes</a>`, `<b>Social-postbank</b>`], `
    <div class="detail-head"><div>${badge(item.model)} <span class="badge cat">Social media</span><h1>Social-postbank</h1><p>${esc(item.summary)}</p></div></div>`);
  app.innerHTML = `<div class="wrap">
    <div class="panel cut"><h2><span class="hexi">${icon("document",18)}</span>Jouw gegevens in de posts</h2>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:0 12px">
        <div><label class="f" for="sp-k">Kantoornaam (onder de post)</label><input class="i" id="sp-k" value="${esc(sp.kantoor)}"></div>
        <div><label class="f" for="sp-l">Link (website of afsprakenpagina)</label><input class="i" id="sp-l" value="${esc(sp.link)}" placeholder="www.jouwkantoor.nl"></div>
      </div>
      <p class="hint">Tip: zet de link op LinkedIn in de eerste reactie in plaats van in de post; dat geeft vaak meer bereik.</p></div>
    <div class="grid" id="sp-grid"></div>
    <div class="note" style="margin-top:18px"><strong>Let op, AFM/compliance:</strong> posts zijn wervende communicatie: correct, duidelijk en niet misleidend. Beloof geen uitkomsten, controleer bedragen en bankbeleid vóór plaatsing en vermeld bij acties de voorwaarden. Reageren met een persoonlijk advies in de reacties is advies; verwijs liever naar een gesprek.</div></div>`;
  const txt = q => q.x.replace("{link}", sp.link.trim() || "[link naar je website]").replace(/\\n\\n👉 \\[link naar je website\\]$/, sp.link.trim() ? "" : "\\n\\n👉 [link naar je website]") + (sp.kantoor.trim() ? `\\n\\n${sp.kantoor.trim()}` : "") + `\\n\\n${q.h}`;
  const draw = () => { $("#sp-grid").innerHTML = POSTS.map((q,i)=>`<article class="card cut">
      <div class="meta"><span class="badge cat">${MAANDEN[q.m-1]}</span></div>
      ${CARDS[q.beeld]?`<img src="data:image/png;base64,${CARDS[q.beeld][1]}" alt="" style="width:100%;height:auto;display:block">`:""}
      <h3>${esc(q.t)}</h3>
      <div class="promo" style="font-size:.88rem">${esc(txt(q))}</div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:auto">
        <button class="btn btn-k btn-sm" data-sp="${i}">${icon("copy",16)} Kopieer tekst</button>
        ${CARDS[q.beeld]?`<a class="btn btn-o btn-sm" download="post-${slug(q.t)}.png" href="data:image/png;base64,${CARDS[q.beeld][1]}">${icon("download",16)} Afbeelding</a>`:""}
        <a class="btn btn-o btn-sm" href="#/item/${q.i}">Materiaal →</a>
      </div></article>`).join("");
    $$("[data-sp]").forEach(b=>b.onclick=async()=>toast(await copyText(txt(POSTS[+b.dataset.sp]))?"Post gekopieerd":"Kopiëren lukte niet"));
  };
  $("#sp-k").oninput = e => { sp.kantoor = e.target.value; draw(); };
  $("#sp-l").oninput = e => { sp.link = e.target.value; draw(); };
  draw();
}

/* ---------- E-cards ---------- */''')
rep('''kennisbank:viewKennisbank, kalender:viewKalender}''', '''kennisbank:viewKennisbank, kalender:viewKalender, social:viewSocial}''')

# kalender: social post per maand tonen als extra link
rep('''      <button class="btn btn-o btn-sm" data-ics="${m}" style="margin-top:auto;align-self:flex-start">''', '''      ${POSTS.some(q=>q.m===m)?`<div class="kact"><b>Social post</b><div class="chan"><a href="#/item/social-posts">${esc(POSTS.filter(q=>q.m===m).map(q=>q.t).join(" · "))} →</a></div></div>`:""}
      <button class="btn btn-o btn-sm" data-ics="${m}" style="margin-top:auto;align-self:flex-start">''')

# ---------- Vul voorbeeld in ----------
rep('''      <form class="panel cut" onsubmit="return false">
        <h2><span class="hexi">1</span>U en uw partner</h2>
        ${persoon("a",vh.a,"Aanvrager")}''', '''      <form class="panel cut" onsubmit="return false">
        <div style="display:flex;justify-content:space-between;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:6px"><h2 style="margin:0"><span class="hexi">1</span>U en uw partner</h2><button type="button" class="btn btn-o btn-sm" id="vh-demo">Vul voorbeeld in</button></div>
        ${persoon("a",vh.a,"Aanvrager")}''')
rep('''  $("#vh-partner").onchange = e => {''', '''  $("#vh-demo").onclick = () => {
    Object.assign(vh.a, { naam:"Sam", dob:"1978-04-12", ink:"58.000", type:"werknemer", pens:"16.000", nbp:"6.000", orv:"150.000", aov:"", verpl:"1.200" });
    Object.assign(vh.p, { naam:"Robin", dob:"1980-09-03", ink:"34.000", type:"ondernemer", pens:"9.000", nbp:"", orv:"150.000", aov:"12.000", verpl:"" });
    Object.assign(vh, { partner:true, schuld:"315.000", afv:"120.000", rente:"3,9", rvpJaren:"6", markt:"3,6", einde:"2046-06-01", waardeStart:"340.000", waarde:"465.000", nhg:false, vermogen:"25.000", adres:"" });
    viewVhr(item, new URLSearchParams()); toast("Voorbeeld ingevuld (fictieve gegevens)");
  };
  $("#vh-partner").onchange = e => {''')
rep('''        <h2><span class="hexi">1</span>U en uw partner</h2>
        <label class="f" for="af-dob">Uw geboortedatum *</label>''', '''        <div style="display:flex;justify-content:space-between;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:6px"><h2 style="margin:0"><span class="hexi">1</span>U en uw partner</h2><button type="button" class="btn btn-o btn-sm" id="af-demo">Vul voorbeeld in</button></div>
        <label class="f" for="af-dob">Uw geboortedatum *</label>''')
rep('''  $("#ad-link").onclick = async () => {''', '''  $("#af-demo").onclick = () => {
    Object.assign(af, { dob:"1964-02-10", partner:false, schuld:"220.000", einde:"2034-03-01", waarde:"480.000", ink:"4.600", inkPer:"maand", vg:true, m13:false, pens:"21.000", pensPer:"jaar", eigen:"35.000", pot:"", lagerWonen:false });
    viewAflossingsvrij(item, params); toast("Voorbeeld ingevuld (fictieve gegevens)");
  };
  $("#ad-link").onclick = async () => {''')
rep('''    <aside><form class="panel cut" onsubmit="return false"><h2><span class="hexi">1</span>Hoe ziet je portefeuille eruit?</h2>''', '''    <aside><form class="panel cut" onsubmit="return false"><div style="display:flex;justify-content:space-between;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:6px"><h2 style="margin:0"><span class="hexi">1</span>Je portefeuille</h2><button type="button" class="btn btn-o btn-sm" id="k-demo">Vul voorbeeld in</button></div>''')
rep('''  const out = $("#k-out");''', '''  const out = $("#k-out");
  $("#k-demo").onclick = () => { Object.assign(ks, { hyp:"850", rvp:"10", orv:"320", opstal:"180", bez:"1.500", opbr:"" }); viewKansen(item); toast("Voorbeeld ingevuld"); };''')

open(p, 'w', encoding='utf-8').write(t)
print('ok')

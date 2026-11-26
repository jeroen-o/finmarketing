"""Jaarlijkse check opstal & inboedel: klanttool, campagne met sjablonen, social post, kalender, uitnodigingsmail."""
import os
B = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
p = os.path.join(B, 'template.html')
t = open(p, encoding='utf-8').read()


def rep(a, b, cnt=1):
    global t
    assert t.count(a) == cnt, (a[:70], t.count(a))
    t = t.replace(a, b)


# ---------- catalogusitem ----------
rep('''  { id:"woontoekomst-check", cat:"klanttools", kind:"woontoekomst", model:"gratis",''', '''  { id:"verzekeringscheck", cat:"klanttools", kind:"verzekeringscheck", model:"gratis",
    title:"Jaarlijkse check opstal & inboedel: is de dekking nog passend?", by:"Blinqx V&H",
    summary:"Vijftien korte vragen over woning en inboedel: verbouwd, verduurzaamd, dure aankopen, verhuisd of thuiswerken? Met een rekenvoorbeeld van onderverzekering en een samenvatting die de klant naar de adviseur stuurt.",
    channels:["Eigen website","Eigen e-mail","Klantportaal","Print/PDF"],
    tags:["opstal","inboedel","schadeverzekering","onderverzekering","herbouwwaarde","inboedelwaarde","jaarlijkse check","onderhoud","nazorg","verzekering","zonnepanelen","verbouwing"] },
  { id:"woontoekomst-check", cat:"klanttools", kind:"woontoekomst", model:"gratis",''')

# ---------- tool ----------
rep('''/* ---------- Tool: De woontoekomst-check ---------- */''', '''/* ---------- Tool: Jaarlijkse check opstal & inboedel ---------- */
const VC_Q = {
  opstal: { titel:"Opstalverzekering (de woning)", vraag:"Bent u eigenaar van de woning?", items:[
    {k:"verbouwd", q:"Heeft u de woning sinds het afsluiten verbouwd of uitgebreid?", s:"Bijvoorbeeld een uitbouw, dakkapel, nieuwe keuken of badkamer.", w:2, tip:"Een verbouwing verhoogt vaak de herbouwwaarde. Laat de herbouwwaarde opnieuw bepalen en pas het verzekerd bedrag aan."},
    {k:"duurzaam", q:"Zijn er zonnepanelen, een warmtepomp, thuisbatterij of laadpaal bijgekomen?", s:"", w:2, tip:"Controleer of deze installaties onder de opstalverzekering vallen en tot welk bedrag, ook bij storm of brand."},
    {k:"herbouw", q:"Is de herbouwwaarde langer dan 5 jaar geleden bepaald?", s:"Of weet u niet wanneer?", w:2, tip:"Bouwkosten zijn de afgelopen jaren sterk gestegen. Laat de herbouwwaarde opnieuw berekenen met een herbouwwaardemeter of taxatie."},
    {k:"garantieO", q:"Weet u niet zeker of u een garantie tegen onderverzekering heeft?", s:"", w:1, tip:"Met een garantie tegen onderverzekering keert de verzekeraar bij schade volledig uit, mits de herbouwwaarde volgens de regels van de verzekeraar is vastgesteld."},
    {k:"gebruik", q:"Is het gebruik van de woning veranderd?", s:"Bijvoorbeeld (gedeeltelijke) verhuur, leegstand of een bedrijf aan huis.", w:2, tip:"Verhuur, leegstand of bedrijfsmatig gebruik moet u melden aan de verzekeraar. Anders kan de dekking vervallen."},
    {k:"onderdelen", q:"Weet u niet of glas en schade aan tuin, schutting of zonwering zijn meeverzekerd?", s:"", w:1, tip:"Bekijk welke onderdelen standaard zijn meeverzekerd en of een uitbreiding zinvol is."},
    {k:"risico", q:"Past het eigen risico niet meer bij uw situatie?", s:"Bijvoorbeeld omdat u meer of minder buffer heeft dan toen.", w:1, tip:"Een hoger eigen risico verlaagt de premie; een lager eigen risico geeft minder kosten bij schade. Kies wat bij uw buffer past."},
    {k:"klimaat", q:"Woont u in een gebied met kans op wateroverlast of funderingsproblemen?", s:"Twijfelt u? Bekijk het klimaat- of funderingscijfer.", w:1, tip:"Vraag na hoe neerslag-, overstromings- en funderingsschade zijn gedekt. Funderingsschade is meestal niet verzekerd."}
  ]},
  inboedel: { titel:"Inboedelverzekering (uw spullen)", vraag:"Heeft u een inboedelverzekering?", items:[
    {k:"waarde", q:"Is de inboedelwaarde langer dan 3 jaar geleden berekend?", s:"Of weet u niet wanneer?", w:2, tip:"Bereken de inboedelwaarde opnieuw met een inboedelwaardemeter en pas het verzekerd bedrag aan."},
    {k:"aankopen", q:"Heeft u dure spullen gekocht?", s:"Bijvoorbeeld elektronica, sieraden, kunst, een e-bike of designmeubels.", w:2, tip:"Voor sieraden, kunst, fietsen en elektronica gelden vaak maximumbedragen. Bekijk of een aanvulling nodig is."},
    {k:"gezin", q:"Is uw gezinssituatie veranderd?", s:"Bijvoorbeeld samenwonen, een kind geboren of kinderen uit huis.", w:1, tip:"Een andere gezinssamenstelling verandert vaak de inboedelwaarde, en soms de premie."},
    {k:"verhuisd", q:"Bent u verhuisd, of gaat u verhuizen?", s:"", w:2, tip:"Geef een verhuizing altijd door: adres, woningtype en beveiliging bepalen de dekking en de premie."},
    {k:"thuiswerk", q:"Werkt u thuis met eigen of zakelijke spullen?", s:"Bijvoorbeeld een laptop van de werkgever of bedrijfsvoorraad.", w:1, tip:"Zakelijke spullen vallen meestal niet onder de inboedelverzekering. Vraag na hoe ze verzekerd zijn."},
    {k:"huurder", q:"Huurt u en heeft u zelf verbeteringen aangebracht?", s:"Bijvoorbeeld een nieuwe keuken of vloer.", w:1, tip:"Verbeteringen door een huurder vallen onder ‘huurdersbelang’. Controleer of het verzekerd bedrag nog klopt."},
    {k:"garantieI", q:"Weet u niet zeker of u een garantie tegen onderverzekering heeft?", s:"", w:1, tip:"Met een garantie tegen onderverzekering voorkomt u een lagere uitkering bij schade."}
  ]}
};
const vc = { step:-1, heeft:{ opstal:null, inboedel:null }, a:{}, werk:{ opstal:"", inboedel:"" }, verz:{ opstal:"", inboedel:"" }, schade:"10.000", naam:"", tel:"", opm:"", consent:false };
function vcStatus(sec){
  if (!vc.heeft[sec]) return null;
  const items = VC_Q[sec].items; let pt = 0; const tips = [];
  items.forEach(x=>{ const v = vc.a[sec+"."+x.k]; if (v==="ja"){ pt += x.w; tips.push(x.tip); } else if (v==="weetniet"){ pt += x.w/2; tips.push(x.tip); } });
  const w = parseNum(vc.werk[sec]), z = parseNum(vc.verz[sec]);
  const onder = w && z && z < w ? 1 - z/w : 0;
  if (onder > 0.05) pt += 2;
  const st = pt === 0 ? ["Lijkt passend","gratis"] : pt <= 2 ? ["Aandacht nodig","freemium"] : ["Laat de dekking controleren","betaald"];
  return { pt, st, tips, onder, w, z };
}
function vcSamenvatting(){
  const regels = ["Jaarlijkse check opstal & inboedel",""];
  ["opstal","inboedel"].forEach(sec=>{ const s = vcStatus(sec), Q = VC_Q[sec];
    regels.push(Q.titel + ": " + (vc.heeft[sec]===false ? "niet van toepassing" : s ? s.st[0] : "niet ingevuld"));
    if (s){ Q.items.forEach(x=>{ const v = vc.a[sec+"."+x.k]; if (v && v!=="nee") regels.push(" - " + x.q + " " + (v==="ja"?"Ja":"Weet ik niet")); });
      if (s.w && s.z) regels.push(` - Geschatte waarde ${fmtEUR(s.w)}, verzekerd bedrag ${fmtEUR(s.z)}${s.onder>0.005?` (mogelijk ${fmtN(s.onder*100)}% onderverzekerd)`:""}`); }
    regels.push(""); });
  regels.push(`Naam: ${vc.naam||"—"}`, `Telefoon: ${vc.tel||"—"}`); if (vc.opm) regels.push("", "Toelichting:", vc.opm);
  return regels.join("\\n");
}
function viewVerzekeringscheck(item, params){
  setNav("klanttools");
  const adv = { naam: params.get("adviseur")||"", kantoor: params.get("kantoor")||"", mail: params.get("mail")||"", tel: params.get("tel")||"" };
  const advLabel = [adv.naam, adv.kantoor && (adv.naam?`van ${adv.kantoor}`:adv.kantoor)].filter(Boolean).join(" ") || "mijn adviseur";
  smallHero([`<a href="#/?cat=klanttools">Klanttools</a>`, `<b>Check opstal &amp; inboedel</b>`], `
    <div class="detail-head"><div>${badge(item.model)} <span class="badge cat">Jaarlijkse check</span>
      <h1>Is uw woning en inboedel nog goed verzekerd?</h1><p>Uw woning en spullen veranderen, uw verzekering niet vanzelf. Beantwoord vijftien korte vragen en zie direct of uw opstal- en inboedelverzekering nog passen.</p></div>
      ${adv.kantoor||adv.naam?`<div class="btns"><span class="badge" style="font-size:.8rem;padding:8px 12px">Aangeboden door ${esc(advLabel)}</span></div>`:""}</div>`);
  app.innerHTML = `<div class="wrap"><div class="layout layout-r" style="--rcol:330px">
    <section><div class="panel cut" id="vc" style="padding:24px"></div></section>
    <aside>
      <details class="panel cut adv-only" ${adv.mail?"":"open"}><summary style="font-weight:800;cursor:pointer">Voor adviseurs: maak je eigen link</summary>
        <p class="hint">De klant ziet jouw naam en kan de uitkomst direct naar jou mailen.</p>
        <label class="f" for="va-n">Naam adviseur</label><input class="i" id="va-n" value="${esc(adv.naam)}">
        <label class="f" for="va-k">Kantoornaam</label><input class="i" id="va-k" value="${esc(adv.kantoor)}">
        <label class="f" for="va-t">Telefoon</label><input class="i" id="va-t" value="${esc(adv.tel)}">
        <label class="f" for="va-m">E-mail voor de uitkomsten</label><input class="i" id="va-m" type="email" value="${esc(adv.mail)}">
        <div class="actions" style="margin-top:10px"><button class="btn btn-k btn-sm" id="va-link">Kopieer deellink</button></div>
      </details>
      ${uitnodigingPanel("verzekeringscheck")}
      <div class="note"><strong>Let op:</strong> deze check is een hulpmiddel en geen advies. De polisvoorwaarden van uw verzekeraar zijn leidend. Er wordt niets opgeslagen; versturen gaat via uw eigen mailprogramma.</div>
    </aside></div></div>`;
  const root = $("#vc");
  const keuze = (name, val, cur, label) => `<button type="button" class="wtc-opt" data-k="${name}" data-v="${val}" style="padding:10px 14px;border:1px solid ${cur===val?"var(--k)":"var(--line)"};background:${cur===val?"var(--y-soft)":"#fff"};box-shadow:${cur===val?"inset 0 0 0 1px var(--k)":"none"};font-weight:${cur===val?800:600};cursor:pointer">${label}</button>`;
  const secties = ["opstal","inboedel"];
  const render = () => {
    if (vc.step === -1){
      root.innerHTML = `<div class="eyebrow" style="color:var(--y-ink)">Jaarlijkse check</div>
        <h2 style="font-size:1.5rem;margin-bottom:10px">Is de dekking nog passend?</h2>
        <p>Verbouwd, zonnepanelen gelegd, een nieuwe e-bike of samenwonen? Dan kan uw verzekering achterlopen. Bij onderverzekering keert de verzekeraar bij schade mogelijk maar een deel uit.</p>
        <ul class="feat"><li>Vijftien korte vragen (ongeveer 3 minuten)</li><li>Direct inzicht per verzekering, met tips</li><li>Rekenvoorbeeld: wat betekent onderverzekering bij schade?</li></ul>
        <button class="btn btn-k" id="vc-start" style="margin-top:14px">Start de check →</button>`;
      $("#vc-start").onclick = () => { vc.step = 0; render(); }; return;
    }
    if (vc.step < secties.length){
      const sec = secties[vc.step], Q = VC_Q[sec];
      root.innerHTML = `<div style="font-size:.75rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase">Stap ${vc.step+1} van 3</div>
        <div class="progress"><i style="width:${(vc.step+1)/3*100}%"></i></div>
        <h2 style="font-size:1.35rem;margin-bottom:10px">${esc(Q.titel)}</h2>
        <p style="font-weight:700;margin-bottom:6px">${esc(Q.vraag)}</p>
        <div style="display:flex;gap:8px;margin-bottom:14px">${keuze("heeft", "ja", vc.heeft[sec]===true?"ja":vc.heeft[sec]===false?"nee":"", "Ja")}${keuze("heeft", "nee", vc.heeft[sec]===true?"ja":vc.heeft[sec]===false?"nee":"", "Nee")}</div>
        ${vc.heeft[sec] ? `${Q.items.map(x=>{ const cur = vc.a[sec+"."+x.k]||""; return `<div style="border-top:1px solid var(--line-2);padding:12px 0"><p style="margin:0 0 2px;font-weight:700">${esc(x.q)}</p>${x.s?`<p class="hint" style="margin:0 0 8px">${esc(x.s)}</p>`:""}
            <div style="display:flex;gap:8px;flex-wrap:wrap">${keuze(sec+"."+x.k,"ja",cur,"Ja")}${keuze(sec+"."+x.k,"nee",cur,"Nee")}${keuze(sec+"."+x.k,"weetniet",cur,"Weet ik niet")}</div></div>`; }).join("")}
          <div style="border-top:1px solid var(--line-2);padding-top:12px"><p style="font-weight:700;margin:0 0 4px">Optioneel: rekenvoorbeeld onderverzekering</p>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:0 10px">
              <div><label class="f" for="vc-w">${sec==="opstal"?"Geschatte herbouwwaarde":"Geschatte inboedelwaarde"}</label><input class="i" id="vc-w" data-eurv="werk" value="${esc(vc.werk[sec])}" inputmode="numeric" placeholder="€"></div>
              <div><label class="f" for="vc-z">Verzekerd bedrag op de polis</label><input class="i" id="vc-z" data-eurv="verz" value="${esc(vc.verz[sec])}" inputmode="numeric" placeholder="€"></div>
            </div></div>` : ""}
        <div style="display:flex;justify-content:space-between;gap:10px;margin-top:16px"><button class="btn btn-o" id="vc-back">Terug</button><button class="btn btn-k" id="vc-next" ${vc.heeft[sec]===null?"disabled style='opacity:.45;cursor:not-allowed'":""}>Volgende</button></div>`;
      $$("#vc [data-k]").forEach(b=>b.onclick=()=>{ const k=b.dataset.k, v=b.dataset.v;
        if (k==="heeft") vc.heeft[sec] = v==="ja"; else vc.a[k] = v; const y=window.scrollY; render(); window.scrollTo(0,y); });
      $$("#vc [data-eurv]").forEach(el=>euroInput(el, ()=>{ vc[el.dataset.eurv][sec] = el.value; }));
      $("#vc-back").onclick = () => { vc.step--; render(); root.scrollIntoView({block:"start"}); };
      $("#vc-next").onclick = () => { if (vc.heeft[sec]===null) return; vc.step++; render(); root.scrollIntoView({block:"start"}); };
      return;
    }
    // Uitkomst
    const sch = parseNum(vc.schade) || 10000;
    const blok = sec => { const s = vcStatus(sec), Q = VC_Q[sec];
      if (vc.heeft[sec]===false) return `<div class="panel" style="background:var(--bg-2);margin-bottom:12px"><b>${esc(Q.titel)}</b><p class="hint" style="margin:4px 0 0">Niet van toepassing.</p></div>`;
      const uitk = s.onder > 0.005 ? Math.round(sch * (1 - s.onder)) : null;
      return `<div class="panel" style="background:var(--bg-2);margin-bottom:12px">
        <div style="display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;align-items:center"><b style="font-size:1.05rem">${esc(Q.titel)}</b><span class="badge ${s.st[1]}">${s.st[0]}</span></div>
        ${s.tips.length ? `<ul class="feat" style="margin-top:8px">${s.tips.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>` : `<p style="margin:8px 0 0">Op basis van uw antwoorden lijkt de dekking passend. Blijf wijzigingen doorgeven.</p>`}
        ${s.w && s.z ? `<p style="margin:10px 0 0">Geschatte waarde <b>${fmtEUR(s.w)}</b>, verzekerd <b>${fmtEUR(s.z)}</b>. ${s.onder>0.005?`Mogelijk <b>${fmtN(s.onder*100)}% onderverzekerd</b>. Zonder garantie tegen onderverzekering keert de verzekeraar bij een schade van ${fmtEUR(sch)} dan mogelijk maar <b>${fmtEUR(uitk)}</b> uit.`:"Het verzekerd bedrag dekt de geschatte waarde."}</p>` : ""}
      </div>`; };
    root.innerHTML = `<div class="eyebrow" style="color:var(--y-ink)">Uw uitkomst</div><h2 style="font-size:1.5rem;margin-bottom:12px">Zo staat uw verzekering ervoor</h2>
      ${blok("opstal")}${blok("inboedel")}
      <p class="hint">Rekenvoorbeeld met een schade van <input class="i" id="vc-s" data-eurs value="${esc(vc.schade)}" inputmode="numeric" style="display:inline-block;width:120px;padding:4px 8px"> (evenredigheidsregel: bij onderverzekering wordt de schade naar verhouding vergoed, tenzij u een garantie tegen onderverzekering heeft).</p>
      <h3 style="margin-top:18px">Bespreek de uitkomst${adv.naam||adv.kantoor?` met ${esc(advLabel)}`:" met uw adviseur"}</h3>
      <label class="f" for="vc-naam">Uw naam *</label><input class="i" id="vc-naam" value="${esc(vc.naam)}">
      <label class="f" for="vc-tel">Telefoon (niet verplicht)</label><input class="i" id="vc-tel" type="tel" value="${esc(vc.tel)}">
      <label class="f" for="vc-opm">Toelichting (niet verplicht)</label><textarea class="i" id="vc-opm" style="min-height:70px">${esc(vc.opm)}</textarea>
      <div class="checks"><label><input type="checkbox" id="vc-ok" ${vc.consent?"checked":""}> Ik vind het goed dat ${esc(advLabel)} deze antwoorden ontvangt en contact met mij opneemt.</label></div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px">
        <button class="btn btn-k" id="vc-send">Stuur naar ${adv.naam||adv.kantoor?esc(advLabel):"mijn adviseur"} →</button>
        <button class="btn btn-o" id="vc-copy">Kopieer samenvatting</button>
        <button class="btn btn-o" id="vc-print">Print / PDF</button>
        <button class="btn btn-o" id="vc-back">Terug</button>
      </div>
      ${adv.tel?`<p class="hint">Of bel ${esc(advLabel)}: ${esc(adv.tel)}</p>`:""}
      <p class="hint">Indicatie, geen advies. De polisvoorwaarden van uw verzekeraar zijn leidend. Versturen opent een bericht in uw eigen e-mailprogramma.</p>`;
    $("#vc-s").addEventListener("change", e=>{ vc.schade = e.target.value; render(); });
    euroInput($("#vc-s"), ()=>{ vc.schade = $("#vc-s").value; });
    $("#vc-naam").oninput = e => vc.naam = e.target.value; $("#vc-tel").oninput = e => vc.tel = e.target.value; $("#vc-opm").oninput = e => vc.opm = e.target.value;
    $("#vc-ok").onchange = e => vc.consent = e.target.checked;
    $("#vc-back").onclick = () => { vc.step = secties.length - 1; render(); };
    $("#vc-copy").onclick = async () => toast(await copyText(vcSamenvatting()) ? "Samenvatting gekopieerd" : "Kopiëren lukte niet");
    $("#vc-print").onclick = () => printHtml("Check opstal en inboedel", `<div style="font-family:Arial;padding:8px"><pre style="white-space:pre-wrap;font-family:Arial;font-size:13px">${esc(vcSamenvatting())}</pre><p style="font-size:11px;color:#666">Indicatie, geen advies. De polisvoorwaarden van uw verzekeraar zijn leidend.</p></div>`);
    $("#vc-send").onclick = () => {
      if (!vc.naam.trim() || !vc.consent){ toast("Vul uw naam in en geef toestemming"); return; }
      location.href = `mailto:${encodeURIComponent(adv.mail)}?subject=${encodeURIComponent("Jaarlijkse check opstal en inboedel – "+vc.naam)}&body=${encodeURIComponent(vcSamenvatting())}`;
      toast("Uw mailprogramma wordt geopend");
    };
  };
  render();
  const deellink = () => { const p=new URLSearchParams(); [["adviseur","#va-n"],["kantoor","#va-k"],["tel","#va-t"],["mail","#va-m"]].forEach(([k,id])=>{ const v=$(id).value.trim(); if(v) p.set(k,v); }); return location.href.split("#")[0]+"#/item/verzekeringscheck"+(p.toString()?"?"+p:""); };
  bindUitnodiging("verzekeringscheck", deellink);
  $("#va-link").onclick = async () => toast(await copyText(deellink()) ? "Deellink gekopieerd" : "Kopiëren lukte niet");
}

/* ---------- Tool: De woontoekomst-check ---------- */''')
rep('''woontoekomst:viewWoontoekomst, kaarten:viewKaarten,''', '''woontoekomst:viewWoontoekomst, verzekeringscheck:viewVerzekeringscheck, kaarten:viewKaarten,''')

# ---------- uitnodigingsmail ----------
rep('''  "hypotheekcijfer": {o:"Kunt u uw hypotheek blijven betalen?",''', '''  "verzekeringscheck": {o:"Is uw woning en inboedel nog goed verzekerd?", x:`{aanhef},

Uw woning en uw spullen veranderen in de loop van de tijd, uw verzekering niet vanzelf. Heeft u verbouwd, zonnepanelen laten plaatsen, dure spullen gekocht of is uw gezinssituatie veranderd? Dan past uw opstal- of inboedelverzekering mogelijk niet meer. Bij onderverzekering keert de verzekeraar bij schade soms maar een deel uit.

Met deze korte check ziet u in drie minuten of uw dekking nog passend is:
{link}

Na afloop kunt u de uitkomst direct naar ons sturen. Wij kijken dan met u mee.

Met vriendelijke groet,

{adviseur}
{kantoor}`},
  "hypotheekcijfer": {o:"Kunt u uw hypotheek blijven betalen?",''')

# ---------- social post ----------
rep('''  {m:7, t:"Betaal je te veel voor je ORV?"''', '''  {m:2, t:"Is je inboedel nog goed verzekerd?", ic:"insurance", i:"verzekeringscheck", x:"Nieuwe e-bike, zonnepanelen op het dak of net samenwonen? Dan is je opstal- of inboedelverzekering misschien niet meer up-to-date. Bij onderverzekering krijg je bij schade soms maar een deel vergoed.\\n\\nDoe de jaarlijkse check in drie minuten en weet waar je staat.\\n\\n👉 {link}", h:"#inboedelverzekering #opstalverzekering #verzekeren"},
  {m:7, t:"Betaal je te veel voor je ORV?"''')

# ---------- kalender ----------
rep('''    {t:"Jaarlijkse update van klantgegevens", d:"Stuur de korte jaarlijkse update (5 kernvragen) aan je hele portefeuille.", i:["stappenscan-52","checklist-publicatie"]}]},''',
    '''    {t:"Jaarlijkse update van klantgegevens", d:"Stuur de korte jaarlijkse update (5 kernvragen) aan je hele portefeuille.", i:["stappenscan-52","checklist-publicatie"]},
    {t:"Jaarlijkse check opstal & inboedel", d:"Laat klanten in drie minuten checken of hun woning en inboedel nog goed verzekerd zijn. Verbouwingen, zonnepanelen en dure aankopen komen zo op tijd boven.", i:["verzekeringscheck","campagne-opstal-inboedel"]}]},''')

# ---------- homepage populair ----------
rep('''["nieuwsbrief","campagne","52+","aflossingsvrij","fundering","LinkedIn","brieven","rekentool"]''', '''["nieuwsbrief","campagne","52+","aflossingsvrij","inboedel","fundering","LinkedIn","rekentool"]''')
open(p, 'w', encoding='utf-8').write(t)

# ---------- campagne met sjablonen (camp.js) ----------
cp = os.path.join(B, 'data', 'camp.js')
c = open(cp, encoding='utf-8').read()
anchor = '\nconst SEL = ['
assert c.count(anchor) == 1
camp = r'''
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
'''
c = c.replace(anchor, camp + anchor)
open(cp, 'w', encoding='utf-8').write(c)
print('ok')

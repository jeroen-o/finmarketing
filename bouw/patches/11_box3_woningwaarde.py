"""Box 3 vs lijfrente, woningwaarderapport, extra kalender- en social-items, extra2.js-placeholder."""
import os
B = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
p = os.path.join(B, 'template.html')
t = open(p, encoding='utf-8').read()


def rep(a, b, cnt=1):
    global t
    assert t.count(a) == cnt, (a[:70], t.count(a))
    t = t.replace(a, b)


rep('/*__EXTRA__*/\n', '/*__EXTRA__*/\n/*__EXTRA2__*/\n')
rep('lijfrente:viewLijfrente,', 'lijfrente:viewLijfrente, box3:viewBox3, woningwaarde:viewWoningwaarde,')

# Kalender
rep('''    {t:"Jaarlijkse check opstal & inboedel",''', '''    {t:"WOZ-beschikking: klopt de waarde?", d:"Klanten ontvangen hun WOZ-beschikking. Help ze checken of bezwaar zin heeft; dat moet binnen zes weken.", i:["campagne-woz-bezwaar","check-woz","woningwaarderapport"]},
    {t:"Jaarlijkse check opstal & inboedel",''')
rep('''    {t:"Bomen planten met het Hypotheekbos",''', '''    {t:"ORV-check: premies gedaald", d:"Laat klanten met een ORV ouder dan vijf jaar checken of dekking, begunstiging en premie nog passen.", i:["check-orv","sel-gestopte-rokers"]},
    {t:"Bomen planten met het Hypotheekbos",''')
rep('''    {t:"Voorjaar: verduurzamen", d:"Klanten denken in het voorjaar aan isoleren en zonnepanelen. Wijs op extra leenruimte en rentekorting bij een beter energielabel.", i:["campagne-duurzaam-oversluiten","duurzaamheidsprofiel","klimaatcijfer"]}]},''',
    '''    {t:"Voorjaar: verduurzamen", d:"Klanten denken in het voorjaar aan isoleren en zonnepanelen. Wijs op extra leenruimte en rentekorting bij een beter energielabel.", i:["campagne-duurzaam-oversluiten","check-duurzaam","duurzaamheidsprofiel","klimaatcijfer"]},
    {t:"Beleggingsverzekering doorlichten", d:"Stuur klanten met een beleggings- of kapitaalverzekering de polischeck: tekort, kosten en fiscale status.", i:["check-woekerpolis"]}]},''')
rep('''    {t:"Woontoekomst-check voor 55-plussers",''', '''    {t:"Halverwege het jaar: box 3 of lijfrente?", d:"Klanten met spaargeld: vergelijk vrij vermogen in box 3 met lijfrente of aanvullend pensioen.", i:["box3-lijfrente","campagne-box3-lijfrente"]},
    {t:"Woontoekomst-check voor 55-plussers",''')
rep('''    {t:"Ondernemers in beeld",''', '''    {t:"AOV-check voor ondernemers", d:"Past de arbeidsongeschiktheidsverzekering nog bij inkomen, beroep en buffer?", i:["check-aov","campagne-kvk"]},
    {t:"Ondernemers in beeld",''')
rep('''    {t:"Portefeuille-scan voor het nieuwe jaar",''', '''    {t:"Eindejaarscheck: verlaag je belastingdruk", d:"Stuur half november de eindejaarsmail: lijfrente vóór 31 december, box 3-peildatum 1 januari, extra aflossen en schenken.", i:["campagne-eindejaar-belasting","lijfrente-rekenhulp","box3-lijfrente"], dt:"2027-11-15"},
    {t:"Portefeuille-scan voor het nieuwe jaar",''')

# Social posts
rep('''const POSTS = [\n''', '''const POSTS = [
  {m:2, t:"Klopt je WOZ-waarde?", ic:"house report", i:"campagne-woz-bezwaar", x:"De WOZ-beschikking valt weer op de mat. Een te hoge WOZ-waarde kost je elk jaar geld: meer OZB en een hoger eigenwoningforfait.\\n\\nVergelijk je waarde met de buurt via het WOZ-waardeloket. Bezwaar maken is gratis, maar moet binnen zes weken.\\n\\n👉 {link}", h:"#WOZ #WOZbezwaar #huiseigenaar"},
  {m:11, t:"Verlaag je belastingdruk", ic:"euro", i:"campagne-eindejaar-belasting", x:"Het jaar is bijna voorbij. Wist je dat je met een lijfrente-inleg vóór 31 december nog belasting kunt besparen? En dat box 3 kijkt naar je vermogen op 1 januari?\\n\\nLaat ons doorrekenen wat het jou oplevert.\\n\\n👉 {link}", h:"#belasting #lijfrente #eindejaar"},
  {m:6, t:"Box 3 of lijfrente?", ic:"piggybank", i:"box3-lijfrente", x:"Spaar je voor later? Dan maakt het uit wáár je dat doet. Vrij vermogen in box 3 is flexibel, maar je betaalt elk jaar belasting. Met lijfrente is je inleg aftrekbaar, maar zit het geld vast.\\n\\nBenieuwd wat het verschil voor jou is?\\n\\n👉 {link}", h:"#pensioen #box3 #lijfrente"},
''')

# Views
rep('''/* ---------- Actie-ideeën schade ---------- */''', r'''/* ---------- Vergelijker box 3 of lijfrente ---------- */
const B3 = { hvv:59357, forfait:6.00, tarief:36 };   /* indicatief 2026: heffingsvrij vermogen p.p., forfaitair rendement overige bezittingen, tarief box 3 */
const b3 = { inleg:"5.000", jaren:"20", rendement:"4", tariefNu:"37,56", tariefLater:"19", overig:"0", hvv:fmtN(B3.hvv), forfait:fmtN(B3.forfait,2), tarief:fmtN(B3.tarief) };
function b3Calc(){
  const n = v => parseNum(v)||0;
  const I = n(b3.inleg), N = Math.max(0, Math.round(n(b3.jaren))), r = n(b3.rendement)/100, tNu = n(b3.tariefNu)/100, tL = n(b3.tariefLater)/100;
  const ov = n(b3.overig), hvv = n(b3.hvv), f = n(b3.forfait)/100, tb = n(b3.tarief)/100;
  const netto = I*(1-tNu);
  let L = 0, V = 0, heffing = 0;
  for (let j=0;j<N;j++){
    L = (L + I)*(1+r);
    const basis = V + netto, h = tb*f*(Math.max(0, ov+basis-hvv) - Math.max(0, ov-hvv));
    heffing += h; V = basis*(1+r) - h;
  }
  const Lnetto = L*(1-tL);
  return { I, N, netto, terug:I*tNu, L, Lnetto, V, heffing, verschil:Lnetto-V, totaalNetto:netto*N };
}
function viewBox3(item){
  setNav("klanttools");
  smallHero([`<a href="#/?cat=klanttools">Klanttools</a>`, `<b>Box 3 of lijfrente</b>`], `
    <div class="detail-head"><div>${badge(item.model)} <span class="badge cat">Vergelijker</span><h1>Vermogen opbouwen: box 3 of lijfrente?</h1><p>Dezelfde netto inleg, twee routes. Bij lijfrente is de inleg aftrekbaar en valt het vermogen niet in box 3; bij vrij vermogen in box 3 betaalt u elk jaar heffing, maar kunt u er altijd bij.</p></div></div>`);
  const fld = (k,l,eur=true,ph="") => `<div><label class="f" for="b3-${k}">${l}</label><input class="i" id="b3-${k}" data-b3="${k}" ${eur?"data-eur":""} inputmode="${eur?"numeric":"decimal"}" placeholder="${ph}" value="${esc(b3[k])}"></div>`;
  app.innerHTML = `<div class="wrap"><div class="layout">
    <aside><form class="panel cut" onsubmit="return false">
      <h2><span class="hexi">1</span>Inleg</h2>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:0 10px">
        ${fld("inleg","Lijfrente-inleg per jaar")}${fld("jaren","Aantal jaren",false)}
        ${fld("rendement","Rendement % per jaar",false)}${fld("tariefNu","Belastingtarief nu %",false)}
        ${fld("tariefLater","Tarief bij uitkering %",false)}${fld("overig","Overig vermogen in box 3")}
      </div>
      <p class="hint">De lijfrente-inleg moet binnen de jaarruimte vallen. In de box 3-route wordt het netto bedrag (inleg min belastingteruggave) belegd.</p>
      <h2 style="margin-top:14px"><span class="hexi">2</span>Box 3-parameters</h2>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:0 10px">
        ${fld("hvv","Heffingsvrij vermogen")}${fld("forfait","Forfaitair rendement %",false)}${fld("tarief","Tarief box 3 %",false)}
      </div>
      <p class="hint">Standaard: indicatieve waarden 2026 voor één persoon (overige bezittingen). Box 3 verandert; controleer de actuele cijfers. Fiscale partners: tel heffingsvrij vermogen dubbel.</p>
      <button type="button" class="btn btn-o btn-sm" id="b3-demo">Vul voorbeeld in</button>
    </form></aside>
    <section id="b3-out"></section></div></div>`;
  const out = $("#b3-out");
  const draw = () => {
    const r = b3Calc();
    setMres(`Verschil na ${fmtN(r.N)} jaar: <b>${fmtEUR(r.verschil)}</b>`, "#b3-out");
    const rij = (k,a,b,bold) => `<tr style="border-top:1px solid var(--line-2)"><td style="padding:8px 6px 8px 0;color:var(--muted)">${k}</td><td style="padding:8px 0;text-align:right;font-weight:${bold?800:700}">${a}</td><td style="padding:8px 0 8px 6px;text-align:right;font-weight:${bold?800:700}">${b}</td></tr>`;
    const beter = r.verschil >= 0 ? "lijfrente" : "box 3";
    out.innerHTML = `<div class="panel cut">
      <div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;margin-bottom:14px">
        <div class="pbox"><b>Box 3, netto</b><div class="p">${fmtEUR(r.V)}</div></div>
        <div class="pbox"><b>Lijfrente, na belasting</b><div class="p">${fmtEUR(r.Lnetto)}</div></div>
        <div class="pbox prem"><b>Verschil</b><div class="p">${fmtEUR(Math.abs(r.verschil))}</div></div>
      </div>
      <div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:.92rem;min-width:300px">
        <tr><th></th><th style="text-align:right;padding:6px 0">Box 3</th><th style="text-align:right;padding:6px 0 6px 6px">Lijfrente</th></tr>
        ${rij("Inleg per jaar", fmtEUR(r.netto), fmtEUR(r.I))}
        ${rij("Belastingteruggave per jaar", "–", fmtEUR(r.terug))}
        ${rij("Netto kosten per jaar", fmtEUR(r.netto), fmtEUR(r.netto), true)}
        ${rij(`Vermogen na ${fmtN(r.N)} jaar (bruto)`, fmtEUR(r.V), fmtEUR(r.L))}
        ${rij("Betaalde box 3-heffing (totaal)", fmtEUR(r.heffing), "€ 0")}
        ${rij("Belasting bij uitkering", "€ 0", fmtEUR(r.L-r.Lnetto))}
        ${rij("Netto waarde", fmtEUR(r.V), fmtEUR(r.Lnetto), true)}
        ${rij("Vrij opneembaar", "Ja", "Nee, als uitkering")}
      </table></div>
      <div style="background:var(--y);padding:16px;margin-top:14px">Met deze aannames levert <b>${beter}</b> na ${fmtN(r.N)} jaar ongeveer <b>${fmtEUR(Math.abs(r.verschil))}</b> meer op. Weeg daarbij ook flexibiliteit en het doel mee: lijfrente is bedoeld als inkomen na pensioen.</div>
      <div class="actions" style="flex-direction:row;flex-wrap:wrap;margin-top:14px"><button class="btn btn-o btn-sm" id="b3-copy">Kopieer samenvatting</button><button class="btn btn-o btn-sm" id="b3-print">Print / PDF</button><a class="btn btn-o btn-sm" href="#/item/lijfrente-rekenhulp">Lijfrente-rekenhulp →</a></div>
      <p class="hint">Indicatief. Box 3 met forfaitair rendement op 1 januari na de inleg, marginaal berekend boven het overige vermogen; lijfrente-uitkering als één bedrag belast tegen het opgegeven tarief. Geen rekening gehouden met kosten, inflatie, heffingskortingen, toeslagen, de jaarruimte-toets of de overgang naar een box 3-stelsel op basis van werkelijk rendement. Rendement is niet gegarandeerd.</p>
    </div>
    <div class="panel cut"><h2>Drie routes naast elkaar</h2><div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:.9rem;min-width:480px">
      <tr><th style="text-align:left;padding:6px 6px 6px 0"></th><th style="text-align:left;padding:6px">Box 3</th><th style="text-align:left;padding:6px">Lijfrente</th><th style="text-align:left;padding:6px">Aanvullend pensioen</th></tr>
      ${[["Belastingvoordeel bij inleg","Nee","Ja, binnen de jaarruimte","Ja (bruto) of netto pensioen"],["Heffing tijdens opbouw","Jaarlijks box 3","Geen","Geen"],["Belasting bij uitkering","Nee","Ja, box 1","Ja, box 1"],["Vrij opneembaar","Ja","Nee","Nee"],["Geschikt voor","Buffer, flexibele doelen","Aanvulling pensioen, zzp'ers","Werknemers met een regeling"]].map(r=>`<tr style="border-top:1px solid var(--line-2)">${r.map((c,i)=>`<td style="padding:8px 6px ${i?"":"8px 0"};${i?"":"color:var(--muted)"}">${esc(c)}</td>`).join("")}</tr>`).join("")}
    </table></div></div>
    <div class="note"><strong>Let op, AFM/compliance:</strong> dit is een rekenvoorbeeld, geen advies. Lijfrente- en beleggingsproducten vallen onder de Wft; advies vraagt een volledige inventarisatie en een risicoprofiel. Beloof geen rendement of belastingvoordeel.</div>`;
    const sam = () => `Box 3 of lijfrente (indicatief)\nLijfrente-inleg per jaar: ${fmtEUR(r.I)}, netto kosten: ${fmtEUR(r.netto)}\nLooptijd: ${fmtN(r.N)} jaar, rendement ${b3.rendement}%\nBox 3 netto: ${fmtEUR(r.V)} (heffing totaal ${fmtEUR(r.heffing)})\nLijfrente na belasting: ${fmtEUR(r.Lnetto)}\nVerschil: ${fmtEUR(r.verschil)} in het voordeel van ${beter}\n\nIndicatie, geen advies.`;
    $("#b3-copy").onclick = async () => toast(await copyText(sam()) ? "Samenvatting gekopieerd" : "Kopiëren lukte niet");
    $("#b3-print").onclick = () => printHtml("Box 3 of lijfrente", `<pre style="font-family:Arial;font-size:13px;white-space:pre-wrap">${esc(sam())}</pre>`);
  };
  $$("[data-b3]").forEach(el=>{ const k=el.dataset.b3; if (el.hasAttribute("data-eur")) euroInput(el, ()=>{ b3[k]=el.value; draw(); }); else el.addEventListener("input", ()=>{ b3[k]=el.value; draw(); }); });
  $("#b3-demo").onclick = () => { Object.assign(b3, { inleg:"6.000", jaren:"20", rendement:"4", tariefNu:"49,5", tariefLater:"37,56", overig:"75.000" }); viewBox3(item); toast("Voorbeeld ingevuld"); };
  draw();
}

/* ---------- Gratis woningwaarderapport (PandWise) ---------- */
function viewWoningwaarde(item, params){
  setNav("klanttools");
  smallHero([`<a href="#/?cat=klanttools">Klanttools</a>`, `<b>Woningwaarderapport</b>`], `
    <div class="detail-head"><div>${badge(item.model)} <span class="badge cat">Woningwaarde</span><h1>Gratis woningwaarderapport</h1><p>Vul een adres in en bekijk direct de waarde-indicatie, fundering, klimaatrisico's en meer, via PandWise.</p></div></div>`);
  const adr = params?.get?.("adres") || "";
  const src = a => "https://pandwise.nl/" + (a ? "?adres=" + encodeURIComponent(a) : "");
  app.innerHTML = `<div class="wrap">
    <form class="panel cut" id="ww-f" style="display:flex;gap:10px;flex-wrap:wrap;align-items:flex-end">
      <div style="flex:1 1 260px;min-width:0"><label class="f" for="ww-a">Adres (straat, huisnummer, plaats)</label><input class="i" id="ww-a" value="${esc(adr)}" placeholder="Bijv. Hullenbergweg 109 Amsterdam" autocomplete="street-address"></div>
      <button class="btn btn-y btn-sm" type="submit">Toon rapport</button>
      <a class="btn btn-o btn-sm" id="ww-new" href="${src(adr)}" target="_blank" rel="noopener">Open in nieuw venster ↗</a>
    </form>
    <div class="panel cut" style="padding:0;overflow:hidden"><iframe id="ww-if" src="${src(adr)}" title="PandWise woningwaarderapport" style="width:100%;height:78vh;min-height:520px;border:0;display:block" loading="lazy"></iframe></div>
    <div class="feat-grid adv-only" style="grid-template-columns:repeat(2,minmax(0,1fr))">
      <div class="fcard cut"><span class="hexi">${icon("link",24)}</span><h3>Op je eigen website</h3>
        <p>Plaats het rapport op je website of in Google Sites met deze code. Met <code>?adres=</code> vul je vooraf een adres in.</p>
        <textarea class="i" id="ww-code" rows="3" readonly style="font-family:monospace;font-size:.8rem"></textarea>
        <div class="actions" style="flex-direction:row;flex-wrap:wrap"><button class="btn btn-o btn-sm" id="ww-copy" type="button">Kopieer insluitcode</button></div></div>
      <div class="fcard cut dark"><span class="hexi">${icon("house report",24)}</span><h3>RWWR-woningwaarderapport</h3>
        <p>Werk je met PortefeuilleSignalen? Dan is het up-to-date woningwaarderapport van RWWR gratis beschikbaar voor je klanten.</p>
        <a class="btn btn-y btn-sm" href="https://www.rwwr.nl" target="_blank" rel="noopener" style="align-self:flex-start;color:#000">Bekijk RWWR ↗</a>
        <a class="btn btn-o btn-sm" href="#/item/ps-koppelingen" style="align-self:flex-start;margin-top:6px">PortefeuilleSignalen-koppelingen →</a></div>
    </div>
    <div class="note"><strong>Let op:</strong> een woningwaarderapport is een indicatie op basis van modellen en geen taxatie. Voor een hypotheekaanvraag is meestal een gevalideerd taxatierapport nodig. Gebruik de uitkomst niet als toezegging over leenruimte.</div></div>`;
  const code = () => `<iframe src="${src($("#ww-a").value.trim())}" title="Woningwaarderapport" style="width:100%;height:900px;border:0" loading="lazy"></iframe>`;
  const sync = () => { const a=$("#ww-a").value.trim(); $("#ww-new").href = src(a); if ($("#ww-code")) $("#ww-code").value = code(); };
  $("#ww-f").onsubmit = e => { e.preventDefault(); sync(); $("#ww-if").src = src($("#ww-a").value.trim()); };
  $("#ww-a").addEventListener("input", sync); sync();
  if ($("#ww-copy")) $("#ww-copy").onclick = async () => toast(await copyText(code()) ? "Insluitcode gekopieerd" : "Kopiëren lukte niet");
}

/* ---------- Actie-ideeën schade ---------- */''')

open(p, 'w', encoding='utf-8').write(t)
print('patch 11 ok')

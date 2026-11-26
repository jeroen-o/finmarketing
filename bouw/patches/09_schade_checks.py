"""Schade- en inkomensacties: generieke klantcheck-engine, actie-ideeën, uitnodigingen, posts en kalender."""
import os, re
B = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
p = os.path.join(B, 'template.html')
t = open(p, encoding='utf-8').read()


def rep(a, b, cnt=1):
    global t
    assert t.count(a) == cnt, (a[:70], t.count(a))
    t = t.replace(a, b)


rep('/*__CAMP__*/\n', '/*__CAMP__*/\n/*__SCHADE__*/\n')

# ---------- generieke klantcheck ----------
rep('''/* ---------- Tool: Jaarlijkse check opstal & inboedel ---------- */''', '''/* ---------- Generieke klantcheck (gezin, student, woonlasten, nabestaanden) ---------- */
const ck = {};
function viewCheck(item, params){
  setNav("klanttools");
  const C = CHECKS[item.id];
  const st = ck[item.id] || (ck[item.id] = { step:-1, a:{}, calc:{ last:"", ink1:"", ink2:"", nab:"", ao:"" }, naam:"", tel:"", opm:"", consent:false });
  const adv = { naam: params.get("adviseur")||"", kantoor: params.get("kantoor")||"", mail: params.get("mail")||"", tel: params.get("tel")||"" };
  const advLabel = [adv.naam, adv.kantoor && (adv.naam?`van ${adv.kantoor}`:adv.kantoor)].filter(Boolean).join(" ") || "mijn adviseur";
  smallHero([`<a href="#/?cat=klanttools">Klanttools</a>`, `<b>${esc(C.mail)}</b>`], `
    <div class="detail-head"><div>${badge(item.model)} <span class="badge cat">Klantcheck</span><h1>${esc(C.h1)}</h1><p>${esc(C.intro)}</p></div>
      ${adv.kantoor||adv.naam?`<div class="btns"><span class="badge" style="font-size:.8rem;padding:8px 12px">Aangeboden door ${esc(advLabel)}</span></div>`:""}</div>`);
  app.innerHTML = `<div class="wrap"><div class="layout layout-r" style="--rcol:330px">
    <section><div class="panel cut" id="ck" style="padding:24px"></div></section>
    <aside>
      <details class="panel cut adv-only" ${adv.mail?"":"open"}><summary style="font-weight:800;cursor:pointer">Voor adviseurs: maak je eigen link</summary>
        <p class="hint">De klant ziet jouw naam en kan de uitkomst direct naar jou mailen.</p>
        <label class="f" for="ca-n">Naam adviseur</label><input class="i" id="ca-n" value="${esc(adv.naam)}">
        <label class="f" for="ca-k">Kantoornaam</label><input class="i" id="ca-k" value="${esc(adv.kantoor)}">
        <label class="f" for="ca-t">Telefoon</label><input class="i" id="ca-t" value="${esc(adv.tel)}">
        <label class="f" for="ca-m">E-mail voor de uitkomsten</label><input class="i" id="ca-m" type="email" value="${esc(adv.mail)}">
        <div class="actions" style="margin-top:10px"><button class="btn btn-k btn-sm" id="ca-link">Kopieer deellink</button></div>
      </details>
      ${uitnodigingPanel(item.id)}
      <div class="note"><strong>Let op:</strong> deze check is een hulpmiddel en geen advies. Er wordt niets opgeslagen; versturen gaat via uw eigen mailprogramma. Vul geen medische gegevens in.</div>
    </aside></div></div>`;
  const root = $("#ck"), S = C.secties, nStap = S.length + (C.calc ? 1 : 0);
  const keuze = (name, val, cur, label) => `<button type="button" class="wtc-opt" data-k="${name}" data-v="${val}" style="padding:10px 14px;border:1px solid ${cur===val?"var(--k)":"var(--line)"};background:${cur===val?"var(--y-soft)":"#fff"};box-shadow:${cur===val?"inset 0 0 0 1px var(--k)":"none"};font-weight:${cur===val?800:600};cursor:pointer">${label}</button>`;
  const status = sec => { let pt=0; const tips=[]; sec.items.forEach(x=>{ const v=st.a[sec.key+"."+x.k]; if (v==="ja"){pt+=x.w; tips.push(x.tip);} else if (v==="weetniet"){pt+=x.w/2; tips.push(x.tip);} });
    return { tips, s: pt===0?["Lijkt goed geregeld","gratis"]:pt<=2?["Aandacht nodig","freemium"]:["Bespreek dit met uw adviseur","betaald"] }; };
  const calc = () => { const N=parseNum, last=N(st.calc.last), i1=N(st.calc.ink1), i2=N(st.calc.ink2), nab=N(st.calc.nab), ao=N(st.calc.ao);
    if (!last || !(i1+i2)) return null;
    const pct = ink => ink>0 ? last/ink : null;
    return [["Nu", i1+i2, pct(i1+i2)], ["Partner 2 overlijdt", i1+nab, pct(i1+nab)], ["Partner 1 overlijdt", i2+nab, pct(i2+nab)], ["Partner 1 arbeidsongeschikt", ao+i2, pct(ao+i2)]].filter(r=>r[1]>0 || r[0]==="Nu"); };
  const kleur = q => q==null?"var(--muted)":q>0.4?"var(--red)":q>0.3?"#b88a00":"var(--ok)";
  const samenvatting = () => { const r=[C.titel,""];
    S.forEach(sec=>{ const s=status(sec); r.push(sec.titel+": "+s.s[0]); sec.items.forEach(x=>{ const v=st.a[sec.key+"."+x.k]; if (v && v!=="nee") r.push(" - "+x.q+" "+(v==="ja"?"Ja":"Weet ik niet")); }); r.push(""); });
    const c=calc(); if (c){ r.push("Woonlasten als deel van het netto inkomen:"); c.forEach(([l,ink,q])=>r.push(` - ${l}: ${q!=null?fmtN(q*100)+"%":"geen inkomen"}`)); r.push(""); }
    r.push(`Naam: ${st.naam||"—"}`,`Telefoon: ${st.tel||"—"}`); if (st.opm) r.push("","Toelichting:",st.opm); return r.join("\\n"); };
  const render = () => {
    if (st.step === -1){
      root.innerHTML = `<div class="eyebrow" style="color:var(--y-ink)">${esc(C.mail)}</div><h2 style="font-size:1.5rem;margin-bottom:10px">${esc(C.titel)}</h2><p>${esc(C.intro)}</p>
        <ul class="feat">${S.map(s=>`<li>${esc(s.titel)}: ${s.items.length} vragen</li>`).join("")}${C.calc?"<li>Rekenvoorbeeld met uw eigen bedragen</li>":""}</ul>
        <button class="btn btn-k" id="ck-start" style="margin-top:14px">Start →</button>`;
      $("#ck-start").onclick = () => { st.step = 0; render(); }; return;
    }
    if (st.step < nStap){
      const isCalc = C.calc && st.step === S.length;
      let body = "";
      if (isCalc){
        body = `<h2 style="font-size:1.35rem;margin-bottom:6px">Uw woonlasten en inkomen</h2><p class="hint" style="margin:0 0 10px">Netto bedragen per maand. Laat leeg wat niet van toepassing is.</p>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:0 10px">
            ${[["last","Woonlasten (huur of hypotheek + vaste woonkosten)"],["ink1","Netto inkomen partner 1"],["ink2","Netto inkomen partner 2"],["nab","Uitkering of pensioen voor nabestaande (schatting)"],["ao","Inkomen partner 1 bij arbeidsongeschiktheid (schatting)"]].map(([k,l])=>`<div><label class="f" for="cc-${k}">${l}</label><input class="i" id="cc-${k}" data-cc="${k}" value="${esc(st.calc[k])}" inputmode="numeric" placeholder="€"></div>`).join("")}
          </div>`;
      } else {
        const sec = S[st.step];
        body = `<h2 style="font-size:1.35rem;margin-bottom:6px">${esc(sec.titel)}</h2>` + sec.items.map(x=>{ const cur=st.a[sec.key+"."+x.k]||""; return `<div style="border-top:1px solid var(--line-2);padding:12px 0"><p style="margin:0 0 2px;font-weight:700">${esc(x.q)}</p>${x.s?`<p class="hint" style="margin:0 0 8px">${esc(x.s)}</p>`:""}
          <div style="display:flex;gap:8px;flex-wrap:wrap">${keuze(sec.key+"."+x.k,"ja",cur,"Ja")}${keuze(sec.key+"."+x.k,"nee",cur,"Nee")}${keuze(sec.key+"."+x.k,"weetniet",cur,"Weet ik niet")}</div></div>`; }).join("");
      }
      root.innerHTML = `<div style="font-size:.75rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase">Stap ${st.step+1} van ${nStap+1}</div><div class="progress"><i style="width:${(st.step+1)/(nStap+1)*100}%"></i></div>${body}
        <div style="display:flex;justify-content:space-between;gap:10px;margin-top:16px"><button class="btn btn-o" id="ck-back">Terug</button><button class="btn btn-k" id="ck-next">Volgende</button></div>`;
      $$("#ck [data-k]").forEach(b=>b.onclick=()=>{ st.a[b.dataset.k]=b.dataset.v; const y=window.scrollY; render(); window.scrollTo(0,y); });
      $$("#ck [data-cc]").forEach(el=>euroInput(el, ()=>{ st.calc[el.dataset.cc]=el.value; }));
      $("#ck-back").onclick = () => { st.step--; render(); root.scrollIntoView({block:"start"}); };
      $("#ck-next").onclick = () => { st.step++; render(); root.scrollIntoView({block:"start"}); };
      return;
    }
    const c = calc();
    root.innerHTML = `<div class="eyebrow" style="color:var(--y-ink)">Uw uitkomst</div><h2 style="font-size:1.5rem;margin-bottom:12px">Zo staat het ervoor</h2>
      ${S.map(sec=>{ const s=status(sec); return `<div class="panel" style="background:var(--bg-2);margin-bottom:12px"><div style="display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;align-items:center"><b style="font-size:1.05rem">${esc(sec.titel)}</b><span class="badge ${s.s[1]}">${s.s[0]}</span></div>
        ${s.tips.length?`<ul class="feat" style="margin-top:8px">${s.tips.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`:`<p style="margin:8px 0 0">Op basis van uw antwoorden lijkt dit goed geregeld.</p>`}</div>`; }).join("")}
      ${c?`<div class="panel" style="background:var(--bg-2);margin-bottom:12px"><b style="font-size:1.05rem">Woonlasten als deel van uw netto inkomen</b>
        <table style="width:100%;border-collapse:collapse;margin-top:8px;font-size:.92rem">${c.map(([l,ink,q])=>`<tr style="border-top:1px solid var(--line-2)"><td style="padding:8px 0">${esc(l)}</td><td style="text-align:right;padding:8px 0">${fmtEUR(ink)} p/m</td><td style="text-align:right;padding:8px 0;font-weight:800;color:${kleur(q)}">${q!=null?fmtN(q*100)+"%":"–"}</td></tr>`).join("")}</table>
        <p class="hint" style="margin:6px 0 0">Vuistregel, geen norm: boven ongeveer 30% wordt het krap, boven 40% is het vaak niet vol te houden. Wat passend is, hangt af van uw totale situatie.</p></div>`:""}
      <h3 style="margin-top:18px">Bespreek de uitkomst${adv.naam||adv.kantoor?` met ${esc(advLabel)}`:" met uw adviseur"}</h3>
      <label class="f" for="ck-naam">Uw naam *</label><input class="i" id="ck-naam" value="${esc(st.naam)}">
      <label class="f" for="ck-tel">Telefoon (niet verplicht)</label><input class="i" id="ck-tel" type="tel" value="${esc(st.tel)}">
      <label class="f" for="ck-opm">Toelichting (niet verplicht)</label><textarea class="i" id="ck-opm" style="min-height:70px">${esc(st.opm)}</textarea>
      <div class="checks"><label><input type="checkbox" id="ck-ok" ${st.consent?"checked":""}> Ik vind het goed dat ${esc(advLabel)} deze antwoorden ontvangt en contact met mij opneemt.</label></div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px"><button class="btn btn-k" id="ck-send">Stuur naar ${adv.naam||adv.kantoor?esc(advLabel):"mijn adviseur"} →</button><button class="btn btn-o" id="ck-copy">Kopieer samenvatting</button><button class="btn btn-o" id="ck-print">Print / PDF</button><button class="btn btn-o" id="ck-back">Terug</button></div>
      ${adv.tel?`<p class="hint">Of bel ${esc(advLabel)}: ${esc(adv.tel)}</p>`:""}
      <p class="hint">Indicatie, geen advies. Versturen opent een bericht in uw eigen e-mailprogramma.</p>`;
    $("#ck-naam").oninput=e=>st.naam=e.target.value; $("#ck-tel").oninput=e=>st.tel=e.target.value; $("#ck-opm").oninput=e=>st.opm=e.target.value; $("#ck-ok").onchange=e=>st.consent=e.target.checked;
    $("#ck-back").onclick=()=>{ st.step=nStap-1; render(); };
    $("#ck-copy").onclick=async()=>toast(await copyText(samenvatting())?"Samenvatting gekopieerd":"Kopiëren lukte niet");
    $("#ck-print").onclick=()=>printHtml(C.titel, `<div style="font-family:Arial;padding:8px"><pre style="white-space:pre-wrap;font-family:Arial;font-size:13px">${esc(samenvatting())}</pre><p style="font-size:11px;color:#666">Indicatie, geen advies.</p></div>`);
    $("#ck-send").onclick=()=>{ if(!st.naam.trim()||!st.consent){ toast("Vul uw naam in en geef toestemming"); return; }
      location.href=`mailto:${encodeURIComponent(adv.mail)}?subject=${encodeURIComponent(C.mail+" – "+st.naam)}&body=${encodeURIComponent(samenvatting())}`; toast("Uw mailprogramma wordt geopend"); };
  };
  render();
  const deellink = () => { const q=new URLSearchParams(); [["adviseur","#ca-n"],["kantoor","#ca-k"],["tel","#ca-t"],["mail","#ca-m"]].forEach(([k,id])=>{ const v=$(id).value.trim(); if(v) q.set(k,v); }); return location.href.split("#")[0]+"#/item/"+item.id+(q.toString()?"?"+q:""); };
  bindUitnodiging(item.id, deellink);
  $("#ca-link").onclick = async () => toast(await copyText(deellink()) ? "Deellink gekopieerd" : "Kopiëren lukte niet");
}

/* ---------- Actie-ideeën schade ---------- */
function viewIdeeen(item){
  setNav("campagnes");
  smallHero([`<a href="#/?cat=campagnes">Campagnes &amp; selecties</a>`, `<b>Actie-ideeën schade</b>`], `
    <div class="detail-head"><div>${badge(item.model)} <span class="badge cat">Ideeën</span><h1>${esc(item.title)}</h1><p>${esc(item.summary)}</p></div></div>`);
  app.innerHTML = `<div class="wrap"><div class="grid">${IDEEEN.map(x=>{ const it=ITEMS.find(i=>i.id===x.i); return `<article class="card cut">
      <div class="meta"><span class="badge freemium">${esc(x.wanneer)}</span></div><h3>${esc(x.t)}</h3><p>${esc(x.d)}</p>
      ${it?`<div class="foot"><span>Materiaal</span><a class="go" href="#/item/${it.id}" style="text-decoration:none">${esc(it.title.replace(/^(Campagne|Klantcheck|Selectie): /,""))} →</a></div>`:""}</article>`; }).join("")}</div>
    <div class="note" style="margin-top:18px"><strong>Let op:</strong> schadeverzekeringen vallen onder de Wft-zorgplicht. Gebruik acties als aanleiding voor contact; advies volgt na inventarisatie. Commerciële mail alleen aan klanten of met toestemming.</div></div>`;
}

/* ---------- Tool: Jaarlijkse check opstal & inboedel ---------- */''')
rep('''verzekeringscheck:viewVerzekeringscheck,''', '''verzekeringscheck:viewVerzekeringscheck, check:viewCheck, ideeen:viewIdeeen,''')

# ---------- uitnodigingsmails voor de checks ----------
rep('''  "hypotheekcijfer": {o:"Kunt u uw hypotheek blijven betalen?",''', '''  "check-gezin": {o:"Met kinderen goed geregeld? Doe de gezinscheck", x:`{aanhef},

Met kinderen verandert er veel, ook in uw verzekeringen en financiële zaken. Met de gezinscheck ziet u in een paar minuten of de bescherming van uw gezin en uw dagelijkse verzekeringen nog passen:
{link}

Na afloop kunt u de uitkomst direct naar ons sturen. Wij bespreken het graag met u.

Met vriendelijke groet,

{adviseur}
{kantoor}`},
  "check-student": {o:"Uw kind gaat studeren: is alles goed verzekerd?", x:`{aanhef},

Gaat uw kind studeren of op kamers? Dan verandert er het een en ander: de zorgverzekering, aansprakelijkheid, spullen op de kamer en reizen. Met de studentencheck ziet u snel wat geregeld moet worden:
{link}

Wij helpen u en uw kind graag verder.

Met vriendelijke groet,

{adviseur}
{kantoor}`},
  "check-woonlasten": {o:"Kunt u uw woonlasten blijven betalen als het tegenzit?", x:`{aanhef},

Wat gebeurt er met uw huur of hypotheek als een van u overlijdt of langdurig arbeidsongeschikt raakt? Met de woonlastencheck ziet u in een paar minuten hoe uw woonlasten zich verhouden tot uw inkomen, nu en als het tegenzit:
{link}

Wij bespreken de uitkomst graag met u.

Met vriendelijke groet,

{adviseur}
{kantoor}`},
  "check-nabestaanden": {o:"Heeft u alles goed geregeld voor uw naasten?", x:`{aanhef},

Het geeft rust om te weten dat uw naasten goed verzorgd achterblijven. Met de nabestaandencheck ziet u in een paar minuten wat al geregeld is: inkomen, wonen, testament, wensen en uw uitvaartverzekering:
{link}

Wij bespreken het graag met u, in alle rust.

Met vriendelijke groet,

{adviseur}
{kantoor}`},
  "hypotheekcijfer": {o:"Kunt u uw hypotheek blijven betalen?",''')

# ---------- social posts ----------
rep('''  {m:7, t:"Betaal je te veel voor je ORV?"''', '''  {m:11, t:"Op wintersport?", ic:"snow", i:"campagne-wintersport", x:"Ga je deze winter skiën of snowboarden? Check vóór vertrek je reisverzekering. Wintersport is niet altijd standaard meeverzekerd, en medische kosten in het buitenland worden door de basisverzekering vaak maar deels vergoed.\\n\\nTwijfel je? We kijken graag met je mee.\\n\\n👉 {link}", h:"#wintersport #reisverzekering #skiën"},
  {m:7, t:"Schade aan een ander?", ic:"umbrella", i:"campagne-avp", x:"Je fietst tegen een geparkeerde auto, of je kind gooit met een bal een ruit in. Wie betaalt de schade? Met een aansprakelijkheidsverzekering ben je voor een klein bedrag goed beschermd. Ouders zijn aansprakelijk voor schade door kinderen tot 14 jaar.\\n\\nCheck of jouw gezin goed verzekerd is.\\n\\n👉 {link}", h:"#aansprakelijkheidsverzekering #gezin #verzekeren"},
  {m:5, t:"Gezin met kinderen?", ic:"baby", i:"check-gezin", x:"Met kinderen verandert er veel. Kunnen jullie in het huis blijven wonen als een van jullie overlijdt? Is er een testament met een voogd? En is de aansprakelijkheidsverzekering op het hele gezin afgestemd?\\n\\nDoe de gezinscheck in een paar minuten.\\n\\n👉 {link}", h:"#gezin #kinderen #goedgeregeld"},
  {m:8, t:"Op kamers? Dit moet je regelen", ic:"education", i:"check-student", x:"Ga je studeren of op kamers? Vanaf je 18e is een eigen zorgverzekering verplicht. En ben je nog via je ouders verzekerd voor aansprakelijkheid en je spullen? Laptop, telefoon en fiets zijn op je kamer niet altijd goed gedekt.\\n\\nCheck het samen met je ouders.\\n\\n👉 {link}", h:"#studeren #opkamers #studentenverzekering"},
  {m:10, t:"SVI of ongevallenverzekering?", ic:"car", i:"campagne-svi", x:"Bij een ongeluk waarbij je zelf schuld hebt, is je eigen letselschade niet gedekt door de verplichte WA-verzekering. Een schadeverzekering inzittenden (SVI) vergoedt de werkelijke schade van jou en je passagiers. Een ongevallenverzekering keert alleen een vast bedrag uit.\\n\\nWeet jij wat jouw autopolis dekt?\\n\\n👉 {link}", h:"#autoverzekering #SVI #verkeersveiligheid"},
  {m:3, t:"Huur of hypotheek blijven betalen?", ic:"life events", i:"check-woonlasten", x:"Wat gebeurt er met je woonlasten als je partner overlijdt of jij langdurig arbeidsongeschikt raakt? Het inkomen daalt vaak, de huur of hypotheek loopt gewoon door.\\n\\nDoe de woonlastencheck en weet waar je staat.\\n\\n👉 {link}", h:"#woonlasten #arbeidsongeschiktheid #goedgeregeld"},
  {m:11, t:"Goed geregeld voor je naasten?", ic:"heart", i:"check-nabestaanden", x:"Het is geen makkelijk onderwerp, maar het geeft rust: weten dat je naasten goed verzorgd achterblijven. Is je uitvaart verzekerd, en past de verzekering nog bij de huidige kosten? Een naturaverzekering groeit meestal mee met de prijzen; bij een kapitaalverzekering kan het bedrag te laag blijken.\\n\\nWe bespreken het graag met je, in alle rust.\\n\\n👉 {link}", h:"#uitvaartverzekering #nabestaanden #goedgeregeld"},
  {m:7, t:"Betaal je te veel voor je ORV?"''')

# ---------- kalender ----------
def kal(m, akt):
    global t
    a = f'  {{ m:{m}, a:[\n'
    assert t.count(a) == 1, (m, t.count(a))
    t = t.replace(a, a + akt)
kal(3, '''    {t:"Woonlasten bij overlijden en arbeidsongeschiktheid", d:"Voor kopers én huurders: blijven de woonlasten betaalbaar als een inkomen wegvalt?", i:["check-woonlasten","campagne-woonlasten-inkomen","verantwoord-hypotheekrapport"]},\n''')
kal(5, '''    {t:"Gezin met kinderen", d:"Nodig gezinnen uit voor de gezinscheck: ORV, arbeidsongeschiktheid, voogdij en gezinsdekking.", i:["check-gezin","campagne-gezin"]},\n''')
kal(7, '''    {t:"Aansprakelijkheid in de zomer", d:"Fietsen, logeren, spullen lenen: wijs op een AVP met gezinsdekking.", i:["campagne-avp"]},\n''')
kal(8, '''    {t:"Studerende kinderen", d:"Het studiejaar begint: zorgverzekering, op kamers, laptop en fiets, buitenland.", i:["check-student","campagne-studenten"]},\n''')
kal(10, '''    {t:"Wintersport voorbereiden", d:"Check vóór het seizoen of wintersport, ski-uitrusting en medische kosten in het buitenland verzekerd zijn.", i:["campagne-wintersport"]},
    {t:"SVI in plaats van ongevallen inzittenden", d:"Leg het verschil uit bij de prolongatie van autopolissen.", i:["campagne-svi"]},\n''')
kal(11, '''    {t:"Allerzielen: goed geregeld voor nabestaanden", d:"Rond 2 november: een rustig gesprek over testament, wensen en de uitvaartverzekering (natura of kapitaal).", i:["check-nabestaanden","campagne-nabestaanden-uitvaart"], dt:"2027-11-02"},\n''')
open(p, 'w', encoding='utf-8').write(t)

bp = os.path.join(B, 'build.py')
b = open(bp, encoding='utf-8').read()
if "schade.js" not in b:
    b = b.replace("('/*__CAMP__*/', 'camp.js'),", "('/*__CAMP__*/', 'camp.js'), ('/*__SCHADE__*/', 'schade.js'),")
    open(bp, 'w', encoding='utf-8').write(b)
print('ok')

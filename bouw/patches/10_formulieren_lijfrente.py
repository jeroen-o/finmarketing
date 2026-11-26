"""Formulierenbank + formulieren in Blinqx-stijl, lijfrente-rekenhulp, posts, kalender en uitnodigingen."""
import os
B = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
p = os.path.join(B, 'template.html')
t = open(p, encoding='utf-8').read()


def rep(a, b, cnt=1):
    global t
    assert t.count(a) == cnt, (a[:70], t.count(a))
    t = t.replace(a, b)


rep('/*__SCHADE__*/\n', '/*__SCHADE__*/\n/*__FORMS__*/\n/*__EXTRA__*/\n')

rep('''/* ---------- Actie-ideeën schade ---------- */''', '''/* ---------- Formulierenbank ---------- */
const ABS_URL = "https://www.actiefbeheerscan.nl/digitale-formulieren/";
const formTekst = f => [f.titel, "", f.intro, ""].concat(f.stappen.flatMap((s,i)=>[`${i+1}. ${s.titel}`, ...(s.info?[s.info]:[]), ...s.vragen.map(q=>`- ${q.v}${q.s?` (${q.s})`:""}${q.o?"\\n    "+q.o.map(o=>(q.t==="meer"?"☐ ":"○ ")+o).join("\\n    "):q.t==="score"?"\\n    Cijfer 1 t/m 10":"\\n    ____________________"}`), ""])).join("\\n");
const formHtml = f => `<h1 style="font-family:Arial;font-size:20px">${esc(f.titel)}</h1>${f.intro?`<p style="font-family:Arial;font-size:13px">${esc(f.intro).replace(/\\n/g,"<br>")}</p>`:""}` +
  f.stappen.map((s,i)=>`<h2 style="font-family:Arial;font-size:15px;margin-top:16px">${i+1}. ${esc(s.titel)}</h2>${s.info?`<p style="font-family:Arial;font-size:12px">${esc(s.info)}</p>`:""}` + s.vragen.map(q=>`<p style="font-family:Arial;font-size:13px;margin:10px 0 2px"><b>${esc(q.v)}</b>${q.s?`<br><span style="color:#666">${esc(q.s)}</span>`:""}</p>${q.o?q.o.map(o=>`<p style="font-family:Arial;font-size:13px;margin:0 0 0 12px">${q.t==="meer"?"☐":"○"} ${esc(o)}</p>`).join(""):q.t==="score"?`<p style="font-family:Arial;font-size:13px;margin:0 0 0 12px">Cijfer 1 t/m 10: ____</p>`:`<p style="font-family:Arial;font-size:13px;margin:0 0 0 12px">______________________________________</p>`}`).join("")).join("");
function viewFormulieren(item){
  setNav("home");
  smallHero([`<a href="#/?cat=scans">Klantscans &amp; vragenlijsten</a>`, `<b>Formulierenbank</b>`], `
    <div class="detail-head"><div>${badge(item.model)} <span class="badge cat">Formulieren</span><h1>Formulierenbank: digitale klantformulieren</h1><p>Regelmatig contact met je klanten, zonder veel werk: negen kant-en-klare vragenlijsten voor nazorg, pensioen, uitvaart, schade, zakelijk en klanttevredenheid.</p></div></div>`);
  const themas = [...new Set(FORMS.map(f=>f.thema))];
  app.innerHTML = `<div class="wrap">
    <h2 class="sec-title">Twee manieren om ze te <u>gebruiken</u></h2><p class="sec-sub">Kies wat bij je kantoor past. Je kunt ook beginnen met de ene en later overstappen.</p>
    <div class="feat-grid" style="grid-template-columns:repeat(2,minmax(0,1fr))">
      <div class="fcard cut"><span class="hexi">${icon("document",24)}</span><span class="badge gratis">Gratis</span><h3>Zelf een formulier maken met de teksten</h3>
        <p>Open een formulier hieronder en kopieer de vragen of download ze als Word. Zet ze in je eigen formuliertool (bijvoorbeeld in je website, mailprogramma of klantportaal), of gebruik het formulier direct hier: klanten vullen het in en sturen de uitkomst via hun eigen mail naar jou.</p>
        <ul class="feat"><li>Alle teksten vrij aan te passen</li><li>Direct te delen met je eigen deellink</li><li>Geen dashboard: antwoorden komen per mail binnen</li></ul></div>
      <div class="fcard cut dark"><span class="hexi">${icon("graph",24)}</span><span class="badge betaald">Betaald</span><h3>Actiefbeheerscan.nl gebruiken</h3>
        <p>Slimme webformulieren met jouw logo en kleuren. Antwoorden komen gestructureerd binnen, zodat je direct ziet wie je moet bellen. Templates aanpassen of eigen formulieren toevoegen kan ook.</p>
        <ul class="feat"><li>Op je website, in mailings en nieuwsbrieven</li><li>Alle resultaten in één overzicht</li><li>€ 79,- per maand + eenmalig € 495,- (excl. btw); vraag naar de proefperiode</li></ul>
        <a class="btn btn-y btn-sm" href="${ABS_URL}" target="_blank" rel="noopener" style="align-self:flex-start;color:#000">Bekijk Actiefbeheerscan ↗</a></div>
    </div>
    ${themas.map(th=>`<h2 style="font-size:1.25rem;margin:8px 0 12px">${esc(th)}</h2><div class="grid" style="margin-bottom:24px">${FORMS.filter(f=>f.thema===th).map(f=>`<article class="card cut">
      <div class="meta"><span class="badge gratis">Gratis</span><span class="badge cat">${f.stappen.length} stappen · ${f.stappen.reduce((n,s)=>n+s.vragen.length,0)} vragen</span></div>
      <h3><a href="#/item/${f.id}">${esc(f.titel)}</a></h3><p>${esc(f.sub)}</p>
      <div class="foot"><span>Actiefbeheerscan</span><span class="go">Bekijken &amp; gebruiken →</span></div></article>`).join("")}</div>`).join("")}
    <div class="note"><strong>Let op, AVG:</strong> vraag alleen wat je nodig hebt voor je dienstverlening, vraag niet naar gezondheid en leg vast wanneer je een formulier hebt verstuurd en of er een reactie kwam.</div></div>`;
}
function viewForm(item, params){
  setNav("home");
  const f = item.data, st = ck[item.id] || (ck[item.id] = { step:-1, a:{}, naam:"", tel:"", opm:"", consent:false });
  const adv = { naam: params.get("adviseur")||"", kantoor: params.get("kantoor")||"", mail: params.get("mail")||"", tel: params.get("tel")||"" };
  const advLabel = [adv.naam, adv.kantoor && (adv.naam?`van ${adv.kantoor}`:adv.kantoor)].filter(Boolean).join(" ") || "mijn adviseur";
  smallHero([`<a href="#/item/formulierenbank">Formulierenbank</a>`, `<b>${esc(f.titel)}</b>`], `
    <div class="detail-head"><div><span class="badge gratis">Gratis</span> <span class="badge cat">${esc(f.thema)}</span><h1>${esc(f.titel)}</h1><p>${esc(f.sub)}</p></div>
      ${adv.kantoor||adv.naam?`<div class="btns"><span class="badge" style="font-size:.8rem;padding:8px 12px">Aangeboden door ${esc(advLabel)}</span></div>`:""}</div>`);
  app.innerHTML = `<div class="wrap"><div class="layout layout-r" style="--rcol:330px">
    <section><div class="panel cut" id="fm" style="padding:24px"></div></section>
    <aside>
      <div class="panel cut adv-only"><h2><span class="hexi">${icon("document",18)}</span>Zelf gebruiken</h2>
        <p class="hint" style="margin-top:0">Kopieer de vragen voor je eigen formuliertool, of download ze als Word.</p>
        <div class="actions"><button class="btn btn-k btn-sm" id="fm-copy">${icon("copy",16)} Kopieer alle vragen</button><button class="btn btn-o btn-sm" id="fm-word">${icon("download",16)} Word</button><button class="btn btn-o btn-sm" id="fm-print">Print als papieren formulier</button></div>
        <p class="hint">Liever slimme formulieren met een overzicht van alle antwoorden? <a href="${ABS_URL}" target="_blank" rel="noopener">Gebruik Actiefbeheerscan.nl ↗</a></p></div>
      <details class="panel cut adv-only"><summary style="font-weight:800;cursor:pointer">Deel dit formulier met je klanten</summary>
        <label class="f" for="fa-n">Naam adviseur</label><input class="i" id="fa-n" value="${esc(adv.naam)}">
        <label class="f" for="fa-k">Kantoornaam</label><input class="i" id="fa-k" value="${esc(adv.kantoor)}">
        <label class="f" for="fa-t">Telefoon</label><input class="i" id="fa-t" value="${esc(adv.tel)}">
        <label class="f" for="fa-m">E-mail voor de antwoorden</label><input class="i" id="fa-m" type="email" value="${esc(adv.mail)}">
        <div class="actions" style="margin-top:10px"><button class="btn btn-k btn-sm" id="fa-link">Kopieer deellink</button></div>
      </details>
      <div class="note"><strong>Privacy:</strong> er wordt niets opgeslagen; versturen gaat via het eigen mailprogramma van de klant.</div>
    </aside></div></div>`;
  const root = $("#fm"), N = f.stappen.length;
  const opt = (name, val, on, multi) => `<button type="button" data-q="${name}" data-v="${esc(val)}" data-m="${multi?1:0}" style="text-align:left;padding:10px 14px;border:1px solid ${on?"var(--k)":"var(--line)"};background:${on?"var(--y-soft)":"#fff"};box-shadow:${on?"inset 0 0 0 1px var(--k)":"none"};font-weight:${on?800:500};cursor:pointer">${multi?(on?"☑ ":"☐ "):""}${esc(val)}</button>`;
  const antw = (si,qi) => st.a[si+"."+qi];
  const samenvatting = () => [f.titel,""].concat(f.stappen.flatMap((s,si)=>[s.titel, ...s.vragen.map((q,qi)=>{ const a=antw(si,qi); return ` - ${q.v}: ${Array.isArray(a)?a.join("; "):(a||"—")}`; }), ""]), [`Naam: ${st.naam||"—"}`, `Telefoon: ${st.tel||"—"}`], st.opm?["","Toelichting:",st.opm]:[]).join("\\n");
  const render = () => {
    if (st.step === -1){
      root.innerHTML = `<div class="eyebrow" style="color:var(--y-ink)">${esc(f.thema)}</div><h2 style="font-size:1.5rem;margin-bottom:10px">${esc(f.titel)}</h2>
        ${(f.intro||f.sub).split(/\\n\\n+/).map(x=>`<p>${esc(x)}</p>`).join("")}
        <ul class="feat">${f.stappen.map(s=>`<li>${esc(s.titel)}</li>`).join("")}</ul><button class="btn btn-k" id="fm-start" style="margin-top:12px">Start →</button>`;
      $("#fm-start").onclick = () => { st.step = 0; render(); }; return;
    }
    if (st.step < N){
      const s = f.stappen[st.step];
      root.innerHTML = `<div style="font-size:.75rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase">Stap ${st.step+1} van ${N+1}</div><div class="progress"><i style="width:${(st.step+1)/(N+1)*100}%"></i></div>
        <h2 style="font-size:1.35rem;margin-bottom:6px">${esc(s.titel)}</h2>${s.sub?`<p class="hint" style="margin-top:0">${esc(s.sub)}</p>`:""}${s.info?s.info.split(/\\n\\n+/).map(x=>`<p>${esc(x)}</p>`).join(""):""}
        ${s.vragen.map((q,qi)=>{ const a=antw(st.step,qi), nm=st.step+"."+qi; return `<div style="border-top:1px solid var(--line-2);padding:12px 0"><p style="margin:0 0 2px;font-weight:700">${esc(q.v)}</p>${q.s?`<p class="hint" style="margin:0 0 8px">${esc(q.s)}</p>`:""}
          ${q.o ? `<div style="display:flex;flex-direction:column;gap:6px">${q.o.map(o=>opt(nm,o, q.t==="meer"?(Array.isArray(a)&&a.includes(o)):a===o, q.t==="meer")).join("")}</div>`
            : q.t==="score" ? `<div style="display:flex;gap:6px;flex-wrap:wrap">${[1,2,3,4,5,6,7,8,9,10].map(n=>opt(nm,String(n),a===String(n),false)).join("")}</div>`
            : `<textarea class="i" data-open="${nm}" style="min-height:60px">${esc(a||"")}</textarea>`}</div>`; }).join("")}
        <div style="display:flex;justify-content:space-between;gap:10px;margin-top:16px"><button class="btn btn-o" id="fm-back">Terug</button><button class="btn btn-k" id="fm-next">Volgende</button></div>`;
      $$("#fm [data-q]").forEach(b=>b.onclick=()=>{ const k=b.dataset.q, v=b.dataset.v;
        if (b.dataset.m==="1"){ const arr = Array.isArray(st.a[k]) ? st.a[k] : []; st.a[k] = arr.includes(v) ? arr.filter(x=>x!==v) : arr.concat(v); } else st.a[k]=v;
        const y=window.scrollY; render(); window.scrollTo(0,y); });
      $$("#fm [data-open]").forEach(el=>el.oninput=()=>st.a[el.dataset.open]=el.value);
      $("#fm-back").onclick=()=>{ st.step--; render(); root.scrollIntoView({block:"start"}); };
      $("#fm-next").onclick=()=>{ st.step++; render(); root.scrollIntoView({block:"start"}); };
      return;
    }
    root.innerHTML = `<div class="eyebrow" style="color:var(--y-ink)">Bijna klaar</div><h2 style="font-size:1.5rem;margin-bottom:10px">Controleren en versturen</h2>
      <div class="promo" style="max-height:280px;overflow:auto">${esc(samenvatting())}</div>
      <label class="f" for="fm-naam">Uw naam *</label><input class="i" id="fm-naam" value="${esc(st.naam)}">
      <label class="f" for="fm-tel">Telefoon (niet verplicht)</label><input class="i" id="fm-tel" type="tel" value="${esc(st.tel)}">
      <label class="f" for="fm-opm">Toelichting (niet verplicht)</label><textarea class="i" id="fm-opm" style="min-height:60px">${esc(st.opm)}</textarea>
      <div class="checks"><label><input type="checkbox" id="fm-ok" ${st.consent?"checked":""}> Ik vind het goed dat ${esc(advLabel)} deze antwoorden ontvangt en contact met mij opneemt.</label></div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px"><button class="btn btn-k" id="fm-send">Stuur naar ${adv.naam||adv.kantoor?esc(advLabel):"mijn adviseur"} →</button><button class="btn btn-o" id="fm-cp">Kopieer</button><button class="btn btn-o" id="fm-back">Terug</button></div>
      <p class="hint">Versturen opent een bericht in uw eigen e-mailprogramma. Er wordt niets opgeslagen.</p>`;
    $("#fm-naam").oninput=e=>st.naam=e.target.value; $("#fm-tel").oninput=e=>st.tel=e.target.value; $("#fm-opm").oninput=e=>st.opm=e.target.value; $("#fm-ok").onchange=e=>st.consent=e.target.checked;
    $("#fm-back").onclick=()=>{ st.step=N-1; render(); };
    $("#fm-cp").onclick=async()=>toast(await copyText(samenvatting())?"Gekopieerd":"Kopiëren lukte niet");
    $("#fm-send").onclick=()=>{ if(!st.naam.trim()||!st.consent){ toast("Vul uw naam in en geef toestemming"); return; }
      location.href=`mailto:${encodeURIComponent(adv.mail)}?subject=${encodeURIComponent(f.titel+" – "+st.naam)}&body=${encodeURIComponent(samenvatting())}`; toast("Uw mailprogramma wordt geopend"); };
  };
  render();
  $("#fm-copy").onclick = async () => toast(await copyText(formTekst(f)) ? "Alle vragen gekopieerd" : "Kopiëren lukte niet");
  $("#fm-word").onclick = () => { download(`formulier-${slug(f.titel)}.doc`, "\\ufeff"+`<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="utf-8"><title>${esc(f.titel)}</title><style>@page{size:21cm 29.7cm;margin:2cm}</style></head><body>${formHtml(f)}</body></html>`, "application/msword"); toast("Word-bestand gedownload"); };
  $("#fm-print").onclick = () => printHtml(f.titel, `<div style="padding:6px">${formHtml(f)}<p style="font-family:Arial;font-size:12px;margin-top:20px">Naam: ______________________ &nbsp; Telefoon: ______________</p></div>`);
  $("#fa-link").onclick = async () => { const q=new URLSearchParams(); [["adviseur","#fa-n"],["kantoor","#fa-k"],["tel","#fa-t"],["mail","#fa-m"]].forEach(([k,id])=>{ const v=$(id).value.trim(); if(v) q.set(k,v); });
    toast(await copyText(location.href.split("#")[0]+"#/item/"+item.id+(q.toString()?"?"+q:"")) ? "Deellink gekopieerd" : "Kopiëren lukte niet"); };
}

/* ---------- Lijfrente-rekenhulp ---------- */
const LR = {
  // Indicatieve parameters (controleer jaarlijks): jaarruimte = 30% × premiegrondslag − 6,27 × factor A
  pct: 0.30, factorAMult: 6.27, franchise: 19172, maxInkomen: 137800,
  schijven: [[38883, 0.3575],[78426, 0.3756],[Infinity, 0.495]]   // indicatieve tarieven box 1 (2026)
};
const lr = { leeftijd:"45", pensioen:"68", inkomen:"60.000", factorA:"0", jaarruimte:"", inleg:"", rendement:"4", tariefNu:"", tariefLater:"19", duur:"20" };
function lrCalc(){
  const N = parseNum, ink = N(lr.inkomen), A = N(lr.factorA);
  const pg = Math.max(0, Math.min(ink, LR.maxInkomen) - LR.franchise);
  const ruimteEst = Math.max(0, LR.pct * pg - LR.factorAMult * A);
  const ruimte = N(lr.jaarruimte) || ruimteEst;
  const inleg = N(lr.inleg) || Math.round(ruimte);
  const tNu = lr.tariefNu ? N(lr.tariefNu)/100 : (LR.schijven.find(s=>ink<=s[0])||LR.schijven[2])[1];
  const tLater = N(lr.tariefLater)/100, r = N(lr.rendement)/100, jaren = Math.max(0, N(lr.pensioen) - N(lr.leeftijd)), duur = Math.max(1, N(lr.duur)||20);
  const fv = (bedrag, n) => r ? bedrag * ((Math.pow(1+r, n) - 1) / r) * (1+r) : bedrag * n;
  const kapitaal = fv(inleg, jaren), kapitaalLater = fv(inleg, Math.max(0, jaren-5));
  const ru = 0.02, uitkJaar = kapitaal * (ru / (1 - Math.pow(1+ru, -duur)));
  const nettoMaand = uitkJaar * (1 - tLater) / 12;
  return { ruimteEst, ruimte, inleg, boven: inleg > ruimte + 1, tNu, tLater, teruggave: inleg * tNu, nettoKosten: inleg * (1 - tNu), jaren, kapitaal, kapitaalLater,
    totaalIn: inleg * jaren, totaalTerug: inleg * tNu * jaren, uitkJaar, nettoMaand, duur, eigen: !!N(lr.jaarruimte) };
}
function viewLijfrente(item){
  setNav("klanttools");
  smallHero([`<a href="#/?cat=klanttools">Klanttools</a>`, `<b>Lijfrente-rekenhulp</b>`], `
    <div class="detail-head"><div>${badge(item.model)} <span class="badge cat">Rekenhulp</span><h1>Wat levert extra pensioensparen op?</h1><p>Met lijfrente is uw inleg aftrekbaar binnen de jaarruimte. Zie wat u terugkrijgt, wat het u netto kost en wat het later oplevert. Wilt u dit jaar aftrekken? Dan moet de inleg vóór 31 december binnen zijn.</p></div></div>`);
  const fld = (k,l,eur=true,ph="") => `<div><label class="f" for="lr-${k}">${l}</label><input class="i" id="lr-${k}" data-lr="${k}" ${eur?"data-eur":""} inputmode="${eur?"numeric":"decimal"}" placeholder="${ph}" value="${esc(lr[k])}"></div>`;
  app.innerHTML = `<div class="wrap"><div class="layout">
    <aside><form class="panel cut" onsubmit="return false">
      <h2><span class="hexi">1</span>Uw situatie</h2>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:0 10px">
        ${fld("leeftijd","Leeftijd nu",false)}${fld("pensioen","Pensioenleeftijd",false)}
        ${fld("inkomen","Bruto jaarinkomen (box 1)")}${fld("factorA","Factor A werkgever",false,"0 bij geen pensioen")}
      </div>
      <p class="hint">Factor A staat op uw UPO; zonder werkgeverspensioen (bijv. zzp) is die 0.</p>
      <h2 style="margin-top:14px"><span class="hexi">2</span>Inleg en aannames</h2>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:0 10px">
        ${fld("jaarruimte","Jaarruimte (rekenhulp)",true,"leeg = schatting")}${fld("inleg","Inleg per jaar",true,"leeg = jaarruimte")}
        ${fld("rendement","Rendement % per jaar",false)}${fld("tariefNu","Belastingtarief nu %",false,"leeg = schatting")}
        ${fld("tariefLater","Tarief na pensioen %",false)}${fld("duur","Uitkeringsduur (jaren)",false)}
      </div>
      <p class="hint"><a href="https://www.belastingdienst.nl/wps/wcm/connect/nl/aftrek-en-kortingen/content/hulpmiddel-lijfrentepremie-2016-en-daarna" target="_blank" rel="noopener">Bereken uw exacte jaarruimte met de rekenhulp van de Belastingdienst ↗</a></p>
      <button type="button" class="btn btn-o btn-sm" id="lr-demo">Vul voorbeeld in</button>
    </form>
    ${uitnodigingPanel("lijfrente-rekenhulp")}</aside>
    <section id="lr-out"></section></div></div>`;
  const out = $("#lr-out");
  const draw = () => {
    const r = lrCalc();
    setMres(`Netto per maand na pensioen: <b>${fmtEUR(r.nettoMaand)}</b>`, "#lr-out");
    const rij = (k,v,b) => `<tr style="border-top:1px solid var(--line-2)"><td style="padding:8px 0;color:var(--muted)">${k}</td><td style="padding:8px 0;text-align:right;font-weight:${b?800:700}">${v}</td></tr>`;
    out.innerHTML = `<div class="panel cut">
      <div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;margin-bottom:14px">
        <div class="pbox"><b>Belastingteruggave per jaar</b><div class="p">${fmtEUR(r.teruggave)}</div></div>
        <div class="pbox"><b>Opgebouwd kapitaal</b><div class="p">${fmtEUR(r.kapitaal)}</div></div>
        <div class="pbox prem"><b>Netto per maand na pensioen</b><div class="p">${fmtEUR(r.nettoMaand)}</div></div>
      </div>
      <table style="width:100%;border-collapse:collapse;font-size:.92rem">
        ${rij(r.eigen?"Jaarruimte (uw invoer)":"Jaarruimte (indicatieve schatting)", fmtEUR(r.ruimte)+" per jaar")}
        ${rij("Inleg per jaar", fmtEUR(r.inleg))}
        ${rij(`Belastingteruggave (${fmtN(r.tNu*100,2)}%)`, fmtEUR(r.teruggave)+" per jaar")}
        ${rij("Wat het u netto kost", fmtEUR(r.nettoKosten)+" per jaar", true)}
        ${rij(`Looptijd tot pensioen`, `${fmtN(r.jaren)} jaar`)}
        ${rij("Totaal ingelegd", fmtEUR(r.totaalIn))}
        ${rij("Totaal aan belastingteruggave", fmtEUR(r.totaalTerug))}
        ${rij(`Opgebouwd kapitaal bij ${fmtN(parseNum(lr.rendement),1)}% rendement`, fmtEUR(r.kapitaal), true)}
        ${rij(`Bruto uitkering over ${fmtN(r.duur)} jaar`, fmtEUR(r.uitkJaar)+" per jaar")}
        ${rij(`Netto na belasting (${fmtN(r.tLater*100,1)}%)`, fmtEUR(r.nettoMaand)+" per maand", true)}
      </table>
      ${r.boven?`<p class="note" style="margin-top:12px"><strong>Let op:</strong> de inleg is hoger dan de jaarruimte. Alleen het deel binnen de jaarruimte (en eventuele reserveringsruimte) is aftrekbaar.</p>`:""}
      <div style="background:var(--y);padding:16px;margin-top:14px"><b>Nu of nooit?</b> Begint u 5 jaar later, dan bouwt u bij dezelfde inleg ongeveer <b>${fmtEUR(r.kapitaal - r.kapitaalLater)}</b> minder kapitaal op. En wilt u dit jaar aftrekken, dan moet de inleg vóór 31 december binnen zijn.</div>
      <div class="actions" style="flex-direction:row;flex-wrap:wrap;margin-top:14px"><button class="btn btn-o btn-sm" id="lr-copy">Kopieer samenvatting</button><button class="btn btn-o btn-sm" id="lr-print">Print / PDF</button></div>
      <p class="hint">Indicatief. Uitgangspunten: jaarruimte-schatting met 30% van de premiegrondslag minus 6,27 × factor A, franchise ${fmtEUR(LR.franchise)} en maximum ${fmtEUR(LR.maxInkomen)} (controleer de actuele bedragen); belastingtarief nu ${lr.tariefNu?"uw invoer":"geschat op basis van indicatieve tarieven box 1 2026"}; inleg aan het begin van elk jaar; uitkering annuïtair tegen 2%. Geen rekening gehouden met kosten, inflatie, reserveringsruimte, heffingskortingen of box 3. Rendement is niet gegarandeerd.</p>
    </div>
    <div class="note"><strong>Let op, AFM/compliance:</strong> lijfrenteproducten vallen onder de Wft; advies vraagt een volledige inventarisatie. Beloof geen rendement en noem de jaarruimte alleen na berekening.</div>`;
    const sam = () => `Lijfrente-rekenhulp\\nJaarruimte: ${fmtEUR(r.ruimte)} (${r.eigen?"invoer":"schatting"})\\nInleg per jaar: ${fmtEUR(r.inleg)}\\nBelastingteruggave per jaar: ${fmtEUR(r.teruggave)}\\nNetto kosten per jaar: ${fmtEUR(r.nettoKosten)}\\nOpgebouwd kapitaal na ${fmtN(r.jaren)} jaar: ${fmtEUR(r.kapitaal)}\\nNetto per maand na pensioen (${fmtN(r.duur)} jaar): ${fmtEUR(r.nettoMaand)}\\n\\nIndicatie, geen advies.`;
    $("#lr-copy").onclick = async () => toast(await copyText(sam()) ? "Samenvatting gekopieerd" : "Kopiëren lukte niet");
    $("#lr-print").onclick = () => printHtml("Lijfrente-rekenhulp", `<pre style="font-family:Arial;font-size:13px;white-space:pre-wrap">${esc(sam())}</pre>`);
  };
  $$("[data-lr]").forEach(el=>{ const k=el.dataset.lr; if (el.hasAttribute("data-eur")) euroInput(el, ()=>{ lr[k]=el.value; draw(); }); else el.addEventListener("input", ()=>{ lr[k]=el.value; draw(); }); });
  $("#lr-demo").onclick = () => { Object.assign(lr, { leeftijd:"42", pensioen:"68", inkomen:"72.000", factorA:"0", jaarruimte:"", inleg:"5.000", rendement:"4", tariefNu:"", tariefLater:"19", duur:"20" }); viewLijfrente(item); toast("Voorbeeld ingevuld"); };
  bindUitnodiging("lijfrente-rekenhulp", () => location.href.split("#")[0] + "#/item/lijfrente-rekenhulp");
  draw();
}

/* ---------- Actie-ideeën schade ---------- */''')

rep('''check:viewCheck, ideeen:viewIdeeen,''', '''check:viewCheck, ideeen:viewIdeeen, formulieren:viewFormulieren, form:viewForm, lijfrente:viewLijfrente,''')

rep('''  "hypotheekcijfer": {o:"Kunt u uw hypotheek blijven betalen?",''', '''  "lijfrente-rekenhulp": {o:"Extra pensioen sparen met belastingvoordeel", x:`{aanhef},

Met extra pensioensparen via lijfrente kunt u belasting besparen: uw inleg is aftrekbaar binnen uw jaarruimte. Met deze rekenhulp ziet u wat u terugkrijgt, wat het u netto kost en wat het later oplevert:
{link}

Wilt u dit jaar nog profiteren? Dan moet de inleg vóór 31 december binnen zijn. Wij rekenen het graag precies voor u uit; bel ons op {tel}.

Met vriendelijke groet,

{adviseur}
{kantoor}`},
  "hypotheekcijfer": {o:"Kunt u uw hypotheek blijven betalen?",''')

rep('''  {m:7, t:"Betaal je te veel voor je ORV?"''', '''  {m:3, t:"Kunnen je partner en kinderen blijven wonen?", ic:"house", i:"campagne-blijven-wonen", x:"Kunnen je partner en kinderen in jullie huis blijven wonen als jou iets overkomt? Bij overlijden of arbeidsongeschiktheid daalt het inkomen vaak, terwijl de huur of hypotheek gewoon doorloopt.\\n\\nWeet waar je staat en zorg dat ze goed verzorgd achterblijven. We kijken graag met je mee.\\n\\n👉 {link}", h:"#goedgeregeld #nabestaanden #wonen"},
  {m:12, t:"Pensioen sparen: nu of nooit", ic:"piggybank", i:"lijfrente-rekenhulp", x:"Extra sparen voor je pensioen én belasting terugkrijgen? Met lijfrente is je inleg aftrekbaar binnen je jaarruimte. Wil je dit jaar nog profiteren? Dan moet je inleg vóór 31 december binnen zijn.\\n\\nBereken wat het jou oplevert.\\n\\n👉 {link}", h:"#pensioen #lijfrente #belastingvoordeel"},
  {m:7, t:"Betaal je te veel voor je ORV?"''')


def kal(m, akt):
    global t
    a = f'  {{ m:{m}, a:[\n'
    assert t.count(a) == 1, (m, t.count(a))
    t = t.replace(a, a + akt)
kal(10, '''    {t:"Pensioen: extra sparen met lijfrente", d:"Laat klanten met een pensioentekort zien wat lijfrente oplevert. Vooral voor ondernemers en zzp'ers.", i:["lijfrente-rekenhulp","campagne-pensioensparen"]},\n''')
kal(12, '''    {t:"Nu of nooit: lijfrente vóór 31 december", d:"Wie dit jaar wil aftrekken, moet de inleg vóór 31 december binnen hebben. Stuur de ‘nu of nooit’-mail begin december.", i:["campagne-pensioensparen","lijfrente-rekenhulp"], dt:"2027-12-01"},\n''')
kal(3, '''    {t:"Kunnen partner en kinderen blijven wonen?", d:"Voor huurders en huiseigenaren: blijven ze verzorgd achter bij overlijden of arbeidsongeschiktheid?", i:["campagne-blijven-wonen","check-nabestaanden"]},\n''')

open(p, 'w', encoding='utf-8').write(t)

bp = os.path.join(B, 'build.py')
b = open(bp, encoding='utf-8').read()
if "extra.js" not in b:
    b = b.replace("('/*__SCHADE__*/', 'schade.js'),", "('/*__SCHADE__*/', 'schade.js'), ('/*__FORMS__*/', 'formulieren.js'), ('/*__EXTRA__*/', 'extra.js'),")
    open(bp, 'w', encoding='utf-8').write(b)
print('ok')

"""Eigen huisstijl (logo, kleuren, lettertype) en delen op LinkedIn, Facebook en Instagram."""
import os
B = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
p = os.path.join(B, 'template.html')
t = open(p, encoding='utf-8').read()


def rep(a, b, cnt=1):
    global t
    assert t.count(a) == cnt, (a[:80], t.count(a))
    t = t.replace(a, b)


# ---------- placeholder + CSS ----------
rep('/* ---------- Disclaimer ---------- */', '/*__HS__*/\n\n/* ---------- Disclaimer ---------- */')
rep('  body.klantmodus .adv-only{display:none!important}\n', '''  body.klantmodus .adv-only{display:none!important}
  /* Delen op social media */
  body.so-open{overflow:hidden}
  .so-dlg{position:fixed;inset:0;background:rgba(0,16,35,.55);z-index:80;display:flex;align-items:flex-start;justify-content:center;padding:4vh 16px;overflow:auto}
  .so-dlg[hidden]{display:none}
  .so-box{background:#fff;width:100%;max-width:980px;padding:20px 22px 22px;box-shadow:0 20px 50px rgba(0,0,0,.3)}
  .so-head{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:10px}
  .so-head h2{font-size:1.35rem}
  .so-grid{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,1fr);gap:18px;margin-top:12px}
  .so-img{line-height:0;border:1px solid var(--line-2);background:var(--bg-2);margin-top:8px}
  .so-img svg{width:100%;height:auto;display:block}
  .hs-logo-pv{display:flex;align-items:center;gap:10px;margin:4px 0 6px}
  .hs-logo-pv img{max-height:56px;max-width:200px;background:#fff;border:1px solid var(--line-2);padding:4px}
  #hs-pv-sq svg,#hs-pv-ls svg{width:100%;height:auto;display:block;border:1px solid var(--line-2)}
  .nav a#hs-nav.on::after{content:"";display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--ok);margin-left:6px;vertical-align:middle}
  /* Huisstijl van de adviseur in klanttools */
  .logo.hs{background-color:#fff;background-origin:content-box;padding:4px 8px;filter:none}
  body.hs-donker .top,body.hs-donker .top a:not(.cta),body.hs-donker .hero,body.hs-donker .btn-y,body.hs-donker .hexi,body.hs-donker .step b.n,body.hs-donker .mres button,body.hs-donker [style*="background:var(--y)"]{color:#fff}
  body.hs-donker .brand span{border-left-color:#fff}
  body.hs-donker .pbox.prem .p,body.hs-donker .mres b,body.hs-donker footer h2,body.hs-donker footer a,body.hs-donker .badge.betaald,body.hs-donker .preview-bar b,body.hs-donker .fcard.dark .go,body.hs-donker .disc h2,body.hs-donker .disc a,body.hs-donker .disc p strong{color:#fff}
  @media (max-width:760px){ .so-grid{grid-template-columns:1fr} .so-dlg{padding:0} .so-box{min-height:100%;padding:16px} .hs-pv2{grid-template-columns:1fr!important} }
''')

# ---------- nav ----------
rep('''      <a href="#/kennisbank" data-nav="kennisbank">Kennisbank</a>\n''', '''      <a href="#/kennisbank" data-nav="kennisbank">Kennisbank</a>
      <a href="#/huisstijl" data-nav="huisstijl" id="hs-nav">Huisstijl</a>\n''')

# ---------- router ----------
rep('''["kantoor","adviseur","mail"].some(k=>q.get(k))); }''', '''["kantoor","adviseur","mail","kleur","logo"].some(k=>q.get(k))); }
  pasThemaToe();''')
rep('''    document.title = `${item.title} · Marketingbibliotheek Blinqx V&H`;''', '''    socialKnopInHero(item);
    document.title = `${item.title} · Marketingbibliotheek Blinqx V&H`;''')
rep('''  else if (path==="/disclaimer"){''', '''  else if (path==="/huisstijl"){ viewHuisstijl(); document.title="Jouw huisstijl · Marketingbibliotheek Blinqx V&H"; window.scrollTo(0,0); }
  else if (path==="/disclaimer"){''')

# ---------- kopiëren: klantlinks krijgen huisstijl mee ----------
rep('''async function copyText(text){
  try{''', '''async function copyText(text){
  if (typeof hsLinkify === "function") text = hsLinkify(text);
  try{''')

# ---------- print ----------
rep('''<title>${esc(title)}</title><style>body{margin:0;font-family:Arial,Helvetica,sans-serif}@page{margin:14mm}</style></head><body>${bodyHtml}''',
    '''<title>${esc(title)}</title><style>${typeof hsFontFace==="function"?hsFontFace():""}body{margin:0;font-family:${typeof hsFont==="function"?hsFont():"Arial,Helvetica,sans-serif"}}@page{margin:14mm}</style></head><body>${typeof hsKop==="function"?hsKop():""}${bodyHtml}''')

# ---------- nieuwsbrief ----------
rep('''  const F="font-family:Arial,Helvetica,sans-serif;", kantoor=d.kantoor.trim()||"[Naam kantoor]";''',
    '''  const F=`font-family:${hsFont().replace(/"/g,"'")};`, kantoor=d.kantoor.trim()||"[Naam kantoor]", logo=hsLogoSrc(true);''')
rep('''  h+=`<tr><td style="background:${acc};padding:28px 28px 24px;">''',
    '''  if (logo) h+=`<tr><td style="padding:18px 28px;background:#ffffff;"><img src="${esc(logo)}" alt="${esc(kantoor)}" height="52" style="height:52px;width:auto;max-width:260px;display:block;border:0;"></td></tr>`;
  h+=`<tr><td style="background:${acc};padding:28px 28px 24px;">''')
rep('''<style>@page{size:21cm 29.7cm;margin:1.8cm} body{font-family:Arial,Helvetica,sans-serif} table{border-collapse:collapse}</style>''',
    '''<style>@page{size:21cm 29.7cm;margin:1.8cm} body{font-family:${hsFont()}} table{border-collapse:collapse}</style>''')
rep('''            <button class="btn btn-o" id="a-print">Print / PDF</button>''', '''            <button class="btn btn-o" id="a-print">Print / PDF</button>
            <button class="btn btn-o" id="a-social">${icon("share",16)} Deel een artikel op social</button>''')
rep('''  $("#a-print").onclick=()=>printHtml(NB.title, renderNewsletter({outer:false}));''', '''  $("#a-print").onclick=()=>printHtml(NB.title, renderNewsletter({outer:false}));
  $("#a-social").onclick=()=>{ const s=NB.sections.find(x=>d.secties[x.id])||NB.sections[0]; nbSocial(s); };''')
rep('''function viewNewsletter(item){''', '''function nbSocial(s){
  openSocial({ titel:s.title, tekst:[...s.paras, ...s.bullets.map(b=>"• "+b)].join("\\n\\n").replace(/\\n\\n• /g,"\\n• "), tags:[s.tag,"hypotheek","leennormen"], link:HS.web });
  const sel = document.createElement("div"); sel.className = "so-art";
  sel.innerHTML = `<label class="f" for="so-artsel">Artikel uit de nieuwsbrief</label><select class="i" id="so-artsel">${NB.sections.map(x=>`<option value="${x.id}" ${x.id===s.id?"selected":""}>${esc(x.tag)}: ${esc(x.title)}</option>`).join("")}</select>`;
  $("#so-dlg .tabs").before(sel);
  $("#so-artsel").onchange = e => nbSocial(NB.sections.find(x=>x.id===e.target.value));
}
function viewNewsletter(item){''')

# ---------- sjablonen ----------
rep('''function tplHtml(txt){
  const F="font-family:Arial,Helvetica,sans-serif;color:#1d2b3a;font-size:15px;line-height:1.55;";''',
    '''function tplHtml(txt){
  const F=`font-family:${hsFont().replace(/"/g,"'")};color:#1d2b3a;font-size:15px;line-height:1.55;`;''')
rep('''h+=`<p style="${F}margin:14px 0 4px;font-weight:bold;color:#000">${esc(l.slice(3))}</p>`;''',
    '''h+=`<p style="${F}margin:14px 0 4px;font-weight:bold;color:${hsKopKleur()}">${esc(l.slice(3))}</p>`;''')
rep('''<style>@page{size:21cm 29.7cm;margin:2cm} body{font-family:Arial,Helvetica,sans-serif}</style></head><body><p style="font-family:Arial;font-size:12px;color:#56677c">''',
    '''<style>@page{size:21cm 29.7cm;margin:2cm} body{font-family:${hsFont()}}</style></head><body>${hsKop(true)}<p style="font-family:Arial;font-size:12px;color:#56677c">''')
rep('''        <button class="btn btn-o btn-sm" data-act="print" data-i="${i}">Print / PDF</button>''', '''        <button class="btn btn-o btn-sm" data-act="print" data-i="${i}">Print / PDF</button>
        <button class="btn btn-o btn-sm" data-act="social" data-i="${i}">${icon("share",16)} Deel op social</button>''')
rep('''    if (b.dataset.act==="mail") toast(await copyRich(tplHtml(s.tekst), tplPlain(s.tekst), $(`[data-prev="${b.dataset.i}"]`))?"Gekopieerd: plak in je e-mail":"Kopiëren lukte niet");''',
    '''    if (b.dataset.act==="mail") toast(await copyRich(hsKop(true)+tplHtml(s.tekst), tplPlain(s.tekst), $(`[data-prev="${b.dataset.i}"]`))?"Gekopieerd: plak in je e-mail":"Kopiëren lukte niet");
    if (b.dataset.act==="social") openSocial({ titel:fillTpl(s.onderwerp), tekst:tekstVanSjabloon(s.tekst), tags:ITEMS.find(x=>x.id===prefix)?.tags||[], link:HS.web });''')
rep('''<p class="hint">Blijft alleen in dit tabblad. Lege velden blijven als [placeholder] staan.</p></div>''',
    '''<p class="hint">Blijft alleen in dit tabblad. Lege velden blijven als [placeholder] staan. <a href="#/huisstijl">Logo, kleuren en lettertype instellen →</a></p></div>''')

# ---------- uitnodigingsmail ----------
rep('''<button class="btn btn-o btn-sm" id="um-word">${icon("download",16)} Word</button></div></div>`;''',
    '''<button class="btn btn-o btn-sm" id="um-word">${icon("download",16)} Word</button><button class="btn btn-o btn-sm" id="um-social">${icon("share",16)} Deel op social</button></div></div>`;''')
rep('''                       .replace("{link}", defLink());''', '''                       .replace("{link}", hsLink(defLink()));''')
rep('''  $("#um-word").onclick = () =>''', '''  $("#um-social").onclick = () => openSocial({ titel:u.o, tekst:tekstVanSjabloon(u.x.replace(/^.*\\{link\\}.*$/m,"")), link:hsLink(defLink()), tags:ITEMS.find(x=>x.id===id)?.tags||[] });
  $("#um-word").onclick = () =>''')

# ---------- kennisbank ----------
rep('''          <button class="btn btn-o btn-sm" data-kblink="${esc(s)}">${icon("share",16)} Kopieer link</button>''',
    '''          <button class="btn btn-o btn-sm" data-kblink="${esc(s)}">${icon("link",16)} Kopieer link</button>
          <button class="btn btn-o btn-sm" data-kbsocial="${esc(s)}">${icon("share",16)} Deel op social</button>''')
rep('''    $$("[data-kblink]").forEach(b=>b.onclick=async()=>{''', '''    $$("[data-kbsocial]").forEach(b=>b.onclick=()=>{ const a=KB.find(x=>kbSlug(x)===b.dataset.kbsocial); openSocial({ titel:a.t, tekst:(a.b||"").replace(/^• /gm,"• "), tags:[a.th,"hypotheek"], link:HS.web||a.u }); });
    $$("[data-kblink]").forEach(b=>b.onclick=async()=>{''')

# ---------- social-postbank ----------
rep('''function postSvg(q, size=1080){
  const i = ICONS[q.ic]; if (!i) return "";''', '''function postSvg(q, size=1080){
  if (!ICONS[q.ic]) return "";
  return brandSvg({ titel:q.t, ic:q.ic, w:1080, h:1080, maat: size==="100%" ? "100%" : null });
}
function postSvgOud(q, size=1080){
  const i = ICONS[q.ic]; if (!i) return "";''')
rep('''        <a class="btn btn-o btn-sm" href="#/item/${q.i}">Materiaal →</a>''', '''        <button class="btn btn-y btn-sm" data-sosh="${i}">${icon("share",16)} Delen &amp; formaten</button>
        <a class="btn btn-o btn-sm" href="#/item/${q.i}">Materiaal →</a>''')
rep('''    $$("[data-sp]").forEach(b=>b.onclick=async()=>''', '''    $$("[data-sosh]").forEach(b=>b.onclick=()=>{ const q=POSTS[+b.dataset.sosh]; openSocial({ titel:q.t, tekst:q.x.replace(/\\n*👉 \\{link\\}\\s*$/,"").trim(), tags:q.h.split(/\\s+/), ic:q.ic||kiesIcoon(q.t), link:sp.link||HS.web||"" }); });
    $$("[data-sp]").forEach(b=>b.onclick=async()=>''')
rep('''      <p class="hint">Tip: zet de link op LinkedIn in de eerste reactie in plaats van in de post; dat geeft vaak meer bereik.</p></div>''',
    '''      <p class="hint">Tip: zet de link op LinkedIn in de eerste reactie in plaats van in de post; dat geeft vaak meer bereik. Met ‘Delen &amp; formaten’ krijg je teksten voor LinkedIn, Facebook en Instagram en afbeeldingen in vier formaten. <a href="#/huisstijl">Eigen logo, kleuren en lettertype →</a></p></div>''')

# ---------- formulier-Word ----------
t = t.replace('''$("#fm-word").onclick = () => { download(`formulier-${slug(f.titel)}.doc`, "\\ufeff"+`''', '''$("#fm-word").onclick = () => { download(`formulier-${slug(f.titel)}.doc`, "\\ufeff"+`''')

open(p, 'w', encoding='utf-8').write(t)
print('patch 12 ok')

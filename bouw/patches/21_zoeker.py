"""Zoeker: inhoud van items doorzoekbaar (selecties, rekentools, vragen, sjablonen), pagina-treffers, extra synoniemen."""
import os
B = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
p = os.path.join(B, 'template.html')
s = open(p, encoding='utf-8').read()

def rep(a, b):
    global s
    assert s.count(a) == 1, (a[:80], s.count(a))
    s = s.replace(a, b)

# 1. haystack: extra zoektekst per item
rep('    r: norm([i.summary,i.by,', '    r: norm([i.summary,i.zoek||"",i.by,')

# 2. zoektekst vullen zodra alle data bestaat, en de index opnieuw opbouwen
rep('vulFooterPartners();\n', '''vulFooterPartners();
/* Zoekindex aanvullen met de inhoud van items (na het laden van alle data) */
(function(){
  const zet = (id, tekst) => { const i = ITEMS.find(x=>x.id===id); if (i) i.zoek = ((i.zoek||"") + " " + tekst).trim(); };
  zet("portefeuillesignalen", SELECTIES.flatMap(g=>[g.g, g.d, ...g.s.map(x=>x[0])]).join(" ") + " " + SIGNALEN.map(x=>x[1]+" "+x[2]).join(" "));
  const rt = REKENTOOLS.flatMap(g=>[g.g, ...g.t.map(x=>x[0])]).join(" ");
  zet("websitetools-2-maanden", rt);
  zet("hypotheekrente-tools", REKENTOOLS.filter(g=>/rente/i.test(g.g)).flatMap(g=>g.t.map(x=>x[0])).join(" "));
  ITEMS.forEach(i=>{
    if (i.data && i.data.sjablonen) zet(i.id, i.data.sjablonen.map(x=>x.naam+" "+x.onderwerp).join(" "));
    if (i.data && i.data.punten) zet(i.id, i.data.punten.join(" "));
    if (i.kind==="check" && CHECKS[i.id]) zet(i.id, CHECKS[i.id].h1+" "+CHECKS[i.id].secties.flatMap(x=>[x.titel, ...x.items.map(q=>q.q)]).join(" "));
    if (i.kind==="form") { const f = FORMS.find(x=>x.id===i.id); if (f) zet(i.id, f.stappen.flatMap(x=>[x.titel, ...x.vragen.map(q=>q.v)]).join(" ")); }
  });
  zet("verzekeringscheck", Object.values(VC_Q).flatMap(x=>[x.titel, ...x.items.map(q=>q.q)]).join(" "));
  zet("woontoekomst-check", WTC_Q.map(q=>q.title+" "+q.options.map(o=>Array.isArray(o)?o.join(" "):o).join(" ")).join(" "));
  ITEMS.forEach(i=>HAY.set(i.id, haystack(i)));
})();
''')

# 3. pagina-treffers boven de resultaten
rep('''    <div class="grid" id="grid"></div>
    <div id="kb-hits"></div>''', '''    <div id="page-hits"></div>
    <div class="grid" id="grid"></div>
    <div id="kb-hits"></div>''')
rep('''    const kbBox = $("#kb-hits");''', '''    const pgBox = $("#page-hits");
    const pgHits = T.length ? PAGINAS.filter(pg=>T.every(x=>{ const h=norm(pg.t+" "+pg.z); return [x,...(SYN[x]||[]).map(norm)].some(y=>h.includes(y)); })) : [];
    if (pgBox) pgBox.innerHTML = pgHits.length ? `<div class="page-hits">${pgHits.map(pg=>`<a class="cut" href="${pg.h}"><span class="hexi">${icon(pg.ic,16)}</span><span><b>${highlight(pg.t,T)}</b><small>${esc(pg.d)}</small></span><span aria-hidden="true">→</span></a>`).join("")}</div>` : "";
    const kbBox = $("#kb-hits");''')
rep('  const grid=$("#grid");', '''  const PAGINAS = [
    {t:"Jouw huisstijl", d:"Logo, kleuren en lettertype instellen, bewaren en laden", h:"#/huisstijl", ic:"partner", z:"huisstijl logo kleur kleuren lettertype font eigen stijl bewaren opslaan laden huisstijlbestand branding"},
    {t:"Marketingkalender", d:"Per maand de klantactiviteiten, met agendabestand", h:"#/kalender", ic:"calendar", z:"kalender agenda planning jaarplanning maand maanden ics jaar activiteiten"},
    {t:"Kennisbank", d:"Korte uitlegartikelen over hypotheken, wonen en fiscaliteit", h:"#/kennisbank", ic:"faq", z:"kennisbank uitleg artikelen begrippen vragen antwoorden faq"},
    {t:"Selecties in PortefeuilleSignalen", d:"Ruim 115 kant-en-klare selecties die direct openen", h:"#/item/portefeuillesignalen", ic:"filter", z:"selecties selectie portefeuille signalen doelgroep"},
    {t:"Vraag of wens indienen", d:"Stel een vraag of vraag nieuw materiaal aan", h:"#/vraag", ic:"contact", z:"vraag wens contact idee feedback aanvragen helpdesk partner aanmelden"},
    {t:"Disclaimer", d:"Gebruik voor eigen rekening en risico", h:"#/disclaimer", ic:"document", z:"disclaimer aansprakelijkheid voorwaarden risico gebruik"}
  ];
  const grid=$("#grid");''')
rep('  .partners-band{padding:8px 0 30px}', '''  .page-hits{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:10px;margin:0 0 16px}
  .page-hits a{display:flex;align-items:center;gap:12px;background:#fff;padding:12px 16px;text-decoration:none;color:var(--ink)}
  .page-hits a:hover{background:var(--y-soft)}
  .page-hits a>span:nth-child(2){flex:1 1 auto;min-width:0}.page-hits small{display:block;color:var(--muted);font-size:.8rem}
  .partners-band{padding:8px 0 30px}''')

# 4. extra synoniemen
rep('''"hypotheekrente":["rente","renteoverzicht","rente-api"],''',
    '''"hypotheekrente":["rente","renteoverzicht","rente-api"], "oversluitboete":["boete","boeterente","boetevrij"], "boeterente":["boete","boetevrij"], "55":["55+","55-plus","senioren","woontoekomst"], "plus":["+"], "60":["60+","senioren"], "senioren":["55+","60+","woontoekomst","verzilver"], "ouderen":["senioren","55+","woontoekomst"], "zzp":["ondernemer","zzp'er"], "ondernemers":["ondernemer","kvk"],''')
open(p, 'w', encoding='utf-8').write(s)
print('patch 21 ok')

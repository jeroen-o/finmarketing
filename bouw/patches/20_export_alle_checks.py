"""HTML-download voor alle klantchecks, verzekeringscheck en formulieren; Google Sites-zin weg; woontoekomst-check in bijmij-design."""
import os
B = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
p = os.path.join(B, 'template.html')
s = open(p, encoding='utf-8').read()

def rep(a, b, n=1):
    global s
    assert s.count(a) == n, (a[:80], s.count(a))
    s = s.replace(a, b)

# placeholder voor export_checks.js
rep('/*__EXPORT__*/\n', '/*__EXPORT__*/\n/*__EXPORT2__*/\n')

# Google Sites-zin weg
rep('''        <p class="hint">Voor een Google Sites-embed: open de link in een nieuw tabblad (mailto werkt niet altijd in een iframe).</p>\n''', '')

# woontoekomst: download via gedeelde exportfunctie
i = s.index('  $("#wa-html").onclick = () => {'); j = s.index('download(`woontoekomst-check', i); j = s.index('\n', j) + 1
s = s[:i] + '  bindExport("#wa-html", { n:"#wa-n", k:"#wa-k", m:"#wa-m" }, cfg => woontoekomstHtml(cfg), "woontoekomst-check");\n' + s[j:]

# knoppen bij checks, verzekeringscheck en formulieren
for pre in ['ca', 'va', 'fa']:
    a = f'''        <div class="actions" style="margin-top:10px"><button class="btn btn-k btn-sm" id="{pre}-link">Kopieer deellink</button></div>'''
    rep(a, f'''        <div class="actions" style="margin-top:10px;flex-direction:row;flex-wrap:wrap"><button class="btn btn-k btn-sm" id="{pre}-link">Kopieer deellink</button>${{exportKnop("{pre}-html")}}</div>
        ${{EXPORT_UITLEG}}''')
rep('''  $("#ca-link").onclick = async () => toast(await copyText(deellink()) ? "Deellink gekopieerd" : "Kopiëren lukte niet");''',
    '''  $("#ca-link").onclick = async () => toast(await copyText(deellink()) ? "Deellink gekopieerd" : "Kopiëren lukte niet");
  bindExport("#ca-html", { n:"#ca-n", k:"#ca-k", t:"#ca-t", m:"#ca-m" }, cfg => checkHtml(C, cfg), item.id);''')
rep('''  $("#va-link").onclick = async () => toast(await copyText(deellink()) ? "Deellink gekopieerd" : "Kopiëren lukte niet");''',
    '''  $("#va-link").onclick = async () => toast(await copyText(deellink()) ? "Deellink gekopieerd" : "Kopiëren lukte niet");
  bindExport("#va-html", { n:"#va-n", k:"#va-k", t:"#va-t", m:"#va-m" }, cfg => checkHtml(VC_ALS_CHECK(), cfg), "check-opstal-inboedel");''')
i = s.index('  $("#fa-link").onclick = async () => {'); j = s.index('\n', i) + 1
while not s[j:].startswith('  ') or s[j:].startswith('    '):
    j = s.index('\n', j) + 1
s = s[:i] + s[i:j] + '  bindExport("#fa-html", { n:"#fa-n", k:"#fa-k", t:"#fa-t", m:"#fa-m" }, cfg => formExportHtml(f, cfg), item.id);\n' + s[j:]

# woontoekomst-check op de site: intro en kaart in bijmij-design
rep('''      root.innerHTML = `<div class="eyebrow" style="color:var(--y-ink)">De woontoekomst-check</div>
        <h2 style="font-size:1.6rem;margin-bottom:12px">Blijven of gaan? Vier vragen over hoe jij later wilt wonen.</h2>''',
    '''      root.innerHTML = `<div class="bm-eyebrow">De woontoekomst-check</div>
        <h2 class="bm-h">Blijven of gaan? <em>Vier vragen</em><br>over hoe jij later wilt wonen.</h2>''')
rep('''        <p>Bijna negen op de tien huiseigenaren van 55 jaar en ouder hebben nagedacht over hoe ze later willen wonen. De helft heeft daar nog niets mee gedaan. Een aantal geldverstrekkers kijkt eerder en strenger naar je inkomen na pensionering. Verandert er niets aan je hypotheek, dan merk je daar niets van. Heb je plannen met je woning, dan wil je dit weten voordat je een stap zet.</p>''',
    '''        <p class="bm-lead">Bijna negen op de tien huiseigenaren van 55 jaar en ouder hebben nagedacht over hoe ze later willen wonen. De helft heeft daar nog niets mee gedaan.</p>
        <div class="bm-callout">Een aantal geldverstrekkers kijkt eerder en strenger naar je inkomen na pensionering. <b>Verandert er niets aan je hypotheek, dan merk je daar niets van.</b> Heb je plannen met je woning, dan wil je dit weten voordat je een stap zet.</div>''')
rep('''<section><div class="panel cut" id="wtc" style="max-width:720px;padding:28px"></div></section>''',
    '''<section><div class="panel bm-card" id="wtc"></div></section>''')
rep('  .partners-band{padding:8px 0 30px}', '''  /* woontoekomst-check: design naar bijmij.nl */
  .bm-card{--bm-gold:#b7893a;--bm-gold-text:#8a6420;--bm-tint:#f4ecdb;--bm-navy:#16233b;--bm-line:#e7e0d3;max-width:760px;background:#fff;border:1px solid var(--bm-line);border-radius:18px;box-shadow:0 20px 50px -28px rgba(22,35,59,.28);padding:clamp(22px,4vw,44px)!important;font-family:Inter,system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
  .bm-card h2{font-family:Fraunces,"Iowan Old Style","Palatino Linotype",Georgia,serif;font-weight:500;color:var(--bm-navy);letter-spacing:-.01em}
  .bm-card .bm-h{font-size:clamp(1.6rem,3.6vw,2.3rem);line-height:1.15;margin:0 0 14px}.bm-card h2 em{font-style:normal;color:var(--bm-gold)}
  .bm-eyebrow{display:flex;align-items:center;gap:12px;font-size:.75rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--bm-gold-text);margin-bottom:14px}
  .bm-eyebrow::before{content:"";width:28px;height:1px;background:var(--bm-gold)}
  .bm-lead{color:#5c6577;font-size:1.05rem}.bm-callout{background:var(--bm-tint);border-radius:12px;padding:16px 20px;margin:16px 0 22px}
  .bm-card .btn{border-radius:999px;padding:13px 24px}.bm-card .btn-k{background:var(--bm-gold);color:#fff}.bm-card .btn-o{border:1px solid var(--bm-line);color:var(--bm-navy)}
  .bm-card .wtc-opt{border-radius:12px!important}.bm-card .progress i{background:var(--bm-gold)}
  .partners-band{padding:8px 0 30px}''')
open(p, 'w', encoding='utf-8').write(s)
print('patch 20 ok')

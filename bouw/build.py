"""Bouwt index.html en brochure.html uit bouw/template.html + bouw/data/*.
Gebruik: python3 bouw/build.py  (vanuit de repo-root of vanuit bouw/)"""
import json, os
B = os.path.dirname(os.path.abspath(__file__))
R = os.path.dirname(B)
rd = lambda p: open(os.path.join(B, p), encoding='utf-8').read()
logo = rd('data/logo.b64').strip()
icons_js = rd('data/icons.js')

t = rd('template.html')
t = t.replace('__LOGO__', logo).replace('__CONTACT__', 'jeroen.oversteegen@blinqx.tech')
trhk = json.loads(rd('data/trhk2027.json')); trhk.update({'alleenGrens': 31000, 'alleenBedrag': 18000})
t = t.replace('/*__TRHK__*/', 'const TRHK = ' + json.dumps(trhk, separators=(',', ':')) + ';')
for ph, f in [('/*__CAMP__*/', 'camp.js'), ('/*__SCHADE__*/', 'schade.js'), ('/*__FORMS__*/', 'formulieren.js'), ('/*__EXTRA__*/', 'extra.js'), ('/*__EXTRA2__*/', 'extra2.js'), ('/*__HS__*/', 'huisstijl.js'), ('/*__EXPORT__*/', 'export_woontoekomst.js'), ('/*__PARTNERS__*/', 'partners.js'), ('/*__NB__*/', 'nb.js'), ('/*__ICONS__*/', 'icons.js'), ('/*__CARDS__*/', 'cards.js'), ('/*__KB__*/', 'kb.js')]:
    t = t.replace(ph, rd('data/' + f))
open(os.path.join(R, 'index.html'), 'w', encoding='utf-8').write(t)

ic = json.loads(icons_js.split('const ICONS = ', 1)[1].split(';\n', 1)[0])
def svg(n, s=22):
    v, i = ic[n]
    return f'<svg width="{s}" height="{s}" viewBox="{v}" aria-hidden="true">{i}</svg>'
bt = rd('brochure.tpl.html').replace('__LOGO__', logo)
for k, n in {'↻': 'repeat', '⌂': 'moving', '↓': 'percentage', '✓': 'check mark', '€': 'euro', '♡': 'handshake', '☏': 'contact'}.items():
    bt = bt.replace('<span class="ic hex">' + k + '</span>', '<span class="ic hex">' + svg(n) + '</span>')
open(os.path.join(R, 'brochure.html'), 'w', encoding='utf-8').write(bt)
print('gebouwd: index.html', len(t), '| brochure.html', len(bt))
import subprocess, shutil
if shutil.which('node'):
    subprocess.run(['node', os.path.join(B, 'seo.js')], check=True)
else:
    print('let op: node ontbreekt, SEO-pagina\'s niet bijgewerkt')

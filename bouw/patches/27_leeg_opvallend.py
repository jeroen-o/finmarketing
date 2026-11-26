"""'Niets gevonden' opvallender: gele kopbalk met icoon, dikke rand."""
import os
B = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
p = os.path.join(B, 'template.html')
s = open(p, encoding='utf-8').read()
def rep(a, b):
    global s
    assert s.count(a) == 1, (a[:80], s.count(a))
    s = s.replace(a, b)
rep('''            <h3>${q ? `Geen resultaten voor “${esc(q)}”` : "Geen resultaten met deze filters"}</h3>''',
    '''            <div class="leeg-kop"><span class="leeg-ico" aria-hidden="true">?</span><div><b>Niets gevonden</b><h3>${q ? `Geen resultaten voor “${esc(q)}”` : "Geen resultaten met deze filters"}</h3></div></div>''')
rep('''  .leeg{background:#fff;border:1px solid var(--line);padding:28px clamp(16px,4vw,36px);''',
    '''  .leeg{background:#fff;border:3px solid var(--k);padding:0 clamp(16px,4vw,36px) 28px;''')
rep('''  .leeg h3{margin:0 0 12px;font-size:1.3rem}''',
    '''  .leeg-kop{display:flex;gap:14px;align-items:center;background:var(--y);margin:0 calc(-1 * clamp(16px,4vw,36px)) 18px;padding:18px clamp(16px,4vw,36px)}
  .leeg-kop b{display:block;font-size:.78rem;text-transform:uppercase;letter-spacing:.08em}
  .leeg-ico{flex:none;width:44px;height:44px;border-radius:50%;background:var(--k);color:var(--y);display:grid;place-items:center;font-weight:900;font-size:1.5rem}
  .leeg h3{margin:2px 0 0;font-size:1.35rem;line-height:1.25;overflow-wrap:anywhere}''')
open(p, 'w', encoding='utf-8').write(s)
print('patch 27 ok')

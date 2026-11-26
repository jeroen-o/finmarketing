"""PortefeuilleSignalen-pagina strakker uitlijnen + navigatie-item 'Selecties'."""
import os, re
B = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
p = os.path.join(B, 'template.html')
s = open(p, encoding='utf-8').read()

def rep(a, b, n=1):
    global s
    assert s.count(a) == n, (a[:70], s.count(a))
    s = s.replace(a, b)

# 1. Navigatie: Selecties na Campagnes
rep('      <a href="#/?cat=campagnes" data-nav="campagnes">Campagnes</a>\n',
    '      <a href="#/?cat=campagnes" data-nav="campagnes">Campagnes</a>\n      <a href="#/item/portefeuillesignalen" data-nav="selecties">Selecties</a>\n')
rep('function viewSignalen(item){\n  setNav("home");', 'function viewSignalen(item){\n  setNav("selecties");')

# 2. Signaalkaarten: inhoud van het uitklapblok in twee kolommen
rep('''        <ol class="steps" style="margin:8px 0 10px;font-size:.88rem">${stappen.map(x=>`<li>${esc(x)}</li>`).join("")}</ol>
        <div class="links">''', '''        <div class="sig-body"><div><h4>Zo werkt het</h4><ol class="steps" style="margin:0;font-size:.88rem">${stappen.map(x=>`<li>${esc(x)}</li>`).join("")}</ol></div>
        <div><h4>Direct naar</h4><div class="links">''')
i = s.index('<div class="sig-body">'); j = s.index('</div>\n        <p class="hint" style="margin:8px 0 0">Selecties met ↗', i)
s = s[:j] + '</div></div></div>' + s[j + len('</div>'):]

# 3. Selectieknoppen in een raster met vaste kolommen (breedte op basis van het langste label in de groep)
rep('''        <div class="chan">${s.map(([x,doel])=>{ const st="font-size:.82rem;padding:6px 10px;font-weight:700;text-decoration:none;";''',
    '''        <div class="sel-grid" style="--selw:${Math.min(330, Math.max(96, Math.max(...s.map(([x])=>x.length))*7.2+44))}px">${s.map(([x,doel])=>{ const st="";''')

s = s.replace('${highlight(x,T)} ↗</a>`;', '<span>${highlight(x,T)}</span><small>↗</small></a>`;')
s = s.replace('${highlight(x,T)} · zelf instellen ↗</a>`;', '<span>${highlight(x,T)}</span><small>↗</small></a>`;')
s = s.replace('${highlight(x,T)} →</a>`;}).join("")}</div></div>`;', '<span>${highlight(x,T)}</span><small>→</small></a>`;}).join("")}</div></div>`;')
# 4. CSS
rep('  .sig-cards{align-items:start}\n', '''  .sig-cards{align-items:stretch;grid-template-columns:repeat(auto-fill,minmax(240px,1fr))}
  .sig-cards .cat .h{min-height:46px;align-items:center}
  .sig-cards .cat .h h3{line-height:1.2}
  .sig-cards .cat>p{flex:1 1 auto;margin:0}
  .sig-cards .sig-meer{margin-top:4px}
  .sig-cards .cat:has(.sig-meer[open]){grid-column:1/-1}
  .sig-body{display:grid;grid-template-columns:minmax(0,1.2fr) minmax(0,1fr);gap:18px;margin-top:12px}
  .sig-body h4{font-size:.75rem;text-transform:uppercase;letter-spacing:.06em;color:var(--muted);margin:0 0 8px}
  .sel-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(var(--selw),1fr));gap:6px}
  .sel-grid a{display:flex;justify-content:space-between;align-items:center;gap:8px;font-size:.82rem;padding:8px 10px;font-weight:700;text-decoration:none;min-height:36px;line-height:1.25}
  @media (max-width:760px){ .sig-body{grid-template-columns:1fr} .sel-grid{grid-template-columns:repeat(auto-fill,minmax(min(100%,var(--selw)),1fr))} }
''')
open(p, 'w', encoding='utf-8').write(s)
print('patch 16 ok')

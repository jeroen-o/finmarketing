"""Campagnes-categorie: blok 'Bekijk alle selecties'; signaalkaarten: geen gaten bij openklappen."""
import os
B = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
p = os.path.join(B, 'template.html')
s = open(p, encoding='utf-8').read()

def rep(a, b):
    global s
    assert s.count(a) == 1, (a[:70], s.count(a))
    s = s.replace(a, b)

rep('''    <div class="grid" id="grid"></div>
    <div id="kb-hits"></div>''', '''    <a class="sel-promo cut" id="sel-promo" href="#/item/portefeuillesignalen" hidden>
      <span class="hexi">${icon("filter",20)}</span>
      <span class="t"><b>Bekijk alle selecties</b><span>Ruim 115 kant-en-klare selecties in PortefeuilleSignalen: einde rentevast, topafslag, aflossingsvrij, LTV, verjaardagen en meer. Eén klik en de selectie opent direct.</span></span>
      <span class="btn btn-k btn-sm">Naar de selecties →</span></a>
    <div class="grid" id="grid"></div>
    <div id="kb-hits"></div>''')
rep('''    $("#res-title").textContent = state.cat==="alle" ? (T.length?"Zoekresultaten":"Alle materialen") : catOf(state.cat).title;''',
    '''    $("#res-title").textContent = state.cat==="alle" ? (T.length?"Zoekresultaten":"Alle materialen") : catOf(state.cat).title;
    $("#sel-promo").hidden = state.cat!=="campagnes";''')
rep('  .sig-cards{align-items:stretch;', '  .sig-cards{align-items:stretch;grid-auto-flow:row dense;')
rep('  .partners-band{padding:8px 0 30px}', '''  .sel-promo{display:flex;align-items:center;gap:16px;background:var(--y);color:var(--k);text-decoration:none;padding:16px 20px;margin:0 0 18px}
  .sel-promo[hidden]{display:none}
  .sel-promo .t{display:flex;flex-direction:column;gap:2px;flex:1 1 auto;min-width:0}
  .sel-promo .t b{font-size:1.05rem}
  .sel-promo .t span{font-size:.9rem}
  .sel-promo .btn{flex:none}
  .sel-promo:hover .btn{background:#222}
  @media (max-width:640px){ .sel-promo{flex-wrap:wrap} .sel-promo .btn{width:100%} }
  .partners-band{padding:8px 0 30px}''')
open(p, 'w', encoding='utf-8').write(s)
print('patch 17 ok')

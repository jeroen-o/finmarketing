"""Zoekknop bij de zoekvelden; Enter/Zoek op het toetsenbord sluit het toetsenbord en toont de resultaten."""
import os
B = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
p = os.path.join(B, 'template.html')
s = open(p, encoding='utf-8').read()

def rep(a, b):
    global s
    assert s.count(a) == 1, (a[:80], s.count(a))
    s = s.replace(a, b)

# zoekveld bij de resultaten
rep('''      <input id="fq" type="search" placeholder="Zoek op titel, onderwerp of partner… (toets /)" value="${esc(state.q)}" autocomplete="off">''',
    '''      <span class="zoekveld"><input id="fq" type="search" enterkeyhint="search" placeholder="Zoek op titel, onderwerp of partner… (toets /)" value="${esc(state.q)}" autocomplete="off"><button type="button" class="zoekknop" id="fq-go" aria-label="Zoeken">Zoek →</button></span>''')
rep('''  $("#fq").addEventListener("input", e=>syncQ(e.target.value));''',
    '''  $("#fq").addEventListener("input", e=>syncQ(e.target.value));
  const toonResultaten = () => { syncQ($("#fq").value); $("#fq").blur(); $("#hq").blur(); setTimeout(()=>($("#page-hits").innerHTML ? $("#page-hits") : $("#grid")).scrollIntoView({behavior:"smooth", block:"start"}), 80); };
  $("#fq").addEventListener("keydown", e=>{ if (e.key==="Enter"){ e.preventDefault(); toonResultaten(); } });
  $("#fq-go").addEventListener("click", toonResultaten);''')
rep('''          <input id="hq" type="search" placeholder''', '''          <input id="hq" type="search" enterkeyhint="search" placeholder''')
rep('''  $("#hero-search").addEventListener("submit", e=>{ e.preventDefault(); $("#resultaten").scrollIntoView({behavior:"smooth"}); });''',
    '''  $("#hero-search").addEventListener("submit", e=>{ e.preventDefault(); $("#hq").blur(); $("#resultaten").scrollIntoView({behavior:"smooth"}); });''')

# selecties (PortefeuilleSignalen)
rep('''<div class="filterbar"><label class="sr" for="sel-q">Zoek een selectie</label><input type="search" id="sel-q" placeholder="Zoek op relaties… bijv. aflosvrij, LTV, jarig, ORV"></div>''',
    '''<div class="filterbar"><label class="sr" for="sel-q">Zoek een selectie</label><span class="zoekveld"><input type="search" id="sel-q" enterkeyhint="search" placeholder="Zoek op relaties… bijv. aflosvrij, LTV, jarig, ORV"><button type="button" class="zoekknop" id="sel-go" aria-label="Zoeken">Zoek →</button></span></div>''')
rep('''  $("#sel-q").addEventListener("input", draw); draw();''',
    '''  $("#sel-q").addEventListener("input", draw); draw();
  const selToon = () => { draw(); $("#sel-q").blur(); setTimeout(()=>$("#sel-list").scrollIntoView({behavior:"smooth", block:"start"}), 80); };
  $("#sel-q").addEventListener("keydown", e=>{ if (e.key==="Enter"){ e.preventDefault(); selToon(); } });
  $("#sel-go").addEventListener("click", selToon);''')

# kennisbank: toetsenbord sluiten bij zoeken
rep('''  $("#kb-form").addEventListener("submit", ()=>$("#kb-title").scrollIntoView({behavior:"smooth"}));''',
    '''  $("#kb-form").addEventListener("submit", ()=>{ $("#kb-q").blur(); $("#kb-title").scrollIntoView({behavior:"smooth"}); });''')
rep('''      <input id="kb-q" type="search" placeholder''', '''      <input id="kb-q" type="search" enterkeyhint="search" placeholder''')

# CSS
rep('  .filterbar input[type=search]{flex:1 1 240px;min-width:0;padding:9px 12px;border:1px solid var(--line);background:#fff}',
    '''  .filterbar input[type=search]{flex:1 1 240px;min-width:0;padding:9px 12px;border:1px solid var(--line);background:#fff}
  .filterbar .zoekveld{display:flex;flex:1 1 280px;min-width:0}
  .filterbar .zoekveld input[type=search]{flex:1 1 auto;border-right:0}
  .zoekknop{flex:none;border:0;background:var(--k);color:#fff;font-weight:800;padding:0 16px;cursor:pointer;font-size:.92rem}
  .zoekknop:hover{background:#222}
  @media (max-width:560px){ .filterbar .zoekveld{flex:1 1 100%} .filterbar input[type=search]{font-size:16px;padding:11px 12px} .zoekknop{padding:0 14px} }''')
open(p, 'w', encoding='utf-8').write(s)
print('patch 23 ok')

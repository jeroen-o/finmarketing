"""Kennisbanktreffers in de hoofdzoeker, 'laatst bijgewerkt', skip-link."""
import os
p = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'template.html')
t = open(p, encoding='utf-8').read()


def rep(a, b, cnt=1):
    global t
    assert t.count(a) == cnt, (a[:70], t.count(a))
    t = t.replace(a, b)


rep('''    $("#reset2")?.addEventListener("click", resetAll);
  }''', '''    $("#reset2")?.addEventListener("click", resetAll);
    // Kennisbank-treffers
    const kbHits = T.length ? KB.filter(a=>T.every(x=>norm(a.t+" "+a.b).includes(x))).sort((a,b)=>(T.some(x=>norm(a.t).includes(x))?0:1)-(T.some(x=>norm(b.t).includes(x))?0:1)) : [];
    const kbBox = $("#kb-hits");
    if (kbBox) kbBox.innerHTML = kbHits.length ? `<div class="panel cut" style="margin-top:18px"><h2><span class="hexi">${icon("faq",18)}</span>Ook in de kennisbank: ${kbHits.length} ${kbHits.length===1?"artikel":"artikelen"}</h2>
      <div class="links">${kbHits.slice(0,5).map(a=>`<a href="#/kennisbank?a=${esc(kbSlug(a))}"><span>${highlight(a.t,T)}</span><small>→</small></a>`).join("")}</div>
      ${kbHits.length>5?`<p class="hint"><a href="#/kennisbank" id="kb-more">Alle ${kbHits.length} artikelen bekijken →</a></p>`:""}</div>` : "";
    $("#kb-more")?.addEventListener("click", ()=>{ kbState.q = state.q; });
  }''')
rep('''    <div class="grid" id="grid"></div>''', '''    <div class="grid" id="grid"></div>
    <div id="kb-hits"></div>''')
rep('''<body>
''', '''<body>
<a href="#app" class="sr skip" onclick="event.preventDefault();document.getElementById('app').focus();document.getElementById('app').scrollIntoView()">Naar de inhoud</a>
''')
rep('''  .sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}''', '''  .sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}
  .skip:focus{position:fixed;left:12px;top:12px;width:auto;height:auto;clip:auto;z-index:100;background:var(--k);color:#fff;padding:10px 14px;font-weight:800}''')
rep('''<span>Tarieven premium-onderdelen: op aanvraag, tenzij anders vermeld</span></div>''', '''<span>Tarieven premium-onderdelen: op aanvraag, tenzij anders vermeld</span><span>Laatst bijgewerkt: 26 november 2026</span><a href="#/disclaimer">Disclaimer</a></div>''')
open(p, 'w', encoding='utf-8').write(t)
print('ok')

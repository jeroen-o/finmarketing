"""Zoeker: zeldzame woorden wegen zwaarder (idf) en bij nul resultaten de beste gedeeltelijke treffers."""
import os
B = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
p = os.path.join(B, 'template.html')
s = open(p, encoding='utf-8').read()

def rep(a, b):
    global s
    assert s.count(a) == 1, (a[:80], s.count(a))
    s = s.replace(a, b)

# scoreItem: optioneel gewicht per term en een 'deels'-modus
rep('''function scoreItem(i, terms){
  if (!terms.length) return 1;
  const h = HAY.get(i.id); let total = 0;
  for (const t of terms){''', '''function scoreItem(i, terms, gew, deels){
  if (!terms.length) return 1;
  const h = HAY.get(i.id); let total = 0, raak = 0;
  for (const t of terms){''')
rep('''    if (!best){
      const c = corrigeer(t);
      if (c){ if (h.t.includes(c)) best = 4; else if (h.g.includes(c)) best = 2.4; else if (h.r.includes(c)) best = .8; }
      if (!best) return 0;
      if (!LAATSTE_CORRECTIES.some(x=>x[0]===t)) LAATSTE_CORRECTIES.push([t, c]);
    }
    total += best;
  }
  return total;
}''', '''    if (!best){
      const c = corrigeer(t);
      if (c){ if (h.t.includes(c)) best = 4; else if (h.g.includes(c)) best = 2.4; else if (h.r.includes(c)) best = .8; }
      if (!best){ if (deels) continue; return 0; }
      if (!LAATSTE_CORRECTIES.some(x=>x[0]===t)) LAATSTE_CORRECTIES.push([t, c]);
    }
    raak++; total += best * (gew ? gew[t] || 1 : 1);
  }
  return deels ? (raak ? total + raak * 100 : 0) : total;
}
/* Zeldzame woorden wegen zwaarder: gewicht = 1 + ln(N / (1 + aantal items met het woord)) */
function termGewicht(T){
  const g = {}, N = ITEMS.length;
  for (const t of T){ let df = 0; for (const i of ITEMS) if (scoreItem(i, [t])) df++; g[t] = 1 + Math.log(N / (1 + df)); }
  return g;
}''')

# draw: gewicht gebruiken en terugvallen op gedeeltelijke treffers
rep('''    LAATSTE_CORRECTIES = [];
    let list = ITEMS.map(i=>({i, s:scoreItem(i,T)}))''', '''    LAATSTE_CORRECTIES = [];
    const GEW = T.length > 1 ? termGewicht(T) : null;
    let DEELS = false;
    let list = ITEMS.map(i=>({i, s:scoreItem(i,T,GEW)}))''')
rep('''    if (T.length) list.sort((a,b)=>b.s-a.s);''', '''    if (!list.length && T.length > 1){
      DEELS = true;
      list = ITEMS.map(i=>({i, s:scoreItem(i,T,GEW,true)})).filter(x=>x.s>0 &&
        (state.cat==="alle"||x.i.cat===state.cat) && (state.model==="alle"||x.i.model===state.model) && (state.by==="alle"||x.i.by===state.by));
    }
    if (T.length) list.sort((a,b)=>b.s-a.s);''')
rep('''    $("#zoek-hulp").innerHTML = corr.length && list.length ?''', '''    $("#zoek-hulp").innerHTML = DEELS && list.length ? `<p class="zoek-hulp">Geen resultaten met álle woorden. Dit zijn de beste treffers met een deel ervan.</p>` : corr.length && list.length ?''')
open(p, 'w', encoding='utf-8').write(s)
print('patch 25 ok')

"""Slimmere zoeker: stopwoorden, woordvormen, typfouten ('Bedoelde je'), suggesties; label 'Model' wordt 'Prijs'."""
import os
B = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
p = os.path.join(B, 'template.html')
s = open(p, encoding='utf-8').read()

def rep(a, b):
    global s
    assert s.count(a) == 1, (a[:80], s.count(a))
    s = s.replace(a, b)

# 1. stopwoorden
rep('const terms = q => norm(q).split(/[\\s,]+/).filter(Boolean);',
    '''const STOP = new Set("de het een en of van voor op in aan met naar bij om te tot uit over als dan dat die dit is zijn ben was wat hoe waar wie welke wanneer waarom ik je jij u uw mijn jouw onze ons we wij hun zij kan kun kunnen wil wilt moet mag zou ook nog er niet geen wel meer veel".split(" "));
const terms = q => { const t = norm(q).split(/[\\s,?!.:;()"]+/).filter(Boolean); const zonder = t.filter(w=>!STOP.has(w)); return zonder.length ? zonder : t; };''')

# 2 + 3. woordvormen en typfouten in de score
rep('''function scoreItem(i, terms){
  if (!terms.length) return 1;
  const h = HAY.get(i.id); let total = 0;
  for (const t of terms){
    const alts = [t, ...(SYN[t]||[]).map(norm)];''', '''/* Woordvormen: brieven -> brief, huizen -> huis, verzekeringen -> verzekering, posts -> post */
function vormen(t){
  const v = new Set([t]);
  if (t.length > 4){
    if (/ven$/.test(t)) v.add(t.slice(0,-3)+"f");
    if (/zen$/.test(t)) v.add(t.slice(0,-3)+"s");
    if (/en$/.test(t)) { v.add(t.slice(0,-2)); if (/(.)\\1en$/.test(t)) v.add(t.slice(0,-3)); }
    if (/s$/.test(t)) v.add(t.slice(0,-1));
    if (/'s$/.test(t)) v.add(t.slice(0,-2));
  }
  return [...v];
}
/* Typfouten: dichtstbijzijnde woord uit de teksten van de site (Damerau-Levenshtein, max. 1 of 2) */
let VOCAB = null; const CORR = new Map();
function afstand(a, b){
  if (Math.abs(a.length-b.length) > 2) return 9;
  const d = Array.from({length:a.length+1}, (_,i)=>[i, ...Array(b.length).fill(0)]); for (let j=1;j<=b.length;j++) d[0][j]=j;
  for (let i=1;i<=a.length;i++) for (let j=1;j<=b.length;j++){ const c = a[i-1]===b[j-1]?0:1;
    d[i][j] = Math.min(d[i-1][j]+1, d[i][j-1]+1, d[i-1][j-1]+c); if (i>1&&j>1&&a[i-1]===b[j-2]&&a[i-2]===b[j-1]) d[i][j]=Math.min(d[i][j], d[i-2][j-2]+1); }
  return d[a.length][b.length];
}
function corrigeer(t){
  if (t.length < 4 || /\\d/.test(t)) return null;
  if (CORR.has(t)) return CORR.get(t);
  if (!VOCAB){ const tel = new Map(); for (const h of HAY.values()) for (const w of (h.t+" "+h.g+" "+h.r).split(/[^a-z0-9]+/)) if (w.length>=4) tel.set(w,(tel.get(w)||0)+1); VOCAB = tel; }
  if (VOCAB.has(t)) { CORR.set(t, null); return null; }
  const max = t.length >= 7 ? 2 : 1; let best = null, bd = 9, bc = 0;
  for (const [w, c] of VOCAB){ if (w[0]!==t[0] && t.length<6) continue; const d = afstand(t, w); if (d<=max && (d<bd || (d===bd && c>bc))) { best=w; bd=d; bc=c; } }
  CORR.set(t, best); return best;
}
let LAATSTE_CORRECTIES = [];
function scoreItem(i, terms){
  if (!terms.length) return 1;
  const h = HAY.get(i.id); let total = 0;
  for (const t of terms){
    const alts = [...vormen(t), ...(SYN[t]||[]).map(norm)];''')
rep('''    if (!best) return 0;
    total += best;
  }
  return total;
}''', '''    if (!best){
      const c = corrigeer(t);
      if (c){ if (h.t.includes(c)) best = 4; else if (h.g.includes(c)) best = 2.4; else if (h.r.includes(c)) best = .8; }
      if (!best) return 0;
      if (!LAATSTE_CORRECTIES.some(x=>x[0]===t)) LAATSTE_CORRECTIES.push([t, c]);
    }
    total += best;
  }
  return total;
}''')

# 4. melding 'Bedoelde je' en suggesties bij nul resultaten
rep('''    const T = terms(state.q);
    let list = ITEMS.map(i=>({i, s:scoreItem(i,T)}))''', '''    const T = terms(state.q);
    LAATSTE_CORRECTIES = [];
    let list = ITEMS.map(i=>({i, s:scoreItem(i,T)}))''')
rep('''    $("#count").textContent = `${list.length} ${list.length===1?"resultaat":"resultaten"}${T.length?` voor “${state.q.trim()}”`:""}`;''',
    '''    $("#count").textContent = `${list.length} ${list.length===1?"resultaat":"resultaten"}${T.length?` voor “${state.q.trim()}”`:""}`;
    const corr = LAATSTE_CORRECTIES.filter(x=>x[1]);
    const bedoeld = corr.length ? T.map(t=>{ const c = corr.find(x=>x[0]===t); return c ? c[1] : t; }).join(" ") : "";
    $("#zoek-hulp").innerHTML = corr.length && list.length ? `<p class="zoek-hulp">Bedoelde je <button type="button" class="linkbtn" data-zoek="${esc(bedoeld)}">“${esc(bedoeld)}”</button>? Hieronder staan de resultaten daarvoor.</p>` : "";''')
rep('''      : `<div class="empty">Niets gevonden${state.q?` voor “${esc(state.q)}”`:""}. Probeer een ander woord, <button class="reset" id="reset2">wis de filters</button> of <a href="#/vraag?soort=wens">dien een wens in</a>.</div>`;''',
    '''      : `<div class="empty">Niets gevonden${state.q?` voor “${esc(state.q)}”`:""}${state.model!=="alle"||state.by!=="alle"||state.cat!=="alle"?" met de huidige filters":""}. Probeer een ander woord, <button class="reset" id="reset2">wis de filters</button> of <a href="#/vraag?soort=wens">dien een wens in</a>.
         <div class="zoek-sug"><span>Veel gezocht:</span>${["hypotheekrente","pensioen","nieuwsbrief","social posts","selecties","rekentools","woontoekomst","ORV","WOZ","verduurzamen","huisstijl","kennisbank"].map(w=>`<button type="button" class="chip" data-zoek="${w}">${w}</button>`).join("")}</div></div>`;''')
rep('''    $("#reset2")?.addEventListener("click", resetAll);''', '''    $("#reset2")?.addEventListener("click", resetAll);
    $$("[data-zoek]").forEach(b=>b.onclick=()=>{ syncQ(b.dataset.zoek); });''')
rep('''    <div id="page-hits"></div>''', '''    <div id="zoek-hulp"></div>
    <div id="page-hits"></div>''')

# 5. label Model -> Prijs
rep('<span class="lbl">Model</span>', '<span class="lbl">Prijs</span>')

# CSS
rep('  .partners-band{padding:8px 0 30px}', '''  .zoek-hulp{background:var(--y-soft);padding:10px 14px;margin:0 0 14px;font-size:.92rem}
  .linkbtn{background:none;border:0;padding:0;font:inherit;font-weight:800;text-decoration:underline;cursor:pointer;color:inherit}
  .zoek-sug{display:flex;flex-wrap:wrap;gap:6px;justify-content:center;align-items:center;margin-top:14px}
  .zoek-sug span{font-size:.8rem;font-weight:800;color:var(--muted)}
  .partners-band{padding:8px 0 30px}''')
open(p, 'w', encoding='utf-8').write(s)
print('patch 24 ok')

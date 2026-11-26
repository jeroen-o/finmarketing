"""Duidelijkere melding als de zoeker niets vindt: kop, actieve filters, tips, onderwerpen en wens indienen."""
import os
B = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
p = os.path.join(B, 'template.html')
s = open(p, encoding='utf-8').read()

def rep(a, b):
    global s
    assert s.count(a) == 1, (a[:80], s.count(a))
    s = s.replace(a, b)

rep('''      : `<div class="empty">Niets gevonden${state.q?` voor “${esc(state.q)}”`:""}${state.model!=="alle"||state.by!=="alle"||state.cat!=="alle"?" met de huidige filters":""}. Probeer een ander woord, <button class="reset" id="reset2">wis de filters</button> of <a href="#/vraag?soort=wens">dien een wens in</a>.
         <div class="zoek-sug"><span>Veel gezocht:</span>${["hypotheekrente","pensioen","nieuwsbrief","social posts","selecties","rekentools","woontoekomst","ORV","WOZ","verduurzamen","huisstijl","kennisbank"].map(w=>`<button type="button" class="chip" data-zoek="${w}">${w}</button>`).join("")}</div></div>`;''',
'''      : (()=>{
          const f = [];
          if (state.cat!=="alle") f.push("categorie <b>"+esc((CATS.find(c=>c.id===state.cat)||{}).title||state.cat)+"</b>");
          if (state.model!=="alle") f.push("prijs <b>"+esc(MODELS[state.model]||state.model)+"</b>");
          if (state.by!=="alle") f.push("aanbieder <b>"+esc(state.by)+"</b>");
          const q = state.q.trim();
          return `<div class="leeg">
            <h3>${q ? `Geen resultaten voor “${esc(q)}”` : "Geen resultaten met deze filters"}</h3>
            ${f.length ? `<p class="leeg-filter">Je zoekt nu alleen binnen ${f.join(" en ")}. <button type="button" class="btn btn-k btn-sm" id="reset2">Zoek in alles</button></p>` : ""}
            ${q ? `<p><b>Zo vind je het wel:</b></p><ul>
              <li>Controleer de spelling of typ het woord voluit${q.length<=4?` (afkortingen als “${esc(q)}” kent de zoeker misschien niet)`:""}.</li>
              <li>Zoek op één onderwerp, bijvoorbeeld <i>pensioen</i>, <i>rente</i> of <i>ORV</i>.</li>
              <li>Of klik hieronder op een onderwerp.</li></ul>` : ""}
            <div class="zoek-sug"><span>Populaire onderwerpen:</span>${["hypotheekrente","pensioen","nieuwsbrief","social posts","selecties","rekentools","woontoekomst","ORV","WOZ","verduurzamen","huisstijl","kennisbank"].map(w=>`<button type="button" class="chip" data-zoek="${w}">${w}</button>`).join("")}</div>
            <div class="leeg-wens"><span>Staat het er echt niet bij? Laat het ons weten, dan voegen we het mogelijk toe.</span>
              <a class="btn btn-o btn-sm" href="#/vraag?soort=wens${q?`&onderwerp=${encodeURIComponent("Gezocht op: "+q)}`:""}">Wens indienen →</a></div>
          </div>`; })();''')

rep('  .zoek-sug{display:flex;flex-wrap:wrap;gap:6px;justify-content:center;align-items:center;margin-top:14px}',
'''  .zoek-sug{display:flex;flex-wrap:wrap;gap:6px;justify-content:center;align-items:center;margin-top:14px}
  .leeg{background:#fff;border:1px solid var(--line);padding:28px clamp(16px,4vw,36px);max-width:760px;margin:0 auto;grid-column:1/-1;width:100%;box-sizing:border-box}
  .leeg h3{margin:0 0 12px;font-size:1.3rem}
  .leeg p{margin:0 0 8px}
  .leeg ul{margin:0 0 6px;padding-left:20px;line-height:1.6}
  .leeg .zoek-sug{justify-content:flex-start;margin:16px 0 0}
  .leeg-filter{background:var(--y-soft);padding:10px 14px;display:flex;flex-wrap:wrap;gap:10px;align-items:center;justify-content:space-between}
  .leeg-wens{border-top:1px solid var(--line);margin-top:20px;padding-top:16px;display:flex;flex-wrap:wrap;gap:12px;align-items:center;justify-content:space-between;font-size:.92rem;color:var(--muted)}''')
open(p, 'w', encoding='utf-8').write(s)
print('patch 26 ok')

# 'Zoek in alles' wist alleen de filters, de zoekterm blijft staan
s = open(p, encoding='utf-8').read()
rep('''    $("#reset2")?.addEventListener("click", resetAll);''', '''    $("#reset2")?.addEventListener("click", ()=>{ const q = state.q; resetAll(); if (q) syncQ(q); });''')
open(p, 'w', encoding='utf-8').write(s)
print('patch 26b ok')

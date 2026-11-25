"""Social-postbank: eigen Blinqx-beeld per post (SVG → PNG via canvas)."""
import os
p = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'template.html')
t = open(p, encoding='utf-8').read()


def rep(a, b, cnt=1):
    global t
    assert t.count(a) == cnt, (a[:70], t.count(a))
    t = t.replace(a, b)


# iconen per post (Verjaardag en Bedankt houden hun kaart)
for old, new in [('{m:1, t:"Leennormen 2027", beeld:"Raket"', '{m:1, t:"Leennormen 2027", ic:"percentage"'),
                 ('{m:2, t:"Aangifte en hypotheekrenteaftrek", beeld:"Zon"', '{m:2, t:"Aangifte en hypotheekrenteaftrek", ic:"document"'),
                 ('{m:3, t:"Pensioen telt eerder mee", beeld:"Bakkie pleur"', '{m:3, t:"Pensioen telt eerder mee", ic:"pension"'),
                 ('{m:4, t:"Verduurzamen loont dubbel", beeld:"Grow-Voorkant"', '{m:4, t:"Verduurzamen loont dubbel", ic:"leaf"'),
                 ('{m:5, t:"Woning op het oog?", beeld:"Welkom"', '{m:5, t:"Woning op het oog?", ic:"house report"'),
                 ('{m:6, t:"Blijven of gaan?", beeld:"Super"', '{m:6, t:"Blijven of gaan?", ic:"house"'),
                 ('{m:7, t:"Betaal je te veel voor je ORV?", beeld:"Thumbs up"', '{m:7, t:"Betaal je te veel voor je ORV?", ic:"orv"'),
                 ('{m:8, t:"Ondernemer? Check je risico\'s", beeld:"Bakkie pleur"', '{m:8, t:"Ondernemer? Check je risico\'s", ic:"company"'),
                 ('{m:9, t:"Prinsjesdag", beeld:"Zon"', '{m:9, t:"Prinsjesdag", ic:"calendar"'),
                 ('{m:10, t:"Aflossingsvrij: 2031 komt dichterbij", beeld:"Raket"', '{m:10, t:"Aflossingsvrij: 2031 komt dichterbij", ic:"hourglass"'),
                 ('{m:10, t:"Funderingsrisico", beeld:"Welkom"', '{m:10, t:"Funderingsrisico", ic:"security"'),
                 ('{m:11, t:"Rentevaste periode loopt af?", beeld:"Thumbs up"', '{m:11, t:"Rentevaste periode loopt af?", ic:"swap"')]:
    rep(old, new)

rep('''const sp = { kantoor:"", link:"" };''', '''const sp = { kantoor:"", link:"" };
function postSvg(q, size=1080){
  const i = ICONS[q.ic]; if (!i) return "";
  const words = q.t.split(" "), lines = []; let cur = "";
  words.forEach(w=>{ if ((cur+" "+w).trim().length > 16){ if (cur) lines.push(cur); cur = w; } else cur = (cur+" "+w).trim(); }); if (cur) lines.push(cur);
  const F = "Montserrat, Segoe UI, Helvetica, Arial, sans-serif";
  const hex = (cx,cy,r,fill) => { const pts=[0,1,2,3,4,5].map(k=>{ const a=Math.PI/180*(60*k-90); return (cx+r*Math.cos(a)).toFixed(1)+","+(cy+r*Math.sin(a)).toFixed(1); }).join(" "); return `<polygon points="${pts}" fill="${fill}"/>`; };
  const y0 = 1080 - 150 - lines.length*96;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 1080 1080">
    <rect width="1080" height="1080" fill="#FFCD00"/>
    ${hex(960,120,170,"#FFE066")}${hex(1010,420,60,"#FFE066")}${hex(110,980,120,"#FFE066")}
    ${hex(250,300,190,"#000")}
    <svg x="150" y="200" width="200" height="200" viewBox="${i[0]}" style="color:#FFCD00">${i[1].replace(/currentColor/g,"#FFCD00")}</svg>
    ${lines.map((l,k)=>`<text x="80" y="${y0 + k*96}" font-family="${F}" font-size="84" font-weight="800" fill="#000">${l.replace(/&/g,"&amp;").replace(/</g,"&lt;")}</text>`).join("")}
    <text x="80" y="1000" font-family="${F}" font-size="34" font-weight="700" fill="#000">${(sp.kantoor.trim()||"").replace(/&/g,"&amp;").replace(/</g,"&lt;")}</text>
  </svg>`;
}
async function svgNaarPng(svg){
  const img = new Image(); img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  await img.decode();
  const c = document.createElement("canvas"); c.width = c.height = 1080; c.getContext("2d").drawImage(img,0,0,1080,1080);
  return c.toDataURL("image/png");
}''')

rep('''      ${CARDS[q.beeld]?`<img src="data:image/png;base64,${CARDS[q.beeld][1]}" alt="" style="width:100%;height:auto;display:block">`:""}''',
    '''      ${q.ic ? `<div style="width:100%;aspect-ratio:1/1;line-height:0">${postSvg(q,"100%")}</div>` : CARDS[q.beeld]?`<img src="data:image/png;base64,${CARDS[q.beeld][1]}" alt="" style="width:100%;height:auto;display:block">`:""}''')
rep('''        ${CARDS[q.beeld]?`<a class="btn btn-o btn-sm" download="post-${slug(q.t)}.png" href="data:image/png;base64,${CARDS[q.beeld][1]}">${icon("download",16)} Afbeelding</a>`:""}''',
    '''        ${q.ic ? `<button class="btn btn-o btn-sm" data-png="${i}">${icon("download",16)} Afbeelding</button>` : CARDS[q.beeld]?`<a class="btn btn-o btn-sm" download="post-${slug(q.t)}.png" href="data:image/png;base64,${CARDS[q.beeld][1]}">${icon("download",16)} Afbeelding</a>`:""}''')
rep('''    $$("[data-sp]").forEach(b=>b.onclick=async()=>toast(await copyText(txt(POSTS[+b.dataset.sp]))?"Post gekopieerd":"Kopiëren lukte niet"));''',
    '''    $$("[data-sp]").forEach(b=>b.onclick=async()=>toast(await copyText(txt(POSTS[+b.dataset.sp]))?"Post gekopieerd":"Kopiëren lukte niet"));
    $$("[data-png]").forEach(b=>b.onclick=async()=>{ const q=POSTS[+b.dataset.png];
      try{ const url = await svgNaarPng(postSvg(q,1080)); const a=Object.assign(document.createElement("a"),{href:url,download:`post-${slug(q.t)}.png`}); document.body.appendChild(a); a.click(); a.remove(); toast("Afbeelding gedownload (1080 × 1080)"); }
      catch(e){ toast("Afbeelding maken lukte niet in deze browser"); } });''')
rep('''  $("#sp-k").oninput = e => { sp.kantoor = e.target.value; draw(); };''', '''  $("#sp-k").onchange = e => { sp.kantoor = e.target.value; draw(); };
  $("#sp-k").oninput = e => { sp.kantoor = e.target.value; $$("#sp-grid .promo").forEach((el,i)=>el.textContent = txt(POSTS[i])); };''')
open(p, 'w', encoding='utf-8').write(t)
print('ok')

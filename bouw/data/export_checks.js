/* ============================================================
   Klantchecks en formulieren als losse HTML-pagina voor de eigen
   website van de adviseur. Eén bestand, geen externe bestanden.
   ============================================================ */
function exportShell(cfg, titel, beschrijving, data, script){
  /* Design naar bijmij.nl: crème achtergrond, witte afgeronde kaart, serif koppen, goud accent; eigen huisstijlkleur vervangt het goud */
  const eigen = hexOk(cfg.kleur);
  const goud = eigen || "#b7893a";
  const goudTekst = eigen ? (textColorOn(eigen) === "#000000" ? mixHex(eigen, "#000000", .45) : eigen) : "#8a6420";
  const knopInk = textColorOn(goud), tint = mixHex(goud, "#ffffff", .86);
  const font = cfg.font || "Inter,system-ui,-apple-system,'Segoe UI',Arial,sans-serif";
  const logo = cfg.logo ? `<img src="${esc(cfg.logo)}" alt="${esc(cfg.kantoor || "Logo")}" style="max-height:44px;max-width:200px;display:block">` : (cfg.kantoor ? `<b style="font-family:Fraunces,Georgia,serif;font-size:1.15rem;font-weight:500">${esc(cfg.kantoor)}</b>` : "");
  return `<!doctype html>
<html lang="nl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(titel)}${cfg.kantoor ? " · " + esc(cfg.kantoor) : ""}</title>
<meta name="description" content="${esc(beschrijving)}">
<style>${cfg.fontFace || ""}
:root{--gold:${goud};--gold-text:${goudTekst};--btn-ink:${knopInk};--tint:${tint};--ink:#1c2536;--navy:#16233b;--soft:#5c6577;--line:#e7e0d3;--bg:#fbf9f4}
*{box-sizing:border-box}body{margin:0;font-family:${font};color:var(--ink);background:var(--bg);line-height:1.6;font-size:16px}
.w{max-width:820px;margin:0 auto;padding:0 16px}.top{padding:22px 0 0}.top .w{display:flex;align-items:center;min-height:44px}
.card{background:#fff;border:1px solid var(--line);border-radius:18px;box-shadow:0 20px 50px -28px rgba(22,35,59,.28);padding:clamp(22px,5vw,44px);margin:18px auto 22px}
h1,h2{font-family:Fraunces,'Iowan Old Style','Palatino Linotype',Georgia,serif;font-weight:500;color:var(--navy);letter-spacing:-.01em}
h1{font-size:clamp(1.7rem,4.4vw,2.5rem);line-height:1.15;margin:0 0 14px}h2{font-size:clamp(1.35rem,3.4vw,1.75rem);line-height:1.2;margin:0 0 6px}h3{font-size:1.05rem;margin:20px 0 6px;color:var(--navy)}
h1 em,h2 em{font-style:normal;color:var(--gold)}
.eyebrow{display:flex;align-items:center;gap:12px;font-size:.75rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--gold-text);margin-bottom:14px}
.eyebrow::before{content:"";width:28px;height:1px;background:var(--gold)}
.lead{color:var(--soft);font-size:1.05rem}.callout{background:var(--tint);border-radius:12px;padding:16px 20px;margin:16px 0 22px}
.hint{font-size:.85rem;color:var(--soft)}
.btn{font:inherit;font-weight:600;border:0;padding:14px 26px;border-radius:999px;cursor:pointer;background:var(--gold);color:var(--btn-ink)}
.btn.o{background:#fff;color:var(--navy);border:1px solid var(--line)}.btn[disabled]{opacity:.45;cursor:not-allowed}
.bar{height:4px;background:var(--line);border-radius:4px;margin:8px 0 22px;overflow:hidden}.bar i{display:block;height:100%;background:var(--gold)}
.q{border-top:1px solid var(--line);padding:14px 0}.q p{margin:0 0 6px}.q .v{font-weight:600;color:var(--navy)}
.keus{display:flex;gap:8px;flex-wrap:wrap}.keus button,.opt{font:inherit;padding:11px 16px;border:1px solid var(--line);background:#fff;cursor:pointer;border-radius:12px;color:var(--ink)}
.keus button:hover,.opt:hover{border-color:var(--gold)}.keus button.sel,.opt.sel{border-color:var(--gold);background:var(--tint);font-weight:700}
.opt{display:block;width:100%;text-align:left;margin-bottom:8px;padding:14px 16px}.opt small{display:block;color:var(--soft);font-weight:400}
.res{background:var(--bg);border:1px solid var(--line);border-radius:14px;padding:16px 18px;margin-bottom:12px}.res .kop{display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;align-items:center}
.tag{font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;padding:5px 10px;border-radius:999px}.t0{background:#e2f3e8;color:#1f7a45}.t1{background:var(--tint);color:var(--gold-text)}.t2{background:var(--navy);color:#fff}
ul{padding-left:20px}li{margin:4px 0}
label.f{display:block;font-size:.82rem;font-weight:600;margin:14px 0 5px;color:var(--navy)}input.i,textarea.i{width:100%;font:inherit;font-size:16px;padding:11px 14px;border:1px solid var(--line);border-radius:10px;background:#fff}
input.i:focus,textarea.i:focus{outline:2px solid var(--tint);border-color:var(--gold)}
.grid2{display:grid;grid-template-columns:1fr 1fr;gap:0 12px}@media(max-width:560px){.grid2{grid-template-columns:1fr}}
.row{display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-top:20px}.note{background:var(--bg);border:1px solid var(--line);border-radius:10px;padding:10px 12px;font-size:.85rem}
.sumlbl{font-size:.72rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--gold-text)}
table{width:100%;border-collapse:collapse;font-size:.92rem}td{padding:8px 0;border-top:1px solid var(--line)}
footer{max-width:820px;margin:0 auto 34px;padding:0 16px;font-size:.78rem;color:var(--soft)}
</style></head><body>
<div class="top"><div class="w">${logo}</div></div>
<main class="w"><div class="card" id="app"></div></main>
<footer>Dit is een hulpmiddel en geen advies. Er wordt niets op deze pagina bewaard; versturen gaat via ${data.je ? "je" : "uw"} eigen e-mailprogramma.${cfg.kantoor ? " Aangeboden door " + esc(cfg.kantoor) + "." : ""}</footer>
<script>
(function(){
var D=${JSON.stringify(data).replace(/</g, "\\u003c")};
var $=function(x){return document.querySelector(x)},root=$("#app");
function e(t){return String(t==null?"":t).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];});}
function contact(sum){var h='<h3>Stuur de uitkomst naar '+e(D.label)+'</h3><label class="f" for="naam">'+(D.je?'Je':'Uw')+' naam *</label><input class="i" id="naam"><label class="f" for="tel">Telefoon (niet verplicht)</label><input class="i" id="tel" type="tel"><label class="f" for="opm">Toelichting (niet verplicht)</label><textarea class="i" id="opm" rows="3"></textarea><p class="note">Vul geen medische gegevens in. Die zijn voor dit gesprek niet nodig.</p><label style="display:flex;gap:8px;align-items:flex-start;font-size:.92rem"><input type="checkbox" id="ok"> <span>Ik vind het goed dat '+e(D.label)+' deze antwoorden ontvangt en contact met mij opneemt.</span></label><div class="row"><button class="btn o" id="terug">Terug</button><button class="btn" id="stuur">Verstuur →</button></div>'+(D.tel?'<p class="hint" style="margin-top:12px">Liever bellen? '+e(D.tel)+'</p>':'')+'<p class="hint">Versturen opent een bericht in '+(D.je?'je':'uw')+' eigen e-mailprogramma. Er wordt niets op deze website bewaard.</p>';return h;}
function bindContact(sum,terug){$("#terug").onclick=terug;$("#stuur").onclick=function(){var n=$("#naam").value.trim();if(!n||!$("#ok").checked){alert(D.je?"Vul je naam in en geef toestemming.":"Vul uw naam in en geef toestemming.");return;}var t=sum()+"\\n\\nNaam: "+n+"\\nTelefoon: "+($("#tel").value.trim()||"—")+($("#opm").value.trim()?"\\n\\nToelichting:\\n"+$("#opm").value.trim():"");location.href="mailto:"+encodeURIComponent(D.mail)+"?subject="+encodeURIComponent(D.onderwerp+" – "+n)+"&body="+encodeURIComponent(t);};}
${script}
})();
<\/script></body></html>`;
}
const exportCfg = (v) => ({ adviseur:v.adviseur, kantoor:v.kantoor, mail:v.mail, tel:v.tel || HS.tel,
  kleur:HS.kleur, kleur2:HS.kleur2, font:HS.fontData ? hsFont() : ((HS.font||HS.fontEigen) ? fontStack(HS.font, HS.fontEigen) : ""), logo:HS.logo || HS.logoUrl, fontFace:hsFontFace() });
const exportLabel = c => [c.adviseur, c.kantoor && (c.adviseur ? `van ${c.kantoor}` : c.kantoor)].filter(Boolean).join(" ") || "uw adviseur";

/* Klantcheck (CHECKS-structuur; secties mogen een 'vraag' hebben die de sectie aan- of uitzet) */
function checkHtml(C, cfg){
  const data = { C:{ titel:C.titel, h1:C.h1, intro:C.intro, calc:!!C.calc, secties:C.secties.map(s=>({ key:s.key, titel:s.titel, vraag:s.vraag||"", items:s.items.map(x=>({ k:x.k, q:x.q, s:x.s||"", w:x.w, tip:x.tip })) })) },
    mail:cfg.mail, tel:cfg.tel||"", label:exportLabel(cfg), onderwerp:C.mail || C.titel };
  const script = `
var C=D.C,S=C.secties,st={step:-1,a:{},aan:{},c:{}},N=S.length+(C.calc?1:0);
S.forEach(function(s){st.aan[s.key]=s.vraag?null:true;});
function num(v){v=String(v||"").replace(/[^0-9,]/g,"").replace(",",".");return v?parseFloat(v):0;}
function eur(n){return "€ "+Math.round(n).toLocaleString("nl-NL");}
function status(s){if(!st.aan[s.key])return null;var pt=0,tips=[];s.items.forEach(function(x){var v=st.a[s.key+"."+x.k];if(v==="ja"){pt+=x.w;tips.push(x.tip);}else if(v==="weetniet"){pt+=x.w/2;tips.push(x.tip);}});return{tips:tips,s:pt===0?["Lijkt goed geregeld",0]:pt<=2?["Aandacht nodig",1]:["Bespreek dit met uw adviseur",2]};}
function calc(){var l=num(st.c.last),i1=num(st.c.ink1),i2=num(st.c.ink2),nb=num(st.c.nab),ao=num(st.c.ao);if(!l||!(i1+i2))return null;function p(i){return i>0?l/i:null;}return [["Nu",i1+i2,p(i1+i2)],["Partner 2 overlijdt",i1+nb,p(i1+nb)],["Partner 1 overlijdt",i2+nb,p(i2+nb)],["Partner 1 arbeidsongeschikt",ao+i2,p(ao+i2)]];}
function sum(){var r=[C.titel,""];S.forEach(function(s){var x=status(s);if(!x){r.push(s.titel+": niet van toepassing","");return;}r.push(s.titel+": "+x.s[0]);s.items.forEach(function(q){var v=st.a[s.key+"."+q.k];if(v&&v!=="nee")r.push(" - "+q.q+" "+(v==="ja"?"Ja":"Weet ik niet"));});r.push("");});var c=calc();if(c){r.push("Woonlasten als deel van het netto inkomen:");c.forEach(function(x){r.push(" - "+x[0]+": "+(x[2]!=null?Math.round(x[2]*100)+"%":"geen inkomen"));});}return r.join("\\n");}
function keus(n,v,cur,l){return '<button type="button" data-k="'+n+'" data-v="'+v+'"'+(cur===v?' class="sel"':'')+'>'+l+'</button>';}
function render(){
 if(st.step===-1){var h='<div class="eyebrow">'+e(D.onderwerp)+'</div><h1>'+e(C.h1||C.titel)+'</h1><p>'+e(C.intro)+'</p><ul>';S.forEach(function(s){h+='<li>'+e(s.titel)+': '+s.items.length+' vragen</li>';});if(C.calc)h+='<li>Rekenvoorbeeld met uw eigen bedragen</li>';root.innerHTML=h+'</ul><button class="btn" id="start">Start →</button>';$("#start").onclick=function(){st.step=0;render();};return;}
 if(st.step<N){var b='';
  if(C.calc&&st.step===S.length){b='<h2>Uw woonlasten en inkomen</h2><p class="hint">Netto bedragen per maand. Laat leeg wat niet van toepassing is.</p><div class="grid2">';[["last","Woonlasten (huur of hypotheek + vaste woonkosten)"],["ink1","Netto inkomen partner 1"],["ink2","Netto inkomen partner 2"],["nab","Uitkering of pensioen voor nabestaande (schatting)"],["ao","Inkomen partner 1 bij arbeidsongeschiktheid (schatting)"]].forEach(function(f){b+='<div><label class="f" for="c-'+f[0]+'">'+f[1]+'</label><input class="i" id="c-'+f[0]+'" data-c="'+f[0]+'" inputmode="numeric" placeholder="€" value="'+e(st.c[f[0]]||"")+'"></div>';});b+='</div>';}
  else{var s=S[st.step];b='<h2>'+e(s.titel)+'</h2>';
   if(s.vraag){b+='<div class="q"><p class="v">'+e(s.vraag)+'</p><div class="keus">'+keus("aan:"+s.key,"ja",st.aan[s.key]===true?"ja":st.aan[s.key]===false?"nee":"","Ja")+keus("aan:"+s.key,"nee",st.aan[s.key]===true?"ja":st.aan[s.key]===false?"nee":"","Nee")+'</div></div>';}
   if(st.aan[s.key])s.items.forEach(function(x){var cur=st.a[s.key+"."+x.k]||"";b+='<div class="q"><p class="v">'+e(x.q)+'</p>'+(x.s?'<p class="hint">'+e(x.s)+'</p>':'')+'<div class="keus">'+keus(s.key+"."+x.k,"ja",cur,"Ja")+keus(s.key+"."+x.k,"nee",cur,"Nee")+keus(s.key+"."+x.k,"weetniet",cur,"Weet ik niet")+'</div></div>';});}
  root.innerHTML='<div class="eyebrow">Stap '+(st.step+1)+' van '+(N+1)+'</div><div class="bar"><i style="width:'+((st.step+1)/(N+1)*100)+'%"></i></div>'+b+'<div class="row"><button class="btn o" id="terug">Terug</button><button class="btn" id="verder">Volgende</button></div>';
  Array.prototype.forEach.call(root.querySelectorAll("[data-k]"),function(x){x.onclick=function(){var k=x.getAttribute("data-k"),v=x.getAttribute("data-v");if(k.indexOf("aan:")===0)st.aan[k.slice(4)]=(v==="ja");else st.a[k]=v;var y=window.scrollY;render();window.scrollTo(0,y);};});
  Array.prototype.forEach.call(root.querySelectorAll("[data-c]"),function(x){x.oninput=function(){st.c[x.getAttribute("data-c")]=x.value;};});
  $("#terug").onclick=function(){st.step--;render();};$("#verder").onclick=function(){st.step++;render();root.scrollIntoView();};return;}
 var h2='<div class="eyebrow">Uw uitkomst</div><h2>Zo staat het ervoor</h2>';
 S.forEach(function(s){var x=status(s);if(!x)return;h2+='<div class="res"><div class="kop"><b>'+e(s.titel)+'</b><span class="tag t'+x.s[1]+'">'+x.s[0]+'</span></div>'+(x.tips.length?'<ul>'+x.tips.map(function(t){return'<li>'+e(t)+'</li>';}).join("")+'</ul>':'<p style="margin:8px 0 0">Op basis van uw antwoorden lijkt dit goed geregeld.</p>')+'</div>';});
 var c=calc();if(c){h2+='<div class="res"><b>Woonlasten als deel van uw netto inkomen</b><table>'+c.map(function(x){return'<tr><td>'+e(x[0])+'</td><td style="text-align:right">'+eur(x[1])+' p/m</td><td style="text-align:right;font-weight:800">'+(x[2]!=null?Math.round(x[2]*100)+'%':'—')+'</td></tr>';}).join("")+'</table><p class="hint">Vuistregel, geen norm: boven ongeveer 30% wordt het krap, boven 40% is het vaak niet vol te houden.</p></div>';}
 root.innerHTML=h2+contact();bindContact(sum,function(){st.step=N-1;render();});
}
render();`;
  return exportShell(cfg, C.titel, C.intro, data, script);
}

/* Formulier (FORMS-structuur: stappen met vragen van het type een/meer/open/score) */
function formExportHtml(f, cfg){
  const data = { F:{ titel:f.titel, intro:f.intro || f.sub || "", stappen:f.stappen.map(s=>({ titel:s.titel, info:s.info||"", vragen:s.vragen.map(q=>({ v:q.v, t:q.t, s:q.s||"", o:q.o||null })) })) },
    mail:cfg.mail, tel:cfg.tel||"", label:exportLabel(cfg), onderwerp:f.titel };
  const script = `
var F=D.F,P=F.stappen,N=P.length,st={step:-1,a:{}};
function ant(i,j){var v=st.a[i+"."+j];return Array.isArray(v)?(v.length?v.join("; "):"—"):(v==null||v===""?"—":String(v));}
function sum(){var r=[F.titel,""];P.forEach(function(s,i){r.push((i+1)+". "+s.titel);s.vragen.forEach(function(q,j){r.push(" - "+q.v+": "+ant(i,j));});r.push("");});return r.join("\\n");}
function render(){
 if(st.step===-1){root.innerHTML='<div class="eyebrow">Vragenlijst</div><h1>'+e(F.titel)+'</h1>'+(F.intro?'<p>'+e(F.intro)+'</p>':'')+'<p class="hint">'+N+' korte stappen. Aan het eind beslist u zelf of u de antwoorden verstuurt.</p><button class="btn" id="start">Start →</button>';$("#start").onclick=function(){st.step=0;render();};return;}
 if(st.step<N){var s=P[st.step],i=st.step,b='<div class="eyebrow">Stap '+(i+1)+' van '+(N+1)+'</div><div class="bar"><i style="width:'+((i+1)/(N+1)*100)+'%"></i></div><h2>'+e(s.titel)+'</h2>'+(s.info?'<p class="hint">'+e(s.info)+'</p>':'');
  s.vragen.forEach(function(q,j){var k=i+"."+j,v=st.a[k];b+='<div class="q"><p class="v">'+e(q.v)+'</p>'+(q.s?'<p class="hint">'+e(q.s)+'</p>':'');
   if(q.t==="een")b+=q.o.map(function(o){return'<button type="button" class="opt'+(v===o?' sel':'')+'" data-k="'+k+'" data-v="'+e(o)+'">'+e(o)+'</button>';}).join("");
   else if(q.t==="meer")b+=q.o.map(function(o){var on=Array.isArray(v)&&v.indexOf(o)>-1;return'<button type="button" class="opt'+(on?' sel':'')+'" data-m="'+k+'" data-v="'+e(o)+'">'+(on?'☑ ':'☐ ')+e(o)+'</button>';}).join("");
   else if(q.t==="score"){b+='<div class="keus">';for(var n=1;n<=10;n++)b+='<button type="button" data-k="'+k+'" data-v="'+n+'"'+(String(v)===String(n)?' class="sel"':'')+'>'+n+'</button>';b+='</div>';}
   else b+='<textarea class="i" rows="3" data-o="'+k+'">'+e(v||"")+'</textarea>';
   b+='</div>';});
  root.innerHTML=b+'<div class="row"><button class="btn o" id="terug">Terug</button><button class="btn" id="verder">Volgende</button></div>';
  Array.prototype.forEach.call(root.querySelectorAll("[data-k]"),function(x){x.onclick=function(){st.a[x.getAttribute("data-k")]=x.getAttribute("data-v");var y=window.scrollY;render();window.scrollTo(0,y);};});
  Array.prototype.forEach.call(root.querySelectorAll("[data-m]"),function(x){x.onclick=function(){var k=x.getAttribute("data-m"),o=x.getAttribute("data-v"),a=Array.isArray(st.a[k])?st.a[k]:[];var p=a.indexOf(o);if(p>-1)a.splice(p,1);else a.push(o);st.a[k]=a;var y=window.scrollY;render();window.scrollTo(0,y);};});
  Array.prototype.forEach.call(root.querySelectorAll("[data-o]"),function(x){x.oninput=function(){st.a[x.getAttribute("data-o")]=x.value;};});
  $("#terug").onclick=function(){st.step--;render();};$("#verder").onclick=function(){st.step++;render();root.scrollIntoView();};return;}
 var h='<div class="eyebrow">Controleren en versturen</div><h2>Uw antwoorden</h2>';P.forEach(function(s,i){h+='<h3>'+(i+1)+'. '+e(s.titel)+'</h3>';s.vragen.forEach(function(q,j){h+='<div class="q"><p class="hint" style="margin:0">'+e(q.v)+'</p><p>'+e(ant(i,j))+'</p></div>';});});
 root.innerHTML=h+contact();bindContact(sum,function(){st.step=N-1;render();});
}
render();`;
  return exportShell(cfg, f.titel, f.intro || f.sub || "", data, script);
}

/* Verzekeringscheck (VC_Q) omzetten naar de check-structuur */
const VC_ALS_CHECK = () => ({ titel:"Jaarlijkse check opstal en inboedel", h1:"Is uw woning en inboedel nog goed verzekerd?", mail:"Jaarlijkse check opstal en inboedel",
  intro:"Verbouwd, zonnepanelen gelegd of dure spullen gekocht? Beantwoord een paar korte vragen en zie of uw opstal- en inboedelverzekering nog passen.",
  secties:Object.entries(VC_Q).map(([key, s]) => ({ key, titel:s.titel, vraag:s.vraag, items:s.items })) });

function exportKnop(id){ return `<button type="button" class="btn btn-y btn-sm" id="${id}">${icon("download",16)} Download HTML voor je website</button>`; }
const EXPORT_UITLEG = `<p class="hint">Met de HTML-download zet je deze tool direct op je eigen website: één bestand, met jouw naam, kantoor, e-mailadres en <a href="#/huisstijl">huisstijl</a>. Upload het als pagina of plak de inhoud in een HTML-blok. De antwoorden komen via het mailprogramma van de klant bij jou binnen.</p>`;
function bindExport(knop, velden, maak, bestandsnaam){
  const b = $(knop); if (!b) return;
  b.onclick = () => { const v = k => ($(velden[k]) ? $(velden[k]).value.trim() : "");
    const cfg = exportCfg({ adviseur:v("n"), kantoor:v("k"), mail:v("m"), tel:v("t") });
    if (!cfg.mail){ toast("Vul eerst het e-mailadres voor de antwoorden in"); $(velden.m) && $(velden.m).focus(); return; }
    download(`${bestandsnaam}${cfg.kantoor ? "-" + slug(cfg.kantoor) : ""}.html`, maak(cfg), "text/html"); toast("HTML gedownload: zet het bestand op je website"); };
}

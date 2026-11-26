/* ============================================================
   Woontoekomst-check als losse HTML-pagina voor de eigen website
   van de adviseur. Eén bestand, geen externe bestanden of API's.
   ============================================================ */
function woontoekomstHtml(cfg){
  const k = hexOk(cfg.kleur) || "#FFCD00", ink = textColorOn(k), acc = hexOk(cfg.kleur2) || "#000000", accInk = textColorOn(acc);
  const soft = mixHex(k, "#ffffff", .82);
  const font = cfg.font || "Arial,Helvetica,sans-serif";
  const label = [cfg.adviseur, cfg.kantoor && `van ${cfg.kantoor}`].filter(Boolean).join(" ") || "uw adviseur";
  const data = JSON.stringify({ Q: WTC_Q, L: WTC_LBL, mail: cfg.mail || "", label, tel: cfg.tel || "", kantoor: cfg.kantoor || "" }).replace(/</g, "\\u003c");
  const logo = cfg.logo ? `<img src="${esc(cfg.logo)}" alt="${esc(cfg.kantoor || "Logo")}" style="max-height:48px;max-width:220px;display:block">` : (cfg.kantoor ? `<b style="font-size:1.1rem">${esc(cfg.kantoor)}</b>` : "");
  return `<!doctype html>
<html lang="nl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>De woontoekomst-check${cfg.kantoor ? " · " + esc(cfg.kantoor) : ""}</title>
<meta name="description" content="Blijven of gaan? Vier vragen over hoe je later wilt wonen.">
<style>${cfg.fontFace || ""}
:root{--k:${k};--ink:${ink};--acc:${acc};--accink:${accInk};--soft:${soft};--line:#cad5e3;--muted:#56677c}
*{box-sizing:border-box}body{margin:0;font-family:${font};color:#001023;background:#f4f7f9;line-height:1.55}
.top{background:var(--k);color:var(--ink);padding:14px 16px}.top .w{max-width:760px;margin:0 auto;display:flex;align-items:center;gap:12px;justify-content:space-between;flex-wrap:wrap}
.w{max-width:760px;margin:0 auto;padding:0 16px}.card{background:#fff;padding:26px;margin:22px auto;border:1px solid #e4eaf1}
h1{font-size:1.6rem;line-height:1.2;margin:0 0 12px}h2{font-size:1.3rem;line-height:1.25;margin:0 0 4px}
.eyebrow{font-size:.75rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);margin-bottom:6px}
.hint{font-size:.85rem;color:var(--muted)}.btn{font:inherit;font-weight:800;border:0;padding:12px 18px;cursor:pointer;background:var(--acc);color:var(--accink)}
.btn.o{background:#fff;color:#000;border:2px solid #000}.btn[disabled]{opacity:.45;cursor:not-allowed}
.bar{height:6px;background:#e4eaf1;margin:8px 0 16px}.bar i{display:block;height:100%;background:var(--k)}
.opt{display:block;width:100%;text-align:left;font:inherit;padding:13px 15px;border:1px solid var(--line);background:#fff;cursor:pointer;margin-bottom:8px}
.opt.sel{border-color:#000;box-shadow:inset 0 0 0 1px #000;background:var(--soft);font-weight:800}.opt small{display:block;color:var(--muted);font-weight:400}
label.f{display:block;font-size:.8rem;font-weight:800;margin:12px 0 4px}input.i,textarea.i{width:100%;font:inherit;font-size:16px;padding:10px 12px;border:1px solid var(--line)}
.row{display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-top:16px}.note{background:#f4f7f9;padding:10px;font-size:.85rem}
footer{max-width:760px;margin:0 auto 30px;padding:0 16px;font-size:.78rem;color:var(--muted)}
</style></head><body>
<div class="top"><div class="w">${logo}<span style="font-weight:700;font-size:.9rem">De woontoekomst-check</span></div></div>
<main class="w"><div class="card" id="wtc"></div></main>
<footer>Deze vragenlijst is een hulpmiddel en geen advies. Er wordt niets op deze pagina bewaard; versturen gaat via je eigen e-mailprogramma.${cfg.kantoor ? " Aangeboden door " + esc(cfg.kantoor) + "." : ""}</footer>
<script>
(function(){
var D=${data},Q=D.Q,N=Q.length,s={step:-1,a:{},naam:"",tel:"",opm:"",ok:false};Q.forEach(function(q){s.a[q.key]=q.multi?[]:null;});
var $=function(x){return document.querySelector(x)},root=$("#wtc");
function e(t){return String(t==null?"":t).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];});}
function o(x){return Array.isArray(x)?x:[x];}
function line(q){var a=s.a[q.key];if(q.multi)return a.length?a.map(function(i){return o(q.options[i])[0];}).join("; "):"—";return a==null?"—":o(q.options[a])[0];}
function can(){if(s.step<0||s.step>=N)return true;var q=Q[s.step],a=s.a[q.key];return q.multi?a.length>0:a!=null;}
function body(){var r=["Antwoorden woontoekomst-check",""];Q.forEach(function(q){r.push(q.title,line(q),"");});r.push("Naam: "+(s.naam||"—"),"Telefoon: "+(s.tel||"—"));if(s.opm)r.push("","Toelichting:",s.opm);return r.join("\\n");}
function render(){
 if(s.step===-1){root.innerHTML='<div class="eyebrow">De woontoekomst-check</div><h1>Blijven of gaan? Vier vragen over hoe jij later wilt wonen.</h1><p>Bijna negen op de tien huiseigenaren van 55 jaar en ouder hebben nagedacht over hoe ze later willen wonen. De helft heeft daar nog niets mee gedaan. Een aantal geldverstrekkers kijkt eerder en strenger naar je inkomen na pensionering. Verandert er niets aan je hypotheek, dan merk je daar niets van. Heb je plannen met je woning, dan wil je dit weten voordat je een stap zet.</p><button class="btn" id="start">Begin met vraag 1 →</button><p class="hint">Ongeveer drie minuten. Geen cijfers, geen verplichtingen. Aan het eind beslis je zelf of je de antwoorden verstuurt.</p>';$("#start").onclick=function(){s.step=0;render();};return;}
 if(s.step<N){var q=Q[s.step],h='<div class="eyebrow">Vraag '+(s.step+1)+' van '+N+'</div><div class="bar"><i style="width:'+((s.step+1)/N*100)+'%"></i></div><h2>'+e(q.title)+'</h2><p class="hint" style="margin:0 0 14px">'+e(q.hint)+'</p>';
  q.options.forEach(function(x,i){var t=o(x),sel=q.multi?s.a[q.key].indexOf(i)>-1:s.a[q.key]===i;h+='<button class="opt'+(sel?' sel':'')+'" data-i="'+i+'">'+(q.multi?(sel?'☑ ':'☐ '):'')+e(t[0])+(t[1]?'<small>'+e(t[1])+'</small>':'')+'</button>';});
  h+='<div class="row"><button class="btn o" id="terug">Terug</button><button class="btn" id="verder"'+(can()?'':' disabled')+'>Volgende</button></div>';root.innerHTML=h;
  Array.prototype.forEach.call(root.querySelectorAll(".opt"),function(b){b.onclick=function(){var i=+b.getAttribute("data-i");if(q.multi){var a=s.a[q.key],last=q.options.length-1;if(i===last)s.a[q.key]=a.indexOf(i)>-1?[]:[i];else{var k=a.indexOf(i);if(k>-1)a.splice(k,1);else a.push(i);s.a[q.key]=s.a[q.key].filter(function(z){return z!==last;});}}else s.a[q.key]=i;render();};});
  $("#terug").onclick=function(){s.step--;render();};$("#verder").onclick=function(){if(can()){s.step++;render();}};return;}
 var ok=s.ok&&s.naam.trim(),h2='<div class="eyebrow">Controleren en versturen</div><h2>Klopt dit zo?</h2><p class="hint">Dit is wat '+e(D.label)+' van je ontvangt.</p>';
 Q.forEach(function(q){h2+='<div style="margin-bottom:12px"><div class="eyebrow" style="margin:0">'+e(D.L[q.key])+'</div><div>'+e(line(q))+'</div></div>';});
 h2+='<label class="f" for="naam">Je naam *</label><input class="i" id="naam" value="'+e(s.naam)+'"><label class="f" for="tel">Telefoon (niet verplicht)</label><input class="i" id="tel" type="tel" value="'+e(s.tel)+'"><label class="f" for="opm">Wil je er iets aan toevoegen? (niet verplicht)</label><textarea class="i" id="opm" rows="3">'+e(s.opm)+'</textarea><p class="note">Zet hier geen medische gegevens in. Die zijn voor dit gesprek niet nodig.</p><label style="display:flex;gap:8px;align-items:flex-start;font-size:.92rem"><input type="checkbox" id="ok"'+(s.ok?' checked':'')+'> <span>Ik vind het goed dat '+e(D.label)+' deze antwoorden ontvangt en er contact over opneemt op de manier die ik heb gekozen.</span></label><p class="hint">Versturen opent een bericht in je eigen e-mailprogramma. Er wordt niets op deze website bewaard.</p><div class="row"><button class="btn o" id="terug">Terug</button><button class="btn" id="stuur"'+(ok?'':' disabled')+'>Verstuur mijn antwoorden →</button></div>'+(D.tel?'<p class="hint" style="margin-top:14px">Liever bellen? '+e(D.tel)+'</p>':'');
 root.innerHTML=h2;
 $("#naam").oninput=function(ev){var had=!!(s.ok&&s.naam.trim());s.naam=ev.target.value;if(had!==!!(s.ok&&s.naam.trim())){render();var v=$("#naam");v.focus();v.setSelectionRange(v.value.length,v.value.length);}};
 $("#tel").oninput=function(ev){s.tel=ev.target.value;};$("#opm").oninput=function(ev){s.opm=ev.target.value;};
 $("#ok").onchange=function(ev){s.ok=ev.target.checked;render();};$("#terug").onclick=function(){s.step--;render();};
 $("#stuur").onclick=function(){if(!ok)return;location.href="mailto:"+encodeURIComponent(D.mail)+"?subject="+encodeURIComponent("Woontoekomst-check – "+s.naam)+"&body="+encodeURIComponent(body());};
}
render();
})();
<\/script></body></html>`;
}

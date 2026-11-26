/* ============================================================
   Woontoekomst-check als losse HTML-pagina voor de eigen website
   van de adviseur (design: zie exportShell in export_checks.js).
   ============================================================ */
function woontoekomstHtml(cfg){
  const label = [cfg.adviseur, cfg.kantoor && `van ${cfg.kantoor}`].filter(Boolean).join(" ") || "uw adviseur";
  const data = { Q: WTC_Q, L: WTC_LBL, mail: cfg.mail || "", label, tel: cfg.tel || "", onderwerp: "Woontoekomst-check", je: true };
  const script = `
var Q=D.Q,N=Q.length,s={step:-1,a:{}};Q.forEach(function(q){s.a[q.key]=q.multi?[]:null;});
function o(x){return Array.isArray(x)?x:[x];}
function line(q){var a=s.a[q.key];if(q.multi)return a.length?a.map(function(i){return o(q.options[i])[0];}).join("; "):"—";return a==null?"—":o(q.options[a])[0];}
function can(){if(s.step<0||s.step>=N)return true;var q=Q[s.step],a=s.a[q.key];return q.multi?a.length>0:a!=null;}
function sum(){var r=["Antwoorden woontoekomst-check",""];Q.forEach(function(q){r.push(q.title,line(q),"");});return r.join("\\n");}
function render(){
 if(s.step===-1){root.innerHTML='<div class="eyebrow">De woontoekomst-check</div><h1>Blijven of gaan? <em>Vier vragen</em><br>over hoe jij later wilt wonen.</h1><p class="lead">Bijna negen op de tien huiseigenaren van 55 jaar en ouder hebben nagedacht over hoe ze later willen wonen. De helft heeft daar nog niets mee gedaan.</p><div class="callout">Een aantal geldverstrekkers kijkt eerder en strenger naar je inkomen na pensionering. <b>Verandert er niets aan je hypotheek, dan merk je daar niets van.</b> Heb je plannen met je woning, dan wil je dit weten voordat je een stap zet.</div><button class="btn" id="start">Begin met vraag 1 →</button><p class="hint" style="margin-top:16px">Ongeveer drie minuten. Geen cijfers, geen verplichtingen. Aan het eind beslis je zelf of je de antwoorden verstuurt.</p>';$("#start").onclick=function(){s.step=0;render();};return;}
 if(s.step<N){var q=Q[s.step],h='<div class="eyebrow">Vraag '+(s.step+1)+' van '+N+'</div><div class="bar"><i style="width:'+((s.step+1)/N*100)+'%"></i></div><h2>'+e(q.title)+'</h2><p class="hint" style="margin:0 0 16px">'+e(q.hint)+'</p>';
  q.options.forEach(function(x,i){var t=o(x),sel=q.multi?s.a[q.key].indexOf(i)>-1:s.a[q.key]===i;h+='<button type="button" class="opt'+(sel?' sel':'')+'" data-i="'+i+'">'+(q.multi?(sel?'☑ ':'☐ '):'')+e(t[0])+(t[1]?'<small>'+e(t[1])+'</small>':'')+'</button>';});
  h+='<div class="row"><button class="btn o" id="terug">Terug</button><button class="btn" id="verder"'+(can()?'':' disabled')+'>Volgende →</button></div>';root.innerHTML=h;
  Array.prototype.forEach.call(root.querySelectorAll(".opt"),function(b){b.onclick=function(){var i=+b.getAttribute("data-i");if(q.multi){var a=s.a[q.key],last=q.options.length-1;if(i===last)s.a[q.key]=a.indexOf(i)>-1?[]:[i];else{var k=a.indexOf(i);if(k>-1)a.splice(k,1);else a.push(i);s.a[q.key]=s.a[q.key].filter(function(z){return z!==last;});}}else s.a[q.key]=i;render();};});
  $("#terug").onclick=function(){s.step--;render();};$("#verder").onclick=function(){if(can()){s.step++;render();}};return;}
 var h2='<div class="eyebrow">Controleren en versturen</div><h2>Klopt dit zo?</h2><p class="hint">Dit is wat '+e(D.label)+' van je ontvangt.</p>';
 Q.forEach(function(q){h2+='<div class="q"><div class="sumlbl">'+e(D.L[q.key])+'</div><div>'+e(line(q))+'</div></div>';});
 root.innerHTML=h2+contact();bindContact(sum,function(){s.step=N-1;render();});
}
render();`;
  return exportShell(cfg, "De woontoekomst-check", "Blijven of gaan? Vier vragen over hoe je later wilt wonen.", data, script);
}

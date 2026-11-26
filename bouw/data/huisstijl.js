/* ============================================================
   HUISSTIJL (logo, kleuren, lettertype) + DELEN OP SOCIAL MEDIA
   Alles in het geheugen van dit tabblad (geen localStorage, i.v.m.
   Google Sites-embed). Bewaren kan met een huisstijlbestand (.json).
   ============================================================ */
const FONTS = {
  "Arial":"Arial,Helvetica,sans-serif", "Helvetica":"Helvetica,Arial,sans-serif", "Verdana":"Verdana,Geneva,sans-serif",
  "Tahoma":"Tahoma,Verdana,sans-serif", "Trebuchet MS":"'Trebuchet MS',Arial,sans-serif", "Segoe UI":"'Segoe UI',Tahoma,Arial,sans-serif",
  "Calibri":"Calibri,Carlito,Arial,sans-serif", "Montserrat":"Montserrat,'Segoe UI',Arial,sans-serif",
  "Georgia":"Georgia,'Times New Roman',serif", "Times New Roman":"'Times New Roman',Times,serif", "Garamond":"Garamond,Georgia,serif"
};
const HS_LEEG = { logo:"", logoUrl:"", kleur:"", kleur2:"", font:"", fontEigen:"", fontData:"", kantoor:"", adviseur:"", tel:"", email:"", web:"" };
const HS = { ...HS_LEEG };
const hexOk = v => /^#?[0-9a-f]{6}$/i.test(v||"") ? "#"+String(v).replace("#","").toLowerCase() : "";
function mixHex(a, b, t){ const p = h => [1,3,5].map(i=>parseInt(h.substr(i,2),16)); const x=p(a), y=p(b); return "#"+x.map((v,i)=>Math.round(v+(y[i]-v)*t).toString(16).padStart(2,"0")).join(""); }
const fontNaamOk = s => String(s||"").replace(/[^\w \-]/g,"").trim().slice(0,40);
function fontStack(naam, eigen){ const e = fontNaamOk(eigen); return [e && `'${e}'`, FONTS[naam] || (fontNaamOk(naam) ? `'${fontNaamOk(naam)}',Arial,sans-serif` : "Arial,Helvetica,sans-serif")].filter(Boolean).join(","); }
const hsFont = () => (HS.fontData ? "HSUpload," : "") + fontStack(HS.font, HS.fontEigen);
const hsKleur = () => HS.kleur || "#FFCD00";
const hsKleur2 = () => HS.kleur2 || "#000000";
const hsKopKleur = () => HS.kleur && textColorOn(HS.kleur)==="#ffffff" ? HS.kleur : (HS.kleur2 || "#000000");
const hsActief = () => !!(HS.logo || HS.logoUrl || HS.kleur || HS.kleur2 || HS.font || HS.fontEigen || HS.fontData);
const hsLogoSrc = (email=false) => email ? (HS.logoUrl || HS.logo) : (HS.logo || HS.logoUrl);
const hsFontFace = () => HS.fontData ? `@font-face{font-family:HSUpload;src:url(${HS.fontData})}` : "";
function hsKop(email=false){
  const src = hsLogoSrc(email); if (!src) return "";
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 16px"><tr><td><img src="${esc(src)}" alt="${esc(HS.kantoor||"Logo")}" height="56" style="height:56px;width:auto;max-width:260px;display:block;border:0"></td></tr></table>`;
}
/* Kantoorgegevens doorzetten naar alle generatoren */
function hsSync(){
  const set = (obj, k, v) => { if (obj && v) obj[k] = v; };
  [["kantoor","kantoor"],["adviseur","adviseur"],["tel","tel"],["email","email"],["web","web"]].forEach(([a,b])=>set(kg,b,HS[a]));
  set(sp,"kantoor",HS.kantoor); set(sp,"link",HS.web);
  const nb = state.nb; set(nb,"kantoor",HS.kantoor); set(nb,"adviseur",HS.adviseur); set(nb,"telefoon",HS.tel); set(nb,"email",HS.email); set(nb,"website",HS.web);
  if (HS.kleur) nb.kleur = HS.kleur;
  set(um,"adviseur",HS.adviseur); set(um,"kantoor",HS.kantoor); set(um,"tel",HS.tel);
  if (HS.fontData && !document.fonts.check("12px HSUpload")) { try { const ff = new FontFace("HSUpload", `url(${HS.fontData})`); ff.load().then(f=>document.fonts.add(f)).catch(()=>{}); } catch(e){} }
  const b = $("#hs-nav"); if (b) b.classList.toggle("on", hsActief());
}

/* Klantlinks: kantoorgegevens en huisstijl meegeven als parameters */
const KLANT_KINDS = ["check","verzekeringscheck","woontoekomst","aflossingsvrij","vhr","form","lijfrente","box3","woningwaarde"];
function hsLink(url){
  const m = String(url).match(/^(.*#\/item\/)([^?\s]+)(?:\?([^\s]*))?$/); if (!m) return url;
  const it = ITEMS.find(i=>i.id===m[2]); if (!it || !KLANT_KINDS.includes(it.kind)) return url;
  const q = new URLSearchParams(m[3]||"");
  [["kantoor",HS.kantoor],["adviseur",HS.adviseur],["tel",HS.tel],["mail",HS.email],["web",HS.web]].forEach(([k,v])=>{ if (v && !q.get(k)) q.set(k,v); });
  if (HS.kleur) q.set("kleur", HS.kleur.replace("#",""));
  if (HS.kleur2) q.set("kleur2", HS.kleur2.replace("#",""));
  if (HS.font || HS.fontEigen) q.set("font", fontNaamOk(HS.fontEigen) || HS.font);
  if (/^https:\/\//i.test(HS.logoUrl)) q.set("logo", HS.logoUrl);
  return m[1] + m[2] + (q.toString() ? "?" + q : "");
}
const hsLinkify = text => String(text).replace(/\S+#\/item\/[^\s"<>]+/g, u => hsLink(u));

/* Huisstijl van de adviseur toepassen op een klanttool (via de link) */
function pasThemaToe(){
  const r = document.documentElement.style, b = document.body;
  ["--y","--y-2","--y-soft","--y-ink","--k","--font"].forEach(v=>r.removeProperty(v));
  b.classList.remove("hs-donker","hs-eigen");
  const lg = $(".brand .logo"), lbl = $(".brand span");
  if (lg){ lg.style.backgroundImage = ""; lg.classList.remove("hs"); }
  if (lbl && lbl.dataset.orig) lbl.innerHTML = lbl.dataset.orig;
  if (!/^#\/item\//.test(location.hash)) return;
  const q = new URLSearchParams(location.hash.split("?")[1]||"");
  const k = hexOk(q.get("kleur")), k2 = hexOk(q.get("kleur2")), f = q.get("font"), logo = q.get("logo")||"", kantoor = (q.get("kantoor")||"").slice(0,60);
  if (!(k || k2 || f || logo)) return;
  b.classList.add("hs-eigen");
  if (k){ r.setProperty("--y",k); r.setProperty("--y-2",mixHex(k,"#ffffff",.15)); r.setProperty("--y-soft",mixHex(k,"#ffffff",.85)); r.setProperty("--y-ink",mixHex(k,"#000000",.45)); if (textColorOn(k)==="#ffffff") b.classList.add("hs-donker"); }
  if (k2 && textColorOn(k2)==="#ffffff") r.setProperty("--k",k2);
  if (f) r.setProperty("--font", fontStack(f));
  if (lg && /^https:\/\/[^\s"'()]+$/i.test(logo)){ lg.style.backgroundImage = `url("${logo}")`; lg.classList.add("hs"); }
  if (lbl && kantoor){ lbl.dataset.orig = lbl.dataset.orig || lbl.innerHTML; lbl.textContent = kantoor; }
}

/* ---------- Beeld voor social media in de eigen huisstijl ---------- */
const FORMATEN = { vierkant:[1080,1080,"Vierkant 1:1 · Instagram, Facebook, LinkedIn"], staand:[1080,1350,"Staand 4:5 · Instagram-feed"], liggend:[1200,627,"Liggend 1,91:1 · LinkedIn, Facebook"], story:[1080,1920,"Story 9:16 · Instagram, Facebook"] };
const ICOON_WOORDEN = [["pension","pensioen|lijfrente|aow"],["euro","belasting|box 3|geld|kosten|aftrek|woz"],["orv","overlijden|orv|nabestaand|uitvaart"],["insurance","verzeker|polis|dekking|schade"],["leaf","duurza|energie|label|isol"],["percentage","rente|leennorm|nibud|procent"],["snow","wintersport|ski"],["car","auto|svi"],["education","student|studer"],["baby","kind|gezin|baby"],["company","ondernemer|zzp|aov|bedrijf"],["moving","verhuiz|verkop|kopen|woning op"],["house report","woningwaarde|taxatie|fundering|woning"],["calendar","rentevast|jaarlijks|check"],["heart","bedankt|verjaardag"]];
const kiesIcoon = (titel, tekst="") => { for (const t of [titel, tekst]){ const s = norm(t); const f = ICOON_WOORDEN.find(([,w])=>new RegExp(w).test(s)); if (f) return f[0]; } return "mortgage"; };
function brandSvg({titel, ic, w=1080, h=1080, maat}){
  const bg = hsKleur(), ink = textColorOn(bg), acc = hsKleur2(), accInk = textColorOn(acc);
  const licht = mixHex(bg, ink==="#000000" ? "#ffffff" : "#ffffff", ink==="#000000" ? .35 : .18);
  const F = hsFont().replace(/"/g,"'"), I = ICONS[ic] || ICONS.mortgage;
  const X = s => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
  const hex = (cx,cy,r,fill) => `<polygon points="${[0,1,2,3,4,5].map(k=>{ const a=Math.PI/180*(60*k-90); return (cx+r*Math.cos(a)).toFixed(1)+","+(cy+r*Math.sin(a)).toFixed(1); }).join(" ")}" fill="${fill}"/>`;
  const breed = w/h > 1.3, logo = HS.logo, voet = !!(logo || HS.kantoor || HS.web);
  const fh = voet ? Math.round(Math.max(90, h*0.1)) : 0, pad = Math.round(w*0.075);
  const tekstB = breed ? w*0.58 : w - 2*pad, tekstH = (breed ? h - fh - 2*pad : (h - fh)*0.5);
  let fs = Math.round(Math.min(w,h)*0.09), lines = [];
  for (let n=0; n<14; n++){
    const maxc = Math.max(8, Math.floor(tekstB/(fs*0.56))); lines = []; let cur = "";
    titel.split(/\s+/).forEach(wd=>{ if ((cur+" "+wd).trim().length > maxc){ if (cur) lines.push(cur); cur = wd; } else cur = (cur+" "+wd).trim(); }); if (cur) lines.push(cur);
    if (lines.length*fs*1.15 <= tekstH && Math.max(...lines.map(l=>l.length))*fs*0.56 <= tekstB) break; fs = Math.round(fs*0.9);
  }
  const lh = Math.round(fs*1.15);
  const r = breed ? h*0.32 : Math.min(w,h)*0.2, hx = breed ? w*0.8 : pad + r*0.9, hy = breed ? (h-fh)/2 : pad + r;
  const y0 = breed ? (h - fh)/2 - (lines.length*lh)/2 + fs*0.85 : h - fh - pad - (lines.length-1)*lh;
  const is = r*1.05;
  return `<svg xmlns="http://www.w3.org/2000/svg" ${maat?`width="${maat}"`:`width="${w}" height="${h}"`} viewBox="0 0 ${w} ${h}">
    ${HS.fontData?`<defs><style>${hsFontFace()}</style></defs>`:""}
    <rect width="${w}" height="${h}" fill="${bg}"/>
    ${hex(w*0.9, h*0.1, Math.min(w,h)*0.16, licht)}${hex(w*0.06, h-fh-h*0.06, Math.min(w,h)*0.1, licht)}
    ${hex(hx, hy, r, acc)}
    <svg x="${(hx-is/2).toFixed(1)}" y="${(hy-is/2).toFixed(1)}" width="${is.toFixed(1)}" height="${is.toFixed(1)}" viewBox="${I[0]}">${I[1].replace(/currentColor/g, accInk !== ink ? bg : accInk)}</svg>
    ${lines.map((l,k)=>`<text x="${pad}" y="${(y0 + k*lh).toFixed(1)}" font-family="${F}" font-size="${fs}" font-weight="800" fill="${ink}">${X(l)}</text>`).join("")}
    ${voet?`<rect x="0" y="${h-fh}" width="${w}" height="${fh}" fill="#ffffff"/>
      ${logo?`<image href="${logo}" x="${pad}" y="${h-fh+fh*0.18}" height="${fh*0.64}" width="${w*0.4}" preserveAspectRatio="xMinYMid meet"/>`:`<text x="${pad}" y="${h-fh/2+fh*0.12}" font-family="${F}" font-size="${Math.round(fh*0.3)}" font-weight="800" fill="#000">${X(HS.kantoor)}</text>`}
      ${HS.web?`<text x="${w-pad}" y="${h-fh/2+fh*0.1}" text-anchor="end" font-family="${F}" font-size="${Math.round(fh*0.24)}" font-weight="700" fill="#333">${X(HS.web.replace(/^https?:\/\//,""))}</text>`:""}`:""}
  </svg>`;
}
async function svgNaarPngMaat(svg, w, h){
  const img = new Image(); img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  await img.decode();
  const c = document.createElement("canvas"); c.width = w; c.height = h; c.getContext("2d").drawImage(img,0,0,w,h);
  return c.toDataURL("image/png");
}
const dataUrlNaarBlob = async u => (await fetch(u)).blob();

/* ---------- Teksten per platform ---------- */
const kortAf = (s, n) => s.length <= n ? s : s.slice(0, Math.max(s.lastIndexOf(" ", n), n*0.8)).replace(/[,;:\s]+$/,"") + "…";
const hashtag = t => "#" + norm(t).replace(/[^a-z0-9 ]/g,"").split(" ").filter(Boolean).map((w,i)=>i?w[0].toUpperCase()+w.slice(1):w).join("");
function socialTags(tags){
  const eigen = (tags||[]).map(t=>t.startsWith("#")?t:hashtag(t)).filter(t=>t.length>2 && t.length<24);
  return [...new Set(eigen)];
}
function tekstVanSjabloon(txt){
  const regels = fillTpl(txt).split("\n"), uit = [];
  for (const l of regels){
    if (/^met vriendelijke groet/i.test(l.trim())) break;
    if (/^(beste|geachte)\b/i.test(l.trim()) || /\[[^\]]+\]/.test(l)) continue;
    uit.push(l.startsWith("## ") ? "▸ " + l.slice(3) : l.startsWith("- ") ? "• " + l.slice(2) : l);
  }
  return uit.join("\n").replace(/\n{3,}/g,"\n\n").trim();
}
function socialTekst(platform, s){
  const L = (s.link||"").trim(), sign = HS.kantoor ? `\n\n${HS.kantoor}` : "", tags = socialTags(s.tags);
  const basis = ["#hypotheek","#financieeladvies","#wonen","#verzekeren","#geldzaken","#advies"];
  const eerste = s.tekst.split(/\n{2,}/)[0];
  if (platform==="linkedin") return `${s.titel}\n\n${kortAf(s.tekst, 1100)}\n\n👉 Meer weten? ${L || "Neem gerust contact met ons op."}${sign}\n\n${[...new Set([...tags.slice(0,3), "#hypotheekadvies"])].join(" ")}`;
  if (platform==="facebook") return `${s.titel}\n\n${kortAf(eerste.length>120?eerste:s.tekst, 450)}\n\n👉 ${L || "Stuur ons een bericht, we denken graag met je mee."}${sign}\n\n${tags.slice(0,3).join(" ")}`;
  return `${s.titel}\n\n${kortAf(s.tekst, 900)}\n\n📩 Vragen? Stuur ons een DM${L?" of kijk via de link in onze bio":""}.${sign}\n\n${[...new Set([...tags, ...basis])].slice(0,10).join(" ")}`;
}

/* ---------- Deelvenster ---------- */
const PLATFORMS = { linkedin:["LinkedIn","liggend",2950], facebook:["Facebook","vierkant",1500], instagram:["Instagram","staand",2200] };
const so = { platform:"linkedin", formaat:"liggend", bron:null, teksten:{} };
function openSocial(bron){
  so.bron = { titel:bron.titel||"", tekst:(bron.tekst||"").trim(), link:hsLinkify(bron.link || HS.web || ""), tags:bron.tags||[], ic:bron.ic || kiesIcoon(bron.titel||"", bron.tekst||"") };
  so.teksten = {}; so.formaat = PLATFORMS[so.platform][1];
  let d = $("#so-dlg");
  if (!d){ d = document.createElement("div"); d.id = "so-dlg"; d.className = "so-dlg"; d.setAttribute("role","dialog"); d.setAttribute("aria-modal","true"); d.setAttribute("aria-label","Delen op social media"); document.body.appendChild(d); }
  d.hidden = false; document.body.classList.add("so-open");
  const kan = !!(navigator.canShare && navigator.share);
  d.innerHTML = `<div class="so-box cut">
    <div class="so-head"><h2>Delen op social media</h2><button class="btn btn-o btn-sm" id="so-x" aria-label="Sluiten">✕</button></div>
    <div class="tabs" role="tablist">${Object.entries(PLATFORMS).map(([k,[l]])=>`<button class="tab" role="tab" data-so="${k}" aria-selected="${k===so.platform}">${l}</button>`).join("")}</div>
    <div class="so-grid">
      <div>
        <label class="f" for="so-titel">Titel (ook op de afbeelding)</label><input class="i" id="so-titel" value="${esc(so.bron.titel)}">
        <label class="f" for="so-link">Link</label><input class="i" id="so-link" value="${esc(so.bron.link)}" placeholder="https://www.jouwkantoor.nl/…">
        <label class="f" for="so-txt">Tekst voor <span id="so-pl"></span> <span class="hint" id="so-n" style="margin:0"></span></label>
        <textarea class="i" id="so-txt" rows="11" style="min-height:220px"></textarea>
        <p class="hint" id="so-tip"></p>
        <div class="actions" style="flex-direction:row;flex-wrap:wrap">
          <button class="btn btn-k btn-sm" id="so-copy">${icon("copy",16)} Kopieer tekst</button>
          <button class="btn btn-y btn-sm" id="so-open"></button>
          ${kan?`<button class="btn btn-o btn-sm" id="so-share">${icon("share",16)} Delen via telefoon</button>`:""}
        </div>
      </div>
      <div>
        <label class="f" for="so-fmt">Formaat afbeelding</label>
        <select class="i" id="so-fmt">${Object.entries(FORMATEN).map(([k,[w,h,l]])=>`<option value="${k}">${esc(l)} (${w} × ${h})</option>`).join("")}</select>
        <div id="so-img" class="so-img"></div>
        <div class="actions" style="flex-direction:row;flex-wrap:wrap;margin-top:8px">
          <button class="btn btn-o btn-sm" id="so-png">${icon("download",16)} Download afbeelding</button>
          <a class="btn btn-o btn-sm" href="#/huisstijl" id="so-hs">${icon("partner",16)} Huisstijl ${hsActief()?"aanpassen":"instellen"}</a>
        </div>
        <p class="hint">${hsActief()?"In jouw huisstijl.":"Nog in Blinqx-stijl: stel je eigen logo, kleuren en lettertype in."}</p>
      </div>
    </div>
    <div class="note" style="margin:12px 0 0"><strong>Let op, AFM/compliance:</strong> een post is wervende communicatie: juist, duidelijk en niet misleidend. Controleer bedragen en regels vóór plaatsing en geef in reacties geen persoonlijk advies.</div>
  </div>`;
  const tekstNu = () => so.teksten[so.platform] ?? socialTekst(so.platform, { ...so.bron, titel:$("#so-titel").value, link:$("#so-link").value });
  const tips = { linkedin:"Tip: zet de link in de eerste reactie in plaats van in de post; dat geeft vaak meer bereik. LinkedIn neemt de tekst niet automatisch over: plak hem na het openen.", facebook:"Facebook neemt de tekst niet automatisch over: de tekst staat op je klembord, plak hem na het openen. Voor een post met eigen afbeelding: download de afbeelding en upload die zelf.", instagram:"Instagram heeft geen deellink voor websites. Download de afbeelding en plak de tekst in de app, of gebruik ‘Delen via telefoon’. Links in Instagram-posts zijn niet klikbaar; zet je link in je bio." };
  const tekenen = () => {
    $$("[data-so]").forEach(t=>t.setAttribute("aria-selected", t.dataset.so===so.platform));
    $("#so-pl").textContent = PLATFORMS[so.platform][0]; $("#so-txt").value = tekstNu(); $("#so-tip").textContent = tips[so.platform];
    $("#so-open").innerHTML = so.platform==="instagram" ? `${icon("download",16)} Afbeelding + tekst` : `Open ${PLATFORMS[so.platform][0]} ↗`;
    $("#so-fmt").value = so.formaat; teller(); beeld();
  };
  const teller = () => { const n = $("#so-txt").value.length, max = PLATFORMS[so.platform][2]; $("#so-n").textContent = `${n} / ${max} tekens`; $("#so-n").style.color = n > max ? "var(--red)" : ""; };
  const beeld = () => { const [w,h] = FORMATEN[so.formaat]; $("#so-img").innerHTML = brandSvg({ titel:$("#so-titel").value, ic:so.bron.ic, w, h, maat:"100%" }); };
  const png = async () => { const [w,h] = FORMATEN[so.formaat]; return svgNaarPngMaat(brandSvg({ titel:$("#so-titel").value, ic:so.bron.ic, w, h }), w, h); };
  const bestandsnaam = () => `post-${slug($("#so-titel").value).slice(0,50)||"social"}-${so.formaat}.png`;
  const downloadPng = async () => { try { const a = Object.assign(document.createElement("a"), { href: await png(), download: bestandsnaam() }); document.body.appendChild(a); a.click(); a.remove(); return true; } catch(e){ toast("Afbeelding maken lukte niet in deze browser"); return false; } };
  const sluit = () => { d.hidden = true; document.body.classList.remove("so-open"); document.removeEventListener("keydown", esc_); };
  const esc_ = e => { if (e.key === "Escape") sluit(); };
  document.addEventListener("keydown", esc_);
  d.onclick = e => { if (e.target === d) sluit(); };
  $("#so-x").onclick = sluit; $("#so-hs").onclick = sluit;
  $$("[data-so]").forEach(t=>t.onclick=()=>{ so.platform = t.dataset.so; so.formaat = PLATFORMS[so.platform][1]; tekenen(); });
  $("#so-txt").oninput = () => { so.teksten[so.platform] = $("#so-txt").value; teller(); };
  $("#so-titel").oninput = () => { so.teksten = {}; $("#so-txt").value = tekstNu(); teller(); beeld(); };
  $("#so-link").oninput = () => { so.teksten = {}; $("#so-txt").value = tekstNu(); teller(); };
  $("#so-fmt").onchange = e => { so.formaat = e.target.value; beeld(); };
  $("#so-copy").onclick = async () => toast(await copyText($("#so-txt").value) ? "Tekst gekopieerd" : "Kopiëren lukte niet");
  $("#so-png").onclick = async () => { if (await downloadPng()) toast("Afbeelding gedownload"); };
  $("#so-open").onclick = async () => {
    const tekst = $("#so-txt").value, link = $("#so-link").value.trim();
    await copyText(tekst);
    if (so.platform === "instagram"){ if (await downloadPng()) toast("Afbeelding gedownload en tekst gekopieerd"); return; }
    if (!/^https?:\/\//i.test(link)){ toast("Tekst gekopieerd. Vul een link (https://…) in om direct te delen, of plaats de post met de afbeelding."); return; }
    const url = so.platform === "linkedin" ? "https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(link) : "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(link);
    window.open(url, "_blank", "noopener"); toast("Tekst gekopieerd: plak hem in je post");
  };
  if ($("#so-share")) $("#so-share").onclick = async () => {
    try { const file = new File([await dataUrlNaarBlob(await png())], bestandsnaam(), { type:"image/png" }); const data = { text:$("#so-txt").value, files:[file] };
      if (navigator.canShare(data)) await navigator.share(data); else await navigator.share({ text:$("#so-txt").value }); }
    catch(e){ if (e.name !== "AbortError") toast("Delen lukte niet; gebruik Download"); }
  };
  tekenen(); setTimeout(()=>$("#so-x").focus(), 30);
}

/* Bron voor het deelvenster per item */
function socialBron(item){
  if (item.kind === "insluiten") return null;
  const base = location.href.split("#")[0], link = hsLink(base + "#/item/" + item.id);
  const tags = item.tags || [];
  if (item.kind === "campagne" || item.kind === "selectie"){
    const s = item.data.sjablonen?.[0];
    if (s) return { titel:fillTpl(s.onderwerp), tekst:tekstVanSjabloon(s.tekst), tags, link:HS.web };
    return { titel:item.data.title, tekst:(item.data.tekst||[item.data.summary]).join("\n\n"), tags, link:HS.web };
  }
  if (item.kind === "check" && CHECKS[item.id]) { const c = CHECKS[item.id]; return { titel:c.h1, tekst:`${c.intro}\n\nDoe de korte check: het kost maar een paar minuten. Uw antwoorden blijven bij u.`, tags, link }; }
  if (item.kind === "form"){ const f = FORMS.find(x=>x.id===item.id); if (f) return { titel:f.titel, tekst:f.intro || f.sub, tags, link }; }
  if (item.kind === "nieuwsbrief") return { titel:NB.title, tekst:NB.intro, tags, link:HS.web };
  if (UITNODIGING[item.id]) { const u = UITNODIGING[item.id]; return { titel:u.o, tekst:tekstVanSjabloon(u.x.replace("{link}","")), tags, link }; }
  if (KLANT_KINDS.includes(item.kind)) return { titel:item.title, tekst:item.summary, tags, link };
  if (["klanttools","content","scans"].includes(item.cat)) return { titel:item.title, tekst:item.summary, tags, link:item.url || link };
  return null;
}
function socialKnopInHero(item){
  if (document.body.classList.contains("klantmodus")) return;
  const b = socialBron(item); if (!b) return;
  const head = $("#hero .detail-head"); if (!head) return;
  let btns = head.querySelector(".btns"); if (!btns){ btns = document.createElement("div"); btns.className = "btns"; head.appendChild(btns); }
  const k = document.createElement("button"); k.className = "btn btn-k adv-only"; k.type = "button"; k.innerHTML = `${icon("share",18)} Deel op social`;
  k.onclick = () => openSocial(socialBron(item)); btns.appendChild(k);
}

/* ---------- Pagina: jouw huisstijl ---------- */
function leesBestand(file, max){ return new Promise((ok, nok)=>{ if (!file) return nok(); if (file.size > max) { toast(`Bestand te groot (max. ${Math.round(max/1024)} kB)`); return nok(); } const r = new FileReader(); r.onload = () => ok(r.result); r.onerror = nok; r.readAsDataURL(file); }); }
function viewHuisstijl(){
  setNav("huisstijl");
  smallHero([`<b>Jouw huisstijl</b>`], `
    <div class="detail-head"><div><span class="badge gratis">Gratis</span> <span class="badge cat">Huisstijl</span><h1>Jouw logo, kleuren en lettertype</h1>
      <p>Stel één keer je huisstijl in. Nieuwsbrief, mailsjablonen, Word-bestanden, prints, social-afbeeldingen en de klantlinks van de tools gebruiken daarna jouw logo, kleuren en lettertype.</p></div></div>`);
  const kl = (k, l, def) => `<div><label class="f" for="hs-${k}">${l}</label><div class="row" style="gap:8px"><input type="color" id="hs-${k}c" value="${HS[k]||def}" aria-label="${l}"><input class="i" id="hs-${k}" data-hs="${k}" value="${esc(HS[k])}" placeholder="${def}" style="margin:0;max-width:130px"></div></div>`;
  app.innerHTML = `<div class="wrap"><div class="layout">
    <aside>
      <form class="panel cut" onsubmit="return false">
        <h2><span class="hexi">1</span>Logo</h2>
        <label class="f" for="hs-logo">Logo uploaden (PNG, JPG of SVG, max. 1 MB)</label>
        <input class="i" type="file" id="hs-logo" accept="image/png,image/jpeg,image/svg+xml,image/webp">
        <div id="hs-logo-pv" class="hs-logo-pv"></div>
        <label class="f" for="hs-logoUrl">Logo-URL (https), voor e-mail en klantlinks</label>
        <input class="i" id="hs-logoUrl" data-hs="logoUrl" value="${esc(HS.logoUrl)}" placeholder="https://www.jouwkantoor.nl/logo.png">
        <p class="hint">Een geüpload logo werkt in Word, print en afbeeldingen. In e-mail tonen veel mailprogramma's alleen een logo dat online staat; vul daarom ook de URL van je logo op je eigen website in.</p>
        <h2 style="margin-top:14px"><span class="hexi">2</span>Kleuren</h2>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:0 10px">${kl("kleur","Hoofdkleur","#FFCD00")}${kl("kleur2","Accentkleur","#000000")}</div>
        <h2 style="margin-top:14px"><span class="hexi">3</span>Lettertype</h2>
        <label class="f" for="hs-font">Lettertype</label>
        <select class="i" id="hs-font" data-hs="font"><option value="">Standaard (Arial)</option>${Object.keys(FONTS).map(f=>`<option ${HS.font===f?"selected":""} style="font-family:${FONTS[f].replace(/"/g,"'")}">${f}</option>`).join("")}</select>
        <label class="f" for="hs-fontEigen">Of eigen lettertype (naam)</label>
        <input class="i" id="hs-fontEigen" data-hs="fontEigen" value="${esc(HS.fontEigen)}" placeholder="Bijv. Poppins">
        <label class="f" for="hs-fontFile">Lettertypebestand (WOFF2, WOFF, TTF of OTF, max. 600 kB)</label>
        <input class="i" type="file" id="hs-fontFile" accept=".woff2,.woff,.ttf,.otf">
        <p class="hint">Een eigen lettertype werkt in de afbeeldingen en prints op deze computer. In e-mail en Word valt het terug op het gekozen standaardlettertype als de ontvanger het niet heeft. Controleer of je licentie gebruik in afbeeldingen toestaat.</p>
        <h2 style="margin-top:14px"><span class="hexi">4</span>Kantoorgegevens</h2>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:0 10px">
          ${[["kantoor","Kantoornaam"],["adviseur","Naam adviseur"],["tel","Telefoon"],["email","E-mail"],["web","Website"]].map(([k,l])=>`<div><label class="f" for="hs-${k}">${l}</label><input class="i" id="hs-${k}" data-hs="${k}" value="${esc(HS[k])}"></div>`).join("")}
        </div>
      </form>
      <div class="panel cut"><h2><span class="hexi">5</span>Bewaren</h2>
        <p>Deze site bewaart niets. Download je huisstijl als bestand en laad het de volgende keer in.</p>
        <div class="actions" style="flex-direction:row;flex-wrap:wrap">
          <button class="btn btn-y btn-sm" id="hs-save">${icon("download",16)} Download huisstijlbestand</button>
          <label class="btn btn-o btn-sm" for="hs-load" style="cursor:pointer">Laad huisstijlbestand</label><input type="file" id="hs-load" accept=".json,application/json" hidden>
          <button class="btn btn-o btn-sm" id="hs-reset">Terug naar Blinqx-stijl</button>
        </div>
        <p class="hint">Partijen die een huisstijlbestand aanleveren (bijvoorbeeld een kantoor of een samenwerkingsverband), kunnen dat hier laden.</p></div>
    </aside>
    <section>
      <div class="panel cut"><h2>Voorbeeld: social-afbeelding</h2>
        <div style="display:grid;grid-template-columns:1fr 1.4fr;gap:12px;align-items:start" class="hs-pv2"><div id="hs-pv-sq"></div><div id="hs-pv-ls"></div></div>
        <div class="actions" style="flex-direction:row;flex-wrap:wrap;margin-top:10px"><button class="btn btn-k btn-sm" id="hs-try">${icon("share",16)} Probeer het deelvenster</button></div></div>
      <div class="panel cut"><h2>Voorbeeld: e-mail en Word</h2><div class="preview-body" id="hs-pv-mail" style="padding:16px;background:#fff;border:1px solid var(--line-2)"></div></div>
      <div class="panel cut"><h2>Klantlinks in jouw huisstijl</h2>
        <p>Klantlinks die je op deze site kopieert (deellinks, uitnodigingsmails, social posts) krijgen automatisch je kantoorgegevens, kleuren, lettertype en logo-URL mee. De klant ziet de tool dan in jouw kleuren, met jouw logo.</p>
        <label class="f" for="hs-voorbeeldlink">Voorbeeld: ORV-check</label>
        <div class="row" style="gap:8px;flex-wrap:wrap"><input class="i" id="hs-voorbeeldlink" readonly style="flex:1 1 260px;margin:0;font-size:.85rem"><button class="btn btn-o btn-sm" id="hs-vlcopy" type="button">Kopieer</button><a class="btn btn-o btn-sm" id="hs-vlopen" target="_blank" rel="noopener">Bekijk als klant ↗</a></div>
        <p class="hint">Een logo komt alleen mee in de klantlink als je een logo-URL (https) hebt ingevuld; een geüpload bestand is te groot voor een link.</p></div>
      <div class="panel cut"><h2>Waar werkt je huisstijl?</h2><ul class="feat">
        <li>Nieuwsbrief: logo, kleur kop, lettertype en kantoorgegevens</li><li>Mailsjablonen van alle campagnes en selecties: logo, kopkleur en lettertype in e-mail, Word en print</li>
        <li>Social posts: afbeeldingen in vier formaten met jouw kleuren, logo en lettertype</li><li>Prints en PDF's van de tools: jouw logo bovenaan</li><li>Klantlinks van de tools: jouw kleuren, logo en lettertype</li></ul></div>
    </section></div></div>`;
  const tekenen = () => {
    hsSync();
    $("#hs-logo-pv").innerHTML = HS.logo ? `<img src="${HS.logo}" alt="Jouw logo"><button class="btn btn-o btn-sm" id="hs-logo-x" type="button">Verwijder</button>` : "";
    if ($("#hs-logo-x")) $("#hs-logo-x").onclick = () => { HS.logo = ""; $("#hs-logo").value = ""; tekenen(); };
    const t = "Verlaag je belastingdruk vóór 31 december";
    $("#hs-pv-sq").innerHTML = brandSvg({ titel:t, ic:"euro", w:1080, h:1080, maat:"100%" });
    $("#hs-pv-ls").innerHTML = brandSvg({ titel:"Klopt je WOZ-waarde?", ic:"house report", w:1200, h:627, maat:"100%" });
    const kk = hsKopKleur(), F = hsFont().replace(/"/g,"'");
    $("#hs-pv-mail").innerHTML = `<style>${hsFontFace()}</style>${hsKop()}<p style="font-family:${F};font-size:15px;color:#1d2b3a;margin:0 0 10px">Beste mevrouw Jansen,</p><p style="font-family:${F};font-size:15px;font-weight:bold;color:${kk};margin:14px 0 4px">Uw hypotheek is jarig</p><p style="font-family:${F};font-size:15px;color:#1d2b3a;margin:0 0 10px">Een goed moment om te kijken of uw hypotheek nog past bij uw situatie.</p><p style="font-family:${F};font-size:15px;color:#1d2b3a;margin:0">Met vriendelijke groet,<br>${esc(HS.adviseur||"[Naam adviseur]")}<br>${esc(HS.kantoor||"[Kantoornaam]")}</p>`;
    const vl = hsLink(location.href.split("#")[0] + "#/item/check-orv"); $("#hs-voorbeeldlink").value = vl; $("#hs-vlopen").href = vl;
  };
  $$("[data-hs]").forEach(el=>el.addEventListener("input", ()=>{ let v = el.value.trim(); if (el.dataset.hs==="kleur"||el.dataset.hs==="kleur2"){ v = hexOk(v); if (v) $(`#hs-${el.dataset.hs}c`).value = v; else if (el.value.trim()) return; } HS[el.dataset.hs] = v; tekenen(); }));
  ["kleur","kleur2"].forEach(k=>$(`#hs-${k}c`).addEventListener("input", e=>{ HS[k] = e.target.value; $(`#hs-${k}`).value = e.target.value; tekenen(); }));
  $("#hs-font").addEventListener("change", e=>{ HS.font = e.target.value; tekenen(); });
  $("#hs-logo").onchange = async e => { try { HS.logo = await leesBestand(e.target.files[0], 1024*1024); tekenen(); toast("Logo geladen"); } catch(_){} };
  $("#hs-fontFile").onchange = async e => { try { HS.fontData = await leesBestand(e.target.files[0], 600*1024); const ff = new FontFace("HSUpload", `url(${HS.fontData})`); await ff.load(); document.fonts.add(ff); tekenen(); toast("Lettertype geladen"); } catch(_){ HS.fontData = ""; toast("Lettertype laden lukte niet"); } };
  $("#hs-save").onclick = () => { download(`huisstijl-${slug(HS.kantoor||"kantoor")}.json`, JSON.stringify({ type:"blinqx-huisstijl", versie:1, ...HS }, null, 1), "application/json"); toast("Huisstijlbestand gedownload"); };
  $("#hs-load").onchange = async e => { const f = e.target.files[0]; if (!f) return;
    try { const j = JSON.parse(await f.text()); if (j.type !== "blinqx-huisstijl") throw 0;
      Object.keys(HS_LEEG).forEach(k=>{ const v = j[k]; HS[k] = typeof v === "string" ? v.slice(0, k==="logo"||k==="fontData" ? 2e6 : 300) : ""; });
      ["kleur","kleur2"].forEach(k=>HS[k] = hexOk(HS[k]));
      if (HS.logo && !/^data:image\/(png|jpeg|svg\+xml|webp);base64,/.test(HS.logo)) HS.logo = "";
      if (HS.fontData && !/^data:[\w\/+.-]*;base64,/.test(HS.fontData)) HS.fontData = "";
      if (HS.logoUrl && !/^https:\/\//i.test(HS.logoUrl)) HS.logoUrl = "";
      hsSync(); viewHuisstijl(); toast("Huisstijl geladen"); } catch(_){ toast("Dit is geen geldig huisstijlbestand"); } };
  $("#hs-reset").onclick = () => { Object.assign(HS, HS_LEEG); viewHuisstijl(); hsSync(); toast("Terug naar Blinqx-stijl"); };
  $("#hs-vlcopy").onclick = async () => toast(await copyText($("#hs-voorbeeldlink").value) ? "Link gekopieerd" : "Kopiëren lukte niet");
  $("#hs-try").onclick = () => openSocial({ titel:"Verlaag je belastingdruk vóór 31 december", tekst:tekstVanSjabloon(CAMP.find(c=>c.id==="campagne-eindejaar-belasting")?.sjablonen[0].tekst || ""), tags:["belasting","lijfrente","eindejaar"], ic:"euro" });
  tekenen();
}

/* ---------- Insluitcodes ---------- */
const LIVE_URL = "https://jeroen-o.github.io/finmarketing/";
const siteBase = () => /^https?:$/.test(location.protocol) ? location.href.split("#")[0] : LIVE_URL;
const INSLUIT_EXTERN = {
  pandwise:{ naam:"PandWise: gratis woningwaarderapport", titel:"Woningwaarderapport", hoogte:1400, adres:true,
    url:o => "https://pandwise.nl/?embed=1" + [["adviseur",o.adviseur],["kantoor",o.kantoor],["logo",/^https:\/\//i.test(o.logo)?o.logo:""]].filter(x=>x[1]).map(([k,v])=>`&${k}=${encodeURIComponent(v)}`).join("") + (o.adres ? `&q=${encodeURIComponent(o.adres)}&auto=1` : ""),
    info:"Klanten vullen een adres of Funda-link in en zien direct waarde-indicatie, fundering, klimaat en geluid. Met je naam, kantoor en logo staat het rapport op jouw naam." },
  duurzaamheidsprofiel:{ naam:"Duurzaamheidsprofiel", titel:"Duurzaamheidsprofiel", hoogte:1200,
    url:() => "https://duurzaamheidsprofiel.hypotheekbond.nl/",
    info:"Klanten zien op postcode en huisnummer hoe hun woning scoort en welke maatregelen mogelijk zijn, met kosten en besparing." }
};
const insluitTools = () => [
  ...Object.entries(INSLUIT_EXTERN).map(([id,t])=>({ id, ...t })),
  ...ITEMS.filter(i=>KLANT_KINDS.includes(i.kind) && i.kind!=="woningwaarde").map(i=>({ id:i.id, naam:i.title.replace(/^Klantcheck: /,"Klantcheck: "), titel:i.title.replace(/^Klantcheck: /,""), hoogte:1100, eigen:true,
    url:() => { const u = hsLink(siteBase() + "#/item/" + i.id); return u + (u.includes("?") ? "&" : "?") + "embed=1"; }, info:i.summary }))
];
const ins = { tool:"pandwise", hoogte:"", adres:"", vorm:"iframe" };
function viewInsluiten(item, params){
  setNav("klanttools");
  if (params?.get?.("tool")) ins.tool = params.get("tool");
  smallHero([`<a href="#/?cat=klanttools">Klanttools</a>`, `<b>Insluitcodes</b>`], `
    <div class="detail-head"><div>${badge(item.model)} <span class="badge cat">Eigen website</span><h1>Tools op je eigen website</h1><p>Kies een tool, vul je gegevens in en kopieer de code. Plak die op je website, in Google Sites, WordPress of Wix. Zo gebruiken klanten de tool op jouw site, op jouw naam.</p></div></div>`);
  const tools = insluitTools();
  if (!tools.find(t=>t.id===ins.tool)) ins.tool = "pandwise";
  const opt = (lst) => lst.map(t=>`<option value="${t.id}" ${t.id===ins.tool?"selected":""}>${esc(t.naam)}</option>`).join("");
  app.innerHTML = `<div class="wrap"><div class="layout">
    <aside>
      <form class="panel cut" onsubmit="return false">
        <h2><span class="hexi">1</span>Kies de tool</h2>
        <label class="f" for="in-tool">Tool</label>
        <select class="i" id="in-tool"><optgroup label="Gratis tools van Blinqx">${opt(tools.filter(t=>!t.eigen))}</optgroup><optgroup label="Klanttools uit deze bibliotheek">${opt(tools.filter(t=>t.eigen))}</optgroup></select>
        <p class="hint" id="in-info"></p>
        <h2 style="margin-top:14px"><span class="hexi">2</span>Jouw gegevens</h2>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:0 10px">
          ${[["adviseur","Naam adviseur"],["kantoor","Kantoornaam"]].map(([k,l])=>`<div><label class="f" for="in-${k}">${l}</label><input class="i" id="in-${k}" data-in="${k}" value="${esc(HS[k])}"></div>`).join("")}
        </div>
        <label class="f" for="in-logo">Logo-URL (https)</label><input class="i" id="in-logo" data-in="logoUrl" value="${esc(HS.logoUrl)}" placeholder="https://www.jouwkantoor.nl/logo.png">
        <div id="in-adresblok"><label class="f" for="in-adres">Vast adres (optioneel)</label><input class="i" id="in-adres" value="${esc(ins.adres)}" placeholder="Leeg laten: klant vult zelf in"><p class="hint">Handig op een pagina over één woning, bijvoorbeeld bij een aankoopbegeleiding.</p></div>
        <p class="hint" id="in-hs">Kleuren en lettertype van de klanttools komen uit <a href="#/huisstijl">jouw huisstijl</a>.</p>
        <h2 style="margin-top:14px"><span class="hexi">3</span>Weergave</h2>
        <label class="f" for="in-vorm">Vorm</label>
        <select class="i" id="in-vorm"><option value="iframe">Ingesloten in de pagina (iframe)</option><option value="knop">Knop die de tool opent</option><option value="link">Alleen de link</option></select>
        <label class="f" for="in-h">Hoogte in pixels</label><input class="i" id="in-h" inputmode="numeric" value="${esc(ins.hoogte)}">
      </form>
    </aside>
    <section>
      <div class="panel cut"><h2>Jouw code</h2>
        <textarea class="i" id="in-code" rows="7" readonly style="font-family:ui-monospace,Consolas,monospace;font-size:.8rem;min-height:150px"></textarea>
        <div class="actions" style="flex-direction:row;flex-wrap:wrap"><button class="btn btn-y btn-sm" id="in-copy" type="button">${icon("copy",16)} Kopieer code</button><button class="btn btn-o btn-sm" id="in-copyurl" type="button">${icon("link",16)} Kopieer alleen de link</button><a class="btn btn-o btn-sm" id="in-open" target="_blank" rel="noopener">Open los ↗</a></div></div>
      <div class="panel cut"><h2>Zo plaats je de code</h2>
        <div class="tabs" role="tablist">${["Google Sites","WordPress","Wix","Overige sites"].map((l,i)=>`<button class="tab" role="tab" data-intab="${i}" aria-selected="${i===0}">${l}</button>`).join("")}</div>
        <div id="in-uitleg"></div></div>
      <div class="panel cut" style="padding:0;overflow:hidden"><div class="preview-bar" style="padding:10px 16px"><span><b>Voorbeeld</b> zoals op jouw site</span></div><div id="in-pv"></div></div>
      <div class="note"><strong>Let op:</strong> je plaatst een tool op je eigen website; jij blijft verantwoordelijk voor hoe je die aanbiedt (gebruik voor eigen rekening en risico). De uitkomsten zijn indicaties, geen advies. Vermeld in je privacyverklaring dat je een ingesloten tool van een derde gebruikt als die gegevens verwerkt.</div>
    </section></div></div>`;
  const UITLEG = [
    ["Open je pagina in Google Sites.","Kies rechts <b>Invoegen → Insluiten</b> en daarna het tabblad <b>Code insluiten</b>.","Plak de code en klik op <b>Volgende → Invoegen</b>.","Sleep het blok groter, zodat de hele tool zichtbaar is, en publiceer de site."],
    ["Open de pagina in de editor.","Voeg een blok <b>Aangepaste HTML</b> (Custom HTML) toe.","Plak de code en klik op <b>Bijwerken</b> of <b>Publiceren</b>.","Werkt een iframe niet in je thema? Kies dan vorm ‘Knop die de tool opent’."],
    ["Klik in de editor op <b>Toevoegen → Insluiten (Embed code) → HTML insluiten</b>.","Kies <b>Code</b> en plak de code.","Maak het blok breed en hoog genoeg en publiceer."],
    ["Plak de code in de HTML van je pagina, op de plek waar de tool moet komen.","Bij een websitebouwer: zoek naar ‘HTML’, ‘Embed’ of ‘Code insluiten’.","Laat je site beheren door een webbureau? Stuur hun de code."]
  ];
  const tab = i => { $$("[data-intab]").forEach(t=>t.setAttribute("aria-selected", +t.dataset.intab===i)); $("#in-uitleg").innerHTML = `<ol class="steps">${UITLEG[i].map(s=>`<li>${s}</li>`).join("")}</ol>`; };
  $$("[data-intab]").forEach(t=>t.onclick=()=>tab(+t.dataset.intab)); tab(0);
  let pvUrl = "";
  const gen = () => {
    const t = tools.find(x=>x.id===ins.tool), h = Math.max(300, Math.min(4000, parseInt(String(ins.hoogte).replace(/\D/g,""))||t.hoogte));
    const url = t.url({ adviseur:HS.adviseur, kantoor:HS.kantoor, logo:HS.logoUrl, adres:ins.adres.trim() });
    $("#in-info").textContent = t.info || ""; $("#in-adresblok").hidden = !t.adres; $("#in-hs").hidden = !t.eigen;
    $("#in-h").placeholder = String(t.hoogte);
    const wie = HS.kantoor ? ` · ${HS.kantoor}` : "", a = s => s.replace(/&/g,"&amp;").replace(/"/g,"&quot;");
    const kleur = hsKleur(), ink = textColorOn(kleur);
    const code = ins.vorm === "iframe"
      ? `<!-- ${t.titel}${wie} -->\n<iframe src="${a(url)}" title="${a(t.titel)}" width="100%" height="${h}" style="border:0;width:100%;max-width:1200px;display:block;margin:0 auto" loading="lazy" allow="clipboard-write; web-share"></iframe>`
      : ins.vorm === "knop"
      ? `<!-- ${t.titel}${wie} -->\n<a href="${a(url)}" target="_blank" rel="noopener" style="display:inline-block;background:${kleur};color:${ink};font-family:${hsFont().replace(/"/g,"'")};font-weight:bold;text-decoration:none;padding:12px 20px">${esc(t.titel)} →</a>`
      : url;
    $("#in-code").value = code; $("#in-open").href = url;
    if (url !== pvUrl){ pvUrl = url; $("#in-pv").innerHTML = `<iframe src="${a(url)}" title="Voorbeeld" style="border:0;width:100%;height:${Math.min(h,900)}px;display:block" loading="lazy"></iframe>`; }
    else { const f = $("#in-pv iframe"); if (f) f.style.height = Math.min(h,900)+"px"; }
  };
  $("#in-tool").onchange = e => { ins.tool = e.target.value; gen(); };
  $("#in-vorm").value = ins.vorm; $("#in-vorm").onchange = e => { ins.vorm = e.target.value; gen(); };
  $("#in-h").oninput = e => { ins.hoogte = e.target.value; gen(); };
  $("#in-adres").onchange = e => { ins.adres = e.target.value; gen(); };
  $$("[data-in]").forEach(el=>el.addEventListener("change", ()=>{ const k = el.dataset.in, v = el.value.trim(); if (k==="logoUrl" && v && !/^https:\/\//i.test(v)){ toast("Logo-URL moet met https:// beginnen"); return; } HS[k] = v; hsSync(); gen(); }));
  $("#in-copy").onclick = async () => toast(await copyText($("#in-code").value) ? "Code gekopieerd" : "Kopiëren lukte niet");
  $("#in-copyurl").onclick = async () => toast(await copyText($("#in-open").href) ? "Link gekopieerd" : "Kopiëren lukte niet");
  gen();
}

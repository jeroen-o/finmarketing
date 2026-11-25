"""Verantwoord hypotheekrapport: overzichtstabel per persoon. Uitnodigingsmails bij klanttools."""
import os
p = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'template.html')
t = open(p, encoding='utf-8').read()


def rep(a, b, cnt=1):
    global t
    assert t.count(a) == cnt, (a[:70], t.count(a))
    t = t.replace(a, b)


# ---------- overzichtstabel ----------
rep('''        ${g("nu").map(scenRow).join("")}''', '''        ${g("nu").map(scenRow).join("")}
        ${overzicht(r)}''')
rep('''  const scenRow = s => `''', '''  const overzicht = r => {
    const pers = [vh.a.naam.trim()||"Aanvrager"]; if (vh.partner) pers.push(vh.p.naam.trim()||"Partner");
    const cel = s => s ? `<td style="padding:8px 6px;text-align:right;font-weight:800;color:${s.ok?"var(--ok)":"var(--red)"};white-space:nowrap">${s.ok?"✓ ":""}${fmtEUR(s.vm - s.bm)}</td>` : `<td style="padding:8px 6px;text-align:right;color:var(--muted)">–</td>`;
    const rows = pers.map((nm,idx)=>{
      const ao = r.scen.find(s=>s.groep==="ao" && s.wie===nm && s.pct===0.5) || r.scen.filter(s=>s.groep==="ao")[idx*4+1];
      const ww = r.scen.filter(s=>s.groep==="ww")[idx];
      const ov = vh.partner ? r.scen.filter(s=>s.groep==="ov")[idx===0?1:0] : null;   // overlijden van de partner
      const er = vh.partner ? r.scen.filter(s=>s.groep==="er")[idx] : null;
      const pe = r.scen.find(s=>s.groep==="pe");
      return `<tr style="border-top:1px solid var(--line-2)"><th scope="row" style="text-align:left;padding:8px 6px">${esc(nm)}</th>${cel(ao)}${cel(ww)}${cel(ov)}${cel(er)}${cel(pe)}</tr>`;
    }).join("");
    return `<h3 style="margin-top:16px">Verantwoord blijven wonen? Ruimte per maand</h3>
      <div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:.88rem;min-width:520px">
      <thead><tr style="color:var(--muted);font-size:.75rem;text-transform:uppercase;letter-spacing:.04em"><th></th><th style="text-align:right;padding:6px">AO 50%</th><th style="text-align:right;padding:6px">Werkloos</th><th style="text-align:right;padding:6px">Partner overlijdt</th><th style="text-align:right;padding:6px">Einde relatie</th><th style="text-align:right;padding:6px">Pensioen</th></tr></thead>
      <tbody>${rows}</tbody></table></div>
      <p class="hint" style="margin-top:4px">Verschil tussen verantwoorde en bruto maandlast. Groen: verantwoord; rood: tekort per maand.</p>`;
  };
  const scenRow = s => `''')

# ---------- uitnodigingsmails ----------
rep('''/* ---------- Social-postbank ---------- */''', '''/* ---------- Uitnodigingsmails bij klanttools ---------- */
const UITNODIGING = {
  "verantwoord-hypotheekrapport": {o:"Uw hypotheek is jarig: tijd voor een check", x:`{aanhef},

Uw hypotheek is weer een jaar ouder. Dat vieren we graag met een korte check: past uw hypotheek nog bij uw situatie, nu en later?

In een verantwoord hypotheekrapport ziet u wat er gebeurt bij arbeidsongeschiktheid, werkloosheid, pensioen of overlijden. Ook kijken we of u kunt besparen, bijvoorbeeld door rentekorting na een gestegen woningwaarde.

Zullen we een moment plannen? Reageer op deze mail of bel ons op {tel}.

Met vriendelijke groet,

{adviseur}
{kantoor}`},
  "woontoekomst-check": {o:"Blijven of gaan? Vier vragen over hoe u later wilt wonen", x:`{aanhef},

Bijna negen op de tien huiseigenaren van 55 jaar en ouder denken na over hoe ze later willen wonen. Geldverstrekkers kijken steeds eerder naar uw inkomen na pensionering. Heeft u plannen met uw woning, dan is het goed om dat op tijd te weten.

Met de woontoekomst-check geeft u in vier vragen aan hoe u erover denkt. Het kost ongeveer drie minuten en u bepaalt zelf of en hoe wij contact opnemen:
{link}

Met vriendelijke groet,

{adviseur}
{kantoor}`},
  "aflossingsvrij-check": {o:"Blijft uw aflossingsvrije hypotheek betaalbaar?", x:`{aanhef},

U heeft (een deel van) uw hypotheek aflossingsvrij. Blijft die betaalbaar als u met pensioen gaat, en wat gebeurt er op de einddatum?

Met deze korte check krijgt u een indicatief rapportcijfer:
{link}

De uitkomst is een indicatie en geen advies. Wilt u weten wat dit voor u betekent? Wij bespreken het graag met u.

Met vriendelijke groet,

{adviseur}
{kantoor}`},
  "hypotheekcijfer": {o:"Kunt u uw hypotheek blijven betalen?", x:`{aanhef},

Kunt u uw hypotheek blijven betalen, ook als u met pensioen gaat of uw rentevaste periode afloopt? Met de gratis hypotheekcheck krijgt u een hypotheekcijfer van 1 tot 10, met een persoonlijk rapport:
{link}

De uitkomst is een indicatie en geen persoonlijk advies. Wij bespreken het graag met u.

Met vriendelijke groet,

{adviseur}
{kantoor}`}
};
const um = { aanhef:"Beste [naam]", adviseur:"", kantoor:"", tel:"", link:"" };
function uitnodigingPanel(id, defLink){
  const u = UITNODIGING[id]; if (!u) return "";
  return `<div class="panel cut" id="um-panel"><h2><span class="hexi">${icon("mail",18)}</span>Uitnodigingsmail voor je klanten</h2>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:0 10px">
      ${[["aanhef","Aanhef"],["adviseur","Naam adviseur"],["kantoor","Kantoornaam"],["tel","Telefoon"]].map(([k,l])=>`<div><label class="f" for="um-${k}">${l}</label><input class="i" id="um-${k}" data-um="${k}" value="${esc(um[k])}"></div>`).join("")}
    </div>
    <p class="hint" style="margin:8px 0 4px"><b>Onderwerp:</b> ${esc(u.o)}</p>
    <div class="promo" id="um-txt"></div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px"><button class="btn btn-k btn-sm" id="um-copy">${icon("copy",16)} Kopieer mail</button><button class="btn btn-o btn-sm" id="um-word">${icon("download",16)} Word</button></div></div>`;
}
function bindUitnodiging(id, defLink){
  const u = UITNODIGING[id]; if (!u || !$("#um-panel")) return;
  const fill = () => u.x.replace(/\\{(aanhef|adviseur|kantoor|tel)\\}/g, (_,k)=> um[k].trim() || ({aanhef:"Beste [naam]",adviseur:"[Naam adviseur]",kantoor:"[Kantoornaam]",tel:"[telefoon]"}[k]))
                       .replace("{link}", defLink());
  const draw = () => $("#um-txt").textContent = fill();
  $$("[data-um]").forEach(el=>el.addEventListener("input",()=>{ um[el.dataset.um]=el.value; draw(); }));
  $("#um-copy").onclick = async () => toast(await copyText(`Onderwerp: ${u.o}\\n\\n${fill()}`) ? "Mail gekopieerd" : "Kopiëren lukte niet");
  $("#um-word").onclick = () => { download(`uitnodiging-${id}.doc`, "\\ufeff"+tplWord({naam:u.o, onderwerp:u.o, tekst:fill()}), "application/msword"); toast("Word-bestand gedownload"); };
  draw();
}

/* ---------- Social-postbank ---------- */''')

# VHR: paneel onder de adviseursinstellingen
rep('''        <div class="actions" style="margin-top:10px"><button type="button" class="btn btn-k btn-sm" id="vh-link">Kopieer deellink met kantoorgegevens</button></div>
      </details>''', '''        <div class="actions" style="margin-top:10px"><button type="button" class="btn btn-k btn-sm" id="vh-link">Kopieer deellink met kantoorgegevens</button></div>
      </details>
      ${uitnodigingPanel("verantwoord-hypotheekrapport")}''')
rep('''  $("#vh-demo").onclick = () => {''', '''  bindUitnodiging("verantwoord-hypotheekrapport", ()=>"");
  $("#vh-demo").onclick = () => {''')
# Woontoekomst
rep('''      <div class="note"><strong>Let op, AVG:</strong> de check vraagt alleen naam, telefoon en een optionele toelichting''', '''      ${uitnodigingPanel("woontoekomst-check")}
      <div class="note"><strong>Let op, AVG:</strong> de check vraagt alleen naam, telefoon en een optionele toelichting''')
rep('''  render();
  $("#wa-link").onclick = async () => {''', '''  render();
  bindUitnodiging("woontoekomst-check", () => { const p=new URLSearchParams(); [["adviseur","#wa-n"],["kantoor","#wa-k"],["mail","#wa-m"]].forEach(([k,id])=>{ const v=$(id).value.trim(); if(v) p.set(k,v); }); return location.href.split("#")[0]+"#/item/woontoekomst-check"+(p.toString()?"?"+p:""); });
  $("#wa-link").onclick = async () => {''')
# Aflossingsvrij
rep('''        <p class="hint">Werkt alleen als deze bibliotheek online staat (bijv. via GitHub Pages).</p>
      </details>''', '''        <p class="hint">Werkt alleen als deze bibliotheek online staat (bijv. via GitHub Pages).</p>
      </details>
      ${uitnodigingPanel("aflossingsvrij-check")}''')
rep('''  $("#af-demo").onclick = () => {''', '''  bindUitnodiging("aflossingsvrij-check", () => { const p=new URLSearchParams(); [["kantoor","#ad-k"],["tel","#ad-t"],["mail","#ad-m"],["web","#ad-w"]].forEach(([k,id])=>{ const v=$(id).value.trim(); if(v) p.set(k,v); }); return location.href.split("#")[0]+"#/item/aflossingsvrij-check"+(p.toString()?"?"+p:""); });
  $("#af-demo").onclick = () => {''')
# Hypotheekcijfer (generieke itempagina): paneel na de promo
rep('''      ${item.compliance?`<div class="note"><strong>Let op, AFM/compliance:</strong> ${esc(item.compliance)} Communiceer uitkomsten als indicatie, niet als advies of toezegging.</div>`:""}
    </section></div></div>`;''', '''      ${uitnodigingPanel(item.id)}
      ${item.compliance?`<div class="note"><strong>Let op, AFM/compliance:</strong> ${esc(item.compliance)} Communiceer uitkomsten als indicatie, niet als advies of toezegging.</div>`:""}
    </section></div></div>`;
  bindUitnodiging(item.id, () => item.consumerUrl || item.url || "");''')
open(p, 'w', encoding='utf-8').write(t)
print('ok')

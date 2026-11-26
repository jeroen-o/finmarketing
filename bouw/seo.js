/* SEO/GEO-bouwstap: maakt statische, crawlbare pagina's naast de app.
   Gebruik: node bouw/seo.js   (na python3 bouw/build.py; vereist Playwright)
   Maakt: item/<id>/index.html, kennisbank/<slug>/index.html, kennisbank/index.html,
          categorie/<id>/index.html, sitemap.xml, robots.txt, llms.txt, assets/og.png, assets/logo.png, favicon.svg */
const fs = require("fs"), path = require("path");
const { chromium } = require("playwright");
const R = path.resolve(__dirname, ".."), SITE = "https://marketingbieb.nl/";
const VANDAAG = new Date().toISOString().slice(0, 10);
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const kort = (s, n = 158) => { s = String(s || "").replace(/\s+/g, " ").trim(); return s.length <= n ? s : s.slice(0, s.lastIndexOf(" ", n - 1)).replace(/[,;:.\s]+$/, "") + "…"; };
const schrijf = (rel, inhoud) => { const f = path.join(R, rel); fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, inhoud); };
const MODEL = { gratis: "Gratis", freemium: "Freemium", betaald: "Betaald", aanvraag: "Op aanvraag" };

(async () => {
  const b = await chromium.launch(); const p = await b.newPage();
  await p.goto("file://" + path.join(R, "index.html") + "#/");
  const D = await p.evaluate(() => ({
    ITEMS: ITEMS.map(i => ({ ...i, data: undefined, dataId: i.data?.id })), CATS, KB,
    CAMP: CAMP.map(c => ({ id: c.id, waarom: c.waarom, blokken: c.blokken, doelgroep: c.doelgroep, watDoen: c.watDoen, stappen: c.stappen, sjablonen: c.sjablonen, compliance: c.compliance })),
    SEL: SEL.map(s => ({ id: s.id, tekst: s.tekst, punten: s.punten, extra: s.extra, tip: s.tip, voorbeeld: s.voorbeeld, compliance: s.compliance })),
    CHECKS: Object.fromEntries(Object.entries(CHECKS).map(([k, c]) => [k, { h1: c.h1, intro: c.intro, secties: c.secties.map(s => ({ titel: s.titel, items: s.items.map(i => i.q) })) }])),
    FORMS: FORMS.map(f => ({ id: f.id, titel: f.titel, intro: f.intro, stappen: f.stappen.map(s => ({ titel: s.titel, vragen: s.vragen.map(q => q.v) })) })),
    NB: { title: NB.title, intro: NB.intro, sections: NB.sections }, LOGO: getComputedStyle(document.querySelector(".logo")).backgroundImage
  }));
  const kbSlug = a => a.u.replace(/\/+$/, "").split("/").pop();

  /* ---------- assets ---------- */
  const logoB64 = (D.LOGO.match(/base64,([^")]+)/) || [])[1];
  if (logoB64) schrijf("assets/logo.png", Buffer.from(logoB64, "base64"));
  schrijf("favicon.svg", `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 36"><path d="M16 0l16 9v18l-16 9L0 27V9z" fill="#FFCD00"/><path d="M16 7l9 5v12l-9 5-9-5V12z" fill="#000"/></svg>`);
  await p.setViewportSize({ width: 1200, height: 630 });
  await p.setContent(`<html><body style="margin:0;width:1200px;height:630px;background:#FFCD00;font-family:Inter,'Segoe UI',Arial,sans-serif;position:relative;overflow:hidden">
    <svg style="position:absolute;right:-60px;top:-40px" width="520" height="580" viewBox="0 0 32 36"><path d="M16 0l16 9v18l-16 9L0 27V9z" fill="#FFE066"/></svg>
    <svg style="position:absolute;right:120px;top:150px" width="300" height="340" viewBox="0 0 32 36"><path d="M16 0l16 9v18l-16 9L0 27V9z" fill="#000"/><path d="M16 7l9 5v12l-9 5-9-5V12z" fill="#FFCD00"/></svg>
    <div style="position:absolute;left:80px;top:90px;width:640px">
      <img src="data:image/png;base64,${logoB64}" style="height:70px">
      <div style="font-size:74px;font-weight:800;line-height:1.05;margin-top:46px;color:#000">Marketingbieb.nl</div>
      <div style="font-size:36px;font-weight:700;line-height:1.25;margin-top:18px;color:#000">De marketingbibliotheek voor de financieel adviseur</div>
      <div style="font-size:24px;margin-top:26px;color:#26364a">Campagnes · klanttools · nieuwsbrieven · kennisbank</div></div></body></html>`);
  await p.waitForTimeout(300); schrijf("assets/og.png", await p.screenshot());
  await b.close();

  /* ---------- sjabloon ---------- */
  const CSS = `:root{--y:#FFCD00;--k:#000;--ink:#001023;--muted:#56677c;--bg:#E4EAF1;--line:#dbe3ec}*{box-sizing:border-box}body{margin:0;font-family:Inter,"Segoe UI",Helvetica,Arial,sans-serif;color:var(--ink);background:var(--bg);line-height:1.6}a{color:inherit}header{background:var(--y)}header .w{display:flex;align-items:center;gap:14px;flex-wrap:wrap;padding:14px 16px}header img{height:40px}header b{font-size:.95rem}header nav{margin-left:auto;display:flex;gap:6px;flex-wrap:wrap}header nav a{text-decoration:none;font-weight:700;font-size:.9rem;padding:6px 8px}.w{max-width:960px;margin:0 auto;padding:0 16px}.hero{background:var(--y);padding:10px 0 34px}.crumb{font-size:.82rem;margin-bottom:10px}.crumb a{text-decoration:none}h1{font-size:clamp(1.6rem,4vw,2.3rem);line-height:1.15;margin:6px 0 10px}h2{font-size:1.25rem;margin:0 0 10px}.lead{font-size:1.08rem;max-width:760px}.badge{display:inline-block;font-size:.72rem;font-weight:800;text-transform:uppercase;letter-spacing:.05em;padding:4px 8px;background:#fff;margin-right:4px}.cta{display:inline-block;background:var(--k);color:#fff;font-weight:800;text-decoration:none;padding:12px 18px;margin-top:8px}.card{background:#fff;padding:20px 22px;margin:18px 0;clip-path:polygon(18px 0,100% 0,100% 100%,0 100%,0 18px)}ul{padding-left:20px}li{margin:4px 0}.links a{display:block;padding:8px 10px;background:#F4F7F9;margin:6px 0;text-decoration:none;font-weight:700}.note{background:#FFF0B3;border-left:6px solid var(--y);padding:12px 14px;font-size:.9rem}.tpl{background:#F4F7F9;padding:12px 14px;white-space:pre-wrap;font-size:.92rem}footer{background:#000;color:#fff;padding:28px 0;margin-top:30px;font-size:.88rem}footer a{color:var(--y)}.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:12px}.grid a{background:#fff;padding:14px;text-decoration:none;display:block}.grid small{display:block;color:var(--muted);font-weight:400}main,h1,.crumb,.lead,li,p,.links a{overflow-wrap:break-word;word-break:break-word}header nav a{padding:6px 5px}@media(max-width:420px){header b{font-size:.85rem}header img{height:32px}}`;
  const ORG = { "@type": "Organization", "@id": SITE + "#blinqx", name: "Blinqx Verzekering & Hypotheek", url: "https://verzekeringhypotheek.blinqx.tech/", logo: SITE + "assets/logo.png", address: { "@type": "PostalAddress", streetAddress: "Hullenbergweg 109", postalCode: "1101 CL", addressLocality: "Amsterdam", addressCountry: "NL" }, telephone: "+31207582111" };
  const WEBSITE = { "@type": "WebSite", "@id": SITE + "#website", name: "Marketingbieb.nl", alternateName: "Marketingbieb", url: SITE, inLanguage: "nl-NL", description: "De marketingbibliotheek voor de financieel adviseur: gratis en freemium campagnes, klanttools, nieuwsbrieven en een hypotheekkennisbank.", publisher: { "@id": SITE + "#blinqx" } };
  const pagina = ({ rel, titel, desc, h1, crumbs, badges = "", lead = "", body, cta, jsonld = [], noindex = false, canonical, modified = VANDAAG }) => {
    const url = SITE + rel.replace(/index\.html$/, "");
    const ld = { "@context": "https://schema.org", "@graph": [ORG, WEBSITE, { "@type": "BreadcrumbList", itemListElement: [{ name: "Home", item: SITE }, ...crumbs].map((c, k) => ({ "@type": "ListItem", position: k + 1, name: c.name, item: c.item })) }, ...jsonld] };
    return `<!doctype html><html lang="nl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(titel)}</title><meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${esc(canonical || url)}">${noindex ? `<meta name="robots" content="noindex,follow">` : ""}
<meta property="og:type" content="article"><meta property="og:site_name" content="Marketingbieb.nl"><meta property="og:title" content="${esc(h1)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:url" content="${esc(url)}"><meta property="og:image" content="${SITE}assets/og.png"><meta property="og:locale" content="nl_NL"><meta name="twitter:card" content="summary_large_image">
<meta property="article:modified_time" content="${modified}"><link rel="icon" href="/favicon.svg" type="image/svg+xml"><meta name="theme-color" content="#FFCD00">
<script type="application/ld+json">${JSON.stringify(ld)}</script><style>${CSS}</style></head><body>
<header><div class="w"><a href="/" aria-label="Marketingbieb.nl home"><img src="/assets/logo.png" alt="Blinqx Verzekering &amp; Hypotheek"></a><b>Marketingbieb.nl<br><span style="font-weight:600;font-size:.8rem">de marketingbibliotheek voor de financieel adviseur</span></b>
<nav><a href="/">Home</a><a href="/categorie/content/">Content</a><a href="/categorie/campagnes/">Campagnes</a><a href="/categorie/klanttools/">Klanttools</a><a href="/kennisbank/">Kennisbank</a></nav></div></header>
<div class="hero"><div class="w"><div class="crumb"><a href="/">Home</a>${crumbs.map(c => ` / <a href="${esc(c.item.replace(SITE, "/"))}">${esc(c.name)}</a>`).join("")}</div>${badges}<h1>${esc(h1)}</h1>${lead ? `<p class="lead">${esc(lead)}</p>` : ""}${cta ? `<a class="cta" href="${esc(cta.href)}">${esc(cta.label)} →</a>` : ""}</div></div>
<main class="w">${body}</main>
<footer><div class="w"><p><b>Marketingbieb.nl</b> is een activiteit van Blinqx Verzekering &amp; Hypotheek, Hullenbergweg 109, 1101 CL Amsterdam. Vragen of wensen: <a href="mailto:jeroen.oversteegen@blinqx.tech">Jeroen Oversteegen</a>.</p>
<p>Alle materialen worden kosteloos en zonder garantie ter beschikking gesteld; gebruik is voor eigen rekening en risico. De inhoud is algemene informatie en geen (financieel) advies. <a href="/#/disclaimer">Disclaimer</a> · Laatst bijgewerkt: ${modified}</p></div></footer></body></html>`;
  };
  const lijst = (titel, a) => a && a.length ? `<div class="card"><h2>${esc(titel)}</h2><ul>${a.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>` : "";
  const sitemap = [{ loc: SITE, pri: "1.0" }, { loc: SITE + "kennisbank/", pri: "0.8" }];

  /* ---------- categorie-pagina's ---------- */
  for (const c of D.CATS) {
    const items = D.ITEMS.filter(i => i.cat === c.id);
    const rel = `categorie/${c.id}/index.html`;
    schrijf(rel, pagina({ rel, titel: `${c.title} voor financieel adviseurs | Marketingbieb.nl`, desc: kort(c.desc + " " + items.length + " items, gratis of freemium."), h1: c.title, lead: c.desc, crumbs: [{ name: c.title, item: SITE + `categorie/${c.id}/` }],
      cta: { href: `/#/?cat=${c.id}`, label: "Open deze categorie in de bibliotheek" },
      body: `<div class="grid" style="margin-top:18px">${items.map(i => `<a href="/item/${i.id}/"><b>${esc(i.title)}</b><small>${esc(MODEL[i.model] || "")} · ${esc(kort(i.summary, 120))}</small></a>`).join("")}</div>`,
      jsonld: [{ "@type": "CollectionPage", name: c.title, description: c.desc, url: SITE + `categorie/${c.id}/`, isPartOf: { "@id": SITE + "#website" }, hasPart: items.map(i => ({ "@type": "WebPage", name: i.title, url: SITE + `item/${i.id}/` })) }] }));
    sitemap.push({ loc: SITE + `categorie/${c.id}/`, pri: "0.7" });
  }

  /* ---------- item-pagina's ---------- */
  for (const i of D.ITEMS) {
    const c = D.CATS.find(x => x.id === i.cat) || { id: i.cat, title: i.cat };
    let extra = "";
    const camp = D.CAMP.find(x => x.id === i.id), sel = D.SEL.find(x => x.id === i.id), chk = D.CHECKS[i.id], frm = D.FORMS.find(x => x.id === i.id);
    if (camp) extra += `<div class="card"><h2>Waarom deze campagne?</h2>${(camp.waarom || []).map(x => `<p>${esc(x)}</p>`).join("")}</div>`
      + (camp.blokken || []).map(([h, l]) => lijst(h, l)).join("") + lijst("Doelgroep", camp.doelgroep)
      + (camp.stappen ? `<div class="card"><h2>Zo pak je het aan</h2><ol>${camp.stappen.map(([h, d]) => `<li><b>${esc(h)}.</b> ${esc(d)}</li>`).join("")}</ol></div>` : "")
      + (camp.sjablonen || []).map(s => `<div class="card"><h2>${esc(s.naam)}</h2><p><b>Onderwerp:</b> ${esc(s.onderwerp.replace(/\{[a-z]+\}/g, "…"))}</p><div class="tpl">${esc(s.tekst.replace(/\{aanhef\}/g, "Beste [naam]").replace(/\{(kantoor|adviseur|tel|email|web)\}/g, "[$1]").replace(/^## /gm, "").replace(/^- /gm, "• "))}</div></div>`).join("")
      + (camp.compliance ? `<p class="note"><b>Let op, AFM/compliance:</b> ${esc(camp.compliance)}</p>` : "");
    if (sel) extra += `<div class="card"><h2>Over deze selectie</h2>${(sel.tekst || []).map(x => `<p>${esc(x)}</p>`).join("")}${sel.punten ? `<ul>${sel.punten.map(x => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}${sel.extra ? `<p>${esc(sel.extra)}</p>` : ""}${sel.tip ? `<p><b>Tip:</b> ${esc(sel.tip)}</p>` : ""}</div>` + (sel.compliance ? `<p class="note"><b>Let op, AFM/compliance:</b> ${esc(sel.compliance)}</p>` : "");
    if (chk) extra += `<div class="card"><h2>${esc(chk.h1)}</h2><p>${esc(chk.intro)}</p>${chk.secties.map(s => `<h3>${esc(s.titel)}</h3><ul>${s.items.map(q => `<li>${esc(q)}</li>`).join("")}</ul>`).join("")}</div>`;
    if (frm) extra += `<div class="card"><h2>${esc(frm.titel)}</h2>${frm.intro ? `<p>${esc(frm.intro)}</p>` : ""}${frm.stappen.map((s, k) => `<h3>${k + 1}. ${esc(s.titel)}</h3><ul>${s.vragen.map(q => `<li>${esc(q)}</li>`).join("")}</ul>`).join("")}</div>`;
    if (i.kind === "nieuwsbrief") extra += D.NB.sections.map(s => `<div class="card"><h2>${esc(s.title)}</h2>${s.paras.map(x => `<p>${esc(x)}</p>`).join("")}${s.bullets.length ? `<ul>${s.bullets.map(x => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}</div>`).join("");
    const body = lijst("Wat zit erin?", i.contents) + lijst("Gratis", i.free) + (i.premium ? lijst(`${i.priceLabel || "Premium"}: ${i.price || "op aanvraag"}`, i.premium) : "") + lijst("Zo zet je het in", i.useCases) + extra
      + (i.links ? `<div class="card links"><h2>Links</h2>${i.links.map(l => { const intern = l.url.startsWith("#"); const href = intern ? "/" + l.url : (/^https?:|^mailto:/.test(l.url) ? l.url : "/" + l.url); return `<a href="${esc(href)}"${intern || !/^https?:/.test(href) ? "" : ' rel="noopener" target="_blank"'}>${esc(l.label)}</a>`; }).join("")}</div>` : "")
      + `<div class="card"><h2>Inzetbaar via</h2><p>${esc((i.channels || []).join(" · "))}</p><p><small>Aanbieder: ${esc(i.by)}</small></p></div>`
      + `<div class="card"><h2>Meer in ${esc(c.title)}</h2><div class="grid">${D.ITEMS.filter(x => x.cat === i.cat && x.id !== i.id).slice(0, 6).map(x => `<a href="/item/${x.id}/"><b>${esc(x.title)}</b></a>`).join("")}</div></div>`;
    const rel = `item/${i.id}/index.html`, url = SITE + `item/${i.id}/`;
    schrijf(rel, pagina({ rel, titel: `${i.title} | Marketingbieb.nl`, desc: kort(i.summary), h1: i.title, lead: i.summary,
      badges: `<span class="badge">${esc(MODEL[i.model] || "")}</span><span class="badge">${esc(c.title)}</span>`,
      crumbs: [{ name: c.title, item: SITE + `categorie/${c.id}/` }, { name: i.title, item: url }],
      cta: { href: `/#/item/${i.id}`, label: ["check", "verzekeringscheck", "woontoekomst", "aflossingsvrij", "vhr", "form", "lijfrente", "box3", "woningwaarde", "kansen", "insluiten"].includes(i.kind) ? "Open de tool" : "Open in de bibliotheek" },
      body, jsonld: [{ "@type": "WebPage", "@id": url, url, name: i.title, description: kort(i.summary, 300), inLanguage: "nl-NL", isPartOf: { "@id": SITE + "#website" }, about: (i.tags || []).slice(0, 8), dateModified: VANDAAG, publisher: { "@id": SITE + "#blinqx" }, audience: { "@type": "Audience", audienceType: "Financieel adviseurs en hypotheekadviseurs" } }] }));
    sitemap.push({ loc: url, pri: "0.6" });
  }

  /* ---------- kennisbank ---------- */
  const kbIdx = [];
  for (const a of D.KB) {
    if (!a.b) continue;
    const slug = kbSlug(a), rel = `kennisbank/${slug}/index.html`, url = SITE + `kennisbank/${slug}/`;
    const eigen = a.s === "bijgewerkt" || a.s === "historisch", noindex = a.s === "controleren";
    const html = a.b.split("\n").map(l => l.startsWith("• ") ? `<li>${esc(l.slice(2))}</li>` : `<p>${esc(l)}</p>`).join("").replace(/(<li>.*?<\/li>)+/g, m => `<ul>${m}</ul>`);
    const label = a.s === "bijgewerkt" ? "Bijgewerkt november 2026" : a.s === "historisch" ? "Historisch" : a.s === "controleren" ? "Nog te controleren" : "";
    schrijf(rel, pagina({ rel, titel: `${a.t} | Kennisbank Marketingbieb.nl`, desc: kort(a.b), h1: a.t, crumbs: [{ name: "Kennisbank", item: SITE + "kennisbank/" }, { name: a.t, item: url }],
      badges: `<span class="badge">${esc(a.th)}</span>${label ? `<span class="badge">${label}</span>` : ""}`,
      canonical: eigen ? url : a.u, noindex,
      cta: { href: `/#/kennisbank?a=${slug}`, label: "Bekijk in de kennisbank" },
      body: `<div class="card">${html}</div><p class="note">Bron: <a href="${esc(a.u)}" rel="noopener">Hypotheekbond-kennisbank</a>${eigen ? "; tekst gecontroleerd en bijgewerkt door Marketingbieb.nl (november 2026)" : ""}. Algemene informatie, geen persoonlijk advies.</p>${a.q && a.q.length ? `<p class="note"><b>Gecontroleerd met:</b> <br>${a.q.map(u => `<a href="${esc(u)}" rel="noopener">${esc(u.replace(/^https?:\/\/(www\.)?/, ""))}</a>`).join("<br>")}</p>` : ""}`,
      jsonld: [{ "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: a.t, acceptedAnswer: { "@type": "Answer", text: a.b.replace(/\n/g, " ") } }] }] }));
    kbIdx.push({ a, slug, label, noindex });
    if (!noindex && eigen) sitemap.push({ loc: url, pri: "0.5" });
  }
  const themas = [...new Set(kbIdx.map(x => x.a.th))];
  schrijf("kennisbank/index.html", pagina({ rel: "kennisbank/index.html", titel: "Hypotheek kennisbank voor adviseurs en klanten | Marketingbieb.nl", desc: `${kbIdx.length} korte uitlegartikelen over hypotheken, NHG, fiscaliteit, rente en kopen, gecontroleerd op de regels van 2027.`, h1: "Hypotheek kennisbank", lead: `${kbIdx.length} korte uitlegartikelen over hypotheken, wonen en fiscaliteit. Gecontroleerd in november 2026 op de regels voor 2027.`,
    crumbs: [{ name: "Kennisbank", item: SITE + "kennisbank/" }], cta: { href: "/#/kennisbank", label: "Zoeken in de kennisbank" },
    body: themas.map(th => `<div class="card"><h2>${esc(th)}</h2><ul>${kbIdx.filter(x => x.a.th === th).map(x => `<li><a href="/kennisbank/${x.slug}/">${esc(x.a.t)}</a>${x.label ? ` <small>(${x.label})</small>` : ""}</li>`).join("")}</ul></div>`).join(""),
    jsonld: [{ "@type": "CollectionPage", name: "Hypotheek kennisbank", url: SITE + "kennisbank/" }] }));

  /* ---------- crawlbare inhoud in index.html (wordt door de app direct vervangen) ---------- */
  { const f = path.join(R, "index.html"); let h = fs.readFileSync(f, "utf8");
    const fb = `<main id="app" tabindex="-1"><div class="wrap seo-fb" style="padding:24px 16px"><h1>Marketingbieb.nl: de marketingbibliotheek voor de financieel adviseur</h1><p>Gratis en freemium campagnes, klanttools, nieuwsbrieven, social posts en een hypotheekkennisbank voor hypotheek- en verzekeringsadviseurs. Een activiteit van Blinqx Verzekering &amp; Hypotheek.</p>`
      + D.CATS.map(c => `<h2><a href="/categorie/${c.id}/">${esc(c.title)}</a></h2><p>${esc(c.desc)}</p><ul>${D.ITEMS.filter(i => i.cat === c.id).map(i => `<li><a href="/item/${i.id}/">${esc(i.title)}</a></li>`).join("")}</ul>`).join("")
      + `<h2><a href="/kennisbank/">Hypotheek kennisbank</a></h2></div></main>`;
    h = h.replace(/<main id="app" tabindex="-1">[\s\S]*?<\/main>/, fb); fs.writeFileSync(f, h); }

  /* ---------- sitemap, robots, llms ---------- */
  schrijf("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemap.map(u => `  <url><loc>${esc(u.loc)}</loc><lastmod>${VANDAAG}</lastmod><priority>${u.pri}</priority></url>`).join("\n")}\n</urlset>\n`);
  schrijf("robots.txt", `# Marketingbieb.nl\nUser-agent: *\nAllow: /\n\n# AI-zoekmachines en assistenten zijn welkom\nUser-agent: GPTBot\nAllow: /\nUser-agent: OAI-SearchBot\nAllow: /\nUser-agent: ChatGPT-User\nAllow: /\nUser-agent: ClaudeBot\nAllow: /\nUser-agent: Claude-SearchBot\nAllow: /\nUser-agent: PerplexityBot\nAllow: /\nUser-agent: Google-Extended\nAllow: /\n\nSitemap: ${SITE}sitemap.xml\n`);
  const cl = id => D.ITEMS.filter(i => i.cat === id);
  schrijf("llms.txt", `# Marketingbieb.nl\n\n> De marketingbibliotheek voor de financieel adviseur, een activiteit van Blinqx Verzekering & Hypotheek (Amsterdam). Gratis en freemium marketingmateriaal voor hypotheek- en verzekeringsadviseurs: campagnes met mailsjablonen, klanttools en klantchecks, nieuwsbrieven, social posts, selecties voor PortefeuilleSignalen en een hypotheekkennisbank (gecontroleerd op de regels van 2027). Alle materialen zijn te gebruiken in de eigen huisstijl van het advieskantoor.\n\nGebruik is voor eigen rekening en risico; de inhoud is algemene informatie en geen financieel advies. Contact: Jeroen Oversteegen, jeroen.oversteegen@blinqx.tech.\n\n`
    + D.CATS.map(c => `## ${c.title}\n\n${c.desc}\n\n${cl(c.id).map(i => `- [${i.title}](${SITE}item/${i.id}/): ${kort(i.summary, 180)}`).join("\n")}`).join("\n\n")
    + `\n\n## Kennisbank\n\n- [Hypotheek kennisbank](${SITE}kennisbank/): ${kbIdx.length} uitlegartikelen over hypotheken, NHG, fiscaliteit, rente en kopen.\n\n## Bronnen leennormen 2027\n\n- [Leennormen en NHG 2027](${SITE}item/leennormen-2027/): Nibud-advies, Staatscourant 2026, 38415 en NHG Voorwaarden en normen 2027.\n`);
  console.log(`seo: ${D.ITEMS.length} items, ${kbIdx.length} kennisbank, ${D.CATS.length} categorieën, sitemap ${sitemap.length} url's`);
})();

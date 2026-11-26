"""Websitetools: alle rekentools van Blinqx V&H (Hypotheekbond-tools) als demo, openen in een apart tabblad."""
import os
B = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
p = os.path.join(B, 'template.html')
s = open(p, encoding='utf-8').read()

H = lambda g, pad: f"https://{g}.tools.hypotheekbond.nl/{pad}"
TOOLS = [
  ("Hypotheek berekenen", [
    ("Maximale hypotheek", H("ca5f0678-c68f-466c-b96b-1df9b27455b3", "maxmortgage")),
    ("Kan ik deze woning kopen?", H("9767d520-e4f2-46d7-8aa0-5dc1c4b56557", "kidwk")),
    ("Maandlasten berekenen", H("e0d090fa-043c-4ed5-a4c8-5757884685fc", "looptijdrente")),
    ("Maandlastengrafiek", H("2cf15bb7-ace5-4d8f-891c-2a65bd68f9e6", "maandlastengrafiek")),
    ("Hypotheek nu & straks", H("da0c3065-4744-4864-9e68-68b1e9a6941e", "hns")),
    ("Van huren naar kopen", H("74132995-5d2c-4450-8c42-a5c6c068939d", "hnk"))]),
  ("Rentes vergelijken", [
    ("Renteoverzicht", H("d7d0405f-f9e2-411b-b5fc-5d9314853eb4", "renteoverzicht")),
    ("Volledig renteoverzicht", H("d7d0405f-f9e2-411b-b5fc-5d9314853eb4", "renteoverzicht/all")),
    ("Rente top 5", H("35ede3cc-22ff-4b8d-9e03-8eade5bc00df", "rente-top-5")),
    ("Topafslag", H("79352705-6aac-4d69-bdcf-b5f53bcc7561", "topafslag")),
    ("Spaarrente top 10", H("a858ca8c-d5c5-4e6e-afe4-bc43ec7ce039", "spaar-rente"))]),
  ("Aflossen & besparen", [
    ("Hypotheekbespaarcheck", H("a98477a6-3877-41c4-85fb-6c7a29ea9709", "hypotheekbespaarcheck")),
    ("Maandlasten bij aflossen", H("8c5a126a-d1a6-48f0-928a-db308413d7e0", "maandlasten-bij-aflossen")),
    ("Hoeveel wilt u aflossen?", H("15b60449-4525-4dd8-84e0-2ac171fed57b", "hoeveel-aflossen")),
    ("Vast bedrag per maand aflossen", H("33b557a1-b4cd-4041-ab59-c377b13ce9c6", "vast-bedrag-per-maand")),
    ("Aflossen of beleggen?", H("9d3f36f2-77d0-4228-868a-06e5bfdde6f2", "aflossen-of-beleggen"))]),
  ("Sparen & verzekeren", [
    ("Hoeveel levert sparen op?", H("1d87386d-bcdf-40ba-9b5b-38b120434b3a", "hoeveel-levert-sparen-op")),
    ("Overlijdensrisicoverzekering", H("c698ab16-2a63-435d-b8bb-de8f500d9bf2", "orv")),
    ("Premie berekenen", "https://deck.nl/premie?t=steenhypotheken")]),
  ("Woning & verduurzamen", [
    ("Woningwaarde", H("f388b829-468a-4003-b84e-452b78499333", "woningwaarde")),
    ("Duurzaamheidsprofiel", "https://duurzaamheidsprofiel.hypotheekbond.nl/")]),
  ("Klantinzicht", [
    ("Inventarisatie", "https://inventarisatie.hypotheekbond.nl/82c7becb-d06b-465e-995b-37dc122053aa"),
    ("Zelfreflectie", H("46158772-02db-4e14-81d9-e253df135a36", "zelfreflectie"))]),
]
js = "const REKENTOOLS = [\n" + ",\n".join(
    "  {g:%s, t:[%s]}" % (repr(g).replace("'", '"'), ",".join('[%s,"%s"]' % (repr(n).replace("'", '"'), u) for n, u in tl))
    for g, tl in TOOLS) + "\n];\n"

a = '/* ---------- Detail: checklist ---------- */'
assert s.count(a) == 1
s = s.replace(a, js + a)

# item: inhoud bijwerken
a = '''    contents:["Maximale hypotheek: “Hoeveel kan ik lenen?”","Hypotheekcheck: betaal ik niet te veel?","Rentes vergelijken en berekenen op je eigen website","Inventarisatieformulier: gegevens direct in je dossier"],'''
assert s.count(a) == 1
s = s.replace(a, '''    contents:["23 rekentools in zes groepen: hypotheek berekenen, rentes vergelijken, aflossen & besparen, sparen & verzekeren, woning & verduurzamen en klantinzicht","Maximale hypotheek: “Hoeveel kan ik lenen?”","Hypotheekbespaarcheck: betaal ik niet te veel?","Rentes vergelijken op je eigen website","Inventarisatieformulier: gegevens direct in je dossier"],
    rekentools:true,''')
a = '''{label:"Aanvragen via het vraagformulier", url:"#/vraag?item=websitetools-2-maanden&soort=premium"}],'''
assert s.count(a) == 1
s = s.replace(a, '''{label:"Aanvragen via het vraagformulier", url:"#/vraag?item=websitetools-2-maanden&soort=premium"},{label:"Info: Milan Akavia (milan.akavia@blinqx.tech)", url:"mailto:milan.akavia@blinqx.tech?subject=Rekentools%20voor%20op%20de%20website"},{label:"Info: Jeroen Oversteegen (jeroen.oversteegen@blinqx.tech)", url:"mailto:jeroen.oversteegen@blinqx.tech?subject=Rekentools%20voor%20op%20de%20website"}],''')

# weergave in viewItem: blok met alle tools, vóór "Wat zit erin?"
a = '''      ${item.contents?`<div class="panel cut"><h2>Wat zit erin?</h2>'''
assert s.count(a) == 1
s = s.replace(a, '''      ${item.rekentools?`<div class="panel cut"><h2><span class="hexi">${icon("calculate",18)}</span>Probeer de rekentools</h2>
        <p style="margin:0 0 12px">Elke tool opent in een apart tabblad, zoals bezoekers hem straks op jouw website zien.</p>
        <div class="rt-grid">${REKENTOOLS.map(gr=>`<div><h3 style="font-size:.78rem;text-transform:uppercase;letter-spacing:.06em;color:var(--muted);margin:0 0 6px">${esc(gr.g)}</h3><div class="links">${gr.t.map(([n,u])=>`<a href="${esc(u)}" target="_blank" rel="noopener"><span>${esc(n)}</span><small>↗</small></a>`).join("")}</div></div>`).join("")}</div>
        <p class="hint" style="margin-top:12px">De uitkomsten zijn indicatief en bedoeld als eerste oriëntatie. Ze houden geen rekening met de volledige persoonlijke situatie, er kunnen geen rechten aan worden ontleend en ze vormen geen financieel advies in de zin van de Wft. De tools worden geleverd door Hypotheekbond en openen op een website van die partij; ingevulde gegevens worden daar verwerkt.</p></div>`:""}
''' + a)
a = '  .partners-band{padding:8px 0 30px}'
assert s.count(a) == 1
s = s.replace(a, '  .rt-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:14px 18px}\n  .rt-grid .links a{padding:8px 10px}\n' + a)
open(p, 'w', encoding='utf-8').write(s)
print('patch 14 ok', sum(len(t) for _, t in TOOLS), 'tools')

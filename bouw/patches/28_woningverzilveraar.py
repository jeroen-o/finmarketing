"""Woningverzilveraar (NVHP) als insluitcode en als item in de catalogus."""
import os
B = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
def patch(rel, pairs):
    p = os.path.join(B, rel); s = open(p, encoding='utf-8').read()
    for a, b in pairs:
        assert s.count(a) == 1, (rel, a[:60], s.count(a)); s = s.replace(a, b)
    open(p, 'w', encoding='utf-8').write(s)
patch('data/huisstijl.js', [('''  duurzaamheidsprofiel:{ naam:"Duurzaamheidsprofiel",''', '''  woningverzilveraar:{ naam:"Woningverzilveraar: verzilverhypotheken vergelijken (NVHP)", titel:"Woningverzilveraar", hoogte:1800,
    url:() => "https://woningverzilveraar.nl/",
    info:"Senioren zien hoeveel overwaarde ze kunnen opnemen en welke verzilverhypotheken bij hen passen: a.s.r., MUNT, Vandaag, ABN AMRO, ZilverHuis, SocioHypotheek en SVn. De NVHP houdt aanbod en voorwaarden actueel; via de iframe staat op je site altijd de nieuwste versie." },
  duurzaamheidsprofiel:{ naam:"Duurzaamheidsprofiel",''')])
patch('data/partners.js', [('''{ id:"nvhp-themas",''', '''{ id:"woningverzilveraar", cat:"klanttools", kind:"item", model:"gratis", logo:"nvhp",
  title:"Woningverzilveraar: verzilverhypotheken vergelijken", by:"NVHP · Hypothecairplanner.nl (partner)", url:"https://woningverzilveraar.nl/",
  summary:"Alle verzilverhypotheken voor senioren naast elkaar: hoeveel overwaarde kan de klant opnemen, vanaf welke leeftijd, met of zonder maandlast en restschuldgarantie. Met klantcheck ‘past / past met aandachtspunten / valt af’ en een insluitcode voor je eigen website die automatisch actueel blijft.",
  links:[{label:"Open Woningverzilveraar", url:"https://woningverzilveraar.nl/"},{label:"Insluitcode voor je website", url:"#/item/insluitcodes"},{label:"Thema Verzilveren (NVHP)", url:HP+"/themas/verzilveren-overwaarde-opnemen"}],
  free:["Indicatie opname per aanbieder","Klantcheck met onderbouwing voor het dossier","Vergelijk tot drie producten naast elkaar","Insluiten via iframe: altijd de nieuwste versie"],
  channels:["Eigen website (embed)","Klantgesprek"], tags:["verzilveren","verzilverhypotheek","opeethypotheek","overwaarde","overwaarde opnemen","senioren","aow","levensrente","munt","asr","vandaag hypotheek","zilverhuis","sociohypotheek","svn","verzilverlening","abn amro overwaarde","nvhp","iframe","embed","woningverzilveraar"] },
{ id:"nvhp-themas",''')])
patch('data/extra2.js', [('''"pandwise","duurzaamheidsprofiel","woningwaarde","code"] });''', '''"pandwise","duurzaamheidsprofiel","woningwaarde","code","woningverzilveraar","verzilveren"] });''')])
print('patch 28 ok')
# zoeker: verzilveren -> woningverzilveraar bovenaan
p = os.path.join(B, 'template.html'); s = open(p, encoding='utf-8').read()
a = '''  "huis":["woning"], "woning":["huis"],'''
assert s.count(a) == 1
s = s.replace(a, '''  "huis":["woning"], "woning":["huis"], "verzilveren":["verzilverhypotheek","woningverzilveraar"], "opeethypotheek":["verzilverhypotheek"],''')
open(p, 'w', encoding='utf-8').write(s)
# woordvormen tellen bijna even zwaar als het woord zelf (synoniemen blijven 0,6)
s = open(p, encoding='utf-8').read()
a = '''    const alts = [...vormen(t), ...(SYN[t]||[]).map(norm)];
    let best = 0;
    for (const a of alts){
      const w = a===t ? 1 : .6;'''
assert s.count(a) == 1
s = s.replace(a, '''    const vs = vormen(t), alts = [...vs, ...(SYN[t]||[]).map(norm)];
    let best = 0;
    for (const a of alts){
      const w = a===t ? 1 : vs.includes(a) ? .9 : .6;''')
open(p, 'w', encoding='utf-8').write(s)

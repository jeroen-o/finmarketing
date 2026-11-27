"""Werkgeversverklaring.nl (Blinqx): item in klanttools, insluitcode en zoekwoorden."""
import os
B = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
def patch(rel, pairs):
    p = os.path.join(B, rel); s = open(p, encoding='utf-8').read()
    for a, b in pairs:
        assert s.count(a) == 1, (rel, a[:60], s.count(a)); s = s.replace(a, b)
    open(p, 'w', encoding='utf-8').write(s)
patch('data/extra2.js', [('''ITEMS.push({ id:"insluitcodes",''', '''ITEMS.push({ id:"werkgeversverklaring", cat:"klanttools", kind:"item", model:"gratis",
  title:"Werkgeversverklaring met je eigen kantoorkop (NHG 2027)", by:"Blinqx V&H", url:"https://werkgeversverklaring.nl/adviseurs.html",
  summary:"Het model werkgeversverklaring NHG 2027 met jouw logo, adres, telefoon, e-mail, website en huiskleur. Download hem als invulbare pdf voor je klanten, of zet het invulformulier als HTML-bestand op je eigen website. Je klant (of diens werkgever) vult hem online in en downloadt de pdf. Gegevens blijven in de browser.",
  links:[{label:"Kantoorkop instellen (voor adviseurs)", url:"https://werkgeversverklaring.nl/adviseurs.html"},{label:"Online invullen (voor klanten)", url:"https://werkgeversverklaring.nl/"},{label:"Insluitcode voor je website", url:"#/item/insluitcodes?tool=werkgeversverklaring"}],
  free:["Invulbare pdf met je logo en kantoorgegevens","HTML-bestand voor je eigen website, zonder server of koppeling","Klant vult online in en downloadt de pdf","Gegevens en logo blijven in de browser"],
  contents:["Model werkgeversverklaring NHG 2027","Pdf met kantoorkop (model verkleind tot 90%, alle velden blijven invulbaar)","HTML-versie met huiskleur op de knoppen","Iframe-code om het formulier op je site in te sluiten"],
  channels:["Eigen website (embed)","E-mail aan klant","Klantgesprek"], tags:["werkgeversverklaring","wgv","nhg","nhg 2027","inkomen","loondienst","werkgever","hypotheekaanvraag","formulier","pdf","kantoorkop","logo","eigen website","iframe","embed"] });
ITEMS.push({ id:"insluitcodes",''')])
patch('data/huisstijl.js', [('''  duurzaamheidsprofiel:{ naam:"Duurzaamheidsprofiel",''', '''  werkgeversverklaring:{ naam:"Werkgeversverklaring: online invullen (NHG 2027)", titel:"Werkgeversverklaring", hoogte:2200,
    url:() => "https://werkgeversverklaring.nl/",
    info:"Klanten of hun werkgever vullen het model werkgeversverklaring NHG 2027 online in en downloaden hem als pdf. Wil je je eigen logo en kantoorgegevens erop? Stel die in op werkgeversverklaring.nl/adviseurs.html en zet het gedownloade HTML-bestand op je eigen website." },
  duurzaamheidsprofiel:{ naam:"Duurzaamheidsprofiel",''')])
patch('template.html', [('''"verzilveren":["verzilverhypotheek","woningverzilveraar"],''', '''"verzilveren":["verzilverhypotheek","woningverzilveraar"], "werkgeversverklaring":["wgv"], "wgv":["werkgeversverklaring"],''')])
print('patch 30 ok')

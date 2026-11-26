"""Hypotheekrente: tools en API vindbaar via de zoeker."""
import os
B = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
p = os.path.join(B, 'template.html')
s = open(p, encoding='utf-8').read()

a = '''  { id:"websitetools-2-maanden",'''
assert s.count(a) == 1
s = s.replace(a, '''  { id:"hypotheekrente-tools", cat:"klanttools", kind:"item", model:"freemium",
    title:"Hypotheekrente-tools: renteoverzicht, rente top 5 en topafslag", by:"Blinqx V&H · Hypotheekbond",
    url:"https://d7d0405f-f9e2-411b-b5fc-5d9314853eb4.tools.hypotheekbond.nl/renteoverzicht",
    summary:"Actuele hypotheekrentes vergelijken op je eigen website: het renteoverzicht van alle aanbieders, de rente top 5, de topafslag (lagere rente door een lagere risicoklasse) en de spaarrente top 10. Elke tool opent in een apart tabblad.",
    free:["Demo van alle hypotheekrente-tools","Hypotheekrente-app.nl: actuele rentes op je telefoon"],
    premium:["De tools op je eigen website, in je eigen huisstijl (eerste twee maanden gratis)"], priceLabel:"Op je website", price:"Op aanvraag",
    useCases:["Bezoekers van je website de actuele hypotheekrente laten vergelijken","Renteverlengers laten zien wat oversluiten kan opleveren","Topafslag: klanten met een lagere risicoklasse benaderen"],
    links:[{label:"Renteoverzicht", url:"https://d7d0405f-f9e2-411b-b5fc-5d9314853eb4.tools.hypotheekbond.nl/renteoverzicht"},{label:"Volledig renteoverzicht", url:"https://d7d0405f-f9e2-411b-b5fc-5d9314853eb4.tools.hypotheekbond.nl/renteoverzicht/all"},{label:"Rente top 5", url:"https://35ede3cc-22ff-4b8d-9e03-8eade5bc00df.tools.hypotheekbond.nl/rente-top-5"},{label:"Topafslag", url:"https://79352705-6aac-4d69-bdcf-b5f53bcc7561.tools.hypotheekbond.nl/topafslag"},{label:"Spaarrente top 10", url:"https://a858ca8c-d5c5-4e6e-afe4-bc43ec7ce039.tools.hypotheekbond.nl/spaar-rente"},{label:"Hypotheekrente-app.nl", url:"https://www.hypotheekrente-app.nl/"},{label:"Hypotheekrente API voor je eigen tools", url:"#/item/hypotheekrente-api"},{label:"Alle 23 rekentools voor je website", url:"#/item/websitetools-2-maanden"}],
    channels:["Eigen website","Klantgesprek"], tags:["hypotheekrente","rente","hypotheekrentes","renteoverzicht","rente vergelijken","rentetarieven","rente top 5","topafslag","spaarrente","actuele rente","rentetool","hypotheekrente-app"],
    compliance:"Rentes zijn indicatief en kunnen dagelijks wijzigen; de daadwerkelijke rente hangt af van de situatie van de klant en de acceptatie door de geldverstrekker." },
  { id:"hypotheekrente-api", cat:"adviseurstools", kind:"item", model:"aanvraag",
    title:"Hypotheekrente API en hypotheek-webservices", by:"Holland Webservices · Nationale Hypotheekbond",
    url:"https://www.hypotheekrente-api.nl/",
    summary:"Actuele hypotheekrentetarieven van banken, verzekeraars en regiepartijen in één API, plus webservices voor maximale hypotheek, NHG, LTV, LTI, inkomen en meer. Voor ontwikkelaars die zelf een hypotheektool, websitetool of app bouwen.",
    contents:["Hypotheekrente API: altijd de actuele hypotheekrentetarieven van verschillende aanbieders","Maximale hypotheek API","Bruto netto API","NHG API","Belasting API","Maximum LTV API en maximum LTI API","Inkomen bepalen API en ondernemersinkomen bepalen API","Rente top 5 API","Annuïteiten API en lineaire API","Postcode API","HDN import API, en meer in de API-catalogus","Voorbeeldtoepassing: hypotheekrente-app.nl"],
    premium:["Toegang tot de API's en webservices"], priceLabel:"API-toegang", price:"Op aanvraag",
    useCases:["Actuele hypotheekrentes tonen op je eigen website of in je eigen app","Eigen rekentools bouwen met officiële rekenregels","Rentes koppelen aan je CRM of klantportaal"],
    links:[{label:"Hypotheekrente-api.nl", url:"https://www.hypotheekrente-api.nl/"},{label:"Hypotheek API-catalogus (Swagger)", url:"https://api.hypotheekbond.nl/"},{label:"Voorbeeld: hypotheekrente-app.nl", url:"https://www.hypotheekrente-app.nl/"},{label:"Hypotheekrente-tools (kant-en-klaar)", url:"#/item/hypotheekrente-tools"},{label:"Informatie: Jeroen Oversteegen", url:"mailto:jeroen.oversteegen@blinqx.tech?subject=Hypotheekrente%20API"}],
    channels:["Eigen website","Eigen app","Software"], tags:["hypotheekrente","rente","api","hypotheekrente api","hypotheekrente-api","webservices","rente api","ontwikkelaars","developer","maximale hypotheek api","nhg api","holland webservices","swagger"] },
''' + a)

# zoeksynoniemen
a = '''"compliance":["afm","wft","avg","dfo"],'''
assert s.count(a) == 1
s = s.replace(a, a + ''' "hypotheekrente":["rente","renteoverzicht","rente-api"], "rentes":["rente","hypotheekrente"], "api":["webservices","koppeling"],''')

# websitetools: verwijzing naar de rente-API
a = '''{label:"Info: Milan Akavia (milan.akavia@blinqx.tech)",'''
assert s.count(a) == 1
s = s.replace(a, '''{label:"Hypotheekrente API (zelf bouwen)", url:"#/item/hypotheekrente-api"},''' + a)
open(p, 'w', encoding='utf-8').write(s)

# dode link Holland Webservices vervangen
p2 = os.path.join(B, 'data', 'extra2.js')
t = open(p2, encoding='utf-8').read()
t = t.replace('{label:"Holland Webservices", url:"https://www.hollandwebservices.nl/nl/"}', '{label:"Hypotheekrente API en webservices (Holland Webservices)", url:"#/item/hypotheekrente-api"}')
open(p2, 'w', encoding='utf-8').write(t)
print('patch 15 ok')

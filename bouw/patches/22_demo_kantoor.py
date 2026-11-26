"""Demo-hypotheek-kantoor.nl toevoegen als voorbeeldwebsite."""
import os
B = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
p = os.path.join(B, 'template.html')
s = open(p, encoding='utf-8').read()

def rep(a, b):
    global s
    assert s.count(a) == 1, (a[:80], s.count(a))
    s = s.replace(a, b)

D = "https://demo-hypotheek-kantoor.nl/"
rep('''  { id:"hypotheekrente-tools",''', '''  { id:"demo-hypotheek-kantoor", cat:"leads", kind:"item", model:"gratis",
    title:"Demo-hypotheek-kantoor.nl: voorbeeldwebsite voor je advieskantoor", by:"Demo-hypotheek-kantoor.nl", url:"''' + D + '''",
    summary:"Een complete voorbeeldwebsite van een (fictief) hypotheekadvieskantoor: duidelijke diensten per klantsituatie, tarieven vooraf, rekenhulpen, modeldocumenten en uitleg over risico's en nazorg. Ter inspiratie voor je eigen website.",
    free:["Volledige voorbeeldwebsite om te bekijken","Modeldocumenten: kernblad, opdracht tot dienstverlening, dienstenwijzer, algemene voorwaarden, vergelijkingskaart en meer","In zes talen: Nederlands, Engels, Duits, Pools, Spaans en Frans"],
    contents:["Startpagina per klantsituatie: eerste woning, volgende woning, oversluiten, verduurzamen, scheiding, ondernemer of zzp, pensioen","Tarieven vooraf, met per dienst uitleg wat het is en waarom het geld kost","Rekenhulpen van Hypotheekbond die pas laden na een klik (privacyvriendelijk)","Modeldocumenten om vooraf te lezen, te printen of als pdf op te slaan","Pagina's over risico's, fiscale risico's, woningrisico's, verduurzaming en fundering","Werkwijze, adviesproces, adviesrapport en nazorg: wat de klant wel en niet mag verwachten","Over ons, governance, privacy en klachten (met verwijzing naar AFM-register en Kifid)","Een eerlijke plek voor klantbeoordelingen: geen verzonnen reviews"],
    useCases:["Inspiratie voor de opbouw en teksten van je eigen website","Voorbeeld van transparante tarieven en documenten vooraf","Voorbeeld van rekentools op je eigen site, met aandacht voor privacy"],
    links:[{label:"Demo-hypotheek-kantoor.nl", url:"''' + D + '''"},{label:"Rekenhulpen", url:"''' + D + '''tools.html"},{label:"Tarieven", url:"''' + D + '''kosten.html"},{label:"Modeldocumenten", url:"''' + D + '''documenten.html"},{label:"Werkwijze en adviesproces", url:"''' + D + '''adviesproces.html"},{label:"Risico's rond uw hypotheek", url:"''' + D + '''risicos.html"},{label:"Service en nazorg", url:"''' + D + '''nazorg.html"},{label:"Tools voor op je website", url:"#/item/websitetools-2-maanden"},{label:"Insluitcodes voor je website", url:"#/item/insluitcodes"}],
    channels:["Eigen website","Inspiratie"], tags:["demo","voorbeeldwebsite","voorbeeld website","website","eigen website","advieskantoor","hypotheekkantoor","demo-hypotheek-kantoor","demo hypotheek kantoor","dienstenwijzer","kernblad","opdracht tot dienstverlening","algemene voorwaarden","vergelijkingskaart","modeldocumenten","tarieven","transparantie","reviews","meertalig","rekenhulpen","inspiratie","vindbaarheid"],
    compliance:"Alle gegevens op de demo zijn fictief (geen vergunning, geen Kifid-aansluiting). Neem teksten en documenten niet ongezien over: pas ze aan op je eigen dienstverlening, tarieven en vergunning, en laat ze toetsen door je compliance officer." },
  { id:"hypotheekrente-tools",''')

# verwijzingen vanaf websitetools en insluitcodes
rep('''{label:"Hypotheekrente API (zelf bouwen)", url:"#/item/hypotheekrente-api"},''', '''{label:"Hypotheekrente API (zelf bouwen)", url:"#/item/hypotheekrente-api"},{label:"Voorbeeld: Demo-hypotheek-kantoor.nl", url:"#/item/demo-hypotheek-kantoor"},''')
open(p, 'w', encoding='utf-8').write(s)

p2 = os.path.join(B, 'data', 'extra2.js')
t = open(p2, encoding='utf-8').read()
a = 'tags:["insluitcode","embed","iframe","website",'
assert t.count(a) == 1, t.count(a)
open(p2, 'w', encoding='utf-8').write(t)
print('patch 22 ok')

"""Adviseurstools: blok 'Tools voor op je website'; websitetools en rekentools beter vindbaar."""
import os
B = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
p = os.path.join(B, 'template.html')
s = open(p, encoding='utf-8').read()

def rep(a, b):
    global s
    assert s.count(a) == 1, (a[:70], s.count(a))
    s = s.replace(a, b)

# promoblok per categorie
rep('''    <a class="sel-promo cut" id="sel-promo" href="#/item/portefeuillesignalen" hidden>''',
    '''    <a class="sel-promo cut" id="web-promo" href="#/item/websitetools-2-maanden" hidden>
      <span class="hexi">${icon("calculate",20)}</span>
      <span class="t"><b>Tools voor op je website</b><span>23 rekentools voor je eigen website, in je eigen huisstijl: maximale hypotheek, maandlasten, hypotheekrente vergelijken, aflossen, woningwaarde en meer. De eerste twee maanden gratis.</span></span>
      <span class="btn btn-k btn-sm">Bekijk de websitetools →</span></a>
    <a class="sel-promo cut" id="sel-promo" href="#/item/portefeuillesignalen" hidden>''')
rep('''    $("#sel-promo").hidden = state.cat!=="campagnes";''',
    '''    $("#sel-promo").hidden = state.cat!=="campagnes";
    $("#web-promo").hidden = state.cat!=="adviseurstools";''')

# titel en zoekwoorden van de websitetools
rep('title:"Websitetools: twee maanden gratis", by:"Blinqx V&H"', 'title:"Tools voor op je website: 23 rekentools (twee maanden gratis)", by:"Blinqx V&H"')
rep('tags:["websitetools","rekentools","website","leads","maximale hypotheek","hypotheekcheck","proefperiode","gratis","twee maanden"],',
    'tags:["websitetools","websitetool","tools voor op je website","rekentools","rekentool","rekenmodules","calculators","website","eigen website","widgets","leads","maximale hypotheek","maandlasten","hypotheekrente","rente vergelijken","renteoverzicht","rente top 5","topafslag","aflossen","woningwaarde","overlijdensrisicoverzekering","hypotheekcheck","hypotheekbespaarcheck","inventarisatie","proefperiode","gratis","twee maanden"],')

# rente-tools: ook als websitetool vindbaar
rep('tags:["hypotheekrente","rente","hypotheekrentes","renteoverzicht","rente vergelijken","rentetarieven","rente top 5","topafslag","spaarrente","actuele rente","rentetool","hypotheekrente-app"],',
    'tags:["hypotheekrente","rente","hypotheekrentes","renteoverzicht","rente vergelijken","rentetarieven","rente top 5","topafslag","spaarrente","actuele rente","rentetool","hypotheekrente-app","websitetools","rekentools","tools voor op je website","eigen website"],')

# zoeksynoniemen
rep('''"hypotheekrente":["rente","renteoverzicht","rente-api"],''',
    '''"hypotheekrente":["rente","renteoverzicht","rente-api"], "rekentools":["rekentool","websitetools","calculator"], "rekentool":["rekentools","websitetools","calculator"], "websitetools":["websitetool","rekentools","tools voor op je website"], "websitetool":["websitetools","rekentools"], "website":["websitetools","eigen website"],''')
open(p, 'w', encoding='utf-8').write(s)
print('patch 19 ok')

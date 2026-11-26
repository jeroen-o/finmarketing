"""Insluitcode Woningverzilveraar: insluitversie (?embed=1) met naam, logo, kleur en contactgegevens van de adviseur."""
import os
B = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
p = os.path.join(B, 'data/huisstijl.js'); s = open(p, encoding='utf-8').read()
def rep(a, b):
    global s
    assert s.count(a) == 1, (a[:70], s.count(a)); s = s.replace(a, b)
rep('''  woningverzilveraar:{ naam:"Woningverzilveraar: verzilverhypotheken vergelijken (NVHP)", titel:"Woningverzilveraar", hoogte:1800,
    url:() => "https://woningverzilveraar.nl/",
    info:"Senioren zien hoeveel overwaarde ze kunnen opnemen en welke verzilverhypotheken bij hen passen: a.s.r., MUNT, Vandaag, ABN AMRO, ZilverHuis, SocioHypotheek en SVn. De NVHP houdt aanbod en voorwaarden actueel; via de iframe staat op je site altijd de nieuwste versie." },''',
'''  woningverzilveraar:{ naam:"Woningverzilveraar: verzilverhypotheken vergelijken (NVHP)", titel:"Woningverzilveraar", hoogte:1000, gegevens:true, contact:true,
    url:o => "https://woningverzilveraar.nl/?embed=1" + [["kantoor",o.kantoor],["adviseur",o.adviseur],["logo",/^https:\\/\\//i.test(o.logo)?o.logo:""],["kleur",/^#[0-9a-f]{6}$/i.test(o.kleur||"")?o.kleur:""],["web",/^https?:\\/\\//i.test(o.web||"")?o.web:""],["email",o.email],["tel",o.tel]].filter(x=>x[1]).map(([k,v])=>`&${k}=${encodeURIComponent(v)}`).join(""),
    info:"Senioren zien hoeveel overwaarde ze kunnen opnemen en welke verzilverhypotheken bij hen passen: a.s.r., MUNT, Vandaag, ABN AMRO, ZilverHuis, SocioHypotheek en SVn. De NVHP houdt aanbod en voorwaarden actueel; via de iframe staat op je site altijd de nieuwste versie. Op jouw site staat ‘Aangeboden door’ met je naam en logo, en de knop ‘Neem contact op’ gaat naar jou in plaats van naar de NVHP. Zonder contactgegevens vervalt die knop." },''')
rep('''        <div id="in-adresblok">''', '''        <div id="in-contactblok"><label class="f" for="in-web">Website (voor de knop ‘Neem contact op’)</label><input class="i" id="in-web" data-in="web" value="${esc(HS.web)}" placeholder="https://www.jouwkantoor.nl/contact">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:0 10px"><div><label class="f" for="in-email">E-mail</label><input class="i" id="in-email" data-in="email" type="email" value="${esc(HS.email)}"></div><div><label class="f" for="in-tel">Telefoon</label><input class="i" id="in-tel" data-in="tel" type="tel" value="${esc(HS.tel)}"></div></div>
        <p class="hint">De knop gebruikt de website; zonder website het e-mailadres, anders het telefoonnummer. Je huisstijlkleur wordt de accentkleur.</p></div>
        <div id="in-adresblok">''')
rep('''    const url = t.url({ adviseur:HS.adviseur, kantoor:HS.kantoor, logo:HS.logoUrl, adres:ins.adres.trim() });''',
    '''    const url = t.url({ adviseur:HS.adviseur, kantoor:HS.kantoor, logo:HS.logoUrl, adres:ins.adres.trim(), kleur:HS.kleur ? hsKleur() : "", web:HS.web, email:HS.email, tel:HS.tel });''')
rep('''$("#in-adresblok").hidden = !t.adres;''', '''$("#in-adresblok").hidden = !t.adres; $("#in-contactblok").hidden = !t.contact;''')
rep('''if (k==="logoUrl" && v && !/^https:\\/\\//i.test(v)){ toast("Logo-URL moet met https:// beginnen"); return; }''',
    '''if (k==="logoUrl" && v && !/^https:\\/\\//i.test(v)){ toast("Logo-URL moet met https:// beginnen"); return; } if (k==="web" && v && !/^https?:\\/\\//i.test(v)){ toast("Website moet met https:// beginnen"); return; }''')
open(p, 'w', encoding='utf-8').write(s)
print('patch 29 ok')

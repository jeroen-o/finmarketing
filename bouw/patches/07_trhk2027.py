"""Officiële financieringslastpercentages 2027 (Trhk, Stcrt. 2026, 38415) in de rekentools."""
import os
B = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
p = os.path.join(B, 'template.html')
t = open(p, encoding='utf-8').read()


def rep(a, b, cnt=1):
    global t
    assert t.count(a) == cnt, (a[:70], t.count(a))
    t = t.replace(a, b)


# ---------- data + opzoekfunctie ----------
rep('/*__KB__*/\n', '''/*__KB__*/
/*__TRHK__*/
/* Financieringslastpercentage (FLP) volgens de Tijdelijke regeling hypothecair krediet 2027.
   aow: consument heeft AOW-leeftijd bereikt (tabel 2/4); aftrek: debetrente fiscaal aftrekbaar (tabel 1/2, anders 3/4).
   alleen: alleenstaande met toetsinkomen > € 31.000: FLP bepalen op toetsinkomen + € 18.000. */
function flp(inkomen, toetsrente, {aow=false, aftrek=true, alleen=false} = {}){
  const tab = aftrek ? (aow ? TRHK.t2 : TRHK.t1) : (aow ? TRHK.t4 : TRHK.t3);
  let ink = inkomen;
  if (alleen && inkomen > TRHK.alleenGrens) ink += TRHK.alleenBedrag;
  const row = Math.min(tab.length-1, Math.max(0, Math.floor((ink - TRHK.start) / TRHK.stap)));
  let col = TRHK.renteGrens.findIndex(g => toetsrente <= g + 1e-9); if (col < 0) col = 11;
  return tab[row][col];
}
''')

# ---------- verantwoord hypotheekrapport ----------
a = t.index('const VH = {')
b = t.index('const klasse = ltv =>')
t = t[:a] + '''const VH = {
  toetsrente: 0.05, looptijd: 30,          // referentierente 5% bij rentevast < 10 jaar; looptijd annuïtair 30 jaar
  maxLoon: 79400,           // indicatief maximumdagloon op jaarbasis
  wwPct: 0.70, wwMnd: 24, wgaPct: 0.70,
  aowAlleen: 20100, aowSamen: 13900,
  nhgGrens: 500000,
  opslagPerKlasse: 0.0015,  // indicatief renteverschil per risicoklasse
  boetevrij: 0.10
};
const annJaar = (rente, jaren=VH.looptijd) => { const r = rente/12, n = jaren*12; return r ? 12 * r / (1 - Math.pow(1+r, -n)) : 12/n; };
let VH_TOETS = VH.toetsrente;
/* Maximale bruto maandlast volgens Trhk 2027: toetsinkomen × FLP / 12, min financiële verplichtingen per maand */
const verMaand = (inkomen, aow, verpl=0, opt={}) => inkomen > 0 ? Math.max(0, (inkomen * flp(inkomen, VH_TOETS, {aow, ...opt}) - verpl) / 12) : 0;
function verantwoord(inkomen, aow, verpl=0, opt={}){
  if (inkomen <= 0) return 0;
  return verMaand(inkomen, aow, verpl, opt) * 12 / annJaar(VH_TOETS);
}
''' + t[b:]

rep('''  VH_TOETS = rNuIn && rvp >= 10 ? rNuIn : VH.toetsrente;''',
    '''  // Toetsrente: werkelijke rente bij rentevast ≥ 10 jaar, anders de hoogste van werkelijke rente en 5%
  VH_TOETS = rNuIn && rvp >= 10 ? rNuIn : Math.max(rNuIn || 0, VH.toetsrente);''')
rep('''    const ver = verantwoord(inkomen, extra.aow, verpl), vm = verMaand(inkomen, extra.aow, verpl);''',
    '''    const opt = { alleen: extra.alleen ?? !pt, aftrek: extra.aftrek ?? true };
    const ver = verantwoord(inkomen, extra.aow, verpl, opt), vm = verMaand(inkomen, extra.aow, verpl, opt);''')
rep('''      add("ov",`Overlijden van ${nm}`, "Nabestaande", nab, hypNa, {orv: orvAnder, verpl: N(anderX.verpl),''',
    '''      add("ov",`Overlijden van ${nm}`, "Nabestaande", nab, hypNa, {orv: orvAnder, verpl: N(anderX.verpl), alleen:true,''')
rep('''  add("pe","Pensioen (beiden met pensioen)", pt?"Samen":"Aanvrager", pens, schuld, {aow:true,''',
    '''  add("pe","Pensioen (beiden met pensioen)", pt?"Samen":"Aanvrager", pens, schuld, {aow:true, aftrek:false,''')
rep('''      add("er",`Einde relatie: ${nm} alleen`, nm, N(X.ink), schuld, {verpl:N(X.verpl), toel:''',
    '''      add("er",`Einde relatie: ${nm} alleen`, nm, N(X.ink), schuld, {verpl:N(X.verpl), alleen:true, toel:''')
rep('''  res.max = { bedrag: verantwoord(totaal), ruimte: verantwoord(totaal) - schuld, nhg: schuld <= VH.nhgGrens };''',
    '''  const maxB = verantwoord(totaal, false, verplTot, { alleen: !pt });
  res.max = { bedrag: maxB, ruimte: maxB - schuld, nhg: schuld <= VH.nhgGrens, flp: flp(totaal, VH_TOETS, { alleen: !pt }) };''')
rep('''          <p class="hint">Indicatieve benadering van de leennormen bij ${fmtN(VH.toetsrente*100)}% toetsrente en ${VH.looptijd} jaar; geen officiële berekening. Voor een exacte berekening: <a href="https://adviseurstools.nl/" target="_blank" rel="noopener">adviseurstools.nl</a> of uw adviseur.</p>`)}''',
    '''          <p class="hint">Berekend met het financieringslastpercentage ${fmtN(mx.flp*100,1)}% uit de leennormen 2027 (Tijdelijke regeling hypothecair krediet, tabellen op advies van het Nibud), toetsrente ${fmtN(r.toets*100,2)}%, annuïtair over ${VH.looptijd} jaar${vh.partner?"":" en met het alleenstaandenbedrag van € 18.000"}. Niet meegenomen: energielabelruimte, studieschuld-normen en overige acceptatieregels van geldverstrekkers. Voor een exacte berekening: <a href="https://adviseurstools.nl/" target="_blank" rel="noopener">adviseurstools.nl</a> of uw adviseur.</p>`)}''')
rep('''<p class="hint">Toetsrente in dit rapport: ${fmtN(r.toets*100,2)}% (${r.toets===VH.toetsrente?"5% omdat de rente korter dan 10 jaar vaststaat of niet is opgegeven":"uw rente, omdat die minimaal 10 jaar vaststaat"}).''',
    '''<p class="hint">Rekennormen: financieringslastpercentages 2027 uit de Tijdelijke regeling hypothecair krediet (Stcrt. 2026, 38415). Bij pensioen tabel voor AOW-gerechtigden zonder renteaftrek; bij alleen verder (overlijden, einde relatie, geen partner) met het alleenstaandenbedrag. Toetsrente: ${fmtN(r.toets*100,2)}% (${(parseNum(vh.rvpJaren)>=10 && parseNum(vh.rente))?"uw rente, omdat die minimaal 10 jaar vaststaat":"de hoogste van uw rente en 5%, omdat de rente korter dan 10 jaar vaststaat of niet is opgegeven"}).''')
rep('''aannames (o.a. indicatieve woonquotes, WW/WIA-percentages, maximumdagloon en AOW-bedragen)''',
    '''aannames (o.a. WW/WIA-percentages, maximumdagloon en AOW-bedragen)''')

# ---------- aflossingsvrij: toetsen tegen maximale woonlast bij pensioen ----------
rep('''  const q = qPens ?? qNu ?? 0;
  if (q > .35) ded(5.5, "Rentelast na pensioen is meer dan 35% van het bruto inkomen");
  else if (q > .30) ded(4, "Rentelast na pensioen is 30–35% van het bruto inkomen");
  else if (q > .25) ded(2.5, "Rentelast na pensioen is 25–30% van het bruto inkomen");
  else if (q > .20) ded(1, "Rentelast na pensioen is 20–25% van het bruto inkomen");''',
    '''  // Maximale woonlast volgens de leennormen 2027 (tabel AOW-gerechtigden, rente niet aftrekbaar)
  const flpPens = inkPensioen ? flp(inkPensioen, AV.toetsrente, {aow:true, aftrek:false, alleen:!af.partner}) : 0;
  const maxLastPens = inkPensioen * flpPens;
  const q = maxLastPens ? rente / maxLastPens : (inkNu ? rente / (inkNu * flp(inkNu, AV.toetsrente, {alleen:!af.partner})) : 0);
  if (q > 1.4) ded(5.5, "Rentelast na pensioen ligt ruim boven de maximale woonlast volgens de leennormen 2027");
  else if (q > 1.2) ded(4, "Rentelast na pensioen ligt 20–40% boven de maximale woonlast");
  else if (q > 1.0) ded(2.5, "Rentelast na pensioen ligt tot 20% boven de maximale woonlast");
  else if (q > .8) ded(1, "Rentelast na pensioen gebruikt 80–100% van de maximale woonlast");''')
rep('''  return { schuld, waarde, eigen, pot, rente, inkNu, inkPensioen, aow, qNu, qPens, ltv, ltvNa, jrTotEinde, leeftijd, leeftijdEinde, aowDatum, einde, dekking, score, pts };''',
    '''  return { schuld, waarde, eigen, pot, rente, inkNu, inkPensioen, aow, qNu, qPens, ltv, ltvNa, jrTotEinde, leeftijd, leeftijdEinde, aowDatum, einde, dekking, score, pts, flpPens, maxLastPens, q };''')
rep('''  if (r.qPens > .25) t.push(''', '''  if (r.q > 1) t.push(''')
open(p, 'w', encoding='utf-8').write(t)
print('ok')

"""Campagnedownloads (Word + pdf) koppelen aan de campagnes en selecties."""
import os, re
B = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
p = os.path.join(B, 'data', 'camp.js')
s = open(p, encoding='utf-8').read()
D = 'bronnen/campagnes/'
L = lambda label, f: '{label:"%s", url:"%s%s"}' % (label, D, f)
paar = lambda label, naam: L(label + ' (Word)', naam + '.docx') + ',' + L(label + ' (pdf)', naam + '.pdf')

# oude mailtemplates vervangen door de bijgewerkte versies
for oud, nieuw, label in [('bronnen/portefeuillesignalen/mail-duurzaam-oversluiten-label-A.docx', 'rentevast-duurzaam-label-A', 'Mailtemplate doelgroep label A'),
                          ('bronnen/portefeuillesignalen/mail-duurzaam-oversluiten-label-B-C.docx', 'rentevast-duurzaam-label-B-C', 'Mailtemplate doelgroep label B en C')]:
    pat = re.compile(r'\{label:"[^"]*", url:"%s"\}' % re.escape(oud))
    assert len(pat.findall(s)) == 2, (oud, len(pat.findall(s)))
    s = pat.sub(paar(label, nieuw), s)

extra = {
    'campagne-pensioen': [paar('Mail klanten 50–52 jaar', 'pensioen-50-52'), paar('Mail klanten 53–55 jaar', 'pensioen-53-55'), paar('Mail klanten 56–57 jaar', 'pensioen-56-57')],
    'campagne-kvk': [paar('Mail ondernemers met KvK-registratie', 'kvk-registratie')],
    'campagne-duurzaam-oversluiten': [paar('Mailtemplate label A', 'duurzaam-oversluiten-label-A'), paar('Mailtemplate label B en C', 'duurzaam-oversluiten-label-B-C')],
    'campagne-verkopen-terughuren': [paar('Voorbeeldbrief AOW / label lager dan C', 'verkopen-terughuren')],
}
regels = s.split('\n')
for cid, links in extra.items():
    k = next(i for i, l in enumerate(regels) if l.lstrip().startswith('{ id:"%s"' % cid))
    e = k
    while not (regels[e + 1].lstrip().startswith('{ id:') or regels[e + 1].startswith('];')):
        e += 1
    blok = '\n'.join(regels[k:e + 1])
    assert 'links:[' in blok, cid
    blok = blok.replace('links:[', 'links:[' + ','.join(links) + ',', 1)
    regels[k:e + 1] = blok.split('\n')
s = '\n'.join(regels)
open(p, 'w', encoding='utf-8').write(s)
print('patch 18 ok')

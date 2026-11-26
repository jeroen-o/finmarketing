"""Zet de campagnesjablonen in bouw/downloads/*.md om naar Word (.docx) en pdf in bronnen/campagnes/.
Gebruik: python3 bouw/maak_downloads.py   (vereist pandoc en LibreOffice)"""
import os, subprocess, glob, shutil, tempfile
B = os.path.dirname(os.path.abspath(__file__)); R = os.path.dirname(B)
UIT = os.path.join(R, 'bronnen', 'campagnes'); os.makedirs(UIT, exist_ok=True)
for md in sorted(glob.glob(os.path.join(B, 'downloads', '*.md'))):
    naam = os.path.splitext(os.path.basename(md))[0]
    docx = os.path.join(UIT, naam + '.docx')
    subprocess.run(['pandoc', '-f', 'markdown+hard_line_breaks', md, '-o', docx, '--metadata', 'lang=nl-NL'], check=True)
    with tempfile.TemporaryDirectory() as tmp:
        subprocess.run(['soffice', '--headless', '--convert-to', 'pdf', '--outdir', tmp, docx], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        shutil.move(os.path.join(tmp, naam + '.pdf'), os.path.join(UIT, naam + '.pdf'))
    print('gemaakt:', naam)

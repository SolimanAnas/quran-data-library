import requests

BASE = 'https://raw.githubusercontent.com/SolimanAnas/quran-data-library/main'

VERSIONS = {
    'madina-1421':           {'format': 'webp', 'dir': 'mushaf-pages/madina-1421'},
    'madina-green':          {'format': 'webp', 'dir': 'mushaf-pages/madina-green'},
    'mushaf-1024':           {'format': 'png',  'dir': 'mushaf-pages/mushaf-1024'},
    'mushaf-madina-1420':    {'format': 'webp', 'dir': 'mushaf-pages/mushaf-madina-1420'},
    'tajweed-colored':       {'format': 'webp', 'dir': 'mushaf-pages/tajweed-colored'},
    'Madina-2-Brown-Border': {'format': 'png',  'dir': 'mushaf-pages/Madina-2-Brown-Border'},
}

TAFSIRS = {
    'saadi':      {'db': 'tafsir-saadi.db',                'json': 'saadi.json'},
    'baghawi':    {'db': 'tafsir-baghawi.db',               'json': 'baghawi.json'},
    'ibn-kathir': {'db': 'tafsir-ibn-kathir.db',            'json': 'ibn-kathir.json'},
    'qortobi':    {'db': 'tafsir-qortobi.db',               'json': 'al-qurtubi.json'},
    'al-qurtubi': {'db': 'tafsir-qortobi.db',               'json': 'al-qurtubi.json'},
}

FONT_DIR = 'mushaf-fonts/qbc-v2'
LINE_DIR = 'line-by-line'
TAFSIR_DIR = 'tafsir'


def page_url(version, page):
    v = VERSIONS.get(version)
    if not v:
        raise ValueError(f"Unknown version: {version}. Valid: {', '.join(VERSIONS)}")
    return f"{BASE}/{v['dir']}/{page:03d}.{v['format']}"


def line_url(page, line):
    return f"{BASE}/{LINE_DIR}/{page}/{line}.png"


def coords_url(version):
    v = VERSIONS.get(version)
    if not v:
        raise ValueError(f"Unknown version: {version}. Valid: {', '.join(VERSIONS)}")
    return f"{BASE}/{v['dir']}/coordinates/coordinates.json"


def line_coords_url():
    return f"{BASE}/{LINE_DIR}/coordinates/coordinates.json"


def font_url(page):
    return f"{BASE}/{FONT_DIR}/p{page}.woff2"


def tafsir_url(name):
    t = TAFSIRS.get(name)
    if not t:
        raise ValueError(f"Unknown tafsir: {name}. Valid: {', '.join(TAFSIRS)}")
    return f"{BASE}/{TAFSIR_DIR}/{t['db']}"


def tafsir_json_url(name):
    t = TAFSIRS.get(name)
    if not t:
        raise ValueError(f"Unknown tafsir: {name}. Valid: {', '.join(TAFSIRS)}")
    return f"{BASE}/{TAFSIR_DIR}/json/{t['json']}"


def fetch_coords(version):
    resp = requests.get(coords_url(version))
    resp.raise_for_status()
    return resp.json()


def fetch_line_coords():
    resp = requests.get(line_coords_url())
    resp.raise_for_status()
    return resp.json()


def fetch_tafsir(name):
    resp = requests.get(tafsir_json_url(name))
    resp.raise_for_status()
    return resp.json()

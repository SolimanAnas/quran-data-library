"""
Quran Data Library — Python SDK

Provides URL builders and fetchers for mushaf pages, line-by-line images,
WOFF2 fonts, coordinates, and tafsir data.

All assets are hosted on GitHub's raw CDN — no server required.

Example:
    from quran_api import page_url, font_url, fetch_coords

    # Get image URL for Madina mushaf page 1
    img = page_url('madina-1421', 1)

    # Get scalable font for page 1
    font = font_url(1)

    # Fetch page coordinates
    coords = fetch_coords('madina-1421')
"""

import requests

GITHUB_RAW_BASE = 'https://raw.githubusercontent.com/SolimanAnas/quran-data-library/main'

VERSIONS = {
    'madina-1421':         {'name': 'Madina 1421',         'format': 'webp', 'dir': 'mushaf-pages/madina-1421',         'description': 'King Fahd Complex, Lafz Al-Jalalah highlighted'},
    'madina-green':        {'name': 'Madina Green',        'format': 'webp', 'dir': 'mushaf-pages/madina-green',        'description': 'Green-tinted background variant'},
    'mushaf-1024':         {'name': 'Standard 1024',       'format': 'png',  'dir': 'mushaf-pages/mushaf-1024',         'description': 'Standard Madina pages at 1024px width'},
    'mushaf-madina-1420':  {'name': 'Madina 1420',         'format': 'webp', 'dir': 'mushaf-pages/mushaf-madina-1420',  'description': 'Modern 1420 AH printing style'},
    'tajweed-colored':     {'name': 'Tajweed Colored',     'format': 'webp', 'dir': 'mushaf-pages/tajweed-colored',     'description': 'Color-coded Tajweed rules'},
    'madina-2-brown-border': {'name': 'Brown Border',      'format': 'png',  'dir': 'mushaf-pages/Madina-2-Brown-Border', 'description': 'Brown border frame variant'},
}

TAFSIRS = {
    'saadi':       {'db': 'tafsir-saadi.db',       'json': 'saadi.json',      'name': "Tafsir al-Sa'di"},
    'baghawi':     {'db': 'tafsir-baghawi.db',      'json': 'baghawi.json',    'name': 'Tafsir al-Baghawi'},
    'ibn-kathir':  {'db': 'tafsir-ibn-kathir.db',   'json': 'ibn-kathir.json', 'name': 'Tafsir Ibn Kathir'},
    'qortobi':     {'db': 'tafsir-qortobi.db',      'json': 'al-qurtubi.json', 'name': 'Tafsir al-Qurtubi'},
    'al-qurtubi':  {'db': 'tafsir-qortobi.db',      'json': 'al-qurtubi.json', 'name': 'Tafsir al-Qurtubi'},
}

FONT_DIR = 'mushaf-fonts/qbc-v2'
LINE_DIR = 'line-by-line'
TAFSIR_DIR = 'tafsir'


def _pad(n, z=3):
    return str(n).zfill(z)


# ── URL Builders ──────────────────────────────────────────────────────────────

def page_url(version, page):
    v = VERSIONS.get(version)
    if not v:
        raise ValueError(f"Unknown version: {version}. Valid: {', '.join(VERSIONS)}")
    return f"{GITHUB_RAW_BASE}/{v['dir']}/{_pad(page)}.{v['format']}"


def line_url(page, line):
    return f"{GITHUB_RAW_BASE}/{LINE_DIR}/{page}/{line}.png"


def coords_url(version):
    v = VERSIONS.get(version)
    if not v:
        raise ValueError(f"Unknown version: {version}. Valid: {', '.join(VERSIONS)}")
    return f"{GITHUB_RAW_BASE}/{v['dir']}/coordinates/coordinates.json"


def line_coords_url():
    return f"{GITHUB_RAW_BASE}/{LINE_DIR}/coordinates/coordinates.json"


def font_url(page):
    return f"{GITHUB_RAW_BASE}/{FONT_DIR}/p{page}.woff2"


def tafsir_url(name):
    t = TAFSIRS.get(name)
    if not t:
        raise ValueError(f"Unknown tafsir: {name}. Valid: {', '.join(TAFSIRS)}")
    return f"{GITHUB_RAW_BASE}/{TAFSIR_DIR}/{t['db']}"


def tafsir_json_url(name):
    t = TAFSIRS.get(name)
    if not t:
        raise ValueError(f"Unknown tafsir: {name}. Valid: {', '.join(TAFSIRS)}")
    return f"{GITHUB_RAW_BASE}/{TAFSIR_DIR}/json/{t['json']}"


# ── Fetchers ──────────────────────────────────────────────────────────────────

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


# ── Ayah Lookup ───────────────────────────────────────────────────────────────

def find_ayah_location(coords, surah, ayah):
    """Find which page and line an ayah is on.

    Args:
        coords: Coordinates data from fetch_coords() or fetch_line_coords()
        surah: Surah number (1-114)
        ayah: Ayah number within the surah

    Returns:
        dict with page, line, surah_name_ar, surah_name_en or None
    """
    pages = coords.get('pages', {})
    for page_num, page_data in pages.items():
        lines = page_data.get('lines', {})
        for line_num, line_data in lines.items():
            if (line_data.get('surah') == surah and
                    line_data.get('ayah_start', 0) <= ayah <= line_data.get('ayah_end', ayah)):
                return {
                    'page': int(page_num),
                    'line': int(line_num),
                    'surah_name_ar': line_data.get('surah_name_ar'),
                    'surah_name_en': line_data.get('surah_name_en'),
                }
    return None

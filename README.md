# Quran Data Library — Mushaf Pages, Fonts, Line Images & Tafsir

![Line 6](line-by-line/1/6.png) ![Line 7](line-by-line/1/7.png)

> **A comprehensive, developer-ready collection of Quran data** in multiple formats: mushaf page images (6 styles), scalable WOFF2 fonts, line-by-line verse images, and classical Arabic tafsir databases. Built for Islamic app developers, researchers, and educators.

**Keywords:** Quran images, mushaf pages, Madina mushaf, Tajweed colored, Quran fonts, WOFF2, line-by-line Quran, tafsir Ibn Kathir, tafsir Qurtubi, Quran API, Islamic data, Quran web fonts, Arabic calligraphy, Quran data library

[![License: MIT](https://img.shields.io/badge/License-MIT-059669.svg)](LICENSE)
[![Quran Pages](https://img.shields.io/badge/Pages-604-blue.svg)](mushaf-pages/)
[![Mushaf Styles](https://img.shields.io/badge/Styles-6-8b5cf6.svg)](#mushaf-page-images)
[![Tafsir Books](https://img.shields.io/badge/Tafsir-4-ec4899.svg)](#tafsir)
[![Fonts](https://img.shields.io/badge/Fonts-604-d4a843.svg)](#qbc-v2-fonts)

---

## What is this?

The **Quran Data Library** provides high-quality Quran resources for building Islamic applications:

- **Mushaf page images** — 6 visual styles (Madina, Tajweed, Brown Border, etc.)
- **Line-by-line images** — Individual verse-line PNGs for each page
- **QBC v2 fonts** — Scalable WOFF2 web fonts (one per page)
- **Tafsir databases** — Classical Arabic commentary by Ibn Kathir, Qurtubi, Baghawi, and Sa'di
- **Coordinates** — Page/line to surah/ayah mappings

All assets are hosted on GitHub's raw CDN — **no server required**.

---

## Quick Start

```bash
# Clone the repo
git clone https://github.com/SolimanAnas/quran-data-library.git

# Or use the JavaScript/Python SDKs directly
```

### JavaScript

```js
import { pageUrl, fontUrl, fetchCoords } from './quran-api.js'

// Get Tajweed image for page 1
const img = pageUrl('tajweed-colored', 1)

// Get scalable font for page 1
const font = fontUrl(1)

// Fetch coordinates
const coords = await fetchCoords('madina-1421')
```

### Python

```python
from quran_api import page_url, font_url, fetch_coords

# Get Madina image for page 1
img = page_url('madina-1421', 1)

# Get font URL
font = font_url(1)

# Fetch coordinates
coords = fetch_coords('madina-1421')
```

---

## Contents

| # | Dataset | Format | Count | Description |
|---|---------|--------|-------|-------------|
| 1 | [Madina 1421 + Mushaf 1024](#1-madina-1421--mushaf-1024) | `.webp` + `.png` | 604 × 2 | Red Lafz Al-Jalalah & 1024px PNG |
| 2 | [Madina Green + Brown Border](#2-madina-green--madina-brown-border) | `.webp` + `.png` | 621 + 604 | Green-tinted & brown-bordered variants |
| 3 | [Mushaf Madina 1420 + Tajweed Colored](#3-mushaf-madina-1420--tajweed-colored) | `.webp` | 604 × 2 | Modern 1420 AH & Tajweed color-coded |
| 4 | [QBC v2 Fonts](#4-qbc-v2-fonts) | `.woff2` | 604 fonts | Per-page web fonts for scalable rendering |
| 5 | [Line-by-Line](#5-line-by-line) | `.png` | 604 × 15 | Individual verse-line images per page |
| 6 | [Tafsir](#6-tafsir) | `.db` + `.json` | 4 tafsirs | Classical Arabic tafsir by Saadi, Baghawi, Ibn Kathir & Al-Qurtubi |

---

## Repository Structure

```
quran-data-library/
├── mushaf-pages/
│   ├── madina-1421/              # 001.webp – 604.webp  +  coordinates/
│   ├── madina-green/             # 001.webp – 621.webp  +  coordinates/
│   ├── mushaf-1024/              # 001.png  – 604.png   +  coordinates/
│   ├── mushaf-madina-1420/       # 001.webp – 604.webp  +  coordinates/
│   ├── tajweed-colored/          # 001.webp – 604.webp  +  coordinates/
│   └── Madina-2-Brown-Border/    # 001.png  – 604.png   +  coordinates/
├── mushaf-fonts/
│   └── qbc-v2/                   # p1.woff2 – p604.woff2
├── line-by-line/
│   ├── 1/                        # 1.png – 15.png  (page 1 lines)
│   ├── 2/
│   ├── …
│   ├── 604/
│   └── coordinates/              # page+line → surah/ayah mapping
├── tafsir/
│   ├── tafsir-saadi.db           # 7.9 MB – SQLite
│   ├── tafsir-baghawi.db         # 9.4 MB
│   ├── tafsir-ibn-kathir.db      # 17.9 MB
│   ├── tafsir-qortobi.db         # 22.0 MB
│   └── json/                     # JSON exports for web use
│       ├── saadi.json
│       ├── baghawi.json
│       ├── ibn-kathir.json
│       └── al-qurtubi.json
└── README.md
```

---

## Datasets

### 1. Madina 1421 + Mushaf 1024

| Madina 1421 | Mushaf 1024 |
|:-:|:-:|
| ![Madina 1421 Page 1](mushaf-pages/madina-1421/001.webp) | ![Mushaf 1024 Page 1](mushaf-pages/mushaf-1024/001.png) |

**Madina 1421** — Mushaf with Lafz Al-Jalalah in Red (مصحف لفظ الجلالة باللون الأحمر). The classic King Fahd Complex Madina Mushaf where the word "Allah" (الله) is highlighted in red. Includes a `coordinates.json` mapping each page to its surah and ayah range.

```
mushaf-pages/madina-1421/
├── 001.webp … 604.webp
└── coordinates/
    └── coordinates.json
```

**Mushaf 1024** — Standard Madina Mushaf pages rendered at 1024 px width in PNG format. High clarity for digital screens.

```
mushaf-pages/mushaf-1024/
├── 001.png … 604.png
├── thumbnail.png
└── coordinates/
    └── coordinates.json
```

---

### 2. Madina Green + Madina Brown Border

| Madina Green | Madina Brown Border |
|:-:|:-:|
| ![Madina Green Page 1](mushaf-pages/madina-green/001.webp) | ![Brown Border Page 1](mushaf-pages/Madina-2-Brown-Border/001.png) |

**Madina Green** — Same Madina Mushaf layout rendered with a green-tinted background. Ideal for apps that need a softer or color-themed page aesthetic.

```
mushaf-pages/madina-green/
├── 001.webp … 621.webp
└── coordinates/
    └── coordinates.json
```

**Madina Brown Border** — Madina Mushaf layout with a distinctive brown border frame. Rendered in PNG format for clean, consistent display.

```
mushaf-pages/Madina-2-Brown-Border/
├── 001.png … 604.png
└── coordinates/
    └── coordinates.json
```

---

### 3. Mushaf Madina 1420 + Tajweed Colored

| Mushaf Madina 1420 | Tajweed Colored |
|:-:|:-:|
| ![Mushaf Madina 1420 Page 1](mushaf-pages/mushaf-madina-1420/001.webp) | ![Tajweed Colored Page 1](mushaf-pages/tajweed-colored/001.webp) |

**Mushaf Madina 1420** — Modern Madina Mushaf based on the 1420 AH printing, featuring contemporary calligraphic styling.

```
mushaf-pages/mushaf-madina-1420/
├── 001.webp … 604.webp
└── coordinates/
    └── coordinates.json
```

**Tajweed Colored** — Color-coded Quran pages following Tajweed recitation rules. Each letter is colored according to its pronunciation rule (e.g., red for qalqalah, green for ghunnah). Perfect for learning proper Tajweed.

```
mushaf-pages/tajweed-colored/
├── 001.webp … 604.webp
└── coordinates/
    └── coordinates.json
```

---

### 4. QBC v2 Fonts

**Quran Bihari Calligraphy v2** — font-based Quran rendering using per-page WOFF2 font files. Each font file renders one full page as a web font, enabling pixel-perfect, fully scalable text without rasterization.

```
mushaf-fonts/qbc-v2/
└── p1.woff2 … p604.woff2
```

**Usage in web apps:**

```css
@font-face {
  font-family: 'QBC-Page-1';
  src: url('mushaf-fonts/qbc-v2/p1.woff2') format('woff2');
}

.page-1 {
  font-family: 'QBC-Page-1';
}
```

---

### 5. Line-by-Line

Each of the 604 pages is split into individual verse lines (up to 15 per page) as separate PNG images. Ideal for verse-by-verse readers, flashcard apps, or Quran memorization tools.

```
line-by-line/
├── 1/           ← page 1
│   ├── 1.png
│   ├── 2.png
│   └── … 15.png
├── 2/
├── …
├── 604/
└── coordinates/
    └── coordinates.json
```

**Preview — page 1, lines 6 & 7 (Āyah 1 & 2):**

![Line 6](line-by-line/1/6.png) ![Line 7](line-by-line/1/7.png)

---

### 6. Tafsir

Four classical Arabic tafsir (Quran exegesis) works — each covering all 6,236 ayahs with detailed commentary. Available as SQLite databases for efficient querying and as JSON exports for web use.

| Tafsir | Scholar | DB | JSON | Ayahs |
|--------|---------|----|------|-------|
| **Al-Saadi** | Abdur Rahman Al-Saadi | `tafsir-saadi.db` | `saadi.json` | 6,236 |
| **Al-Baghawi** | Al-Husayn Al-Baghawi | `tafsir-baghawi.db` | `baghawi.json` | 6,236 |
| **Ibn Kathir** | Ismail Ibn Kathir | `tafsir-ibn-kathir.db` | `ibn-kathir.json` | 6,236 |
| **Al-Qurtubi** | Muhammad Al-Qurtubi | `tafsir-qortobi.db` | `al-qurtubi.json` | 6,234 |

```
tafsir/
├── tafsir-saadi.db
├── tafsir-baghawi.db
├── tafsir-ibn-kathir.db
├── tafsir-qortobi.db
└── json/
    ├── saadi.json
    ├── baghawi.json
    ├── ibn-kathir.json
    └── al-qurtubi.json
```

**SQLite schema:**
```sql
CREATE TABLE {scholar_code} (
    SURA_num  INTEGER,  -- surah number (1–114)
    AYA_num   INTEGER,  -- ayah number within surah
    Tafsir    TEXT      -- commentary text (Arabic, with HTML formatting)
);
```

| DB | Table code |
|----|-----------|
| `tafsir-saadi.db` | `AS` |
| `tafsir-baghawi.db` | `Ba` |
| `tafsir-ibn-kathir.db` | `IK` |
| `tafsir-qortobi.db` | `AQ` |

**Usage with Node.js (better-sqlite3):**
```js
import Database from 'better-sqlite3'
const db = new Database('tafsir/tafsir-saadi.db')

// Get tafsir for Al-Fatiha, ayah 1
const row = db.prepare('SELECT Tafsir FROM AS WHERE SURA_num = 1 AND AYA_num = 1').get()
console.log(row.Tafsir)
```

**Usage in browser (sql.js):**
```js
import initSqlJs from 'sql.js'

const response = await fetch('https://raw.githubusercontent.com/SolimanAnas/quran-data-library/main/tafsir/tafsir-saadi.db')
const buffer = await response.arrayBuffer()
const SQL = await initSqlJs()
const db = new SQL.Database(new Uint8Array(buffer))

const result = db.exec('SELECT Tafsir FROM AS WHERE SURA_num = 1 AND AYA_num = 1')
console.log(result[0].values[0][0])
```

---

## API Reference

All data is accessible via direct URL patterns from GitHub's raw CDN. No authentication or API key required.

### Base URL

```
https://raw.githubusercontent.com/SolimanAnas/quran-data-library/main/
```

### Endpoints

| Endpoint | Example | Returns |
|----------|---------|---------|
| `GET /page/{version}/{page}` | `/page/tajweed-colored/005` | WebP or PNG image |
| `GET /line/{page}/{line}` | `/line/1/6` | PNG image |
| `GET /coordinates/{version}` | `/coordinates/madina-1421` | JSON (page → surah/ayah) |
| `GET /coordinates/lines` | `/coordinates/lines` | JSON (page+line → surah/ayah) |
| `GET /font/{page}` | `/font/1` | WOFF2 font |
| `GET /tafsir/{name}` | `/tafsir/saadi` | SQLite database |
| `GET /tafsir/{name}/json` | `/tafsir/saadi/json` | JSON (all ayahs) |

#### Page image

```
GET /page/{version}/{page}
```

```js
const url = `https://raw.githubusercontent.com/SolimanAnas/quran-data-library/main/mushaf-pages/tajweed-colored/005.webp`
const img = new Image()
img.src = url
```

```py
import requests
url = 'https://raw.githubusercontent.com/SolimanAnas/quran-data-library/main/mushaf-pages/tajweed-colored/005.webp'
resp = requests.get(url)
with open('page-005.webp', 'wb') as f:
    f.write(resp.content)
```

| Param | Values |
|-------|--------|
| `version` | `madina-1421`, `madina-green`, `mushaf-1024`, `mushaf-madina-1420`, `tajweed-colored`, `Madina-2-Brown-Border` |
| `page` | 3-digit zero-padded (`001` – `604`) |

#### Line image

```
GET /line/{page}/{line}
```

```js
const url = `https://raw.githubusercontent.com/SolimanAnas/quran-data-library/main/line-by-line/1/6.png`
```

```py
import requests
url = 'https://raw.githubusercontent.com/SolimanAnas/quran-data-library/main/line-by-line/1/6.png'
resp = requests.get(url)
with open('page-1-line-6.png', 'wb') as f:
    f.write(resp.content)
```

| Param | Values |
|-------|--------|
| `page` | `1` – `604` |
| `line` | `1` – `15` (varies per page) |

#### Coordinates — page-level

```
GET /coordinates/{version}
```

```js
const res = await fetch('https://raw.githubusercontent.com/SolimanAnas/quran-data-library/main/mushaf-pages/madina-1421/coordinates/coordinates.json')
const { pages } = await res.json()
const page = pages['001']
console.log(page.surah_en, page.ayah_start, page.ayah_end)
// → "Al-Fatiha"  1  7
```

```py
import requests
url = 'https://raw.githubusercontent.com/SolimanAnas/quran-data-library/main/mushaf-pages/madina-1421/coordinates/coordinates.json'
resp = requests.get(url)
data = resp.json()
page = data['pages']['001']
print(page['surah_en'], page['ayah_start'], page['ayah_end'])
# → "Al-Fatiha"  1  7
```

#### Coordinates — line-level

```
GET /coordinates/lines
```

```js
const res = await fetch('https://raw.githubusercontent.com/SolimanAnas/quran-data-library/main/line-by-line/coordinates/coordinates.json')
const { pages } = await res.json()
const line = pages['001'].lines['3']
console.log(line.surah_en, line.ayah_start, line.ayah_end)
// → "Al-Fatiha"  2  2
```

```py
import requests
url = 'https://raw.githubusercontent.com/SolimanAnas/quran-data-library/main/line-by-line/coordinates/coordinates.json'
resp = requests.get(url)
data = resp.json()
line = data['pages']['001']['lines']['3']
print(line['surah_en'], line['ayah_start'], line['ayah_end'])
# → "Al-Fatiha"  2  2
```

#### Font file

```
GET /font/{page}
```

```css
@font-face {
  font-family: 'QBC-Page-1';
  src: url('https://raw.githubusercontent.com/SolimanAnas/quran-data-library/main/mushaf-fonts/qbc-v2/p1.woff2') format('woff2');
}
```

```py
import requests
url = 'https://raw.githubusercontent.com/SolimanAnas/quran-data-library/main/mushaf-fonts/qbc-v2/p1.woff2'
resp = requests.get(url)
with open('p1.woff2', 'wb') as f:
    f.write(resp.content)
```

#### Tafsir database (SQLite)

```
GET /tafsir/{name}
```

```js
const url = `https://raw.githubusercontent.com/SolimanAnas/quran-data-library/main/tafsir/tafsir-saadi.db`
```

```py
import requests
url = 'https://raw.githubusercontent.com/SolimanAnas/quran-data-library/main/tafsir/tafsir-saadi.db'
resp = requests.get(url)
with open('tafsir-saadi.db', 'wb') as f:
    f.write(resp.content)

# Query with sqlite3
import sqlite3
conn = sqlite3.connect('tafsir-saadi.db')
cur = conn.execute('SELECT Tafsir FROM AS WHERE SURA_num = 1 AND AYA_num = 1')
print(cur.fetchone()[0])
```

| Param | Values |
|-------|--------|
| `name` | `saadi`, `baghawi`, `ibn-kathir`, `qortobi` |

#### Tafsir (JSON)

```
GET /tafsir/{name}/json
```

```js
const res = await fetch('https://raw.githubusercontent.com/SolimanAnas/quran-data-library/main/tafsir/json/saadi.json')
const { data } = await res.json()

// Find tafsir for Al-Fatiha (surah 1), ayah 1
const ayah = data.find(a => a.surah === 1 && a.ayah === 1)
console.log(ayah.text)
```

```py
import requests
url = 'https://raw.githubusercontent.com/SolimanAnas/quran-data-library/main/tafsir/json/saadi.json'
resp = requests.get(url)
data = resp.json()['data']
ayah = next(a for a in data if a['surah'] == 1 and a['ayah'] == 1)
print(ayah['text'])
```

| Param | Values |
|-------|--------|
| `name` | `saadi`, `baghawi`, `ibn-kathir`, `al-qurtubi` |

### JS Helper Library

A helper module is included in the repo for easy URL construction:

```js
import {
  pageUrl,
  lineUrl,
  coordsUrl,
  fontUrl,
  tafsirUrl,
  tafsirJsonUrl,
  fetchCoords,
  fetchTafsir,
  VERSIONS,
  TAFSIRS,
} from './quran-api.js'

pageUrl('tajweed-colored', 5)       // → full URL to page 5
lineUrl(1, 6)                        // → full URL to line 6 of page 1
coordsUrl('madina-1421')             // → full URL to coordinates JSON
fontUrl(1)                           // → full URL to p1.woff2
tafsirUrl('saadi')                   // → full URL to SQLite DB
tafsirJsonUrl('ibn-kathir')          // → full URL to JSON export
await fetchCoords('madina-1421')     // → parsed JSON directly
await fetchTafsir('saadi')           // → parsed tafsir JSON
```

### Python Helper Library

A Python module is included for easy URL construction and data fetching:

```py
from quran_api import page_url, line_url, coords_url, font_url, tafsir_url, tafsir_json_url, fetch_coords, VERSIONS

page_url('tajweed-colored', 5)       # → full URL to page 5
line_url(1, 6)                        # → full URL to line 6 of page 1
coords_url('madina-1421')             # → full URL to coordinates JSON
font_url(1)                           # → full URL to p1.woff2
tafsir_url('saadi')                   # → full URL to SQLite DB
tafsir_json_url('ibn-kathir')         # → full URL to JSON export
fetch_coords('madina-1421')           # → parsed dict directly
```

---

## Usage

Clone the repo or use the API patterns above without cloning:

```bash
git clone https://github.com/SolimanAnas/quran-data-library.git
```

### Local usage with relative paths

```js
// Page 5 from Tajweed Colored (local file)
const img = new Image()
img.src = 'mushaf-pages/tajweed-colored/005.webp'
```

```js
// Line 3 of page 10 (local file)
const line = new Image()
line.src = 'line-by-line/10/3.png'
```

---

## Islamic API Integration

This data library is integrated with the [Islamic API](https://islamic-api.fly.dev) REST API, which provides:

- **Mushaf pages**: `GET /v1/mushaf/{version}/page/{number}`
- **Line images**: `GET /v1/mushaf/page/{number}/line/{line}`
- **Fonts**: `GET /v1/mushaf/font/{number}`
- **Coordinates**: `GET /v1/mushaf/page/{number}/lines`
- **Ayah location**: `GET /v1/mushaf/ayah-location/{surah}/{ayah}`

The API returns GitHub CDN URLs from this library — no data duplication.

**Example:**
```bash
# Find which page and line Ayat al-Kursi is on
curl https://islamic-api.fly.dev/v1/mushaf/ayah-location/2/255

# Get the Tajweed image for that page
curl https://islamic-api.fly.dev/v1/mushaf/tajweed-colored/page/38
```

---

## License

Data is provided for personal and educational use. Respect the terms of the original Quran text sources.

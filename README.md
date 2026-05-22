# القرآن الكريم — Quran Data Library

A comprehensive, developer-ready collection of Quran data in multiple formats: mushaf page images, scalable font renderings, and line-by-line verse images. Built for Islamic app developers, researchers, and educators.

---

## Contents

| # | Dataset | Format | Count | Description |
|---|---------|--------|-------|-------------|
| 1 | [Madina 1421](#1-madina-1421) | `.webp` | 604 pages | Classic Madina Mushaf — Lafz Al-Jalalah in red |
| 2 | [Madina Green](#2-madina-green) | `.webp` | 621 pages | Madina layout with green-tinted background |
| 3 | [Mushaf 1024](#3-mushaf-1024) | `.png` | 604 pages | 1024px-wide PNG — optimized for screens |
| 4 | [Mushaf Madina 1420](#4-mushaf-madina-1420) | `.webp` | 604 pages | Modern 1420 AH Madina edition |
| 5 | [Tajweed Colored](#5-tajweed-colored) | `.webp` | 604 pages | Color-coded by Tajweed rules |
| 6 | [QBC v2 Fonts](#6-qbc-v2-fonts) | `.woff2` | 604 fonts | Per-page web fonts for scalable rendering |
| 7 | [Line-by-Line](#7-line-by-line) | `.png` | 604 × 15 | Individual verse-line images per page |

---

## Repository Structure

```
quran-data-library/
├── mushaf-pages/
│   ├── madina-1421/          # 001.webp – 604.webp  +  coordinates/
│   ├── madina-green/         # 001.webp – 621.webp  +  coordinates/
│   ├── mushaf-1024/          # 001.png  – 604.png   +  coordinates/
│   ├── mushaf-madina-1420/   # 001.webp – 604.webp  +  coordinates/
│   └── tajweed-colored/      # 001.webp – 604.webp  +  coordinates/
├── mushaf-fonts/
│   └── qbc-v2/               # p1.woff2 – p604.woff2
├── line-by-line/
│   ├── 1/                    # 1.png – 15.png  (page 1 lines)
│   ├── 2/
│   ├── …
│   ├── 604/
│   └── coordinates/          # page+line → surah/ayah mapping
└── README.md
```

---

## Datasets

### 1. Madina 1421

**Mushaf with Lafz Al-Jalalah in Red** (مصحف لفظ الجلالة باللون الأحمر)

The classic King Fahd Complex Madina Mushaf — the word "Allah" (الله) is highlighted in red throughout. Includes a `coordinates.json` mapping each page to its surah and ayah range.

![Page 1](mushaf-pages/madina-1421/001.webp)

```
mushaf-pages/madina-1421/
├── 001.webp … 604.webp
└── coordinates/
    └── coordinates.json
```

---

### 2. Madina Green

Same Madina Mushaf layout rendered with a **green-tinted background**. Ideal for apps that need a softer or color-themed page aesthetic.

![Page 1](mushaf-pages/madina-green/001.webp)

```
mushaf-pages/madina-green/
├── 001.webp … 621.webp
└── coordinates/
    └── coordinates.json
```

---

### 3. Mushaf 1024

Standard Madina Mushaf pages rendered at **1024 px width in PNG format**. High clarity for digital screens.

![Page 1](mushaf-pages/mushaf-1024/001.png)

```
mushaf-pages/mushaf-1024/
├── 001.png … 604.png
└── coordinates/
    └── coordinates.json
```

---

### 4. Mushaf Madina 1420

Modern Madina Mushaf based on the **1420 AH printing**, featuring contemporary calligraphic styling.

![Page 1](mushaf-pages/mushaf-madina-1420/001.webp)

```
mushaf-pages/mushaf-madina-1420/
├── 001.webp … 604.webp
└── coordinates/
    └── coordinates.json
```

---

### 5. Tajweed Colored

Color-coded Quran pages following **Tajweed recitation rules** — each letter is colored according to its pronunciation rule (e.g., red for qalqalah, green for ghunnah). Perfect for learning proper Tajweed.

![Page 1](mushaf-pages/tajweed-colored/001.webp)

```
mushaf-pages/tajweed-colored/
├── 001.webp … 604.webp
└── coordinates/
    └── coordinates.json
```

---

### 6. QBC v2 Fonts

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

### 7. Line-by-Line

Each of the 604 pages is split into **individual verse lines** (up to 15 per page) as separate PNG images. Ideal for verse-by-verse readers, flashcard apps, or Quran memorization tools.

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

**Preview — page 1, lines 1 & 2:**

![Line 1](line-by-line/1/1.png) ![Line 2](line-by-line/1/2.png)

---

## Usage

### Clone the repository

```bash
git clone https://github.com/SolimanAnas/quran-data-library.git
```

### Load a mushaf page image

```js
// Page 5 from Tajweed Colored
const img = new Image()
img.src = 'mushaf-pages/tajweed-colored/005.webp'
```

### Load a line image

```js
// Line 3 of page 10
const line = new Image()
line.src = 'line-by-line/10/3.png'
```

### Use coordinates — page-level

Each mushaf version includes a `coordinates.json` that maps every page to its surah and ayah range:

```js
const res = await fetch('mushaf-pages/madina-1421/coordinates/coordinates.json')
const { pages } = await res.json()

const page = pages['001']
console.log(page.surah_en, page.ayah_start, page.ayah_end)
// → "Al-Fatiha"  1  7
```

### Use coordinates — line-level

```js
const res = await fetch('line-by-line/coordinates/coordinates.json')
const { pages } = await res.json()

// Line 3 of page 1
const line = pages['001'].lines['3']
console.log(line.surah_en, line.ayah_start, line.ayah_end)
// → "Al-Fatiha"  2  2
```

---

## License

Data is provided for personal and educational use. Respect the terms of the original Quran text sources.

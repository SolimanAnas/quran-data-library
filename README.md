# القرآن الكريم — Quran Data Library

A comprehensive collection of Quran data in multiple formats: **mushaf page images**, **font-based renderings**, and **line-by-line verse images**. Built for developers, researchers, and Islamic app creators.

> **Last updated:** May 23, 2026

---

## Versions

| # | Version | Format | Pages | Type |
|---|---------|--------|-------|------|
| 1 | **Madina 1421** | `.webp` | 604 | Mushaf images |
| 2 | **Madina Green** | `.webp` | 621 | Mushaf images |
| 3 | **Mushaf 1024** | `.png` | 604 | Mushaf images |
| 4 | **Mushaf Madina 1420** | `.webp` | 604 | Mushaf images |
| 5 | **Tajweed Colored** | `.webp` | 604 | Mushaf images |
| 6 | **QBC v2** | `.woff2` | 604 | Quran fonts |
| 7 | **Line-by-line** | `.png` | 604×15 | Line images |

---

## 1. Madina 1421

Mushaf with Lafz Al-Jalalah in Red (مصحف لفظ الجلالة باللون الأحمر)

![Page 1](mushaf%20pages/madina-1421/001.webp)

```
mushaf pages/madina-1421/
├── 001.webp .. 604.webp
└── coordinates/coordinates.json
```

## 2. Madina Green

Same Madina Mushaf layout with a green-tinted background. Ideal for apps that need a softer or color-coded page background.

![Page 1](mushaf%20pages/madina-green/001.webp)

```
mushaf pages/madina-green/
├── 001.webp .. 621.webp
└── coordinates/coordinates.json
```

## 3. Mushaf 1024

Standard Madina Mushaf pages rendered at 1024px width in PNG format. Optimized for digital screens with clear readability.

![Page 1](mushaf%20pages/mushaf-1024/001.png)

```
mushaf pages/mushaf-1024/
├── 001.png .. 604.png
├── thumbnail.png
└── (coordinates coming soon)
```

## 4. Mushaf Madina 1420

Modern Madina Mushaf edition based on the 1420 AH printing. Features contemporary calligraphic styling.

![Page 1](mushaf%20pages/mushaf-madina-1420/001.webp)

```
mushaf pages/mushaf-madina-1420/
├── 001.webp .. 604.webp
└── coordinates/coordinates.json
```

## 5. Tajweed Colored

Color-coded Quran pages following Tajweed rules — each letter is colored according to its pronunciation rule (e.g., red for emphasis, green for nasalization). Perfect for learning proper recitation.

![Page 1](mushaf%20pages/tajweed-colored/001.webp)

```
mushaf pages/tajweed-colored/
├── 001.webp .. 604.webp
└── coordinates/coordinates.json
```

## 6. QBC v2 (Quran Bihari Calligraphy)

Font-based Quran rendering using per-page WOFF2 font files. Each page has a custom font file (`p1.woff2`..`p604.woff2`) that renders the page text when loaded as a web font. Enables high-quality scalable text rendering.

```
mushaf fonts/qbc-v2/
├── p1.woff2 .. p604.woff2
```

**Usage in web apps:**

```js
@font-face {
  font-family: 'QBC Page 1';
  src: url('mushaf fonts/qbc-v2/p1.woff2') format('woff2');
}
```

## 7. Line-by-Line

Each of the 604 pages is split into individual verse lines (up to 15 per page) as separate PNG images. Useful for building verse-by-verse readers or flashcards.

```
Quran line by line png/
├── 1/
│   ├── 1.png
│   ├── 2.png
│   └── ...
├── 2/
└── ... (up to 604/)
```

### Preview

![Line 1](Quran%20line%20by%20line%20png/1/1.png) ![Line 2](Quran%20line%20by%20line%20png/1/2.png)

---

## Usage

Clone the repo and use the data directly:

```bash
git clone https://github.com/SolimanAnas/quran-data-library.git
```

### Loading page images

```js
// Load page 1 from Mushaf 1024
const img = new Image()
img.src = 'mushaf pages/mushaf-1024/001.png'
```

### Loading line images

```js
// Load line 5 of page 10
const line = new Image()
line.src = 'Quran line by line png/10/5.png'
```

### Using coordinates (JSON)

Each version with page images includes a `coordinates/coordinates.json` file mapping every page to its surah/ayah range:

```js
const res = await fetch('mushaf pages/madina-1421/coordinates/coordinates.json')
const coords = await res.json()

// Get surah/ayah for page 1
const page = coords.pages['001']
console.log(page.surah_en, page.ayah_start, page.ayah_end)
// → "Al-Fatiha", 1, 7
```

For line-by-line, coordinates include per-line surah/ayah data:

```js
const res = await fetch('Quran line by line png/coordinates/coordinates.json')
const coords = await res.json()

// Line 3 on page 1
const line = coords.pages['001'].lines['3']
console.log(line.surah_en, line.ayah_start, line.ayah_end)
// → "Al-Fatiha", 2, 2
```

---

## Structure

```
quran-data-library/
├── mushaf pages/
│   ├── madina-1421/          # Classic Madina Mushaf (1421 AH)
│   │   └── coordinates/      # Page → surah/ayah mapping
│   ├── madina-green/         # Green-tinted version
│   │   └── coordinates/      # Page → surah/ayah mapping
│   ├── mushaf-1024/          # 1024px PNG pages
│   ├── mushaf-madina-1420/   # Modern Madina Mushaf (1420 AH)
│   │   └── coordinates/      # Page → surah/ayah mapping
│   └── tajweed-colored/      # Tajweed color-coded
│       └── coordinates/      # Page → surah/ayah mapping
├── mushaf fonts/
│   └── qbc-v2/               # Quran Bihari Calligraphy v2 fonts
├── Quran line by line png/   # Per-page line images
│   ├── 1/...15.png
│   ├── 2/...15.png
│   ├── ...
│   └── coordinates/          # Page+Line → surah/ayah mapping
└── README.md
```

---

## License

Data is provided for personal and educational use. Respect the terms of the original Quran text sources.

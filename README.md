# القرآن الكريم — Quran Data Library

A comprehensive collection of Quran data: **mushaf page images** in multiple styles and **line-by-line verse images**. Built for developers, researchers, and Islamic app creators.

![Madina 1421](mushaf%20pages/madina-1421/001.webp)
![Madina Green](mushaf%20pages/madina-green/001.webp)
![Mushaf Madina 1441](mushaf%20pages/mushaf-madina-1441/001.webp)
![Tajweed](mushaf%20pages/tajweed/001.webp)

> **Last updated:** May 25, 2026

---

## 📦 Versions

| Version | Format | Count | Description |
|---------|--------|-------|-------------|
| **Madina 1421** | `.webp` | 604+ | Classic Madina Mushaf (1421 AH) |
| **Madina Green** | `.webp` | 621 | Green-tinted Madina Mushaf |
| **Mushaf Madina 1441** | `.webp` | 604 | Modern Madina Mushaf (1441 AH) |
| **Tajweed** | `.webp` | 604 | Color-coded Tajweed rules |
| **Line-by-line** | `.png` | 604×15 | Individual verse lines per page |

---

## 🖼️ Preview

### Mushaf Pages (Full Page)

| Madina 1421 | Madina Green | Madina 1441 | Tajweed |
|-------------|--------------|-------------|---------|
| ![1421](mushaf%20pages/madina-1421/001.webp) | ![Green](mushaf%20pages/madina-green/001.webp) | ![1441](mushaf%20pages/mushaf-madina-1441/001.webp) | ![Tajweed](mushaf%20pages/tajweed/001.webp) |

### Line-by-Line (Individual Verse Lines)

Each of the 604 pages is split into up to 15 individual line images:

```
Quran line by line png/
├── 1/
│   ├── 1.png
│   ├── 2.png
│   └── ... (up to 15.png)
├── 2/
└── ... (up to 604/)
```

![Line 1](Quran%20line%20by%20line%20png/1/1.png)
![Line 2](Quran%20line%20by%20line%20png/1/2.png)

---

## 🚀 Usage

Clone the repo and use the images directly:

```bash
git clone https://github.com/SolimanAnas/quran-data-library.git
```

### Loading in apps

```js
// Load page 1 from Madina 1421
const img = new Image()
img.src = 'mushaf pages/madina-1421/001.webp'

// Load line 5 of page 10
const line = new Image()
line.src = 'Quran line by line png/10/5.png'
```

### Using coordinates (JSON)

Each version includes a `coordinates/coordinates.json` file mapping every page to its surah/ayah range:

```js
// Fetch coordinates for Madina 1421
const res = await fetch('mushaf pages/madina-1421/coordinates/coordinates.json')
const coords = await res.json()

// Get surah/ayah for page 1
const page = coords.pages['001']
console.log(page.surah_en, page.ayah_start, page.ayah_end)
// → "Al-Fatiha", 1, 7

// Load the corresponding page image
const img = new Image()
img.src = `mushaf pages/madina-1421/${pageKey}.webp`
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

## 📁 Structure

```
quran-data-library/
├── mushaf pages/
│   ├── madina-1421/          # Classic Madina Mushaf
│   │   └── coordinates/      #   └── Page → surah/ayah mapping
│   ├── madina-green/         # Green-tinted version
│   │   └── coordinates/      #   └── Page → surah/ayah mapping
│   ├── mushaf-madina-1441/   # Modern Madina Mushaf
│   │   └── coordinates/      #   └── Page → surah/ayah mapping
│   └── tajweed/              # Tajweed color-coded
│       └── coordinates/      #   └── Page → surah/ayah mapping
├── Quran line by line png/   # Per-page line images
│   ├── 1/...15.png
│   ├── 2/...15.png
│   ├── ...
│   └── coordinates/          #   └── Page+Line → surah/ayah mapping
└── README.md
```

---

## 📄 License

Data is provided for personal and educational use. Respect the terms of the original Quran text sources.

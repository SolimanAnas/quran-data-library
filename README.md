# القرآن الكريم — Quran Data Library

A comprehensive collection of Quran data: **mushaf page images** in multiple styles and **line-by-line verse images**. Built for developers, researchers, and Islamic app creators.

![Madina 1421](mushaf%20pages/madina-1421/001.webp)
![Madina Green](mushaf%20pages/madina-green/001.webp)
![Mushaf Madina 1441](mushaf%20pages/mushaf-madina-1441/001.webp)
![Tajweed](mushaf%20pages/tajweed/001.webp)

> **Last updated:** May 23, 2026

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
// Example: load page 1 from Madina 1421
const img = new Image()
img.src = 'mushaf pages/madina-1421/001.webp'

// Example: load line 5 of page 10
const line = new Image()
line.src = 'Quran line by line png/10/5.png'
```

---

## 📁 Structure

```
quran-data-library/
├── mushaf pages/
│   ├── madina-1421/       # Classic Madina Mushaf
│   ├── madina-green/      # Green-tinted version
│   ├── mushaf-madina-1441/ # Modern Madina Mushaf
│   └── tajweed/           # Tajweed color-coded
├── Quran line by line png/ # Per-page line images
│   ├── 1/...15.png
│   ├── 2/...15.png
│   └── ...
└── README.md
```

---

## 📄 License

Data is provided for personal and educational use. Respect the terms of the original Quran text sources.

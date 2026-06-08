/**
 * Quran Data Library — JavaScript SDK
 *
 * Provides URL builders and fetchers for mushaf pages, line-by-line images,
 * WOFF2 fonts, coordinates, and tafsir data.
 *
 * All assets are hosted on GitHub's raw CDN — no server required.
 *
 * @example
 *   import { pageUrl, fontUrl, fetchCoords } from './quran-api.js'
 *
 *   // Get image URL for Madina mushaf page 1
 *   const img = pageUrl('madina-1421', 1)
 *
 *   // Get scalable font for page 1
 *   const font = fontUrl(1)
 *
 *   // Fetch page coordinates
 *   const coords = await fetchCoords('madina-1421')
 */

const BASE = 'https://raw.githubusercontent.com/SolimanAnas/quran-data-library/main'

const VERSIONS = {
  'madina-1421':         { name: 'Madina 1421',         format: 'webp', dir: 'mushaf-pages/madina-1421',         description: 'King Fahd Complex, Lafz Al-Jalalah highlighted' },
  'madina-green':        { name: 'Madina Green',        format: 'webp', dir: 'mushaf-pages/madina-green',        description: 'Green-tinted background variant' },
  'mushaf-1024':         { name: 'Standard 1024',       format: 'png',  dir: 'mushaf-pages/mushaf-1024',         description: 'Standard Madina pages at 1024px width' },
  'mushaf-madina-1420':  { name: 'Madina 1420',         format: 'webp', dir: 'mushaf-pages/mushaf-madina-1420',  description: 'Modern 1420 AH printing style' },
  'tajweed-colored':     { name: 'Tajweed Colored',     format: 'webp', dir: 'mushaf-pages/tajweed-colored',     description: 'Color-coded Tajweed rules' },
  'Madina-2-Brown-Border': { name: 'Brown Border',     format: 'png',  dir: 'mushaf-pages/Madina-2-Brown-Border', description: 'Brown border frame variant' },
}

const FONT_DIR = 'mushaf-fonts/qbc-v2'
const LINE_DIR = 'line-by-line'
const TAFSIR_DIR = 'tafsir'

const TAFSIRS = {
  'saadi':      { db: 'tafsir-saadi.db',       json: 'saadi.json',     name: 'Tafsir al-Sa\'di' },
  'baghawi':    { db: 'tafsir-baghawi.db',      json: 'baghawi.json',   name: 'Tafsir al-Baghawi' },
  'ibn-kathir': { db: 'tafsir-ibn-kathir.db',   json: 'ibn-kathir.json', name: 'Tafsir Ibn Kathir' },
  'qortobi':    { db: 'tafsir-qortobi.db',      json: 'al-qurtubi.json', name: 'Tafsir al-Qurtubi' },
  'al-qurtubi': { db: 'tafsir-qortobi.db',      json: 'al-qurtubi.json', name: 'Tafsir al-Qurtubi' },
}

function pad(n, z = 3) {
  return String(n).padStart(z, '0')
}

// ── URL Builders ──────────────────────────────────────────────────────────────

function pageUrl(version, page) {
  const v = VERSIONS[version]
  if (!v) throw new Error(`Unknown version: ${version}. Valid: ${Object.keys(VERSIONS).join(', ')}`)
  return `${BASE}/${v.dir}/${pad(page)}.${v.format}`
}

function lineUrl(page, line) {
  return `${BASE}/${LINE_DIR}/${page}/${line}.png`
}

function coordsUrl(version) {
  const v = VERSIONS[version]
  if (!v) throw new Error(`Unknown version: ${version}. Valid: ${Object.keys(VERSIONS).join(', ')}`)
  return `${BASE}/${v.dir}/coordinates/coordinates.json`
}

function lineCoordsUrl() {
  return `${BASE}/${LINE_DIR}/coordinates/coordinates.json`
}

function fontUrl(page) {
  return `${BASE}/${FONT_DIR}/p${page}.woff2`
}

function tafsirUrl(name) {
  const t = TAFSIRS[name]
  if (!t) throw new Error(`Unknown tafsir: ${name}. Valid: ${Object.keys(TAFSIRS).join(', ')}`)
  return `${BASE}/${TAFSIR_DIR}/${t.db}`
}

function tafsirJsonUrl(name) {
  const t = TAFSIRS[name]
  if (!t) throw new Error(`Unknown tafsir: ${name}. Valid: ${Object.keys(TAFSIRS).join(', ')}`)
  return `${BASE}/${TAFSIR_DIR}/json/${t.json}`
}

// ── Fetchers ──────────────────────────────────────────────────────────────────

async function fetchJson(url) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`)
  return res.json()
}

async function fetchCoords(version) {
  return fetchJson(coordsUrl(version))
}

async function fetchLineCoords() {
  return fetchJson(lineCoordsUrl())
}

async function fetchTafsir(name) {
  return fetchJson(tafsirJsonUrl(name))
}

// ── Ayah Lookup ───────────────────────────────────────────────────────────────

function findAyahLocation(coords, surah, ayah) {
  const pages = coords.pages || {}
  for (const [pageNum, pageData] of Object.entries(pages)) {
    const lines = pageData.lines || {}
    for (const [lineNum, lineData] of Object.entries(lines)) {
      if (lineData.surah === surah && lineData.ayah_start <= ayah && ayah <= (lineData.ayah_end || lineData.ayah_start)) {
        return {
          page: parseInt(pageNum),
          line: parseInt(lineNum),
          surah_name_ar: lineData.surah_name_ar,
          surah_name_en: lineData.surah_name_en,
        }
      }
    }
  }
  return null
}

// ── Exports ───────────────────────────────────────────────────────────────────

export {
  BASE,
  VERSIONS,
  TAFSIRS,
  pageUrl,
  lineUrl,
  coordsUrl,
  lineCoordsUrl,
  fontUrl,
  tafsirUrl,
  tafsirJsonUrl,
  fetchCoords,
  fetchLineCoords,
  fetchTafsir,
  findAyahLocation,
}

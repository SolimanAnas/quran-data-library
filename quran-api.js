const BASE = 'https://raw.githubusercontent.com/SolimanAnas/quran-data-library/main'

const VERSIONS = {
  'madina-1421':           { format: 'webp', dir: 'mushaf-pages/madina-1421' },
  'madina-green':          { format: 'webp', dir: 'mushaf-pages/madina-green' },
  'mushaf-1024':           { format: 'png',  dir: 'mushaf-pages/mushaf-1024' },
  'mushaf-madina-1420':    { format: 'webp', dir: 'mushaf-pages/mushaf-madina-1420' },
  'tajweed-colored':       { format: 'webp', dir: 'mushaf-pages/tajweed-colored' },
  'Madina-2-Brown-Border': { format: 'png',  dir: 'mushaf-pages/Madina-2-Brown-Border' },
}

const FONT_VERSION = 'qbc-v2'
const FONT_DIR = 'mushaf-fonts/qbc-v2'
const LINE_DIR = 'line-by-line'
const TAFSIR_DIR = 'tafsir'

const TAFSIRS = {
  'saadi':      { db: 'tafsir-saadi.db',                      json: 'saadi.json' },
  'baghawi':    { db: 'tafsir-baghawi.db',                     json: 'baghawi.json' },
  'ibn-kathir': { db: 'tafsir-ibn-kathir.db',                  json: 'ibn-kathir.json' },
  'qortobi':    { db: 'tafsir-qortobi.db',                     json: 'al-qurtubi.json' },
  'al-qurtubi': { db: 'tafsir-qortobi.db',                     json: 'al-qurtubi.json' },
}

function pad(n, z = 3) {
  return String(n).padStart(z, '0')
}

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

async function fetchTafsir(name) {
  const res = await fetch(tafsirJsonUrl(name))
  if (!res.ok) throw new Error(`Failed to fetch tafsir ${name}: ${res.status}`)
  return res.json()
}

async function fetchCoords(version) {
  const res = await fetch(coordsUrl(version))
  if (!res.ok) throw new Error(`Failed to fetch coordinates for ${version}: ${res.status}`)
  return res.json()
}

async function fetchLineCoords() {
  const res = await fetch(lineCoordsUrl())
  if (!res.ok) throw new Error(`Failed to fetch line coordinates: ${res.status}`)
  return res.json()
}

export {
  BASE,
  VERSIONS,
  FONT_VERSION,
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
}

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
  pageUrl,
  lineUrl,
  coordsUrl,
  lineCoordsUrl,
  fontUrl,
  fetchCoords,
  fetchLineCoords,
}

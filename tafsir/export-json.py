import sqlite3, json, os

DB_DIR = r'G:\Github Repos\quran-data-library\tafsir'
OUT_DIR = os.path.join(DB_DIR, 'json')
os.makedirs(OUT_DIR, exist_ok=True)

TAFSIRS = [
    ('tafsir-saadi.db',    'AS', 'Saadi'),
    ('tafsir-baghawi.db',  'Ba', 'Baghawi'),
    ('tafsir-ibn-kathir.db', 'IK', 'Ibn Kathir'),
    ('tafsir-qortobi.db',  'AQ', 'Al-Qurtubi'),
]

for db_file, table, name in TAFSIRS:
    db_path = os.path.join(DB_DIR, db_file)
    print(f'Exporting {db_file} ({name})...')
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    cursor.execute(f'SELECT SURA_num, AYA_num, Tafsir FROM "{table}" ORDER BY SURA_num, AYA_num')
    rows = cursor.fetchall()
    conn.close()

    data = [{'surah': r[0], 'ayah': r[1], 'text': r[2]} for r in rows]
    output = {
        'tafsir': name,
        'slug': name.lower().replace(' ', '-'),
        'language': 'ar',
        'total': len(rows),
        'data': data
    }

    out_path = os.path.join(OUT_DIR, f'{name.lower().replace(" ", "-")}.json')
    with open(out_path, 'w', encoding='utf-8') as f:
        json.dump(output, f, ensure_ascii=False)

    size_kb = os.path.getsize(out_path) / 1024
    print(f'  -> {out_path} ({size_kb:.0f} KB, {len(rows)} ayahs)')

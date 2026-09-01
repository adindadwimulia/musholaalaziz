# Mushola Al-Aziz — Digital Signage

Website fullscreen untuk display TV/LED masjid, dibuat dengan HTML, CSS, JavaScript, dan JSON.

## Fitur
- Jam real-time dan tanggal Indonesia
- Tanggal Hijriah
- Jadwal Subuh, Dzuhur, Ashar, Maghrib, Isya
- Imsak, Terbit, dan Dhuha
- Countdown otomatis menuju sholat berikutnya
- Highlight sholat terdekat
- Pengumuman
- Agenda kajian
- Ayat Al-Qur'an
- Fullscreen
- Responsive/fluid untuk TV, laptop, tablet, dan HP
- Offline-ready (tanpa framework/build)
- Data konfigurasi terpisah di `config.json`

## GitHub Pages
1. Upload seluruh isi folder ke repository GitHub.
2. Aktifkan Settings → Pages → Deploy from branch.
3. Buka URL Pages yang diberikan GitHub.
4. Untuk TV, buka URL tersebut lalu tekan tombol fullscreen.

## Catatan akurasi
Versi ini menggunakan data jadwal Kota Bekasi untuk September 2026 yang dirujuk dari sumber yang menyatakan berasal dari Bimas Islam/Kementerian Agama RI. Karena ini display ibadah, cocokkan jadwal dengan jadwal resmi yang digunakan Mushola Al-Aziz sebelum dipakai sebagai acuan adzan/iqamah.

Koordinat proyek disetel untuk area Kemang IFI Graha dan zona waktu Asia/Jakarta. Jika titik koordinat resmi mushola berbeda, ubah `coordinates` di `config.json` dan `app.js`.

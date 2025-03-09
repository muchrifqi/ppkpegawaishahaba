# Sistem Presensi Online

Sistem ini dirancang untuk mencatat kehadiran pegawai secara online dengan fitur validasi lokasi. Data presensi disimpan di Google Spreadsheet, dan sistem hanya dapat diakses dalam radius 100 km dari lokasi yang ditentukan.

## Fitur
- **Tombol Presensi**: Setiap pegawai memiliki tombol presensi sendiri.
- **Validasi Lokasi**: Presensi hanya bisa dilakukan dalam radius 100 km dari lokasi yang ditentukan.
- **Konfirmasi**: Menampilkan konfirmasi setelah presensi berhasil.
- **Penyimpanan Data**: Data presensi disimpan di Google Spreadsheet.

## Cara Kerja
### 1. Pegawai Mengklik Tombol
- Setiap tombol mewakili satu pegawai.
- Saat tombol diklik, sistem akan memeriksa lokasi pengguna.

### 2. Validasi Lokasi
- Sistem menggunakan GPS untuk memastikan pengguna berada dalam radius 100 km dari lokasi yang ditentukan.
- Jika berada di luar radius, presensi akan ditolak.

### 3. Kirim Data ke Google Spreadsheet
- Jika lokasi valid, data (nama dan waktu) dikirim ke Google Spreadsheet melalui Google Apps Script.

### 4. Tampilkan Konfirmasi
- Setelah presensi berhasil, tombol akan dinonaktifkan dan menampilkan pesan **"Sudah Datang"**.
- Halaman konfirmasi akan muncul dengan detail presensi (nama dan waktu).

## Teknologi yang Digunakan
- **Google Apps Script**: Untuk menyimpan data ke Google Spreadsheet.
- **HTML, CSS, JavaScript**: Untuk antarmuka pengguna.
- **Geolocation API**: Untuk validasi lokasi pengguna.

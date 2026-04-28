#  Eksperimen Live Chat Web Real-Time dengan WebSocket

Repositori ini berisi hasil eksperimen implementasi protokol **WebSocket** murni menggunakan Node.js dan antarmuka HTML/JS statis. Eksperimen ini ditujukan untuk mendemonstrasikan keunggulan komunikasi dua arah (*bidirectional*) secara *real-time* dibandingkan dengan metode *HTTP Polling* tradisional.

**Disusun untuk memenuhi Tugas UTS Mata Kuliah Pemrograman Web2.**

 **Nama:** Aldi Rismandayana
 **NIM:** 312410015
 **Program Studi:** Teknik Informatika - Universitas Pelita Bangsa

---

##  Tujuan Eksperimen
1. Memahami secara mendalam cara kerja protokol WebSocket (`ws://`).
2. Membangun fondasi aplikasi *live chat* dengan arsitektur *client-server*.
3. Mengimplementasikan fitur *auto-reply* (bot respons otomatis) dengan manipulasi *delay* untuk simulasi asisten virtual.
4. Menganalisis latensi dan efisiensi pengiriman pesan tanpa pemuatan ulang (*reload*) halaman.

## Teknologi yang Digunakan
* **Sisi Server (Backend):** Node.js dengan *library* `ws`
* **Sisi Klien (Frontend):** HTML5, CSS3, dan Vanilla JavaScript (DOM Manipulation)
* **Format Data:** JSON

##  Struktur Berkas
```text
📦 Eksperimen-WebSocket
 ┣ 📜 server.js     # Logika server Node.js (Broadcast & Bot Auto-Reply)
 ┣ 📜 index.html    # Antarmuka (UI) Live Chat klien
 ┗ 📜 README.md     # Dokumentasi eksperimen
```

##  Cara Menjalankan Aplikasi Secara Lokal

1. Pastikan **Node.js** sudah terinstal di komputer Anda.
2. *Clone* atau unduh repositori ini.
3. Buka terminal/Command Prompt, arahkan ke folder proyek ini.
4. Instal dependensi WebSocket dengan perintah:
   ```bash
   npm install ws
   ```
5. Jalankan server lokal:
   ```bash
   node server.js
   ```
6. Buka *file* `index.html` di *browser* (disarankan membuka di dua tab/jendela berbeda untuk menguji fitur *broadcast*).

---

##  Hasil Eksperimen dan Skenario Uji Coba

Berikut adalah tahapan eksperimen yang dilakukan beserta hasilnya:

### 1. Uji Coba Koneksi (Handshake)
* **Skenario:** Menjalankan `index.html` di browser.
* **Hasil:** * UI klien langsung merespons dengan indikator 🟢 **Status: Terhubung**.
  * Server (Terminal) mencatat alamat IP klien yang baru masuk.
  * Klien menerima pesan otomatis (*System Message*) berupa ucapan selamat datang dari server.
    <img width="933" height="168" alt="image" src="https://github.com/user-attachments/assets/b4213b2d-519b-4a9e-be2f-181178c444ad" />
    <img width="1194" height="1088" alt="image" src="https://github.com/user-attachments/assets/956a9a3c-83af-44dd-a97f-3bf70204cb95" />



### 2. Uji Coba Pengiriman Pesan dan Broadcast Real-Time
* **Skenario:** Mengetik pesan dan menekan tombol kirim atau "Enter".
* **Hasil:**
  * Pesan diproses menjadi bentuk format string (agar tidak terbaca sebagai *Buffer* mentah) lalu dikemas dalam format JSON.
  * Pesan muncul di layar pengirim secara instan.
  * Jika ada klien lain yang terhubung di tab/browser berbeda, klien tersebut akan otomatis menerima pesan yang sama di detik itu juga tanpa perlu melakukan *refresh*.
  <img width="903" height="130" alt="image" src="https://github.com/user-attachments/assets/46dccba0-0abb-4fd6-a618-a1ccc4fa0266" />
  <img width="1134" height="1085" alt="image" src="https://github.com/user-attachments/assets/899bc857-4297-49af-a9bd-aae9440209c5" />
 *  Jika di refresh maka seperti ini :
    <img width="988" height="303" alt="image" src="https://github.com/user-attachments/assets/ed474b26-ca45-49bf-a3f9-9dd7d7d53a71" />



### 3. Uji Coba Simulasi Bot (Auto-Reply)
* **Skenario:** Klien mengirimkan pesan dengan *keyword* tertentu seperti "Halo" atau "Jam berapa".
* **Hasil:**
  * Server menangkap pesan tersebut dan menjalankan pengecekan menggunakan `if/else`.
  * Server menggunakan fungsi `setTimeout` untuk menunda eksekusi selama 1000 milidetik (1 detik) sebelum mengirimkan pesan balasan `type: 'system'` dengan awalan `🤖 Bot:`.
  * Hal ini mensimulasikan jeda natural layaknya *chatbot* AI yang sedang "berpikir" sebelum membalas.
  <img width="1146" height="1054" alt="Screenshot 2026-04-28 135841" src="https://github.com/user-attachments/assets/f0eec275-0aba-4e04-b16c-9d290805b407" />
  
  * Jika server dimatikan maka seperti ini
  
    <img width="1108" height="1029" alt="Screenshot 2026-04-28 140309" src="https://github.com/user-attachments/assets/3af5ca15-2a97-444c-845b-79563bb1c3cb" />

## Bukti Plagiarisme Artikel
<img width="1569" height="854" alt="Screenshot 2026-04-27 132010" src="https://github.com/user-attachments/assets/35221e16-d38c-47d1-902f-e1dd275fbb65" />




---

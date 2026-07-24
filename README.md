# Ringkasan Halaman Website - Edutech Solution (CV Solusi Edukasi Indonesia)

Dokumen ini berisi rangkuman lengkap isi dari setiap halaman yang ada pada aplikasi website **Edutech Solution** (dikembangkan oleh CV Solusi Edukasi Indonesia / CV SEI).

---

## 📌 Informasi Umum Perusahaan
*   **Nama Brand:** Edutech Solution
*   **Badan Hukum:** CV Solusi Edukasi Indonesia (CV SEI)
*   **Legalitas:**
    *   **NIB:** 2205260161665
    *   **NPWP:** 10.000.000.9-726.986
*   **Lokasi Kantor Pusat:** Jl. Saluyu XII A No. 42, Cipamokolan, Rancasari, Kota Bandung, Jawa Barat 40232
*   **Kontak Resmi:**
    *   **Email:** info@edutechsolution.co.id
    *   **Website:** [edutechsolution.co.id](https://edutechsolution.co.id)

---

## 🗺️ Peta Navigasi & Halaman (Routing)
Aplikasi dibangun menggunakan React Router dengan struktur halaman sebagai berikut:

| No | Nama Halaman / Fitur | Path / URL | File Komponen |
|----|----------------------|------------|---------------|
| 1  | **Beranda** (Home) | `/` | `src/pages/Home.jsx` |
| 2  | **Tentang Kami** (About) | `/about` | `src/pages/About.jsx` |
| 3  | **Layanan** (Services Index) | `/service` | `src/pages/LayananIndex.jsx` |
| 4  | ├─ *Training & Dev* | `/service/training` | `src/pages/services/TrainingService.jsx` |
| 5  | ├─ *Management Consulting* | `/service/management` | `src/pages/services/ManagementService.jsx` |
| 6  | ├─ *IT Solution* | `/service/it-solution` | `src/pages/services/ITSolutionService.jsx` |
| 7  | ├─ *Software Provider* | `/service/software-provider` | `src/pages/services/SoftwareProviderService.jsx` |
| 8  | └─ *Event & MICE* | `/service/event-mice` | `src/pages/services/EventMiceService.jsx` |
| 9  | **Program** | `/program` | `src/pages/Program.jsx` |
| 10 | **Portofolio** | `/portofolio` | `src/pages/Portofolio.jsx` |
| 11 | **Kontak** | `/contact` | `src/pages/Contact.jsx` |

---

## 📝 Rangkuman Detail Isi Halaman

### 1. Halaman Beranda (Home)
*   **Path:** `/`
*   **Tujuan:** Halaman utama untuk memperkenalkan brand, layanan utama, keunggulan, metode kerja, dan segmentasi klien.
*   **Struktur Isi:**
    *   **Hero Section:**
        *   Badge: `CV SOLUSI EDUKASI INDONESIA`
        *   Judul Utama: **"Edutech Solution: Pelatihan Praktis dan Aplikatif"**
        *   Deskripsi: Solusi edukasi, konsultasi, teknologi, dan event profesional untuk mendukung pertumbuhan organisasi Anda serta mencetak profesional unggul.
        *   Tombol: *Mulai Konsultasi* (ke halaman Kontak) & *Jelajahi Program* (ke halaman Program).
    *   **Layanan Utama Kami (Bento Grid):** Ringkasan 5 layanan dengan link menuju detail halaman masing-masing.
    *   **Bagaimana Kami Bekerja? (Metode & Alur):**
        *   *Metode Pelaksanaan:* Offline, Online, Hybrid, In-House, Public Class.
        *   *Alur Kerja:* 1. Identifikasi Kebutuhan $\rightarrow$ 2. Penyusunan Solusi $\rightarrow$ 3. Pelaksanaan Program $\rightarrow$ 4. Evaluasi & Dokumentasi $\rightarrow$ 5. Continuous Improvement.
    *   **Keunggulan Kami:** Program Fleksibel, Berorientasi Praktik, Tenaga Ahli Profesional, Dukungan Digital, Legalitas Jelas, Layanan Terintegrasi.
    *   **Segmentasi Klien Kami:** Korporat & Pemerintahan, Pendidikan & Komunitas, UMKM & Profesional, Industri Spesifik.
    *   **CTA (Call To Action):** Ajakan berkonsultasi gratis dengan tombol *"Mulai Konsultasi Gratis"*.

---

### 2. Halaman Tentang Kami (About)
*   **Path:** `/about`
*   **Tujuan:** Menampilkan profil perusahaan secara mendalam, visi misi, budaya, legalitas, serta tim kepemimpinan.
*   **Struktur Isi:**
    *   **Hero Section:** Judul *"Mencetak Profesional Unggul, untuk Indonesia yang Lebih Baik"*.
    *   **Profil Perusahaan & Statistik:** Deskripsi lengkap CV SEI beserta informasi legal (NPWP, NIB, Brand, Lokasi).
    *   **Visi & Misi:**
        *   *Visi:* Menjadi top of mind lembaga pelatihan dan sertifikasi profesional industri di Indonesia.
        *   *Misi:* Membangun tim kompeten, sistem kolaboratif, pelayanan profesional/responsif, dan memperkuat pertumbuhan perusahaan.
    *   **Budaya Perusahaan:** Belajar, Bertumbuh Bersama, Bertanggung Jawab.
    *   **Tim Kepemimpinan (Leadership Team):**
        *   Komisaris: *Franciska Sukamdewi Megawati*
        *   Direktur: *Yana Mulyana*
        *   Keuangan: *Setiani Hafsah*
    *   **CTA Section:** Tombol *"Konsultasi Sekarang"* & *"Lihat Katalog Program"*.

---

### 3. Halaman Layanan Utama (Services Index)
*   **Path:** `/service`
*   **Tujuan:** Direktori utama yang merinci seluruh ekosistem layanan yang ditawarkan secara interaktif.
*   **Struktur Isi:**
    *   **Bento Grid Layanan:** Penjelasan singkat 5 layanan utama lengkap dengan checkbox fitur dan link detail.
    *   **Mengapa Bermitra Dengan Kami:** Customizable & Fleksibel, Berorientasi Praktik, Dukungan Transformasi Digital.
    *   **CTA Section:** Tombol *"Mulai Konsultasi Gratis"* & *"Lihat Katalog Program"*.

---

### 4. Halaman Program (Products & Services Catalog)
*   **Path:** `/program`
*   **Tujuan:** Menampilkan daftar katalog program dan solusi terpadu yang siap dipilih oleh klien.
*   **Struktur Isi:**
    *   **Hero Section:** Judul *"Produk dan Jasa Unggulan"*, menjelaskan rangkaian solusi teknologi dan edukasi terpadu.
    *   **Katalog 8 Program Unggulan:**
        1.  *Corporate Training Program*
        2.  *In-House Training*
        3.  *Public Training*
        4.  *Digital Skill Development*
        5.  *Management & Business Consulting*
        6.  *Website & Application Development*
        7.  *Professional Event Organizer*
        8.  *Certification Preparation Program*
    *   **Interaksi:** Setiap kartu program memiliki ikon dan deskripsi ringkas yang representatif.

---

### 5. Halaman Portofolio
*   **Path:** `/portofolio`
*   **Tujuan:** Menampilkan bukti hasil kerja nyata (case studies) dan data keberhasilan pelatihan/proyek yang telah diselesaikan.
*   **Struktur Isi:**
    *   **Filter Kategori:** Pengunjung dapat memfilter portofolio berdasarkan kategori: *Semua*, *Pelatihan & Seminar*, *Proyek Digital*, *Sertifikasi*.
    *   **Galeri Proyek Terkini:**
        1.  *Future Leadership Forum 2024* (Seminar - Jakarta, Mei 2024)
        2.  *Quantum IT Analytics Hub* (Dashboard Analytics - April 2024)
        3.  *Synergy Strategy Workshop* (Workshop - Bandung, Maret 2024)
        4.  *Pelatihan Digital Transformation & Uji Kompetensi* (Program Unggulan Sertifikasi BNSP)
    *   **Statistik Keberhasilan (Stats Counter):**
        *   **150+** Pelatihan Selesai
        *   **25k+** Peserta Terdaftar
        *   **45+** Mitra Strategis
        *   **98%** Kepuasan Klien

---

### 6. Halaman Kontak (Hubungi Kami)
*   **Path:** `/contact`
*   **Tujuan:** Media komunikasi interaktif bagi calon klien untuk mengajukan penawaran atau berkonsultasi.
*   **Struktur Isi:**
    *   **Hero Section:** Menyambut calon klien dengan latar belakang korporat profesional.
    *   **Informasi Kontak & Legalitas:** Alamat kantor fisik (Bandung), Email, Website, serta legalitas perusahaan (NIB & NPWP).
    *   **Formulir Konsultasi Interaktif:**
        *   Input fields: *Nama Lengkap, Email, Nomor Telepon/WhatsApp, Pilihan Layanan (Dropdown), Pesan/Detail Kebutuhan*.
        *   Disertai state sukses pengiriman form.
    *   **Lokasi (Map Section):** Gambar representasi peta lokasi kantor pusat di Bandung.

---

### 7. Halaman Layanan Spesifik (Sub-Pages)

#### A. Training & Professional Development
*   **Path:** `/service/training`
*   **Isi:**
    *   *Metode Pelatihan:* Public, In-House, Online, Hybrid, Customized.
    *   *10 Kategori Pelatihan:* IT & Digital Transformation, Cybersecurity & Network, AI & Digital Tools, Data Analytics & BI, Project/Business Management, Leadership & Team Dev, Sales/Marketing/Customer Service, Quality/HSE & Compliance, Industrial/Engineering, Office Productivity.
    *   *Contoh Modul Training Terpopuler:* AI for Corporate Productivity, Data Analyst for Business, Cybersecurity Awareness, Power BI.

#### B. Management Consulting
*   **Path:** `/service/management`
*   **Isi:**
    *   Fokus pada peningkatan tata kelola dan efektivitas bisnis.
    *   *Area Konsultasi:* Pengembangan organisasi, Training Need Analysis (TNA), SOP & Alur Kerja, Manajemen Proyek, Transformasi Digital, Assessment & Improvement.

#### C. IT Solution & Software Development
*   **Path:** `/service/it-solution`
*   **Isi:**
    *   Fokus pada perancangan infrastruktur sistem digital kustom.
    *   *Jenis Layanan:* Web Company Profile, Landing Page Promosi, Sistem Informasi Berbasis Web, Aplikasi Internal Perusahaan, Dashboard Reporting/Data Visualization, Digitalisasi Administrasi, Maintenance & Technical Support.

#### D. Software & Digital Product Provider
*   **Path:** `/service/software-provider`
*   **Isi:**
    *   Fokus penyediaan produk digital siap pakai (out-of-the-box) atau disesuaikan.
    *   *Kategori Produk:* Software Edukasi & Produktivitas, Software Pendukung Pelatihan, Tools Operasional Perusahaan, Template Administrasi/Laporan, Sistem Web Internal Kustom.

#### E. Event, Workshop & MICE
*   **Path:** `/service/event-mice`
*   **Isi:**
    *   Layanan penyelenggaraan event profesional end-to-end.
    *   *Jenis Event:* Seminar & Workshop, Uji Kompetensi & Sertifikasi, Gathering Edukatif & Outbound, Manajemen Acara Lengkap (MC, trainer, rundown, dokumentasi, administrasi sertifikat).

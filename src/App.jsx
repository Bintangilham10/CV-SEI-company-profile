import React, { useState } from "react";
import {
    Phone, Mail, MapPin, Clock, Menu, X, CheckCircle2, ArrowRight,
    Building2, GraduationCap, Users2, Award, TrendingUp, Sparkles,
    Presentation, Laptop2, PackageOpen, PartyPopper,
    Code2, ClipboardList,
    Search, FileText, Rocket, Send, MonitorSmartphone, Globe2, Handshake,
    Target, Eye, ShieldCheck, Lightbulb, Zap, HeartHandshake,
    Briefcase, GanttChartSquare, BarChart3, Settings, CalendarDays,
    BadgeCheck, Linkedin, Youtube, Instagram
} from "lucide-react";

// Custom TikTok icon matching Lucide stroke style
const Tiktok = ({ size = 14, ...props }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
);

/* ---------------------------------------------------------
   DESIGN TOKENS
   Navy      : #0E2A54  (primary)
   Navy-700  : #163B72
   Gold      : #E4A93A  (accent)
   Cream bg  : #F6F7FA
 --------------------------------------------------------- */

const NAV_LINKS = [
    { label: "Beranda", href: "#beranda" },
    { label: "Tentang Kami", href: "#tentang" },
    { label: "Layanan", href: "#layanan" },
    { label: "Program", href: "#produk" },
    { label: "Kontak", href: "#kontak" },
];

const STATS = [
    { icon: BadgeCheck, value: "NIB", label: "2205260161665" },
    { icon: PackageOpen, value: "5", label: "Pilar Layanan Utama" },
    { icon: Users2, value: "5+", label: "KBLI Bidang Usaha" },
    { icon: TrendingUp, value: "100%", label: "Komitmen Kualitas" },
];

const LEGAL_DATA = [
    ["Nama Perusahaan", "CV Solusi Edukasi Indonesia"],
    ["Bentuk Badan Usaha", "Persekutuan Komanditer (CV)"],
    ["NIB", "2205260161665"],
    ["NPWP", "1000000009726986"],
    ["Status Modal", "PMDN – Usaha Mikro"],
    ["Alamat", "Jl. Saluyu XII A No. 42, Cipamokolan, Rancasari, Kota Bandung, Jawa Barat 40232"],
    ["Telepon / WA", "081906667944"],
    ["Email", "solusiedukasiindonesia@gmail.com"],
];

const KBLI = [
    { code: "70209", title: "Aktivitas Konsultasi Manajemen Lainnya" },
    { code: "62019", title: "Aktivitas Pemrograman Komputer Lainnya" },
    { code: "47413", title: "Perdagangan Eceran Piranti Lunak / Software" },
    { code: "62090", title: "Aktivitas Teknologi Informasi & Jasa Komputer Lainnya" },
    { code: "82301", title: "Jasa Penyelenggara Pertemuan, Perjalanan Insentif, Konferensi & Pameran (MICE)" },
];

const CORE_VALUES = [
    { letter: "P", title: "Professional", desc: "Mengutamakan kualitas, tanggung jawab, dan standar kerja yang baik dalam setiap layanan." },
    { letter: "A", title: "Adaptive", desc: "Mampu menyesuaikan solusi dengan kebutuhan dan karakteristik unik setiap klien." },
    { letter: "C", title: "Collaborative", desc: "Membangun kerja sama terbuka, aktif, dan saling mendukung dengan seluruh mitra." },
    { letter: "I", title: "Innovative", desc: "Mendorong pemanfaatan teknologi, metode baru, dan pendekatan kreatif dalam solusi." },
    { letter: "I", title: "Impactful", desc: "Berfokus pada hasil nyata yang dapat dirasakan oleh peserta, organisasi, dan mitra kerja." },
];

const MISSIONS = [
    "Menyediakan program pelatihan dan pengembangan kompetensi yang aplikatif, relevan, dan sesuai kebutuhan industri.",
    "Memberikan layanan konsultasi manajemen untuk membantu organisasi meningkatkan efektivitas, tata kelola, dan performa bisnis.",
    "Mengembangkan solusi teknologi informasi dan software yang mendukung efisiensi kerja, digitalisasi proses, dan pengambilan keputusan.",
    "Menyelenggarakan kegiatan profesional seperti seminar, workshop, konferensi, dan program korporat secara terstruktur dan berkualitas.",
    "Membangun kolaborasi berkelanjutan dengan perusahaan, instansi, lembaga pendidikan, komunitas profesional, dan mitra strategis lainnya.",
];

const PILLARS = [
    {
        icon: Presentation,
        title: "Training & Professional Development",
        points: [
            "IT & Digital Transformation",
            "Leadership, Communication & Team Development",
            "Data Analytics & Business Intelligence",
            "Cybersecurity Awareness",
            "Public, In-House & Hybrid Training",
        ],
        cta: "Pelajari Lebih Lanjut",
        highlight: true,
    },
    {
        icon: ClipboardList,
        title: "Management Consulting",
        points: [
            "Training Need Analysis (TNA)",
            "Konsultasi Pengembangan Organisasi",
            "Penyusunan SOP & Alur Kerja",
            "Konsultasi Transformasi Digital",
            "Assessment & Rekomendasi Improvement",
        ],
        cta: "Pelajari Lebih Lanjut",
    },
    {
        icon: Laptop2,
        title: "IT Solution & Software Development",
        points: [
            "Pengembangan Website & Landing Page",
            "Sistem Informasi Berbasis Web",
            "Dashboard Reporting & Data Visualization",
            "Digitalisasi Proses Administrasi",
            "Maintenance Website & Aplikasi",
        ],
        cta: "Pelajari Lebih Lanjut",
        highlight: true,
    },
    {
        icon: Code2,
        title: "Software & Digital Product Provider",
        points: [
            "Software Edukasi & Produktivitas Kerja",
            "Tools Digital untuk Operasional",
            "Template Digital Administrasi & Pelatihan",
            "Sistem Berbasis Web Internal Perusahaan",
            "Solusi Perangkat Lunak Sesuai Kebutuhan",
        ],
        cta: "Pelajari Lebih Lanjut",
    },
    {
        icon: PartyPopper,
        title: "Event, Workshop, Conference & MICE",
        points: [
            "Seminar, Workshop & Konferensi",
            "Webinar & Talkshow Profesional",
            "Gathering Edukatif & Leadership Camp",
            "Sertifikasi & Uji Kompetensi",
            "Narasumber, Trainer, MC & Dokumentasi",
        ],
        cta: "Pelajari Lebih Lanjut",
        highlight: true,
    },
];

const CATEGORIES = ["Semua", "Training", "Konsultasi", "Teknologi", "Event"];

const PRODUCTS = [
    { tag: "Training", title: "Artificial Intelligence for Corporate Productivity", desc: "Pelatihan pemanfaatan AI untuk meningkatkan efisiensi kerja tim di berbagai lini bisnis.", bgImage: "/meeting.jpg" },
    { tag: "Teknologi", title: "Data Analyst for Business & Industry", desc: "Program penguasaan analitik data guna mendukung pengambilan keputusan berbasis data.", bgImage: "/meeting.jpg" },
    { tag: "Teknologi", title: "Cybersecurity Awareness & Network Infrastructure", desc: "Membangun kesadaran keamanan siber dan penguatan infrastruktur jaringan organisasi.", bgImage: "/meeting.jpg" },
    { tag: "Training", title: "Leadership for High Performance Team", desc: "Mengembangkan kapasitas kepemimpinan untuk membentuk tim kerja yang berkinerja tinggi.", bgImage: "/meeting.jpg" },
    { tag: "Konsultasi", title: "Management & Business Consulting", desc: "Layanan konsultasi untuk menyusun strategi pengembangan SDM, SOP, dan peningkatan performa organisasi.", bgImage: "/meeting.jpg" },
    { tag: "Teknologi", title: "Web Programming & Application Development", desc: "Pengembangan website, landing page, dan sistem informasi sesuai kebutuhan spesifik organisasi Anda.", bgImage: "/meeting.jpg" },
    { tag: "Training", title: "Digital Skill Development", desc: "Program pengembangan kemampuan digital seperti AI tools, digital marketing, IT support, dan office productivity.", bgImage: "/meeting.jpg" },
    { tag: "Event", title: "Professional Event Organizer", desc: "Penyelenggaraan seminar, workshop, konferensi, webinar, dan program pengembangan tim secara profesional.", bgImage: "/meeting.jpg" },
    { tag: "Training", title: "Certification Preparation Program", desc: "Program persiapan sertifikasi: materi, struktur ujian, studi kasus, dan kompetensi sebelum mengikuti uji sertifikasi.", bgImage: "/meeting.jpg" },
    { tag: "Training", title: "In-House Training Corporate", desc: "Pelatihan khusus untuk perusahaan dengan materi, jadwal, lokasi, dan studi kasus disesuaikan kebutuhan internal klien.", bgImage: "/meeting.jpg" },
    { tag: "Konsultasi", title: "Training Need Analysis (TNA)", desc: "Pemetaan kebutuhan pelatihan organisasi secara sistematis untuk merancang program yang tepat sasaran.", bgImage: "/meeting.jpg" },
    { tag: "Teknologi", title: "IT Governance & Risk Management", desc: "Pelatihan dan konsultasi tata kelola TI dan manajemen risiko sesuai standar industri.", bgImage: "/meeting.jpg" },
];

const STEPS = [
    { icon: Search, title: "Identifikasi Kebutuhan", desc: "Diskusi kebutuhan, tujuan, target peserta, tantangan, dan output yang diharapkan bersama klien." },
    { icon: FileText, title: "Penyusunan Solusi", desc: "Rekomendasi program, materi, metode, durasi, jadwal, dan kebutuhan pendukung yang sesuai." },
    { icon: Rocket, title: "Pelaksanaan Program", desc: "Eksekusi oleh trainer, konsultan, atau tim teknis sesuai ruang lingkup pekerjaan yang disepakati." },
    { icon: BarChart3, title: "Evaluasi & Continuous Improvement", desc: "Pengukuran efektivitas program, dokumentasi kegiatan, dan rekomendasi pengembangan berkelanjutan." },
];

const METHODS = [
    { icon: Building2, title: "Offline / Tatap Muka", desc: "Pelaksanaan langsung di lokasi klien, venue, hotel, ruang training, kampus, atau kantor penyelenggara.", bgImage: "/offline.jpg" },
    { icon: MonitorSmartphone, title: "Online / Webinar", desc: "Melalui platform virtual meeting dengan materi digital dan diskusi interaktif yang fleksibel.", bgImage: "/online.jpg" },
    { icon: Globe2, title: "Hybrid", desc: "Gabungan offline dan online untuk menjangkau peserta dari berbagai lokasi sekaligus.", bgImage: "/hybrid.jpg" },
];

const AUDIENCE = [
    { icon: Building2, title: "Perusahaan & BUMN", desc: "Perusahaan swasta, BUMN, anak perusahaan, dan instansi pemerintah yang membutuhkan pengembangan SDM dan transformasi digital." },
    { icon: GraduationCap, title: "Lembaga Pendidikan", desc: "Kampus, sekolah vokasi, lembaga pelatihan, dan komunitas profesional yang ingin meningkatkan kualitas program." },
    { icon: Handshake, title: "UMKM & Startup", desc: "Pelaku usaha kecil-menengah, startup, organisasi nonprofit, dan individu profesional yang ingin naik kelas." },
    { icon: Briefcase, title: "Industri Teknologi & Manufaktur", desc: "Industri TI, manufaktur, pertambangan, energi, telekomunikasi, keuangan, dan perbankan." },
];

const ADVANTAGES = [
    { icon: GanttChartSquare, title: "Fleksibel & Customizable", desc: "Program dirancang sesuai kebutuhan, tujuan bisnis, level peserta, dan sektor industri masing-masing klien.", highlight: true, },
    { icon: Target, title: "Berorientasi Praktik", desc: "Bukan hanya teori—setiap program dirancang dengan studi kasus nyata dan implementasi langsung." },
    { icon: Users2, title: "Trainer & Konsultan Berpengalaman", desc: "Dapat menghadirkan trainer, konsultan, dan praktisi sesuai bidang keahlian yang dibutuhkan.", highlight: true, },
    { icon: Laptop2, title: "Dukungan Transformasi Digital", desc: "Mendukung digitalisasi melalui website, aplikasi, software, dan dashboard pelaporan terintegrasi." },
    { icon: ShieldCheck, title: "Legalitas Jelas", desc: "Beroperasi dengan NIB resmi melalui sistem OSS Pemerintah Republik Indonesia.", highlight: true, },
    { icon: Sparkles, title: "Layanan Terintegrasi", desc: "Pelatihan, konsultasi, teknologi, software, dan event dalam satu ekosistem layanan yang terpadu." },
];

function SectionEyebrow({ children }) {
    return (
        <p className="text-center text-xs font-bold tracking-[0.2em] text-amber-600 uppercase mb-3">
            {children}
        </p>
    );
}

export default function SEIWebsite() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [layananOpen, setLayananOpen] = useState(false);
    const [activeCat, setActiveCat] = useState("Semua");
    const [form, setForm] = useState({ nama: "", email: "", telp: "", instansi: "", pesan: "" });

    const filteredProducts =
        activeCat === "Semua" ? PRODUCTS : PRODUCTS.filter((p) => p.tag === activeCat);

    const handleWhatsApp = (e) => {
        e.preventDefault();
        const text = `Halo CV SEI, saya ${form.nama || "-"} dari ${form.instansi || "-"}.%0ATelepon: ${form.telp || "-"}%0AEmail: ${form.email || "-"}%0APesan: ${form.pesan || "-"}`;
        window.open(`https://wa.me/6281906667944?text=${text}`, "_blank");
    };

    return (
        <div className="min-h-screen bg-white text-slate-800 font-sans">
            {/* NAVBAR */}
            <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-100 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-lg bg-[url('/sei1.jpeg')] bg-cover bg-center bg-[#0E2A54]"></div>
                        <div className="leading-tight">
                            <p className="font-extrabold text-[#0E2A54] text-sm">CV SOLUSI EDUKASI</p>
                            <p className="text-[10px] tracking-widest text-amber-600 font-semibold">INDONESIA</p>
                        </div>
                    </div>
                    <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
                        {NAV_LINKS.map((l) =>
                            l.label === "Layanan" ? (
                                <div key={l.label} className="relative group">
                                    <button className="hover:text-[#0E2A54] transition-colors inline-flex items-center gap-1">
                                        {l.label}
                                        <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    {/* Dropdown */}
                                    <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                        <div className="w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
                                            {[
                                                { label: "Training & Professional Development", icon: Presentation, file: "/brosur-training.pdf" },
                                                { label: "Management Consulting", icon: ClipboardList, file: "/brosur-consulting.pdf" },
                                                { label: "IT Solution & Software Development", icon: Laptop2, file: "/brosur-itsolution.pdf" },
                                                { label: "Software & Digital Product Provider", icon: Code2, file: "/brosur-software.pdf" },
                                                { label: "Event, Workshop, Conference & MICE", icon: PartyPopper, file: "/brosur-event.pdf" },
                                            ].map(({ label, icon: Icon, file }) => (
                                                <a
                                                    key={label}
                                                    href={file}
                                                    download
                                                    className="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 hover:bg-amber-50 hover:text-[#0E2A54] transition-colors group/item"
                                                >
                                                    <div className="w-8 h-8 rounded-lg bg-amber-50 group-hover/item:bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 transition-colors">
                                                        <Icon size={15} />
                                                    </div>
                                                    <span className="font-medium leading-tight flex-1">{label}</span>
                                                    <svg className="w-4 h-4 text-slate-300 group-hover/item:text-amber-500 shrink-0 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
                                                    </svg>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <a key={l.label} href={l.href} className="hover:text-[#0E2A54] transition-colors">{l.label}</a>
                            )
                        )}
                    </nav>
                    <a href="#kontak" className="hidden lg:inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-600 text-[#0E2A54] font-bold text-sm px-5 py-2.5 rounded-full transition-colors">
                        Konsultasi Gratis
                    </a>
                    <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X /> : <Menu />}
                    </button>
                </div>
                {menuOpen && (
                    <div className="lg:hidden border-t border-slate-100 px-6 py-4 flex flex-col gap-4 text-sm font-medium">
                        {NAV_LINKS.map((l) => <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>)}
                        <a href="#kontak" onClick={() => setMenuOpen(false)} className="bg-amber-500 text-[#0E2A54] font-bold text-center py-2.5 rounded-full">Konsultasi Gratis</a>
                    </div>
                )}
            </header>

            {/* HERO */}
            <section id="beranda" className="relative bg-[#0E2A54] overflow-hidden">
                <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-amber-500/10" />
                <div className="absolute -left-24 bottom-0 w-72 h-72 rounded-full bg-amber-500/10" />
                <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center relative">
                    <div>
                        <span className="inline-flex items-center gap-2 bg-white/10 text-amber-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
                            <Sparkles size={14} /> Education | Training | Consulting | IT Solution | MICE
                        </span>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
                            Solusi Edukasi &amp; Transformasi Digital
                        </h1>
                        <p className="text-amber-300 font-semibold text-lg mb-4 italic">
                            "Empowering People, Transforming Organizations"
                        </p>
                        <p className="text-slate-300 text-base leading-relaxed mb-8 max-w-xl">
                            CV Solusi Edukasi Indonesia hadir mendampingi perusahaan, instansi, lembaga pendidikan,
                            dan organisasi dalam meningkatkan kapasitas SDM serta mempercepat transformasi digital
                            melalui pelatihan, konsultasi manajemen, IT solution, software, dan penyelenggaraan event profesional.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="#kontak" className="bg-amber-500 hover:bg-amber-600 text-[#0E2A54] font-bold px-6 py-3 rounded-full inline-flex items-center gap-2 transition-colors">
                                Konsultasi Gratis <ArrowRight size={16} />
                            </a>
                            <a href="#layanan" className="border border-white/30 hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-full transition-colors">
                                Lihat Layanan
                            </a>
                        </div>
                    </div>
                    <div className="hidden lg:grid grid-cols-2 gap-4">
                        <div className="rounded-4xl bg-[url('/meeting.jpg')] bg-cover bg-no-repeat bg-center w-150 h-150"></div>
                        {/* <div className="rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 h-44 flex items-center justify-center shadow-xl">
                            <Presentation className="text-white" size={52} />
                        </div>
                        <div className="rounded-2xl bg-white/10 border border-white/20 h-56 mt-8 flex items-center justify-center">
                            <Users2 className="text-amber-400" size={52} />
                        </div>
                        <div className="rounded-2xl bg-white/10 border border-white/20 h-56 -mt-8 flex items-center justify-center">
                            <Laptop2 className="text-amber-400" size={52} />
                        </div>
                        <div className="rounded-2xl bg-gradient-to-br from-[#163B72] to-[#0E2A54] border border-white/20 h-44 flex items-center justify-center shadow-xl">
                            <GraduationCap className="text-amber-400" size={52} />
                        </div> */}
                    </div>
                </div>

                {/* STATS BAR */}
                <div className="bg-[#0A2043] border-t border-white/10">
                    <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
                        {STATS.map(({ icon: Icon, value, label }) => (
                            <div key={label} className="flex items-center gap-3">
                                <div className="w-11 h-11 rounded-xl bg-amber-500/15 flex items-center justify-center text-amber-400 shrink-0">
                                    <Icon size={20} />
                                </div>
                                <div>
                                    <p className="text-lg font-extrabold text-white leading-none">{value}</p>
                                    <p className="text-[11px] text-slate-400 mt-1">{label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TENTANG KAMI */}
            <section id="tentang" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionEyebrow>Profil Perusahaan</SectionEyebrow>
                    <h2 className="text-3xl font-extrabold text-[#0E2A54] text-center mb-4">
                        Tentang CV Solusi Edukasi Indonesia
                    </h2>
                    <p className="text-center text-slate-500 max-w-3xl mx-auto mb-12">
                        Perusahaan yang berfokus pada penyediaan solusi edukasi, pelatihan, konsultasi manajemen,
                        teknologi informasi, penyediaan software, serta penyelenggaraan kegiatan profesional.
                        Kami membantu organisasi dan individu meningkatkan kompetensi, efektivitas kerja,
                        transformasi digital, dan kesiapan menghadapi perkembangan dunia kerja modern.
                    </p>
                    <div className="grid lg:grid-cols-2 gap-10 items-start">
                        {/* LEFT: About Text + KBLI */}
                        <div className="space-y-6">
                            <div className="bg-[#F6F7FA] rounded-2xl p-6">
                                <h3 className="font-bold text-[#0E2A54] text-lg mb-3 flex items-center gap-2">
                                    <Building2 size={18} className="text-amber-500" /> Tentang Perusahaan
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-3">
                                    CV Solusi Edukasi Indonesia berdiri dengan semangat mendukung peningkatan kualitas
                                    sumber daya manusia, pengembangan organisasi, serta pemanfaatan teknologi informasi
                                    bagi kebutuhan bisnis dan pendidikan.
                                </p>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Kami tidak hanya menawarkan program umum, tetapi juga mampu menyusun program khusus
                                    berdasarkan tujuan, tantangan, level peserta, sektor industri, dan output yang diharapkan.
                                    Dengan pendekatan ini, layanan kami menjadi lebih relevan, aplikatif, dan berdampak langsung.
                                </p>
                            </div>
                            <div className="bg-[#F6F7FA] rounded-2xl p-6">
                                <h3 className="font-bold text-[#0E2A54] text-lg mb-4 flex items-center gap-2">
                                    <FileText size={18} className="text-amber-500" /> Bidang Usaha (KBLI)
                                </h3>
                                <div className="space-y-3">
                                    {KBLI.map((k) => (
                                        <div key={k.code} className="flex gap-3 items-start">
                                            <span className="shrink-0 text-xs font-bold bg-[#0E2A54] text-amber-400 px-2 py-1 rounded-lg">{k.code}</span>
                                            <p className="text-sm text-slate-600">{k.title}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* RIGHT: Legal Data */}
                        <div className="rounded-2xl bg-[#0E2A54] text-white p-8 shadow-xl">
                            <h3 className="font-bold text-lg mb-6 flex items-center gap-2 text-amber-400">
                                <ShieldCheck size={18} /> Legalitas &amp; Identitas Perusahaan
                            </h3>
                            <dl className="space-y-4 text-sm">
                                {LEGAL_DATA.map(([k, v]) => (
                                    <div key={k} className="grid grid-cols-5 gap-3 border-b border-white/10 pb-3 last:border-0">
                                        <dt className="col-span-2 text-slate-400 text-xs">{k}</dt>
                                        <dd className="col-span-3 font-medium text-xs">{v}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </section>

            {/* PURPOSE, VISION, MISSION & VALUES */}
            <section className="py-20 bg-[#F6F7FA]">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionEyebrow>Fondasi Perusahaan</SectionEyebrow>
                    <h2 className="text-3xl font-extrabold text-[#0E2A54] text-center mb-12">
                        Purpose, Vision, Mission &amp; <span className="text-amber-500">Values</span>
                    </h2>

                    {/* Purpose + Vision */}
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                                    <Target size={20} />
                                </div>
                                <h3 className="font-bold text-[#0E2A54] text-lg">Purpose</h3>
                            </div>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Membantu organisasi dan individu meningkatkan kualitas kompetensi, produktivitas,
                                dan kesiapan menghadapi perubahan melalui solusi edukasi, konsultasi, dan teknologi
                                yang relevan dengan kebutuhan industri.
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                                    <Eye size={20} />
                                </div>
                                <h3 className="font-bold text-[#0E2A54] text-lg">Vision</h3>
                            </div>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Menjadi mitra terpercaya dalam pengembangan sumber daya manusia, konsultasi manajemen,
                                dan solusi teknologi informasi yang profesional, inovatif, dan berdampak bagi
                                kemajuan organisasi di Indonesia.
                            </p>
                        </div>
                    </div>

                    {/* Mission */}
                    <div className="bg-[#0E2A54] rounded-2xl p-8 shadow-sm border border-slate-100 mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                                <Rocket size={20} />
                            </div>
                            <h3 className="font-bold text-white text-lg">Mission</h3>
                        </div>
                        <ul className="grid md:grid-cols-2 gap-3">
                            {MISSIONS.map((m, i) => (
                                <li key={i} className="flex gap-3 text-sm text-white">
                                    <CheckCircle2 size={16} className="text-amber-500 shrink-0 mt-0.5" />
                                    {m}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Core Values */}
                    <h3 className="text-center font-bold text-[#0E2A54] text-xl mb-8">
                        Core Values <span className="text-slate-400 font-medium text-base">(Nilai-Nilai Perusahaan)</span>
                    </h3>
                    <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-5">
                        {CORE_VALUES.map((v) => (
                            <div key={v.title} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-slate-100">
                                <div className="w-14 h-14 mx-auto rounded-full bg-[#0E2A54] text-amber-400 font-black text-xl flex items-center justify-center mb-4">
                                    {v.letter}
                                </div>
                                <h4 className="font-bold text-[#0E2A54] mb-2 text-sm">{v.title}</h4>
                                <p className="text-xs text-slate-500 leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* LAYANAN UTAMA */}
            <section id="layanan" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionEyebrow>Layanan Kami</SectionEyebrow>
                    <h2 className="text-3xl font-extrabold text-[#0E2A54] text-center mb-3">
                        5 Pilar Layanan Utama <span className="text-amber-500">CV SEI</span>
                    </h2>
                    <p className="text-center text-slate-500 max-w-2xl mx-auto mb-12">
                        Lima area layanan terintegrasi yang dirancang untuk menjawab kebutuhan pengembangan
                        organisasi secara menyeluruh — dari SDM hingga transformasi digital.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {PILLARS.map(({ icon: Icon, title, points, cta, highlight }) => (
                            <div
                                key={title}
                                className={`rounded-2xl p-7 border shadow-sm flex flex-col ${highlight
                                    ? "bg-[#0E2A54] border-[#0E2A54] text-white"
                                    : "bg-white border-slate-100"}`}
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${highlight
                                    ? "bg-amber-500 text-[#0E2A54]"
                                    : "bg-amber-50 text-amber-600"}`}>
                                    <Icon size={22} />
                                </div>
                                <h3 className={`font-bold text-lg mb-4 ${highlight ? "text-white" : "text-[#0E2A54]"}`}>{title}</h3>
                                <ul className={`space-y-2 text-sm mb-6 flex-1 ${highlight ? "text-slate-300" : "text-slate-600"}`}>
                                    {points.map((p) => (
                                        <li key={p} className="flex gap-2">
                                            <CheckCircle2 size={15} className={`shrink-0 mt-0.5 ${highlight ? "text-amber-400" : "text-amber-500"}`} />
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                                <button className={`text-sm font-semibold inline-flex items-center gap-1.5 self-start px-4 py-2 rounded-full transition-colors ${highlight
                                    ? "bg-amber-500 text-[#0E2A54] hover:bg-amber-400"
                                    : "bg-[#0E2A54] text-white hover:bg-[#163B72]"}`}>
                                    {cta} <ArrowRight size={14} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* KEUNGGULAN */}
            <section className="py-20 bg-[#F6F7FA]">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionEyebrow>Mengapa Kami</SectionEyebrow>
                    <h2 className="text-3xl font-extrabold text-[#0E2A54] text-center mb-3">
                        Keunggulan <span className="text-amber-500">CV SEI</span>
                    </h2>
                    <p className="text-center text-slate-500 max-w-2xl mx-auto mb-12">
                        Kami tidak hanya menyediakan layanan — kami menjadi mitra strategis yang berkomitmen
                        pada dampak nyata bagi pertumbuhan organisasi Anda.
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {ADVANTAGES.map(({ icon: Icon, title, desc, highlight }) => (
                            <div
                                key={title}
                                className={`rounded-2xl p-6 shadow-sm border flex gap-4 transition-all duration-300 hover:scale-[1.02] ${highlight
                                    ? "bg-[#0E2A54] border-[#0E2A54] text-white shadow-lg shadow-[#0E2A54]/15"
                                    : "bg-white border-slate-100 text-slate-800"
                                    }`}
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${highlight
                                    ? "bg-amber-400 text-[#0E2A54]"
                                    : "bg-amber-50 text-amber-600"
                                    }`}>
                                    <Icon size={22} />
                                </div>
                                <div>
                                    <h4 className={`font-bold mb-1 text-sm ${highlight ? "text-white" : "text-[#0E2A54]"}`}>
                                        {title}
                                    </h4>
                                    <p className={`text-xs leading-relaxed ${highlight ? "text-slate-300" : "text-slate-500"}`}>
                                        {desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PRODUK & PROGRAM */}
            <section id="produk" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionEyebrow>Katalog Program</SectionEyebrow>
                    <h2 className="text-3xl font-extrabold text-[#0E2A54] text-center mb-3">
                        Produk &amp; Program <span className="text-amber-500">Unggulan</span>
                    </h2>
                    <p className="text-center text-slate-500 max-w-2xl mx-auto mb-10">
                        Program unggulan yang dapat disesuaikan dengan kebutuhan spesifik organisasi Anda.
                        Semua dapat diselenggarakan secara offline, online, maupun hybrid.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        {CATEGORIES.map((c) => (
                            <button
                                key={c}
                                onClick={() => setActiveCat(c)}
                                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${activeCat === c
                                    ? "bg-[#0E2A54] text-white"
                                    : "bg-white text-slate-600 border border-slate-200 hover:border-[#0E2A54]"}`}
                            >
                                {c}
                            </button>
                        ))}
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProducts.map((p) => (
                            <div
                                key={p.title}
                                className="relative rounded-2xl p-6 shadow-md flex flex-col justify-end overflow-hidden min-h-[280px] bg-cover bg-center transition-all duration-300 hover:scale-[1.03] hover:shadow-xl group"
                                style={{
                                    backgroundImage: `linear-gradient(to bottom, rgba(14, 42, 84, 0.4), rgba(14, 42, 84, 0.95)), url('${p.bgImage || '/meeting.jpg'}')`
                                }}
                            >
                                <span className="absolute top-4 left-4 text-[10px] font-extrabold tracking-wider uppercase text-[#0E2A54] bg-amber-400 px-3 py-1 rounded-full shadow-sm">
                                    {p.tag}
                                </span>
                                <div className="mt-12">
                                    <h3 className="font-extrabold text-white text-lg mb-2 leading-snug group-hover:text-amber-300 transition-colors">
                                        {p.title}
                                    </h3>
                                    <p className="text-xs text-slate-200 leading-relaxed mb-4 line-clamp-3">
                                        {p.desc}
                                    </p>
                                    <a
                                        href="#kontak"
                                        className="text-xs font-bold text-amber-400 inline-flex items-center gap-1 hover:text-amber-300 transition-colors"
                                    >
                                        Lihat Detail <ArrowRight size={12} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ALUR KERJA */}
            <section className="py-20 bg-[#F6F7FA]">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionEyebrow>Cara Kerja</SectionEyebrow>
                    <h2 className="text-3xl font-extrabold text-[#0E2A54] text-center mb-3">
                        Alur Kerja <span className="text-amber-500">Layanan Kami</span>
                    </h2>
                    <p className="text-center text-slate-500 max-w-2xl mx-auto mb-14">
                        Empat tahapan sistematis untuk memastikan setiap program berjalan tepat sasaran
                        dan memberikan dampak nyata bagi organisasi Anda.
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 relative">
                        {STEPS.map(({ icon: Icon, title, desc }, i) => (
                            <div key={title} className="text-center relative">
                                <div className="w-16 h-16 mx-auto rounded-full bg-[#0E2A54] text-amber-400 flex items-center justify-center mb-5 relative z-10">
                                    <Icon size={26} />
                                </div>
                                <span className="absolute top-[-18px] left-1/2 -translate-x-1/2 -translate-y-2 text-xs font-black text-amber-500 bg-[#F6F7FA] px-1">
                                    0{i + 1}
                                </span>
                                <h4 className="font-bold text-[#0E2A54] mb-2">{title}</h4>
                                <p className="text-xs text-slate-500 leading-relaxed px-2">{desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                        <h3 className="text-center font-bold text-[#0E2A54] mb-8">Pilihan Metode Pelaksanaan Terpadu</h3>
                        <div className="grid sm:grid-cols-3 gap-6">
                            {METHODS.map(({ icon: Icon, title, desc, bgImage }) => (
                                <div
                                    key={title}
                                    className="relative rounded-2xl p-6 shadow-md flex flex-col justify-end overflow-hidden min-h-[250px] bg-cover bg-center text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-xl group"
                                    style={{
                                        backgroundImage: `linear-gradient(to bottom, rgba(14, 42, 84, 0.3), rgba(14, 42, 84, 0.9)), url('${bgImage || '/meeting.jpg'}')`
                                    }}
                                >
                                    <div className="w-12 h-12 rounded-xl bg-amber-400 text-[#0E2A54] flex items-center justify-center mb-4 shrink-0 shadow-sm">
                                        <Icon size={22} />
                                    </div>
                                    <div className="z-10 text-left">
                                        <h4 className="font-bold text-white text-base mb-1.5 group-hover:text-amber-300 transition-colors">{title}</h4>
                                        <p className="text-xs text-slate-200 leading-relaxed">{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SEGMENTASI KLIEN */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionEyebrow>Target Klien</SectionEyebrow>
                    <h2 className="text-3xl font-extrabold text-[#0E2A54] text-center mb-3">
                        Siapa yang <span className="text-amber-500">Kami Layani?</span>
                    </h2>
                    <p className="text-center text-slate-500 max-w-2xl mx-auto mb-12">
                        Program kami dirancang fleksibel untuk berbagai jenis organisasi, sektor industri, dan kebutuhan.
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {AUDIENCE.map(({ icon: Icon, title, desc }) => (
                            <div key={title} className="bg-[#F6F7FA] rounded-2xl p-7 text-center border border-slate-100">
                                <div className="w-14 h-14 mx-auto rounded-full bg-[#0E2A54] text-amber-400 flex items-center justify-center mb-5">
                                    <Icon size={24} />
                                </div>
                                <h4 className="font-bold text-[#0E2A54] mb-2 text-sm">{title}</h4>
                                <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* KONTAK */}
            <section id="kontak" className="py-20 bg-[#F6F7FA]">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionEyebrow>Hubungi Kami</SectionEyebrow>
                    <h2 className="text-3xl font-extrabold text-[#0E2A54] text-center mb-12">
                        Mari <span className="text-amber-500">Berdiskusi</span>
                    </h2>
                    <div className="grid lg:grid-cols-5 gap-6">
                        <div className="lg:col-span-2 bg-[#0E2A54] text-white rounded-2xl p-8 flex flex-col gap-6">
                            <h3 className="font-bold text-lg text-amber-400">Kontak Perusahaan</h3>
                            <p className="text-sm text-slate-300 leading-relaxed">
                                Tim kami siap membantu merancang program yang paling sesuai dengan kebutuhan
                                organisasi Anda. Hubungi kami melalui kontak berikut atau isi form konsultasi.
                            </p>
                            <div className="space-y-4 text-sm">
                                <div className="flex gap-3 items-start">
                                    <MapPin size={18} className="text-amber-400 shrink-0 mt-0.5" />
                                    <span>Jl. Saluyu XII A No. 42, Cipamokolan, Rancasari, Kota Bandung, Jawa Barat 40232</span>
                                </div>
                                <div className="flex gap-3">
                                    <Phone size={18} className="text-amber-400 shrink-0" />
                                    <span>081906667944</span>
                                </div>
                                <div className="flex gap-3">
                                    <Mail size={18} className="text-amber-400 shrink-0" />
                                    <span>solusiedukasiindonesia@gmail.com</span>
                                </div>
                                <div className="flex gap-3">
                                    <Clock size={18} className="text-amber-400 shrink-0" />
                                    <span>Senin – Jumat, 08.00 – 17.00 WIB</span>
                                </div>
                            </div>
                            <div className="mt-auto pt-4 border-t border-white/10">
                                <p className="text-xs text-amber-300 italic">"Empowering People, Transforming Organizations"</p>
                            </div>
                        </div>

                        <form onSubmit={handleWhatsApp} className="lg:col-span-3 bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-lg text-[#0E2A54] mb-6">Form Konsultasi Cepat</h3>
                            <div className="grid sm:grid-cols-2 gap-4 mb-4">
                                <input
                                    className="border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                                    placeholder="Nama Lengkap *"
                                    value={form.nama}
                                    onChange={(e) => setForm({ ...form, nama: e.target.value })}
                                    required
                                />
                                <input
                                    type="email"
                                    className="border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                                    placeholder="Email"
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                />
                                <input
                                    className="border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                                    placeholder="No. Telepon / WhatsApp *"
                                    value={form.telp}
                                    onChange={(e) => setForm({ ...form, telp: e.target.value })}
                                    required
                                />
                                <input
                                    className="border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                                    placeholder="Perusahaan / Institusi"
                                    value={form.instansi}
                                    onChange={(e) => setForm({ ...form, instansi: e.target.value })}
                                />
                            </div>
                            <textarea
                                rows={4}
                                className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm mb-5 focus:outline-none focus:ring-2 focus:ring-amber-400"
                                placeholder="Pesan / Kebutuhan Anda (jenis layanan, jumlah peserta, jadwal, dll.)"
                                value={form.pesan}
                                onChange={(e) => setForm({ ...form, pesan: e.target.value })}
                            />
                            <button
                                type="submit"
                                className="w-full bg-amber-500 hover:bg-amber-600 text-[#0E2A54] font-bold py-3 rounded-lg inline-flex items-center justify-center gap-2 transition-colors"
                            >
                                <Send size={16} /> Kirim via WhatsApp
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-[#0A2043] text-slate-400 text-sm">
                <div className="max-w-7xl mx-auto px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-[2fr_1fr_2fr_2.5fr] gap-x-4 gap-y-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-9 h-9 rounded-lg bg-[url('/sei1.jpeg')] bg-cover bg-center bg-amber-500"></div>
                            <div>
                                <p className="font-bold text-white text-sm">CV Solusi Edukasi Indonesia</p>
                                <p className="text-[10px] text-amber-400">NIB: 2205260161665</p>
                            </div>
                        </div>
                        <p className="text-xs leading-relaxed mb-3">
                            Mitra pengembangan SDM, konsultasi manajemen, IT solution, software, dan event profesional.
                        </p>
                        <p className="text-xs text-amber-400 italic">"Empowering People, Transforming Organizations"</p>
                    </div>
                    <div>
                        <p className="font-semibold text-white mb-4 text-sm">Navigasi</p>
                        <ul className="space-y-2 text-xs">
                            {NAV_LINKS.map((l) => <li key={l.label}><a href={l.href} className="hover:text-amber-400">{l.label}</a></li>)}
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold text-white mb-4 text-sm">Layanan</p>
                        <ul className="space-y-2 text-xs">
                            {PILLARS.map((p) => <li key={p.title}>{p.title}</li>)}
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold text-white mb-4 text-sm">Kontak</p>
                        <ul className="space-y-3 text-xs mb-4">
                            <li className="flex gap-2 items-start"><MapPin size={12} className="text-amber-400 mt-0.5 shrink-0" /> Jl. Saluyu XII A No. 42, Cipamokolan, Rancasari, Bandung 40232</li>
                            <li className="flex gap-2"><Phone size={12} className="text-amber-400 mt-0.5 shrink-0" /> 081906667944</li>
                            <li className="flex gap-2"><Mail size={12} className="text-amber-400 mt-0.5 shrink-0" /> solusiedukasiindonesia@gmail.com</li>
                        </ul>
                        <div className="flex items-center gap-2.5 pt-4 border-t border-white/10">
                            <a href="https://www.instagram.com/sei_solusiedukasi?igsh=MWx2Mmd5MThxM3o4aQ==" className="w-8 h-8 rounded-full bg-white/5 hover:bg-amber-400 hover:text-[#0E2A54] flex items-center justify-center transition-all duration-300 text-slate-300" aria-label="Instagram">
                                <Instagram size={14} />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-amber-400 hover:text-[#0E2A54] flex items-center justify-center transition-all duration-300 text-slate-300" aria-label="LinkedIn">
                                <Linkedin size={14} />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-amber-400 hover:text-[#0E2A54] flex items-center justify-center transition-all duration-300 text-slate-300" aria-label="YouTube">
                                <Youtube size={14} />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-amber-400 hover:text-[#0E2A54] flex items-center justify-center transition-all duration-300 text-slate-300" aria-label="TikTok">
                                <Tiktok size={14} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-white/10 py-5 text-center text-xs bg-white text-black">
                    © {new Date().getFullYear()} CV Solusi Edukasi Indonesia. Seluruh hak cipta dilindungi.
                </div>
            </footer>
        </div>
    );
}

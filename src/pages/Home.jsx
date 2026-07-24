import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    Sparkles,
    ArrowRight,
    BadgeCheck,
    PackageOpen,
    Users2,
    TrendingUp,
    Building2,
    FileText,
    ShieldCheck,
    Target,
    Eye,
    Rocket,
    CheckCircle2,
    Camera,
    Calendar,
    X,
    Briefcase,
    Award,
    ArrowUpRight,
} from "lucide-react";
import SectionEyebrow from "../components/SectionEyebrow";

const DOKUMENTASI_DATA = [
    {
        id: 1,
        title: "Penyerahan Sertifikat Pelatihan Kompetensi",
        desc: "Momen membanggakan penyerahan sertifikat kelulusan uji kompetensi kepada perwakilan peserta dari PT Dirgantara Jaya setelah menyelesaikan program bootcamp intensif selama 3 minggu.",
        category: "sertifikat",
        categoryLabel: "Sertifikat",
        image: "/dokumentasi_sertifikat.png",
        date: "14 Juni 2026",
        partner: "PT Dirgantara Jaya",
        icon: Award,
    },
    {
        id: 2,
        title: "Penandatanganan MoU Kerja Sama Strategis",
        desc: "CV Solusi Edukasi Indonesia resmi menandatangani naskah kerja sama penyediaan program peningkatan kapasitas SDM berbasis digital dengan jajaran direksi PT Global Solusindo.",
        category: "kontrak",
        categoryLabel: "Kerja Sama",
        image: "/dokumentasi_kontrak.png",
        date: "28 Mei 2026",
        partner: "PT Global Solusindo",
        icon: Briefcase,
    },
    {
        id: 3,
        title: "Pelatihan KBLI 70209 & Manajemen Modern",
        desc: "Sesi workshop interaktif mengenai taktik konsultasi manajemen dan optimalisasi tata kelola internal perusahaan yang diikuti oleh puluhan peserta dari berbagai divisi.",
        category: "pelatihan",
        categoryLabel: "Pelatihan",
        image: "/dokumentasi_pelatihan.png",
        date: "10 April 2026",
        partner: "Klien Publik & Swasta",
        icon: Users2,
    },
    {
        id: 4,
        title: "Bimbingan Teknis Pemrograman Komputer",
        desc: "Kegiatan pendampingan teknis intensif (KBLI 62019) pemrograman web modern untuk percepatan transformasi digital instansi pemerintahan.",
        category: "pelatihan",
        categoryLabel: "Pelatihan",
        image: "/meeting.jpg",
        date: "05 Maret 2026",
        partner: "Bappeda Kota Bandung",
        icon: Users2,
    },
    {
        id: 5,
        title: "Kolaborasi Sertifikasi Standar IT",
        desc: "Proses verifikasi akhir sertifikat standar keahlian teknologi informasi bagi mahasiswa tingkat akhir yang bekerja sama dengan institusi mitra.",
        category: "sertifikat",
        categoryLabel: "Sertifikat",
        image: "/sei1.jpeg",
        date: "20 Februari 2026",
        partner: "Politeknik Negeri",
        icon: Award,
    },
    {
        id: 6,
        title: "Penyelenggaraan Event Nasional (MICE)",
        desc: "Dokumentasi pelaksanaan konferensi tahunan pengembangan bakat nasional yang diselenggarakan secara hybrid oleh CV Solusi Edukasi Indonesia.",
        category: "kontrak",
        categoryLabel: "Kerja Sama",
        image: "/hybrid.jpg",
        date: "12 Januari 2026",
        partner: "Kementerian Pemuda",
        icon: Briefcase,
    }
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
    [
        "Alamat",
        "Jl. Saluyu XII A No. 42, Cipamokolan, Rancasari, Kota Bandung, Jawa Barat 40232",
    ],
    ["Telepon / WA", "081906667944"],
    ["Email", "info@edutechsolution.co.id"],
];

const KBLI = [
    { code: "70209", title: "Aktivitas Konsultasi Manajemen Lainnya" },
    { code: "62019", title: "Aktivitas Pemrograman Komputer Lainnya" },
    { code: "47413", title: "Perdagangan Eceran Piranti Lunak / Software" },
    {
        code: "62090",
        title: "Aktivitas Teknologi Informasi & Jasa Komputer Lainnya",
    },
    {
        code: "82301",
        title:
            "Jasa Penyelenggara Pertemuan, Perjalanan Insentif, Konferensi & Pameran (MICE)",
    },
];

const CORE_VALUES = [
    {
        letter: "P",
        title: "Professional",
        desc: "Mengutamakan kualitas, tanggung jawab, dan standar kerja yang baik dalam setiap layanan.",
    },
    {
        letter: "A",
        title: "Adaptive",
        desc: "Mampu menyesuaikan solusi dengan kebutuhan dan karakteristik unik setiap klien.",
    },
    {
        letter: "C",
        title: "Collaborative",
        desc: "Membangun kerja sama terbuka, aktif, dan saling mendukung dengan seluruh mitra.",
    },
    {
        letter: "I",
        title: "Innovative",
        desc: "Mendorong pemanfaatan teknologi, metode baru, dan pendekatan kreatif dalam solusi.",
    },
    {
        letter: "I",
        title: "Impactful",
        desc: "Berfokus pada hasil nyata yang dapat dirasakan oleh peserta, organisasi, dan mitra kerja.",
    },
];

const MISSIONS = [
    "Menyediakan program pelatihan dan pengembangan kompetensi yang aplikatif, relevan, dan sesuai kebutuhan industri.",
    "Memberikan layanan konsultasi manajemen untuk membantu organisasi meningkatkan efektivitas, tata kelola, dan performa bisnis.",
    "Mengembangkan solusi teknologi informasi dan software yang mendukung efisiensi kerja, digitalisasi proses, dan pengambilan keputusan.",
    "Menyelenggarakan kegiatan profesional seperti seminar, workshop, konferensi, dan program korporat secara terstruktur dan berkualitas.",
    "Membangun kolaborasi berkelanjutan dengan perusahaan, instansi, lembaga pendidikan, komunitas profesional, dan mitra strategis lainnya.",
];

export default function Home() {
    const [activeFilter, setActiveFilter] = useState("all");
    const [selectedDoc, setSelectedDoc] = useState(null);

    const filteredDocs = activeFilter === "all"
        ? DOKUMENTASI_DATA
        : DOKUMENTASI_DATA.filter(doc => doc.category === activeFilter);

    return (
        <>
            {/* HERO SECTION */}
            <section className="relative overflow-hidden flex-1 flex flex-col justify-between bg-bottom bg-no-repeat" style={{ backgroundImage: "url('/atas.jpg')" }}>
                <div className="max-w-7xl mx-auto px-6 pt-36 pb-24 grid lg:grid-cols-2 gap-12 items-center relative my-auto">
                    <div>
                        <span className="inline-flex items-center gap-2 bg-white/10 text-amber-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
                            <Sparkles size={14} /> Education | Training | Consulting | IT
                            Solution | MICE
                        </span>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
                            Solusi Edukasi &amp; Transformasi Digital
                        </h1>
                        <p className="text-amber-300 font-semibold text-lg mb-4 italic">
                            "Empowering People, Transforming Organizations"
                        </p>
                        <p className="text-slate-300 text-base leading-relaxed mb-8 max-w-xl">
                            Solusi edukasi, konsultasi, teknologi, dan event profesional untuk mendukung pertumbuhan organisasi Anda. Mencetak profesional unggul, untuk Indonesia yang lebih baik.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://wa.me/6281906667944?text=Halo%20CV%20Solusi%20Edukasi%20Indonesia,%20saya%20tertarik%20untuk%20berkonsultasi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-amber-500 hover:bg-amber-600 text-[#0E2A54] font-bold px-6 py-3 rounded-full inline-flex items-center gap-2 transition-colors"
                            >
                                Konsultasi Gratis <ArrowRight size={16} />
                            </a>
                            <Link
                                to="/layanan"
                                className="border border-white/30 hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-full transition-colors"
                            >
                                Lihat Layanan
                            </Link>
                        </div>
                    </div>

                    <div className="hidden lg:flex justify-center">
                        <div className="w-80 h-80 md:w-96 md:h-96 rounded-3xl bg-cover bg-center bg-no-repeat shadow-2xl" style={{ backgroundImage: "url('/meeting.jpg')" }} />
                    </div>
                </div>

                {/* STATS BAR */}
                <div className="bg-transparent border-t border-white/10 mt-auto">
                    <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
                        {STATS.map(({ icon: Icon, value, label }) => (
                            <div key={label} className="flex items-center gap-3">
                                <div className="w-11 h-11 rounded-xl bg-amber-500/15 flex items-center justify-center text-amber-400 shrink-0">
                                    <Icon size={20} />
                                </div>
                                <div>
                                    <p className="text-lg font-extrabold text-white leading-none">
                                        {value}
                                    </p>
                                    <p className="text-[11px] text-slate-400 mt-1">{label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TENTANG KAMI */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionEyebrow>Profil Perusahaan</SectionEyebrow>
                    <h2 className="text-3xl font-extrabold text-[#0E2A54] text-center mb-4">
                        Tentang CV Solusi Edukasi Indonesia
                    </h2>
                    <p className="text-center text-slate-500 max-w-3xl mx-auto mb-12">
                        Perusahaan yang berfokus pada penyediaan solusi edukasi, pelatihan,
                        konsultasi manajemen, teknologi informasi, penyediaan software, serta
                        penyelenggaraan kegiatan profesional. Kami membantu organisasi dan
                        individu meningkatkan kompetensi, efektivitas kerja, transformasi
                        digital, dan kesiapan menghadapi perkembangan dunia kerja modern.
                    </p>
                    <div className="grid lg:grid-cols-2 gap-10 items-start">
                        {/* LEFT: About Text + KBLI */}
                        <div className="space-y-6">
                            <div className="bg-[#F6F7FA] rounded-2xl p-6">
                                <h3 className="font-bold text-[#0E2A54] text-lg mb-3 flex items-center gap-2">
                                    <Building2 size={18} className="text-amber-500" /> Tentang
                                    Perusahaan
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-3">
                                    CV Solusi Edukasi Indonesia berdiri dengan semangat mendukung
                                    peningkatan kualitas sumber daya manusia, pengembangan
                                    organisasi, serta pemanfaatan teknologi informasi bagi
                                    kebutuhan bisnis dan pendidikan.
                                </p>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Kami tidak hanya menawarkan program umum, tetapi juga mampu
                                    menyusun program khusus berdasarkan tujuan, tantangan, level
                                    peserta, sektor industri, dan output yang diharapkan. Dengan
                                    pendekatan ini, layanan kami menjadi lebih relevan,
                                    aplikatif, dan berdampak langsung.
                                </p>
                            </div>
                            <div className="bg-[#F6F7FA] rounded-2xl p-6">
                                <h3 className="font-bold text-[#0E2A54] text-lg mb-4 flex items-center gap-2">
                                    <FileText size={18} className="text-amber-500" /> Bidang Usaha
                                    (KBLI)
                                </h3>
                                <div className="space-y-3">
                                    {KBLI.map((k) => (
                                        <div key={k.code} className="flex gap-3 items-start">
                                            <span className="shrink-0 text-xs font-bold bg-[#0E2A54] text-amber-400 px-2 py-1 rounded-lg">
                                                {k.code}
                                            </span>
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
                                    <div
                                        key={k}
                                        className="grid grid-cols-5 gap-3 border-b border-white/10 pb-3 last:border-0"
                                    >
                                        <dt className="col-span-2 text-slate-400 text-xs">{k}</dt>
                                        <dd className="col-span-3 font-medium text-xs text-slate-200">
                                            {v}
                                        </dd>
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
                        Purpose, Vision, Mission &amp;{" "}
                        <span className="text-amber-500">Values</span>
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
                                Membantu organisasi dan individu meningkatkan kualitas
                                kompetensi, produktivitas, dan kesiapan menghadapi perubahan
                                melalui solusi edukasi, konsultasi, dan teknologi yang relevan
                                dengan kebutuhan industri.
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
                                Menjadi mitra terpercaya dalam pengembangan sumber daya manusia,
                                konsultasi manajemen, dan solusi teknologi informasi yang
                                profesional, inovatif, dan berdampak bagi kemajuan organisasi di
                                Indonesia.
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
                                    <CheckCircle2
                                        size={16}
                                        className="text-amber-500 shrink-0 mt-0.5"
                                    />
                                    {m}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Core Values */}
                    <h3 className="text-center font-bold text-[#0E2A54] text-xl mb-8">
                        Nilai-Nilai Perusahaan
                    </h3>
                    <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-5">
                        {CORE_VALUES.map((v) => (
                            <div
                                key={v.title}
                                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-slate-100"
                            >
                                <div className="w-14 h-14 mx-auto rounded-full bg-[#0E2A54] text-amber-400 font-black text-xl flex items-center justify-center mb-4">
                                    {v.letter}
                                </div>
                                <h4 className="font-bold text-[#0E2A54] mb-2 text-sm">
                                    {v.title}
                                </h4>
                                <p className="text-xs text-slate-500 leading-relaxed">
                                    {v.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* DOKUMENTASI KEGIATAN & KERJA SAMA */}
            <section className="py-20 bg-transparent border-t border-slate-200/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-transparent text-black p-8 md:p-12 relative overflow-hidden">
                        {/* Header */}
                        <div className="relative z-10 text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                                Dokumentasi Kegiatan &amp; <span className="text-amber-400">Kerja Sama</span>
                            </h2>
                            <p className="text-black-300 text-sm mt-4 leading-relaxed">
                                Jejak langkah kolaborasi CV Solusi Edukasi Indonesia dalam menyelenggarakan pelatihan kompetensi, penyerahan sertifikat resmi, serta penandatanganan kerja sama strategis (MoU) bersama berbagai mitra perusahaan dan institusi.
                            </p>
                        </div>

                        {/* Filter Buttons */}
                        <div className="relative z-10 flex flex-wrap justify-center gap-2.5 mb-10">
                            {[
                                { id: "all", label: "Semua Kegiatan" },
                                { id: "sertifikat", label: "Penyerahan Sertifikat" },
                                { id: "kontrak", label: "Kerja Sama / MoU" },
                                { id: "pelatihan", label: "Pelatihan & Workshop" }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveFilter(tab.id)}
                                    className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${activeFilter === tab.id
                                        ? "bg-amber-500 text-[#0E2A54] shadow-md shadow-amber-500/20 scale-105"
                                        : "bg-[#0A2043]/60 hover:bg-[#0A2043] text-slate-300 hover:text-white border border-white/5"
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Gallery Grid */}
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {filteredDocs.map((doc) => {
                                const IconComponent = doc.icon;
                                return (
                                    <div
                                        key={doc.id}
                                        onClick={() => setSelectedDoc(doc)}
                                        className="bg-white text-[#0E2A54] rounded-2xl p-4 shadow-lg flex flex-col sm:flex-row gap-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group cursor-pointer border border-slate-100/50"
                                    >
                                        {/* Left: Image Container */}
                                        <div className="w-full sm:w-2/5 aspect-[4/3] rounded-xl overflow-hidden flex-shrink-0 relative bg-slate-50">
                                            <img
                                                src={doc.image}
                                                alt={doc.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>

                                        {/* Right: Content details */}
                                        <div className="w-full sm:w-3/5 flex flex-col justify-between py-1 text-left">
                                            <div>
                                                {/* Category Tag */}
                                                <div className="mb-2.5">
                                                    <span className={`inline-block text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-1 rounded text-white shadow-sm ${doc.category === "sertifikat" ? "bg-emerald-600" :
                                                        doc.category === "kontrak" ? "bg-blue-600" : "bg-amber-600"
                                                        }`}>
                                                        {doc.categoryLabel}
                                                    </span>
                                                </div>

                                                {/* Partner & Date */}
                                                <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-slate-500 mb-2 font-semibold">
                                                    <IconComponent size={12} className="text-amber-500" />
                                                    <span>{doc.partner}</span>
                                                    <span className="text-slate-300">•</span>
                                                    <span>{doc.date}</span>
                                                </div>

                                                {/* Title */}
                                                <h3 className="font-extrabold text-[#0E2A54] text-base mb-1.5 leading-snug group-hover:text-amber-500 transition-colors line-clamp-2">
                                                    {doc.title}
                                                </h3>

                                                {/* Description */}
                                                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                                                    {doc.desc}
                                                </p>
                                            </div>

                                            {/* Link */}
                                            <div className="mt-4 sm:mt-auto">
                                                <span className="text-xs font-extrabold text-amber-500 inline-flex items-center gap-1.5 hover:text-amber-600 transition-colors">
                                                    Lihat Detail <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* LIGHTBOX DETAIL MODAL */}
            {selectedDoc && (
                <div
                    className="fixed inset-0 z-50 bg-[#0A2043]/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-fade-in"
                    onClick={() => setSelectedDoc(null)}
                >
                    <div
                        className="bg-[#0E2A54] border border-white/15 max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl relative flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh] animate-scale-up"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setSelectedDoc(null)}
                            className="absolute top-4 right-4 z-10 text-slate-400 hover:text-white bg-black/40 hover:bg-black/60 p-2.5 rounded-full transition-all"
                            title="Tutup"
                        >
                            <X size={18} />
                        </button>

                        {/* Left Side: Photo */}
                        <div className="md:w-1/2 relative min-h-[250px] md:h-auto bg-[#08172F]">
                            <img
                                src={selectedDoc.image}
                                alt={selectedDoc.title}
                                className="w-full h-full object-cover"
                            />
                            {/* Overlay category */}
                            <span className="absolute bottom-4 left-4 bg-amber-500 text-[#0E2A54] text-xs font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-md shadow-lg">
                                {selectedDoc.categoryLabel}
                            </span>
                        </div>

                        {/* Right Side: Details Info */}
                        <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-between overflow-y-auto">
                            <div>
                                <div className="flex flex-wrap items-center gap-3 text-slate-400 text-xs mb-4">
                                    <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full text-slate-300">
                                        <Building2 size={12} className="text-amber-400" />
                                        <span className="font-bold">{selectedDoc.partner}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full text-slate-300">
                                        <Calendar size={12} className="text-amber-400" />
                                        <span>{selectedDoc.date}</span>
                                    </div>
                                </div>

                                <h3 className="text-xl md:text-2xl font-extrabold text-white leading-snug mb-4">
                                    {selectedDoc.title}
                                </h3>

                                <p className="text-slate-300 text-sm leading-relaxed mb-6 whitespace-pre-line">
                                    {selectedDoc.desc}
                                </p>
                            </div>

                            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                                <a
                                    href="https://wa.me/6281906667944?text=Halo%20CV%20Solusi%20Edukasi%20Indonesia,%20saya%20ingin%20mengajukan%20kerja%20sama"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setSelectedDoc(null)}
                                    className="bg-amber-500 hover:bg-amber-600 text-[#0E2A54] font-bold text-xs px-5 py-3 rounded-xl inline-flex items-center justify-center gap-2 transition-colors w-full text-center"
                                >
                                    Ajukan Kerja Sama <ArrowRight size={14} />
                                </a>
                                <button
                                    onClick={() => setSelectedDoc(null)}
                                    className="border border-white/20 hover:bg-white/5 text-white font-semibold text-xs px-5 py-3 rounded-xl transition-colors w-full"
                                >
                                    Kembali ke Galeri
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
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
    BookOpen,
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
        desc: "Edutech Solution (CV SEI) resmi menandatangani naskah kerja sama penyediaan program peningkatan kapasitas SDM berbasis digital dengan jajaran direksi PT Global Solusindo.",
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
        desc: "Dokumentasi pelaksanaan konferensi tahunan pengembangan bakat nasional yang diselenggarakan secara hybrid oleh Edutech Solution (CV SEI).",
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
    ["Nama Brand", "Edutech Solution"],
    ["Nama Perusahaan", "CV Solusi Edukasi Indonesia (CV SEI)"],
    ["Bentuk Badan Usaha", "Persekutuan Komanditer (CV)"],
    ["Website Resmi", "www.edutechsolution.co.id"],
    ["Email Resmi", "info@edutechsolution.co.id"],
    ["NIB", "2205260161665"],
    ["NPWP", "1000000009726986"],
    ["Status Modal", "PMDN – Usaha Mikro"],
    [
        "Alamat",
        "Jl. Saluyu XII A No. 42, Cipamokolan, Rancasari, Kota Bandung, Jawa Barat 40232",
    ],
    ["Telepon / WA", "081906667944"],
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

const CULTURE_VALUES = [
    {
        letter: "01",
        title: "Belajar",
        desc: "Semangat continuous learning dan mindset bertumbuh tanpa henti untuk senantiasa menguasai pengetahuan & teknologi terbaru.",
        icon: BookOpen,
    },
    {
        letter: "02",
        title: "Bertumbuh Bersama",
        desc: "Membangun ekosistem kolaborasi yang mutually beneficial dengan mitra, klien, peserta, dan seluruh pemangku kepentingan.",
        icon: TrendingUp,
    },
    {
        letter: "03",
        title: "Bertanggung Jawab",
        desc: "Integritas penuh dan komitmen eksekusi tinggi dalam setiap tanggung jawab dan amanah proyek yang dipercayakan.",
        icon: ShieldCheck,
    },
];

const MISSIONS = [
    "Menyediakan program pelatihan dan pengembangan kompetensi berbasis kebutuhan industri yang praktis dan aplikatif.",
    "Memberikan layanan konsultasi manajemen dan tata kelola organisasi yang efektif, efisien, dan berorientasi pada perbaikan berkelanjutan.",
    "Mengembangkan solusi teknologi informasi, sistem berbasis web, dan produk digital yang mendukung transformasi digital klien.",
    "Menyelenggarakan event, workshop, seminar, dan MICE secara profesional dengan standar kualitas tinggi.",
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
            <section className="relative overflow-hidden flex-1 flex flex-col justify-between bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "linear-gradient(to right, rgba(255, 255, 255, 0.96) 35%, rgba(255, 255, 255, 0.88) 60%, rgba(255, 255, 255, 0.45) 100%), url('/atas.jpg')" }}>
                <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 grid lg:grid-cols-2 gap-12 items-center relative my-auto">
                    <div>
                        <span className="inline-flex items-center gap-2 bg-[#0E2A54]/5 text-[#0E2A54] text-xs font-bold px-4 py-1.5 rounded-full mb-6 border border-[#0E2A54]/10">
                            <Sparkles size={14} className="text-amber-500" /> Edutech Solution — CV Solusi Edukasi Indonesia
                        </span>
                        <h1 className="text-4xl md:text-5xl font-black text-[#0E2A54] leading-tight mb-4">
                            Edutech Solution:<br />
                            <span className="text-amber-500">Pelatihan Praktis &amp; Aplikatif</span>
                        </h1>
                        <p className="text-amber-600 font-bold text-lg mb-3 italic">
                            "Empowering People, Transforming Organizations"
                        </p>
                        <div className="mb-6 p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-[#0E2A54] text-xs font-semibold">
                            <span className="text-amber-600 uppercase tracking-widest font-bold block mb-1">Purpose Kami:</span>
                            "Mencetak profesional unggul, untuk Indonesia yang lebih baik"
                        </div>
                        <p className="text-slate-600 text-base leading-relaxed mb-8 max-w-xl">
                            Edutech Solution (CV SEI) hadir mendampingi perusahaan, instansi,
                            lembaga pendidikan, dan organisasi dalam meningkatkan kapasitas SDM
                            serta mempercepat transformasi digital melalui pelatihan praktis,
                            konsultasi manajemen, IT solution, software, dan penyelenggaraan
                            event profesional.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://wa.me/6281906667944?text=Halo%20Edutech%20Solution%20(CV%20SEI),%20saya%20tertarik%20untuk%20berkonsultasi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-amber-500 hover:bg-amber-600 text-[#0E2A54] font-bold px-6 py-3 rounded-full inline-flex items-center gap-2 transition-all duration-300 shadow-sm hover:shadow"
                            >
                                Konsultasi Gratis <ArrowRight size={16} />
                            </a>
                            <Link
                                to="/layanan"
                                className="border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold px-6 py-3 rounded-full transition-colors"
                            >
                                Lihat Layanan
                            </Link>
                        </div>
                    </div>

                    <div className="hidden lg:flex justify-center">
                        <div className="w-80 h-80 md:w-96 md:h-96 rounded-3xl bg-cover bg-center bg-no-repeat shadow-2xl border border-slate-100" style={{ backgroundImage: "url('/meeting.jpg')" }} />
                    </div>
                </div>

                {/* STATS BAR */}
                <div className="bg-[#0E2A54]/5 border-t border-[#0E2A54]/10 mt-auto">
                    <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
                        {STATS.map(({ icon: Icon, value, label }) => (
                            <div key={label} className="flex items-center gap-3">
                                <div className="w-11 h-11 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 shrink-0">
                                    <Icon size={20} />
                                </div>
                                <div>
                                    <p className="text-lg font-extrabold text-[#0E2A54] leading-none">
                                        {value}
                                    </p>
                                    <p className="text-[11px] text-slate-500 mt-1">{label}</p>
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
                        Tentang Edutech Solution (CV SEI)
                    </h2>
                    <p className="text-center text-slate-500 max-w-3xl mx-auto mb-12">
                        Sentral solusi edukasi dan pengembangan organisasi yang berfokus pada penyediaan pelatihan praktis &amp; aplikatif,
                        konsultasi manajemen, teknologi informasi, software, serta
                        penyelenggaraan kegiatan profesional.
                    </p>
                    <div className="grid lg:grid-cols-2 gap-10 items-start">
                        {/* LEFT: About Text + KBLI */}
                        <div className="space-y-6">
                            <div className="bg-[#F6F7FA] rounded-2xl p-6">
                                <h3 className="font-bold text-[#0E2A54] text-lg mb-3 flex items-center gap-2">
                                    <Building2 size={18} className="text-amber-500" /> Profil Brand &amp; Usaha
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-3">
                                    Edutech Solution beroperasi di bawah legalitas resmi CV Solusi Edukasi Indonesia (CV SEI) dengan komitmen penuh mendukung peningkatan kualitas SDM, tata kelola organisasi, serta pemanfaatan teknologi informasi modern.
                                </p>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Kami tidak hanya menawarkan program umum, tetapi menyusun program khusus (customized program) berbasis analisis kebutuhan internal klien. Dengan pendekatan ini, seluruh materi menjadi lebih praktis, aplikatif, dan berdampak nyata.
                                </p>
                            </div>
                            <div className="bg-[#F6F7FA] rounded-2xl p-6">
                                <h3 className="font-bold text-[#0E2A54] text-lg mb-4 flex items-center gap-2">
                                    <FileText size={18} className="text-amber-500" /> Bidang Usaha (KBLI Resmi)
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
                                <ShieldCheck size={18} /> Legalitas &amp; Identitas Usaha
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

            {/* PURPOSE, VISION, MISSION & CULTURE */}
            <section className="py-20 bg-[#F6F7FA]">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionEyebrow>Fondasi Perusahaan</SectionEyebrow>
                    <h2 className="text-3xl font-extrabold text-[#0E2A54] text-center mb-12">
                        Purpose, Visi &amp; <span className="text-amber-500">Misi Perusahaan</span>
                    </h2>

                    {/* Purpose + Vision */}
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                                    <Target size={20} />
                                </div>
                                <h3 className="font-bold text-[#0E2A54] text-lg">Purpose Perusahaan</h3>
                            </div>
                            <p className="text-[#0E2A54] font-extrabold text-base leading-relaxed">
                                "Mencetak profesional unggul, untuk Indonesia yang lebih baik"
                            </p>
                            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                                Berkomitmen mencetak talenta dan profesional berdaya saing tinggi yang siap mendorong kemajuan organisasi dan bangsa.
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                                    <Eye size={20} />
                                </div>
                                <h3 className="font-bold text-[#0E2A54] text-lg">Visi Perusahaan</h3>
                            </div>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Menjadi mitra terpercaya dan terdepan dalam pengembangan SDM, konsultasi manajemen, teknologi informasi, dan penyelenggaraan event profesional yang berdampak nyata bagi pertumbuhan organisasi.
                            </p>
                        </div>
                    </div>

                    {/* Mission */}
                    <div className="bg-[#0E2A54] rounded-2xl p-8 shadow-sm border border-slate-100 mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                                <Rocket size={20} />
                            </div>
                            <h3 className="font-bold text-white text-lg">Misi Perusahaan</h3>
                        </div>
                        <ul className="grid md:grid-cols-2 gap-4">
                            {MISSIONS.map((m, i) => (
                                <li key={i} className="flex gap-3 text-sm text-slate-200">
                                    <CheckCircle2
                                        size={16}
                                        className="text-amber-400 shrink-0 mt-0.5"
                                    />
                                    {m}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Culture Values */}
                    <h3 className="text-center font-bold text-[#0E2A54] text-xl mb-8">
                        Budaya Perusahaan
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {CULTURE_VALUES.map((v) => (
                            <div
                                key={v.title}
                                className="bg-white rounded-2xl p-7 text-center shadow-sm border border-slate-100 flex flex-col items-center"
                            >
                                <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                                    <v.icon size={26} />
                                </div>
                                <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-1">
                                    BUDAYA {v.letter}
                                </span>
                                <h4 className="font-extrabold text-[#0E2A54] mb-2 text-lg">
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

            {/* DOKUMENTASI DOKUMEN & KEGIATAN */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionEyebrow>Galeri &amp; Portfolio</SectionEyebrow>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#0E2A54] text-center mb-4">
                        Dokumentasi Kegiatan &amp; <span className="text-amber-500">Kerja Sama</span>
                    </h2>
                    <p className="text-center text-slate-500 max-w-2xl mx-auto mb-10 text-sm md:text-base">
                        Bukti nyata komitmen Edutech Solution (CV SEI) dalam memberikan layanan pelatihan, konsultasi, dan event profesional berstandar tinggi.
                    </p>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {[
                            { id: "all", label: "Semua Kegiatan" },
                            { id: "sertifikat", label: "Sertifikat & Uji Kompetensi" },
                            { id: "kontrak", label: "Kerja Sama & Event" },
                            { id: "pelatihan", label: "Pelatihan & Workshop" },
                        ].map((filter) => (
                            <button
                                key={filter.id}
                                onClick={() => setActiveFilter(filter.id)}
                                className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                                    activeFilter === filter.id
                                        ? "bg-[#0E2A54] text-white shadow-md shadow-[#0E2A54]/20"
                                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                }`}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>

                    {/* Grid Gallery */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredDocs.map((doc) => {
                            const CardIcon = doc.icon;
                            return (
                                <div
                                    key={doc.id}
                                    onClick={() => setSelectedDoc(doc)}
                                    className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1"
                                >
                                    <div className="relative h-56 overflow-hidden bg-slate-100">
                                        <img
                                            src={doc.image}
                                            alt={doc.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#0E2A54] shadow-sm flex items-center gap-1.5">
                                            <CardIcon size={12} className="text-amber-500" />
                                            {doc.categoryLabel}
                                        </div>
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center gap-2 text-slate-400 text-xs mb-2">
                                                <Calendar size={13} />
                                                <span>{doc.date}</span>
                                                <span>•</span>
                                                <span className="text-amber-600 font-semibold">{doc.partner}</span>
                                            </div>
                                            <h3 className="font-bold text-[#0E2A54] text-lg mb-2 leading-snug group-hover:text-amber-600 transition-colors">
                                                {doc.title}
                                            </h3>
                                            <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">
                                                {doc.desc}
                                            </p>
                                        </div>
                                        <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0E2A54] group-hover:text-amber-600">
                                            <span>Lihat Detail</span>
                                            <Camera size={14} />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* MODAL PREVIEW DOKUMENTASI */}
            {selectedDoc && (
                <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
                    <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative">
                        <button
                            onClick={() => setSelectedDoc(null)}
                            className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/80 text-white w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                        >
                            <X size={18} />
                        </button>
                        <div className="h-72 overflow-hidden relative">
                            <img
                                src={selectedDoc.image}
                                alt={selectedDoc.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-8">
                            <div className="flex items-center gap-2 text-xs font-semibold text-amber-600 mb-2">
                                <span>{selectedDoc.date}</span>
                                <span>•</span>
                                <span>Mitra: {selectedDoc.partner}</span>
                            </div>
                            <h3 className="text-2xl font-extrabold text-[#0E2A54] mb-3">
                                {selectedDoc.title}
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                {selectedDoc.desc}
                            </p>
                            <button
                                onClick={() => setSelectedDoc(null)}
                                className="bg-[#0E2A54] text-white font-bold text-xs px-6 py-3 rounded-full hover:bg-[#163b72] transition-colors"
                            >
                                Tutup Pratinjau
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
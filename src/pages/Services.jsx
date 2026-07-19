import React from "react";
import { Link } from "react-router-dom";
import SectionEyebrow from "../components/SectionEyebrow";
import {
    Presentation, ClipboardList, Laptop2, Code2, PartyPopper, CheckCircle2, ArrowRight,
    GanttChartSquare, Target, Users2, ShieldCheck, Sparkles
} from "lucide-react";

const PILLARS = [
    {
        icon: Presentation,
        title: "Training & Professional Development",
        href: "/layanan/training-development",
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
        href: "/layanan/management-consulting",
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
        href: "/layanan/it-solution",
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
        href: "/layanan/digital-product",
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
        href: "/layanan/event-mice",
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

const ADVANTAGES = [
    { icon: GanttChartSquare, title: "Fleksibel & Customizable", desc: "Program dirancang sesuai kebutuhan, tujuan bisnis, level peserta, dan sektor industri masing-masing klien.", highlight: true, },
    { icon: Target, title: "Berorientasi Praktik", desc: "Bukan hanya teori—setiap program dirancang dengan studi kasus nyata dan implementasi langsung." },
    { icon: Users2, title: "Trainer & Konsultan Berpengalaman", desc: "Dapat menghadirkan trainer, konsultan, dan praktisi sesuai bidang keahlian yang dibutuhkan.", highlight: true, },
    { icon: Laptop2, title: "Dukungan Transformasi Digital", desc: "Mendukung digitalisasi melalui website, aplikasi, software, dan dashboard pelaporan terintegrasi." },
    { icon: ShieldCheck, title: "Legalitas Jelas", desc: "Beroperasi dengan NIB resmi melalui sistem OSS Pemerintah Republik Indonesia.", highlight: true, },
    { icon: Sparkles, title: "Layanan Terintegrasi", desc: "Pelatihan, konsultasi, teknologi, software, dan event dalam satu ekosistem layanan yang terpadu." },
];

export default function Services() {
    return (
        <div className="flex-1">
            {/* LAYANAN UTAMA */}
            <section className="py-20 bg-white">
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
                        {PILLARS.map(({ icon: Icon, title, href, points, cta, highlight }) => (
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
                                <Link
                                    to={href}
                                    className={`text-sm font-semibold inline-flex items-center gap-1.5 self-start px-4 py-2 rounded-full transition-colors ${highlight
                                        ? "bg-amber-500 text-[#0E2A54] hover:bg-amber-400"
                                        : "bg-[#0E2A54] text-white hover:bg-[#163B72]"}`}
                                >
                                    {cta} <ArrowRight size={14} />
                                </Link>
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
        </div>
    );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import SectionEyebrow from "../components/SectionEyebrow";
import {
    ArrowRight, Search, FileText, Rocket, BarChart3, Building2,
    MonitorSmartphone, Globe2, GraduationCap, Handshake, Briefcase
} from "lucide-react";

const CATEGORIES = ["Semua", "Training", "Konsultasi", "Teknologi", "Event"];

const PRODUCTS = [
    { tag: "Training", title: "Artificial Intelligence for Corporate Productivity", desc: "Pelatihan pemanfaatan AI untuk meningkatkan efisiensi kerja tim di berbagai lini bisnis.", bgImage: "/meeting.jpg" },
    { tag: "Teknologi", title: "Data Analyst for Business & Industry", desc: "Program penguasaan analitik data guna mendukung pengambilan keputusan berbasis data.", bgImage: "/meeting.jpg" },
    { tag: "Teknologi", title: "Cybersecurity Awareness & Network Infrastructure", desc: "Membangun kesadaran keamanan siber and penguatan infrastruktur jaringan organisasi.", bgImage: "/meeting.jpg" },
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

export default function Program() {
    const [activeCat, setActiveCat] = useState("Semua");

    const filteredProducts =
        activeCat === "Semua" ? PRODUCTS : PRODUCTS.filter((p) => p.tag === activeCat);

    return (
        <div className="flex-1">
            {/* PRODUK & PROGRAM */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionEyebrow>Katalog Program</SectionEyebrow>
                    <h2 className="text-3xl font-extrabold text-[#0E2A54] text-center mb-3">
                        Event <span className="text-amber-500">Unggulan</span>
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
                                        href={`https://wa.me/6281906667944?text=Halo%20CV%20Solusi%20Edukasi%20Indonesia,%20saya%20tertarik%20dengan%20program%20${encodeURIComponent(p.title)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs font-bold text-amber-400 inline-flex items-center gap-1 hover:text-amber-300 transition-colors"
                                    >
                                        Tanya Program <ArrowRight size={12} />
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
        </div>
    );
}

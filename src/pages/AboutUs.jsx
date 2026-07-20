import React from "react";
import SectionEyebrow from "../components/SectionEyebrow";
import { Sparkles, ShieldCheck, Target, Award, Users, BookOpen, TrendingUp, Compass, Globe, Mail, Phone, MapPin } from "lucide-react";

const BOARD_OF_MANAGEMENT = [
    {
        name: "Franciska Sukamdewi Megawati",
        role: "Komisaris Utama",
        desc: "Pengarah strategis perusahaan yang berfokus pada tata kelola integritas, ekspansi jaringan, serta pengawasan mutu layanan.",
        image: "/siti.png",
    },
    {
        name: "Yana Mulyana",
        role: "Direktur Utama",
        desc: "Memimpin eksekusi visi-misi perusahaan, pengembangan bisnis, dan transformasi layanan berkelanjutan di seluruh lini.",
        image: "/ahmad.png",
    },
    {
        name: "Setiani Hafsah",
        role: "Manajer Keuangan & Administrasi",
        desc: "Mengelola akuntabilitas finansial, efisiensi operasional, dan kepatuhan administrasi legalitas usaha.",
        image: "/satu.png",
    },
];

const CULTURE_VALUES = [
    {
        number: "01",
        title: "Belajar",
        desc: "Semangat continuous learning dan mindset bertumbuh tanpa henti untuk senantiasa menguasai pengetahuan & teknologi terbaru.",
        icon: BookOpen,
    },
    {
        number: "02",
        title: "Bertumbuh Bersama",
        desc: "Membangun ekosistem kolaborasi yang mutually beneficial dengan mitra, klien, peserta, dan seluruh pemangku kepentingan.",
        icon: TrendingUp,
    },
    {
        number: "03",
        title: "Bertanggung Jawab",
        desc: "Integritas penuh dan komitmen eksekusi tinggi dalam setiap tanggung jawab dan amanah proyek yang dipercayakan.",
        icon: ShieldCheck,
    },
];

export default function AboutUs() {
    return (
        <div className="flex-1 bg-[#F6F7FA]">
            {/* HERO SECTION */}
            <section className="relative pt-36 pb-24 bg-gradient-to-br from-[#0E2A54] via-[#123668] to-[#081B38] text-white overflow-hidden">
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px]"></div>
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 -left-12 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-6">
                        <Sparkles size={14} /> Edutech Solution — Central Corporate Profile
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
                        Mengenal Lebih Dekat <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                            Edutech Solution (CV SEI)
                        </span>
                    </h1>
                    <p className="text-amber-300 text-lg font-semibold max-w-2xl mx-auto mb-4 italic">
                        "Edutech Solution: Pelatihan Praktis dan Aplikatif"
                    </p>
                    <p className="text-slate-300 max-w-3xl mx-auto text-base md:text-lg leading-relaxed font-light">
                        Kami adalah mitra strategis tepercaya dalam pengembangan Sumber Daya Manusia (SDM), konsultasi manajemen, teknologi informasi, dan event profesional di Indonesia.
                    </p>
                </div>
            </section>

            {/* PROFIL & LEGALITAS */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <SectionEyebrow>Profil &amp; Identity</SectionEyebrow>
                            <h2 className="text-3xl font-extrabold text-[#0E2A54] mb-6 leading-tight">
                                Dedikasi Mewujudkan <span className="text-amber-500">SDM &amp; Solusi Unggul</span>
                            </h2>
                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                <strong className="text-[#0E2A54]">Edutech Solution</strong> merupakan brand utama yang berada di bawah naungan badan hukum resmi <strong className="text-[#0E2A54]">CV Solusi Edukasi Indonesia (CV SEI)</strong>. Berfokus sebagai sentral solusi edukasi, pelatihan praktis, konsultasi manajemen, software development, dan MICE event.
                            </p>
                            <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                Didirikan dengan komitmen kuat untuk menjembatani kesenjangan kompetensi tenaga kerja di era transformasi digital, kami memastikan setiap program dirancang secara praktis, aplikatif, dan berdampak langsung pada pertumbuhan bisnis organisasi.
                            </p>

                            {/* Tagline & Purpose Callout */}
                            <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200/80 space-y-3">
                                <div>
                                    <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block mb-0.5">Tagline Perusahaan</span>
                                    <p className="text-[#0E2A54] font-extrabold text-sm italic">"Empowering People, Transforming Organizations"</p>
                                </div>
                                <div className="pt-2 border-t border-amber-200/60">
                                    <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block mb-0.5">Purpose (Tujuan Mulia)</span>
                                    <p className="text-[#0E2A54] font-extrabold text-sm">"Mencetak profesional unggul, untuk Indonesia yang lebih baik"</p>
                                </div>
                            </div>
                        </div>

                        {/* Legalitas Card */}
                        <div className="bg-[#0E2A54] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-bl-full"></div>
                            <h3 className="text-xl font-extrabold text-amber-400 mb-6 flex items-center gap-2">
                                <ShieldCheck size={24} /> Identitas &amp; Legalitas Usaha
                            </h3>
                            <ul className="space-y-3.5 text-xs text-slate-200">
                                <li className="flex justify-between border-b border-white/10 pb-2">
                                    <span className="font-semibold text-slate-400">Nama Brand</span>
                                    <span className="font-bold text-amber-400">Edutech Solution</span>
                                </li>
                                <li className="flex justify-between border-b border-white/10 pb-2">
                                    <span className="font-semibold text-slate-400">Nama Badan Hukum</span>
                                    <span>CV Solusi Edukasi Indonesia (CV SEI)</span>
                                </li>
                                <li className="flex justify-between border-b border-white/10 pb-2">
                                    <span className="font-semibold text-slate-400">Website Resmi</span>
                                    <span className="font-medium text-amber-300">www.edutechsolution.co.id</span>
                                </li>
                                <li className="flex justify-between border-b border-white/10 pb-2">
                                    <span className="font-semibold text-slate-400">Email Resmi</span>
                                    <span className="font-medium text-slate-300">info@edutechsolution.co.id</span>
                                </li>
                                <li className="flex justify-between border-b border-white/10 pb-2">
                                    <span className="font-semibold text-slate-400">NIB (Nomor Induk Berusaha)</span>
                                    <span className="font-mono text-amber-300">2205260161665</span>
                                </li>
                                <li className="flex justify-between border-b border-white/10 pb-2">
                                    <span className="font-semibold text-slate-400">NPWP</span>
                                    <span className="font-mono">1000000009726986</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="font-semibold text-slate-400">Status Modal</span>
                                    <span>PMDN - Usaha Mikro</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* PURPOSE, VISI & MISI */}
            <section className="py-20 bg-[#F6F7FA]">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-14">
                        <SectionEyebrow>Arah &amp; Komitmen</SectionEyebrow>
                        <h2 className="text-3xl font-extrabold text-[#0E2A54]">
                            Purpose, Visi &amp; <span className="text-amber-500">Misi Perusahaan</span>
                        </h2>
                    </div>

                    {/* Purpose Banner */}
                    <div className="bg-gradient-to-r from-[#0E2A54] to-[#163B72] rounded-3xl p-8 text-white text-center shadow-lg mb-10 border border-amber-500/20">
                        <span className="inline-block px-4 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">
                            PURPOSE KAMI
                        </span>
                        <h3 className="text-2xl md:text-3xl font-black text-amber-400">
                            "Mencetak profesional unggul, untuk Indonesia yang lebih baik"
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Visi */}
                        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-6">
                                <Target size={24} />
                            </div>
                            <h3 className="font-extrabold text-xl text-[#0E2A54] mb-4">Visi Perusahaan</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Menjadi mitra terpercaya dan terdepan dalam pengembangan SDM, konsultasi manajemen, teknologi informasi, dan penyelenggaraan event profesional yang berdampak nyata bagi pertumbuhan organisasi.
                            </p>
                        </div>

                        {/* Misi */}
                        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-6">
                                <Award size={24} />
                            </div>
                            <h3 className="font-extrabold text-xl text-[#0E2A54] mb-4">Misi Perusahaan</h3>
                            <ul className="space-y-2.5 text-slate-600 text-sm leading-relaxed">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></span>
                                    <span>Menyediakan program pelatihan dan pengembangan kompetensi berbasis kebutuhan industri yang praktis dan aplikatif.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></span>
                                    <span>Memberikan layanan konsultasi manajemen dan tata kelola organisasi yang efektif, efisien, dan berorientasi pada perbaikan berkelanjutan.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></span>
                                    <span>Mengembangkan solusi teknologi informasi, sistem berbasis web, dan produk digital yang mendukung transformasi digital klien.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></span>
                                    <span>Menyelenggarakan event, workshop, seminar, dan MICE secara profesional dengan standar kualitas tinggi.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* BUDAYA PERUSAHAAN */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-14">
                        <SectionEyebrow>Values &amp; Culture</SectionEyebrow>
                        <h2 className="text-3xl font-extrabold text-[#0E2A54]">
                            Budaya <span className="text-amber-500">Perusahaan Kami</span>
                        </h2>
                        <p className="text-slate-500 max-w-2xl mx-auto mt-3 text-sm md:text-base">
                            Tiga pilar nilai utama yang menjiwai setiap interaksi, program, dan dedikasi tim kami.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {CULTURE_VALUES.map(({ number, title, desc, icon: Icon }) => (
                            <div
                                key={title}
                                className="group relative bg-[#F8FAFC] rounded-3xl p-8 border border-slate-100 hover:bg-[#0E2A54] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-amber-50 group-hover:bg-amber-500/20 flex items-center justify-center mb-6 transition-colors">
                                    <Icon size={26} className="text-amber-600 group-hover:text-amber-400 transition-colors" />
                                </div>
                                <span className="text-xs font-black text-amber-500 tracking-widest block mb-2 group-hover:text-amber-400">
                                    BUDAYA {number}
                                </span>
                                <h3 className="text-xl font-extrabold text-[#0E2A54] group-hover:text-white mb-3 transition-colors">
                                    {title}
                                </h3>
                                <p className="text-slate-600 group-hover:text-slate-300 text-sm leading-relaxed transition-colors">
                                    {desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TIM MANAJEMEN */}
            <section className="py-20 bg-[#F6F7FA]">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <SectionEyebrow>Leadership Team</SectionEyebrow>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0E2A54]">
                            Jajaran <span className="text-amber-500">Manajemen Perusahaan</span>
                        </h2>
                        <p className="text-slate-500 max-w-2xl mx-auto mt-3 text-sm md:text-base">
                            Dipimpin oleh profesional berdedikasi tinggi yang berkomitmen pada ekselensi dan kepuasan klien.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {BOARD_OF_MANAGEMENT.map(({ name, role, desc, image }) => (
                            <div key={name} className="w-full bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col text-center group">
                                <div className="relative w-full h-[320px] rounded-2xl overflow-hidden bg-slate-100 mb-5 border border-slate-100">
                                    <img
                                        src={image}
                                        alt={name}
                                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <h4 className="text-xl font-extrabold text-[#0E2A54] group-hover:text-amber-600 transition-colors">
                                    {name}
                                </h4>
                                <span className="inline-block px-3 py-1 rounded-full bg-amber-50 text-amber-700 font-bold text-xs mt-2 self-center">
                                    {role}
                                </span>
                                <p className="text-slate-500 text-xs mt-3 leading-relaxed">
                                    {desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight, ArrowLeft,
    GraduationCap, BookOpen, Settings, FileSpreadsheet,
    Globe, Puzzle
} from "lucide-react";

const DIGITAL_PRODUCTS = [
    { icon: GraduationCap, title: "Software edukasi dan produktivitas kerja", desc: "Solusi perangkat lunak untuk mendukung proses pembelajaran dan meningkatkan produktivitas kerja tim." },
    { icon: BookOpen, title: "Software pendukung pelatihan", desc: "Tools dan platform yang mendukung penyelenggaraan program pelatihan secara efektif." },
    { icon: Settings, title: "Tools digital untuk operasional perusahaan", desc: "Perangkat digital yang mengoptimalkan proses operasional harian perusahaan." },
    { icon: FileSpreadsheet, title: "Template digital administrasi, pelatihan, dan pelaporan", desc: "Template siap pakai untuk kebutuhan dokumentasi, administrasi pelatihan, dan pelaporan." },
    { icon: Globe, title: "Sistem berbasis web untuk kebutuhan internal perusahaan", desc: "Platform web internal untuk kolaborasi, manajemen data, dan proses bisnis." },
    { icon: Puzzle, title: "Solusi perangkat lunak sesuai kebutuhan klien", desc: "Pengembangan software custom yang disesuaikan dengan spesifikasi dan kebutuhan unik klien." },
];

export default function DigitalProduct() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex-1 bg-white">
            {/* HERO */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#0E2A54] via-[#163B72] to-[#0E2A54] pt-32 pb-24 text-white">
                <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-400/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9zdmc+')] opacity-60"></div>

                <div className="relative max-w-4xl mx-auto px-6 text-center">
                    <Link
                        to="/layanan"
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 hover:bg-amber-500/20 border border-white/15 hover:border-amber-400/40 text-amber-300 hover:text-amber-200 text-xs font-semibold tracking-wide transition-all duration-300 mb-8 backdrop-blur-md"
                    >
                        <ArrowLeft size={14} />
                        <span>Kembali ke Layanan</span>
                    </Link>

                    <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                        Software & Digital<br />
                        <span className="text-amber-400">Product Provider</span>
                    </h1>

                    <p className="text-slate-300 max-w-3xl mx-auto text-base md:text-lg leading-relaxed font-normal">
                        Berdasarkan <span className="text-white font-semibold">KBLI 47413</span>, CV SEI dapat menyediakan solusi software dan produk digital yang relevan untuk kebutuhan edukasi, bisnis, operasional, dan produktivitas organisasi.
                    </p>
                </div>
            </section>

            {/* PRODUCTS */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-14">
                        <p className="text-xs font-bold tracking-[0.2em] text-amber-600 uppercase mb-3">Produk Digital</p>
                        <h2 className="text-3xl font-extrabold text-[#0E2A54]">
                            Solusi Software & <span className="text-amber-500">Produk Digital</span>
                        </h2>
                        <p className="text-slate-500 max-w-2xl mx-auto mt-3 text-sm md:text-base">
                            Kami menyediakan berbagai produk digital dan software yang dirancang untuk meningkatkan efisiensi dan produktivitas organisasi Anda.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {DIGITAL_PRODUCTS.map(({ icon: Icon, title, desc }, index) => (
                            <div
                                key={title}
                                className={`group relative flex flex-col p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                                    index % 3 === 0
                                        ? "bg-[#0E2A54] border-[#0E2A54] text-white hover:shadow-[#0E2A54]/20"
                                        : "bg-white border-slate-100 text-slate-800 hover:shadow-slate-200/60"
                                }`}
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                                    index % 3 === 0
                                        ? "bg-amber-500/20 text-amber-400"
                                        : "bg-amber-50 text-amber-600"
                                }`}>
                                    <Icon size={22} />
                                </div>
                                <span className={`text-xs font-extrabold mb-1.5 ${
                                    index % 3 === 0 ? "text-amber-400" : "text-amber-500/80"
                                }`}>
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <h3 className={`font-bold text-base mb-3 leading-snug ${
                                    index % 3 === 0 ? "text-white" : "text-[#0E2A54]"
                                }`}>
                                    {title}
                                </h3>
                                <p className={`text-sm leading-relaxed flex-1 ${
                                    index % 3 === 0 ? "text-slate-300" : "text-slate-500"
                                }`}>
                                    {desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="py-20 bg-[#F8FAFC]">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-14">
                        <p className="text-xs font-bold tracking-[0.2em] text-amber-600 uppercase mb-3">Keunggulan</p>
                        <h2 className="text-3xl font-extrabold text-[#0E2A54]">
                            Mengapa Memilih <span className="text-amber-500">Produk Kami?</span>
                        </h2>
                        <p className="text-slate-500 max-w-2xl mx-auto mt-3 text-sm md:text-base">
                            Setiap produk dikembangkan dengan standar kualitas tinggi dan orientasi pada kebutuhan pengguna.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Customizable", desc: "Produk dapat disesuaikan dengan kebutuhan spesifik organisasi Anda." },
                            { title: "User-Friendly", desc: "Antarmuka intuitif yang mudah digunakan oleh semua level pengguna." },
                            { title: "Scalable", desc: "Produk dirancang untuk bertumbuh seiring perkembangan organisasi." },
                            { title: "Secure", desc: "Keamanan data menjadi prioritas dalam setiap produk yang kami kembangkan." },
                            { title: "Support & Maintenance", desc: "Dukungan teknis dan pemeliharaan berkelanjutan setelah implementasi." },
                            { title: "Cost-Effective", desc: "Solusi yang efisien dengan nilai investasi yang optimal." },
                        ].map(({ title, desc }, i) => (
                            <div key={title} className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                                <div className="w-10 h-10 rounded-xl bg-[#0E2A54] text-amber-400 font-extrabold text-xs flex items-center justify-center shrink-0">
                                    {String(i + 1).padStart(2, "0")}
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#0E2A54] text-sm mb-1">{title}</h4>
                                    <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-[#0E2A54] to-[#163B72] text-white">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
                        Butuh Solusi Software untuk Organisasi Anda?
                    </h2>
                    <p className="text-slate-300 mb-8 text-sm md:text-base leading-relaxed">
                        Konsultasikan kebutuhan software dan produk digital Anda. Kami siap menyediakan solusi yang tepat guna dan efisien.
                    </p>
                    <a
                        href="https://wa.me/6281906667944?text=Halo%20CV%20SEI,%20saya%20tertarik%20dengan%20layanan%20Software%20%26%20Digital%20Product%20Provider"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#0E2A54] font-bold px-8 py-3.5 rounded-full transition-colors text-sm shadow-lg shadow-amber-500/20"
                    >
                        <span>Konsultasi Sekarang</span>
                        <ArrowRight size={16} />
                    </a>
                </div>
            </section>
        </div>
    );
}

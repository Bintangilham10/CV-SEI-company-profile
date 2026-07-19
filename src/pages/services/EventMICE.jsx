import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight, ArrowLeft,
    Mic2, Award, TreePine, FileText,
    CheckCircle2
} from "lucide-react";

const EVENT_SERVICES = [
    {
        icon: Mic2,
        title: "Seminar, Workshop & Konferensi",
        items: [
            "Seminar",
            "Workshop",
            "Training corporate",
            "Konferensi",
            "Webinar",
            "Talkshow profesional",
        ],
    },
    {
        icon: Award,
        title: "Sertifikasi & Uji Kompetensi",
        items: [
            "Program sertifikasi bersama mitra terkait",
            "Uji kompetensi profesional",
            "Penerbitan sertifikat kegiatan",
        ],
    },
    {
        icon: TreePine,
        title: "Gathering & Outbound",
        items: [
            "Gathering edukatif",
            "Leadership camp",
            "Outbound training",
            "Team building activities",
        ],
    },
    {
        icon: FileText,
        title: "Pengelolaan Kegiatan Menyeluruh",
        items: [
            "Konsep acara & rundown",
            "Narasumber, trainer, moderator, MC",
            "Dokumentasi kegiatan",
            "Sertifikat & laporan kegiatan",
        ],
    },
];

export default function EventMICE() {
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
                        Event, Workshop,<br />
                        <span className="text-amber-400">Conference & MICE</span>
                    </h1>

                    <p className="text-slate-300 max-w-3xl mx-auto text-base md:text-lg leading-relaxed font-normal">
                        Sesuai <span className="text-white font-semibold">KBLI 82301</span>, CV SEI menyediakan layanan penyelenggaraan kegiatan profesional, baik dalam skala kecil maupun besar. Layanan ini meliputi perencanaan konsep, pengelolaan teknis, dukungan narasumber, registrasi, dokumentasi, hingga laporan kegiatan.
                    </p>
                </div>
            </section>

            {/* EVENT SERVICES */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-14">
                        <p className="text-xs font-bold tracking-[0.2em] text-amber-600 uppercase mb-3">Layanan Event</p>
                        <h2 className="text-3xl font-extrabold text-[#0E2A54]">
                            Kategori <span className="text-amber-500">Layanan Event Kami</span>
                        </h2>
                        <p className="text-slate-500 max-w-2xl mx-auto mt-3 text-sm md:text-base">
                            Layanan penyelenggaraan kegiatan profesional yang komprehensif — dari konsep hingga laporan akhir.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {EVENT_SERVICES.map(({ icon: Icon, title, items }, index) => (
                            <div
                                key={title}
                                className={`group relative flex flex-col p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                                    index % 2 === 0
                                        ? "bg-[#0E2A54] border-[#0E2A54] text-white hover:shadow-[#0E2A54]/20"
                                        : "bg-white border-slate-100 text-slate-800 hover:shadow-slate-200/60"
                                }`}
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                                    index % 2 === 0
                                        ? "bg-amber-500/20 text-amber-400"
                                        : "bg-amber-50 text-amber-600"
                                }`}>
                                    <Icon size={22} />
                                </div>
                                <span className={`text-xs font-extrabold mb-1.5 ${
                                    index % 2 === 0 ? "text-amber-400" : "text-amber-500/80"
                                }`}>
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <h3 className={`font-bold text-lg mb-4 leading-snug ${
                                    index % 2 === 0 ? "text-white" : "text-[#0E2A54]"
                                }`}>
                                    {title}
                                </h3>
                                <ul className="space-y-2.5 flex-1">
                                    {items.map((item) => (
                                        <li key={item} className="flex items-start gap-2.5">
                                            <CheckCircle2 size={16} className={`shrink-0 mt-0.5 ${
                                                index % 2 === 0 ? "text-amber-400" : "text-amber-500"
                                            }`} />
                                            <span className={`text-sm leading-snug ${
                                                index % 2 === 0 ? "text-slate-300" : "text-slate-600"
                                            }`}>
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* EVENT FLOW */}
            <section className="py-20 bg-[#F8FAFC]">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-14">
                        <p className="text-xs font-bold tracking-[0.2em] text-amber-600 uppercase mb-3">Alur Kerja</p>
                        <h2 className="text-3xl font-extrabold text-[#0E2A54]">
                            Proses Penyelenggaraan <span className="text-amber-500">Event</span>
                        </h2>
                        <p className="text-slate-500 max-w-2xl mx-auto mt-3 text-sm md:text-base">
                            Setiap kegiatan dikelola secara profesional dari tahap perencanaan hingga evaluasi akhir.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { step: "01", title: "Konseptualisasi", desc: "Penyusunan konsep acara, tema, dan target peserta" },
                            { step: "02", title: "Persiapan", desc: "Koordinasi narasumber, venue, materi, dan logistik" },
                            { step: "03", title: "Pelaksanaan", desc: "Pengelolaan teknis, registrasi, dan dokumentasi" },
                            { step: "04", title: "Pelaporan", desc: "Evaluasi kegiatan, sertifikat, dan laporan lengkap" },
                        ].map(({ step, title, desc }) => (
                            <div key={step} className="text-center p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                                <div className="w-12 h-12 rounded-xl bg-[#0E2A54] text-amber-400 font-extrabold text-base flex items-center justify-center mx-auto mb-4">
                                    {step}
                                </div>
                                <h3 className="font-bold text-[#0E2A54] mb-2">{title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-[#0E2A54] to-[#163B72] text-white">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
                        Ingin Menyelenggarakan Event Profesional?
                    </h2>
                    <p className="text-slate-300 mb-8 text-sm md:text-base leading-relaxed">
                        Dari seminar kecil hingga konferensi berskala besar — kami siap membantu merencanakan dan mengelola kegiatan Anda secara profesional.
                    </p>
                    <a
                        href="https://wa.me/6281906667944?text=Halo%20CV%20SEI,%20saya%20tertarik%20dengan%20layanan%20Event,%20Workshop,%20Conference%20%26%20MICE"
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

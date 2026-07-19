import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight, CheckCircle2, ArrowLeft,
    BookOpen, Shield, Brain, BarChart3, Briefcase, Users2,
    Megaphone, ClipboardCheck, Wrench, Monitor, Sparkles
} from "lucide-react";

const TRAINING_AREAS = [
    { icon: Monitor, title: "Information Technology & Digital Transformation" },
    { icon: Shield, title: "Cybersecurity & Network Infrastructure" },
    { icon: Brain, title: "Artificial Intelligence & Digital Tools" },
    { icon: BarChart3, title: "Data Analytics & Business Intelligence" },
    { icon: Briefcase, title: "Project Management & Business Management" },
    { icon: Users2, title: "Leadership, Communication & Team Development" },
    { icon: Megaphone, title: "Sales, Marketing & Customer Service" },
    { icon: ClipboardCheck, title: "Quality Management, HSE & Compliance" },
    { icon: Wrench, title: "Industrial, Engineering & Telecommunication" },
    { icon: BookOpen, title: "Office Productivity & Corporate Skill Development" },
];

const EXAMPLE_PROGRAMS = [
    "Artificial Intelligence for Corporate Productivity",
    "Data Analyst for Business & Industry",
    "Cybersecurity Awareness",
    "Network Infrastructure Fundamental",
    "IT Governance & Risk Management",
    "Leadership for High Performance Team",
    "Power BI for Data Visualization",
    "Web Programming & Application Development",
    "IT Support & Helpdesk Operation",
];

export default function TrainingDevelopment() {
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
                        Training & Professional<br />
                        <span className="text-amber-400">Development</span>
                    </h1>
                    
                    <p className="text-slate-300 max-w-3xl mx-auto text-base md:text-lg leading-relaxed font-normal">
                        CV SEI menyediakan layanan pelatihan dan pengembangan kompetensi untuk perusahaan, instansi, lembaga pendidikan, komunitas profesional, dan individu. Program dapat diselenggarakan dalam format <span className="text-white font-semibold">public training</span>, <span className="text-white font-semibold">in-house training</span>, <span className="text-white font-semibold">online training</span>, <span className="text-white font-semibold">hybrid training</span>, maupun <span className="text-white font-semibold">customized program</span>.
                    </p>
                </div>
            </section>

            {/* TRAINING AREAS */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-14">
                        <p className="text-xs font-bold tracking-[0.2em] text-amber-600 uppercase mb-3">Area Pelatihan</p>
                        <h2 className="text-3xl font-extrabold text-[#0E2A54]">
                            Bidang Keahlian <span className="text-amber-500">Pelatihan Kami</span>
                        </h2>
                        <p className="text-slate-500 max-w-2xl mx-auto mt-3 text-sm md:text-base">
                            Mencakup berbagai domain keahlian yang relevan dengan kebutuhan industri dan pengembangan organisasi modern.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {TRAINING_AREAS.map(({ icon: Icon, title }, index) => (
                            <div
                                key={title}
                                className="group relative flex items-start gap-4 p-6 rounded-2xl border border-slate-100 bg-white hover:bg-[#0E2A54] transition-all duration-300 hover:shadow-xl hover:shadow-[#0E2A54]/15 hover:-translate-y-1"
                            >
                                <div className="w-12 h-12 rounded-xl bg-amber-50 group-hover:bg-amber-500/20 flex items-center justify-center shrink-0 transition-colors duration-300">
                                    <Icon size={22} className="text-amber-600 group-hover:text-amber-400 transition-colors duration-300" />
                                </div>
                                <div className="flex-1">
                                    <span className="text-xs font-extrabold text-amber-500/80 group-hover:text-amber-400 transition-colors duration-300 block mb-1">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <h3 className="font-bold text-sm text-[#0E2A54] group-hover:text-white leading-snug transition-colors duration-300">
                                        {title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* EXAMPLE PROGRAMS */}
            <section className="py-20 bg-[#F8FAFC]">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-14">
                        <p className="text-xs font-bold tracking-[0.2em] text-amber-600 uppercase mb-3">Program Unggulan</p>
                        <h2 className="text-3xl font-extrabold text-[#0E2A54]">
                            Contoh <span className="text-amber-500">Program Training</span>
                        </h2>
                        <p className="text-slate-500 max-w-2xl mx-auto mt-3 text-sm md:text-base">
                            Berikut beberapa contoh program pelatihan yang kami selenggarakan. Program dapat disesuaikan dengan kebutuhan spesifik klien.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {EXAMPLE_PROGRAMS.map((program) => (
                            <div
                                key={program}
                                className="flex items-center gap-3.5 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-amber-400/60 transition-all duration-300"
                            >
                                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                                    <Sparkles size={16} />
                                </div>
                                <span className="text-sm font-semibold text-slate-800 leading-snug">{program}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-[#0E2A54] to-[#163B72] text-white">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
                        Siap Mengembangkan Tim Anda?
                    </h2>
                    <p className="text-slate-300 mb-8 text-sm md:text-base leading-relaxed">
                        Konsultasikan kebutuhan pelatihan organisasi Anda bersama kami. Program dapat disesuaikan sepenuhnya sesuai tujuan dan target kompetensi yang diinginkan.
                    </p>
                    <a
                        href="https://wa.me/6281906667944?text=Halo%20CV%20SEI,%20saya%20tertarik%20dengan%20layanan%20Training%20%26%20Professional%20Development"
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

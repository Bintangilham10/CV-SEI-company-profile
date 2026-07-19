import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight, ArrowLeft,
    Globe, Layout, Database, AppWindow, BarChart3,
    FileStack, Wrench, HeadphonesIcon
} from "lucide-react";

const IT_SERVICES = [
    { icon: Globe, title: "Pengembangan website company profile", desc: "Website profesional yang merepresentasikan identitas dan keunggulan perusahaan Anda." },
    { icon: Layout, title: "Pengembangan landing page promosi", desc: "Landing page yang dioptimasi untuk konversi dan kampanye digital marketing." },
    { icon: Database, title: "Pengembangan sistem informasi berbasis web", desc: "Sistem informasi custom yang mendukung kebutuhan operasional dan manajerial." },
    { icon: AppWindow, title: "Pengembangan aplikasi internal perusahaan", desc: "Aplikasi internal untuk meningkatkan efisiensi dan produktivitas tim kerja." },
    { icon: BarChart3, title: "Dashboard reporting dan data visualization", desc: "Dashboard interaktif untuk monitoring, analisis, dan pelaporan data real-time." },
    { icon: FileStack, title: "Digitalisasi proses administrasi", desc: "Transformasi proses manual menjadi sistem digital yang efisien dan terstruktur." },
    { icon: Wrench, title: "Maintenance website dan aplikasi", desc: "Layanan pemeliharaan, update, dan perbaikan untuk memastikan sistem tetap optimal." },
    { icon: HeadphonesIcon, title: "IT support untuk pelatihan dan event", desc: "Dukungan teknis IT untuk kelancaran kegiatan pelatihan, seminar, dan event." },
];

export default function ITSolution() {
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
                        IT Solution &<br />
                        <span className="text-amber-400">Software Development</span>
                    </h1>

                    <p className="text-slate-300 max-w-3xl mx-auto text-base md:text-lg leading-relaxed font-normal">
                        Sesuai <span className="text-white font-semibold">KBLI 62019</span> dan <span className="text-white font-semibold">62090</span>, CV SEI menyediakan layanan teknologi informasi untuk membantu klien mengembangkan sistem digital yang mendukung kebutuhan operasional, promosi, administrasi, pelaporan, dan pengambilan keputusan.
                    </p>
                </div>
            </section>

            {/* IT SERVICES */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-14">
                        <p className="text-xs font-bold tracking-[0.2em] text-amber-600 uppercase mb-3">Solusi IT</p>
                        <h2 className="text-3xl font-extrabold text-[#0E2A54]">
                            Layanan <span className="text-amber-500">Teknologi Kami</span>
                        </h2>
                        <p className="text-slate-500 max-w-2xl mx-auto mt-3 text-sm md:text-base">
                            Solusi teknologi informasi menyeluruh untuk mendukung transformasi digital dan kebutuhan operasional organisasi Anda.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {IT_SERVICES.map(({ icon: Icon, title, desc }, index) => (
                            <div
                                key={title}
                                className="group relative flex gap-5 p-6 rounded-2xl border border-slate-100 bg-white hover:bg-[#0E2A54] transition-all duration-300 hover:shadow-xl hover:shadow-[#0E2A54]/15 hover:-translate-y-1"
                            >
                                <div className="w-14 h-14 rounded-xl bg-amber-50 group-hover:bg-amber-500/20 flex items-center justify-center shrink-0 transition-colors duration-300">
                                    <Icon size={24} className="text-amber-600 group-hover:text-amber-400 transition-colors duration-300" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1.5">
                                        <span className="text-xs font-extrabold text-amber-500/80 group-hover:text-amber-400 transition-colors duration-300">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <h3 className="font-bold text-[#0E2A54] group-hover:text-white leading-snug transition-colors duration-300">
                                            {title}
                                        </h3>
                                    </div>
                                    <p className="text-sm text-slate-500 group-hover:text-slate-300 leading-relaxed transition-colors duration-300">
                                        {desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TECH PROCESS */}
            <section className="py-20 bg-[#F8FAFC]">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-14">
                        <p className="text-xs font-bold tracking-[0.2em] text-amber-600 uppercase mb-3">Proses Kerja</p>
                        <h2 className="text-3xl font-extrabold text-[#0E2A54]">
                            Alur Pengembangan <span className="text-amber-500">Proyek IT</span>
                        </h2>
                        <p className="text-slate-500 max-w-2xl mx-auto mt-3 text-sm md:text-base">
                            Setiap proyek dikerjakan dengan metodologi terstruktur untuk memastikan kualitas dan ketepatan waktu.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
                        {[
                            { step: "01", title: "Discovery", desc: "Analisis kebutuhan & requirement gathering" },
                            { step: "02", title: "Design", desc: "UI/UX design & arsitektur sistem" },
                            { step: "03", title: "Development", desc: "Implementasi dan coding" },
                            { step: "04", title: "Testing", desc: "Quality assurance & user testing" },
                            { step: "05", title: "Deployment", desc: "Launch & maintenance" },
                        ].map(({ step, title, desc }) => (
                            <div key={step} className="text-center p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                                <div className="w-12 h-12 rounded-xl bg-[#0E2A54] text-amber-400 font-extrabold text-base flex items-center justify-center mx-auto mb-3">
                                    {step}
                                </div>
                                <h3 className="font-bold text-[#0E2A54] mb-1 text-sm">{title}</h3>
                                <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-[#0E2A54] to-[#163B72] text-white">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
                        Butuh Solusi IT untuk Bisnis Anda?
                    </h2>
                    <p className="text-slate-300 mb-8 text-sm md:text-base leading-relaxed">
                        Diskusikan kebutuhan teknologi organisasi Anda. Kami siap membantu merancang dan mengembangkan sistem digital yang tepat guna.
                    </p>
                    <a
                        href="https://wa.me/6281906667944?text=Halo%20CV%20SEI,%20saya%20tertarik%20dengan%20layanan%20IT%20Solution%20%26%20Software%20Development"
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

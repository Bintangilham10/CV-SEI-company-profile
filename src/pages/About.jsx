import React, { useEffect, useRef } from "react";
import SectionEyebrow from "../components/SectionEyebrow";
import {
    Sliders, Laptop2, Sparkles, Users2, Target, ShieldCheck, CheckCircle2
} from "lucide-react";
import gsap from "gsap";

const CLIENT_LOGOS = [
    // Bank BRI
    () => (
        <div className="flex flex-col items-center justify-center p-3 bg-white rounded-xl shadow-sm border border-slate-100/60 hover:shadow-md transition-all duration-300 w-36 h-20 select-none">
            <svg className="h-7 w-auto" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="5" width="30" height="30" rx="6" fill="#00529C" />
                <path d="M12 12 H28 M12 20 H28 M12 28 H20" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
                <text x="45" y="28" fill="#00529C" fontSize="24" fontWeight="900" fontFamily="sans-serif">BRI</text>
            </svg>
            <span className="text-[9px] font-medium text-slate-400 mt-1.5">Bank BRI</span>
        </div>
    ),
    // Bank Mandiri
    () => (
        <div className="flex flex-col items-center justify-center p-3 bg-white rounded-xl shadow-sm border border-slate-100/60 hover:shadow-md transition-all duration-300 w-36 h-20 select-none">
            <img src="Telkom.webp" className="h-7 w-auto" viewBox="0 0 140 40" fill="none" xmlns="Telkom.webp" />
            <span className="text-[9px] font-medium text-slate-400 mt-1.5">Telkom</span>
        </div>
    ),
    // Telkom Indonesia
    () => (
        <div className="flex flex-col items-center justify-center p-3 bg-white rounded-xl shadow-sm border border-slate-100/60 hover:shadow-md transition-all duration-300 w-36 h-20 select-none">
            <svg className="h-7 w-auto" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="15" fill="#E31B23" />
                <circle cx="20" cy="20" r="8" fill="#FFFFFF" />
                <path d="M20 12 A 8 8 0 0 1 28 20" stroke="#E31B23" strokeWidth="3" fill="none" />
                <text x="45" y="23" fill="#111111" fontSize="16" fontWeight="bold" fontFamily="sans-serif">Telkom</text>
                <text x="45" y="33" fill="#777777" fontSize="10" fontWeight="semibold" letterSpacing="0.5" fontFamily="sans-serif">Indonesia</text>
            </svg>
            <span className="text-[9px] font-medium text-slate-400 mt-1.5">Telkom Indonesia</span>
        </div>
    ),
    // Pertamina
    () => (
        <div className="flex flex-col items-center justify-center p-3 bg-white rounded-xl shadow-sm border border-slate-100/60 hover:shadow-md transition-all duration-300 w-36 h-20 select-none">
            <svg className="h-7 w-auto" viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 8 L18 8 L13 32 L5 32 Z" fill="#004F9F" />
                <path d="M21 8 L38 8 L35 19 L21 19 Z" fill="#009B4E" />
                <path d="M21 21 L35 21 L32 32 L21 32 Z" fill="#E31B23" />
                <text x="45" y="27" fill="#004F9F" fontSize="18" fontWeight="black" fontFamily="sans-serif">PERTAMINA</text>
            </svg>
            <span className="text-[9px] font-medium text-slate-400 mt-1.5">Pertamina</span>
        </div>
    ),
];

const CERTIFICATE_LOGOS = [
    // BNSP
    () => (
        <div className="flex flex-col items-center justify-center p-3 bg-white rounded-xl shadow-sm border border-slate-100/60 hover:shadow-md transition-all duration-300 w-36 h-20 select-none">
            <svg className="h-8 w-auto" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="40" rx="6" fill="#0A3A60" />
                <text x="50" y="25" fill="#EAAA08" fontSize="15" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">BNSP</text>
                <text x="50" y="33" fill="#FFFFFF" fontSize="6.5" textAnchor="middle" letterSpacing="0.8" fontFamily="sans-serif">SERTIFIKASI</text>
            </svg>
            <span className="text-[9px] font-bold text-[#0E2A54] mt-1.5">Sertifikasi Nasional</span>
        </div>
    ),
    // ISO 9001
    () => (
        <div className="flex flex-col items-center justify-center p-3 bg-white rounded-xl shadow-sm border border-slate-100/60 hover:shadow-md transition-all duration-300 w-36 h-20 select-none">
            <svg className="h-8 w-auto" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="14" fill="#0E2A54" />
                <text x="20" y="24" fill="#FFFFFF" fontSize="10" fontWeight="black" textAnchor="middle" fontFamily="sans-serif">ISO</text>
                <text x="62" y="20" fill="#0E2A54" fontSize="12" fontWeight="extrabold" fontFamily="sans-serif">9001</text>
                <text x="62" y="30" fill="#EAAA08" fontSize="8" fontWeight="bold" letterSpacing="0.5" fontFamily="sans-serif">CERTIFIED</text>
            </svg>
            <span className="text-[9px] font-bold text-[#0E2A54] mt-1.5">Standar Mutu</span>
        </div>
    ),
    // KAN
    () => (
        <div className="flex flex-col items-center justify-center p-3 bg-white rounded-xl shadow-sm border border-slate-100/60 hover:shadow-md transition-all duration-300 w-36 h-20 select-none">
            <svg className="h-8 w-auto" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 5 H40 L35 35 H10 Z" fill="#D32F2F" />
                <text x="23" y="24" fill="#FFFFFF" fontSize="11" fontWeight="black" textAnchor="middle" fontFamily="sans-serif">KAN</text>
                <text x="68" y="20" fill="#0E2A54" fontSize="7" fontWeight="bold" fontFamily="sans-serif">Akreditasi</text>
                <text x="68" y="30" fill="#0E2A54" fontSize="7" fontWeight="bold" fontFamily="sans-serif">Nasional</text>
            </svg>
            <span className="text-[9px] font-bold text-[#0E2A54] mt-1.5">Akreditasi Resmi</span>
        </div>
    ),
    // Microsoft
    () => (
        <div className="flex flex-col items-center justify-center p-3 bg-white rounded-xl shadow-sm border border-slate-100/60 hover:shadow-md transition-all duration-300 w-36 h-20 select-none">
            <svg className="h-7 w-auto" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="5" width="9" height="9" fill="#F25022" />
                <rect x="16" y="5" width="9" height="9" fill="#7FBA00" />
                <rect x="5" y="16" width="9" height="9" fill="#00A4EF" />
                <rect x="16" y="16" width="9" height="9" fill="#FFB900" />
                <text x="30" y="17" fill="#737373" fontSize="13" fontWeight="600" fontFamily="sans-serif">Microsoft</text>
            </svg>
            <span className="text-[9px] font-medium text-slate-400 mt-1.5">Sertifikasi IT</span>
        </div>
    ),
    // Cisco
    () => (
        <div className="flex flex-col items-center justify-center p-3 bg-white rounded-xl shadow-sm border border-slate-100/60 hover:shadow-md transition-all duration-300 w-36 h-20 select-none">
            <svg className="h-7 w-auto" viewBox="0 0 100 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="20" y1="20" x2="20" y2="5" stroke="#049FD9" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="28" y1="20" x2="28" y2="10" stroke="#049FD9" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="36" y1="20" x2="36" y2="3" stroke="#049FD9" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="44" y1="20" x2="44" y2="12" stroke="#049FD9" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="52" y1="20" x2="52" y2="12" stroke="#049FD9" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="60" y1="20" x2="60" y2="3" stroke="#049FD9" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="68" y1="20" x2="68" y2="10" stroke="#049FD9" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="76" y1="20" x2="76" y2="5" stroke="#049FD9" strokeWidth="2.5" strokeLinecap="round" />
                <text x="48" y="31" fill="#049FD9" fontSize="10" fontWeight="bold" textAnchor="middle" letterSpacing="0.5" fontFamily="sans-serif">cisco</text>
            </svg>
            <span className="text-[9px] font-medium text-slate-400 mt-1.5">Sertifikasi Jaringan</span>
        </div>
    ),
    // VMware
    () => (
        <div className="flex flex-col items-center justify-center p-3 bg-white rounded-xl shadow-sm border border-slate-100/60 hover:shadow-md transition-all duration-300 w-36 h-20 select-none">
            <svg className="h-7 w-auto" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 6 L15 6 L11 14 L5 14 Z" fill="#6C7A89" />
                <path d="M17 6 L27 6 L23 14 L17 14 Z" fill="#0095D3" />
                <path d="M11 16 L21 16 L17 24 L11 24 Z" fill="#0095D3" />
                <text x="32" y="18" fill="#4B6584" fontSize="13" fontWeight="bold" fontFamily="sans-serif">vmware</text>
            </svg>
            <span className="text-[9px] font-medium text-slate-400 mt-1.5">Sertifikasi Cloud</span>
        </div>
    ),
];

export default function About() {
    const marqueeKlienRef = useRef(null);
    const timelineKlienRef = useRef(null);

    const marqueeSertifikasiRef = useRef(null);
    const timelineSertifikasiRef = useRef(null);

    useEffect(() => {
        const marqueeKlien = marqueeKlienRef.current;
        const marqueeSertifikasi = marqueeSertifikasiRef.current;

        let tlKlien, tlSertifikasi;

        // Using a short delay to ensure layouts are computed properly
        const timeoutId = setTimeout(() => {
            if (marqueeKlien) {
                const widthKlien = marqueeKlien.scrollWidth / 2;
                tlKlien = gsap.to(marqueeKlien, {
                    x: -widthKlien,
                    duration: 20, // speed
                    ease: "none",
                    repeat: -1,
                });
                timelineKlienRef.current = tlKlien;
            }

            if (marqueeSertifikasi) {
                const widthSertifikasi = marqueeSertifikasi.scrollWidth / 2;
                tlSertifikasi = gsap.to(marqueeSertifikasi, {
                    x: -widthSertifikasi,
                    duration: 25, // speed
                    ease: "none",
                    repeat: -1,
                });
                timelineSertifikasiRef.current = tlSertifikasi;
            }
        }, 100);

        return () => {
            clearTimeout(timeoutId);
            if (tlKlien) tlKlien.kill();
            if (tlSertifikasi) tlSertifikasi.kill();
        };
    }, []);

    const handleMouseEnterKlien = () => {
        if (timelineKlienRef.current) {
            timelineKlienRef.current.pause();
        }
    };

    const handleMouseLeaveKlien = () => {
        if (timelineKlienRef.current) {
            timelineKlienRef.current.play();
        }
    };

    const handleMouseEnterSertifikasi = () => {
        if (timelineSertifikasiRef.current) {
            timelineSertifikasiRef.current.pause();
        }
    };

    const handleMouseLeaveSertifikasi = () => {
        if (timelineSertifikasiRef.current) {
            timelineSertifikasiRef.current.play();
        }
    };

    return (
        <div className="flex-1">
            {/* HERO SECTION */}
            <section className="relative pt-36 pb-24 bg-gradient-to-br from-[#0E2A54] via-[#123668] to-[#081B38] text-white overflow-hidden">
                {/* Decorative background grid & circles */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px]"></div>
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 -left-12 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-amber-400 uppercase mb-4 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
                        <Sparkles size={14} className="animate-pulse" /> Fasilitas &amp; Benefit
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
                        Investasi Terbaik untuk Sukses <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">Transformasi Digital</span> Anda
                    </h1>
                    <p className="text-slate-300 max-w-3xl mx-auto text-base md:text-lg leading-relaxed font-light">
                        Kami berkomitmen menghadirkan ekosistem pelatihan, konsultasi, dan teknologi terlengkap yang fleksibel,
                        customizable, serta berorientasi pada praktik nyata dan legalitas hukum yang terjamin.
                    </p>
                </div>
            </section>

            {/* FASILITAS & BENEFIT UTAMA */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#0E2A54] text-center mb-4">
                        Fasilitas &amp; Benefit
                    </h2>
                    <p className="text-center text-slate-500 max-w-2xl mx-auto mb-16 text-sm md:text-base">
                        Kami merancang setiap fasilitas dan layanan untuk memberikan kenyamanan, fleksibilitas tinggi, serta nilai tambah maksimal bagi organisasi Anda.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
                        {/* CARD 1: Program Fleksibel */}
                        <div className="group relative bg-[#F6F7FA] rounded-3xl p-8 lg:p-10 border border-slate-100 hover:border-amber-400/50 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-amber-500/5 flex flex-col justify-between overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400/5 rounded-bl-full group-hover:bg-amber-400/10 transition-colors"></div>
                            <div>
                                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Sliders size={28} />
                                </div>
                                <h3 className="font-extrabold text-xl text-[#0E2A54] mb-4">
                                    Program Fleksibel &amp; Customizable
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                    Kami memahami bahwa setiap organisasi memiliki tantangan dan kebutuhan unik. Oleh karena itu, program kami dirancang agar sepenuhnya fleksibel dan dapat dikustomisasi sesuai profil Anda.
                                </p>
                                <ul className="space-y-3.5 mb-8">
                                    {[
                                        "Kurikulum & materi disesuaikan dengan sasaran strategis instansi.",
                                        "Metode belajar adaptif (Offline Tatap Muka, Online/Webinar, atau Hybrid).",
                                        "Penjadwalan, lokasi pelaksanaan, dan durasi kelas yang fleksibel."
                                    ].map((point, idx) => (
                                        <li key={idx} className="flex gap-3 text-sm text-slate-600 items-start">
                                            <CheckCircle2 size={18} className="text-amber-500 shrink-0 mt-0.5" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="pt-2 border-t border-slate-200/60">
                                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Tailored Solutions</span>
                            </div>
                        </div>

                        {/* CARD 2: Transformasi Digital */}
                        <div className="group relative bg-[#0E2A54] text-white rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-xl shadow-blue-900/10 hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full group-hover:bg-white/10 transition-colors"></div>
                            <div>
                                <div className="w-14 h-14 rounded-2xl bg-amber-400 text-[#0E2A54] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Laptop2 size={28} />
                                </div>
                                <h3 className="font-extrabold text-xl text-white mb-4">
                                    Mendukung Transformasi Digital
                                </h3>
                                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                                    Kami membantu organisasi mempercepat adaptasi teknologi melalui pembuatan perangkat lunak kustom dan implementasi sistem kerja digital yang modern serta efisien.
                                </p>
                                <ul className="space-y-3.5 mb-8">
                                    {[
                                        "Pembuatan website dinamis, landing page interaktif, dan web aplikasi.",
                                        "Pengembangan dashboard reporting real-time dan visualisasi data.",
                                        "Penyediaan software penunjang administrasi dan produktivitas kerja."
                                    ].map((point, idx) => (
                                        <li key={idx} className="flex gap-3 text-sm text-slate-300 items-start">
                                            <CheckCircle2 size={18} className="text-amber-400 shrink-0 mt-0.5" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="pt-2 border-t border-white/10">
                                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Digital First Integration</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* KLIEN KAMI */}
            <section className="py-20 bg-none">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionEyebrow>Kemitraan Strategis</SectionEyebrow>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#0E2A54] text-center mb-4">
                        Klien Kami
                    </h2>
                    <p className="text-center text-slate-500 max-w-2xl mx-auto mb-12 text-sm md:text-base">
                        Program kami telah dipercaya dan diimplementasikan di berbagai perusahaan dan instansi terkemuka di Indonesia.
                    </p>

                    {/* GSAP Marquee Container */}
                    <div
                        className="relative w-full overflow-hidden py-12 px-6 flex items-center cursor-pointer transition-shadow duration-300 group"
                        onMouseEnter={handleMouseEnterKlien}
                        onMouseLeave={handleMouseLeaveKlien}
                    >
                        {/* Fade gradients at the edges */}
                        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
                        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

                        <div
                            ref={marqueeKlienRef}
                            className="flex gap-12 items-center whitespace-nowrap will-change-transform"
                        >
                            {/* Logo List */}
                            {CLIENT_LOGOS.map((Logo, idx) => (
                                <div key={`orig-klien-${idx}`} className="shrink-0">
                                    <Logo />
                                </div>
                            ))}
                            {/* Duplicated Logo List for seamless scrolling */}
                            {CLIENT_LOGOS.map((Logo, idx) => (
                                <div key={`dup-klien-${idx}`} className="shrink-0">
                                    <Logo />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-20 bg-[#F6F7FA] border-t border-slate-100/60">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionEyebrow>Mengapa Memilih Kami</SectionEyebrow>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#0E2A54] text-center mb-4">
                        Keunggulan Utama <span className="text-amber-500">CV SEI</span>
                    </h2>
                    <p className="text-center text-slate-500 max-w-2xl mx-auto mb-16 text-sm md:text-base">
                        Dengan pengalaman luas dan dedikasi profesional, kami memberikan fondasi kokoh untuk kesuksesan operasional dan kualitas SDM Anda.
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: Target,
                                title: "Berorientasi Praktik",
                                desc: "Program kami mengedepankan praktik langsung dan implementasi nyata di lapangan, bukan hanya teori abstrak.",
                                badge: "Aplikatif"
                            },
                            {
                                icon: ShieldCheck,
                                title: "Legalitas Usaha Jelas",
                                desc: "Kredibilitas terjamin dengan legalitas badan usaha resmi dan NIB yang diterbitkan langsung via sistem OSS.",
                                badge: "Terverifikasi"
                            },
                            {
                                icon: Users2,
                                title: "Trainer & Konsultan Berpengalaman",
                                desc: "Didukung oleh tenaga pelatih, konsultan ahli, dan praktisi industri yang kompeten di bidangnya masing-masing.",
                                badge: "Ahli & Profesional"
                            },
                            {
                                icon: Sparkles,
                                title: "Layanan Terintegrasi",
                                desc: "Solusi satu atap yang mencakup pelatihan, konsultasi manajemen, produk software, dan penyelenggaraan event/MICE.",
                                badge: "Ekosistem Lengkap"
                            }
                        ].map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div key={idx} className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-100/80 hover:border-amber-400/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                                    <div>
                                        <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#0E2A54] flex items-center justify-center mb-5 group-hover:bg-[#0E2A54] group-hover:text-white transition-all duration-300">
                                            <Icon size={22} className="text-amber-500 group-hover:text-amber-400 transition-colors" />
                                        </div>
                                        <h3 className="font-bold text-base text-[#0E2A54] mb-3 leading-snug group-hover:text-amber-600 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-500 text-xs leading-relaxed mb-4">
                                            {item.desc}
                                        </p>
                                    </div>
                                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                                        <span className="text-[10px] font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                                            {item.badge}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* LEMBAGA SERTIFIKASI */}
            <section className="py-20 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionEyebrow>Standar Kompetensi &amp; Mutu</SectionEyebrow>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#0E2A54] text-center mb-4">
                        Lembaga Sertifikasi
                    </h2>
                    <p className="text-center text-slate-500 max-w-2xl mx-auto mb-12 text-sm md:text-base">
                        Kurikulum program kami mengacu pada standar kompetensi sertifikasi resmi nasional dan internasional terpercaya.
                    </p>

                    {/* GSAP Marquee Container */}
                    <div
                        className="relative w-full overflow-hidden py-12 px-6 flex items-center cursor-pointer transition-shadow duration-300 group"
                        onMouseEnter={handleMouseEnterSertifikasi}
                        onMouseLeave={handleMouseLeaveSertifikasi}
                    >
                        {/* Fade gradients at the edges */}
                        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
                        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

                        <div
                            ref={marqueeSertifikasiRef}
                            className="flex gap-12 items-center whitespace-nowrap will-change-transform"
                        >
                            {/* Logo List */}
                            {CERTIFICATE_LOGOS.map((Logo, idx) => (
                                <div key={`orig-sert-${idx}`} className="shrink-0">
                                    <Logo />
                                </div>
                            ))}
                            {/* Duplicated Logo List for seamless scrolling */}
                            {CERTIFICATE_LOGOS.map((Logo, idx) => (
                                <div key={`dup-sert-${idx}`} className="shrink-0">
                                    <Logo />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}


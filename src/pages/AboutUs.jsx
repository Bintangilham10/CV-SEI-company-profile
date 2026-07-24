import React, { useRef, useEffect } from "react";
import SectionEyebrow from "../components/SectionEyebrow";
import { Sparkles, ShieldCheck, Mail, Target, Award, Users } from "lucide-react";
import gsap from "gsap";

function TeamCardBambang() {
    const cardRef = useRef(null);
    const img1Ref = useRef(null);
    const img2Ref = useRef(null);

    useEffect(() => {
        const card = cardRef.current;
        const img1 = img1Ref.current;
        const img2 = img2Ref.current;

        // Initial setup
        gsap.set(img2, { opacity: 0, scale: 1.05 });

        const handleMouseEnter = () => {
            // Crossfade poses
            gsap.to(img1, { opacity: 0, duration: 0.35, ease: "power2.out" });
            gsap.to(img2, { opacity: 1, scale: 1, duration: 0.45, ease: "power2.out" });
        };

        const handleMouseLeave = () => {
            gsap.to(img1, { opacity: 1, duration: 0.35, ease: "power2.inOut" });
            gsap.to(img2, { opacity: 0, scale: 1.05, duration: 0.45, ease: "power2.inOut" });
        };

        card.addEventListener("mouseenter", handleMouseEnter);
        card.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            card.removeEventListener("mouseenter", handleMouseEnter);
            card.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <div
            ref={cardRef}
            className="w-full max-w-sm mx-auto flex flex-col text-center group cursor-pointer"
        >
            {/* Photo Container */}
            <div className="relative w-full h-[360px] rounded-3xl overflow-hidden bg-slate-100 shadow-lg mb-5 border border-slate-100">
                {/* Pose 1 - Default */}
                <img
                    ref={img1Ref}
                    src="/satu.png"
                    alt="Bambang - Pose Utama"
                    className="absolute inset-0 w-full h-full object-cover object-top z-10 transition-transform duration-700 group-hover:scale-105"
                />

                {/* Pose 2 - Cyber Mode */}
                <img
                    ref={img2Ref}
                    src="/dua.png"
                    alt="Bambang - Pose Cyber"
                    className="absolute inset-0 w-full h-full object-cover object-top z-25"
                />
            </div>

            {/* Name & Job Title */}
            <div className="flex flex-col items-center">
                <h4 className="text-2xl font-extrabold text-[#0E2A54] group-hover:text-amber-500 transition-colors duration-300">
                    Bambang
                </h4>
                <p className="text-slate-500 text-sm font-semibold mt-1">
                    Cyber Security Specialist
                </p>
            </div>
        </div>
    );
}

export default function AboutUs() {
    return (
        <div className="flex-1 bg-[#F6F7FA]">
            {/* HERO SECTION */}
            <section className="relative pt-36 pb-24 bg-gradient-to-br from-[#0E2A54] via-[#123668] to-[#081B38] text-white overflow-hidden">
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px]"></div>
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 -left-12 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
                        Mengenal Lebih Dekat <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">CV Solusi Edukasi Indonesia</span>
                    </h1>
                    <p className="text-slate-300 max-w-3xl mx-auto text-base md:text-lg leading-relaxed font-light">
                        Kami adalah mitra strategis tepercaya dalam pengembangan Sumber Daya Manusia (SDM) dan percepatan transformasi digital instansi maupun perusahaan di Indonesia.
                    </p>
                </div>
            </section>

            {/* SEJARAH & LEGALITAS */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <SectionEyebrow>Profil Perusahaan</SectionEyebrow>
                            <h2 className="text-3xl font-extrabold text-[#0E2A54] mb-6 leading-tight">
                                Dedikasi Mewujudkan <span className="text-amber-500">SDM Kompeten</span>
                            </h2>
                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                CV Solusi Edukasi Indonesia (SEI) hadir sebagai lembaga yang berfokus pada penyedia solusi edukasi, pelatihan sertifikasi, konsultasi manajemen, teknologi informasi, hingga penyelenggaraan event skala nasional.
                            </p>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Didirikan dengan komitmen kuat untuk menjembatani kesenjangan kompetensi tenaga kerja di era transformasi digital, kami memastikan setiap program dirancang secara aplikatif dan berdampak langsung pada kinerja organisasi.
                            </p>
                        </div>
                        <div className="bg-[#0E2A54] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-bl-full"></div>
                            <h3 className="text-xl font-extrabold text-amber-400 mb-6 flex items-center gap-2">
                                <ShieldCheck size={24} /> Legalitas Resmi Perusahaan
                            </h3>
                            <ul className="space-y-4 text-xs text-slate-200">
                                <li className="flex justify-between border-b border-white/10 pb-2">
                                    <span className="font-semibold text-slate-400">Nama Perusahaan</span>
                                    <span>CV Solusi Edukasi Indonesia</span>
                                </li>
                                <li className="flex justify-between border-b border-white/10 pb-2">
                                    <span className="font-semibold text-slate-400">Bentuk Badan Usaha</span>
                                    <span>Persekutuan Komanditer (CV)</span>
                                </li>
                                <li className="flex justify-between border-b border-white/10 pb-2">
                                    <span className="font-semibold text-slate-400">NIB (Nomor Induk Berusaha)</span>
                                    <span className="font-mono text-amber-300">2205260161665</span>
                                </li>
                                <li className="flex justify-between border-b border-white/10 pb-2">
                                    <span className="font-semibold text-slate-400">NPWP</span>
                                    <span className="font-mono">100000009726986</span>
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

            {/* VISI & MISI */}
            <section className="py-20 bg-[#F6F7FA]">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Visi */}
                        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-6">
                                <Target size={24} />
                            </div>
                            <h3 className="font-extrabold text-xl text-[#0E2A54] mb-4">Visi Kami</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Menjadi top of mind lembaga pelatihan dan sertifikasi profesional industri di Indonesia.
                            </p>
                        </div>
                        {/* Misi */}
                        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-6">
                                <Award size={24} />
                            </div>
                            <h3 className="font-extrabold text-xl text-[#0E2A54] mb-4">Misi Kami</h3>
                            <ul className="space-y-2">
                                {[
                                    "Membangun tim yang kompeten, adaptif, dan berkemauan untuk terus belajar.",
                                    "Membangun sistem operasional yang kolaboratif.",
                                    "Memberikan pelayanan yang profesional, responsif, dan solutif.",
                                    "Memperkuat fondasi pertumbuhan perusahaan.",
                                ].map((m, i) => (
                                    <li key={i} className="flex gap-2 text-slate-600 text-sm leading-relaxed">
                                        <span className="text-amber-500 font-bold shrink-0">{i + 1}.</span> {m}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* TIM AHLI / SPECIALIST TEAM */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionEyebrow>Tim Kepemimpinan</SectionEyebrow>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#0E2A54] text-center mb-4">
                        Leadership <span className="text-amber-500">Team</span>
                    </h2>
                    <p className="text-center text-slate-500 max-w-2xl mx-auto mb-16 text-sm md:text-base">
                        Dipimpin oleh para ahli yang berpengalaman dalam membangun solusi edukasi dan pengembangan SDM untuk masa depan Indonesia.
                    </p>

                    <div className="grid md:grid-cols-3 gap-12 items-start max-w-5xl mx-auto">

                        {/* Card 1: Komisaris */}
                        <div className="w-full max-w-sm mx-auto flex flex-col text-center group cursor-pointer">
                            <div className="relative w-full h-[360px] rounded-3xl overflow-hidden bg-slate-100 shadow-lg mb-5 border border-slate-100">
                                <img
                                    src="/ahmad.png"
                                    alt="Franciska Sukamdewi Megawati"
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="flex flex-col items-center">
                                <h4 className="text-2xl font-extrabold text-[#0E2A54] group-hover:text-amber-500 transition-colors duration-300">
                                    Franciska Sukamdewi Megawati
                                </h4>
                                <p className="text-slate-500 text-sm font-semibold mt-1">
                                    Komisaris
                                </p>
                            </div>
                        </div>

                        {/* Card 2: Direktur */}
                        <div className="w-full max-w-sm mx-auto flex flex-col text-center group cursor-pointer">
                            <div className="relative w-full h-[360px] rounded-3xl overflow-hidden bg-slate-100 shadow-lg mb-5 border border-slate-100">
                                <img
                                    src="/satu.png"
                                    alt="Yana Mulyana"
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="flex flex-col items-center">
                                <h4 className="text-2xl font-extrabold text-[#0E2A54] group-hover:text-amber-500 transition-colors duration-300">
                                    Yana Mulyana
                                </h4>
                                <p className="text-slate-500 text-sm font-semibold mt-1">
                                    Direktur
                                </p>
                            </div>
                        </div>

                        {/* Card 3: Keuangan */}
                        <div className="w-full max-w-sm mx-auto flex flex-col text-center group cursor-pointer">
                            <div className="relative w-full h-[360px] rounded-3xl overflow-hidden bg-slate-100 shadow-lg mb-5 border border-slate-100">
                                <img
                                    src="/siti.png"
                                    alt="Setiani Hafsah"
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="flex flex-col items-center">
                                <h4 className="text-2xl font-extrabold text-[#0E2A54] group-hover:text-amber-500 transition-colors duration-300">
                                    Setiani Hafsah
                                </h4>
                                <p className="text-slate-500 text-sm font-semibold mt-1">
                                    Keuangan
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

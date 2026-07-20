import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Globe, Instagram, Linkedin, Youtube } from "lucide-react";
import { NAV_LINKS } from "./Navbar";

// Custom TikTok icon matching Lucide stroke style
const Tiktok = ({ size = 14, ...props }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
);

const SERVICES = [
    { title: "Training & Professional Development", href: "/layanan/training-development" },
    { title: "Management Consulting", href: "/layanan/management-consulting" },
    { title: "IT Solution & Software Development", href: "/layanan/it-solution" },
    { title: "Software & Digital Product Provider", href: "/layanan/digital-product" },
    { title: "Event, Workshop, Conference & MICE", href: "/layanan/event-mice" },
];

export default function Footer() {
    return (
        <footer className="bg-[#0A2043] text-slate-400 text-sm mt-auto">
            <div className="max-w-7xl mx-auto px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-[2.2fr_1fr_2fr_2.3fr] gap-x-6 gap-y-8">
                <div>
                    {/* DUAL LOGO IN FOOTER */}
                    <div className="flex items-center gap-3 mb-4 bg-white/5 p-3 rounded-2xl border border-white/10 w-fit">
                        <img src="/edutech.png" alt="Edutech Solution" className="h-10 w-auto object-contain" />
                        <div className="h-6 w-[1px] bg-white/20"></div>
                        <img src="/sei1.png" alt="CV Solusi Edukasi Indonesia" className="h-10 w-auto object-contain mix-blend-multiply bg-white rounded-lg p-0.5" />
                    </div>
                    
                    <div className="mb-3">
                        <p className="font-extrabold text-white text-base leading-tight">Edutech Solution</p>
                        <p className="text-[10px] text-amber-400 font-medium">CV Solusi Edukasi Indonesia | NIB: 2205260161665</p>
                    </div>

                    <p className="text-xs font-semibold text-amber-300 mb-2">
                        "Edutech Solution: Pelatihan Praktis dan Aplikatif"
                    </p>
                    <p className="text-xs leading-relaxed mb-3">
                        Mitra strategis dalam pengembangan SDM, konsultasi manajemen, IT solution, software, dan event profesional.
                    </p>
                    <p className="text-[11px] text-slate-300 italic mb-1">"Empowering People, Transforming Organizations"</p>
                    <p className="text-[11px] text-amber-400/90 font-medium">Purpose: "Mencetak profesional unggul, untuk Indonesia yang lebih baik"</p>
                </div>
                
                <div>
                    <p className="font-semibold text-white mb-4 text-sm">Navigasi</p>
                    <ul className="space-y-2 text-xs">
                        {NAV_LINKS.map((l) => (
                            <li key={l.label}>
                                <Link to={l.href} className="hover:text-amber-400 transition-colors">
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div>
                    <p className="font-semibold text-white mb-4 text-sm">Layanan</p>
                    <ul className="space-y-2 text-xs">
                        {SERVICES.map(({ title, href }) => (
                            <li key={title}>
                                <Link to={href} className="hover:text-amber-400 transition-colors">
                                    {title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div>
                    <p className="font-semibold text-white mb-4 text-sm">Kontak &amp; Alamat</p>
                    <ul className="space-y-2.5 text-xs mb-4">
                        <li className="flex gap-2 items-start">
                            <MapPin size={13} className="text-amber-400 mt-0.5 shrink-0" />
                            <span>Jl. Saluyu XII A No. 42, Cipamokolan, Rancasari, Bandung 40232</span>
                        </li>
                        <li className="flex gap-2 items-center">
                            <Phone size={13} className="text-amber-400 shrink-0" />
                            <span>081906667944</span>
                        </li>
                        <li className="flex gap-2 items-center">
                            <Mail size={13} className="text-amber-400 shrink-0" />
                            <span>info@edutechsolution.co.id / solusiedukasiindonesia@gmail.com</span>
                        </li>
                        <li className="flex gap-2 items-center">
                            <Globe size={13} className="text-amber-400 shrink-0" />
                            <span>www.edutechsolution.co.id</span>
                        </li>
                    </ul>
                    
                    <div className="flex items-center gap-2.5 pt-3 border-t border-white/10">
                        <a href="https://www.instagram.com/sei_solusiedukasi?igsh=MWx2Mmd5MThxM3o4aQ==" className="w-8 h-8 rounded-full bg-white/5 hover:bg-amber-400 hover:text-[#0E2A54] flex items-center justify-center transition-all duration-300 text-slate-300" aria-label="Instagram">
                            <Instagram size={14} />
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-amber-400 hover:text-[#0E2A54] flex items-center justify-center transition-all duration-300 text-slate-300" aria-label="LinkedIn">
                            <Linkedin size={14} />
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-amber-400 hover:text-[#0E2A54] flex items-center justify-center transition-all duration-300 text-slate-300" aria-label="YouTube">
                            <Youtube size={14} />
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-amber-400 hover:text-[#0E2A54] flex items-center justify-center transition-all duration-300 text-slate-300" aria-label="TikTok">
                            <Tiktok size={14} />
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="border-t border-white/10 py-5 text-center text-xs bg-white text-slate-800 font-medium">
                © {new Date().getFullYear()} Edutech Solution (CV Solusi Edukasi Indonesia). Seluruh hak cipta dilindungi.
            </div>
        </footer>
    );
}

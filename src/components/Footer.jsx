import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Linkedin, Youtube } from "lucide-react";
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
    "Training & Professional Development",
    "Management Consulting",
    "IT Solution & Software Development",
    "Software & Digital Product Provider",
    "Event, Workshop, Conference & MICE",
];

export default function Footer() {
    return (
        <footer className="bg-[#0A2043] text-slate-400 text-sm mt-auto">
            <div className="max-w-7xl mx-auto px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-[2fr_1fr_2fr_2.5fr] gap-x-4 gap-y-8">
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <img src="/sei1.png" alt="Logo CV Solusi Edukasi Indonesia" className="w-12 h-12 object-contain" />
                        <div>
                            <p className="font-bold text-white text-sm">CV Solusi Edukasi Indonesia</p>
                            <p className="text-[10px] text-amber-400">NIB: 2205260161665</p>
                        </div>
                    </div>
                    <p className="text-xs leading-relaxed mb-3">
                        Mitra pengembangan SDM, konsultasi manajemen, IT solution, software, dan event profesional.
                    </p>
                    <p className="text-xs text-amber-400 italic">"Empowering People, Transforming Organizations"</p>
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
                        {SERVICES.map((title) => (
                            <li key={title}>{title}</li>
                        ))}
                    </ul>
                </div>
                
                <div>
                    <p className="font-semibold text-white mb-4 text-sm">Kontak</p>
                    <ul className="space-y-3 text-xs mb-4">
                        <li className="flex gap-2 items-start">
                            <MapPin size={12} className="text-amber-400 mt-0.5 shrink-0" />
                            <span>Jl. Saluyu XII A No. 42, Cipamokolan, Rancasari, Bandung 40232</span>
                        </li>
                        <li className="flex gap-2">
                            <Phone size={12} className="text-amber-400 mt-0.5 shrink-0" />
                            <span>081906667944</span>
                        </li>
                        <li className="flex gap-2">
                            <Mail size={12} className="text-amber-400 mt-0.5 shrink-0" />
                            <span>solusiedukasiindonesia@gmail.com</span>
                        </li>
                    </ul>
                    
                    <div className="flex items-center gap-2.5 pt-4 border-t border-white/10">
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
            
            <div className="border-t border-white/10 py-5 text-center text-xs bg-white text-black">
                © {new Date().getFullYear()} CV Solusi Edukasi Indonesia. Seluruh hak cipta dilindungi.
            </div>
        </footer>
    );
}

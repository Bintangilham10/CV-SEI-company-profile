import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Presentation, ClipboardList, Laptop2, Code2, PartyPopper } from "lucide-react";

export const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Tentang Kami", href: "/about" },
    { label: "Layanan", href: "/layanan" },
    { label: "Program", href: "/program" },
    { label: "Kontak", href: "/contact" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Check if the current page has a dark hero background at the top
    const isDarkPage = location.pathname === "/" || location.pathname === "/about" || location.pathname === "/program" || location.pathname === "/contact";

    // Dynamic classes based on scroll state and current page theme
    const headerClass = `z-50 transition-all duration-300 ${isDarkPage
        ? scrolled || menuOpen
            ? "fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm py-3"
            : "absolute top-0 left-0 w-full bg-transparent border-b border-transparent py-5"
        : "sticky top-0 bg-white/90 backdrop-blur-md border-b border-slate-100 py-4 shadow-sm"
        }`;

    const textClass = scrolled || menuOpen
        ? "text-slate-600"
        : isDarkPage
            ? "text-slate-200"
            : "text-slate-600";

    const hoverClass = scrolled || menuOpen || !isDarkPage
        ? "hover:text-[#0E2A54]"
        : "hover:text-white";

    const activeTextClass = scrolled || menuOpen
        ? "text-[#0E2A54] font-bold"
        : isDarkPage
            ? "text-amber-400 font-bold"
            : "text-[#0E2A54] font-bold";

    const logoTitleClass = scrolled || menuOpen
        ? "text-[#0E2A54]"
        : isDarkPage
            ? "text-white"
            : "text-[#0E2A54]";

    const logoSubClass = scrolled || menuOpen || !isDarkPage
        ? "text-amber-600"
        : "text-amber-400";

    const hamburgerClass = scrolled || menuOpen
        ? "text-slate-700"
        : isDarkPage
            ? "text-white"
            : "text-slate-700";

    return (
        <header className={headerClass}>
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    <img src="/logo-edutech.png" alt="Logo" className="w-auto h-12 rounded-lg object-cover" />
                </Link>

                <nav className={`hidden lg:flex items-center gap-15 font-medium transition-colors duration-300 oswald-navbar ${textClass}`}>
                    {NAV_LINKS.map((l) =>
                        l.label === "Layanan" ? (
                            <div key={l.label} className="relative group">
                                <NavLink
                                    to={l.href}
                                    className={({ isActive }) =>
                                        `transition-colors inline-flex items-center gap-1 py-2 ${hoverClass} ${isActive ? activeTextClass : ""
                                        }`
                                    }
                                >
                                    {l.label}
                                    <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </NavLink>
                                {/* Dropdown */}
                                <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                    <div className="w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
                                        {[
                                            { label: "Training & Professional Development", icon: Presentation },
                                            { label: "Management Consulting", icon: ClipboardList },
                                            { label: "IT Solution & Software Development", icon: Laptop2 },
                                            { label: "Software & Digital Product Provider", icon: Code2 },
                                            { label: "Event, Workshop, Conference & MICE", icon: PartyPopper },
                                        ].map(({ label, icon: Icon }) => (
                                            <Link
                                                key={label}
                                                to="/layanan"
                                                className="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 hover:bg-amber-50 hover:text-[#0E2A54] transition-colors group/item"
                                            >
                                                <div className="w-8 h-8 rounded-lg bg-amber-50 group-hover/item:bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 transition-colors">
                                                    <Icon size={15} />
                                                </div>
                                                <span className="font-medium leading-tight flex-1">{label}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <NavLink
                                key={l.label}
                                to={l.href}
                                className={({ isActive }) =>
                                    `transition-colors py-2 ${hoverClass} ${isActive ? activeTextClass : ""
                                    }`
                                }
                            >
                                {l.label}
                            </NavLink>
                        )
                    )}
                </nav>

                <a href="https://wa.me/6281906667944?text=Halo%20CV%20Solusi%20Edukasi%20Indonesia,%20saya%20tertarik%20untuk%20berkonsultasi" target="_blank" rel="noopener noreferrer" className="hidden lg:inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-600 text-[#0E2A54] font-bold text-sm px-5 py-2.5 rounded-full transition-colors oswald-navbar">
                    Konsultasi Gratis
                </a>

                <button className={`lg:hidden transition-colors duration-300 ${hamburgerClass}`} onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {menuOpen && (
                <div className="lg:hidden border-t border-slate-100 px-6 py-4 flex flex-col gap-4 text-sm font-medium bg-white animate-fadeIn oswald-navbar">
                    {NAV_LINKS.map((l) => (
                        <NavLink
                            key={l.label}
                            to={l.href}
                            onClick={() => setMenuOpen(false)}
                            className={({ isActive }) =>
                                `${isActive ? "text-[#0E2A54] font-bold" : "text-slate-600"}`
                            }
                        >
                            {l.label}
                        </NavLink>
                    ))}
                    <a
                        href="https://wa.me/6281906667944?text=Halo%20CV%20Solusi%20Edukasi%20Indonesia,%20saya%20tertarik%20untuk%20berkonsultasi"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMenuOpen(false)}
                        className="bg-amber-500 text-[#0E2A54] font-bold text-center py-2.5 rounded-full shadow-sm oswald-navbar"
                    >
                        Konsultasi Gratis
                    </a>
                </div>
            )}
        </header>
    );
}


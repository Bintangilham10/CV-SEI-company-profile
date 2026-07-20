import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Presentation, ClipboardList, Laptop2, Code2, PartyPopper, ChevronDown } from "lucide-react";

export const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Layanan", href: "/layanan" },
    { label: "Event", href: "/program" },
    { label: "Tentang Kami", href: "/tentang-kami" },
];

const SERVICE_DROPDOWN = [
    { label: "Training & Professional Development", href: "/layanan/training-development", icon: Presentation },
    { label: "Management Consulting", href: "/layanan/management-consulting", icon: ClipboardList },
    { label: "IT Solution & Software Development", href: "/layanan/it-solution", icon: Laptop2 },
    { label: "Software & Digital Product Provider", href: "/layanan/digital-product", icon: Code2 },
    { label: "Event, Workshop, Conference & MICE", href: "/layanan/event-mice", icon: PartyPopper },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
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

    // Close mobile menu on route change
    useEffect(() => {
        setMenuOpen(false);
        setMobileDropdownOpen(false);
    }, [location.pathname]);

    // Check if the current page has a dark hero background at the top
    const isDarkPage = location.pathname === "/" || location.pathname === "/fasilitas";

    // Check if current path is a service sub-page
    const isServicePage = location.pathname.startsWith("/layanan");

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
                <Link to="/" className="flex items-center">
                    <img src="/sei1.png" alt="Logo CV Solusi Edukasi Indonesia" className="h-12 md:h-14 w-auto object-contain" />
                </Link>

                <nav className={`hidden lg:flex items-center gap-15 font-medium transition-colors duration-300 ${textClass}`}>
                    {NAV_LINKS.map((l) =>
                        l.label === "Layanan" ? (
                            <div key={l.label} className="relative group">
                                <NavLink
                                    to={l.href}
                                    className={({ isActive }) =>
                                        `transition-colors inline-flex items-center gap-1 py-2 ${hoverClass} ${isActive || isServicePage ? activeTextClass : ""
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
                                    <div className="w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden py-2">
                                        {SERVICE_DROPDOWN.map(({ label, href, icon: Icon }) => (
                                            <Link
                                                key={label}
                                                to={href}
                                                className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors group/item ${
                                                    location.pathname === href
                                                        ? "bg-amber-50 text-[#0E2A54] font-semibold"
                                                        : "text-slate-700 hover:bg-amber-50 hover:text-[#0E2A54]"
                                                }`}
                                            >
                                                <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                                                    location.pathname === href
                                                        ? "bg-amber-100 text-amber-600"
                                                        : "bg-amber-50 group-hover/item:bg-amber-100 text-amber-600"
                                                }`}>
                                                    <Icon size={16} />
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

                <a href="https://wa.me/6281906667944?text=Halo%20CV%20Solusi%20Edukasi%20Indonesia,%20saya%20tertarik%20untuk%20berkonsultasi" target="_blank" rel="noopener noreferrer" className="hidden lg:inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-600 text-[#0E2A54] font-bold text-sm px-5 py-2.5 rounded-full transition-colors">
                    Konsultasi Gratis
                </a>

                <button className={`lg:hidden transition-colors duration-300 ${hamburgerClass}`} onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {menuOpen && (
                <div className="lg:hidden border-t border-slate-100 px-6 py-4 flex flex-col gap-1 text-sm font-medium bg-white animate-fadeIn">
                    {NAV_LINKS.map((l) =>
                        l.label === "Layanan" ? (
                            <div key={l.label}>
                                <button
                                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                                    className={`w-full flex items-center justify-between py-3 transition-colors ${
                                        isServicePage ? "text-[#0E2A54] font-bold" : "text-slate-600"
                                    }`}
                                >
                                    <span>{l.label}</span>
                                    <ChevronDown
                                        size={16}
                                        className={`transition-transform duration-200 ${mobileDropdownOpen ? "rotate-180" : ""}`}
                                    />
                                </button>
                                {/* Mobile dropdown items */}
                                <div className={`overflow-hidden transition-all duration-300 ${
                                    mobileDropdownOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                }`}>
                                    <div className="pl-3 pb-2 space-y-0.5 border-l-2 border-amber-400 ml-2">
                                        {SERVICE_DROPDOWN.map(({ label, href, icon: Icon }) => (
                                            <Link
                                                key={label}
                                                to={href}
                                                onClick={() => setMenuOpen(false)}
                                                className={`flex items-center gap-2.5 py-2.5 px-3 rounded-lg text-xs transition-colors ${
                                                    location.pathname === href
                                                        ? "bg-amber-50 text-[#0E2A54] font-bold"
                                                        : "text-slate-500 hover:bg-slate-50 hover:text-[#0E2A54]"
                                                }`}
                                            >
                                                <Icon size={14} className="text-amber-500 shrink-0" />
                                                <span className="leading-tight">{label}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <NavLink
                                key={l.label}
                                to={l.href}
                                onClick={() => setMenuOpen(false)}
                                className={({ isActive }) =>
                                    `py-3 ${isActive ? "text-[#0E2A54] font-bold" : "text-slate-600"}`
                                }
                            >
                                {l.label}
                            </NavLink>
                        )
                    )}
                    <a
                        href="https://wa.me/6281906667944?text=Halo%20CV%20Solusi%20Edukasi%20Indonesia,%20saya%20tertarik%20untuk%20berkonsultasi"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMenuOpen(false)}
                        className="bg-amber-500 text-[#0E2A54] font-bold text-center py-2.5 rounded-full shadow-sm mt-2"
                    >
                        Konsultasi Gratis
                    </a>
                </div>
            )}
        </header>
    );
}

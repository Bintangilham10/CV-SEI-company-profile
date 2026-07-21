import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const isLayananActive = location.pathname.startsWith('/service');

  const services = [
    { name: 'Training & Professional Development', path: '/service/training' },
    { name: 'Management Consulting', path: '/service/management' },
    { name: 'IT Solution & Software Development', path: '/service/it-solution' },
    { name: 'Software & Digital Product Provider', path: '/service/software-provider' },
    { name: 'Event, Workshop & MICE', path: '/service/event-mice' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 h-20 flex items-center ${
        scrolled
          ? 'bg-surface-container-lowest/95 backdrop-blur-md shadow-md border-b border-outline-variant/60'
          : 'bg-surface-container-lowest border-b border-outline-variant shadow-sm'
      }`}
    >
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        
        {/* Brand Logo with Scale Hover */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            alt="Edutech Solution Logo"
            className="h-10 object-contain transition-transform duration-300 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBudODNrW35yzNCfpUBYQj758W1aFYGoSw3jyDldCQ5ZTL4XOSwZd3k4BDwzZoFgwlgpLAA7rUg5aygBAktnRL-kfC2f3zOLhvDikK2N8S0uMFwBG_VKuFWi-9yGKYPjOzPMcb1JhMjbpdyv-J3nFPyar6TbccN1fY_CpejKX4G2ktrIbCrBdObGVnUpfD4N37sjvWEtFfrHVNdQO_1Zb_QoxZo4y2F65DdZV2QSFEV5fbf_OKPigR9VnkID86HNq_wpT7KS5QD9zE"
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 font-body-md text-body-md">
          {/* Beranda */}
          <Link
            to="/"
            className={`transition-all duration-300 py-1 relative hover:-translate-y-0.5 ${
              isActive('/') && !isLayananActive && location.pathname === '/'
                ? 'text-primary font-bold border-b-2 border-primary'
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            Beranda
          </Link>

          {/* Tentang Kami */}
          <Link
            to="/about"
            className={`transition-all duration-300 py-1 relative hover:-translate-y-0.5 ${
              isActive('/about')
                ? 'text-primary font-bold border-b-2 border-primary'
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            Tentang Kami
          </Link>

          {/* Layanan Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <div className="flex items-center gap-1">
              <Link
                to="/service"
                className={`transition-all duration-300 py-1 flex items-center gap-1 hover:-translate-y-0.5 ${
                  isLayananActive
                    ? 'text-primary font-bold border-b-2 border-primary'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                Layanan
              </Link>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-on-surface-variant hover:text-primary transition-colors focus:outline-none"
                aria-label="Toggle Layanan dropdown"
              >
                <span
                  className={`material-symbols-outlined text-sm transition-transform duration-300 ${
                    dropdownOpen ? 'rotate-180 text-primary' : ''
                  }`}
                >
                  expand_more
                </span>
              </button>
            </div>

            {/* Dropdown Menu */}
            <div
              className={`absolute left-0 top-full pt-2 w-72 transition-all duration-300 z-50 transform origin-top-left ${
                dropdownOpen
                  ? 'opacity-100 visible translate-y-0 scale-100'
                  : 'opacity-0 invisible -translate-y-2 scale-95'
              }`}
            >
              <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-outline-variant/60 overflow-hidden py-2">
                <Link
                  to="/service"
                  className="block px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-primary bg-surface-container-low/80 border-b border-outline-variant/50 hover:bg-primary/10 transition-colors"
                >
                  Semua Layanan →
                </Link>
                {services.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.path}
                    className={`block px-6 py-3 text-body-md transition-all duration-200 hover:pl-8 ${
                      location.pathname === item.path
                        ? 'bg-primary/10 text-primary font-semibold border-l-4 border-primary'
                        : 'text-on-surface-variant hover:bg-primary/5 hover:text-primary'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Program */}
          <Link
            to="/program"
            className={`transition-all duration-300 py-1 relative hover:-translate-y-0.5 ${
              isActive('/program')
                ? 'text-primary font-bold border-b-2 border-primary'
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            Program
          </Link>

          {/* Portofolio */}
          <Link
            to="/portofolio"
            className={`transition-all duration-300 py-1 relative hover:-translate-y-0.5 ${
              isActive('/portofolio')
                ? 'text-primary font-bold border-b-2 border-primary'
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            Portofolio
          </Link>

          {/* Kontak */}
          <Link
            to="/contact"
            className={`transition-all duration-300 py-1 relative hover:-translate-y-0.5 ${
              isActive('/contact')
                ? 'text-primary font-bold border-b-2 border-primary'
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            Kontak
          </Link>
        </div>

        {/* Right Action Button & Mobile Hamburger */}
        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="bg-action-orange text-white font-bold px-6 py-2.5 rounded-xl hover:bg-orange-600 hover:shadow-lg hover:shadow-action-orange/30 active:scale-95 transition-all duration-300 btn-glow inline-block"
          >
            Consult Now
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-on-surface-variant hover:text-primary p-2 focus:outline-none transition-transform active:scale-90"
            aria-label="Toggle mobile menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-surface-container-lowest/98 backdrop-blur-lg border-b border-outline-variant shadow-xl py-6 px-6 flex flex-col gap-4 z-40 animate-fadeIn">
          <Link
            to="/"
            className={`py-2 text-body-md transition-colors ${
              location.pathname === '/' ? 'text-primary font-bold' : 'text-on-surface-variant'
            }`}
          >
            Beranda
          </Link>
          <Link
            to="/about"
            className={`py-2 text-body-md transition-colors ${
              isActive('/about') ? 'text-primary font-bold' : 'text-on-surface-variant'
            }`}
          >
            Tentang Kami
          </Link>

          {/* Mobile Layanan */}
          <div className="flex flex-col gap-2">
            <Link
              to="/service"
              className={`py-1 text-body-md font-bold ${
                isLayananActive ? 'text-primary' : 'text-on-surface-variant'
              }`}
            >
              Layanan
            </Link>
            <div className="pl-4 flex flex-col gap-2 border-l-2 border-primary/30">
              {services.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.path}
                  className={`text-sm py-1.5 transition-colors ${
                    location.pathname === item.path
                      ? 'text-primary font-semibold'
                      : 'text-on-surface-variant/80 hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/program"
            className={`py-2 text-body-md transition-colors ${
              isActive('/program') ? 'text-primary font-bold' : 'text-on-surface-variant'
            }`}
          >
            Program
          </Link>
          <Link
            to="/portofolio"
            className={`py-2 text-body-md transition-colors ${
              isActive('/portofolio') ? 'text-primary font-bold' : 'text-on-surface-variant'
            }`}
          >
            Portofolio
          </Link>
          <Link
            to="/contact"
            className={`py-2 text-body-md transition-colors ${
              isActive('/contact') ? 'text-primary font-bold' : 'text-on-surface-variant'
            }`}
          >
            Kontak
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

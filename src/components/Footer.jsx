import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-trust-navy text-on-primary w-full py-16 border-t border-on-secondary-fixed-variant mt-auto">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-12">
          {/* Brand & Tagline */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                alt="Edutech Solution Logo"
                className="h-10 object-contain brightness-0 invert"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBudODNrW35yzNCfpUBYQj758W1aFYGoSw3jyDldCQ5ZTL4XOSwZd3k4BDwzZoFgwlgpLAA7rUg5aygBAktnRL-kfC2f3zOLhvDikK2N8S0uMFwBG_VKuFWi-9yGKYPjOzPMcb1JhMjbpdyv-J3nFPyar6TbccN1fY_CpejKX4G2ktrIbCrBdObGVnUpfD4N37sjvWEtFfrHVNdQO_1Zb_QoxZo4y2F65DdZV2QSFEV5fbf_OKPigR9VnkID86HNq_wpT7KS5QD9zE"
              />
            </div>
            <p className="text-surface-variant font-body-md leading-relaxed text-sm">
              CV Solusi Edukasi Indonesia (CV SEI) - Lembaga pelatihan, konsultasi, dan teknologi terpercaya di Indonesia.
            </p>
            <div className="flex gap-4">
              <a
                href="https://edutechsolution.co.id"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white"
                aria-label="Website"
              >
                <span className="material-symbols-outlined text-sm">public</span>
              </a>
              <a
                href="mailto:info@edutechsolution.co.id"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white"
                aria-label="Email"
              >
                <span className="material-symbols-outlined text-sm">alternate_email</span>
              </a>
            </div>
          </div>

          {/* Layanan */}
          <div>
            <h5 className="font-headline-md text-body-lg font-bold mb-6 text-white">Layanan</h5>
            <ul className="space-y-3 text-surface-variant text-sm">
              <li>
                <Link to="/service/training" className="hover:text-action-orange transition-all inline-block">
                  Training & Professional Development
                </Link>
              </li>
              <li>
                <Link to="/service/management" className="hover:text-action-orange transition-all inline-block">
                  Management Consulting
                </Link>
              </li>
              <li>
                <Link to="/service/it-solution" className="hover:text-action-orange transition-all inline-block">
                  IT Solution & Software Development
                </Link>
              </li>
              <li>
                <Link to="/service/software-provider" className="hover:text-action-orange transition-all inline-block">
                  Software & Digital Product Provider
                </Link>
              </li>
              <li>
                <Link to="/service/event-mice" className="hover:text-action-orange transition-all inline-block">
                  Event, Workshop & MICE
                </Link>
              </li>
            </ul>
          </div>

          {/* Tautan Cepat */}
          <div>
            <h5 className="font-headline-md text-body-lg font-bold mb-6 text-white">Tautan Cepat</h5>
            <ul className="space-y-3 text-surface-variant text-sm">
              <li>
                <Link to="/" className="hover:text-action-orange transition-all inline-block">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-action-orange transition-all inline-block">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to="/program" className="hover:text-action-orange transition-all inline-block">
                  Program
                </Link>
              </li>
              <li>
                <Link to="/portofolio" className="hover:text-action-orange transition-all inline-block">
                  Portofolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-action-orange transition-all inline-block">
                  Kontak Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Hubungi Kami */}
          <div>
            <h5 className="font-headline-md text-body-lg font-bold mb-6 text-white">Hubungi Kami</h5>
            <ul className="space-y-4 text-surface-variant text-sm">
              <li className="flex gap-3 items-start">
                <span className="material-symbols-outlined text-action-orange shrink-0">location_on</span>
                <span>Jl. Saluyu XII A No. 42, Cipamokolan, Rancasari, Bandung 40232</span>
              </li>
              <li className="flex gap-3 items-center">
                <span className="material-symbols-outlined text-action-orange shrink-0">mail</span>
                <span>info@edutechsolution.co.id</span>
              </li>
              <li className="flex gap-3 items-center">
                <span className="material-symbols-outlined text-action-orange shrink-0">language</span>
                <span>www.edutechsolution.co.id</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-on-secondary-fixed-variant flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-surface-variant">
          <p>© 2024 CV Solusi Edukasi Indonesia. Your Trusted Solution Partner.</p>
          <div className="flex gap-8">
            <span>NIB: 2205260161665</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

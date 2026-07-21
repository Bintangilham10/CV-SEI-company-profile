import React from 'react';
import { Link } from 'react-router-dom';

const SoftwareProviderService = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-surface-container-low">
        <div className="relative px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest bg-primary-fixed/30 px-3 py-1 rounded-full inline-block mb-6">
                Solusi Teknologi Terpadu
              </span>
              <h1 className="font-display-lg text-display-lg text-trust-navy mb-6">Software & Digital Product Provider</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                CV SEI dapat menyediakan solusi software dan produk digital yang relevan untuk kebutuhan edukasi, bisnis, operasional, dan produktivitas organisasi.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/program"
                  className="bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-primary-container transition-all inline-flex"
                >
                  Lihat Katalog Produk
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                alt="Modern digital workplace"
                className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9XL__cwwXgSzQi8htVtvj8VNbAKYsEPowFd2I-ERnZDEQHcJ6UfueScaSIX6YQSx9VQkhg9MEi6MLzEtltaMDRcD5kc63b2Rgu7hNldS4S5Fdn7c8Yrb--SV9wkcajgrh5b0635PgCGgHhYpDOf9xFUjNG-p_WQcMUpex7wpEsBWB8gjsu3x4pv7SiIxxQr7VsN9Mytb9hmjSTzt4vF0tNN_VwbgiG9irIfWVgIPgR1CQUhnqd2tJcrJncxVuev9wk4tKWd4nMFo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="mb-16">
          <h2 className="font-headline-lg text-headline-lg text-trust-navy mb-2">Produk Unggulan Kami</h2>
          <p className="text-label-sm text-on-surface-variant opacity-70 uppercase tracking-widest mb-4">
            CV SOLUSI EDUKASI INDONESIA | Education • Training • Consulting • IT Solution • MICE
          </p>
          <div className="h-1.5 w-24 bg-action-orange rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {[
            { icon: 'school', title: 'Software Edukasi & Produktivitas Kerja', desc: 'Solusi digital terintegrasi untuk meningkatkan efisiensi belajar dan produktivitas kerja tim Anda.' },
            { icon: 'model_training', title: 'Software Pendukung Pelatihan', desc: 'Infrastruktur digital yang dirancang khusus untuk mendukung program pelatihan profesional dan sertifikasi.' },
            { icon: 'settings_suggest', title: 'Tools Digital Operasional Perusahaan', desc: 'Automasi administrasi dan pengelolaan inventaris digital untuk kelancaran operasional bisnis.' },
            { icon: 'description', title: 'Template Digital Administrasi & Pelaporan', desc: 'Template administrasi, pelatihan, dan pelaporan siap pakai yang profesional dan terstandarisasi.' },
            { icon: 'terminal', title: 'Sistem Berbasis Web Internal', desc: 'Pengembangan sistem berbasis web kustom untuk kebutuhan manajemen internal perusahaan yang efisien.' },
            { icon: 'extension', title: 'Solusi Perangkat Lunak Kustom', desc: 'Pengembangan solusi perangkat lunak yang disesuaikan sepenuhnya dengan kebutuhan spesifik klien.' },
          ].map((prod, i) => (
            <div
              key={i}
              className="md:col-span-4 group bg-white rounded-2xl border border-outline-variant hover:border-primary transition-all duration-300 p-8 flex flex-col h-full hover:-translate-y-1 shadow-sm hover:shadow-md"
            >
              <div className="bg-surface-container-low p-4 rounded-xl w-fit mb-6 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-4xl text-primary group-hover:text-white">{prod.icon}</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-3 text-trust-navy">{prod.title}</h3>
              <p className="font-body-md text-on-surface-variant flex-grow">{prod.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-trust-navy text-white text-center">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="font-display-lg text-headline-lg mb-6">Butuh Solusi Perangkat Lunak Spesifik?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">Tim kami siap membantu menyediakan atau membangun produk digital yang pas untuk kebutuhan Anda.</p>
          <Link
            to="/contact"
            className="bg-action-orange text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all inline-block shadow-lg"
          >
            Konsultasi Produk Digital
          </Link>
        </div>
      </section>
    </>
  );
};

export default SoftwareProviderService;

import React from 'react';
import { Link } from 'react-router-dom';

const ManagementService = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center overflow-hidden bg-trust-navy py-20">
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
          <div className="text-white space-y-6">
            <div className="inline-flex items-center space-x-2 bg-primary-container/20 border border-white/10 px-3 py-1 rounded-full text-white/90">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider">Layanan Strategis Utama</span>
            </div>
            <h1 className="font-display-lg text-display-lg leading-tight">Management Consulting & Transformasi Bisnis</h1>
            <p className="font-body-lg text-body-lg text-white/80 max-w-xl">
              CV SEI menyediakan layanan konsultasi untuk membantu perusahaan dan organisasi meningkatkan efektivitas kerja, tata kelola, strategi pengembangan SDM, serta produktivitas operasional.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/contact"
                className="bg-action-orange text-white px-8 py-4 rounded-lg font-bold hover:shadow-xl transition-all flex items-center space-x-2 inline-flex"
              >
                <span>Hubungi Konsultan Kami</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <Link
                to="/portofolio"
                className="border border-white/30 bg-white/5 backdrop-blur-sm px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all text-white inline-block"
              >
                Lihat Portofolio
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl border border-white/10">
                <img
                  className="w-full h-full object-cover"
                  alt="Boardroom meeting"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4rhsRKYIyyVpQRy8PoK0iUptE0e2q_XOIveWgE5PTqAlBjtkDu7WLqjb8Z3s11A50XiwVHlwzu9JW7Na-upFSR5-1k_8VAdZxC2ZX0V7lo_v0z_t6btDi4wmY9jSAe5H7NqgjJvVbPqVUvWvP8DfPOC95u9pmbF3gRvJPnjzvy6upABbyXRYg6jffFNJ6H62epWg2nuen-hJMFU42BqR0m0KnnVMzGdc_e7H2tQf-6Ss-_hToE8V_MHrK1ZHV6zlS7fynsJEaNSM"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-surface-container-low px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="mb-16 space-y-4">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest block">Core Expertise</span>
            <h2 className="font-headline-lg text-headline-lg text-trust-navy">Solusi Konsultasi Menyeluruh</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              Kami menggabungkan wawasan mendalam tentang industri dengan metodologi yang teruji untuk mendorong hasil yang terukur.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {[
              'Konsultasi pengembangan organisasi',
              'Training Need Analysis (TNA)',
              'Konsultasi peningkatan kompetensi SDM',
              'Konsultasi strategi bisnis dan operasional',
              'Penyusunan SOP dan alur kerja',
              'Konsultasi manajemen proyek',
              'Konsultasi transformasi digital',
              'Assessment dan rekomendasi improvement organisasi',
            ].map((item, idx) => (
              <div key={idx} className="flex items-center space-x-4 p-4 border-b border-outline-variant/30 hover:bg-white/50 transition-colors">
                <span className="material-symbols-outlined text-action-orange">check_circle</span>
                <span className="font-headline-md text-lg text-trust-navy">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-trust-navy text-white text-center">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="font-display-lg text-headline-lg mb-6">Siap Mengoptimalkan Organisasi Anda?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-10">Jadwalkan sesi audit & konsultasi awal bersama tim tim konsultan senior kami.</p>
          <Link
            to="/contact"
            className="bg-action-orange text-white px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all inline-block shadow-lg"
          >
            Mulai Konsultasi Bisnis
          </Link>
        </div>
      </section>
    </>
  );
};

export default ManagementService;

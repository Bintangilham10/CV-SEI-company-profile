import React from 'react';
import { Link } from 'react-router-dom';

const ITSolutionService = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-surface-container-low py-20">
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <span className="font-label-sm text-label-sm text-primary-container bg-primary-fixed px-4 py-1.5 rounded-full mb-6 inline-block">
                DIGITAL TRANSFORMATION
              </span>
              <h1 className="font-display-lg text-display-lg text-trust-navy mb-6 leading-tight">
                IT Solution & <span className="text-primary">Software Development</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 leading-relaxed">
                CV SEI menyediakan layanan teknologi informasi untuk membantu klien mengembangkan sistem digital yang mendukung kebutuhan operasional, promosi, administrasi, pelaporan, dan pengambilan keputusan.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-primary text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all flex items-center gap-2 inline-flex"
                >
                  Mulai Konsultasi Gratis
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
                <Link
                  to="/portofolio"
                  className="bg-transparent border-2 border-trust-navy text-trust-navy px-8 py-4 rounded-xl font-bold hover:bg-surface-container transition-all inline-block"
                >
                  Lihat Portfolio
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img
                  alt="Modern IT solutions workspace"
                  className="w-full h-auto object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuASgRl7W50cRwXKZSBbgJurpoNGzH33S7yyuE_WlB9MBlipoo86VmilIEJHBW_oo-zuGU-L2MsTuD7868Xbi-rCORAIIRsHxEUo0mIPb63MRQ6aj247_2zhO2t-94ncUNWxbBxXZng5icEREx7_Qvnj3soBPpPq9OMGRqJuymcAM0O6sNGyWSxHyvl4UJd9OE7C9hhBlR_DE-uy0kGMsRsSteZHkH0MZirjP-3EG_DCZ7ZCfwNJZlTAMLASObIeuGaVkJqlPB57-1w"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="font-display-lg text-headline-lg text-trust-navy mb-4">Layanan Utama Kami</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Solusi komprehensif mulai dari desain antarmuka hingga integrasi sistem backend yang kompleks.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {[
              { icon: 'language', title: 'Pengembangan website company profile', desc: 'Membangun identitas digital profesional untuk perusahaan Anda.' },
              { icon: 'ads_click', title: 'Pengembangan landing page promosi', desc: 'Halaman khusus yang dioptimalkan untuk konversi kampanye pemasaran.' },
              { icon: 'hub', title: 'Pengembangan sistem informasi berbasis web', desc: 'Platform terintegrasi untuk manajemen data dan alur kerja bisnis.' },
              { icon: 'settings_suggest', title: 'Pengembangan aplikasi internal perusahaan', desc: 'Solusi kustom untuk efisiensi operasional tim internal Anda.' },
              { icon: 'monitoring', title: 'Dashboard reporting dan data visualization', desc: 'Visualisasi data real-time untuk pengambilan keputusan strategis.' },
              { icon: 'description', title: 'Digitalisasi proses administrasi', desc: 'Transformasi dokumen fisik menjadi sistem digital yang efisien.' },
              { icon: 'build', title: 'Maintenance website dan aplikasi', desc: 'Dukungan teknis berkala untuk memastikan sistem tetap berjalan optimal.' },
              { icon: 'support_agent', title: 'IT support untuk pelatihan dan event', desc: 'Pendampingan teknis profesional untuk kelancaran acara Anda.' },
            ].map((srv, idx) => (
              <div key={idx} className="md:col-span-6 flex items-start gap-4 p-6 bg-surface-container-low rounded-xl border border-outline-variant/30 hover:border-primary transition-all">
                <div className="w-12 h-12 bg-primary-container rounded-lg flex-shrink-0 flex items-center justify-center text-white">
                  <span className="material-symbols-outlined">{srv.icon}</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-lg font-bold text-trust-navy mb-1">{srv.title}</h3>
                  <p className="text-on-surface-variant text-sm">{srv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-trust-navy text-white text-center">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="font-display-lg text-headline-lg mb-6">Siap Membangun Sistem Digital Anda?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">Diskusikan rancangan aplikasi & teknologi yang tepat dengan tim developer profesional kami.</p>
          <Link
            to="/contact"
            className="bg-action-orange text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all inline-block shadow-lg"
          >
            Konsultasi IT Solution
          </Link>
        </div>
      </section>
    </>
  );
};

export default ITSolutionService;

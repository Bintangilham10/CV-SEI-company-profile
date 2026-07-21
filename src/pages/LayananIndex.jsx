import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const LayananIndex = () => {
  return (
    <div className="py-12 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      {/* Hero Section */}
      <AnimatedSection className="mb-20 text-center max-w-3xl mx-auto">
        <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-4 block animate-pulse">
          Ecosystem Of Excellence
        </span>
        <h1 className="font-display-lg text-display-lg text-trust-navy mb-6 leading-tight">
          Layanan & Program Strategis
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Solusi edukasi, konsultasi, teknologi, dan event profesional yang dirancang secara praktis dan aplikatif untuk mendukung pertumbuhan organisasi Anda.
        </p>
      </AnimatedSection>

      {/* Main Services Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {/* Training Service */}
        <div className="md:col-span-2 bg-surface-container-lowest border border-outline-variant p-8 rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
          <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
            <div className="bg-primary/10 p-4 rounded-2xl text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <span className="material-symbols-outlined text-4xl">school</span>
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md text-trust-navy mb-4 font-bold group-hover:text-primary transition-colors">
                Training & Professional Development
              </h3>
              <p className="text-on-surface-variant mb-6 leading-relaxed">
                Program pelatihan komprehensif dalam format public training, in-house, online, maupun hybrid yang disesuaikan dengan kebutuhan spesifik industri.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  'IT & Digital Transformation',
                  'Cybersecurity & Network',
                  'AI & Digital Tools',
                  'Data Analytics & BI',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    <span className="text-body-md font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/service/training"
                className="flex items-center gap-2 text-primary font-bold group/link inline-flex"
              >
                <span>Lihat Detail Program</span>
                <span className="material-symbols-outlined transition-transform duration-300 group-hover/link:translate-x-2">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Management Consulting */}
        <div className="bg-trust-navy text-on-primary p-8 rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group">
          <div>
            <div className="bg-white/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-action-orange transition-colors duration-300">
              <span className="material-symbols-outlined text-3xl">query_stats</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-4 font-bold">Management Consulting</h3>
            <p className="text-white/70 mb-6 leading-relaxed">
              Optimalkan potensi organisasi melalui audit kompetensi, penyusunan SOP, dan strategi transformasi digital yang terukur.
            </p>
          </div>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-2 text-sm text-white/90">
              <span className="w-1.5 h-1.5 bg-action-orange rounded-full"></span>
              Training Need Analysis
            </li>
            <li className="flex items-center gap-2 text-sm text-white/90">
              <span className="w-1.5 h-1.5 bg-action-orange rounded-full"></span>
              Digital Transformation Strategy
            </li>
          </ul>
          <Link
            to="/service/management"
            className="w-full py-3 border border-white/30 rounded-xl hover:bg-white/10 transition-colors font-medium text-center inline-block"
          >
            Pelajari Lebih Lanjut
          </Link>
        </div>

        {/* IT Solution */}
        <div className="bg-surface-container-low border border-outline-variant p-8 rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between">
          <div>
            <div className="mb-6 flex items-center justify-between">
              <span className="material-symbols-outlined text-primary text-4xl group-hover:scale-110 transition-transform">terminal</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-label-sm text-xs font-bold">Development</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-trust-navy mb-4 font-bold group-hover:text-primary transition-colors">
              IT Solution & Software Development
            </h3>
            <p className="text-on-surface-variant mb-6 leading-relaxed">
              Bangun infrastruktur digital yang solid. Mulai dari landing page hingga dashboard reporting yang kompleks.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-white border border-outline-variant rounded-md text-xs text-on-surface-variant">Web Systems</span>
              <span className="px-3 py-1 bg-white border border-outline-variant rounded-md text-xs text-on-surface-variant">Reporting Dashboards</span>
              <span className="px-3 py-1 bg-white border border-outline-variant rounded-md text-xs text-on-surface-variant">Mobile Apps</span>
            </div>
          </div>
          <Link
            to="/service/it-solution"
            className="flex items-center gap-2 text-primary font-bold group/link inline-flex"
          >
            <span>Lihat Detail</span>
            <span className="material-symbols-outlined transition-transform duration-300 group-hover/link:translate-x-2">
              arrow_forward
            </span>
          </Link>
        </div>

        {/* Software Provider */}
        <div className="bg-surface-container-lowest border border-outline-variant p-8 rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between">
          <div>
            <div className="mb-6">
              <span className="material-symbols-outlined text-edutech-cyan text-4xl group-hover:scale-110 transition-transform">inventory_2</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-trust-navy mb-4 font-bold group-hover:text-primary transition-colors">
              Software & Digital Product Provider
            </h3>
            <p className="text-on-surface-variant mb-6 leading-relaxed">
              Penyediaan tools operasional, template administrasi, dan solusi perangkat lunak yang siap pakai atau kustom.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center justify-between p-3 bg-surface-container rounded-xl">
                <span className="font-medium text-sm">Educational Software</span>
                <span className="material-symbols-outlined text-primary text-sm">open_in_new</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-surface-container rounded-xl">
                <span className="font-medium text-sm">Productivity Templates</span>
                <span className="material-symbols-outlined text-primary text-sm">open_in_new</span>
              </div>
            </div>
          </div>
          <Link
            to="/service/software-provider"
            className="flex items-center gap-2 text-primary font-bold group/link inline-flex"
          >
            <span>Lihat Detail</span>
            <span className="material-symbols-outlined transition-transform duration-300 group-hover/link:translate-x-2">
              arrow_forward
            </span>
          </Link>
        </div>

        {/* Event & MICE */}
        <div className="bg-white border border-outline-variant p-8 rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between">
          <div>
            <div className="mb-6">
              <span className="material-symbols-outlined text-action-orange text-4xl group-hover:scale-110 transition-transform">groups</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-trust-navy mb-4 font-bold group-hover:text-primary transition-colors">
              Event, Workshop & MICE
            </h3>
            <p className="text-on-surface-variant mb-6 leading-relaxed">
              Penyelenggaraan event profesional berskala nasional. Seminar, workshop, sertifikasi hingga outbound training.
            </p>
          </div>
          <Link
            to="/service/event-mice"
            className="inline-flex items-center gap-1 text-action-orange font-bold text-sm group/link"
          >
            <span>FULL ECOSYSTEM SUPPORT</span>
            <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover/link:translate-x-2">
              arrow_right_alt
            </span>
          </Link>
        </div>
      </div>

      {/* Advantages Section */}
      <section className="mb-24 py-16 bg-surface-gray rounded-3xl px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display-lg text-headline-lg text-trust-navy mb-8">Mengapa Bermitra Dengan Kami?</h2>
            <div className="space-y-6">
              {[
                { icon: 'tune', title: 'Customizable & Fleksibel', desc: 'Program dirancang khusus sesuai dengan dinamika dan tantangan unik organisasi Anda.' },
                { icon: 'construction', title: 'Berorientasi Praktik', desc: 'Fokus pada implementasi nyata di lapangan, bukan sekadar teori akademis belaka.' },
                { icon: 'devices', title: 'Dukungan Transformasi Digital', desc: 'Integrasi teknologi dalam setiap aspek pelatihan dan pengembangan operasional.' },
              ].map((adv, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="bg-primary/10 w-12 h-12 shrink-0 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <span className="material-symbols-outlined">{adv.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-trust-navy mb-1 group-hover:text-primary transition-colors">{adv.title}</h4>
                    <p className="text-on-surface-variant text-sm">{adv.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 img-zoom-container">
              <img
                className="w-full h-full object-cover"
                alt="High-tech digital laboratory"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnXsF3-5f-cZNI206Qc9VikNS2rYCJ3ZaaS8rMlBYZqvNJH9DdYjX42Pj9tVUWOsTdF4_3tP4xs8oacru6cWZzxPU_Ty7ludFeXJ6ZJ2x2DvFJaXoQE2IwPAVMO6PszEUdoVU_oH_sZC3TIz2wMHpo8K4aEdmjyfgYhCL28w6RBHsCdAXJPSmPaj0j533hgMdL4ViCY3CB_m69L_6jwD4RLE3_TQW6TD6R_1PZ75dWLcaMJ_z-yGK5HQ5V6ahUz8uxPD2uID930S2w"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-action-orange text-white p-6 rounded-2xl shadow-xl max-w-xs animate-bounce" style={{ animationDuration: '3s' }}>
              <p className="font-bold text-lg mb-1">Ready to Scale?</p>
              <p className="text-xs text-white/90">Konsultasikan kebutuhan pengembangan tim Anda hari ini secara gratis.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative rounded-3xl overflow-hidden py-24 text-center bg-trust-navy shadow-2xl">
        <div className="relative z-10 px-8">
          <h2 className="font-display-lg text-headline-lg text-white mb-6">Mencetak Profesional Unggul Untuk Indonesia</h2>
          <p className="text-white/80 text-body-lg max-w-2xl mx-auto mb-10">
            Jadilah bagian dari ekosistem transformasi digital bersama Edutech Solution. Kami siap menjadi partner strategis dalam setiap langkah pertumbuhan Anda.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-action-orange text-white px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-lg btn-glow inline-block"
            >
              Mulai Konsultasi Gratis
            </Link>
            <Link
              to="/program"
              className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all inline-block"
            >
              Lihat Katalog Program
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LayananIndex;

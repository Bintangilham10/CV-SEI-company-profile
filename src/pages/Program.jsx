import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const Program = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-surface-container-low">
        <div className="relative px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="animate-fadeInUp" className="max-w-2xl">
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest bg-primary-fixed/30 px-3 py-1 rounded-full inline-block mb-6 animate-pulse">
                Solusi Teknologi Terpadu
              </span>
              <h1 className="font-display-lg text-display-lg text-trust-navy mb-6">Produk dan Jasa Unggulan</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                CV SEI menghadirkan rangkaian solusi pendidikan, teknologi, dan konsultasi berkualitas tinggi yang dirancang untuk mempercepat transformasi digital dan pengembangan kompetensi profesional di organisasi Anda.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-primary-container hover:shadow-xl hover:-translate-y-1 transition-all duration-300 inline-flex group"
                >
                  <span>Konsultasi Program</span>
                  <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1.5">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="animate-zoomIn" delay={200} className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl img-zoom-container">
                <img
                  alt="Modern digital workplace"
                  className="w-full h-auto rounded-2xl object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9XL__cwwXgSzQi8htVtvj8VNbAKYsEPowFd2I-ERnZDEQHcJ6UfueScaSIX6YQSx9VQkhg9MEi6MLzEtltaMDRcD5kc63b2Rgu7hNldS4S5Fdn7c8Yrb--SV9wkcajgrh5b0635PgCGgHhYpDOf9xFUjNG-p_WQcMUpex7wpEsBWB8gjsu3x4pv7SiIxxQr7VsN9Mytb9hmjSTzt4vF0tNN_VwbgiG9irIfWVgIPgR1CQUhnqd2tJcrJncxVuev9wk4tKWd4nMFo"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Bento Grid Programs */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <AnimatedSection className="mb-16">
          <p className="text-label-sm text-on-surface-variant opacity-70 uppercase tracking-widest mb-4">
            CV SOLUSI EDUKASI INDONESIA | Education • Training • Consulting • IT Solution • MICE
          </p>
          <h2 className="font-headline-lg text-headline-lg text-trust-navy mb-2">Program Unggulan Kami</h2>
          <div className="h-1 w-32 bg-gradient-to-r from-action-orange to-transparent rounded-full"></div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {[
            { icon: 'groups', title: 'Corporate Training Program', desc: 'Program pelatihan untuk meningkatkan kompetensi karyawan berdasarkan kebutuhan perusahaan. Materi dapat disesuaikan dengan level peserta, tujuan bisnis, dan kondisi organisasi.' },
            { icon: 'business', title: 'In-House Training', desc: 'Pelatihan khusus untuk perusahaan dengan materi, jadwal, lokasi, dan studi kasus yang disesuaikan dengan kebutuhan internal klien.' },
            { icon: 'public', title: 'Public Training', desc: 'Program pelatihan terbuka untuk peserta umum, profesional, fresh graduate, maupun perusahaan yang ingin mengirim peserta secara individu.' },
            { icon: 'psychology', title: 'Digital Skill Development', desc: 'Program pengembangan kemampuan digital seperti AI tools, data analytics, digital marketing, programming, IT support, cybersecurity awareness, dan office productivity.' },
            { icon: 'query_stats', title: 'Management & Business Consulting', desc: 'Layanan konsultasi untuk membantu perusahaan menyusun strategi pengembangan SDM, proses kerja, SOP, dan peningkatan performa organisasi.' },
            { icon: 'terminal', title: 'Website & Application Development', desc: 'Pengembangan website, landing page, sistem informasi, dan aplikasi berbasis web untuk kebutuhan promosi, administrasi, operasional, dan pelaporan.' },
            { icon: 'event_available', title: 'Professional Event Organizer', desc: 'Penyelenggaraan seminar, workshop, konferensi, webinar, gathering edukatif, dan program pengembangan tim secara profesional.' },
            { icon: 'verified', title: 'Certification Preparation Program', desc: 'Program persiapan sertifikasi untuk membantu peserta memahami materi, struktur ujian, studi kasus, dan kompetensi sebelum mengikuti sertifikasi melalui lembaga atau mitra terkait.' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group glass-card rounded-2xl border border-white/40 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:scale-[1.03] p-8 flex flex-col h-full shadow-lg"
            >
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-primary/10 blur-2xl rounded-full group-hover:bg-primary/30 transition-colors"></div>
                <div className="relative bg-surface-container-low p-4 rounded-xl w-fit group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <span className="material-symbols-outlined text-4xl text-primary group-hover:text-white">{item.icon}</span>
                </div>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 text-trust-navy font-bold leading-tight group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="font-body-md text-on-surface-variant/80 flex-grow leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Program;

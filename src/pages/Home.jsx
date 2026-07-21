import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden py-16">
        <div className="absolute inset-0 z-0 opacity-10"></div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-gutter items-center relative z-10">
          <AnimatedSection animation="animate-fadeInUp">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full font-label-sm text-label-sm mb-6 animate-pulse">
              CV SOLUSI EDUKASI INDONESIA
            </span>
            <h1 className="font-display-lg text-display-lg md:text-[64px] leading-tight text-on-primary-fixed mb-6">
              Edutech Solution: <br />
              <span className="text-primary italic">Pelatihan Praktis</span> <br />
              dan Aplikatif
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl">
              Solusi edukasi, konsultasi, teknologi, dan event profesional untuk mendukung pertumbuhan organisasi Anda. Mencetak profesional unggul, untuk Indonesia yang lebih baik.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold hover:bg-primary-container hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group inline-flex"
              >
                Mulai Konsultasi
                <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1.5">
                  arrow_forward
                </span>
              </Link>
              <Link
                to="/program"
                className="border-2 border-trust-navy text-trust-navy px-8 py-4 rounded-xl font-bold hover:bg-trust-navy hover:text-white hover:-translate-y-1 transition-all duration-300 inline-block"
              >
                Jelajahi Program
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="animate-zoomIn" delay={200} className="relative hidden md:block">
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-edutech-cyan/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-action-orange/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="rounded-3xl overflow-hidden shadow-2xl relative border border-white/20 aspect-video md:aspect-[4/5] img-zoom-container">
              <img
                className="w-full h-full object-cover"
                alt="Workspace collaboration"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbUFvAVp8D-p4GjIxDNjhTm54lovcFZ3p497CSY4IqVZKc1gYjtR-6ImLKZlzsqbmzUD5vSUAmMQDw_3MnyqmBCuNiWX0r8YomN-Hk8fTpOlSyVEUtOPy4jJjCtzvFXzZCSv8fzo2wbsdvKZq0Ub_GCu6f6oU-BcN5I3oiMePCmFrUW_hi4FcQwtFFwxTU-mavtZAXK6pD7D4fyF0vYbFF6LgeMLv95Cu-MNtVu3IZu037VYdKeG9lKw0Pcs0pphXDKrgFSHtEw6A"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Summary - Bento Grid */}
      <section className="py-24 bg-gradient-to-b from-surface-gray to-white relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <AnimatedSection className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="font-display-lg text-headline-lg text-trust-navy mb-4">Layanan Utama Kami</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Ekosistem terintegrasi untuk transformasi kompetensi dan infrastruktur digital Anda.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Card 1 */}
            <div className="md:col-span-4 bg-white p-8 rounded-[32px] border border-outline-variant/50 shadow-sm hover:shadow-2xl hover:-translate-y-2.5 transition-all duration-300 flex flex-col group">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                <span className="material-symbols-outlined text-3xl">school</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-trust-navy mb-4 font-bold">
                Training & Professional Development
              </h3>
              <p className="text-on-surface-variant mb-8 font-body-md flex-grow leading-relaxed">
                Program pengembangan kompetensi komprehensif mulai dari IT, Cybersecurity, AI, hingga Leadership dan Sales.
              </p>
              <Link
                to="/service/training"
                className="flex items-center gap-2 text-primary font-bold group/link inline-flex"
              >
                <span>Lihat Selengkapnya</span>
                <span className="material-symbols-outlined transition-transform duration-300 group-hover/link:translate-x-2">
                  arrow_forward
                </span>
              </Link>
            </div>

            {/* Card 2 */}
            <div className="md:col-span-4 bg-white p-8 rounded-[32px] border border-outline-variant/50 shadow-sm hover:shadow-2xl hover:-translate-y-2.5 transition-all duration-300 flex flex-col group">
              <div className="w-16 h-16 rounded-2xl bg-trust-navy/10 text-trust-navy flex items-center justify-center mb-8 group-hover:bg-trust-navy group-hover:text-white group-hover:scale-110 transition-all duration-300">
                <span className="material-symbols-outlined text-3xl">query_stats</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-trust-navy mb-4 font-bold">
                Management Consulting
              </h3>
              <p className="text-on-surface-variant mb-8 font-body-md flex-grow leading-relaxed">
                Strategi bisnis, TNA, penyusunan SOP, dan assessment organisasi untuk efektivitas maksimal.
              </p>
              <Link
                to="/service/management"
                className="flex items-center gap-2 text-primary font-bold group/link inline-flex"
              >
                <span>Lihat Selengkapnya</span>
                <span className="material-symbols-outlined transition-transform duration-300 group-hover/link:translate-x-2">
                  arrow_forward
                </span>
              </Link>
            </div>

            {/* Card 3 */}
            <div className="md:col-span-4 bg-white p-8 rounded-[32px] border border-outline-variant/50 shadow-sm hover:shadow-2xl hover:-translate-y-2.5 transition-all duration-300 flex flex-col group">
              <div className="w-16 h-16 rounded-2xl bg-edutech-cyan/10 text-edutech-cyan flex items-center justify-center mb-8 group-hover:bg-edutech-cyan group-hover:text-white group-hover:scale-110 transition-all duration-300">
                <span className="material-symbols-outlined text-3xl">developer_mode</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-trust-navy mb-4 font-bold">
                IT Solution & Web Dev
              </h3>
              <p className="text-on-surface-variant mb-8 font-body-md flex-grow leading-relaxed">
                Pengembangan website, sistem informasi, dashboard reporting, dan digitalisasi proses bisnis.
              </p>
              <Link
                to="/service/it-solution"
                className="flex items-center gap-2 text-primary font-bold group/link inline-flex"
              >
                <span>Lihat Selengkapnya</span>
                <span className="material-symbols-outlined transition-transform duration-300 group-hover/link:translate-x-2">
                  arrow_forward
                </span>
              </Link>
            </div>

            {/* Card 4 */}
            <div className="md:col-span-6 bg-white p-8 rounded-[32px] border border-outline-variant/50 shadow-sm hover:shadow-2xl hover:-translate-y-2.5 transition-all duration-300 flex flex-col md:flex-row gap-8 group">
              <div className="w-16 h-16 rounded-2xl bg-action-orange/10 text-action-orange flex-shrink-0 flex items-center justify-center group-hover:bg-action-orange group-hover:text-white group-hover:scale-110 transition-all duration-300">
                <span className="material-symbols-outlined text-3xl">inventory_2</span>
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="font-headline-md text-headline-md text-trust-navy mb-4 font-bold">
                    Software Provider
                  </h3>
                  <p className="text-on-surface-variant mb-6 font-body-md leading-relaxed">
                    Penyediaan tools digital produktivitas, software edukatif, dan template administrasi kustom.
                  </p>
                </div>
                <Link
                  to="/service/software-provider"
                  className="flex items-center gap-2 text-primary font-bold group/link inline-flex"
                >
                  <span>Lihat Selengkapnya</span>
                  <span className="material-symbols-outlined transition-transform duration-300 group-hover/link:translate-x-2">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>

            {/* Card 5 */}
            <div className="md:col-span-6 bg-white p-8 rounded-[32px] border border-outline-variant/50 shadow-sm hover:shadow-2xl hover:-translate-y-2.5 transition-all duration-300 flex flex-col md:flex-row gap-8 group">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex-shrink-0 flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                <span className="material-symbols-outlined text-3xl">groups_2</span>
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="font-headline-md text-headline-md text-trust-navy mb-4 font-bold">
                    Event & MICE
                  </h3>
                  <p className="text-on-surface-variant mb-6 font-body-md leading-relaxed">
                    Penyelenggaraan seminar, workshop, gathering edukatif, dan sertifikasi profesional berkualitas.
                  </p>
                </div>
                <Link
                  to="/service/event-mice"
                  className="flex items-center gap-2 text-primary font-bold group/link inline-flex"
                >
                  <span>Lihat Selengkapnya</span>
                  <span className="material-symbols-outlined transition-transform duration-300 group-hover/link:translate-x-2">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metode Pelaksanaan & Alur Kerja */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <AnimatedSection className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="font-display-lg text-headline-lg text-trust-navy mb-4">Bagaimana Kami Bekerja?</h2>
            <p className="font-body-md text-on-surface-variant">
              Pendekatan fleksibel dan terstruktur untuk memastikan keberhasilan setiap program Anda.
            </p>
          </AnimatedSection>

          {/* Metode Pelaksanaan */}
          <div className="mb-20">
            <h3 className="font-headline-md text-headline-md text-trust-navy mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-edutech-cyan rounded-full"></span>
              Metode Pelaksanaan
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { icon: 'groups', name: 'Offline', desc: 'Tatap muka di lokasi klien, venue, hotel, kampus, atau kantor penyelenggara.' },
                { icon: 'laptop_mac', name: 'Online', desc: 'Melalui platform virtual meeting dengan materi digital dan diskusi interaktif.' },
                { icon: 'devices_other', name: 'Hybrid', desc: 'Gabungan offline dan online untuk menjangkau peserta dari berbagai lokasi.' },
                { icon: 'domain', name: 'In-House', desc: 'Program khusus yang dirancang eksklusif untuk satu perusahaan atau instansi.' },
                { icon: 'public', name: 'Public Class', desc: 'Program terbuka untuk peserta dari berbagai organisasi atau individu profesional.' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-outline-variant/50 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                >
                  <div className="text-edutech-cyan mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                  </div>
                  <h4 className="font-bold text-trust-navy mb-2 group-hover:text-primary transition-colors">{item.name}</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Alur Kerja Layanan */}
          <div>
            <h3 className="font-headline-md text-headline-md text-trust-navy mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-edutech-cyan rounded-full"></span>
              Alur Kerja Layanan
            </h3>
            <div className="space-y-6">
              {[
                { step: 1, title: 'Identifikasi Kebutuhan', desc: 'Identifikasi kebutuhan klien, tujuan, target peserta, tantangan, dan output yang diharapkan.' },
                { step: 2, title: 'Penyusunan Solusi', desc: 'Penyusunan solusi berupa rekomendasi program, materi, metode, durasi, jadwal, dan kebutuhan pendukung.' },
                { step: 3, title: 'Pelaksanaan Program', desc: 'Pelaksanaan program oleh trainer, konsultan, tim teknis, atau tim event sesuai ruang lingkup pekerjaan.' },
                { step: 4, title: 'Evaluasi & Dokumentasi', desc: 'Evaluasi dan dokumentasi kegiatan untuk mengukur efektivitas program.' },
                { step: 5, title: 'Continuous Improvement', desc: 'Melalui rekomendasi program lanjutan, konsultasi tambahan, atau pengembangan sistem digital.' },
              ].map((item, index, arr) => (
                <AnimatedSection key={item.step} delay={index * 100} className="flex gap-6 items-start relative">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-trust-navy text-white flex items-center justify-center font-bold z-10 shadow-md">
                    {item.step}
                  </div>
                  {index < arr.length - 1 && (
                    <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-outline-variant/30 -mb-6"></div>
                  )}
                  <div className="bg-white p-6 rounded-2xl border border-outline-variant/50 shadow-sm hover:shadow-md transition-all flex-grow">
                    <h4 className="font-bold text-trust-navy mb-1">{item.title}</h4>
                    <p className="text-on-surface-variant">{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Keunggulan Kami */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <AnimatedSection className="mb-16 text-center max-w-3xl mx-auto">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-4 block">
              Mengapa Memilih Kami
            </span>
            <h2 className="font-display-lg text-headline-lg text-trust-navy mb-4">Keunggulan Kami</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Kami memberikan nilai lebih melalui pendekatan yang komprehensif dan berorientasi pada hasil nyata.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: 'tune', title: 'Program Fleksibel', desc: 'Program fleksibel dan customizable sesuai kebutuhan organisasi.' },
              { icon: 'handyman', title: 'Praktik & Implementasi', desc: 'Berorientasi praktik dan implementasi, bukan hanya teori.' },
              { icon: 'badge', title: 'Tenaga Ahli Profesional', desc: 'Dapat menghadirkan trainer, konsultan, dan praktisi sesuai bidang keahlian.' },
              { icon: 'devices', title: 'Dukungan Digital', desc: 'Mendukung transformasi digital melalui website, aplikasi, software, dan dashboard.' },
              { icon: 'gavel', title: 'Legalitas Jelas', desc: 'Legalitas usaha jelas dengan NIB yang diterbitkan melalui sistem OSS.' },
              { icon: 'hub', title: 'Layanan Terintegrasi', desc: 'Layanan terintegrasi: pelatihan, konsultasi, teknologi, software, dan event dalam satu ekosistem.' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-outline-variant/50 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <h4 className="font-headline-md text-body-lg font-bold text-trust-navy mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-on-surface-variant font-body-md">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Segmentasi Klien Kami */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <AnimatedSection className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="font-display-lg text-headline-lg text-trust-navy mb-4">Segmentasi Klien Kami</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              CV Solusi Edukasi Indonesia melayani berbagai kebutuhan dari sektor perusahaan, pemerintahan, pendidikan, komunitas, dan individu profesional.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'corporate_fare', title: 'Korporat & Pemerintahan', desc: 'Perusahaan swasta, BUMN, anak perusahaan, dan instansi pemerintah.' },
              { icon: 'school', title: 'Pendidikan & Komunitas', desc: 'Lembaga pendidikan, kampus, sekolah vokasi, dan komunitas profesional.' },
              { icon: 'storefront', title: 'UMKM & Profesional', desc: 'UMKM, startup, organisasi nonprofit, dan individu profesional.' },
              { icon: 'factory', title: 'Industri Spesifik', desc: 'Teknologi informasi, manufaktur, pertambangan, energi, telekomunikasi, keuangan, dan perbankan.' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-outline-variant/50 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-trust-navy/10 text-trust-navy flex items-center justify-center mb-6 group-hover:bg-trust-navy group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <h4 className="font-headline-md text-body-lg font-bold text-trust-navy mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-on-surface-variant font-body-md text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <AnimatedSection className="bg-on-primary-fixed rounded-[32px] p-12 md:p-20 relative overflow-hidden shadow-2xl">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <h2 className="font-display-lg text-display-lg text-white mb-6">
                  Siap Mengakselerasi Organisasi Anda?
                </h2>
                <p className="font-body-lg text-body-lg text-surface-variant mb-10">
                  Dapatkan solusi pelatihan dan konsultasi yang dirancang khusus untuk kebutuhan spesifik perusahaan atau instansi Anda. Tim kami siap memberikan layanan profesional, responsif, dan solutif.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="bg-action-orange text-white px-10 py-5 rounded-xl font-bold hover:scale-105 transition-all text-center inline-block shadow-lg btn-glow"
                  >
                    Mulai Konsultasi Gratis
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-video md:aspect-square img-zoom-container">
                  <img
                    alt="Collaborative business meeting"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMjAU-_-Tqcukf6mYTyhsKs-stBFcaF1z4vq9IKjosUlECVXAQf5EeU69wJV-Xd4LJxZ6ZkujKwMJwUxXnNvW2OCcoir3Zh2_uMp1t5rCkQoCo7iU4OqZI8_m5mzDcif46nXrXzPjzq-58hY-RVEEtlYVt3S6c9gvbmKngiznDGz-1sG-ZtFm_vv-7evNbCvW77rlr8fxa9R5o6nyLJ6b_Psf6COqpP-jtbgFBhQArH8MWWTjuPky2HB6kaFjL8yO4tyYbpVmAMB8"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Home;

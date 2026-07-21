import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const Portofolio = () => {
  const [filter, setFilter] = useState('Semua');

  const portfolioItems = [
    {
      id: 1,
      category: 'Pelatihan & Seminar',
      badge: 'Seminar',
      badgeBg: 'bg-primary/90',
      title: 'Future Leadership Forum 2024',
      date: 'Mei 2024',
      location: 'Jakarta',
      desc: 'Strategi pertumbuhan dan inovasi untuk pemimpin masa depan di era transformasi digital global.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDb9NghB1wHZyIcoMzklfkJaud7EQ3amL-M6tH5w06ZjlKuSZFQoml9Gn0niehXkCg8dKjyBj6rxIHyTDJ58DVVZ-L9QhytIrxteEBZCQhVFcioczPs1cLycADcwyURm_0lwPMwTldkRTsOdpngLsLTIUxJa_nCQuInONr1IQ9RTMdCIqrRhqLJz2EhTLmmZT8JJ9TXEqCM1YIQa3LGUjHhLnsZdlWH-c6qrfwEZjMsQ1Itorpgj90kjtoTqbF9n7C53kxv85F22R4',
    },
    {
      id: 2,
      category: 'Proyek Digital',
      badge: 'Digital Project',
      badgeBg: 'bg-edutech-cyan/90',
      title: 'Quantum IT Analytics Hub',
      date: 'April 2024',
      location: 'Dashboard Analytic',
      desc: 'Pengembangan sistem dashboard pemantauan performa real-time untuk efisiensi operasional IT.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWMjbagcU9y_8HcgblbE7A9Bf-IDCiRjHoPmLrjPkU3VcS6_tOZB3LGVbSQsld1nSU-cJq3X3Ng5xcZalgdeAsaIG8iSerZU2a0aTLY2k07j3_hbFO3W7qXDJaWA0bJQg-3Le_piy439jssEER4xgktPr4zP4LA_sYRY8dJ13ViphearrlGrW0rcqBHJZdCbxFC7xkLDGumbzM-zZpgJU1685R28ibdGkjXI587zNZrOjIJRSmnMPL9oY8haFZ2_egN46PqwzdJ0M',
    },
    {
      id: 3,
      category: 'Pelatihan & Seminar',
      badge: 'Workshop',
      badgeBg: 'bg-action-orange/90',
      title: 'Synergy Strategy Workshop',
      date: 'Maret 2024',
      location: 'Bandung',
      desc: 'Sesi kolaboratif tingkat tinggi untuk menyelaraskan visi departemen dan meningkatkan produktivitas tim.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAanf9oAHwLT7MApMxI75FK-w1tzK19QD4ZW8MVMInQGMpgKQ3YMJp64RM8kQ86_Nr4EmTbtewGsqEyOocO3pF8zMdujsoOUNokmVLI-2Nq0lrMoiCg5Z5Y6TsVmpde0MGHzJxzu9Jcb8ROyu0IhB6fMNg5P44mVaZSXhH1v0YWNhEsie2d2j3mkij9-w8wthdOg9rhXMQ41IpuhETR2Wl3Gf2lOD8t2JNKv5FMw04JQeXj-wtkFTuC0zLlppQWYbpvAdAByOQ3ybY',
    },
  ];

  const filteredItems = filter === 'Semua' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-trust-navy">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 py-12">
          <AnimatedSection animation="animate-fadeInUp" className="max-w-2xl">
            <span className="font-label-sm text-label-sm uppercase tracking-widest mb-4 block text-white animate-pulse">
              Aktivitas & Hasil Kerja
            </span>
            <h1 className="font-display-lg text-display-lg mb-6 text-white">Portofolio Kami</h1>
            <p className="font-body-lg text-body-lg leading-relaxed text-surface-variant">
              Dokumentasi perjalanan kami dalam memberdayakan talenta melalui pelatihan intensif, seminar inspiratif, serta pengembangan solusi digital yang transformatif bagi berbagai instansi.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery / Filters */}
      <section className="py-16 bg-white">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          {/* Filter buttons */}
          <div className="flex flex-wrap gap-4 mb-12 border-b border-outline-variant pb-6">
            {['Semua', 'Pelatihan & Seminar', 'Proyek Digital', 'Sertifikasi'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 font-semibold rounded-full transition-all duration-300 ${
                  filter === cat
                    ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
                    : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high hover:scale-102'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="portfolio-card bg-white border border-outline-variant/30 rounded-2xl overflow-hidden flex flex-col group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden img-zoom-container">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt={item.title}
                    src={item.img}
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`${item.badgeBg} text-white px-3 py-1 text-xs font-bold rounded-lg uppercase tracking-wider backdrop-blur-md shadow-md`}>
                      {item.badge}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <div className="flex items-center gap-2 mb-3 text-outline font-label-sm">
                    <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                    <span>{item.date}</span>
                    <span className="mx-2">•</span>
                    <span className="material-symbols-outlined text-[16px]">location_on</span>
                    <span>{item.location}</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-trust-navy mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{item.desc}</p>
                </div>
                <div className="px-6 pb-6 mt-auto">
                  <Link to="/contact" className="text-primary font-bold inline-flex items-center gap-2 group/link">
                    <span>Lihat Detail</span>
                    <span className="material-symbols-outlined transition-transform duration-300 group-hover/link:translate-x-2">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            ))}

            {/* Featured Item: Sertifikasi & Digital Training */}
            <div className="portfolio-card bg-white border border-outline-variant/30 rounded-2xl overflow-hidden flex flex-col group lg:col-span-2 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-full overflow-hidden img-zoom-container">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt="Pelatihan Digital Transformation"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1h2mN81IrNwQv5p2VzUdmS6nsG0r4bQwcm4O26ijLB8U_-AthgQ26gplWWwFVZcFqpLpcIb9qC6dvtQ--iAPM-R5v46Je0JbUQsE5gWfs62wRYe0C1kWwKLEYjKacqgR_hCCs-GMlGEHO5MJ96lNnSQFkVAcgb4VPVFFbm1_vic3LZ6ZgdBM1wSgleN-gX3nOjL2Yqk16b7ecQ3NlV7nIffjGfqwYO1-V9xnkLxe7dJrGOgNkJ-RbRp-cD5SIyGdQLm8BQGDAVLA"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-trust-navy/90 text-white px-3 py-1 text-xs font-bold rounded-lg uppercase tracking-wider backdrop-blur-md">
                      Pelatihan
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4 text-outline font-label-sm">
                    <span className="material-symbols-outlined text-[16px]">verified</span>
                    <span>Program Unggulan</span>
                    <span className="mx-2">•</span>
                    <span>Sertifikasi Nasional</span>
                  </div>
                  <h3 className="font-headline-lg text-headline-lg text-trust-navy mb-4 group-hover:text-primary transition-colors">
                    Pelatihan Digital Transformation & Uji Kompetensi
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                    Program intensif yang dirancang untuk membekali tenaga kerja dengan keahlian teknis modern, diakhiri dengan uji kompetensi resmi bersertifikat BNSP.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-surface-container-high rounded-full text-xs font-semibold text-trust-navy">Cybersecurity</span>
                    <span className="px-3 py-1 bg-surface-container-high rounded-full text-xs font-semibold text-trust-navy">Data Science</span>
                    <span className="px-3 py-1 bg-surface-container-high rounded-full text-xs font-semibold text-trust-navy">AI Integration</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-trust-navy rounded-2xl p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-edutech-cyan/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-action-orange/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <h3 className="font-headline-md text-headline-md text-white mb-4 relative z-10">Punya Proyek Impian?</h3>
              <p className="font-body-md text-body-md text-on-secondary/80 mb-8 relative z-10 leading-relaxed">
                Mari berkolaborasi untuk menciptakan solusi pendidikan dan digital yang luar biasa bersama tim kami.
              </p>
              <Link
                to="/contact"
                className="px-8 py-3.5 bg-action-orange text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg btn-glow relative z-10 inline-block"
              >
                Mulai Konsultasi
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-surface-gray border-y border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter text-center">
            <div>
              <div className="font-display-lg text-display-lg text-primary mb-1 font-extrabold">150+</div>
              <div className="font-label-sm text-label-sm text-outline uppercase">Pelatihan Selesai</div>
            </div>
            <div>
              <div className="font-display-lg text-display-lg text-primary mb-1 font-extrabold">25k+</div>
              <div className="font-label-sm text-label-sm text-outline uppercase">Peserta Terdaftar</div>
            </div>
            <div>
              <div className="font-display-lg text-display-lg text-primary mb-1 font-extrabold">45+</div>
              <div className="font-label-sm text-label-sm text-outline uppercase">Mitra Strategis</div>
            </div>
            <div>
              <div className="font-display-lg text-display-lg text-primary mb-1 font-extrabold">98%</div>
              <div className="font-label-sm text-label-sm text-outline uppercase">Kepuasan Klien</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portofolio;

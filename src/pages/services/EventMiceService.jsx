import React from 'react';
import { Link } from 'react-router-dom';

const EventMiceService = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[550px] flex items-center overflow-hidden bg-trust-navy py-20">
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full text-white lg:flex gap-12 items-center">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1 rounded-full bg-primary-container text-white font-label-sm text-label-sm mb-6">
              MICE & EDUCATIONAL EVENTS
            </span>
            <h1 className="font-display-lg text-display-lg mb-6 leading-tight">Event, Workshop, Conference & MICE</h1>
            <p className="font-body-lg text-body-lg text-surface-variant opacity-90 mb-8">
              CV SEI menyediakan layanan penyelenggaraan kegiatan profesional, baik dalam skala kecil maupun besar. Layanan ini meliputi perencanaan konsep, pengelolaan teknis, dukungan narasumber, registrasi, dokumentasi, hingga laporan kegiatan.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-action-orange px-8 py-4 rounded-lg font-bold text-white shadow-lg hover:scale-105 transition-transform inline-block"
              >
                Jadwalkan Konsultasi
              </Link>
              <Link
                to="/portofolio"
                className="border border-white border-opacity-30 px-8 py-4 rounded-lg font-bold text-white hover:bg-white hover:text-trust-navy transition-all inline-block"
              >
                Lihat Portfolio
              </Link>
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/2 ml-auto">
            <img
              alt="Professional business conference"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmtl5dwlmw2js5tG0E6NE-0fxxqVDAEyvBlHF--TC2H-SPoflon-Qdd72yJ1beZHeDT3HkA5dVr-q8yd9EMjHGgrOLdc4h4PKUDA-MecY4dNX7iOJVtZHb3b0X4YbLCjiys_vKCVHAKpmnG7_njtU8TmwnyBIZaGNOvgh9h3a_Yzk5YyyJBhNyUZ62NFmWnA9eyFIBckCg7IJQFf28WIZcYiFHdZTPwy61v96vhtJHf-D3jc703STippoD_WWjqHzZH3q8_L_GSr4"
            />
          </div>
        </div>
      </section>

      {/* Main Services Bento Grid */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="font-headline-lg text-headline-lg text-trust-navy mb-4">Layanan Penyelenggaraan Utama</h2>
          <p className="text-on-surface-variant opacity-80">
            Kami menggabungkan keahlian logistik dengan substansi edukasi untuk menciptakan ekosistem belajar yang berdampak tinggi.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service 1 */}
          <div className="group relative overflow-hidden rounded-xl bg-white p-8 border border-outline-variant shadow-sm transition-all hover:-translate-y-2">
            <div className="w-14 h-14 bg-primary-fixed rounded-lg flex items-center justify-center mb-6 text-primary">
              <span className="material-symbols-outlined text-3xl">groups</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-trust-navy mb-4">Seminar & Workshop</h3>
            <p className="text-on-surface-variant">Seminar, workshop, training corporate, konferensi, webinar, talkshow profesional.</p>
          </div>

          {/* Service 2 */}
          <div className="group relative overflow-hidden rounded-xl bg-white p-8 border border-outline-variant shadow-sm transition-all hover:-translate-y-2">
            <div className="w-14 h-14 bg-secondary-container rounded-lg flex items-center justify-center mb-6 text-on-secondary-container">
              <span className="material-symbols-outlined text-3xl">verified</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-trust-navy mb-4">Sertifikasi</h3>
            <p className="text-on-surface-variant">Sertifikasi dan uji kompetensi bersama mitra terkait.</p>
          </div>

          {/* Service 3 */}
          <div className="group relative overflow-hidden rounded-xl bg-white p-8 border border-outline-variant shadow-sm transition-all hover:-translate-y-2">
            <div className="w-14 h-14 bg-primary-fixed rounded-lg flex items-center justify-center mb-6 text-primary">
              <span className="material-symbols-outlined text-3xl">forest</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-trust-navy mb-4">Gathering & Training</h3>
            <p className="text-on-surface-variant">Gathering edukatif, leadership camp, outbound training.</p>
          </div>

          {/* Service 4 */}
          <div className="group relative overflow-hidden rounded-xl bg-trust-navy p-8 border border-outline-variant shadow-sm transition-all hover:-translate-y-2 text-white">
            <div className="w-14 h-14 bg-action-orange rounded-lg flex items-center justify-center mb-6 text-white">
              <span className="material-symbols-outlined text-3xl">assignment</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-4">Manajemen Lengkap</h3>
            <p className="text-surface-variant">
              Konsep acara, rundown, narasumber, trainer, moderator, MC, dokumentasi, sertifikat, dan laporan kegiatan.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-trust-navy text-white text-center">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="font-display-lg text-headline-lg mb-6">Punya Event atau Conference Mendatang?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">Percayakan kebutuhan Event Organizer & MICE instansi Anda kepada tim ahli kami.</p>
          <Link
            to="/contact"
            className="bg-action-orange text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all inline-block shadow-lg"
          >
            Konsultasi Event & MICE
          </Link>
        </div>
      </section>
    </>
  );
};

export default EventMiceService;

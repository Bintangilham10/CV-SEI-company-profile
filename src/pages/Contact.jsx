import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Training & Professional Development',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-16 pt-8">
        <AnimatedSection animation="animate-fadeInUp" className="relative overflow-hidden rounded-3xl bg-trust-navy p-12 md:p-20 shadow-2xl">
          <div className="absolute inset-0 z-0">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo3YmBf7f3Y_kbPIv8gYcLa7MP7qZ4s45B8HZ8gyifjQNyXmwZUFPOsTlMsJJny3AkdV2NkxdsxY4zMmx44pBH-epyBILB6wtnzns8wVl65SjOt4z-5rk4qn_-ORKS_boCqnPIbaV5FzWQ2SZNMrBgYJ4mst9SGGPgeJYRKajnYyuHIpPD2x84ZIlYY2CBQSN1wXWsn5ygVobDvdyiWPkFVHAHuIQt7uKmUNWxWz3cmfP6xFUIxXBIV0pdASvwGSQdmXNF8FQlaiU"
              alt="Corporate Background"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-trust-navy via-trust-navy/80 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <span className="font-label-sm text-label-sm text-action-orange bg-white/10 px-4 py-1.5 rounded-full inline-block mb-6 uppercase tracking-widest mx-auto animate-pulse">
              Hubungi Kami
            </span>
            <h1 className="font-display-lg text-display-lg text-white mb-6">Siap Bertransformasi Bersama Kami?</h1>
            <p className="font-body-lg text-body-lg text-surface-variant mb-0 leading-relaxed">
              Diskusikan kebutuhan pelatihan, konsultasi, dan solusi IT organisasi Anda dengan tim ahli dari CV Solusi Edukasi Indonesia.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          {/* Contact Info Panel */}
          <div className="lg:col-span-6 space-y-8">
            {/* Office Card */}
            <div className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-xl shadow-sm shrink-0 text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-trust-navy mb-2">Kantor Pusat</h3>
                  <p className="text-on-surface-variant leading-relaxed">Jl. Saluyu XII A No. 42, Cipamokolan, Rancasari, Kota Bandung, Jawa Barat 40232</p>
                  <a
                    className="inline-flex items-center gap-2 mt-4 text-primary font-bold hover:underline group"
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Petunjuk Arah</span>
                    <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">open_in_new</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {/* Email Card */}
              <div className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="p-3 bg-white rounded-xl shadow-sm w-fit mb-4 text-primary">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-trust-navy mb-2">Email</h3>
                <p className="text-on-surface-variant break-all">info@edutechsolution.co.id</p>
              </div>
              {/* Web Card */}
              <div className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="p-3 bg-white rounded-xl shadow-sm w-fit mb-4 text-primary">
                  <span className="material-symbols-outlined">language</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-trust-navy mb-2">Website</h3>
                <p className="text-on-surface-variant">edutechsolution.co.id</p>
              </div>
            </div>

            {/* Legal Info */}
            <div className="bg-white p-8 rounded-2xl border border-outline-variant shadow-sm relative overflow-hidden">
              <h3 className="font-label-sm text-label-sm text-primary mb-4 uppercase tracking-widest">Informasi Legalitas</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-outline-variant/60 pb-2">
                  <span className="text-on-surface-variant">Badan Hukum</span>
                  <span className="font-bold text-trust-navy">CV SEI</span>
                </div>
                <div className="flex justify-between items-center border-b border-outline-variant/60 pb-2">
                  <span className="text-on-surface-variant">NIB</span>
                  <span className="font-label-sm text-primary">2205260161665</span>
                </div>
                <div className="flex justify-between items-center border-b border-outline-variant/60 pb-2">
                  <span className="text-on-surface-variant">NPWP</span>
                  <span className="font-label-sm text-primary">10.000.000.9-726.986</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-6 bg-white p-8 md:p-12 rounded-3xl border border-outline-variant shadow-xl">
            <h3 className="font-headline-lg text-headline-lg text-trust-navy mb-2">Form Konsultasi</h3>
            <p className="text-on-surface-variant text-sm mb-8">Isi formulir berikut dan tim kami akan segera menghubungi Anda.</p>

            {submitted ? (
              <div className="bg-primary/10 border border-primary text-primary p-8 rounded-2xl text-center space-y-4 animate-zoomIn">
                <span className="material-symbols-outlined text-5xl">check_circle</span>
                <h4 className="font-bold text-xl">Pesan Terkirim!</h4>
                <p className="text-sm text-on-surface-variant">Terima kasih. Tim Edutech Solution akan merespons pesan Anda segera.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-primary text-white font-bold rounded-xl text-sm hover:bg-primary-container transition-colors"
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-trust-navy mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Nama Anda"
                    className="w-full px-4 py-3.5 rounded-xl border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-trust-navy mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@perusahaan.com"
                    className="w-full px-4 py-3.5 rounded-xl border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-trust-navy mb-2">Nomor Telepon / WhatsApp</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="081234567890"
                    className="w-full px-4 py-3.5 rounded-xl border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-trust-navy mb-2">Pilihan Layanan</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 bg-white"
                  >
                    <option value="Training & Professional Development">Training & Professional Development</option>
                    <option value="Management Consulting">Management Consulting</option>
                    <option value="IT Solution & Software Development">IT Solution & Software Development</option>
                    <option value="Software & Digital Product Provider">Software & Digital Product Provider</option>
                    <option value="Event, Workshop & MICE">Event, Workshop & MICE</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-trust-navy mb-2">Pesan / Detail Kebutuhan</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Jelaskan secara singkat kebutuhan organisasi Anda..."
                    className="w-full px-4 py-3.5 rounded-xl border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-action-orange text-white py-4 rounded-xl font-bold hover:bg-orange-600 hover:shadow-lg hover:shadow-action-orange/30 active:scale-98 transition-all duration-300 btn-glow"
                >
                  Kirim Pesan Konsultasi
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-24">
        <div className="rounded-3xl overflow-hidden border border-outline-variant shadow-lg h-[400px] relative img-zoom-container">
          <img
            className="w-full h-full object-cover"
            alt="Map view Bandung"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsFBr68jcRqxH1QWX5B_rF2tmTcRvXfIuzRdpkDz2JOwl1dXtorvQRTPS_J_SJ4Y9BL5gAe5mqAcoSxVdE-THfr6FtJK2N7vnGmQSSMtukkdc-aZzbX3gb3IMmodYrCSdiubr1bsFW3Puodxbi02SG89QgYftZMap3NXY48AmMx4-TNt-WWDU_fgQrP9bFwWF4CgIvIQK_QgQdu_U8QZ8vjUBPSTxTpCjkCECOTSinR-GtWrq9azdIUy0bWFkbde-vbX-k_UiWFp8"
          />
        </div>
      </section>
    </>
  );
};

export default Contact;

import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const About = () => {
  return (
    <>
      {/* Hero Section / Purpose */}
      <section className="relative h-[60vh] flex items-center overflow-hidden bg-trust-navy">
        <div className="absolute inset-0 z-0">
          <img
            alt="Modern training session and professional development workshop"
            className="w-full h-full object-cover opacity-40 scale-105 transition-transform duration-1000 hover:scale-100"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtQ0iclXxfPvd6L7UpFFg2G7jwZpFhd9x_Q9pWxTXxOHYugwe9pcthuGft7V3VLQ1EeAkMieLIxhWlijU8j5F7Dwrup4aBiVTEPy8vwJSaaARlFGlB-rYqxKvFeM-tD4xUWqzl9PFk3i9WtLQ58x9RflZ0lTduUtx1uCK-mVxENwp47F583HVrXu9TsXMGgA6Jb7Q-Ho2-ZOJ_u_DxUJvi6Sq9vJxuBNAalqhVRSJj3ZwQR9-NDJ8hfAbEzQLsoUzNwjhCi-sHKok"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-trust-navy via-trust-navy/80 to-transparent"></div>
        </div>
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-on-primary">
          <AnimatedSection animation="animate-fadeInUp">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-on-secondary-fixed-variant bg-on-primary-fixed/30 backdrop-blur-md mb-6 animate-pulse">
              <span className="material-symbols-outlined text-action-orange text-sm">stars</span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed">
                Tentang Kami
              </span>
            </div>
            <h1 className="font-display-lg text-display-lg mb-6 leading-tight max-w-3xl">
              Mencetak Profesional Unggul, untuk <span className="text-edutech-cyan">Indonesia yang Lebih Baik</span>.
            </h1>
            <p className="font-body-lg text-body-lg text-surface-variant max-w-2xl mb-8">
              Edutech Solution adalah brand sentral dari CV Solusi Edukasi Indonesia (CV SEI), sebuah lembaga pelatihan, konsultasi, dan teknologi informasi yang berfokus pada pendekatan praktis dan aplikatif.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Profile / Stats Bento */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-12 gap-gutter">
          {/* Main Desc */}
          <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest p-10 rounded-2xl border border-outline-variant shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <h2 className="font-headline-lg text-headline-lg mb-6 text-trust-navy">Profil Perusahaan</h2>
              <p className="font-body-md text-on-surface-variant mb-6 leading-relaxed">
                Edutech Solution hadir untuk membantu perusahaan, instansi pemerintah, institusi pendidikan, komunitas profesional, UMKM, startup, dan individu profesional meningkatkan kompetensi, efektivitas kerja, dan kesiapan menghadapi transformasi digital di dunia kerja modern.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[
                { label: 'NIB', value: '2205260161665' },
                { label: 'Brand', value: 'Edutech Solution' },
                { label: 'NPWP', value: '10.000.000.9-726.986' },
                { label: 'Lokasi', value: 'Bandung, Jawa Barat' },
              ].map((stat, i) => (
                <div key={i} className="p-4 bg-surface-container-low rounded-xl hover:bg-primary/10 transition-colors duration-300">
                  <span className="font-label-sm text-primary block mb-1">{stat.label}</span>
                  <span className="font-body-md font-bold">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="col-span-12 lg:col-span-4 h-full min-h-[300px] rounded-2xl overflow-hidden relative border border-outline-variant img-zoom-container shadow-md">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              alt="Office lobby"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2yGTgeR5vXunTj-56Q5zRG_oj_p7X6nibCWscq6i8pfwkR_olJr8uJJBiPOGktoQOALHTLVNSzdqUCEDVEUoD6fWVG5IXVocbjPxZjgqbUTy5qQZxMGXXZGlAUkbjZe1SX1NAik3V2FRQLwygA_MMnyizNc8uq_u7SJqfYa9_ermegiIURO3H1Fafu5UfUHPbBZgV4J8YFSRHeOcLgW-KDQSF-xfS4RGGXXB3zlLuXBzSId3dygdKowOfzdqlYJj1rFuRUg0AT8w"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-trust-navy/90 via-trust-navy/40 to-transparent flex items-end p-8">
              <p className="text-white font-body-md italic font-medium leading-tight">
                "Pelatihan Praktis dan Aplikatif untuk masa depan digital Indonesia."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Glass Cards */}
      <section className="py-24 bg-surface-container-low">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="flex flex-col lg:flex-row gap-gutter">
            {/* Vision */}
            <div className="lg:w-1/3 bg-white p-12 rounded-2xl border border-outline-variant shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-primary-container rounded-xl flex items-center justify-center mb-8 shadow-md">
                <span className="material-symbols-outlined text-white text-3xl">visibility</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-trust-navy mb-4">Visi</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Menjadi top of mind lembaga pelatihan dan sertifikasi profesional industri di Indonesia.
              </p>
            </div>

            {/* Mission */}
            <div className="lg:w-2/3 bg-trust-navy p-12 rounded-2xl text-white relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-action-orange rounded-full flex items-center justify-center animate-bounce">
                    <span className="material-symbols-outlined text-white">rocket_launch</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md">Misi Kami</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    { num: '01', text: 'Membangun tim yang kompeten, adaptif, dan berkemauan untuk terus belajar.' },
                    { num: '02', text: 'Membangun sistem operasional yang kolaboratif.' },
                    { num: '03', text: 'Memberikan pelayanan yang profesional, responsif, dan solutif.' },
                    { num: '04', text: 'Memperkuat fondasi pertumbuhan perusahaan.' },
                  ].map((m, idx) => (
                    <div key={idx} className="flex gap-4 group">
                      <span className="font-display-lg text-action-orange opacity-60 group-hover:opacity-100 transition-opacity">
                        {m.num}
                      </span>
                      <p className="font-body-md group-hover:text-action-orange transition-colors">{m.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Culture */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
        <AnimatedSection className="mb-16 max-w-2xl mx-auto">
          <h2 className="font-headline-lg text-headline-lg text-trust-navy mb-4">Budaya Perusahaan</h2>
          <p className="font-body-lg text-on-surface-variant">
            Nilai-nilai inti yang menggerakkan setiap langkah kami dalam melayani mitra dan klien.
          </p>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: 'menu_book', title: 'Belajar', desc: 'Terus mengembangkan pengetahuan dan keterampilan mengikuti perkembangan industri.' },
            { icon: 'groups', title: 'Bertumbuh Bersama', desc: 'Berkolaborasi dan berkembang bersama tim, klien, dan mitra kerja secara berkelanjutan.' },
            { icon: 'verified_user', title: 'Bertanggung Jawab', desc: 'Berkomitmen penuh terhadap kualitas dan hasil kerja terbaik yang diberikan kepada klien.' },
          ].map((c, i) => (
            <div
              key={i}
              className="group p-10 rounded-2xl bg-white border border-outline-variant hover:border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="w-20 h-20 bg-surface-container-low rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined text-primary text-4xl group-hover:text-white">{c.icon}</span>
              </div>
              <h4 className="font-headline-md text-trust-navy mb-4 group-hover:text-primary transition-colors">{c.title}</h4>
              <p className="font-body-md text-on-surface-variant leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <AnimatedSection className="mb-16">
            <h2 className="font-headline-lg text-headline-lg text-trust-navy mb-4">Tim Kami</h2>
            <p className="font-body-lg text-on-surface-variant">Para pemimpin dibalik keunggulan operasional CV Solusi Edukasi Indonesia.</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { role: 'Komisaris', name: 'Franciska Sukamdewi Megawati', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYqArMyqGSu0wC39zLDSOhYX8SBChh8cxGxJ5_C7xj6HXF-JH5S5qfO5r1HxYfck5Mnk0jKVrpVmpRhEh-IHqVOYxhxE097nJ-KGm159MQaKqcnRPlTBk2gazRUI2Zsnp2Evp_hxKwTXTzBguQkBSNrQ2_BtfGZpeZ7tC43-vU52MT1-i_LRV3iOJ4LSZfJRtve5HhDE3aUl1x6Ed0gBxt7gfqyj8IhIC-a95pklQO6nPvU31cKP_IuluVwhfNz8EVrof4DgP0WZU' },
              { role: 'Direktur', name: 'Yana Mulyana', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcXkkThPCQ5oNoOUKoZlpsKGXJQhK2olvkyLPMS_MhsKavUhToE56XyDcso0_qsIXpWg_SUNiSZcz5ESlD-7JepHOSjwGxfjN2inF_VKih0KBiuLTa7v41Fu__jPHzwh4R7vj0I5963AHyFX41GOCbz1AZq56c5JJbfskf-6v08eAxoycmR1HF9wBLg-PxVfDYzgqGXDptoO_qBj1oMV45Yg8aNy9SGgG8I2E7PKXgAXofeskMdSbW5xvnFTMljvf4OlV62UN0c1w' },
              { role: 'Keuangan', name: 'Setiani Hafsah', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXQj3E6kURNTzrR-zz9cfkznOgOToXxjeanV_yuIO2SqRUg1fgyS-psQH-yATgKbrSiLWDlbUVdSlvINz_ibDY8y7SscyUgFQd2jNw3okKrRijuMG7Ym9sZbHO2zXrVBnn9FwN9oaEbaFpoTbMfZqOBs_4ZFljqT-bRMAmn_Ik-D3cP8nazcRkPHefdXVtBeIWIM3mDMuoVOEohLZPrgBs-_cufAAywQNXlN_Ba4_VfzVghayDBIm9-riWN_t1MeAi_R-6LZx6RzU' },
            ].map((leader, idx) => (
              <div key={idx} className="relative group overflow-hidden rounded-2xl bg-surface shadow-md hover:shadow-2xl transition-all duration-500">
                <div className="aspect-[3/4] relative overflow-hidden img-zoom-container">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    alt={leader.name}
                    src={leader.img}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-trust-navy via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                  <span className="font-label-sm text-action-orange uppercase tracking-wider mb-2 block">{leader.role}</span>
                  <h4 className="font-headline-md">{leader.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop">
        <AnimatedSection className="max-w-container-max mx-auto bg-primary-container rounded-3xl p-12 lg:p-20 text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-2/3">
              <h2 className="font-display-lg text-display-lg mb-6 leading-tight">Siap Memulai Transformasi Profesional Anda?</h2>
              <p className="font-body-lg text-body-lg text-blue-100 opacity-90 max-w-xl">
                Hubungi tim konsultasi kami untuk mendapatkan program yang disesuaikan khusus untuk kebutuhan organisasi atau pengembangan karir Anda.
              </p>
            </div>
            <div className="lg:w-1/3 flex flex-col gap-4 w-full">
              <Link
                to="/contact"
                className="bg-action-orange text-white text-body-lg font-bold py-4 px-10 rounded-xl hover:bg-orange-600 hover:shadow-xl transition-all shadow-lg text-center btn-glow"
              >
                Konsultasi Sekarang
              </Link>
              <Link
                to="/program"
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 text-body-lg font-bold py-4 px-10 rounded-xl hover:bg-white/20 transition-all text-center"
              >
                Lihat Katalog Program
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
};

export default About;

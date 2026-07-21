import React from 'react';
import { Link } from 'react-router-dom';

const TrainingService = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-trust-navy overflow-hidden">
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <span className="font-label-sm text-label-sm text-edutech-cyan tracking-widest block mb-4 uppercase">
              Excellence in Learning
            </span>
            <h1 className="font-display-lg text-display-lg text-white mb-6 leading-tight">
              Training & Professional Development
            </h1>
            <p className="font-body-lg text-body-lg text-surface-variant mb-10 max-w-xl">
              CV SEI menyediakan layanan pelatihan dan pengembangan kompetensi untuk perusahaan, instansi, lembaga pendidikan, komunitas profesional, dan individu. Program dapat diselenggarakan dalam format public training, in-house training, online training, hybrid training, maupun customized program.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/program"
                className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-primary/20 transition-all inline-block"
              >
                Explore Programs
              </Link>
              <Link
                to="/contact"
                className="border border-outline-variant text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all flex items-center gap-2 inline-flex"
              >
                <span className="material-symbols-outlined">description</span>
                Konsultasi Katalog
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative group">
              <img
                alt="Modern technology training session with diverse professionals"
                className="relative z-10 w-full aspect-square object-cover rounded-3xl shadow-2xl border-4 border-white/5"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuARISclzPvfoKQcjshPbGmhS-FeEk-JNx92gT3v6bp1jI73ADJm8TZMpWgp3JdC_It-RkYRaaArgJ9Xvrk0_-8qXh9SpuzhtbcAexUtqv0wsNvYjluVX4Ckd_0qt9-nQWXJx953sZYUV3u1n9s0DffmZXqr7vnuJeKQH7F55-OnpNBCRMSkSl44Y3wwY0VPWtLOogt-fzILUxDe122LyfTj-vJ_NQ4e4VeJBNuG9nTt1Mx6iW-AC-Mt-gSTZ0Jxx2rnWK6HVXOnaXI"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Formats */}
      <section className="py-20 bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Metode Pelatihan Fleksibel</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Kami memahami bahwa setiap organisasi memiliki kebutuhan yang unik. Pilih format yang paling sesuai untuk tim Anda.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { icon: 'groups', name: 'Public', desc: 'Open Enrollment' },
              { icon: 'domain', name: 'In-House', desc: 'Corporate Training' },
              { icon: 'computer', name: 'Online', desc: 'Virtual Instructor' },
              { icon: 'blender', name: 'Hybrid', desc: 'Mixed Delivery' },
              { icon: 'edit_note', name: 'Customized', desc: 'Tailored Content' },
            ].map((fmt, i) => (
              <div key={i} className="bg-surface p-8 rounded-2xl border border-outline-variant hover:border-primary transition-all text-center group">
                <div className="w-12 h-12 bg-primary-fixed rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary">{fmt.icon}</span>
                </div>
                <h3 className="font-bold text-primary mb-1">{fmt.name}</h3>
                <p className="text-label-sm font-label-sm text-outline">{fmt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Categories Grid */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Training Categories</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Kurikulum yang selalu diperbarui mengikuti perkembangan teknologi dan standar industri global.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: 'terminal', title: 'Information Technology & Digital Transformation', desc: 'Strategi akselerasi digital dan implementasi teknologi mutakhir untuk efisiensi operasional perusahaan.' },
              { icon: 'security', title: 'Cybersecurity & Network Infrastructure', desc: 'Perlindungan aset digital dan optimasi infrastruktur jaringan dengan standar keamanan global.' },
              { icon: 'smart_toy', title: 'Artificial Intelligence & Digital Tools', desc: 'Pemanfaatan AI dan perangkat digital modern untuk meningkatkan produktivitas dan inovasi tim.' },
              { icon: 'analytics', title: 'Data Analytics & Business Intelligence', desc: 'Pengolahan data menjadi wawasan strategis untuk pengambilan keputusan bisnis yang akurat.' },
              { icon: 'account_tree', title: 'Project Management & Business Management', desc: 'Metodologi pengelolaan proyek dan tata kelola bisnis untuk mencapai target organisasi.' },
              { icon: 'psychology', title: 'Leadership, Communication & Team Development', desc: 'Pengembangan soft skill kepemimpinan dan komunikasi efektif untuk kolaborasi tim yang solid.' },
              { icon: 'sell', title: 'Sales, Marketing & Customer Service', desc: 'Strategi pemasaran modern dan pelayanan pelanggan prima untuk pertumbuhan pendapatan.' },
              { icon: 'verified', title: 'Quality Management, HSE & Compliance', desc: 'Standarisasi kualitas, keselamatan kerja, dan kepatuhan regulasi industri yang ketat.' },
              { icon: 'precision_manufacturing', title: 'Industrial, Engineering & Telecommunication', desc: 'Keahlian teknis industri dan telekomunikasi untuk mendukung operasional manufaktur modern.' },
              { icon: 'desktop_windows', title: 'Office Productivity & Corporate Skill Development', desc: 'Penguasaan aplikasi perkantoran dan pengembangan keterampilan korporat esensial.' },
            ].map((cat, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-outline-variant hover:border-primary hover:shadow-xl transition-all group">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-primary text-3xl">{cat.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-headline-md font-headline-md mb-2 group-hover:text-primary transition-colors">{cat.title}</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{cat.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Training Programs */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-12">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Contoh Program Training</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Daftar program unggulan yang sering diselenggarakan oleh CV SEI untuk berbagai klien.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Artificial Intelligence for Corporate Productivity',
              'Data Analyst for Business & Industry',
              'Cybersecurity Awareness',
              'Network Infrastructure Fundamental',
              'IT Governance & Risk Management',
              'Leadership for High Performance Team',
              'Power BI for Data Visualization',
              'Web Programming & Application Development',
              'IT Support & Helpdesk Operation',
            ].map((prog, i) => (
              <span key={i} className="px-6 py-3 bg-surface-container border border-outline-variant rounded-full text-on-surface font-medium hover:bg-primary hover:text-white hover:border-primary transition-all cursor-default">
                {prog}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-trust-navy text-white text-center">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="font-display-lg text-headline-lg mb-6">Tingkatkan Kompetensi Tim Anda Sekarang</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">Konsultasikan kebutuhan modul training instansi atau perusahaan Anda bersama kami.</p>
          <Link
            to="/contact"
            className="bg-action-orange text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all inline-block shadow-lg"
          >
            Konsultasi Program Training
          </Link>
        </div>
      </section>
    </>
  );
};

export default TrainingService;

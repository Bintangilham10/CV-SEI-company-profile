import React, { useState } from "react";
import SectionEyebrow from "../components/SectionEyebrow";
import {
    MapPin, Phone, Mail, Globe, ShieldCheck, Send,
    BadgeCheck, CheckCircle2, ArrowRight, Building2, Sparkles
} from "lucide-react";

const LAYANAN_OPTIONS = [
    "Training & Professional Development",
    "Management Consulting",
    "IT Solution & Software Development",
    "Software & Digital Product Provider",
    "Event, Workshop, Conference & MICE",
    "Lainnya",
];

const CONTACT_INFO = [
    {
        icon: MapPin,
        label: "Alamat Kantor",
        value: "Jl. Saluyu XII A No. 42, Cipamokolan, Rancasari, Kota Bandung, Jawa Barat 40232",
    },
    {
        icon: Phone,
        label: "Telepon / WhatsApp",
        value: "081906667944",
        href: "https://wa.me/6281906667944",
    },
    {
        icon: Mail,
        label: "Email",
        value: "info@edutechsolution.co.id",
        href: "mailto:info@edutechsolution.co.id",
    },
    {
        icon: Globe,
        label: "Website",
        value: "edutechsolution.co.id",
        href: "https://edutechsolution.co.id",
    },
];

const LEGAL_INFO = [
    { label: "Nama Perusahaan", value: "CV Solusi Edukasi Indonesia" },
    { label: "Brand", value: "Edutech Solution" },
    { label: "NIB", value: "2205260161665" },
    { label: "NPWP", value: "10.000.000.9-726.986" },
];

export default function Contact() {
    const [form, setForm] = useState({
        nama: "",
        email: "",
        telp: "",
        layanan: "",
        pesan: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const text =
            `Halo CV Solusi Edukasi Indonesia,%0ASaya ${encodeURIComponent(form.nama)} ingin berkonsultasi.%0A%0AEmail: ${encodeURIComponent(form.email)}%0ATelepon/WA: ${encodeURIComponent(form.telp)}%0APilihan Layanan: ${encodeURIComponent(form.layanan)}%0A%0APesan:%0A${encodeURIComponent(form.pesan)}`;
        window.open(`https://wa.me/6281906667944?text=${text}`, "_blank");
        setSubmitted(true);
    };

    const handleReset = () => {
        setForm({ nama: "", email: "", telp: "", layanan: "", pesan: "" });
        setSubmitted(false);
    };

    return (
        <div className="flex-1">
            {/* ── HERO SECTION ── */}
            <section
                className="relative pt-36 pb-24 bg-cover bg-center bg-no-repeat text-white overflow-hidden"
                style={{ backgroundImage: "url('/atas.jpg')" }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-[#0E2A54]/80" />
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px]" />
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 -left-12 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
                        Mulai{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                            Konsultasi
                        </span>{" "}
                        Sekarang
                    </h1>
                    <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light">
                        Tim profesional kami siap membantu merancang solusi edukasi, pelatihan, teknologi, dan event yang paling sesuai dengan kebutuhan organisasi Anda.
                    </p>
                </div>
            </section>

            {/* ── KONTAK & FORM ── */}
            <section className="py-20 bg-[#F6F7FA]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-5 gap-8 items-start">

                        {/* LEFT: Info Kontak & Legalitas */}
                        <div className="lg:col-span-2 flex flex-col gap-6">

                            {/* Kontak */}
                            <div className="bg-[#0E2A54] text-white rounded-2xl p-8 shadow-xl">
                                <h2 className="font-extrabold text-xl text-amber-400 mb-2 flex items-center gap-2">
                                    <Building2 size={20} /> Informasi Kontak
                                </h2>
                                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                                    Tim kami siap merespons setiap pertanyaan dan kebutuhan Anda. Jangan ragu untuk menghubungi kami melalui salah satu saluran berikut.
                                </p>
                                <div className="space-y-5">
                                    {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                                        <div key={label} className="flex gap-3 items-start">
                                            <div className="w-9 h-9 rounded-lg bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0">
                                                <Icon size={16} />
                                            </div>
                                            <div>
                                                <p className="text-[11px] text-slate-400 uppercase tracking-wide font-semibold mb-0.5">{label}</p>
                                                {href ? (
                                                    <a
                                                        href={href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-sm text-slate-200 hover:text-amber-400 transition-colors leading-relaxed"
                                                    >
                                                        {value}
                                                    </a>
                                                ) : (
                                                    <p className="text-sm text-slate-200 leading-relaxed">{value}</p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Legalitas */}
                            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                                <h3 className="font-bold text-[#0E2A54] mb-5 flex items-center gap-2">
                                    <ShieldCheck size={18} className="text-amber-500" /> Legalitas Perusahaan
                                </h3>
                                <dl className="space-y-3">
                                    {LEGAL_INFO.map(({ label, value }) => (
                                        <div key={label} className="flex justify-between items-start gap-3 border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                                            <dt className="text-xs text-slate-400 shrink-0">{label}</dt>
                                            <dd className="text-xs font-semibold text-[#0E2A54] text-right font-mono">{value}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>

                        {/* RIGHT: Formulir Konsultasi */}
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                                <SectionEyebrow>Formulir Konsultasi</SectionEyebrow>
                                <h2 className="text-2xl font-extrabold text-[#0E2A54] mb-2">
                                    Ajukan <span className="text-amber-500">Konsultasi Gratis</span>
                                </h2>
                                <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                                    Isi formulir di bawah ini dan tim kami akan segera menghubungi Anda.
                                </p>

                                {submitted ? (
                                    /* ── SUCCESS STATE ── */
                                    <div className="flex flex-col items-center justify-center py-16 text-center gap-5">
                                        <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center">
                                            <CheckCircle2 size={40} className="text-emerald-500" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-extrabold text-[#0E2A54] mb-2">
                                                Pesan Terkirim!
                                            </h3>
                                            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                                                Terima kasih, <strong>{form.nama}</strong>! Tim kami akan menghubungi Anda segera melalui WhatsApp atau email yang telah Anda berikan.
                                            </p>
                                        </div>
                                        <button
                                            onClick={handleReset}
                                            className="inline-flex items-center gap-2 mt-2 text-sm font-bold text-amber-600 hover:text-amber-700 transition-colors"
                                        >
                                            <ArrowRight size={14} /> Kirim Konsultasi Lain
                                        </button>
                                    </div>
                                ) : (
                                    /* ── FORM STATE ── */
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            {/* Nama Lengkap */}
                                            <div className="flex flex-col gap-1.5">
                                                <label className="text-xs font-semibold text-slate-600">
                                                    Nama Lengkap <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    required
                                                    placeholder="Masukkan nama lengkap"
                                                    className="border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                                                    value={form.nama}
                                                    onChange={(e) => setForm({ ...form, nama: e.target.value })}
                                                />
                                            </div>

                                            {/* Email */}
                                            <div className="flex flex-col gap-1.5">
                                                <label className="text-xs font-semibold text-slate-600">
                                                    Email <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    required
                                                    placeholder="nama@email.com"
                                                    className="border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                                                    value={form.email}
                                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                                />
                                            </div>

                                            {/* Nomor Telepon */}
                                            <div className="flex flex-col gap-1.5">
                                                <label className="text-xs font-semibold text-slate-600">
                                                    Nomor Telepon / WhatsApp <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="tel"
                                                    required
                                                    placeholder="08xxxxxxxxxx"
                                                    className="border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                                                    value={form.telp}
                                                    onChange={(e) => setForm({ ...form, telp: e.target.value })}
                                                />
                                            </div>

                                            {/* Pilihan Layanan (Dropdown) */}
                                            <div className="flex flex-col gap-1.5">
                                                <label className="text-xs font-semibold text-slate-600">
                                                    Pilihan Layanan <span className="text-red-500">*</span>
                                                </label>
                                                <select
                                                    required
                                                    className="border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all bg-white text-slate-700 cursor-pointer"
                                                    value={form.layanan}
                                                    onChange={(e) => setForm({ ...form, layanan: e.target.value })}
                                                >
                                                    <option value="" disabled>Pilih layanan yang dibutuhkan</option>
                                                    {LAYANAN_OPTIONS.map((l) => (
                                                        <option key={l} value={l}>{l}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        {/* Pesan / Detail Kebutuhan */}
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-xs font-semibold text-slate-600">
                                                Pesan / Detail Kebutuhan
                                            </label>
                                            <textarea
                                                rows={5}
                                                placeholder="Ceritakan kebutuhan Anda: jenis program, jumlah peserta, target waktu, dll."
                                                className="border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all resize-none"
                                                value={form.pesan}
                                                onChange={(e) => setForm({ ...form, pesan: e.target.value })}
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-amber-500 hover:bg-amber-600 text-[#0E2A54] font-bold py-3.5 rounded-xl inline-flex items-center justify-center gap-2 transition-colors shadow-md shadow-amber-500/20 mt-2"
                                        >
                                            <Send size={16} /> Kirim Konsultasi via WhatsApp
                                        </button>

                                        <p className="text-center text-[11px] text-slate-400 flex items-center justify-center gap-1">
                                            <BadgeCheck size={12} className="text-emerald-500" />
                                            Data Anda aman dan tidak akan dibagikan kepada pihak ketiga.
                                        </p>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── MAP SECTION ── */}
            <section className="bg-white py-20 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionEyebrow>Lokasi Kantor</SectionEyebrow>
                    <h2 className="text-3xl font-extrabold text-[#0E2A54] text-center mb-3">
                        Temukan Kami di <span className="text-amber-500">Bandung</span>
                    </h2>
                    <p className="text-center text-slate-500 text-sm max-w-xl mx-auto mb-10">
                        Kantor pusat kami berlokasi di Jl. Saluyu XII A No. 42, Cipamokolan, Rancasari, Kota Bandung, Jawa Barat 40232.
                    </p>

                    <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-100 relative">
                        {/* Google Maps Embed */}
                        <iframe
                            title="Lokasi Kantor CV Solusi Edukasi Indonesia"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5985940523!2d107.65860987484503!3d-6.953843993050474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9adf177bf6f%3A0x4b63f5b28ebe9ef3!2sJl.%20Saluyu%20XII%2C%20Cipamokolan%2C%20Kec.%20Rancasari%2C%20Kota%20Bandung%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                            width="100%"
                            height="420"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full"
                        />
                        {/* Overlay Badge */}
                        <div className="absolute bottom-4 left-4 bg-[#0E2A54] text-white rounded-xl px-4 py-3 shadow-lg flex items-start gap-3 max-w-xs">
                            <MapPin size={18} className="text-amber-400 shrink-0 mt-0.5" />
                            <div>
                                <p className="text-xs font-bold text-amber-400 mb-0.5">CV Solusi Edukasi Indonesia</p>
                                <p className="text-[11px] text-slate-300 leading-relaxed">
                                    Jl. Saluyu XII A No. 42, Cipamokolan, Rancasari, Bandung 40232
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex justify-center">
                        <a
                            href="https://maps.google.com/?q=Jl.+Saluyu+XII+A+No.+42,+Cipamokolan,+Rancasari,+Kota+Bandung,+Jawa+Barat+40232"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#0E2A54] hover:bg-[#163B72] text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors"
                        >
                            <MapPin size={15} /> Buka di Google Maps <ArrowRight size={14} />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

import React, { useState } from "react";
import SectionEyebrow from "../components/SectionEyebrow";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function Contact() {
    const [form, setForm] = useState({ nama: "", email: "", telp: "", instansi: "", pesan: "" });

    const handleWhatsApp = (e) => {
        e.preventDefault();
        const text = `Halo CV SEI, saya ${form.nama || "-"} dari ${form.instansi || "-"}.%0ATelepon: ${form.telp || "-"}%0AEmail: ${form.email || "-"}%0APesan: ${form.pesan || "-"}`;
        window.open(`https://wa.me/6281906667944?text=${text}`, "_blank");
    };

    return (
        <div className="flex-1 bg-[#F6F7FA]">
            {/* KONTAK */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionEyebrow>Hubungi Kami</SectionEyebrow>
                    <h2 className="text-3xl font-extrabold text-[#0E2A54] text-center mb-12">
                        Mari <span className="text-amber-500">Berdiskusi</span>
                    </h2>
                    <div className="grid lg:grid-cols-5 gap-6">
                        <div className="lg:col-span-2 bg-[#0E2A54] text-white rounded-2xl p-8 flex flex-col gap-6">
                            <h3 className="font-bold text-lg text-amber-400">Kontak Perusahaan</h3>
                            <p className="text-sm text-slate-300 leading-relaxed">
                                Tim kami siap membantu merancang program yang paling sesuai dengan kebutuhan
                                organisasi Anda. Hubungi kami melalui kontak berikut atau isi form konsultasi.
                            </p>
                            <div className="space-y-4 text-sm">
                                <div className="flex gap-3 items-start">
                                    <MapPin size={18} className="text-amber-400 shrink-0 mt-0.5" />
                                    <span className="text-slate-200">Jl. Saluyu XII A No. 42, Cipamokolan, Rancasari, Kota Bandung, Jawa Barat 40232</span>
                                </div>
                                <div className="flex gap-3">
                                    <Phone size={18} className="text-amber-400 shrink-0" />
                                    <span className="text-slate-200">081906667944</span>
                                </div>
                                <div className="flex gap-3">
                                    <Mail size={18} className="text-amber-400 shrink-0" />
                                    <span className="text-slate-200">solusiedukasiindonesia@gmail.com</span>
                                </div>
                                <div className="flex gap-3">
                                    <Clock size={18} className="text-amber-400 shrink-0" />
                                    <span className="text-slate-200">Senin – Jumat, 08.00 – 17.00 WIB</span>
                                </div>
                            </div>
                            <div className="mt-auto pt-4 border-t border-white/10">
                                <p className="text-xs text-amber-300 italic">"Empowering People, Transforming Organizations"</p>
                            </div>
                        </div>

                        <form onSubmit={handleWhatsApp} className="lg:col-span-3 bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-lg text-[#0E2A54] mb-6">Form Konsultasi Cepat</h3>
                            <div className="grid sm:grid-cols-2 gap-4 mb-4">
                                <input
                                    className="border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                                    placeholder="Nama Lengkap *"
                                    value={form.nama}
                                    onChange={(e) => setForm({ ...form, nama: e.target.value })}
                                    required
                                />
                                <input
                                    type="email"
                                    className="border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                                    placeholder="Email"
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                />
                                <input
                                    className="border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                                    placeholder="No. Telepon / WhatsApp *"
                                    value={form.telp}
                                    onChange={(e) => setForm({ ...form, telp: e.target.value })}
                                    required
                                />
                                <input
                                    className="border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                                    placeholder="Perusahaan / Institusi"
                                    value={form.instansi}
                                    onChange={(e) => setForm({ ...form, instansi: e.target.value })}
                                />
                            </div>
                            <textarea
                                rows={4}
                                className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm mb-5 focus:outline-none focus:ring-2 focus:ring-amber-400 w-full"
                                placeholder="Pesan / Kebutuhan Anda (jenis layanan, jumlah peserta, jadwal, dll.)"
                                value={form.pesan}
                                onChange={(e) => setForm({ ...form, pesan: e.target.value })}
                            />
                            <button
                                type="submit"
                                className="w-full bg-amber-500 hover:bg-amber-600 text-[#0E2A54] font-bold py-3 rounded-lg inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
                            >
                                <Send size={16} /> Kirim via WhatsApp
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

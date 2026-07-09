import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Program from "./pages/Program";
import Contact from "./pages/Contact";
import "./App.css";

export default function App() {
    return (
        <Router>
            <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans">
                <Navbar />
                <main className="flex-1 flex flex-col">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/fasilitas" element={<About />} />
                        <Route path="/layanan" element={<Services />} />
                        <Route path="/program" element={<Program />} />
                        <Route path="/kontak" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

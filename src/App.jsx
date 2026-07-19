import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Program from "./pages/Program";
import AboutUs from "./pages/AboutUs";
import TrainingDevelopment from "./pages/services/TrainingDevelopment";
import ManagementConsulting from "./pages/services/ManagementConsulting";
import ITSolution from "./pages/services/ITSolution";
import DigitalProduct from "./pages/services/DigitalProduct";
import EventMICE from "./pages/services/EventMICE";
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
                        <Route path="/layanan/training-development" element={<TrainingDevelopment />} />
                        <Route path="/layanan/management-consulting" element={<ManagementConsulting />} />
                        <Route path="/layanan/it-solution" element={<ITSolution />} />
                        <Route path="/layanan/digital-product" element={<DigitalProduct />} />
                        <Route path="/layanan/event-mice" element={<EventMICE />} />
                        <Route path="/program" element={<Program />} />
                        <Route path="/tentang-kami" element={<AboutUs />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

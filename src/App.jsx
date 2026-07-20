import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Program from "./pages/Program";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import TrainingDevelopment from "./pages/services/TrainingDevelopment";
import ManagementConsulting from "./pages/services/ManagementConsulting";
import ITSolution from "./pages/services/ITSolution";
import DigitalProduct from "./pages/services/DigitalProduct";
import EventMICE from "./pages/services/EventMICE";
import "./App.css";

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

export default function App() {
    return (
        <ThemeProvider>
            <Router>
                <ScrollToTop />
                <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans transition-colors duration-300">
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
                            <Route path="/kontak" element={<Contact />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </ThemeProvider>
    );
}


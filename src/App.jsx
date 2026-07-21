import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import LayananIndex from './pages/LayananIndex';
import TrainingService from './pages/services/TrainingService';
import ManagementService from './pages/services/ManagementService';
import ITSolutionService from './pages/services/ITSolutionService';
import SoftwareProviderService from './pages/services/SoftwareProviderService';
import EventMiceService from './pages/services/EventMiceService';
import Program from './pages/Program';
import Portofolio from './pages/Portofolio';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<LayananIndex />} />
          <Route path="service/training" element={<TrainingService />} />
          <Route path="service/management" element={<ManagementService />} />
          <Route path="service/it-solution" element={<ITSolutionService />} />
          <Route path="service/software-provider" element={<SoftwareProviderService />} />
          <Route path="service/event-mice" element={<EventMiceService />} />
          <Route path="program" element={<Program />} />
          <Route path="portofolio" element={<Portofolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

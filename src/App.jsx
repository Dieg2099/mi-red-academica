import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Slider from './components/Slider';
import InvestigadorCard from './components/InvestigadorCard';
import Admin from './pages/Admin';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Slider />
            <div className="container mx-auto p-6">
              <h2 className="text-2xl font-bold mb-6">Nuestros Investigadores</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <InvestigadorCard nombre="Dr. Diego Martínez" area="Inteligencia Artificial" universidad="UNAM" />
                <InvestigadorCard nombre="Dr. Luis Pérez" area="Ciencia de Datos" universidad="ITESM" />
                <InvestigadorCard nombre="Dra. Clara Ríos" area="Bioinformática" universidad="UAEM" />
              </div>
            </div>
          </>
        } />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}
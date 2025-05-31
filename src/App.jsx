import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Slider from './components/Slider';
import InvestigadorCard from './components/InvestigadorCard';

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
                <InvestigadorCard
                  nombre="Dr. Ana Martínez"
                  area="Inteligencia Artificial"
                  universidad="UNAM"
                  foto="/images/Diego Armando.jpg"
                />
                <InvestigadorCard
                  nombre="Dr. Luis Pérez"
                  area="Ciencia de Datos"
                  universidad="ITESM"
                  foto="/images/luis.jpg"
                />
                <InvestigadorCard
                  nombre="Dra. Clara Ríos"
                  area="Bioinformática"
                  universidad="UAEM"
                  foto="/images/clara.jpg"
                />
              </div>
            </div>
          </>
        } />
      </Routes>
    </Router>
  );
}
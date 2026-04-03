import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import Artisan from './pages/artisan.jsx'
import FicheArtisan from './pages/fiche_artisan.jsx'
import Page404 from './pages/page404.jsx'
import PageBuild from './pages/page-build.jsx'


function App() {
  // 1. DÉCLARATION DES ÉTATS (Indispensable pour stocker les données de la BDD)
  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);

  // 2. FONCTION DE RÉCUPÉRATION DES ARTISANS DEPUIS LE BACKEND
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/artisans');
        const data = await response.json();
        setArtisans(data);
      } catch (error) {
        console.error("Erreur de connexion à l'API :", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllData();
  }, []);

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header artisans={artisans} />
        
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artisan" element={<Artisan artisans={artisans} loading={loading} />} />
            <Route path="/fiche-artisan/:id" element={<FicheArtisan artisans={artisans} loading={loading} />} />
            <Route path="*" element={<Page404 />} />
            <Route path="/page-build" element={<PageBuild />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App;
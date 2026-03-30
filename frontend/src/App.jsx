import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import Artisan from './pages/artisan.jsx'
import FicheArtisan from './pages/fiche_artisan.jsx'
import Page404 from './pages/page404.jsx'
import artisansData from './data/artisans.json'
import PageBuild from './pages/page-build.jsx'

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header artisans={artisansData} />
        
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artisan" element={<Artisan artisans={artisansData} />} />            
            <Route path="/fiche-artisan/:id" element={<FicheArtisan />} />
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
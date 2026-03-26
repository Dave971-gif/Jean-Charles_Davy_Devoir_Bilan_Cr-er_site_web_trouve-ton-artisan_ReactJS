import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import Artisan from './pages/artisan.jsx'
import FicheArtisan from './pages/fiche_artisan.jsx'
import Page404 from './pages/page404.jsx'

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artisan" element={<Artisan />} />
            <Route path="/fiche-artisan/:id" element={<FicheArtisan />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App;
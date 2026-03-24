import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from '../components/header';
import Footer from '../components/footer';

import Home from './pages/home';
import ArtisanList from './pages/fiche_artisan';
import ArtisanDetail from './pages/artisan';
import Page404 from './pages/page404';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header /> 

        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artisans" element={<ArtisanList />} />
            <Route path="/artisan/:id" element={<ArtisanDetail />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
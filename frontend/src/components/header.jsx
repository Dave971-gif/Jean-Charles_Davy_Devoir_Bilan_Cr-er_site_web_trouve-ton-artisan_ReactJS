import { Link } from 'react-router-dom';
import '../scss/App.scss';

function Header({ artisans = [] }) {
  
  const categories = [...new Set(artisans.map(artisan => artisan.Catégorie))];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src="/images/Logo.png" alt="Logo Trouve ton artisan" style={{ maxHeight: '50px' }} className="img-fluid" />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="nav-links d-flex gap-4">
          {categories.map((cat, index) => (
            <Link key={index} to={`/category/${cat.toLowerCase()}`} className="nav-link fw-bold">
              {cat}
            </Link>
          ))}
        </div>

        <div className="search-bar-container mx-5" style={{ maxWidth: '700px' }}>
          <div className="input-group mb-3 shadow-sm">
              <input type="text" className="form-control form-control-lg border-0" placeholder="Nom de l'artisan ou métier..." />
              <button className="btn btn-lg" type="button">
                <img src="/images/recherche.png" alt="Rechercher" className="img-fluid logo-search" style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
              </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
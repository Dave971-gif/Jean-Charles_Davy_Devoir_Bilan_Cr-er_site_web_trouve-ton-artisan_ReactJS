import { useState } from 'react'; // Importation de Gestion de Saisie pour la barre de recherche
import { Link, useNavigate } from 'react-router-dom'; // importation de Link pour la navigation et useNavigate pour rediriger après la recherche
import '../scss/App.scss';

function Header({ artisans = [] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const categories = [...new Set(artisans.map(artisan => artisan.Catégorie))];

  const handleSearch = (e) => {
    e.preventDefault(); // Empêche la page de se recharger
    if (searchTerm.trim() === "") return;

    // 1. On cherche si c'est une catégorie
    const isCategory = categories.find(
      (cat) => cat.toLowerCase() === searchTerm.toLowerCase()
    );

    if (isCategory) {
      navigate(`/artisan?category=${isCategory}`);
    } else {
      // 2. Sinon, on va sur la page de liste avec le nom en filtre
      navigate(`/artisan?search=${searchTerm}`);
    }
    
    setSearchTerm(""); // On vide la barre après la recherche
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
      <div className="container d-flex flex-wrap">
        {/* Logo */}
        <Link to="/" className="navbar-brand">  
          <img src="/images/Logo.png" alt="Logo Trouve ton artisan" style={{ maxHeight: '50px' }} className="img-fluid" />
        </Link>

        {/* Navigation Links */}
        <div className="nav-links d-flex flex-wrap gap-4">
          {categories.map((cat, index) => (
            <Link key={index} to={`/category/${cat.toLowerCase()}`} className="nav-link fw-bold">
              {cat}
            </Link>
          ))}
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="search-bar-container mx-5" style={{ flexGrow: 1 }}>
          <div className="input-group shadow-sm">
            <input type="text" className="form-control form-control-lg border-0" placeholder="Nom de l'artisan ou métier..." value={searchTerm}onChange={(e) => setSearchTerm(e.target.value)} />
            <button className="btn btn-lg bg-white" type="submit">
              <img src="/images/recherche.png" alt="Rechercher" style={{ width: '25px' }} />
            </button>
          </div>
        </form>
      </div>
    </nav>
  );
}

export default Header;
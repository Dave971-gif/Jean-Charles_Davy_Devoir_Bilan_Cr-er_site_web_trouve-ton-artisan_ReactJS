import { Link } from 'react-router-dom';
import '../scss/App.scss';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img 
            src="/images/Logo.png" 
            alt="Logo Trouve ton artisan" 
            style={{ maxHeight: '50px' }} 
            className="img-fluid" 
          />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto gap-lg-3">
            <Link className="nav-link fw-medium" to="/artisan?category=Alimentation">Alimentation</Link>
            <Link className="nav-link fw-medium" to="/artisan?category=Bâtiment">Bâtiment</Link>
            <Link className="nav-link fw-medium" to="/artisan?category=Fabrication">Fabrication</Link>
            <Link className="nav-link fw-medium" to="/artisan?category=Services">Services</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
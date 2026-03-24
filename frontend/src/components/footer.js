import '../src/scss/style.scss';

const footer = () => {
  return (
    <footer className="bg-white shadow-sm">
      <div className="container">
        <div className="navbar-nav ms-auto">
          <a className="nav-link" href="/">Mentions légales</a>
          <a className="nav-link" href="/">Données personnelles</a>
          <a className="nav-link" href="/">Accessibilité</a>
          <a className="nav-link" href="/">Cookies</a>
        </div>
        <div className="text-center mt-3">
          <p>
            Adresse et contact de l’antenne de Lyon 
            
            <a href="http://example.com" className="text-decoration-underline justify-content-center" target="_blank" rel="noopener noreferrer">
                101 cours Charlemagne
                CS 20033
                69269 LYON CEDEX 02
                France
            </a>
            <a href="tel:+33426734000" className="text-decoration-underline">
              +33 (0)4 26 73 40 00
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default footer;
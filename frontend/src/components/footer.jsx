import '../scss/App.scss';

function Footer() {
  return (
    <footer className="bg-white shadow-sm py-4 mt-auto"> 
      <div className="container">
        <div className="d-flex flex-wrap justify-content-center gap-3 border-bottom pb-3">
          <a className="nav-link" href="/">Accessibilité</a>
          <a className="nav-link" href="/">Cookies</a>
          <a className="nav-link" href="/">Données personnelles</a>
          <a className="nav-link" href="/">Mentions légales</a>
        </div>

        <div className="text-center mt-3">
          <p className="mb-0">Adresse et contact de l’antenne de Lyon</p>
          
          <div className="d-flex flex-column align-items-center">
            <a 
              href="https://maps.google.com/?q=101+cours+Charlemagne+69269+LYON" 
              className="text-dark text-decoration-underline mb-2" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              101 cours Charlemagne, CS 20033, 69269 LYON CEDEX 02, France
            </a>
            
            <a href="tel:+33426734000" className="text-dark text-decoration-underline fw-bold">
              +33 (0)4 26 73 40 00
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
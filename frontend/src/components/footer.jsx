import '../scss/App.scss';

function Footer() {
  return (
    <footer className="d-flex bg-white mt-5 justify-content-around align-items-center">
      <div className="d-flex flex-wrap justify-content-center gap-3 pb-3 mr-auto">
        <a className="nav-link" href="/">Accessibilité</a>
        <a className="nav-link" href="/">Cookies</a>
        <a className="nav-link" href="/">Données personnelles</a>
        <a className="nav-link" href="/">Mentions légales</a>
      </div>

      <div className="text-center mt-3 ml-auto">
        <p className="mb-0">Adresse et contact de l’antenne de Lyon</p>
        
        <div className="d-flex flex-column">
          <a href="https://maps.google.com/?q=101+cours+Charlemagne+69269+LYON" className="text-dark text-decoration-none mb-2" target="_blank" rel="noopener noreferrer">
            101 cours Charlemagne, <br />
            CS 20033 <br />
            69269 LYON CEDEX 02, France
          </a>
          
          <a href="tel:+33426734000" className="text-dark text-decoration-underline fw-bold">
            +33 (0)4 26 73 40 00
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
import { Link } from 'react-router-dom';
import '../scss/App.scss';

function Footer() {
  return (
    <footer className="d-flex flex-wrap mt-5 justify-content-around align-items-center">
      <div className="d-flex flex-wrap justify-content-center gap-3 pb-3 mr-auto">
        <Link to="/page-build" className="nav-link" >Accessibilité</Link>
        <Link to="/page-build" className="nav-link" >Cookies</Link>
        <Link to="/page-build" className="nav-link" >Données personnelles</Link>
        <Link to="/page-build" className="nav-link" >Mentions légales</Link>
      </div>

      <div className="text-center mt-3 ml-auto">
        <p className="mb-0">Adresse et contact de l’antenne de Lyon</p>
        
        <div className="d-flex flex-column">
          <a href="https://maps.google.com/?q=101+cours+Charlemagne+69269+LYON" className="a-foot text-decoration-none mb-2" target="_blank" rel="noopener noreferrer">
            101 cours Charlemagne, <br />
            CS 20033 <br />
            69269 LYON CEDEX 02, France
          </a>
          
          <a href="tel:+33426734000" className="a-foot text-decoration-none fw-bold">
            +33 (0)4 26 73 40 00
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
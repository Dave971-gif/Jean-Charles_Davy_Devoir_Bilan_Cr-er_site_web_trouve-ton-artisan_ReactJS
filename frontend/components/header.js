import '../src/scss/style.scss';

const header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <a href="../images/logo.png" className="navbar-brand">
          <img src="../images/logo.png" alt="Logo" className="img-fluid" />
        </a>
        <div className="navbar-nav ms-auto">
          <a className="nav-link" href="/">Alimentation</a>
          <a className="nav-link" href="/">Bâtiment</a>
          <a className="nav-link" href="/">Fabrication</a>
          <a className="nav-link" href="/">Services</a>
        </div>
      </div>
    </nav>
  );
};

export default header;
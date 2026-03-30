import '../scss/App.scss';

function FicheArtisan() {
  return (
    <div className="container py-5">
      <div>
        <h1>Catégories</h1>
      </div>
      <div class="btn-group" role="group">
        <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Quelle catégories ?
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Alimentation</a></li>
          <li><a class="dropdown-item" href="#">Bâtiment</a></li>
          <li><a class="dropdown-item" href="#">Fabrication</a></li>
          <li><a class="dropdown-item" href="#">Services</a></li>
        </ul>
      </div>
    </div>
  )
}

export default FicheArtisan;
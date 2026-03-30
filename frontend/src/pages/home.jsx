import '../scss/App.scss'
import '../scss/home.scss'

function Home() {
  return (
    <div className="d-flex flex-column align-items-start justify-content-between p-3">
      <section className="artisan-section d-flex align-items-center justify-content-start">
        <div className="artisan-title p-5">
          <h1>Comment choisir son artisan ?</h1>
        </div>
        <div className="howto p-5">
          <p>1. Choisir la catégorie d'artisanat dans le menu.</p>
          <p>2. Choisir un artisan.</p>
          <p>3. Le contacter via le formulaire de contact.</p>
          <p>4. Une réponse sera apportée sous 48h.</p>
        </div>
      </section>
      <section className="artisan-section d-flex align-items-center justify-content-start">
        <div className="artisan-title p-5">
          <h1>Les 3 artisans du mois</h1>
        </div>
        <div className= "craftsman-block d-flex flex-wrap align-items-center justify-content-start m-5 ">
          <div className="craftsman-card text-center">
              <p>Nom : Orville Salmons</p>
              <p>Note : 5.0</p>
              <p>Spécialité : Chauffagiste</p>
              <p>Localisation : Evian</p>
          </div>
          <div className="craftsman-card text-center">
              <p>Nom : Ernest Carignan</p>
              <p>Note : 5.0</p>
              <p>Spécialité : Ferronier</p>
              <p>Localisation : Le Puy-en-Velay</p>
          </div>
          <div className="craftsman-card text-center">
              <p>Nom : Chocolatier Labbé</p>
              <p>Note : 4.9</p>
              <p>Spécialité : Chocolatier</p>
              <p>Localisation : Lyon</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
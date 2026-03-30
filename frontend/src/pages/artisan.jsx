import { useSearchParams } from 'react-router-dom';
import artisansData from '../data/artisans.json';
import { Link } from 'react-router-dom';
import '../scss/home.scss';

function Artisan() {
  // 1. On écoute l'URL 
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  const searchFilter = searchParams.get('search');

  // 2. LA LOGIQUE DE FILTRAGE
  const filteredArtisans = artisansData.filter((artisan) => {
    // Si on a un filtre par catégorie (via le menu)
    if (categoryFilter) {
      return artisan.Catégorie === categoryFilter;
    }
    // Si on a un filtre par recherche texte (via la barre de recherche)
    if (searchFilter) {
      return (
        artisan.Nom.toLowerCase().includes(searchFilter.toLowerCase()) ||
        artisan.Spécialité.toLowerCase().includes(searchFilter.toLowerCase())
      );
    }
    // Si aucun filtre, on affiche tout
    return true;
  });

  return (
    <div className="container py-5">
      <h1 className="text-primary mb-5">
        {categoryFilter || (searchFilter ? `Résultats pour "${searchFilter}"` : "Nos Artisans")}
      </h1>

      <div className="artisan-section d-flex flex-wrap justify-content-center gap-4">
        {filteredArtisans.length > 0 ? (
          filteredArtisans.map((artisan) => (
            <div key={artisan.id} className="craftsman-card text-center p-4">
              <p className="fw-bold">Nom : {artisan.Nom}</p>
              <p>Note : {artisan.Note} / 5</p>
              <p>Spécialité : {artisan.Spécialité}</p>
              <p>Localisation : {artisan.Lieu}</p>
              <Link to={`/fiche-artisan/${artisan.id}`} className="btn btn-primary mt-3">
                Voir la fiche complète
              </Link>
            </div>
          ))
        ) : (
          <p className="fs-4 mt-5">Aucun artisan ne correspond à votre recherche.</p>
        )}
      </div>
    </div>
  );
}

export default Artisan;
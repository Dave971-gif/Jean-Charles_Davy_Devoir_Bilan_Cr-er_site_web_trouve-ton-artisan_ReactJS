import { useSearchParams, Link } from 'react-router-dom';
import '../scss/artisan.scss';

function Artisan({artisans, loading}) {

  // 1. On écoute l'URL pour les filtres (catégorie et recherche texte)
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  const searchFilter = searchParams.get('search');

  // 2. LA LOGIQUE DE FILTRAGE
  const filteredArtisans = artisans.filter((artisan) => {
    // On utilise les noms de colonnes de ta base de données
    const artisanCat = artisan.categorie; 
    const artisanNom = artisan.nom;
    const artisanSpec = artisan.specialite;

    // Filtre par catégorie (Menu)
    if (categoryFilter) {
      return artisanCat === categoryFilter;
    }

    // Filtre par recherche texte (Barre de recherche)
    if (searchFilter) {
      const search = searchFilter.toLowerCase();
      return (
        artisanNom?.toLowerCase().includes(search) ||
        artisanSpec?.toLowerCase().includes(search)
      );
    }

    return true;
  });

  //Affichage des étoiles en fonction de la note de l'artisan
  const renderStars = (note) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(note)) {
        // Étoile pleine
        stars.push(<i key={i} className="bi bi-star-fill"></i>);
      } else if (i - 0.5 <= note) {
        // Étoile moitié (si la note est par exemple 4.5)
        stars.push(<i key={i} className="bi bi-star-half"></i>);
      } else {
        // Étoile vide
        stars.push(<i key={i} className="bi bi-star"></i>);
      }
    }
    
    return stars;
  };

  // 3. AFFICHAGE
  if (loading) return <div className="container py-5 text-center">Chargement des artisans...</div>;

  return (
    <div className="container py-5">
      <h1 className="text-primary mb-5">
        {categoryFilter || (searchFilter ? `Résultats pour "${searchFilter}"` : "Nos Artisans")}
      </h1>

      <div className="artisan-zone d-flex flex-wrap justify-content-center gap-4">
        {filteredArtisans.length > 0 ? (
          filteredArtisans.map((artisan) => (
            <div key={artisan.id} className="craftsman-info text-center p-4">
              <p className="fw-bold">Nom : {artisan.nom}</p>
              <p>Note : {artisan.note} / 5 (
                <span className="star mx-1">
                  {renderStars(artisan.note)} 
                </span>
              )
              </p>
              <p>Spécialité : {artisan.specialite}</p>
              <p>Localisation : {artisan.localisation}</p>
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
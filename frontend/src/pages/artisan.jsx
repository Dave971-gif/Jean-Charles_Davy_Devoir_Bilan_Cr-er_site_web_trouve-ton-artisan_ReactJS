import { useSearchParams } from 'react-router-dom';
import artisanData from '../data/artisans.json'; // Vérifie le chemin vers ton JSON

function Artisan() {
  // 1. On récupère les paramètres de l'URL
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');

  // 2. On filtre la liste des artisans
  // Si categoryFilter existe, on ne garde que ceux qui correspondent. 
  // Sinon (null), on affiche tout le monde.
  const filteredArtisans = artisanData.filter(artisan => {
    if (!categoryFilter) return true;
    return artisan.Catégorie === categoryFilter;
  });

  return (
    <div className="container py-5">
      <h1 className="mb-4">
        {categoryFilter ? `Artisans : ${categoryFilter}` : "Tous nos artisans"}
      </h1>

      <div className="d-flex flex-wrap gap-4 justify-content-center">
        {filteredArtisans.map((artisan) => (
          <div key={artisan.id} className="craftsman-card text-center p-4">
            <p className="fw-bold">Nom : {artisan.name}</p>
            <p>Note : {artisan.note}</p>
            <p>Spécialité : {artisan.specialty}</p>
            <p>Localisation : {artisan.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Artisan;
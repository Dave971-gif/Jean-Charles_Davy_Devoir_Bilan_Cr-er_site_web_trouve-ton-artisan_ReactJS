import { useParams } from 'react-router-dom';
import artisansData from '../data/artisans.json'; // VERIFIE CE CHEMIN

function FicheArtisan() {
    const { id } = useParams();
    
    // On cherche l'artisan (on utilise == pour plus de souplesse)
    const artisan = artisansData.find(art => art.id == id);

    // Sécurité : si l'artisan n'est pas trouvé, on affiche un message d'erreur
    if (!artisan) {
        return (
            <div className="container py-5">
                <h1>Artisan non trouvé</h1>
            </div>
        );
    }

    return (
        <div className="fiche-artisan container py-5 text-center">
            <h1 className="text-primary">{artisan.Nom}</h1>
            <div className="row mt-4 shadow p-4 rounded">
                <div className="col-md-4">
                    <img src="/images/favicon-32.png" alt="avatar" className="rounded-circle craftsman-photo" />
                </div>
                <div className="zone-info col-md-4 p-3 rounded">
                    <h3>Infos</h3>
                    <p>Note : {artisan.Note}</p>
                    <p>Spécialité : {artisan.Spécialité}</p>
                    <p>Localisation : {artisan.Ville}</p>
                    <p>A propos : <a href={artisan.Site_web} target="_blank" rel="noopener noreferrer">{artisan.Site_web}</a></p>
                </div>
                <div className="col-md-4 bg-success text-white p-3 rounded">
                    <h3>Contact</h3>
                    <p>Formulaire ici</p>
                </div>
            </div>
        </div>
    );
}

export default FicheArtisan;
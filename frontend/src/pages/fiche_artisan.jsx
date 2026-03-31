import { useParams } from 'react-router-dom';
import artisansData from '../data/artisans.json';
import '../scss/fiche_artisan.css';

function FicheArtisan() {
    const { id } = useParams();
    
    // On cherche l'artisan (on utilise == pour plus de souplesse)
    const artisan = artisansData.find(art => art.id == id);

    // Fonction de gestion du formulaire de contact
    const handleSubmit = (e) => {
    e.preventDefault(); // Empêche la page de se recharger
    alert("Merci ! Votre message a bien été envoyé (enfin, presque, c'est une démo !)");
};

    // Sécurité : si l'artisan n'est pas trouvé, on affiche un message d'erreur
    if (!artisan) {
        return (
            <div className="container py-5">
                <h1>Artisan non trouvé</h1>
            </div>
        );
    }

    return (
        <div className="fiche-artisan container mt-4 shadow">
            <div>
                <h1 className="text-primary text-center">{artisan.Nom}</h1>
            </div>
            <div className="fiche-info row mt-4 shadow p-4">
                <div className="photo col-md-4 text-center align-content-center">
                    <img src="/images/favicon-32.png" alt="avatar" className="craftsman-photo img-fluid" />
                </div>
                <div className="zone-info col-md-4 p-3">
                    <div className="mb-5 text-center">
                        <h2>Infos</h2>
                    </div>
                    <div>
                        <p>Note : {artisan.Note}</p>
                        <p>Spécialité : {artisan.Spécialité}</p>
                        <p>Localisation : {artisan.Ville}</p>
                        <p>A propos : <a href={artisan.Site_web} target="_blank" rel="noopener noreferrer" className="text-decoration-underline">{artisan.Site_web}</a></p>
                    </div>
                </div>
                <div className="form-zone col-md-4 p-3 contact-block">
                    <h2 className="text-center h4 mb-3">Nous contacter</h2>
                    <form onSubmit={handleSubmit} className="form">
                        {/* Champ Nom */}
                        <div className="d-flex mb-2">
                            <label className="form-label small">Nom :</label>
                            <input type="text" className="form-control form-control-sm" required />
                        </div>

                        {/* Champ Email */}
                        <div className="d-flex mb-2">
                            <label className="form-label small">Email :</label>
                            <input type="email" className="form-control form-control-sm" required />
                        </div>

                        {/* Champ Objet */}
                        <div className="d-flex mb-2">
                            <label className="form-label small">Objet :</label>
                            <input type="text" className="form-control form-control-sm" />
                        </div>

                        {/* Champ Message */}
                        <div className="mb-3">
                            <label className="form-label small">Message :</label>
                            <textarea className="form-control form-control-sm" rows="3" placeholder="Ecrire un message..."></textarea>
                        </div>

                        {/* Bouton d'envoi */}
                        <button type="submit" className="btn btn-primary w-100 shadow-sm">
                            Envoyer
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FicheArtisan;
import { useParams } from 'react-router-dom';
import '../scss/fiche_artisan.css';

function FicheArtisan({artisans, loading}) {
    const { id } = useParams();
    
    if (loading) {
        return <div className="container py-5 text-center">Chargement des détails...</div>;
    }

    // On cherche l'artisan (on utilise == pour plus de souplesse)
    const artisan = artisans.find(art => art.id == id);

    // Fonction de gestion du formulaire de contact
    const handleSubmit = (e) => {
    e.preventDefault(); // Empêche la page de se recharger
    alert("Merci ! Votre message a bien été envoyé à l'artisan."); // Message de confirmation (à remplacer par une vraie logique d'envoi)
};

    // Sécurité : si l'artisan n'est pas trouvé, on affiche un message d'erreur
    if (!artisan) {
        return (
            <div className="container py-5">
                <h1>Artisan non trouvé</h1>
                <p>Vérifiez l'URL ou patientez pendant le chargement...</p> 
            </div>
        );
    }

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

    return (
        <div className="fiche-artisan container mt-4 shadow">
            <div>
                <h1 className="text-primary text-center">{artisan.nom}</h1>
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
                        <p>Note : {artisan.note} (
                            <span className="star-info mx-1">
                              {renderStars(artisan.note)} 
                            </span>
                        )
                        </p>
                        <p>Spécialité : {artisan.specialite}</p>
                        <p>Localisation : {artisan.localisation}</p>
                        <p>A propos : <a href={artisan.site_web} target="_blank" rel="noopener noreferrer" className="text-decoration-underline">{artisan.Site_web}</a></p>
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
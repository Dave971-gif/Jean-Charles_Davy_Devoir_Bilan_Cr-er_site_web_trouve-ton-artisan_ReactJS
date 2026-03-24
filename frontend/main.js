const container = document.querySelector('.artisan-container');

async function getArtisans() {
    try {
        const response = await fetch('http://localhost:5000/artisans');
        const artisans = await response.json();

        container.innerHTML = '';

        artisans.forEach(artisan => {
            const card = `
                <div class="artisan-card">
                    <h2>${artisan.nom}</h2>
                    <p class="specialite">${artisan.specialite}</p>
                    <p class="note">⭐ ${artisan.note}/5</p>
                    <p class="localisation">📍 ${artisan.localisation}</p>
                    <button>Voir le profil</button>
                </div>
            `;
            container.innerHTML += card;
        });
    } catch (error) {
        console.error("Erreur de récupération :", error);
    }
}

getArtisans();
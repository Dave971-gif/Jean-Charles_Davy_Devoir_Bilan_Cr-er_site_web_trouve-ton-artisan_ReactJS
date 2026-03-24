artisans.forEach(artisan => {
    const card = `
        <div class="col-md-4 mb-4"> <div class="artisan-card shadow-sm">
                <div class="card-body">
                    <span class="badge-specialite">${artisan.specialite}</span>
                    <h5 class="card-title">${artisan.nom}</h5>
                    <p class="card-text text-muted">
                        <i class="bi bi-geo-alt"></i> ${artisan.localisation}
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="text-warning fw-bold">⭐ ${artisan.note}</span>
                        <a href="#" class="btn btn-outline-primary btn-sm">Voir plus</a>
                    </div>
                </div>
            </div>
        </div>
    `;
    container.innerHTML += card;
});
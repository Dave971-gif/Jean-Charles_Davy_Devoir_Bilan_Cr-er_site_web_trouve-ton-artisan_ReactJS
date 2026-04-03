const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const Artisan = require('./models/artisan');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());  

// --- ROUTES ---

// 1. Récupérer TOUS les artisans
app.get('/api/artisans', async (req, res) => {
  try {
    const artisans = await Artisan.findAll(); // Sequelize va chercher dans MySQL
    res.json(artisans); // On envoie la liste en format JSON au Frontend
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// 2. Récupérer UN SEUL artisan par son ID
app.get('/api/artisans/:id', async (req, res) => {
    try {
        const artisan = await Artisan.findByPk(req.params.id);
        if (artisan) {
            res.status(200).json(artisan);
        } else {
            res.status(404).json({ message: "Artisan non trouvé" });
        }
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la recherche de l'artisan." });
    }
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
        // On vérifie la connexion à MySQL
        await sequelize.authenticate();
        console.log('✅ Connexion à MySQL réussie !');

        // On synchronise les modèles avec la BDD (crée les tables si besoin)
        await sequelize.sync();
        
        app.listen(PORT, () => {
            console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('❌ Impossible de se connecter à la base de données :', error);
    }
};

startServer(); // On démarre tout le processus de connexion et lancement du serveur

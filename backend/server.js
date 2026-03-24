const express = require('express');
const cors = require('cors');
const path = require('path');
const sequelize = require('./config/database');
const Artisan = require('./models/artisan');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../frontend'))); 

app.get('/artisans', async (req, res) => {
  try {
    const tousLesArtisans = await Artisan.findAll();
    res.json(tousLesArtisans);
  } catch (error) {
    res.status(500).json({ message: "Erreur", error: error.message });
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

const startServer = async () => {
  try {
    // Si ok, on lance le serveur
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Serveur Node prêt sur : http://localhost:${PORT}`);
    });
  } catch (error) {
    // Si la connexion échoue, on affiche une erreur et on arrête tout 
    console.error('❌ Erreur fatale lors du démarrage du serveur');
    console.error(error.message);
  }
};

startServer(); // On démarre tout le processus de connexion et lancement du serveur

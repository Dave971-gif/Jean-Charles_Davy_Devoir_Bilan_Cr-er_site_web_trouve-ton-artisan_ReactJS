const { Sequelize } = require('sequelize');
require('dotenv').config(); 

// CRÉE une instance de Sequelize avec les infos de connexion à la base de données
const sequelize = new Sequelize(
  process.env.DB_NAME,     
  process.env.DB_USER,     
  process.env.DB_PASS,     
  {
    host: process.env.DB_HOST,   
    port: process.env.DB_PORT,   
    dialect: process.env.DB_DIALECT, 
    logging: false               
  }
);

module.exports = sequelize;
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Artisan = sequelize.define('artisan', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nom: {
    type: DataTypes.STRING,
    allowNull: false
  },
  specialite: {
    type: DataTypes.STRING
  },
  note: {
    type: DataTypes.DECIMAL(2, 1)
  },
  localisation: {
    type: DataTypes.STRING
  },
  a_propos: {
    type: DataTypes.TEXT
  },
  email: {
    type: DataTypes.STRING
  },
  site_web: {
    type: DataTypes.STRING,
  },
  categorie: {
    type: DataTypes.STRING
  },
  top: {
    type: DataTypes.STRING
    }
}, {
  tableName: 'artisans',
  timestamps: false
});

module.exports = Artisan;
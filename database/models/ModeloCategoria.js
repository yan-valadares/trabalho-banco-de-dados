const Sequelize = require('sequelize')
const database = require('../dbConnection');

const Categoria = database.define('categoria', {
    id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true
    },
    nome_categoria: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {freezeTableName: true})

module.exports = Categoria;
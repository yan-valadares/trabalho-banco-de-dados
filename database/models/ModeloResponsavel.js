const Sequelize = require('sequelize')
const database = require('../dbConnection');

const Responsavel = database.define('responsavel', {
    id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true
    },
    nome_responsavel: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sobrenome_responsavel: {
        type: Sequelize.STRING,
        allowNull: false
    },
    uf_responsavel: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cidade_responsavel: {
        type: Sequelize.STRING,
        allowNull: false
    },
    logradouro_responsavel: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {freezeTableName: true})

module.exports = Responsavel;
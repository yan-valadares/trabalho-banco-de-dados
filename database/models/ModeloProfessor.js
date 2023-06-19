const Sequelize = require('sequelize')
const database = require('../dbConnection');

const Professor = database.define('professor', {
    id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true
    },
    nome_professor: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sobrenome_professor: {
        type: Sequelize.STRING,
        allowNull: false
    },
    prontuario_professor: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    email_academico: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    especializacao: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {freezeTableName: true})

module.exports = Professor;
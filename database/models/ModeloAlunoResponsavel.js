const Sequelize = require('sequelize')
const database = require('../dbConnection');

const ResponsavelAluno = database.define('responsavel_aluno', {
    id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true
    },
    parentesco: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {freezeTableName: true})

module.exports = ResponsavelAluno;
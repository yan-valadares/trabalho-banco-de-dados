const Sequelize = require('sequelize')
const database = require('../dbConnection');
const Responsavel = require('./ModeloResponsavel');

const TelefoneResponsavel = database.define('telefone_responsavel', {
    id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {freezeTableName: true})

TelefoneResponsavel.belongsTo(Responsavel, {
    constraint: true,
    foreignKey: 'id_responsavel',
    allowNull: false
});

Responsavel.hasMany(TelefoneResponsavel, {
    foreignKey: 'id_responsavel',
    allowNull: false
})

module.exports = TelefoneResponsavel;
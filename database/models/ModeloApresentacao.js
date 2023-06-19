const Sequelize = require('sequelize')
const database = require('../dbConnection');
const Projeto = require('./ModeloProjeto');

const Apresentacao = database.define('apresentacao', {
    id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true
    },
    data_apresentacao: {
        type: Sequelize.DATE,
        allowNull: false
    },
    duracao_apresentacao: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {freezeTableName: true})

Apresentacao.belongsTo(Projeto, {
    constraint: true,
    foreignKey: 'id_projeto',
    allowNull: false
})

Projeto.hasMany(Apresentacao, {
    foreignKey: 'id_projeto',
    allowNull: false
})

module.exports = Apresentacao;
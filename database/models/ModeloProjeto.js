const Sequelize = require('sequelize')
const database = require('../dbConnection');
const Categoria = require('./ModeloCategoria');
const Professor = require('./ModeloProfessor');

const Projeto = database.define('projeto', {
    id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true
    },
    nome_projeto: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tema_projeto: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    votos: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
    
}, {freezeTableName: true})

Projeto.belongsTo(Categoria, {
    constraint: true,
    foreignKey: 'id_categoria',
    allowNull: false
})

Categoria.hasMany(Projeto, {
    foreignKey: 'id_categoria',
    allowNull: false
})

Projeto.belongsTo(Professor, {
    constraint: true,
    foreignKey: 'id_professor',
    allowNull: false
})

Professor.hasMany(Projeto, {
    foreignKey: 'id_professor',
    allowNull: false
})



module.exports = Projeto;
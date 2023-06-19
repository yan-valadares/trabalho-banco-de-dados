const Sequelize = require('sequelize')
const database = require('../dbConnection');
const Projeto = require('./ModeloProjeto');
const Responsavel = require('./ModeloResponsavel')
const AlunoResponsavel = require('./ModeloAlunoResponsavel')

const Aluno = database.define('aluno', {
    id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true
    },
    nome_aluno: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sobrenome_aluno: {
        type: Sequelize.STRING,
        allowNull: false
    },
    prontuario: {
        type: Sequelize.STRING,
        allowNull: false
    },
    data_nascimento: {
        type: Sequelize.DATE,
        allowNull: false
    }
}, {freezeTableName: true})

Aluno.belongsTo(Projeto, {
    constraint: true,
    foreignKey: 'id_projeto',
    allowNull: false
})

Projeto.hasMany(Aluno, {
    foreignKey: 'id_projeto',
    allowNull: false
})

Aluno.belongsToMany(Responsavel, {
    through: { model: AlunoResponsavel },
    foreignKey: 'id_aluno',
    constraint: true
})

Responsavel.belongsToMany(Aluno,{
    through: { model: AlunoResponsavel },
    foreignKey: 'id_responsavel',
    constraint: true
})

module.exports = Aluno;
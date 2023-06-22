const database = require('../dbConnection');
const Professor = require('../models/ModeloProfessor')
const Categoria = require('../models/ModeloCategoria');
const Projeto = require('../models/ModeloProjeto');
const Aluno = require('../models/ModeloAluno');
const Responsavel = require('../models/ModeloResponsavel');
const Apresentacao = require('../models/ModeloApresentacao');
const AlunoResponsavel = require('../models/ModeloAlunoResponsavel');
const TelefoneResponsavel = require('../models/ModeloTelefoneResponsavel');

async function createDatabase(){
    
    await database.sync()

    Professor.create()
    Categoria.create()
    Projeto.create()
    Aluno.create()
    Responsavel.create()
    Apresentacao.create()
    AlunoResponsavel.create()
    TelefoneResponsavel.create()
}   

createDatabase()
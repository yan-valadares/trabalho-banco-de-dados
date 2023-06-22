const database = require('../dbConnection');
const Professor = require('../models/ModeloProfessor')
const Categoria = require('../models/ModeloCategoria')
const Responsavel = require('../models/ModeloResponsavel')
const TelefoneResponsavel = require('../models/ModeloTelefoneResponsavel')

async function databaseSelect(){

    await database.sync()

    // const professores = await Professor.findAll();
    // console.log(professores)
    

    // const categorias = await Categoria.findAll();
    // console.log(categorias)

    // const professor = await Professor.findOne({
    //     where: {
    //         nome_professor: 'Yan'
    //     }
    // })
    // console.log(professor.dataValues)

    // const categoria = await Categoria.findOne({
    //     where: {
    //         nome_categoria: 'Biologia'
    //     }
    // })
    // console.log(categoria.dataValues)
}

databaseSelect()
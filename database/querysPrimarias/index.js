const { randomUUID } = require('crypto');
const database = require('../dbConnection');
const Professor = require('../models/ModeloProfessor')
const Categoria = require('../models/ModeloCategoria')

async function createDatabase(){
    
    await database.sync()
    
    const novoProfessor1 = Professor.create({
        id: randomUUID(),
        nome_professor: 'Yan',
        sobrenome_professor: 'Valadares',
        email_academico: 'y.cardoso@ifsp.edu.br',
        prontuario_professor: 'ht3016099',
        especializacao: 'Biologia'
    });
    
    const novoProfessor2 = Professor.create({
        id: randomUUID(),
        nome_professor: 'Lucas',
        sobrenome_professor: 'Carmassi',
        email_academico: 'carmassi.lucas@ifsp.edu.br',
        prontuario_professor: 'ht301665x',
        especializacao: 'Química'
    });

    const novoProfessor3 = Professor.create({
        id: randomUUID(),
        nome_professor: 'Letícia',
        sobrenome_professor: 'Ribeiro',
        email_academico: 'ribeiro.leticia@ifsp.edu.br',
        prontuario_professor: 'ht3016609',
        especializacao: 'Física'
    });


    const novaCategoria1 = Categoria.create({
        id: randomUUID(),
        nome_categoria: 'Biologia',
        descricao: 'Ciência da natureza'
    });

    const novaCategoria2 = Categoria.create({
        id: randomUUID(),
        nome_categoria: 'Química',
        descricao: 'Ciência das coisas'
    });

    const novaCategoria3 = Categoria.create({
        id: randomUUID(),
        nome_categoria: 'Física',
        descricao: 'Ciência do universo'
    });

    Professor.findAll();

}   

createDatabase()
const database = require('../dbConnection');
const Professor = require('../models/ModeloProfessor')
const Categoria = require('../models/ModeloCategoria')
const { randomUUID } = require('crypto');

async function insertBasicData(){

    await database.sync()

    Professor.create({
        id: randomUUID(),
        nome_professor: 'Yan',
        sobrenome_professor: 'Valadares',
        email_academico: 'y.cardoso@ifsp.edu.br',
        prontuario_professor: 'ht3016099',
        especializacao: 'Biologia'
    });
    
    Professor.create({
        id: randomUUID(),
        nome_professor: 'Lucas',
        sobrenome_professor: 'Carmassi',
        email_academico: 'carmassi.lucas@ifsp.edu.br',
        prontuario_professor: 'ht301665x',
        especializacao: 'Química'
    });

    Professor.create({
        id: randomUUID(),
        nome_professor: 'Letícia',
        sobrenome_professor: 'Ribeiro',
        email_academico: 'ribeiro.leticia@ifsp.edu.br',
        prontuario_professor: 'ht3016609',
        especializacao: 'Física'
    });


    Categoria.create({
        id: randomUUID(),
        nome_categoria: 'Biologia',
        descricao: 'Ciência da vida'
    });

    Categoria.create({
        id: randomUUID(),
        nome_categoria: 'Química',
        descricao: 'Ciência da matéria e suas propriedades'
    });

    Categoria.create({
        id: randomUUID(),
        nome_categoria: 'Física',
        descricao: 'Ciência dos fenômenos naturais'
    });
}

insertBasicData();
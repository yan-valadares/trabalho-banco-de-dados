const express = require('express')
const Professor = require('./database/models/ModeloProfessor')
const Categoria = require('./database/models/ModeloCategoria')
const Projeto= require('./database/models/ModeloProjeto')
const {randomUUID} = require('crypto')

const routes = express.Router();

routes.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/html/index.html")
})

routes.get("/index.html", (req, res) => {
    res.sendFile(__dirname + "/public/html/index.html")
})

routes.get("/personSubscribe.html", (req, res) => {
    res.sendFile(__dirname + "/public/html/personSubscribe.html")
})

routes.get("/projectSubscribe.html", (req, res) => {
    res.sendFile(__dirname + "/public/html/projectSubscribe.html")
})

routes.get("/projects.html", (req, res) => {
    res.sendFile(__dirname + "/public/html/projects.html")
})

routes.get("/projectWinner.html", (req, res) => {
    res.sendFile(__dirname + "/public/html/projectWinner.html")
})

routes.post("/personSubscribe/post", (req, res) => {
    
    res.send(req.body)

    
    // res.sendFile(__dirname + "/public/html/subscribeConfirmation.html")
})

routes.post("/projectSubscribe/post", async (req, res) => {
  
    const professorData = await Professor.findOne({
        where: {
            nome_professor: req.body.nome_professor
        }
    })
    const categoriaData = await Categoria.findOne({
        where: {
            nome_categoria: req.body.nome_categoria
        }
    })

    await Projeto.create({
        id: randomUUID(),
        nome_projeto: req.body.nome_projeto,
        tema_projeto: req.body.tema_projeto,
        descricao: req.body.descricao,
        id_professor: professorData.id,
        id_categoria: categoriaData.id
    }).then(() => {
        console.log('Projeto criado com sucesso')
        res.sendFile(__dirname + "/public/html/subscribeConfirmation.html")
    }).catch((err) => {
        console.log('erro: ' + err)
        res.send('Erro')
    })

    
})

module.exports = routes;
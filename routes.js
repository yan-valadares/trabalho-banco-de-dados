const express = require('express')
const Professor = require('./database/models/ModeloProfessor')
const Categoria = require('./database/models/ModeloCategoria')
const Projeto= require('./database/models/ModeloProjeto')
const Aluno = require('./database/models/ModeloAluno')
const Responsavel= require('./database/models/ModeloResponsavel')
const TelefoneResponsavel= require('./database/models/ModeloTelefoneResponsavel')
const AlunoResponsavel= require('./database/models/ModeloAlunoResponsavel')
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

routes.post("/personSubscribe/post", async (req, res) => {

    const capitalize = str => {
        if (typeof str !== 'string') {
            return '';
        }
        return str.charAt(0).toUpperCase() + str.substr(1);
    }

    const dataNascimento = new Date(req.body.data_nascimento)
    let idAluno = randomUUID()
    let idResponsavel = randomUUID()

    const projetoData = await Projeto.findOne({
        where: {
            nome_projeto: capitalize(req.body.nome_projeto)
        }
    })

    if(projetoData != null){

        await Aluno.create({
            id: idAluno,
            nome_aluno: capitalize(req.body.nome_aluno),
            sobrenome_aluno: capitalize(req.body.sobrenome_aluno),
            prontuario: req.body.prontuario,
            data_nascimento: dataNascimento,
            id_projeto: projetoData.id
        }).then(() => { console.log('Aluno criado com sucesso')})
        .catch((err) => {console.log('Erro: ' + err) 
        res.sendFile(__dirname + "/public/html/somethingWentWrong.html")})

        await Responsavel.create({
            id: idResponsavel,
            nome_responsavel: capitalize(req.body.nome_responsavel),
            sobrenome_responsavel: capitalize(req.body.sobrenome_responsavel),
            uf_responsavel: req.body.uf_responsavel.toUpperCase(),
            cidade_responsavel: capitalize(req.body.cidade_responsavel),
            logradouro_responsavel: capitalize(req.body.logradouro_responsavel)
        }).then(() => { console.log('Responsável criado com sucesso')})
        .catch((err) => {console.log('Erro: ' + err) 
        res.sendFile(__dirname + "/public/html/somethingWentWrong.html")})

        await TelefoneResponsavel.create({
            id: randomUUID(),
            telefone: req.body.telefone,
            id_responsavel: idResponsavel
        }).then(() => { console.log('Relação telefone responsável criada com sucesso')})
        .catch((err) => {console.log('Erro: ' + err) 
        res.sendFile(__dirname + "/public/html/somethingWentWrong.html")})

        await AlunoResponsavel.create({
            id: randomUUID(),
            id_aluno: idAluno,
            id_responsavel: idResponsavel,
            parentesco: capitalize(req.body.parentesco)
        }).then(() => { console.log('Relação aluno responsável criada com sucesso')})
        .catch((err) => {console.log('Erro: ' + err) 
        res.sendFile(__dirname + "/public/html/somethingWentWrong.html")})

        res.sendFile(__dirname + "/public/html/subscribeConfirmation.html")

    } else {res.sendFile(__dirname + "/public/html/somethingWentWrong.html")}

})

routes.post("/projectSubscribe/post", async (req, res) => {
    const capitalize = str => {
        if (typeof str !== 'string') {
            return '';
        }
        return str.charAt(0).toUpperCase() + str.substr(1);
    }

    const professorData = await Professor.findOne({
        where: {
            nome_professor: capitalize(req.body.nome_professor)
        }
    })
    const categoriaData = await Categoria.findOne({
        where: {
            nome_categoria: capitalize(req.body.nome_categoria)
        }
    })

    if(categoriaData != null && professorData != null){
        await Projeto.create({
            id: randomUUID(),
            nome_projeto: capitalize(req.body.nome_projeto),
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
    } else { res.sendFile(__dirname + "/public/html/somethingWentWrong.html")}
    
})

routes.post("/projectsVote/post", async (req, res) => {
    
    const capitalize = str => {
        if (typeof str !== 'string') {
            return '';
        }
        return str.charAt(0).toUpperCase() + str.substr(1);
    }

    const projetoData = await Projeto.findOne({
        where: {
            nome_projeto: capitalize(req.body.nome_projeto)
        }
    })
    
    if(projetoData != null){
        votos = projetoData.votos + 1

        projetoData.votos = votos
        projetoData.save()
    
        console.log(projetoData)
        res.sendFile(__dirname + "/public/html/projectsAfterVote.html")
    } else { res.sendFile(__dirname + "/public/html/somethingWentWrong.html")}
    
})

routes.get('/selectProjects', async (req, res) => {

    const projects  = await Projeto.findAll()

    res.send(projects)

})

module.exports = routes;
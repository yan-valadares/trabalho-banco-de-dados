/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
const url = 'http://localhost:8080/selectProjects'
const linkUnsplash = 'https://source.unsplash.com/300x400/?'
const pagina = document.querySelector('.project-container')

async function consultaProjetos(){

    const consulta = await fetch(url)
        .then(response => response.json())
        .then(data => {
            for(let i = 0; i < data.length; i++){
                let nomeProjeto = data[i].nome_projeto
                let descricaoProjeto = data[i].descricao
                console.log('nome projeto: ' + nomeProjeto)
                console.log('descricao projeto: ' + nomeProjeto)
                console.log(pagina)
                let projectCard = document.createElement('div')
                projectCard.innerHTML = createProjectCard(nomeProjeto, descricaoProjeto)
                pagina.appendChild(projectCard)
            }
        })
        .catch(error => console.error(error))
}   

function createProjectCard(nomeProjeto, descricaoProjeto){
    return `
    <div class="card overflow-hidden shadow rounded-4 border-0 mb-5">
        <div class="card-body p-0">
            <div class="d-flex align-items-center">
                <div class="p-5">
                    <h2 class="fw-bolder">${nomeProjeto}</h2>
                    <p>${descricaoProjeto}</p>
                </div>
                <img class="img-fluid" src="${linkUnsplash}${nomeProjeto}" alt="Imagem do projeto de sciencias" />
            </div>
        </div>
    </div>
    `
}
consultaProjetos();
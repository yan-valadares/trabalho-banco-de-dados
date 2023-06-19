/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
const linkUnsplash = 'https://source.unsplash.com/300x400/?science'

function createProjectCard(){
    return `
    <div class="card overflow-hidden shadow rounded-4 border-0 mb-5">
        <div class="card-body p-0">
            <div class="d-flex align-items-center">
                <div class="p-5">
                    <h2 class="fw-bolder">Project Name 1</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius at enim eum illum aperiam placeat esse? Mollitia omnis minima saepe recusandae libero, iste ad asperiores! Explicabo commodi quo itaque! Ipsam!</p>
                </div>
                <img class="img-fluid" src="${linkUnsplash}" alt="Imagem do projeto de sciencias" />
            </div>
        </div>
    </div>
    `
}

document.querySelector('.project-container').innerHTML = createProjectCard()


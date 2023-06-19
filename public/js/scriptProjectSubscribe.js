import { randomUUID } from 'node:crypto'

database.sync()
console.log('Olá, Mundo!')

const formEl = document.getElementById('contactForm')

formEl.addEventListener('submit', evento => {
    evento.preventDefault();

    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData);

    console.log(randomUUID())
})
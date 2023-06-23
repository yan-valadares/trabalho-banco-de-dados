# Conexão Científica

## Link para o template utilizado no trabalho 
[Start Bootstrap](https://startbootstrap.com/theme/personal)

## Necessário ter o node instalado
- Link para download: 🔗[Node](https://nodejs.org/en)

## Como rodar o projeto
- docker run --name postgres-bd2 -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=123456 -e POSTGRES_DB=trabalhobanco -p 5432:5432 -d postgres
- npm install
- node database/querys/createDatabase.js
- node database/querys/insertBasicData.js
- npm run dev

# Para acessar:
localhost:8080
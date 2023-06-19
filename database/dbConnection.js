const Sequelize = require('sequelize')
const sequelize = new Sequelize('trabalhobanco', 'postgres', '123456', {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432
})
    sequelize.authenticate()
    .then(() =>{ console.log('Connection has been established successfully.') })
    .catch((error) => {console.error('Unable to connect to the database:', error);})
    
module.exports = sequelize;
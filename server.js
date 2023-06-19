const express = require('express')
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes');

// configs server
app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, '/public')))
app.use(bodyParser.json())

app.use(routes)

const port = process.env.PORT || 8080
app.listen(port, (error) => {
    if(error){
        console.log('erro ao iniciar servidor na porta', port , error)
    } else {
        console.log("Server em funcionamento na porta: ", port)
    }
});
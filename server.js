const express = require('express')
const app = express();
const path = require('path');
const bodyParser = require('body-parser')

// configs server
app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, '/public')))
app.use(bodyParser.json())


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/html/index.html")
})

app.get("/index.html", (req, res) => {
    res.sendFile(__dirname + "/public/html/index.html")
})

app.get("/personSubscribe.html", (req, res) => {
    res.sendFile(__dirname + "/public/html/personSubscribe.html")
})

app.get("/projectSubscribe.html", (req, res) => {
    res.sendFile(__dirname + "/public/html/projectSubscribe.html")
})

app.get("/projects.html", (req, res) => {
    res.sendFile(__dirname + "/public/html/projects.html")
})

app.get("/projectWinner.html", (req, res) => {
    res.sendFile(__dirname + "/public/html/projectWinner.html")
})


const port = process.env.PORT || 8080
app.listen(port, (error) => {
    if(error){
        console.log('erro ao iniciar servidor na porta', port , error)
    } else {
        console.log("Server em funcionamento na porta: ", port)
    }
});
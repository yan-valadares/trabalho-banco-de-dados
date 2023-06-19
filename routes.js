const express = require('express')

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

module.exports = routes;
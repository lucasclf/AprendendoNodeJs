const express = require("express");
const app = express();
const handlebars = require("express-handlebars")
const Sequelize = require("sequelize")
const bodyParser = require("body-parser")

//Config
    //Template engine
    app.engine("handlebars", handlebars({defaultLayout: "main"}))
    app.set("view engine", "handlebars")
    //Body parser
    app.use(bodyParser.urlencoded({extended:false}))
    app.use(bodyParser.json())
    //Conexão com o banco de dados mySql
    const testeDB = new Sequelize("teste", "root", "lucas_cqn", {
        host: "localhost",
        dialect: "mysql"
    })
//Rotas
    app.get("/cad", function(req, res){
        res.render("formulario")
    })

    app.post("/add", function(req, res){
        res.send("<h1>"+req.body.titulo+"</h1> <br> <h3>Conteudo:</h3> "+req.body.conteudo)
    })


app.listen(4242, function(){
    console.log("Servidor rodando na url: http://localhost:4242")
});
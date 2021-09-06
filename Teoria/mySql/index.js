const express = require("express");
const app = express();
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")
const Post = require("./models/post")

//Config
    //Template engine
    app.engine("handlebars", handlebars({defaultLayout: "main"}))
    app.set("view engine", "handlebars")
    //Body parser
    app.use(bodyParser.urlencoded({extended:false}))
    app.use(bodyParser.json())

//Rotas
    app.get("/", function(req, res){
        Post.findAll({order: [["id", "DESC"]]}).then(function(post){
            res.render("home", {post: post})
        })
    })

    app.get("/cad", function(req, res){
        res.render("formulario")
    })

    app.post("/add", function(req, res){
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function(){
            res.redirect("/")
        }).catch(function(err){
            res.send("Falha em criar a postagem: ", err)
        })
    })

    app.get("/deletar/:id", function(req, res){
        Post.destroy({where: {id: req.params.id}}).then(function(){
            res.send("Postagem deletada com sucesso!")
        }).catch(function(err){
            res.send("Essa postagem não existe!")
        })
    })


app.listen(4242, function(){
    console.log("Servidor rodando na url: http://localhost:4242")
});
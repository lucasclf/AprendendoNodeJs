const mongoose = require("mongoose")

// Configurando o mongoose

    mongoose.Promisse = global.Promisse;
    mongoose.connect("mongodb://localhost/aprendendo").then(() => {
        console.log("MongoDB conectado.")
    }).catch((err) =>{
        console.log("Erro ao se conectar ao mongoDB: ", err)
    })

// Model - Usuários
    //Definindo o model
        const UserSchema = mongoose.Schema({
            nome: {
                type: String,
                require: true,
            },
            sobrenome: {
                type: String,
                require: true,
            },
            email: {
                type: String,
                require: true,
            },
            idade: {
                type: Number,
                require: true,
            },
            pais: {
                type: String,
                require: false,
            }

        });
    //Criando a collection
        mongoose.model("usuarios", UserSchema)
        const User = mongoose.model("usuarios")

        new User({
            nome: "Lucas",
            sobrenome: "Coquenão",
            email: "email@email.com",
            idade: 34,
            pais: "Brasil"
            
        }).save().then(() => {
            console.log("Usuário criado com sucesso.")
        }).catch((err) =>{
            console.log("Erro ao cadastrar usuário: "+err)
        })

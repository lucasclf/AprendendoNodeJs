const Sequelize = require("sequelize")
const testeDB = new Sequelize("teste", "root", "lucas_cqn", {
    host: "localhost",
    dialect: "mysql"
})

/* Criando de modelos*/

const modelPostagem = testeDB.define("postagens", {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

const modelUsuario = testeDB.define("usuarios",{
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

/* Criando as tabelas seguindo os modelos acima */

//modelPostagem.sync({force:true}) //Comando para forçar a sincronização com o DB, comentado para evitar risco de criação em duplicidade

//modelUsuario.sync({force:true}) //Comando para forçar a sincronização com o DB, comentado para evitar risco de criação em duplicidade

/* Inserindo os dados nas tabelas */

/* modelPostagem.create({
    titulo: "Titulo da postagem.",
    conteudo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sequi officia quos culpa aperiam autem odio dolorem praesentium minus commodi similique fugit enim doloribus voluptate velit, nostrum nihil impedit eveniet" 
}) */ //Postagem criada, comentado para evitar duplicidade na criação da postagem.

/* modelUsuario.create({
    nome: "Lucas",
    sobrenome: "Coquenão",
    idade: 34,
    email: "teste@teste.com"
}) */ //Comando para forçar a sincronização com o DB, comentado para evitar risco de criação em duplicidade


/* testeDB.authenticate().then(function(){
    console.log("Conectado com sucesso.")
}).catch(function(err){
    console.log("Falha ao se conectar: ", err)
}) */
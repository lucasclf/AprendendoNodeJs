const Sequelize = require("sequelize")

//Conexão com o banco de dados mySql
    const conectDB = new Sequelize("postapp", "root", "lucas_cqn", {
        host: "localhost",
        dialect: "mysql"
    })

module.exports = {
    Sequelize : Sequelize,
    conectDB : conectDB,
}
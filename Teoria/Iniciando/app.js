const express = require("express");
const app = express();

app.get("/", function (req, res){
    res.sendFile(__dirname+"/html/index.html")
})

app.listen(4242, function(){
    console.log("Servidor rodando na url: http://localhost:4242")
});
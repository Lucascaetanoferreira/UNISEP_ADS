const express = require("express");

const app = express();
app.get("/alunos",(request, response)=>{

    const filtro= request.query.filtro;
    console.log(filtro);
    const alunos= [
        {nome:lucas},
        {nome:ferreira},
        {nome:gabriel},
        {nome:guilherme}

        
    ];
    
    respode.send(alunos);
    response.send("lista de alunos!")

});

app.listen(8080, ()=>{
    console.log("o servidor esta rodando a porta 8080");
})

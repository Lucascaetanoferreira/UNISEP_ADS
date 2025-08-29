import express, { response } from "express";

const app = express();
app.use(express.json());

const pessoa =[];
var coutID=0;

pessoa.push({
    nome:"lucas",
    telefone:"999788695"
});

app.get("/", (request,respose)=>{

    return respose.send(pessoa);

});

app.post("/cadastro", (request,response)=>{

    console.log(request);

    const nome = request.body.nome;
    const telefone = request.body.telefone;

    pessoa.push({
        id: coutID++,
        nome,
        telefone
    })

    return response.send ({nome,telefone});

})

app.listen(8080, ()=> {
 console.log("o servidor esta rodando na porta 8080")
});

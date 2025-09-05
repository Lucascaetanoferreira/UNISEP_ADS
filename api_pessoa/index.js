import express, { response } from "express";

const app = express();
app.use(express.json()); //configura\\

const pessoa =[];
var coutID=0;

pessoa.push({
    nome:"lucas",
    telefone:"999788695"
});

app.get("/", (request,respose)=>{

    const pessoa =pessoa.filter ((i)=> i.nome === nome);

    return respose.send(pessoa);

});
app.put ("/atualizar:id", (request,response)=>{
   const {id} = request.params;
   const {nome, telefone} = request.body;

   const pessoaIndex = pessoa.findIndex((i)=> i.id == id);

   if(pessoaIndex <= -1){
    return response.send({msg:"O codigo da pessoa não existe"})

   }

   pessoa={pessoaIndex}. nome=nome;
   pessoa={pessoaIndex}.telefone=telefone;
});

app.delete ("/deletar:id", (request,response)=>{
    const {id} = request.params;
    
    const pessoaIndex = pessoa.findIndex((i)=> i.id == id);

    if(pessoaIndex <=-1){
        return response.send("msg: O codigo da pessoa esta invalida");

    }else{
        pessoa.splice(pessoaIndex,1);
    }
    return response.send("msg: pessoa deletada com sucesso");

})


app.post("/cadastro", (request,response)=>{//permite que envie um corpo//

    console.log(request);

    const nome = request.body.nome;
    const telefone = request.body.telefone;

    pessoa.push({//objeto\\
        id: coutID++,
        nome,
        telefone
    })

    return response.send ({nome,telefone});

})

app.listen(8080, ()=> {
 console.log("o servidor esta rodando na porta 8080")
});

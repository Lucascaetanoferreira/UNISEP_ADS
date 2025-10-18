import express, { request } from "express";



const knex = require('knex')({
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      port: 3306,
      user: 'root',
      password: 'root',
      database: 'escola',
    },
  });



const app = express();


app.use(express.json());


app. get("/",(request, response)=>{
    
    response.send("ola mundo");

});


app. post("/aluno",[validaNome, validaRa ],(request,response)=>{
   const {nome, ra}=request.body;

   response.send({nome, ra});
   response.send([nome,ra]);
   response.log({nome,ra});

});

function validaNome(request,response, next){
       const {nome}= request.body;

       if(!nome){
        res.send({msg:"é obrigatorio"})
       }

   
    next();


}
function validaRa(request,response, next){
    const {ra}= request.body;

    if(!ra){
     res.send({msg:"é obrigatorio"})
    }


 next();

}


app. listen(8080,()=>{
    console.log("o servidor esta rodando na porta 8080");
})
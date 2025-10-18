import express, { request, response } from "express";

const app= express()

app.use(express.json());

app.post ("/cadastro"[validarcampo, validarCor, validarAno],(Request,response)=>{
     const {modelo, cor, ano}= request.body;

   

     return response.send({modelo, cor, ano});
});

function validarcampo(request,response, next){
    const {modelo}= request.body;

    if(!modelo){
        return response.send({msg:"o campo é obrigatorio"});

     }
     return next;

}

function validarCor(request, response, next){
    const {cor}= request.body;
if(!cor){
   return response.send({msg: "o campo é obrigatorio"});

 }
 return next;
}
function validarAno(request, response, next){
    const {ano}= request.body;
    if(!Ano){
       return response.send({msg: "o campo é obrigatorio"});
    
     }
     return next;
    }
app.listen(8080,()=>{
    console.log("o servidor esta na porta 8080");
});
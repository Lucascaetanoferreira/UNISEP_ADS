import express, { response } from "express";

const app = express();
app.use(express.json()); //configura\\

app.use(express.json());

const usuarios =[];


app.post("/cadastro", (request,response)=>{//permite que envie um corpo//
    const {nome,usuario, senha} =request.body;

    usuario.push({nome, usuario, senha});

    return response.send ({msg:"login realizado com sucesso"});

})

app.post("/login", (request,response)=>{
    const {usuario, senha } = request.body



    if (!usuario || !senha){

        return ({msg:"login realizado com sucesso"});
    }

    const existe =  usuario.find(u => usuarios === usuario && u.senha ===senha);

    if (existe) {
        return response.send({ msg: "Login realizado com sucesso!" });
      } else {
        return response.send({ msg: "Usuário ou senha inválidos!" });
      }

});

app.listen(8080, ()=> {
 console.log("o servidor esta rodando na porta 8080")
});

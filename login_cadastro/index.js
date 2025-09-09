import express, { response } from "express";

const app = express();
app.use(express.json()); //configura\\

const usuarios =[];


app.get("/", (request,respose)=>{

    const usuarios =usuarios.filter ((i)=> i.nome === nome);

    return respose.send(usuarios);

});
app.post("/cadastro", (request,response)=>{//permite que envie um corpo//

    console.log(request);

    const nome = request.body.nome;
    const telefone = request.body.telefone;

    usuarios.push({//objeto\\
        id: coutID++,
        nome,
        telefone
    })

    return response.send ({nome,telefone});

})

app.post("/login", (request,response)=>{
    const {usuario, senha } = request.body

    if (!usuario || !senha){

        return ({msg:"login realizado com sucesso"});
    }

    const existe =  usuario.find(u => usuarios === usuario && u.senha ===senha);

    if (existe) {
        return res.json({ msg: "Login realizado com sucesso!" });
      } else {
        return res.status(401).json({ msg: "Usuário ou senha inválidos!" });
      }

});

app.listen(8080, ()=> {
 console.log("o servidor esta rodando na porta 8080")
});

var nome="lucas";
console.log(nome);

var valor=150.0;
var status=true;
const pessoa=[];


pessoa.push("lucas");
pessoa.push("guilherme");
pessoa.push("gabriel");
console.log(pessoa[0]);

var aluno ={
    nome: "lucas",
    RA:12345,
    email:"lucascaetanoferreira232930@gmail.com"
}

aluno.telefone= 46999788612,

console.log("nome:", nome);
console.log("salario:",valor);
console.log("status:",status);
console.log("pessoa:",pessoa);
console.log("total:",pessoa.length);

for (const i=0;i <=pessoa.length;i++){
    console.log(pessoa[i]);

}
pessoa.forEach(i=>{
    console.log(i)
})
pessoa.map((valor, index)=>{
    if(valor != "lucas"){

        return valor
    }
});


function soma(a,b){

}
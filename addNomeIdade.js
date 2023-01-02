const nome = process.argv[2]
const age = process.argv[3]

if(!nome || !age){
    console.log("Digite seu nome e idade.")
} else {
    console.log(`Olá, ${nome}!Você tem ${age} anos. \nEm sete anos você terá ${Number(age)+7}`)
}
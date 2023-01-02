import { countries } from "./countries.js";

const name = process.argv[2]
const code = process.argv[3]

if(!name || !code){
    console.log("Digite novamente o nome e código do país")
} else {
    const novoPais = {
        name: name,
        code: code
    }

    countries.unshift(novoPais)
    console.table(countries)
}
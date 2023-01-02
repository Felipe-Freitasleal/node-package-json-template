import { countries } from "./countries.js"

const value = process.argv[2]

if(!value){
    console.log("digite uma letra")
} else {
    const result = countries.filter((pais)=>{
        return pais.name.toLowerCase()[0] === value.toLowerCase()
    })
    console.table(result)
}
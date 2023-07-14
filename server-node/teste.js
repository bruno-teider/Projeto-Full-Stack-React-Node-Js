const fs = require("fs")
const dadosAtuais = JSON.parse(fs.readFileSync("livros.json")) //Lê dados do livros.json
const novoDado = { id: "3", nome: "livro muito daora"} //Nova array de dados

fs.writeFileSync("livros.json", JSON.stringify([...dadosAtuais, novoDado])) //Reescreve sobre a antiga array, colocando as coisas novas

console.log(JSON.parse(fs.readFileSync("livros.json")))
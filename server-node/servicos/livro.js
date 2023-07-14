const fs = require("fs") //Usado para agir sobre arquivos

function getTodosLivros(){
    return JSON.parse(fs.readFileSync("livros.json")) //Lê dados do livros.json
}

function getLivroId(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const livroFiltrado = livros.filter( livro => livro.id === id) //Se o valor lido do json for igual ao parametro do user, inserir na const livroFiltrado
    return livroFiltrado
}

function insereLivro(livroNovo){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const novaListaLivros = [ ...livros, livroNovo ]
    fs.writeFileSync("livros.json", JSON.stringify(novaListaLivros))
}

module.exports = {
    getTodosLivros,
    getLivroId,
    insereLivro
}
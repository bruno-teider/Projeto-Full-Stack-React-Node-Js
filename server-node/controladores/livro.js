const { getTodosLivros, getLivroId, insereLivro } = require("../servicos/livro")

function getLivros(req, res)
{
    try {
        const livros = getTodosLivros()
        res.send(livros)
    } catch(error){     //Caso de algum erro
        res.status(500)
        res.send(error.message)
    }
}

function getLivro(req, res)
{
    try {
        const id = req.params.id //pega o parametro ID digitado na url
        const livro = getLivroId(id)
        res.send(livro)
    } catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function postLivro(req, res)
{
    try {
        const livroNovo = req.body
        insereLivro(livroNovo)
        res.status(201)
        res.send("Livro adicionado")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro
}
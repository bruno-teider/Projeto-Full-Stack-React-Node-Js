const express = require("express")  //Chama o express
const app = express()   //Cria o app pelo express   
const port = 8000    //Porta para entrar
const rotaLivro = require("./rotas/livro") //Puxa rota livro

app.use(express.json()) //Permite a aplicação a usar arquivos json
app.use('/livros', rotaLivro) //Ao entrar no /livros, entra na rota livro.js

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})

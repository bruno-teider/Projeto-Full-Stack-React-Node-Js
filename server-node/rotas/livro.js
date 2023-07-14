const { Router } = require("express") //Ferramenta do express para criar rota
const router = Router()
const { getLivros, getLivro, postLivro } = require("../controladores/livro")

router.get("/", getLivros)
router.get("/:id", getLivro)

router.post("/", postLivro)

router.patch("/", (req, res) => {   //Editar dados
    res.send("Você fez uma requisição PATCH")
})

router.delete("/", (req, res) => {
    res.send("Você fez uma requisição DELETE")
})

module.exports = router //Exporta a rota
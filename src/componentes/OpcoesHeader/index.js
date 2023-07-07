import './style.css'

const TextoOpcoes = ['Categorias','Favoritos','Minha Estante']

function OpcoesHeader() {
    return(
        <ul className='opcoes'>
          { TextoOpcoes.map( (texto) => (
            <li className='opcao'>{texto}</li>
          )) }
        </ul>
    )
}

export default OpcoesHeader
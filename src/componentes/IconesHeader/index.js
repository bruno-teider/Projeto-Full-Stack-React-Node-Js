import './style.css'
import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'


const Icones = [perfil, sacola]

function IconesHeader() {
    return(
        <ul className='icones'>
          { Icones.map( (icone) => (
            <li className='icone'><img src={icone}></img></li>
          ))}
        </ul>
    )
}

export default IconesHeader
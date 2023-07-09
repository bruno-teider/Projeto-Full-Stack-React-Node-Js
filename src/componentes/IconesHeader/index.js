import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

const Icones = [perfil, sacola]

const Icone = styled.li`
    width: 25px;
    margin-right: 50px;
`

const IconesContainer = styled.ul`
    display: flex;
    align-items: center;
    margin-left: auto;
`

function IconesHeader() {
    return(
        <IconesContainer>
          { Icones.map( (icone) => (
            <Icone><img src={icone} alt=" "></img></Icone>
          ))}
        </IconesContainer>
    )
}

export default IconesHeader
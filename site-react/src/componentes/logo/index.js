import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
  display: flex;
  font-size: x-large;
`

const Imagem = styled.img`
  margin-right: 10px;
  margin-left: 15px;
`

function Logo() {
    return(
        <LogoContainer>
          <Imagem src={logo} alt='logo'/>
          <p><strong>Alura</strong>Books</p>
        </LogoContainer>
    )
}

export default Logo
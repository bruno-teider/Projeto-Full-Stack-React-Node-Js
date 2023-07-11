import styled from 'styled-components'

const OpcoesContainer = styled.ul`
  display: flex;
`

const Opcao = styled.li`
  min-width: 120px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  &:hover {
    font-weight: 600;
  }
`

const TextoOpcoes = ['Categorias','Favoritos','Minha Estante']

function OpcoesHeader() {
    return(
        <OpcoesContainer>
          { TextoOpcoes.map( (texto) => (
            <Opcao>{texto}</Opcao>
          )) }
        </OpcoesContainer>
    )
}

export default OpcoesHeader
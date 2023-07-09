import {livros} from './dadosUltimosLancamentos'
import styled from 'styled-components'
import {Titulo} from '../Titulo'
import CardRecomenda from '../CardRecomenda'
import imagemLivro from '../../imagens/livro2.png'

const UltimosSection = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
`

function UltimosLancamentos() {
    return (
        <UltimosSection>
            <Titulo 
                cor="#EB9B00" 
                tamanhoFonte="36px" 
            >Últimos Lançamentos</Titulo>
            <NovosLivrosContainer>
                { livros.map( livro => (
                    <img src={livro.src} />
                ))}
            </NovosLivrosContainer>
            <CardRecomenda 
                titulo="Talvez você se interesse por..."
                subtitulo="Angular 11"
                descricao="Construindo uma aplicação com a plataforma Google"
                img={imagemLivro}
            />
        </UltimosSection>
    )
}

export default UltimosLancamentos
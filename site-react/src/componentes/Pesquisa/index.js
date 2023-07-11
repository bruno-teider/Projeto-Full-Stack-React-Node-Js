import styled from "styled-components";
import Input from "../Input";
import { useState } from "react";
import { livros } from "./dadosPesquisa";

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;

`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const SubTitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const LivroContainer = styled.div`
    height: 42vh;
    display: flex;
    align-items: center;
    font-size: x-large;
    background-color: white;
    color: black;
    font-weight: bold;
    justify-content: center;
`

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([]) 

    function fazPesquisa(evento) {
        const textoDigitado = evento.target.value
        const resultadoPesquisado = livros.filter( livro => livro.nome.includes(textoDigitado))
        setLivrosPesquisados(resultadoPesquisado)
    }

    return(
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <SubTitulo>Encontre seu livro em nossa estante.</SubTitulo>
            <Input
                placeholder="Escreva sua próxima leitura"
                onBlur={evento => fazPesquisa(evento)} 
            />
            
            { livrosPesquisados.map( livro => (
                <LivroContainer>
                    <img src= {livro.src}/>
                    <p>{livro.nome}</p>
                </LivroContainer>
            )) }

        </PesquisaContainer>
    )
}

export default Pesquisa
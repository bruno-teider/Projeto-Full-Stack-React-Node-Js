import styled from "styled-components";

export const Titulo = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: ${props => props.cor || '#000'};
    font-size: ${prop => prop.tamanhoFonte || '18px'};
    text-align: ${prop => prop.alinhamento || 'center'};
    margin: 0;
`
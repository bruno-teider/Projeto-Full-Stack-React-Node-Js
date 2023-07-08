import styled from "styled-components"
import IconesHeader from "../IconesHeader"
import OpcoesHeader from "../OpcoesHeader"
import Logo from "../logo"

const HeaderContainer = styled.header`
    background-color: white;
    display: flex;

    li {
        list-style: none;
    }
`

function Header() {
    return(
        <HeaderContainer>
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>
        </HeaderContainer>
    )
}

export default Header
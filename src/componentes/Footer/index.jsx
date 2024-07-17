import React from 'react'
import styled from 'styled-components'
import logo from '/img/LogoMain.png'

const FooterEstilizado = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000;
    border-top: 4px solid #2271d1;
    box-shadow: inset  0 10px 20px -10px #2271d1;
    /* box-sizing: border-box; */

    img {
        width: 150px;
        margin: 25px 0;
    }
`;

function Footer() {
    return (
        <FooterEstilizado>
            <img src={logo} alt="Footer" />
        </FooterEstilizado>
    )
}

export default Footer
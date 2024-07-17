import styled from "styled-components"
import BotonesHeader from "../ButtonHeader";
import logoMain from "/img/LogoMain.png";

const HeaderEstilizado = styled.header`
    padding: 20px 0;
    margin: 0 40px;
    display: flex;
    justify-content: space-between;

    img{
        width: 150px;
    }
`;


const Cabecera = () => {
    return <HeaderEstilizado>
        <img src={logoMain} alt="Logo de Alura Flix" />
        <BotonesHeader />

    </HeaderEstilizado>
}


export default Cabecera
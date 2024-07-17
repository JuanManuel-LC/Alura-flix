import React from 'react'
import styled from 'styled-components'
import botonHome from "/img/ButtonHome.png";
import botonNuevoVideo from "/img/ButtonNevoVideo.png";

const ContainerEstilizado = styled.div`
    img {
        margin-left: 30px;
    }

`;

function BotonesHeader() {
    return (
        <ContainerEstilizado>
            <img src={botonHome} alt="Boton de Home" />
            <img src={botonNuevoVideo} alt="Boton de Home" />
        </ContainerEstilizado>
    )
}

export default BotonesHeader
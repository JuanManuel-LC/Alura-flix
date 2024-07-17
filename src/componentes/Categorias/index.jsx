import React from 'react'
import styled from 'styled-components'
import Cards from './Cards';

const CategoriaEstilizado = styled.section`
    
    .tituloCategoria {
        display: flex;
        width: 200px;
        border-radius: 0px 0px 15px 0;
        padding-left: 40px;
        background-color: #6BD1FF;
        color: #F5F5F5;
    }

    .tituloCoategoria p {
        font-weight: bold;
    }

    .cardContainer {
        display: flex;
        justify-content: space-between;
    }
`;

function Categorias(props) {

    const colorBorde = {
        borderTop: `5px solid ${props.datos.color}`,
        boxShadow: `inset  0 10px 30px -15px ${props.datos.color}`
    }

    const colorFondo = {
        backgroundColor: props.datos.color
    }

    return (
        <CategoriaEstilizado style={colorBorde}>
            <div className="tituloCategoria" style={colorFondo}>
                <h3>{props.datos.titulo}</h3>
            </div>
            <div className="cardContainer">
                <Cards />
                <Cards />
                <Cards />
            </div>
        </CategoriaEstilizado>
    )
}

export default Categorias
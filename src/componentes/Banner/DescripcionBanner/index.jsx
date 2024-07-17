import React from 'react'
import styled from 'styled-components'

const ContainerEstilizado = styled.div`
    width: 665px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .titulo {
        width: 230px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80px;
        background-color: #6BD1FF;
        border-radius: 15px;
        
    }

    .titulo h2 {
        font-size: 35px;
    }

    .descripcion h3 {
        font-size: 30px;
        margin: 30px 0 5px ;
    }

    .descripcion p {
        margin: 0;
    }

`;

function DescripcionBanner() {
    return (
        <ContainerEstilizado>
            <div className="titulo">
                <h2>FRONT END</h2>
            </div>
            <div className="descripcion">
                <h3>Challenge React</h3>
                <p>
                    Este challenge es una forma de aprendizaje.
                    Es un mecanismo donde podrás comprometerte en la resolución de un problema
                    para poder aplicar todos los conocimientos adquiridos en la formación React.
                </p>
            </div>
        </ContainerEstilizado>
    )
}

export default DescripcionBanner
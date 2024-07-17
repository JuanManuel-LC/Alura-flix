import React from 'react'
import styled from 'styled-components'
import basura from '/img/Basura.png'
import editar from '/img/Editar.png'

const CardsEstilizadas = styled.div`
    padding: 20px 40px 50px;
    width: 430px;
`;

const Card = styled.div`
    background-color: black;
    border-radius: 15px;
    border: 2px solid #6BD1FF;
    box-shadow: inset  0 5px 10px 5px #2271d1;

    .imagen {
        border-radius: 10px 10px 0 0;
        width: 100%;
        
    }

    .botonesCard {
        display: flex;
        justify-content: space-around;
        padding-bottom: 5px;
    }

    .borrar, .editar {
        display: flex;
        align-items: center;
        gap: 10px;
        color: #FFFFFF;
        font-weight: bold;
        font-size: 15px;
        
        img {
            height: 30px;
        }
    }
`;

function Cards() {
    return (
        <CardsEstilizadas>
            <Card>
                <img className='imagen' src="/img/cardPrueba.jpg" alt="video" />
                <div className="botonesCard">
                    <div className="borrar">
                        <img src={basura} alt="borrar" />
                        <p>BORRAR</p>
                    </div>
                    <div className="editar">
                        <img src={editar} alt="editar" />
                        <p>EDITAR</p>
                    </div>
                </div>
            </Card>
        </CardsEstilizadas>
    )
}

export default Cards
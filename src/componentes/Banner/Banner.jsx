import React from 'react'
import DescripcionBanner from './DescripcionBanner'
import VideoDestacado from './VideoDestacado'
import styled from 'styled-components'

const BannerEstilizado = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 70px 40px 30px;
    background-image: url("/img/FondoBanner.png");
    background-size: cover;
    background-position: center;
    border-top: 6px solid #2271d1;
    box-shadow: inset  0 20px 30px -20px #2271d1;
`;


function Banner() {
    return (
        <BannerEstilizado>
            <DescripcionBanner />
            <VideoDestacado />
        </BannerEstilizado>
    )
}

export default Banner
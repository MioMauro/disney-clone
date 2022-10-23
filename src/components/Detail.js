import React from 'react'
import styled from 'styled-components'

function Detail() {
return (
    <Container>
        <Background>
            <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DA2E198288BFCA56AB53340211B38DE7134E40E4521EDCAFE6FFB8CD69250DE9/scale?width=2880&aspectRatio=1.78&format=jpeg' alt='disney' />
        </Background>
        <ImageTitle>
            <img src='/images/BackCont1.png' alt='icons' />
        </ImageTitle>
    </Container>
)
}

export default Detail

const Container = styled.div`
position: relative;
min-height: calc(100vh - 70px);
padding: 0 calc(3.5vw + 5 px);
color: white;
`
const Background = styled.div`
position: fixed;
top: 0;
left: 0;
bottom: 0;
right: 0;
z-index: -1;
opacity: 0.8;
img{
    width: 100%;
    height: 100%;
    object-fit: cover; 
    overflow:hidden;   
}
`

const ImageTitle = styled.div`
margin:0 auto;
margin-top: 220px;
height: 30vh;
min-height: 170px;
width: 55vw;
min-width: 420px;
img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}
`
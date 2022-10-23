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
        <Controls>

        <PlayButton>
            <img src='/images/play-icon-black.png' alt='icons' />
            <span>PLAY</span>
        </PlayButton>

        <TrailerButton>
            <img src='/images/play-icon-white.png' alt='icons' />
            <span>TRAILER</span>
        </TrailerButton>

        <AddButton>
            <span>+</span>
        </AddButton>

        <GroupWatchButton>
            <img src='/images/group-icon.png' alt='icons' />
        </GroupWatchButton>

        </Controls>
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

const Controls = styled.div`
margin-top: 25px;
align-items: center;
justify-content: center;
display: flex;
`

const PlayButton = styled.button`
border-radius: 4px;
font-size: 15px;
padding: 0px 24px;
margin-right: 22px;
display: flex;
align-items: center;
height: 56px;
background: rgb(249, 249, 249);
border: none;
letter-spacing: 1.8px;
cursor: pointer;

&:hover {
    background: rgb(198, 198, 198);
}
`

const TrailerButton = styled(PlayButton)`
background: rgba(249, 249, 249, 0.3);
border: 1px solid rgb(249, 249, 249);
color: white;
`

const AddButton = styled.button`
margin-right: 16px;
width: 44px;
height: 44px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
border: 2px solid white;
background-color: rgba(0, 0, 0, 0.6);
cursor: pointer;

span {
    font-size: 30px;
    color: white;
}
`

const GroupWatchButton = styled(AddButton)`
background-color: rgb(0, 0, 0,);
`
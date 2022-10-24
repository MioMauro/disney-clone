import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" alt='logo' />
        <SignUp>
          GET ALL THERE
        </SignUp>
        <Description>
          Sottoscrivi un abbonamento annuale a Disney+ per assicurarti 12 mesi al prezzo di 10 e risparmiare sul prezzo mensile.
        </Description>
        <CTALogoTwo src='/images/cta-logo-two.png' alt='logo' />
      </CTA>
    </Container>
  )
}

export default Login

const Container = styled.div`
color: white;
position: relative;
height: calc(100vh - 70px);
display:flex;
align-items:center;
justify-content:center;

&:before {
  position: absolute;
  content: "";
  background-image: url("/images/login-background.jpg");
  background-position:top;
  background-size:cover;
  background-repeat:no-repeat;
  top:0;
  Bottom:0;
  Left:0;
  right:0;  
  z-index:-1;
}
`
const CTA = styled.div`
max-width: 650px;
padding: 80px 40px;
width:80%;
display:flex;
flex-direction:column;
`
const CTALogoOne = styled.img`

`
const SignUp = styled.a`
width:100%;
background-color:#0063e5;
font-weight:bold;
padding:17px 0;
color:#f9f9f9;
border-radius:5px;
text-align:center;
font-size:18px;
cursor:pointer;
transition:all 250ms;
letter-spacing:1.5px;
margin-top:8px;
margin-bottom:12px;

&:hover {
  background: #0483ee;
  letter-spacing:2px;
}
`
const Description = styled.p`
width:100%;
`
const CTALogoTwo = styled.img`
width:100%;
`
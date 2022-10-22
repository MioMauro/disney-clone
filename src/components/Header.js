import React from 'react'
import styled from 'styled-components'

function Header() {
return (
    <Nav>
        <Logo src="/images/logo.svg" alt='logo svg' />
        <NavMenu>
            <a href='/#'>            
                <img src="/images/home-icon.svg" alt="icon" />
                <span>Home</span>                
            </a>
            <a href='/#'>            
                <img src="/images/search-icon.svg" alt="icon" />
                <span>SEARCH</span>                
            </a>
            <a href='/#'>            
                <img src="/images/watchlist-icon.svg" alt="icon" />
                <span>WATCHLIST</span>                
            </a>
            <a href='/#'>            
                <img src="/images/original-icon.svg" alt="icon" />
                <span>ORIGINALS</span>                
            </a>
            <a href='/#'>            
                <img src="/images/movie-icon.svg" alt="icon" />
                <span>MOVIES</span>                
            </a>
            <a href='/#'>            
                <img src="/images/series-icon.svg" alt="icon" />
                <span>SERIES</span>                
            </a>
        </NavMenu>
        <UserImg src='/images/me.jpg' alt='icon' />
    </Nav>
)
}

export default Header

const Nav = styled.nav`
height: 70px;
background: #090b13;
display: flex;
align-items: center;
padding: 0 36px;
overflow: hidden;
`
const Logo = styled.img`
width: 80px
`
const NavMenu = styled.div`
display: flex;
flex: 1;
margin-left: 25px;
align-items: center;

a {
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 12px;
    color: white;
    cursor:pointer;
    text-decoration: none;

        img{
            height: 20px;
        }

        span{
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after {
                content: "";
                width:100%;                
                border: 1px solid white;                
                position: absolute;           
                left: 0;
                bottom: -6px;
                opacity: 0;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }

        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
}
`
const UserImg = styled.img`
width: 48px;
height: 48px;
border-radius: 50%;
cursor: pointer;
`
import React from 'react'
import { NavLink } from 'react-router-dom'
import Styled from 'styled-components'

// import Button from '../Button'

const Div = Styled.div`
    height: 50px;
    margin-bottom: 5px;
    background-color: #f1f1f1;
    text-align: center;
`

const StyledNav = Styled(NavLink)`
    display: inline-block;
    font-size: 1rem;
    padding: 1rem 1.1rem;
    border: none;
    /* background-color: #fff; */
    text-decoration: none;
    color: #000;
    :hover {
        background-color: #f1f1f1;
    }
    /* :active {
        background-color: #e1e1e1; */
    }
    border-radius: 3px;
    `
const activeStyle = {
    backgroundColor: '#e1e1e1'
}

const NavBar = () => {
    return (
        <Div>
            <StyledNav
                to="/"
                exact
                // activeStyle={{ borderBottom: '3px solid #e1e1e1' }}>
                activeStyle={activeStyle}>
                Home</StyledNav>
            <StyledNav
                to="/about"
                activeStyle={activeStyle}>
                About
                </StyledNav>
            <StyledNav
                to="/contact"
                activeStyle={activeStyle}>
                Contact
                 </StyledNav>
        </Div>
    )
}

export default NavBar

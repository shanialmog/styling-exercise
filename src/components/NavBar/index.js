import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Styled from 'styled-components'

// import Button from '../Button'

const StyledNav = Styled(NavLink)`
    font-size: 1rem;
    padding: .5rem 1.1rem;
    /* margin: .5rem; */
    border: none;
    background-color: #fff;
    text-decoration: none;
    box-sizing: content-box;
    color: #000;
    :hover {
        background-color: #f1f1f1;
    }
    /* :active {
        background-color: #e1e1e1; */
    }
    border-radius: 3px;
    `

const NavBar = () => {
    return (
        <div>
            <StyledNav
                to="/"
                exact
                // activeStyle={{ borderBottom: '3px solid #e1e1e1' }}>
                activeStyle={{ backgroundColor: '#e1e1e1' }}>
                Home</StyledNav>
            <StyledNav
                to="/about"
                activeStyle={{ backgroundColor: '#e1e1e1' }}>
                About
                </StyledNav>
            <StyledNav
                to="/contact"
                activeStyle={{ backgroundColor: '#e1e1e1' }}>
                Contact
                 </StyledNav>
        </div>
    )
}

export default NavBar

import React from 'react'
import { Link } from 'react-router-dom'
import Styled from 'styled-components'

// import Button from '../Button'

    const NavButton = Styled.button`
    font-size: 1rem;
    padding: .5rem 1rem;
    border: none;
    background-color: #fff;
    :hover {
        background-color: #e9e9e9;
    }
    :active {
        background-color: #e1e1e1;
    }
    border-radius: 3px;
    `

const NavBar = () => {
    return (
        <div>
            <Link to="/"><NavButton>Home</NavButton ></Link>
            <Link to="/about"><NavButton>About</NavButton ></Link>
            <Link to="/contact"><NavButton>Contact</NavButton ></Link>
        </div>
    )
}

export default NavBar

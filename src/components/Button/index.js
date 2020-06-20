import React from 'react'
import Styled from 'styled-components'

const StyledButton = Styled.button`
    background-color: #efefef;
    font-size: 1rem;
    padding: .5rem 1rem;
    border: none;
    border-radius: 3px;
    box-shadow: 0 0.2rem 0.3rem rgba(0, 0, 0, 0.2);
    :hover {
        background-color: #e9e9e9;
    }
    :active {
        background-color: #e1e1e1;
    }

`

const Button = ({ children, className }) => {
    return (
        <StyledButton
            className={className}
        >
            {children}
        </StyledButton>
    )
}

export default Button
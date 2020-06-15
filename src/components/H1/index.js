import React from 'react'
import Styled from 'styled-components'



const H1 = ({ children }) => {
    const H1 = Styled.h1`
    text-align: center
    }
`
    return (
        <H1 >
            {children}
        </H1>
    )
}

export default H1
import React from 'react'
import Styled from 'styled-components'


const StyledH1 = Styled.h1`
text-align: center
}
`

const H1 = ({ children }) => {
    return (
        <StyledH1 >
            {children}
        </StyledH1>
    )
}

export default H1
import React from 'react'
import Styled from 'styled-components'

import Button from '../Button'
import H1 from '../H1'

const ThemeButton = Styled.button`
    text-align: ${({ theme }) => theme.align.center};
    background-color: ${({ theme }) => theme.colors.bold};
    border: none;
    color: white;
    padding:  ${({ theme }) => theme.padding.default};
    font-size:  ${({ theme }) => theme.fontSizes.small};
    border-radius: 3px;
    margin: 5px 5px;
    `
const Wrapper = Styled.div`
    display: flex;
    justify-content: center;
`
const Home = () => {
    return (
        <div>
            <H1>Practicing styled components</H1>
            <Wrapper>
                <Button>I'm a Button!</Button>
                <ThemeButton>I'm themed!</ThemeButton>
                <ThemeButton>I'm themed!</ThemeButton>
                <ThemeButton>I'm themed!</ThemeButton>
            </Wrapper>
        </div>
    )
}

export default Home
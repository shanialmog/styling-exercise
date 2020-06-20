import React from 'react'
import Styled from 'styled-components'

import H1 from '../H1'
import Button from '../Button'


const FormContainer = Styled.div`
  display: flex;
  flex-direction: column;
`

const SubmitBtn = Styled(Button)`
  background-color:  #DAF7A6;
  align-self: start;
  padding: 10px 30px;
  `

const InputWrapper = Styled.div`
  display: flex;
  width: 100%;
  align-content: space-between;
  margin-bottom: 10px;
`
const StyledLabel = Styled.label`
  width: 80px;
`
const H2 = Styled.h2`
  font-size: ${({theme}) => theme.fontSizes.h2};
  padding-top: 15px;
  padding-bottom: 10px;
  font-weight: 500;
`

const Contact = () => {
  const formSubmit = (event) => {
    event.preventDefault()
  }
  return (
    <div>
      <H1>Contact us</H1>
      <H2>Leave a message and we'll get right back to you</H2>
      <form onSubmit={formSubmit}>
        <FormContainer>
          <InputWrapper>
          <StyledLabel>Name:</StyledLabel>
          <input type="text"></input>
          </InputWrapper>
          <InputWrapper>
          <StyledLabel>Email:</StyledLabel>
          <input type="text"></input>
          </InputWrapper>
          <InputWrapper>
          <StyledLabel>Message:</StyledLabel>
          <textarea></textarea>
          </InputWrapper>
          <SubmitBtn>Send</SubmitBtn>
        </FormContainer>
      </form>
    </div>
  )
}

export default Contact

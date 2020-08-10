import React from 'react';
import styled from 'styled-components'

const StyledButton = styled.button`
  margin: 10px 0;
  padding: 10px 20px;
  border: none;
  border-radius: 50px;
  background: rgba(0, 138, 252, 1);
  color: #fff;
  font-weight: bold;
  transition: 0.5s;
  &:hover {
    background: #fff;
    color: #854DFF;
    cursor: pointer;
    
  }
  &:focus {
    outline: none;
  }
`

const Button = props => {
  return <StyledButton onClick={props.buttonClicked}>{props.label}</StyledButton>
}

export default Button;
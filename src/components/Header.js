import React from 'react';
import styled from 'styled-components'

const StyledHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center; 
  align-items: center;
  background: rgba(16, 63, 84, 1);
  color: white;
  font-weight: bold;
`

const Header = props => {
  return <StyledHeader className="Header">{props.title}</StyledHeader>
}

export default Header;

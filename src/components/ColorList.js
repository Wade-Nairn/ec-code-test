import React from 'react';
import styled from 'styled-components'

import ColorBlock from './ColorBlock'

const List = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: column;
  margin-top: 20px;
`

const ColorList = props => {

  return (
    <List>
      {props.data.map((item, index) => (
        <ColorBlock key={index} item={item} />
      ))}
    </List>
  )
}

export default ColorList;

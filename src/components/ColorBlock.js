import React, { useState, useEffect } from 'react';
import { colorConversions } from '../helpers/colorConversions'
import { COLOR_TYPES } from '../config'
import styled from 'styled-components'

const ColorBlockStyle = styled.div`
  width: 100%;
  height: 100px;
  &:hover {
    cursor: pointer;
  }
`
const StyledSelected = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 10px 0;
  padding: 10px 0;
`

const ColorBlock = props => {
  const [background, setBackground] = useState('rgb(0,0,0')
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    const type = COLOR_TYPES.filter(type => type.kind === props.item.kind)
    const {conversionFunction} = type[0]
    const conversion = colorConversions[conversionFunction]
    setBackground(conversion(props.item.components))
  }, [props.item])  
  return (
    <>
      <ColorBlockStyle onClick={() => setSelected(!selected)} style={{ background: background }}></ColorBlockStyle>
      {selected && <StyledSelected>RGB code: {background}</StyledSelected>}
    </>
  )
}

export default ColorBlock; 

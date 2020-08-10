import React from 'react';
import styled from 'styled-components'

import { useColorConversion } from '../hooks/useColorConversion'
import { useForm } from '../hooks/useForm'

import Button from './Button'

const StyledConverterWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0 40px 0;
  padding: 0 10px;
`

const StyledConverterForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 925px) {
    justify-content: center;
    flex-wrap: wrap;
  }
  @media (max-width: 750px) {
    flex-direction: column;
  }
`

const StyledInput = styled.input`
  padding: 8px 20px;
  margin: 0 10px 0 0;
  flex: 1;

  @media (max-width: 960px) {
    flex: 1;
  }
  @media (max-width: 750px) {
    max-width: 90%;
    margin: 5px 0;
  }
`
const StyledOutput = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 10px 0 0 0;
  padding: 10px 0;
`

const ColorTypeConverter = () => {
  const [values, handleChange] = useForm({hue: '', saturation: '', lightness: ''})
  const [conversionOutput, conversion] = useColorConversion(values)

  return (
    <StyledConverterWrapper>
      <h2>Convert HSL to RGB</h2>
      <StyledConverterForm>
        <StyledInput type="text" name={"hue"} placeholder={"Hue"} value={values.h} onChange={handleChange} />
        <StyledInput type="text" name={"saturation"} placeholder={"Saturation"} value={values.s} onChange={handleChange}/>
        <StyledInput type="text" name={"lightness"} placeholder={"Lightness"} value={values.l} onChange={handleChange}/>
        <Button buttonClicked={conversion} label={"Convert to RGB"}></Button>
      </StyledConverterForm>
        {conversionOutput && <StyledOutput>Your RGB color: {conversionOutput}</StyledOutput>}
    </StyledConverterWrapper>
  )
}

export default ColorTypeConverter;
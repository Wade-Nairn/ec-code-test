import React, {useState, useEffect} from 'react';
import styled from 'styled-components'

import { LIST_URL } from './config'
import { useAxios } from './hooks/useAxios'

import Header from './components/Header'
import ColorList from './components/ColorList'
import ColorTypeConverter from './components/ColorTypeConverter'
import Button from './components/Button'
import LoadingSpinner from './components/LoadingSpinner'

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const App = ()  => {
  const [refresh, setRefresh] = useState(false)
  const { data, loading } = useAxios(refresh, LIST_URL)
  
  useEffect(() => {
    setRefresh(false)
  }, [refresh])

  return (
    <StyledWrapper>
      <Header title={"EC Color Grabber"}/>
      <ColorTypeConverter />
      <Button buttonClicked={() => setRefresh(true)} label={"Refresh Colours"} />
      <>{loading ? <LoadingSpinner /> : <ColorList data={data} />}</>
    </StyledWrapper>
  )
  }

export default App; 

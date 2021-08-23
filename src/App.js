import { Container } from '@material-ui/core'
import React from 'react'
import Appbar from './Components/Appbar'
import Home from './Components/Home'


const App = () => {
  return (
    <Container maxWidth ="lg" style= {{textAlign:'center'}}>
      <Appbar/>
      <Home />

    </Container>
  )
}

export default App
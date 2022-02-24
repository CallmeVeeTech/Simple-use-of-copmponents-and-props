import React from 'react'
import Homescreen from './Components/Homescreen';
import styled from 'styled-components'

function App() {
  return (
    <Container>
      <Homescreen/>
    </Container>
  );
}

export default App;

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`
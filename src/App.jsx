import React from 'react'
import Routing from './pages/Routing'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div> <Routing /></div>
    </>
  )
}

export default App
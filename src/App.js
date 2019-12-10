import React from 'react';
import Title from './context_api/Title';

export const Context = React.createContext()
const myColor = { color: 'lightsalmon', text: '我最喜歡的顏色'}
function App() {
  return(
    <Context.Provider value={myColor}>
      <Title />
    </Context.Provider>
  )
}

export default App
import React from "react";

export const Context = React.createContext();
const myColor = { color: "lightsalmon", text: "我最喜歡的顏色" };
const App = () => {
  return (
    <Context.Provider value={myColor}>
      <Title />
    </Context.Provider>
  );
}

const Title = () => {
  return (
    <>
      <h1>測試Context api</h1>
      <Color />
    </>
  );
};

const Color = () => {
  return (
    <>
      <Context.Consumer>
        {value => ( <h3 style={{ color: value.color }}>{value.text}</h3> )}
      </Context.Consumer>
    </>
  );
};

export default App
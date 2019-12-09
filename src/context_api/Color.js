import React from "react";
import { Context } from "../App";

const Color = () => {
  return (
    <>
      <Context.Consumer>
        {value => ( <h3 style={{ color: value.color }}>{value.text}</h3> )}
      </Context.Consumer>
    </>
  );
};

export default Color;

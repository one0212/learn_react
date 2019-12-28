import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import ContextApi from "./context_api/index";
import PropTypes from "./propTypes/index";
import ReduxTodoList from './redux/todoList/index';

const linkStyle = {
  margin: "0 5px"
};
function App() {
  return ( 
    <>
      <Router>
        <Link to="/contextApi" style={linkStyle}>
          ContextApi
        </Link>
        <Link to="/propTypes" style={linkStyle}>
          PropTypes
        </Link>
        <Link to="/reduxTodoList" style={linkStyle}>
        ReduxTodoList
        </Link>

        <Switch>
          <Route path="/contextApi" component={ContextApi} />
          <Route
            path="/propTypes"
            render={props => (
              <PropTypes
                {...props} //name={"Felicia"}
              />
            )}
          />
          <Route path="/reduxTodoList" component={ReduxTodoList} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

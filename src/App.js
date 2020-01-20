import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Provider } from 'react-redux';

import ContextApi from "./context_api";
import PropTypes from "./propTypes";
import ReduxTodoList from './redux/todoList';
import store from './redux/counter/store';
import Counter from './redux/counter';


const linkStyle = {
  margin: "0 5px"
};
function App() {
  return ( 
    <Provider store={store}>
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
        <Link to="/counter" style={linkStyle}>
        Counter
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
          <Route path="/counter" component={Counter} />

        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

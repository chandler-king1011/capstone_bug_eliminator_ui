import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Router, Switch, Route } from "react-router-dom";


import reducers from "./reducers";
import "./style/main.scss";

import history from "./history";
import Login from "./components/auth/login";
import SignUp from "./components/auth/signUp";
import DashBoard from "./components/dashboard/dashboard";


const middleware = [thunk];
const store = createStore(reducers, compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));




function main() {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register"  component={SignUp} />
          <Route path="/user-dashboard" component={DashBoard} />
        </Switch>
      </Router>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);

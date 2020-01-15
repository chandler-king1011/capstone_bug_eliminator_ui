import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { Router, Switch, Route } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import {faUser, faUsers, faBug, faSearch, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faUser, faUsers, faBug, faSearch, faSignInAlt, faSignOutAlt );


import reducers from "./reducers";
import "./style/main.scss";

import history from "./history";
import Login from "./components/auth/login";
import SignUp from "./components/auth/signUp";
import DashBoard from "./components/dashboard/dashboard";
import AllBugsDash from "./components/dashboard/allBugsDash";
import ReportBug from "./components/bugs/reportBug";
import SearchBugs from "./components/bugs/searchBugs";


const middleware = [thunk];
const store = createStore(reducers, compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

const persistor = persistStore(store);


function main() {
  ReactDOM.render(
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register"  component={SignUp} />
          <Route path="/user-dashboard" component={DashBoard} />
          <Route path="/organization-dashboard" component={AllBugsDash} />
          <Route path="/report-bug" component={ReportBug} />
          <Route path="/search-bugs" component={SearchBugs} />
        </Switch>
      </Router>
      </PersistGate>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);

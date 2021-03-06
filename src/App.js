import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Provider } from "react-redux";

import store from './store';

import Header from "./Header";
import LoginPage from "./LoginPage";
import Products from "./Products";
import Dashboard from "./Dashboard";
import Orders from "./Orders";


function App() {

  const auth = () => {
    if (sessionStorage.getItem("loggedIn")) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  };
  const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("loggedIn") ? true : false);

  const token = { email: "admin@pcstore.com", password: "admin" };
  sessionStorage.setItem("token", JSON.stringify(token));

  const logoutHandler = () => {
    sessionStorage.clear();
    setIsAuthenticated(false);
  }

  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header auth={isAuthenticated} logoutHandler={logoutHandler}/>
          <Switch>
            <Route
              exact
              path="/"
              component={() =>
                isAuthenticated ? <Redirect to='/dashboard' /> : <LoginPage auth={auth} />
              }
            />
            <Route path="/dashboard" component={() => isAuthenticated ? <Dashboard /> : <Redirect to='/' /> }/>

            <Route path="/products" component={() => isAuthenticated ? <Products /> : <Redirect to='/' /> }/>

            <Route
              path="/orders"
              component={() =>
                isAuthenticated ? <Orders /> : <Redirect to="/" />
              }
            />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;

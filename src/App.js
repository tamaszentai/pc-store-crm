import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import Header from "./Header";
import LoginPage from "./LoginPage";
import Products from "./Products";
import Dashboard from "./Dashboard";
import Orders from "./Orders";

const store = createStore(() => [], {}, applyMiddleware());

function App() {

  const auth = () => {
    if (sessionStorage.getItem("loggedIn")) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  };
  const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("loggedIn"));

  const token = { email: "admin@pcstore.com", password: "admin" };
  localStorage.setItem("token", JSON.stringify(token));

 


  console.log(isAuthenticated);

  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header auth={isAuthenticated}/>
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

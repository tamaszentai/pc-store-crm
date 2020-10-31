import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";

import Header from "./Header";
import LoginPage from "./LoginPage";
import Products from "./Products";
import Dashboard from "./Dashboard";
import Orders from "./Orders";


const store = createStore(() => [], {}, applyMiddleware());

function App() {
  const token = { email: "admin@pcstore.com", password: "admin" };
  localStorage.setItem('token', JSON.stringify(token));

  return (
    <Provider store={store}>
    <div className="App">
      <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={LoginPage} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/products' component={Products} />
        <Route path='/orders' component={Orders} />
      </Switch>
      </Router>
    </div>
    </Provider>
  );
}

export default App;

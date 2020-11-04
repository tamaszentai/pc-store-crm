import React from "react";
import { Link } from "react-router-dom";

import styles from './Header.module.css';

const Header = (props) => {
  const header = props.auth ? (
    <div className="navbar">
    <ul>
    <li>
      <Link to="/">Dashboard</Link>
    </li>
    <li>
      <Link to="/products">Products</Link>
    </li>
    <li>
        <Link to="/orders">Orders</Link>
    </li>
    <li>
    <button className={styles.logout} onClick={props.logoutHandler}>Logout</button>
    </li>
  </ul>
  
  </div>
  ) : (
    <div></div>
  );

  return (
    <div className="header">
      <h1>PC Store CRM</h1>
      {header}
    </div>
  );
};

export default Header;

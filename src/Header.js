import React from "react";

const Header = (props) => {

const logoutHandler = () => {
  sessionStorage.clear();
}

  return (
  <div className="header">
    <h1>PC Store CRM</h1>
    {props.auth ? <div><button onClick={logoutHandler}>Logout</button></div> : <div></div>}
  </div>
  )
};

export default Header;

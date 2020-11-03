import React, {useEffect} from "react";

const Header = (props) => {

  return (
  <div className="header">
    <h1>PC Store CRM</h1>
    {props.auth ? <div><button onClick={props.logoutHandler}>Logout</button></div> : <div></div>}
  </div>
  )
};

export default Header;

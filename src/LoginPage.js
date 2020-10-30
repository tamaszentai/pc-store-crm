import React, { useState } from 'react';

const LoginPage = () => {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [rememberMe, setRememberMe] = useState(false);

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  }

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  }

  const loginHandler = (e) => {
    if(!email && !password){
      alert('Invalid credentials');
    }
    e.preventDefault();
    const storageToken = localStorage.getItem('token');
    const credentials = { email: email, password: password};
    const token = JSON.stringify(credentials);
    if (token === storageToken){
      const isLoggedin = {loggedIn: true}
      sessionStorage.setItem('loggedIn', JSON.stringify(isLoggedin));
    } else {
      alert('Invalid email or password');
    }
  }

  return(
    <div className="loginpage">
      <form onSubmit={loginHandler}>
        <label>
          E-mail: 
          <input type="text" name="email" onChange={emailChangeHandler}/>
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" onChange={passwordChangeHandler}/>
        </label>
        <br />
        <label>
          Remember me:
          <input type="checkbox" name="rememberme" />
        </label>
        <button>Login</button>
      </form>
    </div>
  )
}

export default LoginPage;
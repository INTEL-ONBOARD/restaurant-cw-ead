import React, { useState } from 'react';
import '../App.css'; 
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {

  const navigate = useNavigate();


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin();
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h1>Welcome to Leornado</h1>
        <h2>CUSTOMER LOGIN</h2>
        <form id="login-form" onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Type Your Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Type Your Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          {/* <input type="submit" value="LOGIN" /> */}
          <button type="button"  onClick={() => navigate('/store')}> Login </button>

        </form>
        <div className="links">
          <a href="#">Forgot Password?</a>
          <button type="button"  onClick={() => navigate('/register')}> Register </button>

        </div>
      </div>
    </div>
  );
};

export default Login;
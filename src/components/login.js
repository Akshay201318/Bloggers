import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import '../login.css';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');

  const isValid = () => {
    let flag = true;
    if (email.length == 0) {
      setEmailErr('email should not be empty!');
      flag = false;
    }

    if (password.length == 0) {
      setPasswordErr('password should not be empty!');
      flag = false;
    }

    return flag;
  };

  const onSubmit = async () => {
    const valid = isValid();

    if (valid) {
      const user = {
        email: email,
        password: password,
      };
      try {
        let response = await axios.post(
          'http://localhost:8000/api/users/login',
          {
            data: user,
          }
        );
        if (response.status == 200) {
          alert('logged in successfully!');
          history.push('/home');
          console.log('This is response', response.data);
          setEmail('');
          setPasswordErr('');
        }
      } catch (err) {
        console.log(err);
        alert('incorrect username and password');
        setEmail('');
        setPassword('');
        setEmailErr('');
        setPasswordErr('Incorrect email or password!');
      }
    } else {
      setPasswordErr('incorrect username or password!');
    }
  };
  return (
    <div className="loginDiv">
      <div className="logo"></div>
      <div className="title">Fantastic</div>
      <div className="sub-title">Bloggers</div>
      <div className="fields">
        <div className="username">
          <input
            type="username"
            className="user-input"
            name="email"
            value={email}
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div style={{ color: 'red' }}>{emailErr}</div>
        <div className="password">
          <input
            type="password"
            className="pass-input"
            name="password"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div style={{ color: 'red' }}>{passwordErr}</div>
        <button className="login-button" onClick={onSubmit}>
          Login
        </button>
        <div className="link">
          <Link to={'/forget-password'} className="forget">
            Forget Password
          </Link>{' '}
          or
          <Link to={'/SignUp'} className="sign">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGooglePlus,
  faGithub,
  faFacebook,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import { faUser } from '@fortawesome/free-solid-svg-icons';
import '../signup.css';
const SignUp = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usernameErr, setUsernameErr] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');

  const isValid = () => {
    let flag = true;

    if (username.length == 0) {
      setUsernameErr('username should not be empty!');
      flag = false;
    } else {
      setUsernameErr('');
    }
    if (email.length == 0) {
      setEmailErr('email should not be empty!');
      flag = false;
    } else if (email.length < 8) {
      setEmailErr('Please enter a valid email!');
      flag = false;
    } else if (!(email.includes('@') && email.includes('.com'))) {
      setEmailErr('Please include an @ or .com in the email!');
      flag = false;
    } else {
      setEmailErr('');
    }

    if (password.length == 0) {
      setPasswordErr('password should not be empty!');
      flag = false;
    } else if (
      !password.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      )
    ) {
      setPasswordErr(
        'Password must contains minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character!'
      );
      flag = false;
    } else {
      setPasswordErr('');
    }

    return flag;
  };

  const onSubmit = async () => {
    const valid = isValid();

    if (valid) {
      const user = {
        name: username,
        email: email,
        password: password,
        // firstName: 'Akshay',
        // lastName: 'Panchal',
      };
      console.log('indjsbvsolancjdasmklzmxcjkbvisjdkl', user);
      let response = await axios.post(
        'http://localhost:8000/api/users/signup',
        {
          data: user,
        }
      );
      if (response.status == 201) {
        alert('Account created successfully!');
        history.push('/');
        console.log('This is response');
        setUsernameErr('');
        setEmail('');
        setPasswordErr('');
      } else {
        alert('Acoount with this name already exists or invalid credentials!');
      }
    }
  };
  return (
    <div className="signUpDiv">
      <div className="logo"></div>
      <div className="title">Fantastic</div>
      <div className="sub-title">Bloggers</div>
      <div className="fields">
        <div className="username-s">
          <input
            type="username"
            className="user-input"
            placeholder="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div style={{ color: 'red' }}>{usernameErr}</div>
        <div className="email">
          <input
            type="email"
            className="email-input"
            placeholder="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div style={{ color: 'red' }}>{emailErr}</div>
        <div className="password-s">
          <input
            type="password"
            className="pass-input"
            placeholder="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div style={{ color: 'red' }}>{passwordErr}</div>
        <button className="login-button" onClick={onSubmit}>
          Create Account
        </button>
        <div className="link">
          <Link to={'/'} className="forget">
            Already have an account
          </Link>
        </div>
        <div className="or">Or</div>
      </div>

      <div className="footer">
        <div className="icons">
          <FontAwesomeIcon
            className="icon"
            icon={faGithub}
            style={{
              color: 'white',
              backgroundColor: 'black',
              borderRadius: '20px',
              height: '30px',
              width: '30px',
              outline: 'none',
              border: 'none',
            }}
          />
        </div>
        <div className="icons">
          <FontAwesomeIcon
            icon={faGooglePlus}
            style={{
              color: 'white',
              backgroundColor: 'red',
              borderRadius: '20px',
              height: '30px',
              width: '30px',
              outline: 'none',
              border: 'none',
            }}
          />
        </div>
        <div className="icons">
          <FontAwesomeIcon
            icon={faFacebook}
            style={{
              color: 'white',
              backgroundColor: 'blue',
              borderRadius: '20px',
              height: '30px',
              width: '30px',
              outline: 'none',
              border: 'none',
            }}
          />
        </div>
        <div className="icons">
          <FontAwesomeIcon
            icon={faTwitter}
            style={{
              color: 'skyblue',
              backgroundColor: 'white',
              borderRadius: '20px',
              height: '30px',
              width: '30px',
              outline: 'none',
              border: 'none',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;

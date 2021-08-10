import React, { Component } from 'react';
// import './App.css';
// import AppNavbar from './AppNavbar';
import { withCookies } from 'react-cookie';
import UserComponent from '../../Component/user/UserComponent';
// import { Container, Row, Col } from 'reactstrap';

class login extends Component {
 
  render() {
    
    return (  
      <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>  
         
    );
  }
}

export default withCookies(login);
import React, { Component } from 'react';
import './App.css';
// import AppNavbar from './AppNavbar';
import UserComponent from './Component/UserComponent';
import { withCookies } from 'react-cookie';
// import { Container, Row, Col } from 'reactstrap';

class Home extends Component {
 
  render() {
    
    return (   
        <div className="Home"><UserComponent /></div>          
    );
  }
}

export default withCookies(Home);
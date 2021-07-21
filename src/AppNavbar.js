import React, { Component } from 'react';
import { Collapse,Navbar, NavLink } from 'reactstrap';
// import { Link } from 'react-router-dom';
import './App.css';
import Auth from './Auth/Signup/Auth';
import Login from './Auth/Login/login';

export default class AppNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false};
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return <Navbar className="nav" >
 
      <Collapse isOpen={this.state.isOpen} navbar>
        
      <NavLink href="/login" exact component={Login} className="navitem">Login</NavLink>
      <NavLink href="/signup" exact component={Auth} className = "navitem">Signup</NavLink>   
  
      </Collapse>
    </Navbar>;
  }
}

 
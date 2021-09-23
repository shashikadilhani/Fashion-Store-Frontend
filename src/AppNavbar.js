import React, { Component } from 'react';
// import { Collapse,Navbar, NavLink } from 'reactstrap';
import './App.css';
import Auth from './Auth/Signup/Signup';
import Login from './Auth/Login/login';
import Services from './Our Services/ourservices';
import logo from './assets/saree.jpg';
import Popup from './popup-profile/button';
import {withRouter} from 'react-router-dom';
// import './styles/app.scss';
import {
  Collapse,Navbar, NavLink,
    Nav,
    NavbarToggler,
    Dropdown,
    DropdownToggle,
    InputGroupAddon,
    InputGroup,
    Input,
    Form,
    NavItem,
    Button,
    NavbarBrand,Container
  } from "react-bootstrap";
  import { DropdownItem } from 'reactstrap';
import { NavDropdown } from 'react-bootstrap';

class AppNavbar extends Component {
  constructor(props) {
    super(props);
    this.handleMenuClick = this.handleMenuClick.bind(this); 
    // this.state = {isOpen: false};
    // this.toggle = this.toggle.bind(this);
  }

  handleMenuClick() {
    
      this.props.onLogout();
    
  }

  // toggle() {
  //   this.setState({
  //     isOpen: !this.state.isOpen
  //   });
  // }

  render() {
    return(
        <>
          <div className="div">
          <Navbar className="nav1" >
            <NavLink href="/home" exact component={Login} className="fa fa-home home"></NavLink>
            <NavLink href="/login" exact component={Login} className="navitem">Login</NavLink>
            <NavLink href="/signup" exact component={Auth} className = "navitem">Signup</NavLink>
            <NavLink href="/about_us" exact component={Login} className="navitem">AboutUs</NavLink>
            <NavLink href="/our_services" exact component={Services} className="navitem">Our Services</NavLink>
            <NavLink href="/contact" exact component={Login} className="navitem">Contact</NavLink>
            <NavItem className="navitem2">Items</NavItem>
            <NavItem currentUser={this.props.currentUser} 
                  onClick={this.handleMenuClick}>logout</NavItem>
            <NavDropdown className="navdrop"> 
                <DropdownItem>Women</DropdownItem>
                <DropdownItem>Men</DropdownItem>
                <DropdownItem>Kids</DropdownItem>
                <DropdownItem>Adults</DropdownItem>
            </NavDropdown>
            <button onClick="sdff" className="navdiv">ORDER NOW</button> 

            {/* use popupp */}

            <Popup user={this.props.currentUser} />
            {/* <NavLink href="/home" exact component={Login} >
            <img src={logo} alt="Logo" width="40" height="40" />
            </NavLink> */}  

          </Navbar>
          </div>
          </>
    );
  }
}

export default withRouter(AppNavbar);
 
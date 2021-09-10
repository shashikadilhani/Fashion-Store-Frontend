import React, { useState } from 'react';
import Popup from './Popup';
import { Container, Row, Col, NavItem,NavLink } from 'react-bootstrap';
import './style.css';
import Login from '../Our Services/cloths';

function Button(props) {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
 
  return <div>
    <input className="p-btn3"
      type="button"
      // value="View"
      onClick={togglePopup}
      onAuxClick={togglePopup}
    
    />
    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
    {isOpen && <Popup
      content={<>

        <NavLink href="/home" className="p-popuprow1" exact component={Login}>Settings</NavLink>
        <NavLink href="/home" className="p-popuprow2" exact component={Login}>My Orders</NavLink>
        <NavLink href="/home" className="p-popuprow3" exact component={Login}>Logout</NavLink>
         
      </>}
      handleClose={togglePopup}
    />}
  </div>
}
 
export default Button;
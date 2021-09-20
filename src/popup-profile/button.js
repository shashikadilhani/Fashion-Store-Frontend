import React, { useState } from 'react';
import Popup from './Popup';
import { Container, Row, Col, NavItem,NavLink } from 'react-bootstrap';
import './style.css';
import Login from '../Our Services/cloths';
import Profile from '../profile/profile';
import { Link } from 'react-router-dom';

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
      // img width = '200'height='200' resizeMode='fit-to-context'quality='100' src={`data:image/jpeg;base64,${props.user.currentUser.phto} `} 
    
    />
    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
    {isOpen && <Popup
      content={<>
        
        
        <p className="para">{props.user.username}</p>
        <NavLink href="/home" className="p-popuprow1"  onClick={props.handleClose} exact component={Profile}>Settings</NavLink>
        {/* <NavLink href="/orders" className="p-popuprow2" onClick={props.handleClose} >My Orders</NavLink> */}
        <NavLink href="/home" className="p-popuprow3" onClick={props.handleClose} exact component={Login}>Logout</NavLink>
        <NavLink  as={Link}
            to={{
              pathname: '/orders',
              aboutProps:{
                user:props.user
              }
          }}      
          > My Orders
      </NavLink>
    
      </>}
      handleClose={togglePopup}
    />}
  </div>
}
 
export default Button;
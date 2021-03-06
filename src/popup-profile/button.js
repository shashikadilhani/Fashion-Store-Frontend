import React, { useState } from 'react';
import Popup from './Popup';
import { Container, Row, Col, NavItem,NavLink } from 'react-bootstrap';
import './style.css';
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
      // img width = '200'height='200' resizeMode='fit-to-context'quality='100' src={`data:image/jpeg;base64,${getUser.photoPath} `} 
    
    />
    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
    {isOpen && <Popup
      content={<>
        <p className="para">{props.user.username}</p>
        <NavLink  className="para2" as={Link}
            to={{
              pathname: '/profile',
              aboutProps:{
                user:props.user
              }
          }}      
          > Settings
      </NavLink>
        <NavLink   className="para2">Logout</NavLink>
        <NavLink  className="para2"  as={Link}
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
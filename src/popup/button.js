import React, { useState } from 'react';
import Popup from './Popup';
import { Container, Row, Col } from 'reactstrap';
import './style.css';

function Button(props) {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
 
  return <div>
    <input className="btn3"
      type="button"
      value="View"
      onClick={togglePopup}
    />
    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
    {isOpen && <Popup
      content={<>

        <Row >
            <Col className="popupcol1">
            {<img width = '300'height='300' resizeMode='fit-to-context'quality='100' src={`data:image/jpeg;base64,${props.item.image} `} />}
            </Col>
            <Col className="popupcol2">
                <Row className="popuprow1"> {props.item.item_name}</Row>
                <Row className="popuprow2">Price: {props.item.price}</Row>
                <Row className="popuprow2">Price: {props.item.price}</Row>
                <Row className="popuprow2">Price: {props.item.price}</Row>
            </Col>
        </Row>
        <Row className="popuprow3" >
        <button className="popupbtn" >Add To Cart</button>
        </Row>
        {/* <b>{props.item.price}</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <button>Test button</button> */}
      </>}
      handleClose={togglePopup}
    />}
  </div>
}
 
export default Button;
import React, { Component } from 'react';
import './profile.css';
import { withCookies } from 'react-cookie';
import { Navbar, NavLink } from 'react-bootstrap';
import Footer from '../footer/footer'
import { Container, Row, Col } from 'react-bootstrap';

class Home extends React.Component {

  render() {
    
    return (   
      
         <> 
            <Row>
                <Col className="ordercol1">
                    <br></br>
                     MY ORDERS
                </Col>

                <Col className="ordercol2">
                    
                </Col>
            </Row>
            {/* <div className="footer">
                        <span >
                            © {new Date().getFullYear()}, made with{" "}
                            <i className="fa fa-heart heart" /> by SHASHIKA DILHANI
                        </span>
             </div>    */}
              </> 
    );
  }
}

export default withCookies(Home);
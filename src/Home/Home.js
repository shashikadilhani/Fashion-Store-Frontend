import React, { Component } from 'react';
import './Home.css';
import { withCookies } from 'react-cookie';
import { Navbar, NavLink } from 'react-bootstrap';
import Footer from '../footer/footer'
import { Container, Row, Col } from 'react-bootstrap';

class Home extends Component {
 
  render() {
    
    return (   
      
         <> 
              <div className="landing">
                  <Navbar className="nav2" >  
                    <NavLink href="/kids" className="nav4">KIDS</NavLink>
                    <NavLink href="/woman" className = "nav3">WOMAN</NavLink>     
                    <NavLink href="/men" className = "nav3">MEN</NavLink>  
                    <NavLink href="/adults"  className = "nav3">ADULTS</NavLink>
                    <NavLink href="/party"  className = "nav3">PARTY</NavLink>
                  </Navbar>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <p>we are creative
                  <h1>THE BEST CLOTHING STORE</h1>
                  Their target market seeks high-quality products and they don't mind paying extra for it. Business objectives are the goals of a company. High-end clothing stores have specialized objectives to make the store better besides increasing sales and employee satisfaction like any other business.</p>
              </div>
 

            {/* <Container> */}
              <Row>
                <Col className="col1">
                  
                  <br></br>
                  OUR SERVICES
                  <br></br>
                  
                  <p className="cardbody">
                  Their target market seeks high-quality
                   products and they don't mind paying extra for it.
                    Business objectives are the goals of a company. 
                    High-end clothing stores have specialized objectives 
                    to make the store better besides increasing sales and 
                    employee satisfaction like any other business.
                  </p>

                  <button onClick="sdff" className="homebtn">View more..</button>
                  </Col>
                <Col className="col2">
                <br></br>
                ABOUT Us
                  <br></br>
                  
                  <p className="cardbody">
                  Their target market seeks high-quality
                   products and they don't mind paying extra for it.
                    Business objectives are the goals of a company. 
                    High-end clothing stores have specialized objectives 
                    to make the store better besides increasing sales and 
                    employee satisfaction like any other business.
                  </p>

                  <button onClick="sdff" className="homebtn">View more..</button>
                </Col>
                <Col className="col3">
                <br></br>
                CONTACT US
                  <br></br>
                  
                  <p className="cardbody">
                  Their target market seeks high-quality
                   products and they don't mind paying extra for it.
                    Business objectives are the goals of a company. 
                    High-end clothing stores have specialized objectives 
                    to make the store better besides increasing sales and 
                    employee satisfaction like any other business.
                  </p>

                  <button onClick="sdff" className="homebtn">View more..</button>
                  
                </Col>  
              </Row>
              
            {/* </Container> */}

            <Footer />

               
              </> 
          
    );
  }
}

export default withCookies(Home);
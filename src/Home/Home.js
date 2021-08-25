import React, { Component } from 'react';
import './Home.css';
import { withCookies } from 'react-cookie';
import { Container} from 'react-bootstrap';
import { Navbar, NavLink } from 'reactstrap';
import Footer from '../footer/footer'

class Home extends Component {
 
  render() {
    
    return (   
      <>
         <Container className="mn">
            {
              <div className="landing">
                  <Navbar className="nav2" >  
                    <NavLink href="/kids" className="nav4">KIDS</NavLink>
                    <NavLink href="/woman" className = "nav3">WOMAN</NavLink>     
                    <NavLink href="/men" className = "nav3">MEN</NavLink>  
                    <NavLink href="/adults"  className = "nav3">ADULTS</NavLink>
                    <NavLink href="/party"  className = "nav3">PARTY</NavLink>
                  </Navbar>
                  <p>we are creative
                  <h1>THE BEST CLOTHING STORE</h1>
                  Their target market seeks high-quality products and they don't mind paying extra for it. Business objectives are the goals of a company. High-end clothing stores have specialized objectives to make the store better besides increasing sales and employee satisfaction like any other business.</p>
              </div>
          }
        </Container> 
        <Footer /> 
      </>
        
    );
  }
}

export default withCookies(Home);
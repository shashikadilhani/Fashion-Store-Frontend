import React, { Component } from 'react';
import './Home.css';
import { withCookies } from 'react-cookie';
import { Container} from 'react-bootstrap';
import { Navbar, NavLink } from 'reactstrap';
import Adult from '../item/adult';
import Kids from '../item/kids';
import men from '../item/men';
import Women from '../item/woman';
import Party from '../item/party';

class Home extends Component {
 
  render() {
    
    return (   
      <Container>
    
      <div className="landing">
          <Navbar className="nav2" >  
            <NavLink href="/kids" exact component={Kids} className="nav4">KIDS</NavLink>
            <NavLink href="/woman" exact component={Women} className = "nav3">WOMAN</NavLink>     
            <NavLink href="/men" exact component={men} className = "nav3">MEN</NavLink>  
            <NavLink href="/adults" exact component={Adult} className = "nav3">ADULTS</NavLink>
            <NavLink href="/party" exact component={Party} className = "nav3">PARTY</NavLink>
          </Navbar>
          <p>we are creative
          <h1>THE BEST CLOTHING STORE</h1>
          Their target market seeks high-quality products and they don't mind paying extra for it. Business objectives are the goals of a company. High-end clothing stores have specialized objectives to make the store better besides increasing sales and employee satisfaction like any other business.</p>
      </div>
    </Container>        
    );
  }
}

export default withCookies(Home);
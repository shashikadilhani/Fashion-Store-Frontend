import React, {Component } from 'react';
// import './women.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container, Row, Col } from 'react-bootstrap';
import Aux from '../Auxx';
 
  
class men extends Component{

    constructor(){
        
          super();
          this.state = {
               
          }
      }

      handleClick = () => {
        console.log('HERE!');
        // this.context.location.transitionTo('login');
      };
 
  render() {
    return (    
      
      <>
      <Container>
        <Row>
          <Col className="mencol1">
          
          </Col>

          <Col className="mencol2">
             MENS WARE

             <Row className="menrow1">
               <Col className="grid11">
               <p>BLOUSES</p>
               </Col>

               <Col className="grid12">
               <p>BLOUSES</p>
               </Col>
             </Row>

             <Row className="menrow2">
               <Col className="grid13">
               <p>BLOUSES</p>
               </Col>

               <Col className="grid14">
               <p>BLOUSES</p>
               </Col>
             </Row>
          </Col>
        </Row>

      </Container>
      
      <div className="footermen">
                        <span >
                            © {new Date().getFullYear()}, made with{" "}
                            <i className="fa fa-heart heart" /> by 2GCode
                        </span>
             </div>
 </>         
    );
  }
}

export default men;

 
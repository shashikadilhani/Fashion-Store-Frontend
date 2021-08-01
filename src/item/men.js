import React, {Component } from 'react';
// import './women.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container, Row, Col } from 'reactstrap';
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
      
         
    <Grid className="mengrid" direction='row' container  >
        

        <Grid className="grid11"  >
            <p>BLOUSES</p>
        </Grid> 
        <Grid className="grid12"  >
        <p>                                          
          SAREE
        </p>
        </Grid> 
       
        <Grid className="grid13" >
        <p>                                          
           GAWON
        </p>

        </Grid>
        <Grid className="grid14"  >
            <p>SKIRTS</p>

        </Grid>
        <Grid className="grid15">
            <p>OFFICE WARE</p>
        </Grid>
        <Grid className="grid16"  >
            <p>DENIMS</p>
        </Grid>
        

    </Grid> 
          
    );
  }
}

export default men;

 
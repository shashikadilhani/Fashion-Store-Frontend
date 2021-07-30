import React, {Component } from 'react';
import styles from './women.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container, Row, Col } from 'reactstrap';
import Aux from '../Auxx';
 


  
class women extends Component{

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
      
         
    <Grid className="kkk" direction='row' container  >
        

        <Grid className="grid1"  >
      
            <p>BLOUSES</p>
        </Grid> 
        <Grid className="grid2"  >
        <p>                                          
          SAREE
        </p>
        </Grid> 
       
        <Grid className="grid3" >
        <p>                                          
           GAWON
        </p>

        </Grid>
        <Grid className="grid4"  >
            <p>SKIRTS</p>

        </Grid>
        <Grid className="grid5">
            <p>OFFICE WARE</p>
        </Grid>
        <Grid className="grid6"  >
            <p>DENIMS</p>
        </Grid>
        

    </Grid> 
          
    );
  }
}

export default women;

 
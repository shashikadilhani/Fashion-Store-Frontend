import React, {Component } from 'react';
import styles from './women.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container, Row, Col } from 'reactstrap';
import Aux from '../Auxx';
import Kids from '../item/kids';
import Party from '../item/party';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
 
  
class women extends Component{

    constructor(props){
        
          super(props);
          this.state = {
            showComponent: false,
          }
          this.myFunction= this.myFunction.bind(this);
      }

      _onButtonClick() {
          // <a href="http://www.google.com" onclick="return myFunction();">Link</a>
          <Link to="/party" className="btn btn-primary"></Link>
        }
 
      myFunction() {
       
        this.setState({
          showComponent: true,
        });
      
    }
  render() {
    return (        
      <>
      <Grid className="womengrid">
        <h5>WOMEN ITEMS</h5>
      </Grid>
        <Grid className="kkk" direction='row' container  >
        
        <Grid className="grid1"  >
        <Link to="/blouse" className="font" >BLOUSE</Link>
        </Grid> 

        <Grid  className="grid2" >
        <Link to="/saree" className="font" >SAREE</Link>
        </Grid> 
       
        <Grid className="grid3" >
        <Link to="/party" className="font" >FROCK</Link>
        </Grid>

        <Grid className="grid4"  >
        <Link to="/party" className="font" >SKIRT</Link>
        </Grid>

        <Grid className="grid5">
        <Link to="/party" className="font" >OFFICE</Link>
        </Grid>

        <Grid className="grid6"  >
        <Link to="/party" className="font" >DENIM</Link>
        </Grid>
    </Grid>
      </>
          
    );
  }
}

export default women;

 
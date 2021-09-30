import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
// import './Contact.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class Home2 extends React.Component {
    render () {
      return (
        <>
     
        <Grid className="contact" direction='row' Container>
                   <Grid className="con-row-1">
                        
                                              
                            <p className="h1" >
                              <br></br>
                              <br></br>
                              <br></br>
                             Contact Us
                            </p>
                            Solution for every need! <br></br>
                             We provide all pet related services for everyone.  <br></br>
                             Get the latest on adoption processes, learn how local shelters and rescue groups are adapting and find out what you can do to help pets in need right now.
                              
                   </Grid>


                   
                

        
             </Grid>
             <div className="copyright2">
                        <span >
                            © {new Date().getFullYear()}, made with{" "}
                            <i className="fa fa-heart heart" /> by SHASHIKA DILHANI
                        </span>
             </div>
        </>
      );
    }
  }
  
  export default withRouter(Home2);
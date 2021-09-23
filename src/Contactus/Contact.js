import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Contact.css';
import { Link } from 'react-router-dom';

class Contact extends Component {
    render () {
      return (
        <>
     
        <Grid className="contact" Container>
                   <Grid className="con-row-1" direction='row' container>
                        
                                              
                            <p className="h1" >
                              <br></br>
                              <br></br>
                              <br></br>
                             OUR SERVICES
                            </p>
                            Solution for every need! <br></br>
                             We provide all pet related services for everyone.  <br></br>
                             Get the latest on adoption processes, learn how local shelters and rescue groups are adapting and find out what you can do to help pets in need right now.
                              
                   </Grid>


                    <Grid className="con-row-2"  direction='row' container>
                          kjdhfvk  

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
  
  export default Contact;
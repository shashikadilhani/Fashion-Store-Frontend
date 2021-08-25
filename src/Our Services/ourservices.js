import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './ourservices.css';

class Services extends Component {
    render () {
      return (
        <>
     
        <Grid className="con" Container>
                   <Grid className="os1" direction='row' container>
                        <Grid className="os12">
                                              
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
                   </Grid>


                    <Grid className="os2"  direction='row' container>
                            <Grid className="os21">
                                    <div className="cardheader1"></div> 
                                    <div className="cardtopic">Discover All CLOTHS</div>
                                    <br></br>
                                    <div className="cardbody">
                                    Looking for PETS? <br></br>
                                    
                                    Find lots of pets and give your love for them !
                                     </div>    
                            </Grid>

                            <Grid className="os21">

                                    <div className="cardheader2"></div>
                                    <div className="cardtopic">Pet Accessories</div> 
                                    <br></br>
                                    <div className="cardbody">
                                    Looking for pet ACCESSORIES ? <br></br>   
                                     
                                    Find all accosseries for good prices!
                                    </div>       
                            </Grid>

                            <Grid className="os21">
                                   <div className="cardheader3"></div> 
                                   <div className="cardtopic">Health Care</div>
                                   <br></br>
                                   <div className="cardbody">
                                    Looking for HEALTH CARE ? <br></br>   
                                    
                                    Keep your pets healthy!
                                    </div>    
                            </Grid>

                            <Grid className="os21">
                                    <div className="cardheader4"></div> 
                                    <div className="cardtopic">Consultation</div>
                                    <br></br>
                                    <div className="cardbody">
                                    Looking for Pet CONSULTATION ? <br></br>   
                                    
                                    Keep happy smile of your pet!
                                    </div>         
                            </Grid>

                    </Grid>

                    <Grid className="os3"  direction='row' container>
                            <Grid className="os21">
                                    <div className="cardheader5"></div> 
                                    <div className="cardtopic">Home Visit</div>
                                    <br></br>
                                    <div className="cardbody">
                                    Looking for Home VISITS ? <br></br>   
                                    
                                    we are available! 
                                    </div>         
                            </Grid>

                            <Grid className="os21">
                                    <div className="cardheader7"></div> 
                                    <div className="cardtopic">Dontions</div>
                                    <br></br>
                                    <div className="cardbody">
                                    DONATION Availabe!  <br></br>   
                                                                     and take good care of them.<br></br>
                                    Help them and join with us!
                                    </div>        
                            </Grid>

                            <Grid className="os21">
                                    <div className="cardheader6"></div> 
                                    <div className="cardtopic">Pet Hostel</div>
                                    <br></br>
                                    <div className="cardbody">
                                    Looking for a unique HOME ? <br></br>   
                                    
                                    Keep your pets with us!
                                    </div>        
                            </Grid>

                    </Grid>

                    <Grid className="os3"  direction='row' container>
                            <br></br>
                            <br></br>
                    </Grid>
                   
             </Grid>
             <div className="copyright2">
                        <span >
                            © {new Date().getFullYear()}, made with{" "}
                            <i className="fa fa-heart heart" /> by 2GCode
                        </span>
             </div>
        </>
      );
    }
  }
  
  export default Services;
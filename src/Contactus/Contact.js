import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Contact.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

class Contact extends Component {
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


                    <Grid className="con-row-2">
                          <Row className="footer-row">
                          <Col lg="3" md="6">
                              <h5 className="footer-topic">Address</h5>
                              <p className="footer-des">No.398, Galle Road , Aluthgama</p>
                          </Col>
                          <Col lg="3" md="6" >
                              <h5 className="footer-topic">Phone</h5>
                              <p className="footer-des">Reception :  +94 79 8888 990 <br />Office :  +94 34 227 0456</p>
                          </Col>
                          <Col lg="3" md="6" >
                              <h5 className="footer-topic">Email</h5>
                              <p className="footer-des">Office :  <a href="#" className="link">happypaws@gmail.com</a> <br />Site :  <a href="#" className="link">happy.com</a></p>
                          </Col>
                          <Col lg="3" md="6">
                              <h5 className="footer-topic">Social</h5>
                              <div className="round-social light">
                                  <a href="#" className="link"><i className="fa fa-facebook-square" aria-hidden="true"><br/></i></a>
                                  <a href="#" className="link"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                  <a href="#" className="link"><i className="fa fa-instagram"aria-hidden="true"></i></a>
                              </div>
                          </Col>
                      </Row>
  

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
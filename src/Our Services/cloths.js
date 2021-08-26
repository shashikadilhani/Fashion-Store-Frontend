import React, {Component } from 'react';
// import './women.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import { Container, Row, Col } from 'reactstrap';
import { Container, Form, Row, Col } from 'react-bootstrap';
import Aux from '../Auxx';

import gal1 from '../assets/blouse.jpg';
import gal2 from '../assets/saree.jpg';
import gal3 from '../assets/blouse.jpg';
import gal4 from '../assets/blouse.jpg';
import './gallery.css';
 
  
class Cloths extends Component{

    state = {
        index: 0, 
        picList: [gal1, gal2,gal3, gal4]
      }
      
      onClickNext= () => {
          if (this.state.index + 1 === this.state.picList.length ){
              this.setState({ 
                  index: 0 
                })
            } else {
                this.setState({
                    index: this.state.index + 1
                })
            }

          }
          onClickPrevious= () => {
            if (this.state.index - 1 === -1 ){
                this.setState({ 
                    index: this.state.picList.length - 1
                  })
              } else {
                  this.setState({
                      index: this.state.index - 1
                  })
              }
            }
 
  render() {
    return (    
      
        <Container className="feedback-container">
                <Row>
                    <h5>We Value Your Feedback</h5>
                    <h5>Our Gallery</h5>
                </Row>
                <Row>
                    <Col>
                    <button className="btn1" onClick={this.onClickPrevious}> <i class="fa fa-caret-left" aria-hidden="true"></i> </button>
                    </Col>
                    <Col>
                    <div className="gallery-div">
                     
                    <img src={this.state.picList[this.state.index]} style={{"maxHeight":"40%","maxWidth":"40%"}} /> <br/>
                   
                </div>
                    </Col>
                    <Col>
                    <button style={{"margin-left":"5px", "fontSize":"18px"}} onClick={this.onClickNext}> <i class="fa fa-caret-right" aria-hidden="true"></i></button>
          
                    </Col>
                
                </Row>
        </Container>
     
    // <Grid className="mengrid" direction='row' container  >
        

    //     <Grid className="grid11"  >
    //         <p>BLOUSES</p>
    //     </Grid> 
    //     <Grid className="grid12"  >
    //     <p>                                          
    //       SAREE
    //     </p>
    //     </Grid> 
       
    //     <Grid className="grid13" >
    //     <p>                                          
    //        GAWON
    //     </p>

    //     </Grid>
    //     <Grid className="grid14"  >
    //         <p>SKIRTS</p>

    //     </Grid>
    //     <Grid className="grid15">
    //         <p>OFFICE WARE</p>
    //     </Grid>
    //     <Grid className="grid16"  >
    //         <p>DENIMS</p>
    //     </Grid>
        

    // </Grid> 
          
    );
  }
}

export default Cloths;

 
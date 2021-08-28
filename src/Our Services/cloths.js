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
        
            <>
                <Grid>
                <Container className="feedback-container">
                            <Row className="rowtext">
                                {/* <h5>We Value Your Feedback</h5> */}
                                WOMENS
                            </Row>


                            <Row className="row">
                                <Col className="col1">
                                <button className="btn1" onClick={this.onClickPrevious}> <i class="fa fa-caret-left" aria-hidden="true"></i> </button>
                                </Col>
                                <Col className="cls2">
                                <div className="gallery-div">
                                
                                <img className="image" src={this.state.picList[this.state.index]} /> <br/>
                            
                            </div>
                                </Col >
                                <Col className="col3">
                                <button className="btn2"  onClick={this.onClickNext}> <i class="fa fa-caret-right" aria-hidden="true"></i></button>
                                </Col>
                            
                            </Row> 

                    </Container>

                </Grid>


                <Grid>
                <Container className="feedback-container">
                            <Row className="rowtext">
                                {/* <h5>We Value Your Feedback</h5> */}
                                MENS
                            </Row>


                            <Row className="row">
                                <Col className="col1">
                                <button className="btn1" onClick={this.onClickPrevious}> <i class="fa fa-caret-left" aria-hidden="true"></i> </button>
                                </Col>
                                <Col className="cls2">
                                <div className="gallery-div">
                                
                                <img className="image" src={this.state.picList[this.state.index]} /> <br/>
                            
                            </div>
                                </Col >
                                <Col className="col3">
                                <button className="btn2"  onClick={this.onClickNext}> <i class="fa fa-caret-right" aria-hidden="true"></i></button>
                                </Col>
                            
                            </Row> 

                    </Container>

                </Grid>

                <Grid>
                <Container className="feedback-container">
                            <Row className="rowtext">
                                {/* <h5>We Value Your Feedback</h5> */}
                                KIDS
                            </Row>


                            <Row className="row">
                                <Col className="col1">
                                <button className="btn1" onClick={this.onClickPrevious}> <i class="fa fa-caret-left" aria-hidden="true"></i> </button>
                                </Col>
                                <Col className="cls2">
                                <div className="gallery-div">
                                
                                <img className="image" src={this.state.picList[this.state.index]} /> <br/>
                            
                            </div>
                                </Col >
                                <Col className="col3">
                                <button className="btn2"  onClick={this.onClickNext}> <i class="fa fa-caret-right" aria-hidden="true"></i></button>
                                </Col>
                            
                            </Row> 

                    </Container>

                </Grid>
            </>
       
          
    );
  }
}

export default Cloths;

 
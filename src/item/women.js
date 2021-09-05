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
      <Container>
        <Row>
          <Col className="womencol1">
          
          </Col>

          <Col className="womencol2">
             WOMENS WARE

             <Row className="womenrow1">
               <Col className="grid1">
                 <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
                 
               <Link to="/blouse" className="findmore">Find More</Link> 
               </Col>

               <Col className="grid2">
               <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
                 
               <Link to="/blouse" className="findmore">Find More</Link> 
               </Col>
             </Row>

             <Row className="womenrow2">
               <Col className="grid3">
               <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
                 
               <Link to="/blouse" className="findmore">Find More</Link> 
               </Col>

               <Col className="grid4">
               <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
                 
               <Link to="/blouse" className="findmore">Find More</Link> 
               </Col>
             </Row>

             <Row className="womenrow3">
               <Col className="grid5">
               <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
                 
               <Link to="/blouse" className="findmore">Find More</Link> 
               </Col>

               <Col className="grid6">
               <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
                 
               <Link to="/blouse" className="findmore">Find More</Link> 
               </Col>
             </Row>
          </Col>
        </Row>

      </Container>
      
      <div className="footerwomen">
                        <span >
                            © {new Date().getFullYear()}, made with{" "}
                            <i className="fa fa-heart heart" /> by 2GCode
                        </span>
     </div>
 </>         
    //   <>
    //   <Grid className="womengrid">
    //     <h5>WOMEN ITEMS</h5>
    //     hke
    //   </Grid>
    //     <Grid className="kkk" direction='row' container  >
        
    //     <Grid className="grid1"  >
    //     <Link to="/blouse" className="font" >BLOUSE</Link>
    //     </Grid> 

    //     <Grid  className="grid2" >
    //     <Link to="/saree" className="font" >SAREE</Link>
    //     </Grid> 
       
    //     <Grid className="grid3" >
    //     <Link to="/party" className="font" >FROCK</Link>
    //     </Grid>

    //     <Grid className="grid4"  >
    //     <Link to="/party" className="font" >SKIRT</Link>
    //     </Grid>

    //     <Grid className="grid5">
    //     <Link to="/party" className="font" >OFFICE</Link>
    //     </Grid>

    //     <Grid className="grid6"  >
    //     <Link to="/party" className="font" >DENIM</Link>
    //     </Grid>
    // </Grid>
  

    // <div className="footer">
    //                     <span >
    //                         © {new Date().getFullYear()}, made with{" "}
    //                         <i className="fa fa-heart heart" /> by 2GCode
    //                     </span>
    // </div>
    //   </>
          
    );
  }
}

export default women;

 
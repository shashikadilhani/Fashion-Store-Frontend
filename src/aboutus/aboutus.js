import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Grid from '@material-ui/core/Grid';
import './aboutus.css';
import { getCurrentUser } from '../util/APIUtills';
import ItemService from '../Service/ItemService';
import { Layout, notification } from 'antd';
import { BrowserRouter as Router,Switch,Route,withRouter } from 'react-router-dom';


class aboutus extends Component {
    render () {

      return (
        <>
        
        
              <Grid Container>
                   <Grid className="row1" direction='column'>
                
                   </Grid>

                    <Grid className="row2"  direction='row' container>
                        <Grid className="name1">
                            
                        </Grid>
                        <Grid className="name2">
                            <div className="div1">
                                About Us
                            </div>
                            <div className="div2">
                            An About Us page helps your company make a good first impression, and is critical for building customer trust and loyalty. An About Us page should make sure to cover basic information about the store and its founders, explain the company's purpose and how it differs from the competition, and encourage discussion and interaction. Here are some free templates, samples, and example About Us pages to help your ecommerce store stand out from the crowd.
                            </div>
                        </Grid>
                    </Grid>
                   
             </Grid>
              <div className="copyright2">
                        <span >
                            © {new Date().getFullYear()}, made with{" "}
                            <i className="fa fa-heart heart" /> by SHASHIKA DILHANI
                        </span>
             </div>
             </>
             
 
    //     <Grid className="kkk" direction='row' container  >
    //     <Grid className="grid1"  >
    //         <div>
    //             snv
    //         </div>
    //         <div>
    //             sbfvk
    //         </div>
    //     </Grid>     
    // </Grid> 
      );
    }
  }
  
  export default withRouter(aboutus);
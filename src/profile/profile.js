import React, { Component } from 'react';
import './profile.css';
import Grid from '@material-ui/core/Grid';
import { withCookies } from 'react-cookie';
import { Container, Row, Col } from 'react-bootstrap';
import OrderService from '../Service/OrderService';

class Profile extends React.Component {

   constructor(props) {
    super(props);
    // console.log(props.location.aboutProps.user.username);
//     this.state = {
//       orders:[] 
//   }
  }

//   componentDidMount(){       
//     OrderService.getUserCurrentOrders().then((response) => {
//         this.setState({ orders : response.data})
//     });

//   }

  render() {
    return (   
      
         <> 
                <Grid className="cont" direction='row' container>

                    <Grid className="profilecol1">
                    <p className="pp">Profile Settings</p>

                    <Grid className="photo">
                        lkjk;
                    </Grid>

                    <p className="ppp">Shashika Dilhani</p>
                    </Grid>

                    <Grid className="profilecol2">
                        <Grid className="profilerow">hhhhhh</Grid>
                        <Grid className="profilerow">hhhhhh</Grid>
                        <Grid className="profilerow">hhhhhh</Grid>
                        <Grid className="profilerow">hhhhhh</Grid>
                        <Grid className="profilerow">hhhhhh</Grid>
                        <Grid className="profilerow">hhhhhh</Grid>
                     
                    </Grid>

                    <Grid className="profilecol3">
                        {/* kjhl */}
                         {/* k<Grid className="profilerow">hhhhhh</Grid>   */}
                    </Grid>
                </Grid>

            <div className="profile_footer">
                        <span >
                            © {new Date().getFullYear()}, made with{" "}
                            <i className="fa fa-heart heart" /> by SHASHIKA DILHANI
                        </span>
            </div>   
              </> 
    );
  }
}

export default Profile;
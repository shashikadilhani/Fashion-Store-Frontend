import React, { Component } from 'react';
import './profile.css';
import Grid from '@material-ui/core/Grid';
import { withCookies } from 'react-cookie';
import axios from 'axios';

class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      persons:[] ,
      user:[]
  }
  }

  componentDidMount() {
    const user_id  = this.props.currentUser.id
    console.log("jhdfkhoifs" + user_id);
    // Extracted productId from the Route params.
    axios.get(`http://localhost:8080/customer/view/${user_id}`).then((response) => {
      // const persons = res.data;
      this.setState({ user : response.data })
    });
  }

  render() {
    console.log(this.props)
    return (   
      
         <> 
                <Grid className="cont" direction='row' container>

                    <Grid className="profilecol1">
                    <p className="pp">Profile Settings</p>

                    <Grid className="photo">
                    {<img width = '250'height='250' class="rounded-circle" quality='100' src={`data:image/png;base64,${this.state.user.photoPath} `} />}
                    </Grid>

                    <p className="ppp">{this.state.user.username}</p>
                    </Grid>

                    <Grid className="profilecol2">
                        <Grid className="profilerow">{this.state.user.name}</Grid>
                        <Grid className="profilerow">{this.state.user.email}</Grid>
                        <Grid className="profilerow">{this.state.user.gender}</Grid>
                        <Grid className="profilerow">{this.state.user.birthday}</Grid>
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
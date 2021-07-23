import React, {Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import './kids.css';
import UserService from '../Service/UserService';
  
class kids extends Component{

        constructor(){
          super();
          this.state = {
              users:[]
          }
      }
  
      componentDidMount(){       
        UserService.getUsers().then((response) => {
            this.setState({ users : response.data})
        });
      }


  render() {
    return (

        this.state.users.map(
        user => 
        <Container>
          
            {      
                <Card className="name">
                  <CardMedia
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className="test">
                    <Typography gutterBottom variant="h5" component="h2">
                     {user.name}
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions className="action">
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
             
            }
      
        </Container>
    
        )      
    );
  }
}

export default kids;

 
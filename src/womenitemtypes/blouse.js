import React, {Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './itemtypes.css';
import ItemService from '../Service/ItemService';
import { Button } from 'reactstrap';
// import Image from 'react-bootstrap';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Image from 'react-bootstrap/Image'


import Aux from '../Auxx';
  
class blouse extends Component{

        constructor(){
          super();
          this.state = {
              items:[] 
          }
      }
  
      componentDidMount(){       
        ItemService.getAllCAtegofyItemTypes().then((response) => {
            this.setState({ items : response.data})
        });

      }
 

  render() {
    return (
      <>
          <div>

          <div className="divnav">
            Ladies Blouse
          </div>
          <Grid className="grid" direction='row' container  >

              {this.state.items.map((item) => (

                // <div>
                //   <img src={`data:image/jpeg;base64,${item.image}`} />
                // </div>

                <Card className="card1" >
                <CardMedia className="media"
            
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
                <CardContent className="content1">
                {<img width = '200'height='200' resizeMode='fit-to-context'quality='100' src={`data:image/jpeg;base64,${item.image} `} />}
                </CardContent>
              
                <CardActions className="action1"  direction='row'>
                  <Button className="btn">
                    Rs. {item.price}
                  </Button>
                  <Button className="btn">
                    View
                  </Button> 
                </CardActions>
              </Card>
            ))}           
            </Grid>
          </div>   
      </>                   
    );
  }
}

export default blouse;

 
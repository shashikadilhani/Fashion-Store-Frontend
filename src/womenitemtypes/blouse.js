import React, {Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './itemtypes.css';
import ItemService from '../Service/ItemService';
import { Button } from 'reactstrap';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

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

      <div>

        <div className="divnav">
          Ladies Blouse
        </div>
         <Grid className="grid" direction='row' container  >

            {this.state.items.map((item) => (

              <Card className="card1" >
              <CardMedia className="media"
          
                image="https://source.unsplash.com/random"
                title="Image title"
              />
              <CardContent className="content1"  >
                
                {/* image */}
              </CardContent>
              <div className="class1">Rs. 500.00</div>
              <CardActions className="action1"  direction='row'>
                <Button class="small" className="btn">
                  View
                </Button>
                <Button className="btn2">
                  Edit
                </Button>
                <Button className="btn">
                  Edit
                </Button>
              </CardActions>
            </Card>
          ))}           
          </Grid>
      </div>                      
    );
  }
}

export default blouse;

 
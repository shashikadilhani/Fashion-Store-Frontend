import React, {Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './itemtypes.css';
import ItemService from '../Service/ItemService';
import { Button } from 'reactstrap';

  
class saree extends Component{

        constructor(){
          super();
          this.state = {
              types:[]
          }
      }
  
      componentDidMount(){       

        ItemService.getItemTypes().then((response) => {
            this.setState({ types : response.data})
        });
      }

  render() {
    return (

        // <Grid className="grid" direction='row' container  >

        //     { this.state.types.map((type) => (
        //         <Grid className="gridcomponent"  >
        //         {type.name}

        //         <button>bjkj</button>
        //         </Grid>
        //     ))}                    
        // </Grid> 
 

        <Grid className="grid" direction='row' container>

          {
              // this.state.types.map((type) => (
           
                <div class="card-deck">
                     
                        <div class="card-block">
                            {/* {type.name} */}
                        </div>
                        <div class="card-footer-1">
                            prmbsj
                        </div>
                        <div class="card-footer-2"  direction='row'>    
                              <button class="button">gkj</button>
                              <button class="button">gkj</button>
                              <button class="button">gkj</button>               
                        </div>
                  </div>
                              
              // ))
          }
        </Grid>

    
 
                        
    );
  }
}

export default saree;

 
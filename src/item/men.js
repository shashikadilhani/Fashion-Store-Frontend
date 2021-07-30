import React, {Component } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
class men extends Component {
  render(){
    return(
      <React.Fragment className="fragment">  
                <main classNAme="main">
                  <Container className="cardGrid" spacing={24} back>
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                       
                        <Grid   xs={8} sm={8} md={3}>
                          <Card className="card" >
                            <CardMedia className="media"
                            
                              image="https://source.unsplash.com/random"
                              title="Image title"
                            />
                            <CardContent className="content"  >
                              <Typography className="topo" gutterBottom variant="h5" component="h2">
                               kjlkl
                              </Typography>
                              <Typography className="CardContent">
                                This is a media card. You can use this section to describe the content.
                              </Typography>
                            </CardContent>
                            {/* <CardActions className="action">
                              <Button size="small" color="primary">
                                View
                              </Button>
                              <Button size="small" color="primary">
                                Edit
                              </Button>
                            </CardActions> */}
                          </Card>
                        </Grid>
                      )
                    </Grid>
                  </Container>
                </main>               
              </React.Fragment>       
    );

  }
}

export default men;
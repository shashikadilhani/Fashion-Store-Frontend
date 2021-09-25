import React, { Component } from 'react';
import './profile.css';
import { withCookies } from 'react-cookie';
import { Navbar, NavLink } from 'react-bootstrap';
import Footer from '../footer/footer'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Home extends React.Component {

   constructor(props) {
    super(props);
    this.state = {
      persons:[] 
  }
  }

  componentDidMount() {

    const user_id  = this.props.location.aboutProps.user.id
    console.log("jhdfkhoifs" + user_id);
    // Extracted productId from the Route params.
    axios.get(`http://localhost:8080/customer/orders/${user_id}`).then((response) => {
      // const persons = res.data;
      this.setState({ persons : response.data })
    });
  }

  render() {
    return (   
      
         <> 
            <Row>
                <Col className="ordercol1">
                    <br></br>
                     <p className="op">YOUR ORDERS</p>
                </Col>

                <Col className="ordercol2">

                <table id="simple-board" className="simple-board">
                    <tbody>
                      <tr id="row0" className="tr">
                        <td id="cell0-0">Id</td>
                        <td id="cell0-1">Date</td>
                        <td id="cell0-2">No of Items</td>
                        <td id="cell0-3">Total Price</td>
                        <td id="cell0-4">Status</td>
                        <td id="cell0-5">View</td>
                      </tr>

                      {this.state.persons.map((item) => (
                         <tr id="row1">
                         <td id="cell1-0">{item.order_id}</td>
                         <td id="cell1-1">{item.orderDate}</td>
                         <td id="cell1-2">{item.orderDate}</td>
                         <td id="cell1-3">{item.totalPrice}</td>
                         <td id="cell1-4">{item.orderStatus}</td>
                         <td id="cell1-5">
                            <Link to="/blouse" className="view">View</Link> 
                         </td>
                       </tr>
                      ))} 
                    </tbody>
                  </table>
                </Col>
            </Row>
            <div className="order_footer">
                        <span >
                            © {new Date().getFullYear()}, made with{" "}
                            <i className="fa fa-heart heart" /> by SHASHIKA DILHANI
                        </span>
            </div>   
              </> 
    );
  }
}

export default withCookies(Home);
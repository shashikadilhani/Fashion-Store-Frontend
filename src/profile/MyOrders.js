import React, { Component } from 'react';
import './profile.css';
import { withCookies } from 'react-cookie';
import { Navbar, NavLink } from 'react-bootstrap';
import Footer from '../footer/footer'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import OrderService from '../Service/OrderService';

class Home extends React.Component {

   constructor(props) {
    super(props);
    console.log(props.location.aboutProps.user.username);
    this.state = {
      orders:[] 
  }
  }

  componentDidMount(){       
    OrderService.getUserCurrentOrders().then((response) => {
        this.setState({ orders : response.data})
    });

  }

  render() {
    return (   
      
         <> 
            <Row>
                <Col className="ordercol1">
                    <br></br>
                     MY ORDERS {this.props.location.aboutProps.user.name}
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

                      {this.state.items.map((item) => (
                         <tr id="row1">
                         <td id="cell1-0">fgh</td>
                         <td id="cell1-1">jj</td>
                         <td id="cell1-2">kjdfn</td>
                         <td id="cell1-3">kjdfn</td>
                         <td id="cell1-4">kjdfn</td>
                         <td id="cell1-5">
                            <Link to="/blouse" className="view">View</Link> 
                         </td>
                       </tr>
                      ))}
                      {/* <tr id="row1">
                        <td id="cell1-0">fgh</td>
                        <td id="cell1-1">jj</td>
                        <td id="cell1-2">kjdfn</td>
                        <td id="cell1-3">kjdfn</td>
                        <td id="cell1-4">kjdfn</td>
                        <td id="cell1-5">
                           <Link to="/blouse" className="view">View</Link> 
                        </td>
                      </tr>
                      <tr id="row2">
                        <td id="cell2-0">fghf</td>
                        <td id="cell2-1">kjdfn</td>
                        <td id="cell2-2">kjfd</td>
                        <td id="cell1-3">kjdfn</td>
                        <td id="cell1-4">kjdfn</td>
                      </tr>
                      <tr id="row2">
                        <td id="cell2-0">fghf</td>
                        <td id="cell2-1">kjdfn</td>
                        <td id="cell2-2">kjfd</td>
                        <td id="cell1-3">kjdfn</td>
                        <td id="cell1-4">kjdfn</td>
                      </tr>
                      <tr id="row2">
                        <td id="cell2-0">fghf</td>
                        <td id="cell2-1">kjdfn</td>
                        <td id="cell2-2">kjfd</td>
                        <td id="cell1-3">kjdfn</td>
                        <td id="cell1-4">kjdfn</td>
                      </tr> */}
                      
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
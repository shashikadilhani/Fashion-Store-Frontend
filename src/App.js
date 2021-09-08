// import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import AppNavbar from './AppNavbar';
import Auth from './Auth/Signup/Auth'
import Home from './Home/Home';
import About from './aboutus/aboutus';
import men from './item/men';
import women from './item/women';
import kids from './item/kids';
import adult from './Our Services/ourservices';
import Party from './aboutus/aboutus';

import blouse from './itemtypes/blouse';
import saree from './itemtypes/saree';
import Shirt from './itemtypes/shirt';

import 'bootstrap/dist/css/bootstrap.min.css';

import Cloths from './Our Services/cloths'
//slack
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

//  class App extends React.Component  {

//   constructor(props) {
//     super(props);

//     this.state = {
//         currentUser: null
//     };
// }

// // componentDidMount() {
// //     authenticationService.currentUser.subscribe(x => this.setState({ currentUser: x }));
// // }

// logout() {
//     authenticationService.logout();
//     history.push('/login');
// }

//  render() {
//    return (
//     <Router>
//     <AppNavbar />
//     <Container>
//       <Row>
//         <Col lg={12} className={"margin-top"}>
//           <Switch>
//             <Route path="/" exact component={Home} />
//             <Route path="/login" exact component={Login} />
//             <Route path="/signup" exact component={Auth} />
//             <Route path="/men" exact component={men} />
//             <Route path="/kids" exact component={kids} />
//             <Route path="/womentypes" exact component={kids} />
//             <Route path="/woman" exact component={women} />
//             <Route path="/adult" exact component={adult} />
//             <Route path="/party" exact component={party} />

//             <Route path="/blouse" exact component={blouse} />
//             <Route path="/saree" exact component={saree} />
//             <Route path="/logout"
//               exact
//               component={() => (
//                 <Login message="User Logged Out Successfully." />
//               )}
//             />
//           </Switch>
//         </Col>
//       </Row>
//     </Container>
//   </Router>
//    );
//  }
// }

// export default App;


import React, { Component } from 'react';
import './App.css';
// import {
//   Route,
//   withRouter,
//   Switch,
//   BrowserRouter
// } from 'react-router-dom';

// import { BrowserRouter as Router } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { getCurrentUser } from './util/APIUtills';
import { ACCESS_TOKEN } from './constants/index';

 
import Login from './Auth/Login/Login';
// import Signup from './Auth/Signup/Auth';
// import Profile from '../user/profile/Profile';
import AppHeader from './common/AppHeader';
import NotFound from './common/NotFound';
import LoadingIndicator from './common/LoadingIndicator';
import PrivateRoute from './util/PrivetRoute';
import Service from './Our Services/ourservices'

import { Layout, notification } from 'antd';
const { Content } = Layout;
 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      isAuthenticated: false,
      isLoading: false
    }
    this.handleLogout = this.handleLogout.bind(this);
    this.loadCurrentUser = this.loadCurrentUser.bind(this);
    this.handleLogin = this.handleLogin.bind(this);

    notification.config({
      placement: 'topRight',
      top: 70,
      duration: 3,
    });    
  }

  loadCurrentUser() {
    this.setState({
      isLoading: true
    });
    getCurrentUser()
    .then(response => {
      this.setState({
        currentUser: response,
        isAuthenticated: true,
        isLoading: false
      });
    }).catch(error => {
      this.setState({
        isLoading: false
      });  
    });
  }

  componentDidMount() {
    this.loadCurrentUser();
  }

  handleLogout(redirectTo="/", notificationType="success", description="You're successfully logged out.") {
    localStorage.removeItem(ACCESS_TOKEN);

    this.setState({
      currentUser: null,
      isAuthenticated: false
    });

    this.props.history.push(redirectTo);
    
    notification[notificationType]({
      message: 'Polling App',
      description: description,
    });
  }

  handleLogin() {
    notification.success({
      message: 'Polling App',
      description: "You're successfully logged in.",
    });
    this.loadCurrentUser();
    this.props.history.push("/");
  }

  render() {
    if(this.state.isLoading) {
      return <LoadingIndicator />
    }
    return (

      

      <Router>
           <AppNavbar />

           {/* <AppHeader isAuthenticated={this.state.isAuthenticated} 
            currentUser={this.state.currentUser} 
            onLogout={this.handleLogout} /> */} 
                <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about_us" exact component={About} />
                <Route path="/men" exact component={men} />
                <Route path="/kids" exact component={kids} />
                <Route path="/womentypes" exact component={kids} />
                <Route path="/woman" exact component={women} />
                <Route path="/adult" exact component={adult} />
                <Route path="/party" exact component={Party} />

                <Route path="/cloths" exact component={Cloths} />


                <Route path="/our_services" exact component={Service} />

                <Route path="/blouse" exact component={blouse} />
                <Route path="/saree" exact component={saree} />
                <Route path="/shirt" exact component={Shirt} />

                <Route path="/login" 
                  render={(props) => <Login onLogin={this.handleLogin} {...props} />}></Route>
                <Route path="/signup" exact component={Auth} />
                
                <Route path="/" 
                  render={(props) => <Party isAuthenticated={this.state.isAuthenticated} currentUser={this.state.currentUser} {...props}  />}>
                </Route>
                <PrivateRoute authenticated={this.state.isAuthenticated} path="/home" component={Home} handleLogout={this.handleLogout}></PrivateRoute>
                <Route component={NotFound}></Route>    
                </Switch>     
        </Router>

    );
  }
}

export default App;

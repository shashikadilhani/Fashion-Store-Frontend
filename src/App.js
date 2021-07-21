import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import './App.css';
import AppNavbar from './AppNavbar';
import Login from './Auth/Login/login';
import Auth from './Auth/Signup/Auth';
import Home from './Home';

 class App extends React.Component  {
 render() {
   return (
    <Router>
    <AppNavbar />
    <Container>
      <Row>
        <Col lg={12} className={"margin-top"}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Auth} />

            <Route path="/logout"
              exact
              component={() => (
                <Login message="User Logged Out Successfully." />
              )}
            />
          </Switch>
        </Col>
      </Row>
    </Container>
  </Router>
   );
 }
}

export default App;

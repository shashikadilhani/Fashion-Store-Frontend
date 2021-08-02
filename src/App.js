import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import './App.css';
import AppNavbar from './AppNavbar';
import Login from './Auth/Login/login';
import Auth from './Auth/Signup/Auth';
import Home from './Home/Home';
import men from './item/men';
import women from './item/women';
import kids from './item/kids';
import adult from './item/adult';
import party from './item/party';

import blouse from './womenitemtypes/blouse';
import saree from './womenitemtypes/saree';


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
            <Route path="/men" exact component={men} />
            <Route path="/kids" exact component={kids} />
            <Route path="/womentypes" exact component={kids} />
            <Route path="/woman" exact component={women} />
            <Route path="/adult" exact component={adult} />
            <Route path="/party" exact component={party} />

            <Route path="/blouse" exact component={blouse} />
            <Route path="/saree" exact component={saree} />
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

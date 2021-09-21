import { BrowserRouter as Router,Switch,Route,withRouter } from 'react-router-dom';
import AppNavbar from './AppNavbar';
import Auth from './Auth/Signup/Signup';
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
import React from 'react';
import './App.css';
import { getCurrentUser } from './util/APIUtills';
import { ACCESS_TOKEN } from './constants/index';
import Login from './Auth/Login/login';
import AppHeader from './common/AppHeader';
import NotFound from './common/NotFound';
import LoadingIndicator from './common/LoadingIndicator';
import PrivateRoute from './util/PrivetRoute';
import Service from './Our Services/ourservices';
import { Layout, notification } from 'antd';
import Orders from './profile/MyOrders';
import Profile from './profile/profile';
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
    this.props.history.push("/home");
  }

  render() {
    if(this.state.isLoading) {
      return <LoadingIndicator />
    }
    return (
     
      <Router>
           <AppNavbar  isAuthenticated={this.state.isAuthenticated} 
            currentUser={this.state.currentUser} 
            onLogout={this.handleLogout}  />

           {/* <AppHeader isAuthenticated={this.state.isAuthenticated} 
            currentUser={this.state.currentUser} 
            onLogout={this.handleLogout} /> */} 
                <Switch>
                <Route exact path="/home"
                render={(props) => <Home isAuthenticated={this.state.isAuthenticated} 
                currentUser={this.state.currentUser} handleLogout={this.handleLogout} {...props} />}>
                </Route>
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

                <Route path="/orders" exact component={Orders} />
                <Route path="/profile" exact component={Profile} />

                <Route path="/login" 
                  render={(props) => <Login onLogin={this.handleLogin} {...props} />}></Route>
                <Route path="/signup" exact component={Auth} />
                
                <Route path="/" 
                  render={(props) => <About isAuthenticated={this.state.isAuthenticated} currentUser={this.state.currentUser} handleLogout={this.handleLogout} {...props}  />}>
                </Route>
                <PrivateRoute authenticated={this.state.isAuthenticated} path="/home" component={Home} handleLogout={this.handleLogout}></PrivateRoute>
                <Route component={NotFound}></Route>    
                </Switch>     
        </Router>

      
    );
  }
}

export default withRouter(App);

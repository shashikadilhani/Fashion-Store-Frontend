import React, { Component } from 'react';
// import { Collapse,Navbar, NavLink } from 'reactstrap';
import './App.css';
import Auth from './Auth/Signup/Auth';
import Login from './Auth/Login/Login';
import Services from './Our Services/ourservices';
import logo from './assets/saree.jpg';
// import './styles/app.scss';
import {
  Collapse,Navbar, NavLink,
    Nav,
    NavbarToggler,
    Dropdown,
    DropdownToggle,
    InputGroupAddon,
    InputGroup,
    Input,
    Form,
    NavItem,
    Button,
    NavbarBrand,Container
  } from "react-bootstrap";
  import { DropdownItem } from 'reactstrap';
import { NavDropdown } from 'react-bootstrap';

export default class AppNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false};
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return(
        <>
          <div className="div">
          <Navbar className="nav1" >
            <NavLink href="/home" exact component={Login} className="fa fa-home home"></NavLink>
            <NavLink href="/login" exact component={Login} className="navitem">Login</NavLink>
            <NavLink href="/signup" exact component={Auth} className = "navitem">Signup</NavLink>
            <NavLink href="/about_us" exact component={Login} className="navitem">AboutUs</NavLink>
            <NavLink href="/our_services" exact component={Services} className="navitem">Our Services</NavLink>
            <NavLink href="/login" exact component={Login} className="navitem">Contact</NavLink>
            <NavItem className="navitem2">Items</NavItem>
            
            <NavDropdown> 
                <DropdownItem>Women</DropdownItem>
                <DropdownItem>Men</DropdownItem>
                <DropdownItem>Kids</DropdownItem>
                <DropdownItem>Adults</DropdownItem>
            </NavDropdown>
            <button onClick="sdff" className="navdiv">ORDER NOW</button> 

            
          </Navbar>
          </div>
          </>
    );
  }
}

 
// import React from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { withRouter } from "react-router";
// import {
//   Navbar,
//   Nav,
//   Dropdown,
//   DropdownToggle,
//   DropdownMenu,
//   InputGroupAddon,
//   InputGroup,
//   Input,
//   Form,
//   NavItem,
//   NavLink,
// } from "reactstrap";
// import cx from "classnames";
// // import Notifications from "../Notifications";
// // import { logoutUser } from "../../actions/user";
// import {
//   toggleSidebar,
//   openSidebar,
//   closeSidebar,
//   changeActiveSidebarItem,
// } from "./actions/navigation";

// import userAvatar from "./assets/saree.jpg";
// import search from "./assets/saree.jpg";
// import notify from "./assets/saree.jpg";
// import lightNotify from "./assets/saree.jpg";
// import messages from "./assets/saree.jpg";
// import lightMessages from "./assets/saree.jpg";
// import arrowUnactive from "./assets/saree.jpg";
// import arrowActive from "./assets/saree.jpg";

// import s from "./Header.module.scss";
 

// class AppNavBar extends React.Component {
//   static propTypes = {
//     // sidebarOpened: PropTypes.bool.isRequired,
//     // sidebarStatic: PropTypes.bool.isRequired,
//     // dispatch: PropTypes.func.isRequired,
//     // location: PropTypes.shape({
//     //   pathname: PropTypes.string,
//     // }).isRequired,
//   };

//   constructor(props) {
//     super(props);

//     this.toggleMenu = this.toggleMenu.bind(this);
//     this.switchSidebar = this.switchSidebar.bind(this);
//     this.toggleNotifications = this.toggleNotifications.bind(this);
//     this.toggleMessages = this.toggleMessages.bind(this);
//     this.toggleAccount = this.toggleAccount.bind(this);
//     this.toggleSidebar = this.toggleSidebar.bind(this);
//     this.doLogout = this.doLogout.bind(this);
//     this.changeArrowImg = this.changeArrowImg.bind(this);
//     this.changeArrowImgOut = this.changeArrowImgOut.bind(this);

//     this.state = {
//       menuOpen: false,
//       notificationsOpen: false,
//       messagesOpen: false,
//       accountOpen: false,
//       notificationsTabSelected: 1,
//       focus: false,
//       showNewMessage: false,
//       hideMessage: true,
//       run: true,
//       arrowImg: arrowActive
//     };
//   }

//   toggleFocus = () => {
//     this.setState({ focus: !this.state.focus });
//   };

//   toggleNotifications() {
//     this.setState({
//       notificationsOpen: !this.state.notificationsOpen,
//     });
//   }

//   toggleMessages() {
//     this.setState({
//       messagesOpen: !this.state.messagesOpen,
//     });
//   }

//   toggleAccount() {
//     this.setState({
//       accountOpen: !this.state.accountOpen,
//     });
//   }

//   doLogout() {
//     // this.props.dispatch(logoutUser());
//   }

//   changeArrowImg() {
//     this.setState({
//       arrowImg: arrowUnactive
//     })
//   }

//   changeArrowImgOut() {
//     this.setState({
//       arrowImg: arrowActive
//     })
//   }

//   // collapse/uncolappse
//   switchSidebar() {
//     // if (this.props.sidebarOpened) {
//     //   this.props.dispatch(closeSidebar());
//     //   this.props.dispatch(changeActiveSidebarItem(null));
//     // } else {
//     //   const paths = this.props.location.pathname.split("/");
//     //   paths.pop();
//     //   this.props.dispatch(openSidebar());
//     //   this.props.dispatch(changeActiveSidebarItem(paths.join("/")));
//     // }
//   }

//   // tables/non-tables
//   toggleSidebar() {
//     // this.props.dispatch(toggleSidebar());
//     // if (this.props.sidebarStatic) {
//     //   localStorage.setItem("staticSidebar", "false");
//     //   this.props.dispatch(changeActiveSidebarItem(null));
//     // } else {
//     //   localStorage.setItem("staticSidebar", "true");
//     //   const paths = this.props.location.pathname.split("/");
//     //   paths.pop();
//     //   this.props.dispatch(changeActiveSidebarItem(paths.join("/")));
//     // }
//   }

//   toggleMenu() {
//     this.setState({
//       menuOpen: !this.state.menuOpen,
//     });
//   }
//   render() {
//     const { focus } = this.state;
//     const { openUsersList } = this.props;

//     const user = JSON.parse(localStorage.getItem("user") || '{}');

//     const firstUserLetter = (user.name || user.email || "P")[0].toUpperCase();

//     return (
//       <Navbar
//       direction='row'
//         className={`${s.root} d-print-none`}
//         style={{ zIndex: !openUsersList ? 100 : 0, backgroundColor: '#323232' }}
//       >
//         <NavItem className={`${s.toggleSidebarNav} d-md-none d-flex mr-2`}>
//           <NavLink
//             className="ml-2 pr-4 pl-3"
//             id="toggleSidebar"
//             onClick={this.toggleSidebar}
//           >
//             <i
//               className={`la la-bars`}
//               style={{ color: "#000" }}
//             />
//           </NavLink>
//         </NavItem>
//         <NavItem className={"d-md-down-block d-md-none ml-auto"}>
//           <img
//             src={search}
//             alt="search"
//             width="24px"
//             height="23px"
//             style={{ marginRight: 12 }}
//           />
//         </NavItem>
//         <button className={`btn btn-bordered ml-auto ${s.fullVersionBtn}`} onMouseOver={() => this.changeArrowImg()} onMouseLeave={() => this.changeArrowImgOut()}>
//           <a href="https://flatlogic.com/templates/one-react-template/demo" target={"_black"}>Unlock Full Version<img src={this.state.arrowImg} alt="" style={{marginLeft: 14}}/></a></button>
//         <Form className={`d-md-down-none`} inline>
//           <InputGroup
//             onFocus={this.toggleFocus}
//             onBlur={this.toggleFocus}
//             className={`${cx("input-group-no-border", { focus: !!focus })}`}
//           >
//             <Input
//               id="search-input"
//               placeholder="Search"
//               className={`${cx({ focus: !!focus})} ${s.headerSearchInput}`}
//               style={{ borderBottomLeftRadius: 4, borderTopLeftRadius: 4 }}
//             />
//             <InputGroupAddon addonType={"prepend"}>
//               <img
//                 src={search}
//                 alt="search"
//                 width="24px"
//                 height="23px"
//                 style={{ marginRight: 12 }}
//               />
//             </InputGroupAddon>
//           </InputGroup>
//         </Form>
//         <Nav>
//           <Dropdown
//             nav
//             isOpen={this.state.notificationsOpen}
//             toggle={this.toggleNotifications}
//             id="basic-nav-dropdown"
//             className={`${s.notificationsMenu}`}
//           >
//             <DropdownToggle
//               nav
//               className={
//                 "text-white"
//               }
//               style={{ marginLeft: 20 }}
//             >
//               {this.state.notificationsOpen ? (
//                 <img
//                   src={lightNotify}
//                   alt="notify"
//                   width="24px"
//                   height={"24px"}
//                 />
//               ) : (
//                 <>
//                   <img src={notify} alt="notify" width="24px" height={"24px"} />
//                   <i
//                     className={`fa fa-circle text-danger mb-2 ${s.circleStyle}`}
//                   />
//                 </>
//               )}
//             </DropdownToggle>
//             <DropdownMenu
//               right
//               className={`${s.notificationsWrapper} py-0 animated animated-fast fadeInUp`}
//             >
//               {/* <Notifications /> */}
//             </DropdownMenu>
//           </Dropdown>
//           <Dropdown
//             isOpen={this.state.messagesOpen}
//             toggle={this.toggleMessages}
//             nav
//             className={`${s.notificationsMenu}`}
//           >
//             <DropdownToggle
//               nav
//               className={"text-white"}
//               style={{ marginLeft: 20 }}
//             >
//               {this.state.messagesOpen ? (
//                 <img
//                   src={lightMessages}
//                   alt="notify"
//                   width="24px"
//                   height={"24px"}
//                 />
//               ) : (
//                 <>
//                   <img
//                     src={messages}
//                     alt="email"
//                     width="24px"
//                     height={"24px"}
//                   />
//                   <i
//                     className={`fa fa-circle text-success mb-2 ${s.emailStyle}`}
//                   />
//                 </>
//               )}
//             </DropdownToggle>
//             <DropdownMenu
//               right
//               className={`${s.notificationsWrapper} py-0 animated animated-fast fadeInUp`}
//             >
//               {/* <Notifications notificationsTabSelected={2} /> */}
//             </DropdownMenu>
//           </Dropdown>
//           <Dropdown nav className={`${s.notificationsMenu}`} isOpen={this.state.accountOpen}
//                     toggle={this.toggleAccount}>
//             <DropdownToggle
//               nav
//               className={
//                 "text-white"
//               }
//               style={{ marginLeft: 20 }}
//             >
//               <span
//                 className={`${s.avatar} rounded-circle thumb-sm float-left mr-2`}
//               >
//                 {user.avatar || user.email === "admin@flatlogic.com" ? (
//                   <img src={user.avatar || userAvatar} alt="..." />
//                 ) : (
//                   <span>{firstUserLetter}</span>
//                 )}
//               </span>
//             </DropdownToggle>
//             <DropdownMenu
//                 right
//                 className={`${s.notificationsWrapper} py-0 animated animated-fast fadeInUp`}
//             >
//               {/* <Notifications notificationsTabSelected={4} /> */}
//             </DropdownMenu>
//           </Dropdown>
//         </Nav>
//       </Navbar>
//     );
//   }
// }

// function mapStateToProps(store) {
//   return {
//     // sidebarOpened: store.navigation.sidebarOpened,
//     // sidebarStatic: store.navigation.sidebarStatic,
//   };
// }

// export default withRouter(connect(mapStateToProps)(AppNavBar));

import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './styles1.css';
import './navbar.css';
import {
  withRouter 
} from "react-router-dom";

class Navbar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <MDBNavbar className ="color-nav" dark expand="xl" scrolling fixed="top">
        <MDBNavbarBrand>
        <div className="intro-button intro-button1 ">
          <strong className="white-text">Event Manager</strong></div>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem active>
            <div className="intro-button intro-button1 ">
            <button
      className="btnN"
      onClick={()=> this.props.history.push("/")}
    >
      Home
    </button></div>
            </MDBNavItem>
            <MDBNavItem>
            <div className="intro-button intro-button1">
              <button
      className="btnN"
      onClick={()=> this.props.history.push("/Events")}
    >
      Events
    </button>
              </div>
            </MDBNavItem>
            <MDBNavItem><div className="intro-button intro-button1">
            <button
      className="btnN"
      onClick={()=> this.props.history.push("/contact")}>Contact Us</button> </div>
            </MDBNavItem>
            <MDBNavItem><div className="intro-button intro-button1">
            <button
      className="btnN"
      onClick={()=> this.props.history.push("/LoginM")}>Login</button> </div>
            </MDBNavItem>
          </MDBNavbarNav>
          </MDBCollapse>
      </MDBNavbar>
          </Router>
    );
  }
}

//export default ;
export default withRouter(Navbar);

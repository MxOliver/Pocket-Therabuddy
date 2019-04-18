import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink } from "mdbreact";

class NavBar extends Component {
    constructor(props){
        super();

    }

    render() {
        return (
            <MDBNavbar color="teal lighten-3" dark expand="md">
            <MDBNavbarBrand>
                <strong className="black-text">Pocket Therabuddy</strong>
            </MDBNavbarBrand>
            
            <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/" className="black-text">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/moodtracker" className="black-text">MoodTracker</MDBNavLink>
            </MDBNavItem>
            </MDBNavbarNav>
            </MDBNavbar>
        )
    }

};

export default NavBar;
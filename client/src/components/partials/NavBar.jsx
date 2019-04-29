import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink } from "mdbreact";
import { connect } from 'react-redux';

function mapStateToProps(state) {
  const { authentication } = state;
  const { user } = authentication;
  return {
      user
  };
}

class ConnectedNavBar extends Component {
    constructor(props){
        super();

    }

    render() {
      const { user } = this.props;

      let dash = null;
      let tracker = null;

      if(user){
        dash = (
          <MDBNavItem>
              <MDBNavLink to="/dashboard" className="black-text">Dashboard</MDBNavLink>
            </MDBNavItem>
        )

        tracker = (
          <MDBNavItem>
            <MDBNavLink to="/moodtracker" className="black-text">MoodTracker</MDBNavLink>
          </MDBNavItem>
        )
      }

        return (
            <MDBNavbar color="teal lighten-3" dark expand="md">
            <MDBNavbarBrand>
                <strong className="black-text">Pocket Therabuddy</strong>
            </MDBNavbarBrand>
            
            <MDBNavbarNav left>
            <MDBNavItem>
              <MDBNavLink to="/" className="black-text">Home</MDBNavLink>
            </MDBNavItem>
            {dash}
            {tracker}
            </MDBNavbarNav>
            </MDBNavbar>
        )
    }

};

const NavBar = connect(mapStateToProps)(ConnectedNavBar);

export default NavBar;
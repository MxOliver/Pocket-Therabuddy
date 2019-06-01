import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import { connect } from 'react-redux';

function mapStateToProps(state) {
  const { authentication } = state;
  const { message, type } = state.alert;
  const { user } = authentication;
  return {
      user,
      message,
      type
  };
}

class ConnectedNavBar extends Component {
    constructor(props){
        super();

        this.state = {
          collapse: false
        }

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
      this.setState({
        collapse: !this.state.collapse
      })
    }


    render() {
      const { user, type } = this.props;
      let tracker = null;
      let habitTracker = null;
      let combinedTracker = null;
      let dash = null;


      if(user && type !== 'alert-danger'){
        dash = (
            <MDBNavItem>
              <MDBNavLink to="/dashboard" className="black-text">Dashboard</MDBNavLink>
            </MDBNavItem>
        )

        tracker = (
          <MDBNavItem>
              <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <span className="mr-2">MoodTracker</span>
              </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                      <MDBNavLink to="/moodtracker" className="black-text">Main</MDBNavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                      <MDBNavLink to="/moodtracker/add" className="black-text">Add Mood</MDBNavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                      <MDBNavLink to="/moodtracker/history" className="black-text">History</MDBNavLink>
                  </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>
        )

        habitTracker = (
          <MDBNavItem>
              <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <span className="mr-2">HabitTracker</span>
              </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                      <MDBNavLink to="/habittracker" className="black-text">Main</MDBNavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                      <MDBNavLink to="/habittracker/add" className="black-text">Add Habit</MDBNavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                      <MDBNavLink to="/habittracker/history" className="black-text">History</MDBNavLink>
                  </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>
        )

        combinedTracker = (
          <MDBNavItem>
                <MDBNavLink to="/trackerhistory" className="white-text">Moods & Habits History</MDBNavLink>
            </MDBNavItem>
        )
      }

        return (
            <MDBNavbar style={{background: "#ef6c00"}} dark expand="md">
                <MDBNavbarBrand>
                  <strong className="black-text">Pocket Therabuddy</strong>
              </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.onClick} />
            <MDBCollapse isOpen={this.state.collapse} navbar>
            <MDBNavbarNav left>
            <MDBNavItem>
              <MDBNavLink to="/" className="white-text">Home</MDBNavLink>
            </MDBNavItem>
            {tracker}
            {habitTracker}
            {combinedTracker}
            </MDBNavbarNav>
            </MDBCollapse>
         
            </MDBNavbar>
        )
    }

};

const NavBar = connect(mapStateToProps)(ConnectedNavBar);

export default NavBar;
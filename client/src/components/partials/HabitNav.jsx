import React, {Component} from 'react';
import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink } from "mdbreact";

class HabitNav extends Component {


    render() {
        const textStyle = {
            color: "#b71c1c"
        }
    
        const paddingStyle = {
            marginBottom: '35px'
        }

        const navItemStyle = {
            paddingRight: '15px'
        }

    return (
        <div id="mood-nav">
        <MDBNavbar color="red lighten-4" flex-direction="row" margin="35px" style={paddingStyle}>
        <MDBNavbarNav left flex-direction="row">
            <MDBNavItem style={navItemStyle}>
                <MDBNavLink to="/habittracker" style={textStyle}>Main</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem style={navItemStyle}>
                <MDBNavLink to="/habittracker/add" style={textStyle}>Add Habit</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem style={navItemStyle}>
                <MDBNavLink to="/habittracker/history" style={textStyle}>History</MDBNavLink>
            </MDBNavItem>
        </MDBNavbarNav>
        </MDBNavbar>
        </div>
    );
    }
};

export default HabitNav;
import React, {Component} from 'react';
import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink } from "mdbreact";

class MoodNav extends Component {
    constructor(props){
        super();


    }

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
                <MDBNavLink to="/moodtracker" style={textStyle}>Main</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem style={navItemStyle}>
                <MDBNavLink to="/moodtracker/add" style={textStyle}>Add Mood</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem style={navItemStyle}>
                <MDBNavLink to="/moodtracker/history" style={textStyle}>History</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem style={navItemStyle}>
                <MDBNavLink to="/moodtracker/notes" style={textStyle}>Mood Notes</MDBNavLink>
            </MDBNavItem>
        </MDBNavbarNav>
        </MDBNavbar>
        </div>
    );
    }
};

export default MoodNav;
import React from "react";
import {Link} from "react-router-dom";
import HabitNav from '../partials/HabitNav';
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardBody, MDBCardTitle } from "mdbreact";

const HabitLanding = () => {

    const pStyle = {
        color: 'teal lighten-3'
    } 
    
    const buttonStyle = {
        color: 'red lighten-3',
        text: '#b71c1c'
    }

    return (
        <div className="content">
        <HabitNav />
        <MDBContainer className="mt-5 text-center">
            <MDBRow>
            <MDBCol>
            <MDBJumbotron>
                <MDBCardBody>
                    <MDBCardTitle className="h2">
                        Habit Tracker
                    </MDBCardTitle>
                    <p className="my-4 font-weight-bold" style={pStyle}>
                    Keep track of your important daily habits like sleep, time outside, or time with friends.
                    Add custom habits that are important to you, view your progress over time, 
                    and see your combined habit and mood history to find insights about how your actions effect your mood.
                    </p>
                    <div className="pt-2">
                    <Link to="/habittracker/add">
                    <MDBBtn
                    style={buttonStyle}>
                    Add Habit <MDBIcon icon="bed" />
                    </MDBBtn>
                    </Link>

                    <Link to="/habittracker/history">
                    <MDBBtn
                    outline
                    color="red lighten-3">
                     View History <MDBIcon icon="chart-line" />
                    </MDBBtn>
                    </Link>
                    </div>
                    <div className="pt-2 text-center">
                    <MDBBtn href="/trackerhistory" gradient="purple" className="white-text">Moods & Habits History <MDBIcon color="white" icon="chart-area" /></MDBBtn>
                    </div>
                </MDBCardBody>
            </MDBJumbotron>
            </MDBCol>
            </MDBRow>
        </MDBContainer>
        </div>
    )
}

export default HabitLanding;
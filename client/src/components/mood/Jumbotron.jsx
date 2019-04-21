import React from "react";
import {Link} from "react-router-dom";
import HistoryNav from '../partials/HistoryNav';
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardBody, MDBCardTitle } from "mdbreact";

const MoodJumbotron = () => {

  const pStyle = {
      color: 'teal lighten-3'
  } 
  
  const buttonStyle = {
      color: 'red lighten-3',
      text: '#b71c1c'
  }

  return (
    <div className="content">
    <HistoryNav />
    <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron>
            <MDBCardBody>
              <MDBCardTitle className="h2">
                Mood Tracker
              </MDBCardTitle>
              <p className="my-4 font-weight-bold" style={pStyle}>
                Track your daily moods and view your history to find patterns.
              </p>
              <div className="pt-2">
                <Link to="/moodtracker/add">
                <MDBBtn
                  style={buttonStyle}>
                  Add Mood <MDBIcon far icon="smile-beam" />
                </MDBBtn>
                </Link>

                <Link to="/moodtracker/history">
                <MDBBtn
                  outline
                  color="red lighten-3"
                >
                  View History <MDBIcon icon="chart-line" />
                </MDBBtn>
                </Link>

              </div>
            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  )
}

export default MoodJumbotron;

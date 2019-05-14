import React from "react";
import {Link} from "react-router-dom";
import HistoryNav from '../partials/HistoryNav';
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardBody, MDBCardTitle } from "mdbreact";

const MoodJumbotron = () => {

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
              <p className="my-4 font-weight-bold" style={{color: 'teal lighten-3'}}>
                Track your daily moods and view your history to find patterns. 
                You can also see your combined habit and mood history to find insights about how your actions effect your mood.
              </p>
              <div className="pt-2">
                <Link to="/moodtracker/add">
                <MDBBtn
                  color="default">
                  Add Mood <MDBIcon far icon="smile-beam" />
                </MDBBtn>
                </Link>

                <Link to="/moodtracker/history">
                <MDBBtn
                  outline
                  color="red"
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

import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardBody, MDBCardTitle } from "mdbreact";


class LandingPage extends Component {
    constructor(props){
        super();


    }

    render() {
      const pStyle = {
        color: 'teal lighten-3'
    } 
    
    const buttonStyle = {
        color: 'red lighten-3',
        text: '#b71c1c'
    }

        return (
              <MDBContainer className="mt-5 text-center">
                <MDBRow>
                  <MDBCol>
                    <MDBJumbotron>
                      <MDBCardBody>
                        <MDBCardTitle className="h2">
                          Welcome to Your Pocket Thera-buddy
                        </MDBCardTitle>
                        <p className="my-4 font-weight-bold" style={pStyle}>
                        I'm here to help you keep track of your moods and daily habits, remind you of your favorite coping resources, and give you a spot to reframe your negative thoguhts.
                        </p>
                        <div className="pt-2">
                          <Link to="/sign_up">
                          <MDBBtn
                            style={buttonStyle}>
                            Sign Up <MDBIcon icon="user-circle" />
                          </MDBBtn>
                          </Link>

                          <Link to="/sign_in">
                          <MDBBtn
                            outline
                            color="red lighten-3"
                          >
                            Sign In <MDBIcon far icon="user-circle" />
                          </MDBBtn>
                          </Link>
                          
                        </div>
                      </MDBCardBody>
                    </MDBJumbotron>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
        )
    }
}

export default LandingPage;



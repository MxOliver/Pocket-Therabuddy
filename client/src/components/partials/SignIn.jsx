import React from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBBtn,
    MDBInput
} from "mdbreact";

const SignInForm = () => {
    return (
        <MDBContainer id="user-form">
          <MDBRow>
            <MDBCol md="6">
              <MDBCard>
                <MDBCardBody>
                  <form>
                    <p className="h4 text-center py-4">Sign In</p>
                    <div className="grey-text">
                      <MDBInput
                        label="Your name"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                      />
                      <MDBInput
                        label="Your email"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                      />
                      <MDBInput
                        label="Your password"
                        group
                        type="password"
                        validate
                      />
                    </div>
                    <div className="text-center py-4 mt-3">
                      <MDBBtn color="red lighten-3" type="submit">
                        Sign In
                      </MDBBtn>
                    </div>
                  </form>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      );
  };
  
export default SignInForm;
import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBBtn,
    MDBInput
} from "mdbreact";

function mapStateToProps(state){
  return {
    user: state.user
  }
}


class ConnectedSignIn extends Component {
  constructor(props){
    super();

    this.state = {
      name: '',
      email: '',
      password: '',
      response: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e){
    e.preventDefault();
    const checkUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };
    this.postApi(checkUser);
  }

  postApi = async (checkUser) => {
    const response = await fetch('/api/sign_in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: checkUser })
    });
    const body = await response.text();
    console.log("RESPONSE " + body);
  }

  render() {

    return (
      <MDBContainer id="user-form">
        <MDBRow>
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <form onSubmit={this.handleSubmit}>
                  <p className="h4 text-center py-4">Sign In</p>
                  <div className="grey-text">
                    <MDBInput
                      label="Your name"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      name="name"
                      onChange={this.handleChange}
                    />
                    <MDBInput
                      label="Your email"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                      name="email"
                      onChange={this.handleChange}
                    />
                    <MDBInput
                      label="Your password"
                      group
                      type="password"
                      validate
                      name="password"
                      onChange={this.handleChange}
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
  }
}

const SignInForm = connect(mapStateToProps)(ConnectedSignIn);
  
export default SignInForm;
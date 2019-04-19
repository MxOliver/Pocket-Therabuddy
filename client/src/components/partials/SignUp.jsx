import React, { Component } from 'react';
import { addUser } from '../../actions/index';
import uuidv1 from 'uuid';
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
import { stringify } from 'querystring';

function mapDispatchToProps(dispatch){
  return {
      addUser: user => dispatch(addUser(user))
  }
}

class ConnectedUserForm extends Component {
  constructor(props){
    super();

    this.state = {
      email: '',
      name: '',
      password: '',
      passwordConfirmation: '',
      response: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(e){
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e){
    e.preventDefault();
    const id = uuidv1();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      passwordConfirmation: this.state.passwordConfirmation
    }
    this.props.addUser({ newUser, id });
    this.setState({ name: '', email: '', password: '', passwordConfirmation: '' });
    this.postApi(newUser);
  }

  postApi = async (newUser) => {
    const response = await fetch('/api/sign_up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: newUser })
    });
    const body = await response.text();
    console.log("RESPONSE " + body);
  }

  render() {
    return (
      <form className="signUpForm" onSubmit={this.handleSubmit}>
      <MDBContainer id="user-form">
        <MDBRow>
          <MDBCol md="6">
            <MDBCard>
                <MDBCardBody>
                  <form>
                    <p className="h4 text-center py-4">Sign up</p>
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
                        label="Password"
                        group
                        type="password"
                        validate
                        name="password"
                        onChange={this.handleChange}
                      />
                       <MDBInput
                        label="Password Confirmation"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        name="passwordconfirmation"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="text-center py-4 mt-3">
                      <MDBBtn color="red lighten-3" type="submit">
                        Sign Up
                      </MDBBtn>
                    </div>
                  </form>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        </form>
    );
  }
}

const SignUpForm = connect(null, mapDispatchToProps)(ConnectedUserForm);
  
export default SignUpForm;
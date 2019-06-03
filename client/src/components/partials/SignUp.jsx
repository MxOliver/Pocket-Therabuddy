import React, { Component } from 'react';
import { userActions } from '../../actions/userActions';
import {Link} from "react-router-dom";
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


function mapStateToProps(state) {
  return {
    registration: state.registration
  }
}


class ConnectedUserForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      user: {
        email: '',
        name: '',
        password: '',
        passwordConfirmation: '',
      },
      loggedIn: false,
      submitted: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(e){
    e.preventDefault();
    const { name, value } = e.target;
    const { user } = this.state;
    this.setState({ 
      user: {
        ...user,
        [name]: value
      }
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({ submitted: true });
    const { user } = this.state;
    const { dispatch } = this.props;
    if(user.email && user.password && user.name){
      dispatch(userActions.register(user));
    }
  }

  render() {

    const { user, submitted } = this.state;

    return (
      <MDBContainer id="user-form" className="d-flex justify-content-center">
        <MDBRow>
          <MDBCol>
            <MDBCard>
                <MDBCardBody>
                <form className="signUpForm" onSubmit={this.handleSubmit}>
                    <p className="h4 text-center py-4">Sign up</p>
                    <div className={'form-group' + (submitted && !user.name ? ' has-error' : '')}>
                      <MDBInput
                        label="Your name"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        name="name"
                        className="form-control"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className={'form-group' + (submitted && !user.email ? ' has-error' : '')}>
                      <MDBInput
                        label="Your email"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                        name="email"
                        className="form-control"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                      <MDBInput
                        label="Password"
                        group
                        type="password"
                        validate
                        name="password"
                        className="form-control"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group">
                       <MDBInput
                        label="Password Confirmation"
                        group
                        type="password"
                        validate
                        error="wrong"
                        success="right"
                        name="passwordConfirmation"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="text-center py-4 mt-3">
                      <MDBBtn color="red lighten-3" type="submit">
                        Sign Up
                      </MDBBtn>
                      <Link to="/sign_in" className="btn btn-link">Already a user? Sign In</Link>
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

const SignUpForm = connect(mapStateToProps)(ConnectedUserForm);
  
export default SignUpForm;
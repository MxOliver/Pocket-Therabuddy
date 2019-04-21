import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import { userActions } from '../../actions/userActions';

import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBBtn,
    MDBInput
} from "mdbreact";


class ConnectedSignIn extends Component {
  constructor(props){
    super(props);


    this.state = {
      user: {
        email: '',
        password: ''
      },
      response: '',
      loggedIn: false,
      submitted: false
    };

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
    if( user.email && user.password ) {
      dispatch(userActions.login(user))
    } 
  }

  render() {
    const { loggingIn } = this.props;
    const { email, password, submitted } = this.state;

    return (
      <MDBContainer id="user-form">
        <MDBRow>
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <form onSubmit={this.handleSubmit} className="grey-text">
                  <p className="h4 text-center py-4">Sign In</p>
                  <div className='form-group'>
                    <MDBInput
                      label="name"
                      className="form-control"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      name="name"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className={"form-group" + (submitted && !email ? ' has-error' : '')}>
                    <MDBInput
                      label="email"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                      name="email"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className={"form-group" + (submitted && !password ? ' has-error' : '')} >
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
                    { loggingIn }
                    <Link to="/sign_up" className="btn btn-link">Sign Up</Link>
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

function mapStateToProps(state){
  const { loggingIn } = state.authentication;
  return {
    loggingIn
  };
}

const SignInForm = connect(mapStateToProps)(ConnectedSignIn);
  
export default SignInForm;
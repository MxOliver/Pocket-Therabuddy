import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import { userActions } from '../actions/userActions';
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardBody, MDBCardTitle } from "mdbreact";


function mapStateToProps(state) {
  const { authentication } = state;
  const { user } = authentication;
  return {
      user
  };
}

class ConnectedLandingPage extends Component {
    constructor(props){
        super();

        this.handleLogOut = this.handleLogOut.bind(this);
    }

    handleLogOut(e){
      e.preventDefault();
      const { dispatch } = this.props;
      dispatch(userActions.logout());
    }

    componentDidMount(){
      console.log(process.env.REACT_APP_API_URL)
    }

    render() {

      const { user } = this.props

      const pStyle = {
        color: 'teal lighten-3'
    } 


      let buttonComponent = null;

      if(user){
        buttonComponent = (
          <div className="pt-2">
          <MDBBtn outline color="red lighten-3" onClick={this.handleLogOut}>
          Log Out
          </MDBBtn>
          </div>
        )
      } else {
        buttonComponent = (
          <div className="pt-2">
          <Link to="/sign_up">
          <MDBBtn
          style={{background: '#0277bd'}}>
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
        ) 
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
                        { buttonComponent }
                      </MDBCardBody>
                    </MDBJumbotron>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
        )
    }
}

const LandingPage = connect(mapStateToProps)(ConnectedLandingPage);

export default LandingPage;



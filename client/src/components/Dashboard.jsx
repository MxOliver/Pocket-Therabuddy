import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MDBContainer, MDBRow } from 'mdbreact';

function mapStateToProps(state) {
    const { user } = state.authentication;
    return {
        user
    };
}

class ConnectedDashboard extends Component {
    constructor(props){
        super();
        
    }

    render() {
        const { user } = this.props;

        return (
            <MDBContainer className="mt-5 text-center">
            <MDBRow>
                <h1>Welcome to your dashboard {user.response.name} </h1>
            </MDBRow>
            </MDBContainer>
        )
    }
}

const Dashboard = connect(mapStateToProps)(ConnectedDashboard);

export default Dashboard;

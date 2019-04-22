import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MDBContainer, MDBRow } from 'mdbreact';
import { userActions } from '../actions/userActions';


class ConnectedDashboard extends Component {
    constructor(props){
        super();
        
    }

    componentDidMount() {
        this.props.dispatch(userActions.getCurrentUser());
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

function mapStateToProps(state) {
    const { authentication } = state;
    const { user } = authentication;
    return {
        user
    };
}

const Dashboard = connect(mapStateToProps)(ConnectedDashboard);

export default Dashboard;

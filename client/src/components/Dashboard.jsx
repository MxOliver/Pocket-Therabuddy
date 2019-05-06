import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MDBContainer, MDBRow, MDBCard, MDBCardBody, MDBCardHeader } from 'mdbreact';
import { moodActions } from '../actions/moodActions';

function mapStateToProps(state) {
    const { user } = state.authentication;
    const { notes, notesFetched } = state.fetchMoods;
    return {
        user,
        notes,
        notesFetched
    };
}

class ConnectedDashboard extends Component {
    constructor(props){
        super();
        
    }

    componentDidMount(){
        const { dispatch, user } = this.props;
        dispatch(moodActions.getMoodNotes(user.response))
    }

    render() {
        const { user, notes } = this.props;
        
        return (
            <div className="dash-content">
                <MDBContainer className="mt-5 text-center">
                    <MDBCard>
                        <MDBCardHeader style={{background: '#ef9a9a'}}/>
                        <MDBCardBody>
                            <h4 className="font-weight-bold mb-3">{user.response.name}</h4>
                        </MDBCardBody>
                    </MDBCard>
                    </MDBContainer>
            </div>
        )
    }
}

const Dashboard = connect(mapStateToProps)(ConnectedDashboard);

export default Dashboard;

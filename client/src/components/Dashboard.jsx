import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MDBContainer, MDBCard, MDBCardBody, MDBCardHeader } from 'mdbreact';
import { moodActions } from '../actions/moodActions';
import MoodNotes from './mood/MoodNotes';
import HabitNotes from './habit/HabitNotes';

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


    componentDidMount(){
        const { dispatch, user } = this.props;
        dispatch(moodActions.getMoodNotes(user.response))
    }

    render() {
        const { user } = this.props;
        
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
                    <MDBContainer>
                        <MDBCardHeader className="text-left" style={{ background: "#ffcccb"}}>
                            Mood Notes
                        </MDBCardHeader>
                    <MoodNotes />
                        <MDBCardHeader className="text-left" style={{ background: "#ef9a9a"}}>
                            Habit Notes
                        </MDBCardHeader>
                        <HabitNotes />
                    </MDBContainer>
            </div>
        )
    }
}

const Dashboard = connect(mapStateToProps)(ConnectedDashboard);

export default Dashboard;

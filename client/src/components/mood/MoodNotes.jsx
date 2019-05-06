import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardHeader } from 'mdbreact';
import { connect } from 'react-redux';
import { moodActions } from '../../actions/moodActions';

function mapStateToProps(state) {
    const { user } = state.authentication;
    const { notes, notesFetched } = state.fetchMoods;
    return {
        user,
        notes,
        notesFetched
    };
}

class ConnectedMoodNotes extends Component {

    componentDidMount(){
        const { dispatch, user } = this.props;
        dispatch(moodActions.getMoodNotes(user.response))
    }

    render() {
        const { notes } = this.props;

        for(let i = 0; i < notes.length; i++){
            Object.values(notes[i]).forEach(e => {
                return (
                    <MDBRow>
                    <MDBCol>
                        <MDBContainer>
                            <MDBCard className="mt-3">
                            <MDBCardHeader>
                                Notes for:
                                </MDBCardHeader>
                                    <MDBCardBody>
                                   <p>{e['moodnotes']}</p>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBContainer>
                    </MDBCol>
                    </MDBRow>
                )
            })
        }
    }
}

const MoodNotes = connect(mapStateToProps)(ConnectedMoodNotes);

export default MoodNotes;
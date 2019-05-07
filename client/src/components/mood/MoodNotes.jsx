import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardGroup } from 'mdbreact';
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

        let moodNotesComponent = [];

        for(let i in notes){
            notes[i].forEach(e => {
                moodNotesComponent.push(
                    <MDBCard>
                            <MDBCardBody key={e.createdAt}>
                            <MDBCardTitle className="text-left text-capitalize" tag="h5">{e.moodselect}</MDBCardTitle>
                            <MDBCardText>{e.moodnotes}</MDBCardText>
                            <MDBCardText small muted>
                            {new Date(Date.parse(e.createdAt)).toDateString()}
                            </MDBCardText>                                     
                            </MDBCardBody>
                    </MDBCard>

                )       
            })
        }
        


        return (
           <MDBCardGroup>
               {moodNotesComponent}
           </MDBCardGroup>
        )
    }
}

const MoodNotes = connect(mapStateToProps)(ConnectedMoodNotes);

export default MoodNotes;
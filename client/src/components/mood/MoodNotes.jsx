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

    handleDelete(e){
        const { value } = e.target;
        const { dispatch } = this.props;
        dispatch(moodActions.removeNote(value));
    }

    render() {
        const { notes } = this.props;

        let moodNotesComponent = [];

        if(notes){
            for(let i in notes){
                notes[i].forEach(e => {
                    if(e.moodnotes.length > 1){
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
                    }     
                })
            }
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
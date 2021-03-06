import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardGroup } from 'mdbreact';
import { habitActions } from '../../actions/habitActions';

function mapSateToProps(state) {
    const { user } = state.authentication;
    const { habitNotes, fetchedNotes } = state.fetchHabits;
    return {
        user,
        habitNotes,
        fetchedNotes
    }
}

class ConnectedHabitNotes extends Component {

    componentDidMount(){
        const { dispatch, user} = this.props;
        dispatch(habitActions.getHabitNotes(user.response));
    }

    handleDelete(e){
        const { value } = e.target;
        const { dispatch } = this.props;
        dispatch(habitActions.removeNote(value));
    }

    render() {
        const { habitNotes } = this.props;

        let habitNotesComponent = [];

        if(habitNotes){
            console.log(habitNotes);
            for(let i in habitNotes){
     
                habitNotes[i].forEach(e => {
                    if(e.notes.length > 1){
                        habitNotesComponent.push(
                            <MDBCard key={e.id}>
                                <MDBCardBody key={e.createdAt}>
                                <MDBCardTitle className="text-left text-capitalize" tag="h5">{e.type}</MDBCardTitle>
                                <MDBCardText>{e.notes}</MDBCardText>
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
                {habitNotesComponent}
            </MDBCardGroup>
        )
    }
}

const HabitNotes = connect(mapSateToProps)(ConnectedHabitNotes);

export default HabitNotes;
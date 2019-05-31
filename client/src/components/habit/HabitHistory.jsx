import React, { Component } from 'react';
import { connect } from 'react-redux';
import { habitActions } from '../../actions/habitActions';
import {  MDBContainer } from 'mdbreact';
import FilterData from './FilterData';

function mapStateToProps(state) {
    const { user } = state.authentication;
    const { habits } = state.fetchHabits;
    return {
        user,
        habits
    }
}

class ConnectedHabitHistory extends Component {
    constructor(props){
        super();

        this.state = {
            loaded: false,
            data: ''
        }

    }

    componentDidMount(){
        const { dispatch, user } = this.props;
        dispatch(habitActions.fetchHistory(user.response));
    }

    render() {

        const { habits } = this.props;

        return (
            <div className="content">
           
            <FilterData data={habits} />

            </div>
        )
    }

}

const HabitHistory = connect(mapStateToProps)(ConnectedHabitHistory);

export default HabitHistory;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { habitActions } from '../../actions/habitActions';
import {  MDBContainer } from 'mdbreact';
import HabitNav from '../partials/HabitNav';
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
        const navStyle = {
            marginBottom: '35px'
        }

        const { habits } = this.props;

        return (
            <div className="content">
            <HabitNav style={navStyle} />
            <div className="container">
           <MDBContainer>
            <FilterData data={habits} />
            </MDBContainer>
            </div>
            </div>
        )
    }

}

const HabitHistory = connect(mapStateToProps)(ConnectedHabitHistory);

export default HabitHistory;
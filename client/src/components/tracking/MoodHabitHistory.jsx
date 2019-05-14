import React, { Component } from 'react';
import { connect } from 'react-redux';
import { habitActions } from '../../actions/habitActions';
import { moodActions } from '../../actions/moodActions';
import FilterData from './FilterData';

function mapStateToProps(state) {
    const { fetchMoods, authentication } = state;
    const { user } = authentication;
    const { moods, fetched } = fetchMoods; 
    const { habits } = state.fetchHabits;
    return {
        moods,
        user,
        fetched,
        habits
    }
}

class ConnectedHistories extends Component {

    componentDidMount(){
        const { dispatch, user } = this.props;
        dispatch(habitActions.fetchHistory(user.response));
        dispatch(moodActions.getMoodHistory(user.response));
    }

    render() {
        const { habits, moods } = this.props;

        return (
            <div className="content" style={{paddingTop: '25px'}}>
            
            <div className="container">
            <FilterData moodData={moods} habitData={habits} />
            </div>
            </div>
        )
    }

}

const MoodHabitHistory = connect(mapStateToProps)(ConnectedHistories);

export default MoodHabitHistory;
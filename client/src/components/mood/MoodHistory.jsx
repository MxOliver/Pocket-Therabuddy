import React, { Component } from 'react';
import { connect } from 'react-redux';
import { moodActions } from '../../actions/moodActions';
import FilterMoodData from './FilterData';

function mapStateToProps(state){
    const { fetchMoods, authentication } = state;
    const { user } = authentication;
    const { moods, fetched } = fetchMoods; 
    return {
        moods,
        user,
        fetched
    }
}

class ConnectedMoodHistory extends Component {

    componentDidMount() {
        const { dispatch, user } = this.props;
        dispatch(moodActions.getMoodHistory(user.response));
    }

    render() {

        const { moods } = this.props;

      

        return (
            <div className="content">
      
     
            <FilterMoodData data={moods} />
         
            </div>
        )
    }

}

const MoodHistory = connect(mapStateToProps)(ConnectedMoodHistory);

export default MoodHistory;
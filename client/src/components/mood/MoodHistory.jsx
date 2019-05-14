import React, { Component } from 'react';
import { connect } from 'react-redux';
import HistoryNav from '../partials/HistoryNav';
import { moodActions } from '../../actions/moodActions';
import { MDBContainer } from 'mdbreact';
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

        const navStyle = {
            marginBottom: '35px'
        }

        return (
            <div className="content">
            <HistoryNav style={navStyle} />
            <div className="container">
           <MDBContainer>
            <FilterMoodData data={moods} style={{ paddingLeft: '-50px'}}/>
            </MDBContainer>
            </div>
            </div>
        )
    }

}

const MoodHistory = connect(mapStateToProps)(ConnectedMoodHistory);

export default MoodHistory;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { habitActions } from '../../actions/habitActions';
import { MDBBtn, MDBContainer } from 'mdbreact';
import { moodActions } from '../../actions/moodActions';
import MoodHabitChart from './MoodHabitChart';

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
    constructor(props){
        super();

        this.state = {
            loaded: false,
            habitData: '',
            moodData: ''
        }

        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount(){
        const { dispatch, user } = this.props;
        dispatch(habitActions.fetchHistory(user.response));
        dispatch(moodActions.getMoodHistory(user.response));
    }

    fetchData() {
        const { habits } = this.props;
        const { moods } = this.props;
        this.setState({ loaded: true, habitData: habits, moodData: moods });
    }

    render() {
        const { habitData, moodData, loaded } = this.state;

        return (
            <div className="content" style={{paddingTop: '25px'}}>
            <div className="container">
            <MDBBtn id="fetchButton" outline color='red lighten-3' onClick={this.fetchData}>
            Click Twice to Render Graph
            </MDBBtn>
           <MDBContainer>
            <MoodHabitChart moodData={moodData} habitData={habitData} loaded={loaded} />
            </MDBContainer>
            </div>
            </div>
        )
    }

}

const MoodHabitHistory = connect(mapStateToProps)(ConnectedHistories);

export default MoodHabitHistory;
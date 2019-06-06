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
    constructor(props){
        super(props);

        this.state = {
            habit: null,
            mood: null,
            date: null
        }

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        const { dispatch, user } = this.props;
        dispatch(habitActions.fetchHistory(user.response));
        dispatch(moodActions.getMoodHistory(user.response));
    }

    handleChange(e) {
        console.log(e.target.value);
        this.setState({ [e.target.name]: e.target.value })
    }


    render() {
        const { habits, moods } = this.props;
        const { habit, mood, date } = this.state;

        return (
            <div className="content" style={{marginTop: '25px', marginLeft: '10px'}}>
            <select id="dateDropdown" name="date" value={this.state.date} onChange={this.handleChange}>
                <option value="" defaultValue>Month</option>
                <option value="Jan">January</option>
                <option value="Feb">February</option>
                <option value="Mar">March</option>
               <option value="Apr">April</option>
               <option value="May">May</option>
               <option value="Jun">June</option>
               <option value="Aug">August</option>
               <option value="Sep">September</option>
               <option value="Oct">October</option>
               <option value="Nov">November</option>
               <option value="Dec">December</option>
           </select>
           <select id="habitDropdown" name="habit" value={this.state.habit} onChange={this.handleChange}>
               <option value="" defaultChecked>Habit</option>
                <option value="exercise">Exercise</option>
                <option value="hydration">Hydration</option>
                <option value="social interaction">Social Interaction</option>
                <option value="time alone">Time Alone</option>
                <option value="sleep">Sleep</option>
                <option value="leisure activities">Leisure Activities</option>
                <option value="time outside">Time Outside</option>
           </select>
           <select id="moodDropdown" name="mood" value={this.state.mood} onChange={this.handleChange}>
               <option value="" defaultValue>Mood</option>
                <option value="happy">Happy</option>
                <option value="sad">Sad</option>
                <option value="active">Energetic</option>
                <option value="anxious">Anxious</option>
                <option value="angry">Angry</option>
                <option value="fine">Fine</option>
                <option value="tired">Tired</option>
           </select>
            <FilterData moodData={moods} habitData={habits} dateRange={date} moodSelect={mood} habitSelect={habit} />
    
            </div>
        )
    }

}

const MoodHabitHistory = connect(mapStateToProps)(ConnectedHistories);

export default MoodHabitHistory;
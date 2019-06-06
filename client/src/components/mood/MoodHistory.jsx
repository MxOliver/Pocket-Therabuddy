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
    constructor(props){
        super(props);

        this.state = {
            value: null
        }

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        const { dispatch, user } = this.props;
        dispatch(moodActions.getMoodHistory(user.response));
    }

    handleChange(e) {
        console.log(e.target.value);
        this.setState({ value: e.target.value })
    }

    render() {

        const { moods } = this.props;
        const { value } = this.state;
      

        return (
            <div className="content" style={{marginTop: '25px', marginLeft: '10px'}}>
            <select id="habitDropdown" value={this.state.value} onChange={this.handleChange}>
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
     
            <FilterMoodData data={moods} dateRange={value} />
         
            </div>
        )
    }

}

const MoodHistory = connect(mapStateToProps)(ConnectedMoodHistory);

export default MoodHistory;
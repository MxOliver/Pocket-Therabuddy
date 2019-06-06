import React, { Component } from 'react';
import { connect } from 'react-redux';
import { habitActions } from '../../actions/habitActions';
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
            data: '',
            value: null
        }

        this.handleChange = this.handleChange.bind(this);

    }

    componentDidMount(){
        const { dispatch, user } = this.props;
        dispatch(habitActions.fetchHistory(user.response));
    }
    
    handleChange(e) {
        console.log(e.target.value);
        this.setState({ value: e.target.value })
    }

    render() {

        const { habits } = this.props;
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
            <FilterData data={habits} dateRange={value} />

            </div>
        )
    }

}

const HabitHistory = connect(mapStateToProps)(ConnectedHabitHistory);

export default HabitHistory;
import React, { Component } from 'react';
import Chart from './Chart';
import FetchData from './FetchData';

class MoodHistory extends Component {
    render(){
        return (
            <div className="App">
            <FetchData />
            <Chart />
            </div>
        )
    }
}

export default MoodHistory;
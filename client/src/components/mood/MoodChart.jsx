import React, { Component } from 'react';

class MoodChart extends Component {

    render() {

        const dataSet = this.props.dataSet;

        console.log(dataSet);

        if(dataSet && dataSet.length > 0){
            this.props.generateChart(dataSet);
        }

            return (
                <div className="chart" style={{display: 'flex', justifyContent: 'space-around'}}>
                    <div id="moodChart" />
                </div>
            );
    }

}


export default MoodChart;
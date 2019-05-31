import React, { Component } from 'react';

class HabitChart extends Component {

    render() {

        const dataSet = this.props.dataSet;

        if(dataSet && dataSet.length > 0){
            this.props.generateChart(dataSet);
        }

            return (
       
                <div className="chart">
                    <div id="habitChart" className="svg-container" />
                </div>
            );
    }
}

export default HabitChart;
import React, { Component } from 'react';

class MoodChart extends Component {

    render() {

        const dataSet = this.props.dataSet;

        console.log(dataSet);

        if(dataSet && dataSet.length > 0){
            this.props.generateChart(dataSet);
        }

            return (

                    <div id="moodChart" className="svg-container" />
            );
    }

}


export default MoodChart;
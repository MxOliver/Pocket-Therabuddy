import React, { Component } from 'react';
import * as d3 from 'd3';

class MoodHabitChart extends Component {

    componentDidMount() {
        let chart = d3.select('#trackerChart');
        chart.selectAll('*').remove();
    }

    componentDidUpdate(){
        let dataNote = d3.select('#dataTrackerNote');
        let chart = d3.select('#trackerChart');
        dataNote.selectAll('*').remove();
        chart.selectAll('*').remove();

        const dataSet = this.props.dataSet;
        if(dataSet && dataSet.length > 0){
            this.props.generateChart(dataSet);
            dataNote.selectAll('*').remove();
        } else {
            chart.selectAll('*').remove();
            dataNote.append('text').text('No data for this date range');
        }
    }

    render() {

            return (
                    <div>
                        <div id="dataTrackerNote"  style={{paddingTop: '15px'}} />
                        <div id='trackerChart' className="svg-container-2"/>
                    </div>
                
             
            )
    
    }
}

export default MoodHabitChart;
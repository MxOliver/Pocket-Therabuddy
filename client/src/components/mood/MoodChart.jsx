import React, { Component } from 'react';
import * as d3 from 'd3';

class MoodChart extends Component {

    componentDidMount(){
        let chart = d3.select('#moodChart');
        chart.selectAll('*').remove();
    }

    componentDidUpdate(){
        let dataNote = d3.select('#dataMoodNote');
        dataNote.selectAll('*').remove();
        let chart = d3.select('#moodChart');
        chart.selectAll('*').remove();

        const dataSet = this.props.dataSet;
        if(dataSet && dataSet.length > 0){
            this.props.generateChart(dataSet);
            dataNote.selectAll('*').remove();
        } else {
            let chart = d3.select('#moodChart');
            chart.selectAll('*').remove();
            dataNote.append('text').text('No data for this date range');
        }
    }

    render() {

            return (
                <div>
                    <div id="dataMoodNote" style={{paddingTop: '15px'}} />
                    <div id="moodChart" className="svg-container" />
                </div>

            );
    }

}


export default MoodChart;
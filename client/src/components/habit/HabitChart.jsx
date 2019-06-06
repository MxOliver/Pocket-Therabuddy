import React, { Component } from 'react';
import * as d3 from 'd3';

class HabitChart extends Component {

    componentDidMount(){
        let chart = d3.select('#habitChart');
        chart.selectAll('*').remove();
    }
    
    componentDidUpdate() {
        let dataNote = d3.select('#dataNote');
        dataNote.selectAll('*').remove();
        let chart = d3.select('#habitChart');
        chart.selectAll('*').remove();

        const dataSet = this.props.dataSet;
        if(dataSet && dataSet.length > 0){
            this.props.generateChart(dataSet);
            dataNote.selectAll('*').remove();
        } else {
            let chart = d3.select('#habitChart');
            chart.selectAll('*').remove();
            dataNote.append('text').text('No data for this date range');
        }
    }

    render() {

            return (
       
                    <div>
                        <div id="dataNote" style={{paddingTop: '15px'}} />
                        <div id="habitChart" className="svg-container" />
                    </div>
               
           
            );
    }
}

export default HabitChart;
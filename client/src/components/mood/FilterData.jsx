import React, { Component } from 'react';
import MoodChart from './MoodChart';
import * as d3 from 'd3';
import moment from 'moment';

class FilterMoodData extends Component {
    constructor(props){
        super(props);

        this.generateChart = this.generateChart.bind(this);
    }

    generateChart(dataSet){
            var margin = {top: 50, right: 100, bottom: 85, left: 80},
            width = 1150 - margin.left - margin.right,
            height = 600 - margin.top - margin.bottom;

            let dataPoints = dataSet.map(function(d) {
                return {
                    date: new Date(d.date),
                    level: +d.level,
                    mood: d.mood
                };
            });


            let xScale = d3.scaleTime().domain(d3.extent(dataPoints, function(d) { return d.date})).range([margin.left, width - margin.right]);
            let yScale = d3.scaleLinear().domain([0, 100]).range([height - (margin.bottom / 4), margin.top]);

            let line = d3.line()
            .x(function(d) { return xScale(d.date)})
            .y(function (d) { return yScale(d.level)})
            .curve(d3.curveMonotoneX)

        var svg = d3.select('#moodChart').append('svg')
            .attr('viewBox', `0 0 1150 700`)
            .attr('perserveAspectRatio', 'xMinYMin meet')
            .classed('svg-content', true)
        .append('g')
            .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

        var dataNest = d3.nest().key(function(d) { return d.mood; }).entries(dataPoints) 
            
        
            
        let color = d3.scaleOrdinal().domain(function(d) { return d.habit})
        .range(['#1F78B4', '#33A02C', '#FB9A99', '#E31A1C', '#FF7F00', '#6A3D9A'])

        let legendSpace = height / dataNest.length;

        svg.append('g').classed('data-points', true);

        dataNest.forEach(function(d, i){

            svg.append('path')
                .attr('class', 'line')
                .style('stroke', function() {
                    return d.color = color(d.key);
                })
                .style('stroke-width', 3)
                .attr('d', line(d.values))
            

            
            svg.append('text')
                .attr('y', (legendSpace/5)+ i * legendSpace)
                .attr('x', width - (margin.right / 3) + 5)
                .attr('class', 'legend')
                .style('fill', function() {
                    return d.color = color(d.key);
                })
                .text(d.key)
            

        });

        const makeAxis = (scale, n) => {
            return d3.axisBottom(scale).tickFormat(d3.timeFormat('%a %b %d %Y')).ticks(d3.timeDay.every(n));
        }

        let datePoints = dataPoints.map(d => {
            return d.date
        });
        
        let dateMax = Math.min.apply(null, datePoints);

        if(new Date(dateMax) < moment().subtract(1, 'week')){
            svg.append('g').attr('class', 'xAxis').attr('transform', 'translate(0,' + height + ')')
            .call(makeAxis(xScale, 5));
        }else {
            svg.append('g').attr('class', 'xAxis').attr('transform', 'translate(0,' + height + ')')
            .call(makeAxis(xScale, 1));
        }

            svg.append('g').attr('class', 'yAxis').call(d3.axisLeft(yScale));

            svg.append('text')
            .attr('transform', 'translate(' + (width/2) + " ," + (height + margin.top + 2) + ")" )
            .style('text-anchor', 'middle')
            .text('Date Recorded');
        
        svg.append('text')
        .attr('x', (width / 7) - margin.left - margin.right - 7)
        .attr('y', (margin.top / 2) + 2)
        .style('text-anchor', 'left')
        .text('Level of Intensity')

        var points = svg.select('g.data-points').selectAll('dot')
            .data(dataPoints.filter(function(d) {
                return d.level;
            }))
            .enter()

        points.append('circle')
            .attr('r', 4)
            .attr('class', 'circles')
            .style('fill', function(d) { return d.color = color(d.mood)})
            .attr('cx', function(d) { return xScale(d.date); })
            .attr('cy', function(d) { return yScale(+d.level); })
    }

    render() {

        const data = this.props.data;
        
        let dataSet = [];

        for(let i in data){
            data[i].map(e => {
                if(e['moodselect'] === "happy"){
                    dataSet.push(
                        { date: new Date(Date.parse(e['createdAt'])), level: e['moodlevel'], mood: 'happy'}
                    )
                }
                if(e['moodselect'] === "sad"){
                    dataSet.push(
                        { date: new Date(Date.parse(e['createdAt'])), level: e['moodlevel'], mood: 'sad' }
                    )
                }
                if(e['moodselect'] === "active"){
                    dataSet.push(
                        { date: new Date(Date.parse(e['createdAt'])), level: e['moodlevel'], mood: 'energetic' }
                    )
                }
                if(e['moodselect'] === "anxious"){
                    dataSet.push(
                        { date: new Date(Date.parse(e['createdAt'])), level: e['moodlevel'], mood: 'anxious' }
                    )
                }
                if(e['moodselect'] === "angry"){
                    dataSet.push(
                        { date: new Date(Date.parse(e['createdAt'])), level: e['moodlevel'], mood: 'angry' }
                    )
                }
                if(e['moodselect'] === "fine"){
                    dataSet.push(
                        { date: new Date(Date.parse(e['createdAt'])), level: e['moodlevel'], mood: 'fine' }
                    )
                }
                if(e['moodselect'] === "tired"){
                    dataSet.push(
                        { date: new Date(Date.parse(e['createdAt'])), level: e['moodlevel'], mood: 'tired' }
                    )
                }
                return dataSet;
            });
        }

        return(
            <MoodChart dataSet={dataSet} generateChart={this.generateChart} />
        )

    }

}

export default FilterMoodData;
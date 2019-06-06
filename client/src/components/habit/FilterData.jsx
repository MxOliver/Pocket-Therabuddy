import React, { Component } from 'react';
import HabitChart from './HabitChart';
import * as d3 from 'd3';
import moment from 'moment';

class FilterHabitData extends Component {
    constructor(props){
        super(props);


        this.generateChart = this.generateChart.bind(this);
    }

    generateChart(dataPoints){

        var margin = {top: 50, right: 100, bottom: 85, left: 80},
        width = 1150 - margin.left - margin.right,
        height = 600 - margin.top - margin.bottom;

        let xScale = d3.scaleTime().domain(d3.extent(dataPoints, function(d) { return d.date})).range([margin.left, width - margin.right]);
        let yScale = d3.scaleLinear().domain([0, 100]).range([height - (margin.bottom / 4), margin.top]);

        let line = d3.line()
        .x(function(d) { return xScale(d.date)})
        .y(function (d) { return yScale(d.level)})
        .curve(d3.curveMonotoneX)

        var svg = d3.select('#habitChart').append('svg')
            .attr('viewBox', `0 0 1150 700`)
            .attr('perserveAspectRatio', 'xMinYMin meet')
            .classed('svg-content', true)
        .append('g')
            .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

        var dataNest = d3.nest()
            .key(function(d) { return d.habit; })
            .entries(dataPoints) 

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
            .call(makeAxis(xScale, 5)).selectAll('text').style('text-anchor', 'end').attr('transform', 'rotate(-65)');
         }else {
            svg.append('g').attr('class', 'xAxis').attr('transform', 'translate(0,' + height + ')')
            .call(makeAxis(xScale, 1)).selectAll('text').style('text-anchor', 'end').attr('transform', 'rotate(-65)');
         }
    
            svg.append('g').attr('class', 'yAxis').call(d3.axisLeft(yScale));
    
        
        svg.append('text')
         .attr('x', (width / 7) - margin.left - margin.right - 7)
         .attr('y', (margin.top / 2) + 2)
         .style('text-anchor', 'left')
         .text('Frequency or Time Spent')

        var points = svg.select('g.data-points').selectAll('dot')
            .data(dataPoints.filter(function(d) {
                return d.level;
            }))
            .enter()
        
            points.append('circle')
            .attr('r', 4)
            .attr('class', 'circles')
            .style('fill', function(d) { return d.color = color(d.habit)})
            .attr('cx', function(d) { return xScale(d.date); })
            .attr('cy', function(d) { return yScale(+d.level); })
    }

    render() {

        const data = this.props.data;
        const dateRange = this.props.dateRange;

        let dataSet = [];
 
        for(let i in data){
            data[i].map(e => {
                if(e.type === 'time alone'){
                    dataSet.push(
                        {date: new Date(Date.parse(e['createdAt'])), level: e.frequency, type: 'time alone'}
                    )
                }
                if(e.type === 'sleep'){
                    dataSet.push(
                        {date: new Date(Date.parse(e['createdAt'])), level: e.frequency, type: 'sleep'}
                    )
                }
                if(e.type === 'hydration'){
                    dataSet.push(
                        {date: new Date(Date.parse(e['createdAt'])), level: e.frequency, type: 'hydration'}
                    )
                }
                if(e.type === 'time outside'){
                    dataSet.push(
                        {date: new Date(Date.parse(e['createdAt'])), level: e.frequency, type: 'time outside'}
                    )
                }
                if(e.type === 'leisure activities'){
                    dataSet.push(
                        {date: new Date(Date.parse(e['createdAt'])), level: e.frequency, type: 'leisure activities'}
                    )
                }
                if(e.type === 'exercise'){
                    dataSet.push(
                        {date: new Date(Date.parse(e['createdAt'])), level: e.frequency, type: 'exercise'}
                    )
                }
                if(e.type === 'social interaction'){
                    dataSet.push(
                        {date: new Date(Date.parse(e['createdAt'])), level: e.frequency, type: 'social interaction'}
                    )
                }
                return dataSet;
            })
        }

        let dataPoints = dataSet.map(function(d) {
            return {
                date: new Date(d.date),
                level: +d.level,
                habit: d.type
            };
        });

        let filteredData;

        if (dateRange){
            filteredData = dataPoints.filter(function(d) {
                return d.date.toString().includes(dateRange);
            });
        }

            return (
                <HabitChart dataSet={filteredData} generateChart={this.generateChart} />
            )   

    }
}

export default FilterHabitData;
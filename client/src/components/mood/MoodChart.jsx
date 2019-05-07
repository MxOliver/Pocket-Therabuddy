import React, { Component } from 'react';
import * as d3 from 'd3';

class MoodChart extends Component {

    render() {

        const data = this.props.data;
        const loaded = this.props.loaded;
        
        let dataSet = [];

        for(let i = 0; i < data.length; i++){
            Object.values(data[i]).forEach(e => {
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
                        { date: new Date(Date.parse(e['createdAt'])), level: e['moodlevel'], mood: 'active' }
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
            });
        }


        var margin = {top: 50, right: 50, bottom: 50, left: 80},
        width = 1050 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

        let dataPoints = dataSet.map(function(d) {
            return {
                date: new Date(d.date),
                level: +d.level,
                mood: d.mood
            };
        });


        let xScale = d3.scaleTime().domain(d3.extent(dataPoints, function(d) { return d.date})).range([margin.left, width - margin.right]);
        let yScale = d3.scaleLinear().domain([0, 100]).range([height - margin.bottom, margin.top]);

        let line = d3.line()
        .x(function(d) { return xScale(d.date)})
        .y(function (d) { return yScale(d.level)})
        .curve(d3.curveMonotoneX)

    var svg = d3.select('#moodChart').append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
    .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    var dataNest = d3.nest().key(function(d) { return d.mood; }).entries(dataPoints) 
        
    let color = d3.scaleOrdinal(d3.schemePaired);

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

    svg.append('g').attr('class', 'xAxis').attr('transform', 'translate(0,' + height + ')')
    .call(d3.axisBottom(xScale).ticks(d3.timeDay.every(1)).tickFormat(d3.timeFormat('%a %b %d %Y')));


    svg.append('g').attr('class', 'yAxis').call(d3.axisLeft(yScale));

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


    if(!loaded){
        return <p>Ready when you are...</p>
    } else {
        return (
            <div className="chart" style={{display: 'flex', justifyContent: 'space-around'}}>
                <div id="moodChart" />
            </div>
        );
    }

    }
}


export default MoodChart;
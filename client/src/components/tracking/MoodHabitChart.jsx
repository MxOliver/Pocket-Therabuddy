import React, { Component } from 'react';
import * as d3 from 'd3';
import moment from 'moment';

class MoodHabitChart extends Component {


    render() {

        const moodData = this.props.moodData;
        const habitData = this.props.habitData;
        const loaded = this.props.loaded;


        let moodDataSet = [];
        let habitDataSet = [];

        for(let i in moodData){
            moodData[i].map(e => {
                if(e['moodselect'] === "happy"){
                    moodDataSet.push(
                        { date: new Date(Date.parse(e['createdAt'])), level: e['moodlevel'], type: 'happy'}
                    )
                }
                if(e['moodselect'] === "sad"){
                    moodDataSet.push(
                        { date: new Date(Date.parse(e['createdAt'])), level: e['moodlevel'], type: 'sad' }
                    )
                }
                if(e['moodselect'] === "active"){
                    moodDataSet.push(
                        { date: new Date(Date.parse(e['createdAt'])), level: e['moodlevel'], type: 'active' }
                    )
                }
                if(e['moodselect'] === "anxious"){
                    moodDataSet.push(
                        { date: new Date(Date.parse(e['createdAt'])), level: e['moodlevel'], type: 'anxious' }
                    )
                }
                if(e['moodselect'] === "angry"){
                    moodDataSet.push(
                        { date: new Date(Date.parse(e['createdAt'])), level: e['moodlevel'], type: 'angry' }
                    )
                }
                if(e['moodselect'] === "fine"){
                    moodDataSet.push(
                        { date: new Date(Date.parse(e['createdAt'])), level: e['moodlevel'], type: 'fine' }
                    )
                }
                if(e['moodselect'] === "tired"){
                    moodDataSet.push(
                        { date: new Date(Date.parse(e['createdAt'])), level: e['moodlevel'], type: 'tired' }
                    )
                }
                return moodDataSet;
            });
        }

        for(let i in habitData){
            habitData[i].map(e => {
                if(e.type === 'time alone'){
                    habitDataSet.push(
                        {date: new Date(Date.parse(e['createdAt'])), level: e.frequency, type: 'time alone'}
                    )
                }
                if(e.type === 'sleep'){
                    habitDataSet.push(
                        {date: new Date(Date.parse(e['createdAt'])), level: e.frequency, type: 'sleep'}
                    )
                }
                if(e.type === 'hydration'){
                    habitDataSet.push(
                        {date: new Date(Date.parse(e['createdAt'])), level: e.frequency, type: 'hydration'}
                    )
                }
                if(e.type === 'time outside'){
                    habitDataSet.push(
                        {date: new Date(Date.parse(e['createdAt'])), level: e.frequency, type: 'time outside'}
                    )
                }
                if(e.type === 'leisure activities'){
                    habitDataSet.push(
                        {date: new Date(Date.parse(e['createdAt'])), level: e.frequency, type: 'leisure activities'}
                    )
                }
                if(e.type === 'exercise'){
                    habitDataSet.push(
                        {date: new Date(Date.parse(e['createdAt'])), level: e.frequency, type: 'exercise'}
                    )
                }
                if(e.type === 'social interaction'){
                    habitDataSet.push(
                        {date: new Date(Date.parse(e['createdAt'])), level: e.frequency, type: 'social interaction'}
                    )
                }
                return habitDataSet;
            })
        }
        ///CHART SET UP 

        let dataSet = habitDataSet.concat(moodDataSet);

        let dataPoints = dataSet.map(function(d) {
            return {
                date: new Date(d.date),
                level: +d.level,
                type: d.type
            }
        })

        var margin = {top: 50, right: 100, bottom: 85, left: 80},
        width = 1150 - margin.left - margin.right,
        height = 600 - margin.top - margin.bottom;
            
        let xScale = d3.scaleTime().domain(d3.extent(dataPoints, function(d) { return d.date})).range([margin.left, width - margin.right]);
        let yScale = d3.scaleLinear().domain([0, 100]).range([height - (margin.bottom / 4), margin.top]);

 
            var svg = d3.select('#trackerchart').append('svg')
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
            .append('g')
                .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');


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
                .attr('transform', 'translate(' + (width/2) + " ," + (height + margin.top + 5) + ")" )
                .style('text-anchor', 'middle')
                .text('Date Recorded');
        

             //// END CHART SET UP


             let moodPoints = moodDataSet.map(function(mood) {
                return {
                    date: new Date(mood.date),
                    level: +mood.level,
                    type: mood.type
                };
            });


            ///MOOD LINES

            let moodNest = d3.nest().key(function(d) { return d.type }).entries(moodPoints);

            let line = d3.line()
                .x(function(mood) { return xScale(mood.date)})
                .y(function (mood) { return yScale(mood.level)})
                .curve(d3.curveMonotoneX)

            let lineColor = d3.scaleOrdinal(d3.schemePaired);

            svg.append('g').classed('mood-points', true);

            let moodLegendSpace = height / moodNest.length;

            moodNest.forEach(function(d, i){

                svg.append('path')
                    .attr('class', 'line')
                    .style('stroke', function() {
                        return d.color = lineColor(d.key);
                    })
                    .style('stroke-width', 3)
                    .attr('d', line(d.values))
                
        
                
                svg.append('text')
                    .attr('y', (moodLegendSpace/5)+ i * moodLegendSpace)
                    .attr('x', width - (margin.right / 3) + 5)
                    .attr('class', 'legend')
                    .style('fill', function() {
                        return d.color = lineColor(d.key);
                    })
                    .text(d.key)
                
            });

            var points = svg.select('g.mood-points').selectAll('dot')
                .data(moodPoints.filter(function(mood) {
                    return mood.level;
                }))
                .enter()

            points.append('circle')
                .attr('r', 4)
                .attr('class', 'circles')
                .style('fill', function(mood) { return mood.color = lineColor(mood.type)})
                .attr('cx', function(mood) { return xScale(mood.date); })
                .attr('cy', function(mood) { return yScale(+mood.level); })

            //// HABIT CHART

            let habitPoints = habitDataSet.map(function(habit) {
                return {
                    date: new Date(habit.date),
                    level: +habit.level,
                    type: habit.type
                }
            });

            let habitNest = d3.nest().key(function(d) { return d.type }).entries(habitPoints);

            let area = d3.area()
                .curve(d3.curveMonotoneX)
                .x(function(habit) { return xScale(habit.date)})
                .y0(yScale(0))
                .y1(function(habit) { return yScale(+habit.level)})

            let line1 = d3.line()
                .curve(d3.curveMonotoneX)
                .x(function(habit) { return xScale(habit.date)})
                .y(function(habit) { return yScale(+habit.level)})
                
            
            let areaColor = d3.scaleOrdinal().range(d3.schemeCategory10);

            svg.append('g').classed('habit-points', true)

            let habitLegendSpace = height / habitNest.length;

            habitNest.forEach(function(d, i){

                svg.append('path')
                    .attr('class', 'area')
                    .attr('d', area(d.values))
                    .style('fill', function() { return d.color = areaColor(d.key) })
                    .style('fill-opacity', .3)
                    .style('stroke', 'none')

                svg.append('path')
                    .attr('class', 'area-line')
                    .attr('fill', 'none')
                    .style('stroke', function() { return d.color = areaColor(d.key)})
                    .style('stoke-width', 4)
                    .style('stroke-opacity', .8)
                    .attr('d', line1(d.values))

                svg.append('text')
                    .attr('y', (habitLegendSpace/1)+ i * habitLegendSpace)
                    .attr('x', width - (margin.right / 3) + 5)
                    .attr('class', 'legend')
                    .style('fill', function() {
                        return d.color = areaColor(d.key);
                    })
                    .text(d.key)

            })

            var hpoints = svg.select('g.habit-points').selectAll('dot')
                .data(habitPoints.filter(function(habit) {
                    return habit.level;
                }))
                .enter()

            hpoints.append('circle')
                .attr('r', 4)
                .attr('class', 'circles2')
                .style('fill', function(habit) { return habit.color = areaColor(habit.type)})
                .style('fill-opacity', 0.7)
                .attr('cx', function(habit) { return xScale(habit.date); })
                .attr('cy', function(habit) { return yScale(+habit.level); })
        
    if(!loaded){
        return <p>Ready when you are...</p>
    } else {
        return (
            <div className="chart" style={{display: 'flex', justifyContent: 'space-around'}}>
            <div id="trackerchart" />
            </div>
        )
    }
    }
}

export default MoodHabitChart;
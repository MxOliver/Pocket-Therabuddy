import React, {Component} from 'react';
import MoodHabitChart from './MoodHabitChart';
import * as d3 from 'd3';
import moment from 'moment';

class filterData extends Component {
    constructor(props){
        super(props);

        this.updateChart = this.updateChart.bind(this);

    }

    updateChart(dataPoints) {

        var margin = {top: 50, right: 100, bottom: 85, left: 80},
        width = 1150 - margin.left - margin.right,
        height = 600 - margin.top - margin.bottom;
            
        let xScale = d3.scaleTime().domain(d3.extent(dataPoints, function(d) { return d.date})).range([margin.left, width - margin.right]);
        let yScale = d3.scaleLinear().domain([0, 100]).range([height - (margin.bottom / 4), margin.top]);

 
            var svg = d3.select('#trackerChart').append('svg')
                .attr('viewBox', `20 0 1150 700`)
                .attr('perserveAspectRatio', 'xMinYMin meet')
                .classed('svg-content-2', true)
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
                .call(makeAxis(xScale, 5)).selectAll('text').style('text-anchor', 'end').attr('transform', 'rotate(-65)');
             }else {
                svg.append('g').attr('class', 'xAxis').attr('transform', 'translate(0,' + height + ')')
                .call(makeAxis(xScale, 1)).selectAll('text').style('text-anchor', 'end').attr('transform', 'rotate(-65)');
             }
        
            svg.append('g').attr('class', 'yAxis').call(d3.axisLeft(yScale));
    
        
            svg.append('text')
                .attr('x', (width / 7) - margin.left - margin.right - 7)
                .attr('y', (margin.top / 2) - 5)
                .attr('class', 'yLabel')
                .style('text-anchor', 'left')
                .text('Time Spent on Habit + Mood Intensity Level')

             //// END CHART SET UP

            let dataNest = d3.nest().key(function(d) { return d.type }).entries(dataPoints);

            console.log(dataNest);

            let line = d3.line()
                .x(function(d) { return xScale(d.date)})
                .y(function (d) { return yScale(d.level)})
                .curve(d3.curveMonotoneX)

            svg.append('g').classed('data-points', true);

            let legendSpace = height / dataNest.length;

            let color = ['#ef9a9a', '#80cbc4'];

            for( let d in dataNest){

                svg.append('path')
                    .attr('class', 'line')
                    .style('stroke', color[d])
                    .style('stroke-width', 3)
                    .attr('d', line(dataNest[d].values))
                
        
                svg.append('text')
                    .attr('y', (legendSpace/5) + d * legendSpace)
                    .attr('x', width - (margin.right / 3) - 15)
                    .attr('class', 'legend')
                    .style('fill', color[d])
                    .text(dataNest[d].key)

              
                var points = svg.select('g.data-points').selectAll('dot')
                    .data(dataNest[d].values)
                    .enter()

                points.append('circle')
                    .attr('r', 4)
                    .attr('class', 'circles')
                    .style('fill', color[d])
                    .attr('cx', function(d) { return xScale(d.date); })
                    .attr('cy', function(d) { return yScale(+d.level); })
            };

    }

    render() {

        let habitData = this.props.habitData;
        const dateRange = this.props.dateRange;
        const moodSelect = this.props.moodSelect;
        const habitSelect = this.props.habitSelect;
        let habitDataSet = [];

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

        
        let moodData = this.props.moodData;
        let moodDataSet = [];
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
                            { date: new Date(Date.parse(e['createdAt'])), level: e['moodlevel'], type: 'energetic' }
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

            let habitPoints = habitDataSet.map(function(habit) {
                return {
                    date: new Date(habit.date),
                    level: +habit.level,
                    type: habit.type
                }
            });
    
            let moodPoints = moodDataSet.map(function(mood) {
                return {
                    date: new Date(mood.date),
                    level: +mood.level,
                    type: mood.type
                };
            });

            let filteredMood;
            let filteredHabit;
            let filteredData;

            if (dateRange && moodSelect && habitSelect){

                filteredHabit = habitPoints.filter(function(d) {
                    return d.date.toString().includes(dateRange);
                });
                filteredHabit = filteredHabit.filter(function(d) {
                    return d.type.toString() === habitSelect;
                });
                filteredMood = moodPoints.filter(function(d) {
                    return d.date.toString().includes(dateRange);
                });
                filteredMood = filteredMood.filter(function(d) {
                    return d.type.toString() === moodSelect;
                })
            }

            if(filteredMood && filteredHabit){
                filteredData = filteredMood.concat(filteredHabit);
            }

            console.log(filteredData);

            return (
                <MoodHabitChart generateChart={this.updateChart} dataSet={filteredData} />
            )
       
    }
}

export default filterData;
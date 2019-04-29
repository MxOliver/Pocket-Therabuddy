import React, { Component } from 'react';
import { connect } from 'react-redux';
import HistoryNav from '../partials/HistoryNav';
import { moodActions } from '../../actions/moodActions';
import { MDBBtn, MDBContainer } from 'mdbreact';
import * as d3 from 'd3';
import moment from 'moment';

function mapStateToProps(state){
    const { fetchMoods, authentication } = state;
    const { user } = authentication;
    const { moods, fetched } = fetchMoods; 
    return {
        moods,
        user,
        fetched
    }
}

class ConnectedMoodHistory extends Component {
    constructor(props){
        super();

        this.state = {
            loaded: false
        }

        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        const { dispatch, user } = this.props;
        dispatch(moodActions.getMoodHistory(user.response));
    }

    getData(){
    const { moods } = this.props;
    let temp = JSON.parse(moods);
    let data = [];
    Object.keys(temp).forEach((e) => (
        data.push(temp[e])
    ));
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
    width = 1000 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

    let dataPoints = dataSet.map(function(d) {
        console.log(d.date)
            return {
                date: new Date(d.date),
                level: +d.level,
                mood: d.mood
            };
    });

    console.log(dataPoints); 

    // const maxDate = moment()
    // const minDate = moment().subtract(2, 'week');

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
        .call(d3.axisBottom(xScale).ticks(7).tickFormat(d3.timeFormat('%a %b %d %Y')));

    svg.append('g').attr('class', 'yAxis').call(d3.axisLeft(yScale));
    
    this.setState({ loaded: true })
    }


    render() {
        const { loaded } = this.state;
        const { fetched, dateFetched } = this.props;
        let moodChart = null;

        if(loaded === false){
            if(fetched === false || dateFetched === false){
                moodChart = (
                    <em>Data is loading...</em>
                )
            } else {
                moodChart = (
                    <em>Ready when you are... </em>
                )
            }
        } else {
            moodChart = (
                <div className="charts">
                    <div id="moodChart" />
                </div>
            )
        }

        const navStyle = {
            marginBottom: '35px'
        }

        return (
            <div className="content">
            <HistoryNav style={navStyle} />
            <div className="container">
            <MDBBtn id="fetchButton" outline color='red lighten-3' onClick={this.getData}>
            Click Twice to Fetch History
            </MDBBtn>
           <MDBContainer>
            {moodChart}
            </MDBContainer>
            </div>
            </div>
        )
    }

}

const MoodHistory = connect(mapStateToProps)(ConnectedMoodHistory);

export default MoodHistory;
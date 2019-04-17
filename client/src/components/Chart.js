import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid';

const mapStateToProps = state => {
    return { mood: state.mood };
}

const ConnectedChart = ({ mood }) => (
    <canvas id="moodChart"></canvas>
);

const Chart = connect(mapStateToProps)(ConnectedChart);

export default Chart;
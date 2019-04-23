import React, { Component } from 'react';
import * as d3 from 'd3';
import { connect } from 'react-redux';
import { dataActions } from '../../actions/dataActions';

function mapStateToProps(state) {
    const { addData } = state;
    const { data } = addData;
    return {
        data
    }
}

class ConnectedAreaGraph extends Component {
    constructor(props){
        super(props);

        this.drawChart = this.drawChart.bind(this);
    }

    componentDidMount() {
        this.drawChart();
    }

    drawChart() {
        const { data } = this.props;
        
    }

}

const AreaGraph = connect(mapStateToProps)(ConnectedAreaGraph);

export default AreaGraph;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import HistoryNav from '../partials/HistoryNav';
import { moodActions } from '../../actions/moodActions';
import { MDBBtn, MDBContainer } from 'mdbreact';

function mapStateToProps(state){
    const { saveMood, authentication } = state;
    const { user } = authentication;
    const { moods } = saveMood; 
    return {
        moods,
        user
    }
}

class ConnectedMoodHistory extends Component {
    constructor(props){
        super();

        this.state = {
            data: {}
        }

        this.drawChart = this.drawChart.bind(this);
        
    }

    componentDidMount() {
        const { dispatch, user } = this.props;
        dispatch(moodActions.getMoodHistory(user.response));
        this.drawChart();
    }

    drawChart() {
        const { moods } = this.props;
        
    }

    render() {

        const navStyle = {
            marginBottom: '35px'
        }

        const containerStyle = {
            outline: 'dashed, 1px'
        }

        return (
            <div className="content">
            <HistoryNav style={navStyle} />
            <div className="container">
            <MDBBtn outline color='red lighten-3' onClick={this.drawChart()}>
            Fetch History
            </MDBBtn>
           <MDBContainer style={containerStyle}>

            </MDBContainer>
            </div>
            </div>
        )
    }

}

const MoodHistory = connect(mapStateToProps)(ConnectedMoodHistory);

export default MoodHistory;
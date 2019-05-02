import React, { Component } from 'react';
import { connect } from 'react-redux';
import HistoryNav from '../partials/HistoryNav';
import { moodActions } from '../../actions/moodActions';
import { MDBBtn, MDBContainer } from 'mdbreact';
import MoodChart from './MoodChart';

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
            loaded: false,
            data: ''
        }

        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
        const { dispatch, user } = this.props;
        dispatch(moodActions.getMoodHistory(user.response));
    }

    fetchData() {
        const { moods } = this.props;
        let tempData = JSON.parse(moods);
        let data = [];
        Object.keys(tempData).forEach((e) => (
            data.push(tempData[e])
        ));
        this.setState({ data: data, loaded: true });
    }

    render() {

        const navStyle = {
            marginBottom: '35px'
        }

        return (
            <div className="content">
            <HistoryNav style={navStyle} />
            <div className="container">
            <MDBBtn id="fetchButton" outline color='red lighten-3' onClick={this.fetchData}>
            Click Twice to Render Graph
            </MDBBtn>
           <MDBContainer>
            <MoodChart data={this.state.data} loaded={this.state.loaded} style={{ paddingLeft: '-50px'}}/>
            </MDBContainer>
            </div>
            </div>
        )
    }

}

const MoodHistory = connect(mapStateToProps)(ConnectedMoodHistory);

export default MoodHistory;
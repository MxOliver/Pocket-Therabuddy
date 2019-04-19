import React, { Component } from 'react';
import { connect } from 'react-redux';
import HistoryNav from '../partials/HistoryNav';

function mapStateToProps(state){
    return {
        mood: state.mood
    }
}

class ConnectedMoodHistory extends Component {
    constructor(props){
        super();

        this.state = {
            data: {}
        }
        
    }

    componentDidMount() {
        this.callApi().then(res => this.setState({ data: res.data }))
        .catch(err => console.log(err));
    }

    callApi = async () => {
        const data = await fetch('/api/moodtracker/history');
        const body = await data.json();

        if(data.status !== 200) throw Error(body.message);

        return body;
    }

    render() {
        const navStyle = {
            marginBottom: '35px'
        }

        return (
            <div className="content">
            <HistoryNav style={navStyle} />
            <div className="container">
            
            </div>
            </div>
        )
    }

}

const MoodHistory = connect(mapStateToProps)(ConnectedMoodHistory);

export default MoodHistory;
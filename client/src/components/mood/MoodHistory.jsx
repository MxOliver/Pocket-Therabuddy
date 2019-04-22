import React, { Component } from 'react';
import { connect } from 'react-redux';
import HistoryNav from '../partials/HistoryNav';
import { moodActions } from '../../actions/moodActions';
import { userActions } from '../../actions/userActions';
import { MDBBtn, MDBContainer, MDBRow } from 'mdbreact';

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
            data: {},
            dataLoaded: false,
        }

        this.fetchHistory = this.fetchHistory.bind(this);
        
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(userActions.getCurrentUser());
    }

    fetchHistory(){
        const { dispatch, user } = this.props;
        dispatch(moodActions.getMoodHistory(user.response));
        this.setState({ dataLoaded: true });
    }

    render() {
        const { moods } = this.props;
        const { dataLoaded } = this.state;


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
            <MDBBtn outline color='red lighten-3' onClick={this.fetchHistory}>
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
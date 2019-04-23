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
            moods: '',
            data: {
                type: '',
                level: '',
                date: ''
            }
        }

        this.drawChart = this.drawChart.bind(this);
        this.formatData = this.formatData.bind(this);
        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        const { dispatch, user } = this.props;
        dispatch(moodActions.getMoodHistory(user.response));
    }

    componentDidUpdate(props, state){
        if(props.moods !== state.moods){
            return {
                moods: props.moods,
            };
        }
       return null;
    }

    getData(){
    const { moods } = this.props;
    for(var i = 0; i < moods.length; i++){
        const obj = moods[i];
        console.log(obj.moodselect);
    }
    }

    formatData() {
        const { data } = this.state;
        const values = Object.values(data);
        console.log(values);
    }

    drawChart() {
        
        
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
            <MDBBtn outline color='red lighten-3' onClick={this.getData}>
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
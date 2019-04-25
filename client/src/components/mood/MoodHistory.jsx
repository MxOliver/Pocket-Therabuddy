import React, { Component } from 'react';
import { connect } from 'react-redux';
import HistoryNav from '../partials/HistoryNav';
import { moodActions } from '../../actions/moodActions';
import { MDBBtn, MDBContainer, MDBJumbotron, MDBCardBody, MDBCardHeader } from 'mdbreact';
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory';


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
            dataPoints: [],
            happy: [],
            sad: [],
            angry: [],
            active: [],
            fine: [],
            tired: [],
            anxious: [],
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
    let happy = [];
    let sad = [];
    let anxious = [];
    let angry = [];
    let active = [];
    let tired = [];
    let fine = [];
    for(let i = 0; i < data.length; i++){
        Object.values(data[i]).forEach(e => {
            if(e['moodselect'] === "happy"){
                happy.push(
                    { x: new Date(Date.parse(e['createdAt'])).toDateString(), y: e['moodlevel'] }
                )
            }
            if(e['moodselect'] === "sad"){
                sad.push(
                    { x: new Date(Date.parse(e['createdAt'])).toDateString(), y: e['moodlevel'] }
                )
            }
            if(e['moodselect'] === "active"){
                active.push(
                    { x: new Date(Date.parse(e['createdAt'])).toDateString(), y: e['moodlevel'] }
                )
            }
            if(e['moodselect'] === "anxious"){
                anxious.push(
                    { x: new Date(Date.parse(e['createdAt'])).toDateString(), y: e['moodlevel'] }
                )
            }
            if(e['moodselect'] === "angry"){
                angry.push(
                    { x: new Date(Date.parse(e['createdAt'])).toDateString(), y: e['moodlevel'] }
                )
            }
            if(e['moodselect'] === "fine"){
                fine.push(
                    { x: new Date(Date.parse(e['createdAt'])).toDateString(), y: e['moodlevel'] }
                )
            }
            if(e['moodselect'] === "tired"){
                tired.push(
                    { x: new Date(Date.parse(e['createdAt'])).toDateString(), y: e['moodlevel'] }
                )
            }
        })
    };

    this.setState({ happy: happy, sad: sad, angry: angry, anxious: anxious, tired: tired, fine: fine, active: active, loaded: true })
    }


    render() {
        const { happy, sad, tired, anxious, angry, active, fine, loaded } = this.state;
        const { fetched } = this.props;
        let moodChart = null;
        if(loaded === false){
            if(fetched === false){
                moodChart = (
                    <em>Data is loading...</em>
                )
            } else {
                moodChart = (
                    <em>Ready when you are... </em>
                )
            }
        } else {
            console.log(happy);
            console.log(active);
            console.log(sad);
            console.log(fine);
            moodChart = (
                <div className="charts">
                <MDBContainer>
                            <MDBJumbotron style={{ padding: '5px' }}>
                            <MDBCardHeader style={{ background: '#80cbc4', border: '1px #b71c1c', paddingBottom: '10px', paddingTop: '20px', height: '60px' }}>Happy, Joyful, Relaxed, Silly, Content</MDBCardHeader>
                            <MDBCardBody>
                                <VictoryChart 
                                    theme={VictoryTheme.material}
                                    >
                                    <VictoryLine
                                        style={{
                                            data: { stroke: "#80cbc4", strokeWidth: 4 },
                                            parent: { border: "2px dashed #80cbc4"}
                                        }}
                                        range={{ y: [0, 100]}}
                                        scale={{x: 'time', y: 'linear'}}
                                        data={happy} />
                                </VictoryChart>
                            </MDBCardBody>
                            </MDBJumbotron>

                        <MDBJumbotron style={{ padding: '5px' }}>
                            <MDBCardHeader style={{ background: '#80cbc4', border: '1px #b71c1c', paddingBottom: '10px', paddingTop: '20px', height: '60px' }}>Sad, Lonely, Depressed, Insecure, Numb</MDBCardHeader>
                            <MDBCardBody>
                                <VictoryChart 
                                    theme={VictoryTheme.material}
                                    >
                                    <VictoryLine
                                        style={{
                                            data: { stroke: "#ef9a9a", strokeWidth: 4 },
                                            parent: { border: "2px dashed #80cbc4"}
                                        }}
                                        range={{ y: [0, 100]}}
                                        scale={{x: 'time', y: 'linear'}}
                                        data={sad} />
                                </VictoryChart>
                            </MDBCardBody>
                            </MDBJumbotron>
                       
                        <MDBJumbotron style={{ padding: '5px' }}>
                        <MDBCardHeader style={{ background: '#80cbc4', border: '1px #b71c1c', paddingBottom: '10px', paddingTop: '20px', height: '60px' }}>Energetic, Motivated, Active, Productive</MDBCardHeader>
                            <MDBCardBody>
                                <VictoryChart 
                                    theme={VictoryTheme.material}
                                    >
                                    <VictoryLine
                                        style={{
                                            data: { stroke: "#4f9a94", strokeWidth: 4 },
                                            parent: { border: "2px dashed #80cbc4"}
                                        }}
                                        range={{ y: [0, 100]}}
                                        scale={{x: 'time', y: 'linear'}}
                                        data={active} />
                                </VictoryChart>
                            </MDBCardBody>
                            </MDBJumbotron>
                       
                            <MDBJumbotron style={{ padding: '5px' }}>
                            <MDBCardHeader style={{ background: '#80cbc4', border: '1px #b71c1c', paddingBottom: '10px', paddingTop: '20px', height: '60px' }}>Tired, Sick, Unmotivated, Bored</MDBCardHeader>
                            <MDBCardBody>
                                <VictoryChart 
                                    theme={VictoryTheme.material}
                                    >
                                    <VictoryLine
                                        style={{
                                            data: { stroke: "#80cbc4", strokeWidth: 4 },
                                            parent: { border: "2px dashed #80cbc4"}
                                        }}
                                        range={{ y: [0, 100]}}
                                        scale={{x: 'time', y: 'linear'}}
                                        data={tired} />
                                </VictoryChart>
                            </MDBCardBody>
                            </MDBJumbotron>
                       
                        <MDBJumbotron style={{ padding: '5px' }}>
                            <MDBCardHeader style={{ background: '#80cbc4', border: '1px #b71c1c', paddingBottom: '10px', paddingTop: '20px', height: '60px' }}>Uneventful, Fine</MDBCardHeader>
                            <MDBCardBody>
                                <VictoryChart 
                                    theme={VictoryTheme.material}
                                    >
                                    <VictoryLine
                                        style={{
                                            data: { stroke: "#ba6b6c", strokeWidth: 4 },
                                            parent: { border: "2px dashed #80cbc4"}
                                        }}
                                        range={{ y: [0, 100]}}
                                        scale={{x: 'time', y: 'linear'}}
                                        data={fine} />
                                </VictoryChart>
                            </MDBCardBody>
                            </MDBJumbotron>
                        
                        <MDBJumbotron style={{ padding: '5px' }}>
                        <MDBCardHeader style={{ background: '#80cbc4', border: '1px #b71c1c', paddingBottom: '10px', paddingTop: '20px', height: '60px' }}>Anxious, Worried, Nervous, Restless</MDBCardHeader>
                            <MDBCardBody>
                                <VictoryChart 
                                    theme={VictoryTheme.material}
                                    >
                                    <VictoryLine
                                        style={{
                                            data: { stroke: "#b71c1c", strokeWidth: 4 },
                                            parent: { border: "2px dashed #80cbc4"}
                                        }}
                                        range={{ y: [0, 100]}}
                                        scale={{x: 'time', y: 'linear'}}
                                        data={anxious} />
                                </VictoryChart>
                            </MDBCardBody>
                            </MDBJumbotron>
                       
                        <MDBJumbotron style={{ padding: '15px' }}>
                            <MDBCardHeader style={{ background: '#80cbc4', border: '1px #b71c1c', paddingBottom: '10px', paddingTop: '20px', height: '60px' }}>Angry, Frustrated, Annoyed, Grumpy, Irritated</MDBCardHeader>
                            <MDBCardBody>
                                <VictoryChart 
                                    theme={VictoryTheme.material}
                                    >
                                    <VictoryLine
                                        style={{
                                            data: { stroke: "#4f9a94", strokeWidth: 4 },
                                            parent: { border: "2px dashed #80cbc4"}
                                        }}
                                        range={{ y: [0, 100]}}
                                        scale={{x: 'time', y: 'linear'}}
                                        data={angry} />
                                </VictoryChart>
                            </MDBCardBody>
                            </MDBJumbotron>
                       
                    </MDBContainer>
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
            Fetch History
            </MDBBtn>
           <MDBContainer style={{ height: '500px', width: '700px', padding: '25px'}}>
            {moodChart}
            </MDBContainer>
            </div>
            </div>
        )
    }

}

const MoodHistory = connect(mapStateToProps)(ConnectedMoodHistory);

export default MoodHistory;
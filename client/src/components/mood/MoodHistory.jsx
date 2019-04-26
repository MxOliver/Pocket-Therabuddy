import React, { Component } from 'react';
import { connect } from 'react-redux';
import HistoryNav from '../partials/HistoryNav';
import { moodActions } from '../../actions/moodActions';
import { MDBBtn, MDBContainer } from 'mdbreact';
import { ResponsiveLine } from '@nivo/line';

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
                    { x: new Date(Date.parse(e['createdAt'])).toTimeString(), y: e['moodlevel']}
                )
            }
            if(e['moodselect'] === "sad"){
                sad.push(
                    { x: new Date(Date.parse(e['createdAt'])).toTimeString(), y: e['moodlevel'] }
                )
            }
            if(e['moodselect'] === "active"){
                active.push(
                    { x: new Date(Date.parse(e['createdAt'])).toTimeString(), y: e['moodlevel'] }
                )
            }
            if(e['moodselect'] === "anxious"){
                anxious.push(
                    { x: new Date(Date.parse(e['createdAt'])).toTimeString(), y: e['moodlevel'] }
                )
            }
            if(e['moodselect'] === "angry"){
                angry.push(
                    { x: new Date(Date.parse(e['createdAt'])).toTimeString(), y: e['moodlevel'] }
                )
            }
            if(e['moodselect'] === "fine"){
                fine.push(
                    { x: new Date(Date.parse(e['createdAt'])).toTimeString(), y: e['moodlevel'] }
                )
            }
            if(e['moodselect'] === "tired"){
                tired.push(
                    { x: new Date(Date.parse(e['createdAt'])).toTimeString(), y: e['moodlevel'] }
                )
            }
        })
    };
    let dataPoints = [];
    dataPoints.push(
        {id: 'happy', data: happy }, 
        {id: 'sad', data: sad }, 
        {id: 'angry', data: angry}, 
        {id: 'anxious', data: anxious}, 
        {id: 'tired', data: tired}, 
        {id: 'fine', data: fine}, 
        {id: 'active', data: active});
    this.setState({ dataPoints: dataPoints, loaded: true })
    }


    render() {
        const { dataPoints, loaded } = this.state;
        const { fetched } = this.props;
        let moodChart = null;
        console.log(dataPoints);
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
            moodChart = (
                <div className="charts">
                <MDBContainer style={{ padding: '5px', height: '600px', width: '700px' }}>
                                <ResponsiveLine 
                                    data={dataPoints}
                                    margin={{
                                        "top": 50,
                                        "right": 110,
                                        "bottom": 50,
                                        "left": 60
                                    }}
                                    xScale={{
                                        'type': 'point',
                                        
                                    }}
                                    yScale={{
                                        'type': 'linear',
                                        'stacked': true,
                                        'min': 0,
                                        'max': 100
                                    }}
                                    curve='cardinal'
                                    axisBottom={{
                                        'orient': 'bottom',
                                        'legend': 'Date',
                                        'legendPosition': 'middle'
                                    }}
                                    axisLeft={{
                                        'orient': 'left',
                                        'legend': 'Intensity',
                                        'legendPosition': 'middle'
                                    }}
                                    colors={{
                                        'scheme': 'nivo'
                                    }}
                                    lineWidth={4}
                                    dotSize={10}
                                    dotColor={{
                                        'theme': 'background'
                                    }}
                                    dotBorderWidth={2}
                                    dotBorderColor={{
                                        'from': 'color'
                                    }}
                                    enableDotLabel={true}
                                    dotLabel='y'
                                    dotLabelYOffset={-12}
                                    animate={true}
                                    legends={[
                                        {
                                            "anchor": "bottom-right",
                                            "direction": "column",
                                            "justify": false,
                                            "translateX": 100,
                                            "translateY": 0,
                                            "itemsSpacing": 0,
                                            "itemDirection": "left-to-right",
                                            "itemWidth": 80,
                                            "itemHeight": 20,
                                            "itemOpacity": 0.75,
                                            "symbolSize": 12,
                                            "symbolShape": "circle",
                                            "symbolBorderColor": "rgba(0, 0, 0, .5)",
                                            "effects": [
                                                {
                                                    "on": "hover",
                                                    "style": {
                                                        "itemBackground": "rgba(0, 0, 0, .03)",
                                                        "itemOpacity": 1
                                                    }
                                                }
                                            ]
                                        }
                                    ]}
                                    >
                                </ResponsiveLine>
                       
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
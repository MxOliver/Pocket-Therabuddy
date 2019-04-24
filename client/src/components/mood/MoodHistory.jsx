import React, { Component } from 'react';
import { connect } from 'react-redux';
import HistoryNav from '../partials/HistoryNav';
import { moodActions } from '../../actions/moodActions';
import { MDBBtn, MDBContainer } from 'mdbreact';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend } from 'recharts';

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
            moods: '',
            dataPoints: [],
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
        const m = []; const l = []; const d = [];
        JSON.parse(moods, function(key, value){
            if(key === "moodselect"){
                m.push(value);
            } 
            if(key === "moodlevel"){
                l.push(value);
            }
            if(key === "createdAt"){
                d.push(value);
            }
        });
        const dataPoints = [];
        for(let i = 0; i < m.length; i++){
            dataPoints.push({
                [m[i]]: m[i],
                level: l[i],
                date: new Date(Date.parse(d[i])).toDateString()
            });
        }
        this.setState({ dataPoints: dataPoints, loaded: true });
    }


    render() {
        const { dataPoints, loaded } = this.state;

        let moodChart = null;
        if(loaded === false){
            moodChart = (
                <em>Data is loading...</em>
            )
        } else {
            moodChart = (
                  <LineChart 
                    data={dataPoints} 
                    margin={{ top: 5, right: 30, left: 20, bottom: 5} }
                    width={700}
                    height={500}
                    >
    
                    <CartesianGrid 
                        strokeDasharray="3 3" />
                    <YAxis 
                        dataKey="level"
                        type="number"
                        />
                    <XAxis 
                        dataKey="date"  
                        type="category" 
                        />
                    <Legend 
                        verticalAlign="top" 
                        height={36} 
                        />
                    <Line 
                        type="monotone" 
                        dataKey="happy"
                        stroke="#ef9a9a" 
                        />
                    <Line 
                        type="monotone" 
                        dataKey="sad"
                        stroke="#80cbc4" 
                        />
                    <Line 
                        type="monotone" 
                        dataKey="active"
                        stroke="#ba6b6c" 
                        />
                    <Line 
                        type="monotone" 
                        dataKey="tired"
                        stroke="#4f9a94" 
                        />
                    <Line 
                        type="monotone" 
                        dataKey="angry"
                        stroke="#b71c1c" 
                        />
                    <Line 
                        type="monotone" 
                        dataKey="anxious"
                        stroke="#ffcccb" 
                        />
                    </LineChart>
            )
        }

        const navStyle = {
            marginBottom: '35px'
        }

        const containerStyle = {
            padding: '25px'
        }

        return (
            <div className="content">
            <HistoryNav style={navStyle} />
            <div className="container">
            <MDBBtn id="fetchButton" outline color='red lighten-3' onClick={this.getData}>
            Fetch History
            </MDBBtn>
           <MDBContainer style={containerStyle}>
            {moodChart}

            </MDBContainer>
            </div>
            </div>
        )
    }

}

const MoodHistory = connect(mapStateToProps)(ConnectedMoodHistory);

export default MoodHistory;
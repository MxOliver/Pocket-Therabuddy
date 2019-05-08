import React, { Component } from 'react';
import { connect } from 'react-redux';
import { habitActions } from '../../actions/habitActions';
import { MDBBtn, MDBContainer } from 'mdbreact';
import HabitNav from '../partials/HabitNav';
import HabitChart from './HabitChart';

function mapStateToProps(state) {
    const { user } = state.authentication;
    const { habits } = state.fetchHabits;
    return {
        user,
        habits
    }
}

class ConnectedHabitHistory extends Component {
    constructor(props){
        super();

        this.state = {
            loaded: false,
            data: ''
        }

        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount(){
        const { dispatch, user } = this.props;
        dispatch(habitActions.fetchHistory(user.response));
    }

    fetchData() {
        const { habits } = this.props;
        this.setState({ loaded: true, data: habits })
    }

    render() {
        const navStyle = {
            marginBottom: '35px'
        }

        const { data, loaded } = this.state;

        return (
            <div className="content">
            <HabitNav style={navStyle} />
            <div className="container">
            <MDBBtn id="fetchButton" outline color='red lighten-3' onClick={this.fetchData}>
            Click Twice to Render Graph
            </MDBBtn>
           <MDBContainer text-center>
            <HabitChart data={data} loaded={loaded}/>
            </MDBContainer>
            </div>
            </div>
        )
    }

}

const HabitHistory = connect(mapStateToProps)(ConnectedHabitHistory);

export default HabitHistory;
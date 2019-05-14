import React, { Component } from 'react';
import NavBar from './partials/NavBar';
import Landing from './Landing';
import AddMood from './mood/AddMood';
import MoodHistory from './mood/MoodHistory'
import MoodNotes from './mood/MoodNotes';
import Dashboard from './Dashboard';
import MoodJumbotron from './mood/Jumbotron';
import SignInForm from './partials/SignIn';
import SignUpForm from './partials/SignUp';
import { connect } from 'react-redux';
import Page404 from './Page404';
import { history } from '../helpers/history';
import { alertActions } from '../actions/alertActions';
import { Router, Switch, Route } from 'react-router-dom';
import HabitLanding from './habit/habitLanding';
import AddHabit from './habit/AddHabit';
import HabitHistory from './habit/HabitHistory';
import MoodHabitHistory from './tracking/MoodHabitHistory';

class connectedApp extends Component {
    constructor(props){
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            dispatch(alertActions.clear());
        });
    }


    render(){

        return (
            <div>
                {alert.message && <div className={`alert ${alert.type}`}>{alert.message}</div>}
            <Router history={history}>
            <div className="App">
            <NavBar />
            <main className="content">
                <Switch>
                    <Route exact path="/" component={Landing}/>
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/moodtracker" component={MoodJumbotron}/>
                    <Route expact path="/sign_in" component={SignInForm}/>
                    <Route exact path="/sign_up" component={SignUpForm}/>
                    <Route path="/moodtracker/add" component={AddMood} />
                    <Route path="/moodtracker/history" component={MoodHistory} />
                    <Route exact path="/habittracker" component={HabitLanding} />
                    <Route path="/habittracker/add" component={AddHabit} />
                    <Route path="/habittracker/history" component={HabitHistory} />
                    <Route path="/trackerhistory" component={MoodHabitHistory} />
                    <Route component={Page404} />
                </Switch>
            </main>
            </div>
            </Router>
            </div>
        )
    }
}

function mapStateToProps(state){
    const { alert } = state;
    return {
        alert
    };
}

const App = connect(mapStateToProps)(connectedApp);

export default App;
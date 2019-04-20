import React, { Component } from 'react';
import NavBar from './partials/NavBar';
import Landing from './Landing';
import AddMood from './mood/AddMood';
import MoodHistory from './mood/MoodHistory'
import MoodJumbotron from './mood/Jumbotron';
import SignInForm from './partials/SignIn';
import SignUpForm from './partials/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
    constructor(props){
        super();

        this.state = {
            currentUser: ''
        }
    }

    render(){
        return (
            <Router>
            <div className="App">
            <NavBar />
            <main className="content">
                <Switch>
                    <Route exact path="/" component={Landing}/>
                    <Route exact path="/moodtracker" component={MoodJumbotron}/>
                    <Route expact path="/sign_in" component={SignInForm}/>
                    <Route exact path="/sign_up" component={SignUpForm}/>
                    <Route path="/moodtracker/add" component={AddMood} />
                    <Route path="/moodtracker/history" component={MoodHistory} />
                </Switch>
            </main>
            </div>
            </Router>
        )
    }
}

export default App;
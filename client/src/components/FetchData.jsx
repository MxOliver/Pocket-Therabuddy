import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid';
import { addMood } from '../actions/index';

function mapDispatchToProps(dispatch){
    return {
        addMood: mood => dispatch(addMood(mood))
    }
}

class ConnectedData extends Component {
    constructor(){
        super();

        this.state = {
            response: '',
            post: '',
            responseToPost: '',
            fetchedData: {
                type: [],
                level: [],
                date: [],
                userId: [],
            },
            save: false
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleOutput = this.handleOutput.bind(this);
        this.callApi = this.callApi.bind(this);
    }

    componentDidMount() {
        this.callApi().then(res => this.setState({ response: res.data }))
        .catch(err => console.log(err));
    }
    
    callApi = async () => {
        const response = await fetch('/api/moodHistory');
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        return body;
    }

    handleInput(){
        for(let value of Object.values(this.state.response)){
            console.log(value);
        }
    }

    handleOutput(e){
        e.preventDefault();
        const { fetchedData } = this.state;
        const id = uuidv1();
        this.props.addMood({ fetchedData, id}); 
        this.setState({ fetchedData: {}, save: true});
    }

    render() {
        return (
            <div class="chart">
            <button class="btn btn-warning" onClick={this.handleInput}>Input</button>
            <button class="btn btn-success" onClick={this.handleOutput}>Output</button>
            </div>
        )
    }
}

const FetchData = connect(null, mapDispatchToProps)(ConnectedData);

export default FetchData;
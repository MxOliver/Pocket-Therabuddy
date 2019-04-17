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
    }

    handleInput(e){

    }

    handleOutput(e){
        e.preventDefault();
        const { fetchedData } = this.state;
        const id = uuidv1();
        this.props.addMood({ fetchedData, id}); 
        this.setState({ fetchedData: {}, save: true});
    }
}

const FetchData = connect(null, mapDispatchToProps)(ConnectedData);

export default FetchData;
import React, { Component } from 'react';
import { MDBInput, MDBContainer, MDBRow, MDBBtn } from "mdbreact";
import HistoryNav from '../partials/HistoryNav';

class AddMood extends Component {
    constructor(props){
        super();

        this.state = {
            moodselect: '',
            moodlevel: '',
            option: ''
        }

        this.handleMoodSelect = this.handleMoodSelect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRange = this.handleRange.bind(this);
    }

    handleMoodSelect(e){
        e.preventDefault();
        this.setState({ option: e.target.value });
    }
    
    handleRange(e){
        e.preventDefault();
        this.setState({ moodlevel: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ moodselect: this.state.option });
    }

    render() {
        const radioStyle = {
            background: "#80CBC4",
            border: "#80CBC4"
        }
    
        const rangeStyle = {
            background: "#80CBC4",
            width: "500px",
            marginTop: "15px",
            marginBottom: "35px"
        }
    
        const textareaStyle = {
            color: 'red lighten-3'
        }

        const navStyle = {
            marginBottom: '35px'
        }

        return (
            <div className="content">
            <HistoryNav style={navStyle}/>
            <form onSubmit={this.handleSubmit}>
            <MDBContainer className="addMood">
                
                <MDBRow>
                <div id="moodselect">
                <p className="h5 mb-4">Mood</p>

                <div className="form-check">
                <label htmlFor="happy">
                    <input 
                        className="form-check-input" 
                        style={radioStyle} 
                        type="radio" 
                        id="happy" 
                        value="happy" 
                        onChange={this.handleMoodSelect} 
                        checked={this.state.option === 'happy'} 
                        />
                    Happy, Joyful, Relaxed, Silly, Content
                    </label>
                </div>

                <div className="form-check">
                <label htmlFor="sad">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        style={radioStyle} 
                        id="sad" 
                        value="sad" 
                        onChange={this.handleMoodSelect} 
                        checked={this.state.option === 'sad'}
                        />
                        Sad, Lonely, Depressed, Insecure, Numb
                        </label>
                </div>

                <div className="form-check">
                <label htmlFor="active">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        style={radioStyle} 
                        id="active" 
                        value="active" 
                        onChange={this.handleMoodSelect} 
                        checked={this.state.option === 'active'} 
                        />
                    Energetic, Motivated, Active, Productive
                    </label>
                </div>

                <div className="form-check">
                <label htmlFor="tired">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        id="tired" 
                        value="tired" 
                        style={radioStyle} 
                        onChange={this.handleMoodSelect} 
                        checked={this.state.option === 'tired'} 
                        />
                    Tired, Sick, Unmotivated, Bored
                    </label>
                </div>

                <div className="form-check">
                <label htmlFor="fine">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        id="fine" 
                        value="fine" 
                        style={radioStyle} 
                        onChange={this.handleMoodSelect} 
                        checked={this.state.option === 'fine'} 
                        />
                    Uneventful, Fine
                    </label>
                </div>

                <div className="form-check">
                <label htmlFor="anxious">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        id="anxious" 
                        value="anxious" 
                        style={radioStyle} 
                        onChange={this.handleMoodSelect} 
                        checked={this.state.option === 'anxious'} 
                        />
                    Anxious, Worried, Nervous, Restless
                    </label>
                </div>


                <div className="form-check">
                <label htmlFor="angry">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        id="angry" 
                        value="angry" 
                        style={radioStyle} 
                        onChange={this.handleMoodSelect} 
                        checked={this.state.option === 'angry'} 
                        />
                    Angry, Frustrated, Annoyed, Grumpy, Irritated
                    </label>
                </div>
                </div>
                </MDBRow>

                <MDBRow center>
                    <div className="my-5">
                    <p className="text-center">Intensity Level</p>
                    <span className="mr-2">Barely There</span>
                    <input 
                        type="range"
                        id="moodlevel"
                        list="tickmarks"
                        style={rangeStyle}
                        onChange={this.handleRange}
                        />
                    <span className="ml-2">Off the Charts</span>
                    <datalist id="tickmarks">
                        <option value='5' label="Barely There" />
                        <option value='10' />
                        <option value='15' />
                        <option value='20' label="Significant" />
                        <option value='25' />
                        <option value='30' />
                        <option value='35' label="Strong" />
                        <option value='40' />
                        <option value='45' />
                        <option value='50' label="Off the Charts" />
                        <option value='55' />
                    </datalist>
                    </div>
                </MDBRow>

                <MDBRow>
                    <label htmlFor="moodnotes">Notes</label>
                    <MDBInput type="textarea" id="moodnotes" rows="3" cols="45" style={textareaStyle}/>
                </MDBRow>

                <MDBBtn outline color="red lighten-3" type="submit">Save</MDBBtn>

            </MDBContainer>
            </form>
            </div>
        )
    }
}

export default AddMood;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MDBInput, MDBContainer, MDBRow, MDBBtn } from "mdbreact";
import HistoryNav from '../partials/HistoryNav';
import { moodActions } from '../../actions/moodActions';

function mapStateToProps(state) {
    const { saveMood, authentication } = state;
    const { user } = authentication;
    const { mood } = saveMood;
    return {
        mood,
        user
    };
}

class ConnectedMoodForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            mood: {
                moodselect: '',
                moodlevel: '',
                notes: '',
            },
            isChecked: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e){
        e.preventDefault();
        const { name, value } = e.target;
        const { mood } = this.state;
        this.setState({ 
        mood: {
            ...mood,
            [name]: value
        }
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { mood } = this.state;
        const { dispatch, user } = this.props;
        const newMood = {
            moodselect: mood.moodselect,
            moodlevel: mood.moodlevel,
            moodnotes: mood.moodnotes,
            date: new Date(),
            userId: user.response.id
        }
        if(newMood){
            dispatch(moodActions.addMood(newMood));
        }
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
                        onChange={this.handleChange}
                        name="moodselect" 
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
                        name="moodselect" 
                        onChange={this.handleChange} 
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
                        name="moodselect"  
                        onChange={this.handleChange} 
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
                        name="moodselect" 
                        onChange={this.handleChange} 
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
                        name="moodselect" 
                        style={radioStyle} 
                        onChange={this.handleChange} 
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
                        name="moodselect"  
                        style={radioStyle} 
                        onChange={this.handleChange} 
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
                        name="moodselect" 
                        style={radioStyle} 
                        onChange={this.handleChange}  
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
                        name="moodlevel"
                        id="moodlevel"
                        list="tickmarks"
                        style={rangeStyle}
                        onChange={this.handleChange}
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
                    <MDBInput 
                        type="textarea" 
                        name="moodnotes" 
                        onChange={this.handleChange} 
                        id="moodnotes" 
                        rows="3" 
                        cols="45" 
                        style={textareaStyle}/>
                </MDBRow>

                <MDBBtn outline color="red lighten-3" type="submit">Save</MDBBtn>

            </MDBContainer>
            </form>
            </div>
        )
    }
}

const AddMood = connect(mapStateToProps)(ConnectedMoodForm);

export default AddMood;
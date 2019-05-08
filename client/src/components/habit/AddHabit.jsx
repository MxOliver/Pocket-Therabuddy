import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MDBInput, MDBContainer, MDBRow, MDBBtn } from "mdbreact";
import HabitNav from '../partials/HabitNav';
import { habitActions } from '../../actions/habitActions';

function mapSateToProps(state) {
    const { user } = state.authentication;
    const { habit } = state.saveHabit;
    return {
        user, habit
    } 
}

class ConnectedHabit extends Component {
    constructor(props){
        super(props);

        this.state = {
            habit: {
                type: '',
                frequency: '',
                notes: ''
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        const { name, value } = e.target;
        const { habit } = this.state;
        this.setState({
            habit: {
                ...habit,
                [name]: value
            }
         });
    }

    handleSubmit(e){
        e.preventDefault();
        const { dispatch, user } = this.props;
        const { habit } = this.state;
        const newHabit = {
            type: habit.type,
            frequency: habit.frequency,
            notes: habit.notes,
            userId: user.response.id,
            date: new Date()
        }
        if(newHabit){
            dispatch(habitActions.create(newHabit))
        }
    }

    render() {
        const navStyle = {
            marginBottom: '35px'
        }

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

        return (
            <div className="content">
                <HabitNav style={navStyle}/>
                <form onSubmit={this.handleSubmit}>
                <MDBContainer id="addHabit">
                    <MDBRow>
                        <div id="habittype">
                        <p className="h5 mb-4">Habit</p>

                        <div className="form-check">
                        <label htmlFor="sleep">
                        <input
                            className="form-check-input"
                            style={radioStyle}
                            id="sleep"
                            name="type"
                            value="sleep"
                            type="radio"
                            onChange={this.handleChange}
                            />
                        Sleep
                        </label>
                        </div>

                        <div className="form-check">
                        <label htmlFor="outside">
                        <input
                            className="form-check-input"
                            style={radioStyle}
                            id="outside"
                            name="type"
                            value="time outside"
                            type="radio"
                            onChange={this.handleChange}
                            />
                        Time Spent Outside
                        </label>
                        </div>

                        <div className="form-check">
                        <label htmlFor="social">
                        <input
                            className="form-check-input"
                            style={radioStyle}
                            id="social"
                            name="type"
                            value="social interaction"
                            type="radio"
                            onChange={this.handleChange}
                            />
                        Social Interaction
                        </label>
                        </div>

                        <div className="form-check">
                        <label htmlFor="exercise">
                        <input
                            className="form-check-input"
                            style={radioStyle}
                            id="exercise"
                            name="type"
                            value="exercise"
                            type="radio"
                            onChange={this.handleChange}
                            />
                        Exercise
                        </label>
                        </div>

                        <div className="form-check">
                        <label htmlFor="alone">
                        <input
                            className="form-check-input"
                            style={radioStyle}
                            id="alone"
                            name="type"
                            value="time alone"
                            type="radio"
                            onChange={this.handleChange}
                            />
                        Time Spent Alone
                        </label>
                        </div>

                        <div className="form-check">
                        <label htmlFor="hydration">
                        <input
                            className="form-check-input"
                            style={radioStyle}
                            id="hydration"
                            name="type"
                            value="hydration"
                            type="radio"
                            onChange={this.handleChange}
                            />
                        Hydration
                        </label>
                        </div>

                        <div className="form-check">
                        <label htmlFor="leisure">
                        <input
                            className="form-check-input"
                            style={radioStyle}
                            id="leisure"
                            name="type"
                            value="leisure activities"
                            type="radio"
                            onChange={this.handleChange}
                            />
                        Time Spent on Leisure Activities
                        </label>
                        </div>

                        </div>
                    </MDBRow>

                    <MDBRow center>
                        <div className="my-5">
                        <p className="text-center">Habit Frequency</p>
                        <p className="text-center">
                        Think of this range as the time span of one day, how much of your day did you devote to or how frequent did you parciticapte in this habit?</p>

                        <span className="mr-2">Barely Any</span>
                        <input 
                            type="range"
                            name="frequency"
                            id="frequency"
                            list="tickmarks"
                            style={rangeStyle}
                            onChange={this.handleChange}
                            />
                        <span className="ml-2">Maximum Levels</span>
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
                    <label htmlFor="notes">Notes</label>
                    <MDBInput 
                        type="textarea" 
                        name="notes" 
                        onChange={this.handleChange} 
                        id="notes" 
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

const AddHabit = connect(mapSateToProps)(ConnectedHabit);

export default AddHabit;
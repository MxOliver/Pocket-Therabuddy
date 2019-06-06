import React, { Component } from 'react';
import { connect } from 'react-redux';
import { skillActions } from '../../actions/skillActions';
import { MDBInput, MDBContainer, MDBRow, MDBBtn } from "mdbreact";

function mapStateToProps(state) {
    const { user } = state.authentication;
    const { skill } = state.saveSkills;
    return {
        user,
        skill
    }
}

class ConnectedAddSkill extends Component {
    constructor(props){
        super(props);

        this.state = {
            skill: {
                type: '',
                desc: ''
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        const { name, value } = e.target;
        const { skill } = this.state;
        this.setState({ 
            skill: {
                ...skill,
                [name]: value
            }
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const { dispatch, user } = this.props;
        const { skill } = this.state;
        const newSkill = {
            type: skill.type,
            desc: skill.desc,
            userId: user.response.id
        };
        if (newSkill) {
            dispatch(skillActions.addSkill(newSkill));
        }
    }

    render() {

        return (
            <div className="content">
                <form onSubmit={this.handleSubmit}>
                    <MDBContainer id="addSkill">

                        <div id="skillType" className="text-center">

                                <MDBRow center>

                                </MDBRow>
                        </div>

                        <div id="skillDesc" className="text-center">
                                <MDBRow>
                                    <label htmlFor="desc">
                                        Description:
                                    </label>
                                    <MDBInput 
                                        type='textarea'
                                        name='desc'
                                        id='desc'
                                        onChange={this.handleChange}
                                        rows='3'
                                        cols='10'
                                        />
                                </MDBRow>
                        </div>

                        <MDBBtn outline color="red lighten-3" type="submit">Save</MDBBtn>
                        
                    </MDBContainer>
                </form>
            </div>
        )
    }


}

const AddSkill = connect(mapStateToProps)(ConnectedAddSkill);

export default AddSkill;
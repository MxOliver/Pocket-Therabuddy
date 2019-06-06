import React, { Component } from 'react';
import { connect } from 'react-redux';
import { skillActions } from '../../actions/skillActions';

function mapStateToProps(state) {
    const { skills } = state.saveSkills;
    const { user } = state.authentication;
    return {
        skills,
        user
    }
}

class ConnectedSkills extends Component {
    constructor(props){
        super(props);


    }

    componentDidMount() {
        const { dispatch, user } = this.props;
        dispatch(skillActions.fetchSkills(user.response.id))
    }

    render() {
        const { skills } = this.props;

        for(let i in skills){
            console.log(skills[i]);
        }

        return (
            <div className="content">
                
            </div>
        )
    }
}

const SkillLanding = connect(mapStateToProps)(ConnectedSkills);

export default SkillLanding;
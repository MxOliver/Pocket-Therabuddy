import { skillConstants } from '../constants/skillConstants';
import { skillService } from '../services/skillService';
import { alertActions } from './alertActions';
import { history } from '../helpers/history';

export const skillActions = {
    addSkill,
    editSkill,
    getSkill,
    fetchSkills
}

function addSkill(params){
    return dispatch => {
        dispatch(request(params));

        skillService.addSkill(params).then((skill) => {
            dispatch(success(skill));
            history.push(`/copingskills/${skill.id}`)
        },
        error => {
            dispatch(failure(error.toString()));
            dispatch(alertActions.error(error.toString()));
        })
    }

    function request(params) { return { type: skillConstants.ADD_SKILL_REQUEST, params } };
    function success(params) { return { type: skillConstants.ADD_SKILL_SUCCESS, params }};
    function failure(error) { return { type: skillConstants.ADD_SKILL_FAILURE, error }};
}

function editSkill(params) {

}

function getSkill(skillId){
    return dispatch => {
        dispatch(request(skillId));

        skillService.getSkill(skillId).then((skill) => {
            dispatch(success(skill));
        },
        error => {
            dispatch(failure(error.toString()));
            dispatch(alertActions.error(error.toString()));
        })
    }

    function request(skillId) { return { type: skillConstants.SHOW_SKILL_REQUEST, skillId }};
    function success(skill) { return { type: skillConstants.SHOW_SKILL_SUCCESS, skill }};
    function failure(error) { return { type: skillConstants.SHOW_SKILL_FAILURE, error }};

}

function fetchSkills(userId){
    return dispatch => {
        dispatch(request(userId));

        skillService.fetchAllSkills(userId).then((skills) => {
            dispatch(success(skills));
        },
        error => {
            dispatch(failure(error.toString()));
            dispatch(alertActions.error(error.toString()));
        })
    }

    function request(userId) { return { type: skillConstants.FETCH_SKILLS_REQUEST, userId}};
    function success(skills) { return { type: skillConstants.FETCH_SKILLS_SUCCESS, skills }};
    function failure(error) { return { type: skillConstants.FETCH_SKILLS_REQUEST, error }};
}
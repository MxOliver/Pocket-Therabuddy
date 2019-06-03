import { skillConstants } from '../constants/skillConstants';

export function saveSkills(state = {}, action){
    switch (action.type){
        case skillConstants.ADD_SKILL_REQUEST:
            return {
                savingSkill: true,
                skill: action.skill
            };
        case skillConstants.ADD_SKILL_SUCCESS:
            return {
                skillSaved: true,
                skill: action.skill
            };
        case skillConstants.ADD_SKILL_FAILURE:
            return {};
        case skillConstants.SHOW_SKILL_REQUEST:
            return {
                skill: action.skill,
                fetchingSkill: true
            };
        case skillConstants.SHOW_SKILL_SUCCESS:
            return {
                skill: action.skill,
                skillFetched: true
            };
        case skillConstants.SHOW_SKILL_FAILURE:
            return {};
        case skillConstants.FETCH_SKILLS_REQUEST:
            return {
                fetchingSkills: true,
                skills: action.skills
            };
        case skillConstants.FETCH_SKILLS_SUCCESS:
            return {
                skillsFetched: true,
                skills: action.skills
            };
        case skillConstants.FETCH_SKILLS_FAILURE:
            return {};
        default:
            return state;
    }
}
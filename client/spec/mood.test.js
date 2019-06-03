import * as actions from '../src/actions/moodActions';
import * as types from '../src/constants/moodConstants';

describe('actions', () => {
    it('should create an action to add a mood', () => {
        const mood = {moodselect: 'happy', moodlevel: 50, moodnotes: null}
        const expectedAction = {
            type: types.ADD_MOOD_REQUEST,
            mood
        }
        expect(actions.addMood(mood)).toEqual(expectedAction)
    })
})
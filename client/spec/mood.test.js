import { moodActions } from '../src/actions/moodActions';
import jest from 'jest';

const addMood = moodActions.addMood;
const getMoodHistory = moodActions.getMoodHistory;
const newMood = {
    "moodselect": "happy",
    "moodlevel": "67",
    "moodnotes": undefined,
    "date": "Tue Apr 23 2019"
}

test('dispatch mood and return success', () => {
    expect(addMood(newMood)).toBe("success");
});
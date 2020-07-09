import { getCharacter } from '../src/snapshot';
import rick from '../rick.json';

describe('ItsTimeToSnapshots', () => {
    test('SnapshotOfRick', () => {
        expect(getCharacter(rick)).toMatchSnapshot();
    });
});
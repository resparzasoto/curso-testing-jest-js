import { arrayFruits, arrayColor } from '../src/arrays';

describe('A one element exist', () => {
    test('ArrayShouldContainABanana', () => {
        expect(arrayFruits()).toContain('banana');
    });
    test('ArrayShouldNotABanana', () => {
        expect(arrayFruits()).not.toContain('platano');
    });
    test('CheckTheSizeOfAnArray', () => {
        expect(arrayFruits()).toHaveLength(6);
    });
});
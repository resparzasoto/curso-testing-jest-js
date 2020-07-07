import { numbers } from '../src/numbers';

describe('Compare numbers', () => {
    test('TwoMoreTwoShouldBeGreaterThanThree', () => {
        expect(numbers(2, 2)).toBeGreaterThan(3);
    });
    test('TwoMoreTwoShouldBeGreaterThanOrEqualFour', () => {
        expect(numbers(2, 2)).toBeGreaterThanOrEqual(4);
    });
    test('TwoMoreTwoShouldBeLessThanFive', () => {
        expect(numbers(2, 2)).toBeLessThan(5);
    });
    test('TwoMoreTwoShouldBeLessThanOrEqual', () => {
        expect(numbers(2, 2)).toBeLessThanOrEqual(5);
    });
    test('DotTwoMoreDotTwoShouldBeCloseToDotFour', () => {
        expect(numbers(0.2, 0.2)).toBeCloseTo(0.4);
    });
});
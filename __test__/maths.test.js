import { add, subtract, multiply, divide } from '../src/maths';

describe('Mathematics calculations', () => {
    test('OneMoreOneShouldBeTwo', () => {
        expect(add(1, 1)).toBe(2);
    });
    test('OneMoreOneNotShouldBeThree', () => {
        expect(add(1, 1)).not.toBe(3);
    });
    test('OneLessOneShouldBeZero', () => {
        expect(subtract(1, 1)).toBe(0);
    });
    test('OneLessOneShouldNotBeOne', () => {
        expect(subtract(1, 1)).not.toBe(1);
    });
    test('TwoForTwoShouldBeFour', () => {
        expect(multiply(2, 2)).toBe(4);
    });
    test('TwoForTwoShouldNotBeThree', () => {
        expect(multiply(2, 2)).not.toBe(3);
    });
    test('FourDivideInTwoShouldBeTwo', () => {
        expect(divide(4, 2)).toBe(2);
    });
    test('FourDiveInTwoShouldNotBeThree', () => {
        expect(divide(4, 2)).not.toBe(3);
    });
});
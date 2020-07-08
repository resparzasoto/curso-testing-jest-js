import { isTrue, isFalse, isNull, isUndefined } from '../src/true';

describe('Compare truthiness', () => {
    describe('Compare truthiness of null', () => {
        test('NullShouldBeNull', () => {
            expect(isNull()).toBeNull();
        });
    });
    describe('Compare truthiness of true', () => {
        test('TrueShouldBeTruthy', () => {
            expect(isTrue()).toBeTruthy();
        });
    });
    describe('Compare truthiness of false', () => {
        test('FalseShouldBeFalsy', () => {
            expect(isFalse()).toBeFalsy();
        });
        test('FalseShouldNotBeTruthy', () => {
            expect(isFalse()).not.toBeTruthy();
        });
    });
    describe('Compare truthiness of undefined', () => {
        test('UndefinedShouldBeUndefined', () => {
            expect(isUndefined()).toBeUndefined();
        });
    });
});
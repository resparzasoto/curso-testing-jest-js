import { getDataFromApi } from '../src/promise';

describe('Check promises', () => {
    test('CountShouldBeGreaterThan0', done => {
        getDataFromApi('https://rickandmortyapi.com/api/character')
            .then(data => {
                expect(data.info.count).toBeGreaterThan(0);
                done();
            });
    });
    test('ResolveShouldBeHi!', () => {
        return expect(Promise.resolve('Hi!')).resolves.toBe('Hi!')
    });
    test('RejectShouldBeHi!', () => {
        return expect(Promise.reject(new Error('Error'))).rejects.toThrow('Error');
    });
});
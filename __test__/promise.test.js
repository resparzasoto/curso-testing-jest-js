import { getDataFromApi } from '../src/promise';

describe('Check promises', () => {
    test('SendRequestToApi', done => {
        getDataFromApi('https://rickandmortyapi.com/api/character')
            .then(data => {
                expect(data.info.count).toBeGreaterThan(0);
                done();
            });
    });
});
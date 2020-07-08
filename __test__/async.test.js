import { getDataFromApi } from "../src/promise";

describe('CheckAsyncAwait', () => {
    const URL_BASE_API = 'https://rickandmortyapi.com/api/character';
    const URL_ERROR_API = 'http://httpstat.us';

    test('ResultsLengthShouldBeGreaterThan0', async () => {
        const data = await getDataFromApi(URL_BASE_API);
        expect(data.results.length).toBeGreaterThan(0);
    });
    test('NameShouldBeRickSanchez_IfIdIs1', async () => {
        const data = await getDataFromApi(URL_BASE_API + '/1');
        expect(data.name).toEqual('Rick Sanchez');
    });
    test('CreateFiledRequest', async () => {
        await expect(getDataFromApi(URL_ERROR_API + '/404')).rejects.toThrow('Request failed with status code 404');
    });
    test('ResolveAnHi', async () => {
        await expect(Promise.resolve('Hi!')).resolves.toBe('Hi!');
    });
    test('RejectsAnError', async () => {
        await expect(Promise.reject(new Error('Error'))).rejects.toThrow('Error');
    });
});
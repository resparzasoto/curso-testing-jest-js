import { getDataFromApi } from "../src/promise";

describe('CheckAsyncAwait', () => {
    const URL_BASE_API = 'https://rickandmortyapi.com/api/character';

    test('ResultsLengthShouldBeGreaterThan0', async () => {
        const data = await getDataFromApi(URL_BASE_API);
        expect(data.results.length).toBeGreaterThan(0);
    });
    test('NameShouldBeRickSanchez_IfIdIs1', async () => {
        const data = await getDataFromApi(URL_BASE_API + '/1');
        expect(data.name).toEqual('Rick Sanchez');
    });
});
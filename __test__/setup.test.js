beforeAll(() => console.log('Antes de todas las pruebas'));
beforeEach(() => console.log('Antes de cada prueba'));

afterEach(() => console.log('Después de cada prueba'));
afterAll(() => console.log('Después de todas las pruebas'));

describe('BedBeforeExecute', () => {
    test('ShouldBeTruthy', () => {
        expect(true).toBeTruthy();
    });
});
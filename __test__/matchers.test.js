describe('Common matchers', () => {
    const userExpected = {
        name: 'Rubén',
        lastName: 'Esparza',
    };
    const userActual = {
        name: 'Rubén',
        lastName: 'Esparza',
    };
    const userActualNotExpected = {
        name: 'Ruben',
        lastName: 'Esparza',
    };
    test('UserActualAndUserExpectedShouldBeEquals', () => {
        expect(userExpected).toEqual(userActual);
    });
    test('UserActualNotExpectedAndUserExpectedNotShouldBeEquals', () => {
        expect(userExpected).not.toEqual(userActualNotExpected);
    });
});
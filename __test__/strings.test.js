describe('Check strings', () => {
    const text = 'Un bonito texto';

    test('StringShouldContainBonito', () => {
        expect(text).toMatch(/bonito/);
    });
    test('StringShouldNotContainFeo', () => {
        expect(text).not.toMatch(/feo/);
    });
    test('StringShouldHaveLengthFourTeen', () => {
        expect(text).toHaveLength(15);
    });
});
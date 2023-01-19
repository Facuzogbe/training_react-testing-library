const randomString = require('../index');


describe('Probar funcionalidades de randomStrings', () => {

    test('Probar la funcionalidad', () => {
        expect(typeof (randomString())).toBe('string');
    });
    test('Comprobar que no existe una provincia', () => {
        expect(randomString()).not.toMatch(/cordoba/);
    });

});
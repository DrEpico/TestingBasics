const getOne = require('./script.js');

describe('get one', () => {
    test('gets one', () => {
        expect(getOne()).toBe(1);
    });
});
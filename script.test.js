const assignment = require('./script.js');

describe('get one', () => {
    test('gets one', () => {
        expect(assignment.getOne()).toBe(1);
    });
});

describe('capitalise', () => {
    test('Should return the parameter with the first character capitalized.', () => {
        expect(assignment.capitalise('word')).toBe('Word');
    });

    test('Should return the same string if the first character is already capitalized.', () => {
        expect(assignment.capitalise('Word')).toBe('Word');
    });

    test('Should handle an empty string by returning an empty string.', () => {
        expect(assignment.capitalise('')).toBe('');
    });

    //etc.
});
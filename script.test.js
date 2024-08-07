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

describe('reverseString', () => {
    test('Should return the parameter reversed.', () => {
        expect(assignment.reverseString('word')).toBe('drow');
    });
});

describe('calculator', () => {
    test('Should return correct answer for sum operation', () => {
        expect(assignment.calculator.sum(5,33)).toBe(38);
    });

    test('Should return correct answer for subtraction', () => {
        expect(assignment.calculator.subtract(5,33)).toBe(-28);
    });

    test('Should return correct answer for division', () => {
        expect(assignment.calculator.divide(5,33)).toBeCloseTo(0.1515);
        expect(() => calculator.divide(6, 0)).toThrow(Error);
    });

    test('Should return correct answer for multiplication', () => {
        expect(assignment.calculator.multiply(5,33)).toBe(165);
    });
});


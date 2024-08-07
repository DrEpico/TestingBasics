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

describe('analyzeArray', () => {
    test('should return correct analysis for a valid array of numbers', () => {
        const result = assignment.analyzeArray([1, 8, 3, 4, 2, 6]);
        expect(result).toEqual({
            average: 4,
            min: 1,
            max: 8,
            length: 6
        });
    });

    test('should handle an array with a single number', () => {
        const result = assignment.analyzeArray([5]);
        expect(result).toEqual({
            average: 5,
            min: 5,
            max: 5,
            length: 1
        });
    });
    
    test('should throw an error for an empty array', () => {
        expect(() => assignment.analyzeArray([])).toThrow('Input must be a non-empty array of numbers');
    });

    test('should throw an error for an array with non-number elements', () => {
        expect(() => assignment.analyzeArray([1, 'a', 3])).toThrow('Input must be a non-empty array of numbers');
    });

    test('should throw an error for a non-array input', () => {
        expect(() => assignment.analyzeArray('not an array')).toThrow('Input must be a non-empty array of numbers');
    });
});


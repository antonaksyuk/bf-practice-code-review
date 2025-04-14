import { sortNumbers } from './solution.js';

describe('sortNumbers', () => {
    it('sorts an array with positive, negative, zero, and decimal numbers', () => {
        const input = [1.5, 1, -1.5, 0, -1];
        const expected = [-1.5, -1, 0, 1, 1.5];
        expect(sortNumbers(input)).toEqual(expected);
    });

    it('sorts an array of positive integers', () => {
        const input = [3, 1, 4, 1, 5, 9, 2, 6];
        const expected = [1, 1, 2, 3, 4, 5, 6, 9];
        expect(sortNumbers(input)).toEqual(expected);
    });

    it('sorts an array with only negative numbers', () => {
        const input = [-5, -2, -10, -1];
        const expected = [-10, -5, -2, -1];
        expect(sortNumbers(input)).toEqual(expected);
    });

    it('handles arrays with duplicate numbers correctly', () => {
        const input = [5, 2, 8, 2, 5, 1];
        const expected = [1, 2, 2, 5, 5, 8];
        expect(sortNumbers(input)).toEqual(expected);
    });
});

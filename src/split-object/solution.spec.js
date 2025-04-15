import { splitObject } from './solution.js';

describe('splitObject', () => {
    it('must split an object with multiple key-value pairs into an array of objects', () => {
        const input = { name: 'John Doe', age: 30, isActive: true };
        const expected = [
            { name: 'John Doe' },
            { age: 30 },
            { isActive: true },
        ];
        expect(splitObject(input)).toEqual(expected);
    });

    it('should return an empty array for an empty object', () => {
        const input = {};
        const expected = [];
        expect(splitObject(input)).toEqual(expected);
    });

    it('should return an empty array when called without arguments (default value is used)', () => {
        const expected = [];
        expect(splitObject()).toEqual(expected);
    });

    it('should handle null and undefined values ​​correctly', () => {
        const input = { a: null, b: undefined, c: 'value' };
        const expected = [
            { a: null },
            { b: undefined },
            { c: 'value' },
        ];
        expect(splitObject(input)).toEqual(expected);
    });

    it('should correctly handle nested objects and arrays as values', () => {
        const input = {
            user: { id: 1, role: 'admin' },
            permissions: ['read', 'write'],
            token: 'xyz123',
        };
        const expected = [
            { user: { id: 1, role: 'admin' } },
            { permissions: ['read', 'write'] },
            { token: 'xyz123' },
        ];
        expect(splitObject(input)).toEqual(expected);
    });

    it('must handle keys that are numbers (they are converted to strings)', () => {
        const input = { 1: 'one', 2: 'two', '3': 'three' };
        const expected = [
            { '1': 'one' },
            { '2': 'two' },
            { '3': 'three' },
        ];
        expect(splitObject(input)).toEqual(expected);
    });
});

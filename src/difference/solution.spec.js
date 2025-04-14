import { difference } from './solution.js';

describe('difference', () => {
    it('returns values ​​that are not in the second array', () => {
        expect(difference([2, 1], [2, 3])).toEqual([1]);
    });

    it('removes duplicate values ​​but preserves order', () => {
        expect(difference([1, 2, 1], [2, 3])).toEqual([1]);
    });

    it('returns an empty array if all values ​​are excluded', () => {
        expect(difference([1, 2, 3], [1, 2, 3])).toEqual([]);
    });

    it('returns the original array without duplicates if the exclude list is empty', () => {
        expect(difference([1, 2, 2, 3])).toEqual([1, 2, 3]);
    });

    it('works with empty arrays', () => {
        expect(difference([], [1, 2])).toEqual([]);
        expect(difference([1, 2], [])).toEqual([1, 2]);
        expect(difference([], [])).toEqual([]);
    });

    it('works correctly with different types of data', () => {
        expect(difference(['a', 'b', 'a'], ['b'])).toEqual(['a']);
        expect(difference([true, false, true], [false])).toEqual([true]);
    });
});

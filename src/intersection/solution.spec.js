import { intersection } from './solution.js';

describe('intersection', () => {
    it('finds common values', () => {
        expect(intersection([2, 1], [2, 3])).toEqual([2]);
    });

    it('removes duplicates from the result', () => {
        expect(intersection([2, 1, 2], [2, 3])).toEqual([2]);
    });

    it('returns an empty array if there are no common values', () => {
        expect(intersection([1, 2, 3], [4, 5, 6])).toEqual([]);
    });

    it('preserves the order of the first array', () => {
        expect(intersection([1, 2, 3, 4], [4, 2])).toEqual([2, 4]);
    });

    it('works with empty arrays', () => {
        expect(intersection([], [1, 2])).toEqual([]);
        expect(intersection([1, 2], [])).toEqual([]);
        expect(intersection([], [])).toEqual([]);
    });

    it('works with different types of values', () => {
        expect(intersection(['a', 'b', 'c'], ['b', 'd'])).toEqual(['b']);
        expect(intersection([true, false], [false])).toEqual([false]);
    });
});

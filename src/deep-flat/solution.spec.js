import { deepFlat } from './solution.js';

it('returns an empty array when input is empty', () => {
    expect(deepFlat([])).toEqual([]);
});

it('returns flat array if already flat', () => {
    expect(deepFlat([1, 2, 3])).toEqual([1, 2, 3]);
});

it('handles deeply nested empty arrays', () => {
    expect(deepFlat([[[[[[]]]]]])).toEqual([]);
});

it('handles mixed types', () => {
    const input = [1, ['a', [true, [null]]]];
    const output = [1, 'a', true, null];
    expect(deepFlat(input)).toEqual(output);
});

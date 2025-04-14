/**
 * Creates an array of values that are in the first array, but not in the second array.
 *
 * @param {Array} [array=[]] - The array to inspect.
 * @param {Array} [values=[]] - The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 */
export function difference(array = [], values = []) {
    const res = [];

    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (values.indexOf(item) === -1 && res.indexOf(item) === -1) {
            res.push(item);
        }
    }

    return res;
}

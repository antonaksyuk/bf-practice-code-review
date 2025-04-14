/**
 * Creates an array of values that are in both the first and the second arrays.
 *
 * Repeated values are not duplicated in the return value,
 * and the order of result values is determined by the first array.
 *
 * @param {Array} [array=[]] - The array to inspect.
 * @param {Array} [values=[]] - The values to include.
 * @returns {Array} Returns the new array of filtered values.
 */
export const intersection = (array = [], values = []) => {
    const res = [];

    for (let i = 0; i < array.length; i++) {
        const item = array[i];

        if (values.indexOf(item) !== -1 && res.indexOf(item) === -1) {
            res.push(item);
        }
    }

    return res;
};

/**
 * Deeply flattens a nested array.
 *
 * @param {Array} [array=[]] - The array to deeply flatten.
 *
 * @returns {Array} The flattened array.
 */
export const deepFlat = (array = []) => {
    const result = [];

    for (const item of array) {
        if (Array.isArray(item)) {
            result.push(...deepFlat(item));
        } else {
            result.push(item);
        }
    }

    return result;
};

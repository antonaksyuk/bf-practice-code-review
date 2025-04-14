/** .........
 * Sort numbers of array.
 *
 * @param {Array} [arrayOfNumbers=[]] - The array of numbers to sort.
 * @returns {Array} - A new array with the same numbers, but sorted.
 */

export const sortNumbers = (arrayOfNumbers = []) => {
    const sortedArray = [...arrayOfNumbers];
    sortedArray.sort((a, b) => a - b);
    return sortedArray;
};

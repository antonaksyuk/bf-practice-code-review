/** .........
 * Split object to array.
 *
 * @param {object} [toSeparate={}] - The object to split into key/value pairs.
 * @returns {Array} Returns a new array with one entry for each key/value pair.
 */

// export const splitObject = (toSeparate = {}) => {
//     const keys = Object.keys(toSeparate);

//     const convertToArray = keys.map(key => {
//         return { [key]: toSeparate[key] };
//     });
//     return convertToArray;
// };

export const splitObject = (toSeparate = {}) => {
    const entries = Object.entries(toSeparate);

    const convertToArray = entries.map(([key, value]) => {
        return { [key]: value };
    });
    return convertToArray;
};

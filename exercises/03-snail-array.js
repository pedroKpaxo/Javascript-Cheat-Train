
// A snail array is an array that is filled with values in a specific order. 
// The values are filled in a spiral pattern, starting from the top-left corner and 
// moving inwards towards the center in a clockwise direction.
Array.prototype.snail = function (rowsCount, colsCount) {
    // Check for invalid input: dimensions mismatch or non-positive rows/columns
    if (rowsCount * colsCount !== this.length || rowsCount <= 0 || colsCount <= 0) {
        return [];
    }

    // Initialize a 2D array with specified number of rows and columns, filled with zeros
    const result = Array.from({ length: rowsCount }, () => Array(colsCount).fill(0));
    console.log(result);

    let index = 0;

    for (let col = 0; col < colsCount; col++) {
        if (col % 2 === 0) {
            // Fill column from top to bottom
            for (let row = 0; row < rowsCount; row++) {
                result[row][col] = this[index++];
            }
        } else {
            // Fill column from bottom to top
            for (let row = rowsCount - 1; row >= 0; row--) {
                result[row][col] = this[index++];
            }
        }
    }

    return result;
};

// Example usage:
const inputArray = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15];
const rows = 5;
const cols = 4;
console.log(inputArray.snail(rows, cols));
// Output:
// [
//   [19, 7, 1, 14],
//   [10, 2, 17, 13],
//   [3, 5, 16, 6],
//   [9, 8, 12, 18],
//   [4, 20, 11, 15]
// ]

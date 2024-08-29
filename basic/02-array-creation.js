// Example: Using Array.from to create a 2D array filled with zeros

// Explanation:
// Array.from() creates a new array from an array-like or iterable object. 
// In this example, we create a 2D array (an array of arrays) with specific dimensions:
// - The outer array has 5 elements (rows).
// - Each inner array has 6 elements (columns), all initialized to 0.

const fillingArray = Array.from({ length: 5 }, () => Array(6).fill(0));
console.log("Array.from example:");
console.log(fillingArray);
// Output:
// [
//   [0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0]
// ]

// Explanation:
// - `Array.from({ length: 5 })` creates an array with 5 undefined elements.
// - The second argument to `Array.from` is a map function that gets called on each element of the new array.
// - `Array(6).fill(0)` creates an array with 6 elements, all initialized to 0. This array is used as each row in the 2D array.

// Other Array Object Methods

// 1. Array.isArray()
// Checks if a value is an array.
const isArray = Array.isArray(fillingArray);
console.log("Array.isArray example:", isArray); // Output: true

// 2. Array.of()
// Creates a new array instance with a variable number of arguments.
const arrayOfNumbers = Array.of(1, 2, 3, 4, 5);
console.log("Array.of example:", arrayOfNumbers); // Output: [1, 2, 3, 4, 5]

// 3. Array.fill()
// Fills all the elements of an array from a start index to an end index with a static value.
const filledArray = [1, 2, 3, 4, 5].fill(0, 2, 4);
console.log("Array.fill example:", filledArray); // Output: [1, 2, 0, 0, 5]

// Explanation:
// - The `fill` method fills the array from index 2 to index 4 (exclusive) with the value 0.

// 4. Array.concat()
// Merges two or more arrays and returns a new array.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatenatedArray = array1.concat(array2);
console.log("Array.concat example:", concatenatedArray); // Output: [1, 2, 3, 4, 5, 6]

// 5. Array.flat()
// Flattens a nested array into a single-level array.
const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flattenedArray = nestedArray.flat(2);
console.log("Array.flat example:", flattenedArray); // Output: [1, 2, 3, 4, 5, 6]

// Explanation:
// - The `flat` method with a depth of 2 flattens the nested array structure by 2 levels.

// 6. Array.from() with a Map Function
// Creates an array from an iterable object and applies a map function to each element.
const stringArray = Array.from("hello", (char) => char.toUpperCase());
console.log("Array.from with map function example:", stringArray); // Output: ['H', 'E', 'L', 'L', 'O']

// Explanation:
// - The map function in `Array.from` transforms each character to uppercase.

// 7. Array.reduceRight()
// Applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
const reduceRightExample = [1, 2, 3, 4].reduceRight((acc, val) => acc - val);
console.log("Array.reduceRight example:", reduceRightExample); // Output: -2

// Explanation:
// - `reduceRight` starts reducing the array from the last element to the first.
// - The operation performed here is subtraction, so the calculation proceeds as: 4 - 3 - 2 - 1 = -2.


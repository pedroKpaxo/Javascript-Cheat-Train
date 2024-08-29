
// Example constant array
const numbers = [1, 2, 3, 4, 5];

// 1. forEach
// Iterates over each element in the array and applies a function to it
numbers.forEach((num) => {
    console.log("forEach: ", num);
});

// 2. map
// Creates a new array with the results of applying a function to every element in the array
const doubled = numbers.map((num) => num * 2);
console.log("map: ", doubled); // Output: [2, 4, 6, 8, 10]

// 3. filter
// Creates a new array with all elements that pass the test implemented by the provided function
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("filter: ", evenNumbers); // Output: [2, 4]

// 4. find
// Returns the first element in the array that satisfies the provided testing function
const firstEven = numbers.find((num) => num % 2 === 0);
console.log("find: ", firstEven); // Output: 2

// 5. findIndex
// Returns the index of the first element in the array that satisfies the provided testing function
const firstEvenIndex = numbers.findIndex((num) => num % 2 === 0);
console.log("findIndex: ", firstEvenIndex); // Output: 1

// 6. includes
// Checks if an array contains a certain element, returning true or false
const includesThree = numbers.includes(3);
console.log("includes: ", includesThree); // Output: true

// 7. some
// Checks if at least one element in the array passes the test implemented by the provided function
const hasNegative = numbers.some((num) => num < 0);
console.log("some: ", hasNegative); // Output: false

// 8. every
// Checks if all elements in the array pass the test implemented by the provided function
const allPositive = numbers.every((num) => num > 0);
console.log("every: ", allPositive); // Output: true

// 9. reduce
// Executes a reducer function on each element of the array, resulting in a single output value
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("reduce: ", sum); // Output: 15

// 10. concat
// Merges two or more arrays into a new array
const moreNumbers = [6, 7, 8];
const concatenated = numbers.concat(moreNumbers);
console.log("concat: ", concatenated); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

// 11. slice
// Returns a shallow copy of a portion of an array into a new array object
const sliced = numbers.slice(1, 3);
console.log("slice: ", sliced); // Output: [2, 3]

// 12. splice
// Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
const spliced = [...numbers]; // Create a copy to preserve the original
spliced.splice(2, 1, 99); // Removes 1 element at index 2 and inserts 99
console.log("splice: ", spliced); // Output: [1, 2, 99, 4, 5]

// 13. join
// Joins all elements of an array into a string
const joined = numbers.join("-");
console.log("join: ", joined); // Output: "1-2-3-4-5"

// 14. sort
// Sorts the elements of an array in place and returns the sorted array
const unsortedNumbers = [3, 1, 4, 2, 5];
const sorted = unsortedNumbers.sort((a, b) => a - b);
console.log("sort: ", sorted); // Output: [1, 2, 3, 4, 5]

// 15. reverse
// Reverses the order of the elements in an array in place
const reversed = [...numbers].reverse(); // Use spread operator to avoid mutating the original array
console.log("reverse: ", reversed); // Output: [5, 4, 3, 2, 1]

// 16. push
// Adds one or more elements to the end of an array and returns the new length of the array
const pushExample = [...numbers];
const newLength = pushExample.push(6);
console.log("push: ", pushExample); // Output: [1, 2, 3, 4, 5, 6]
console.log("New length after push: ", newLength); // Output: 6

// 17. pop
// Removes the last element from an array and returns that element
const popExample = [...numbers];
const poppedElement = popExample.pop();
console.log("pop: ", popExample); // Output: [1, 2, 3, 4]
console.log("Popped element: ", poppedElement); // Output: 5

// 18. unshift
// Adds one or more elements to the beginning of an array and returns the new length of the array
const unshiftExample = [...numbers];
const newLengthAfterUnshift = unshiftExample.unshift(0);
console.log("unshift: ", unshiftExample); // Output: [0, 1, 2, 3, 4, 5]
console.log("New length after unshift: ", newLengthAfterUnshift); // Output: 6

// 19. shift
// Removes the first element from an array and returns that element
const shiftExample = [...numbers];
const shiftedElement = shiftExample.shift();
console.log("shift: ", shiftExample); // Output: [2, 3, 4, 5]
console.log("Shifted element: ", shiftedElement); // Output: 1

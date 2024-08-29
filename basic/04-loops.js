// loop-examples.ts

// Example array with an additional property
const arrayIteration = [3, 5, 7];
arrayIteration.foo = "hello";

// 1. forEach loop
// The forEach method calls a provided callback function once for each element in an array, in order.
console.log("forEach loop:");
arrayIteration.forEach((value, index) => {
    console.log(`Index ${index}: ${value}`);
});
// Note: forEach does not iterate over properties like 'foo'. It only iterates over array elements.

// 2. for...in loop
// The for...in statement iterates over all enumerable properties of an object that are keyed by strings.
console.log("\nfor...in loop:");
for (const key in arrayIteration) {
    console.log(`Key: ${key}, Value: ${arrayIteration[key]}`);
}
// Note: for...in iterates over both array elements and additional properties like 'foo'.

// 3. for...of loop
// The for...of statement creates a loop iterating over iterable objects such as arrays.
console.log("\nfor...of loop:");
for (const value of arrayIteration) {
    console.log(value);
}
// Note: for...of only iterates over array elements, not additional properties like 'foo'.

// 4. Traditional for loop
// The traditional for loop provides a counter-based approach to iterate over arrays.
console.log("\nTraditional for loop:");
for (let i = 0; i < arrayIteration.length; i++) {
    console.log(`Index ${i}: ${arrayIteration[i]}`);
}
// Note: Traditional for loops also do not iterate over properties like 'foo'.

// 5. while loop
// The while loop executes as long as the condition evaluates to true.
console.log("\nwhile loop:");
let index = 0;
while (index < arrayIteration.length) {
    console.log(`Index ${index}: ${arrayIteration[index]}`);
    index++;
}
// Note: While loops only iterate over array elements, not additional properties like 'foo'.

// 6. do...while loop
// The do...while loop executes the block of code once before checking the condition.
console.log("\ndo...while loop:");
index = 0;
do {
    console.log(`Index ${index}: ${arrayIteration[index]}`);
    index++;
} while (index < arrayIteration.length);
// Note: do...while loops also only iterate over array elements, not additional properties like 'foo'.

// 7. for...in with Object.keys()
// If you want to iterate only over the properties of an array (including non-numeric keys), you can use Object.keys().
console.log("\nfor...in loop with Object.keys():");
for (const key of Object.keys(arrayIteration)) {
    console.log(`Key: ${key}, Value: ${arrayIteration[key]}`);
}

// 8. for...of with Object.entries()
// If you want to iterate over both the keys and values, you can use Object.entries().
console.log("\nfor...of loop with Object.entries():");
for (const [key, value] of Object.entries(arrayIteration)) {
    console.log(`Key: ${key}, Value: ${value}`);
}

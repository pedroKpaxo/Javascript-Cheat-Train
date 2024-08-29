//Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

function sleep(millis) {

    return new Promise((resolve) => {
        // The function returns a Promise object.
        // A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation.

        setTimeout(resolve, millis);
        // The setTimeout function is used to delay the execution of a function. 
        // In this case, it delays the execution of the 'resolve' function by the specified number of milliseconds ('millis').

        // The 'resolve' function is a callback function that is called after the specified delay. 
        // It is responsible for resolving the Promise and returning a value.
    });
}

// Example usage:
console.log('Start');
sleep(2000).then(() => {
    console.log('2 seconds have passed');
});
console.log('End');


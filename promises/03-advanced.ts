import { chainedPromisesExample } from "./02-intermediate";

// Advanced: Handling Multiple Promises with Promise.all and Promise.race
function multiplePromisesExample() {
    const promise1 = new Promise((resolve) => setTimeout(() => resolve("Promise 1 resolved"), 1000));
    const promise2 = new Promise((resolve) => setTimeout(() => resolve("Promise 2 resolved"), 500));
    const promise3 = new Promise((resolve, reject) => setTimeout(() => reject("Promise 3 rejected"), 1500));

    // Using Promise.all to wait for all promises to resolve or any to reject
    Promise.all([promise1, promise2, promise3])
        .then(results => {
            console.log("Promise.all results: ", results);
        })
        .catch(error => {
            console.log("Promise.all error: ", error);
        });

    // Using Promise.race to get the result of the first resolved or rejected promise
    Promise.race([promise1, promise2, promise3])
        .then(result => {
            console.log("Promise.race result: ", result);
        })
        .catch(error => {
            console.log("Promise.race error: ", error);
        });
}

multiplePromisesExample();

// Creative Usage: Retry Logic with Promises
function retryPromise<T>(fn: () => Promise<T>, retries: number): Promise<T> {
    return fn().catch((error) => {
        if (retries > 0) {
            console.log(`Retrying... Attempts left: ${retries}`);
            return retryPromise(fn, retries - 1);
        } else {
            return Promise.reject(error);
        }
    });
}

let attempt = 0;
function unreliableTask(): Promise<string> {
    return new Promise((resolve, reject) => {
        attempt++;
        if (attempt === 3) {
            resolve("Task succeeded on attempt " + attempt);
        } else {
            reject("Task failed on attempt " + attempt);
        }
    });
}

retryPromise(unreliableTask, 5)
    .then(result => console.log("Retry Logic Example: " + result))
    .catch(error => console.log("Retry Logic Example Error: " + error));

// Advanced: Using async/await with Promises
async function asyncAwaitExample() {
    try {
        const result1 = await basicPromiseExample();
        console.log("Async/Await Example: " + result1);

        const result2 = await chainedPromisesExample();
        console.log("Async/Await Example Chained: " + result2);
    } catch (error) {
        console.log("Async/Await Example Error: " + error);
    }
}

asyncAwaitExample();
// Importing the advanced example to demonstrate chaining promises with async/await


// Basics of Promises
function basicPromiseExample(): Promise<string> {
    return new Promise((resolve, reject) => {
        const success = true;
        if (success) {
            resolve("Promise resolved successfully!");
        } else {
            reject("Promise rejected.");
        }
    });
}

basicPromiseExample()
    .then(response => {
        console.log("Basic Promise Example: " + response);
    })
    .catch(error => {
        console.log("Basic Promise Example Error: " + error);
    });




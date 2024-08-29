// Intermediate: Chaining Promises
export function chainedPromisesExample(): Promise<string> {
    return new Promise((resolve, reject) => {
        resolve("Step 1 complete.");
    })
        .then(response => {
            console.log(response);
            return "Step 2 complete.";
        })
        .then(response => {
            console.log(response);
            return "Step 3 complete.";
        });
}

chainedPromisesExample()
    .then(response => {
        console.log("Chained Promises Example Final: " + response);
    });
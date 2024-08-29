
/* 
In the provided code, a JavaScript principle called "closures" is being used.

A closure is a combination of a function and the lexical environment within which that function was declared. 
It allows a function to access variables from its outer scope even after the outer function has finished executing.

In this case, the counter function returns an inner function. This inner function forms a closure because it has access to 
the n variable from its outer scope, even after the counter function has completed execution.

The inner function acts as a counter by incrementing the n variable each time it is called and returning the incremented value. 
This is achieved because the inner function has access to the n variable through the closure.

Closures are powerful because they allow you to create functions with "private" variables that are inaccessible from 
outside the function. In this example, the n variable is not directly accessible from outside the counter function, 
but can only be accessed and modified through the returned inner function. 
*/
function counter(n) {
    return function() {
        return n++;
    }
}

const count = counter(5);
console.log(count()); // 5
console.log(count()); // 6
console.log(count()); // 7
console.log(count()); // 8
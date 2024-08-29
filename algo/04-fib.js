function fibonacci(n) {
    // Base case: if n is 0 or 1, return n
    if (n <= 1) return n;

    // Create an array to store the Fibonacci sequence
    let dp = [0, 1];

    // Loop from 2 to n
    for (let i = 2; i <= n; i++) {
        // Calculate the i-th Fibonacci number by summing the previous two numbers
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    // Return the n-th Fibonacci number
    return dp[n];
}

// examples

console.log(fibonacci(50));
console.log(fibonacci(10)); 
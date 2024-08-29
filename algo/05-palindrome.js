function isPalindrome(s) {
    // Initialize two pointers, `left` and `right`, to the start and end of the string `s`
    let left = 0;
    let right = s.length - 1;

    // Iterate until the `left` pointer is less than the `right` pointer
    while (left < right) {
        // Check if the characters at `left` and `right` are not equal
        if (s[left] !== s[right]) {
            // If they are not equal, it means the string is not a palindrome, so return `false`
            return false;
        }

        // Move the `left` pointer one step forward and the `right` pointer one step backward
        left++;
        right--;
    }

    // If the loop completes without finding any unequal characters, it means the string is a palindrome, so return `true`
    return true;
}

// examples
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
// 'ABCDDDDDEFGHIJ'

// find the longest substring with distinct characters

const longestSubstring = (str) => {
    let start = 0; // Initialize the starting index of the current substring
    let maxLength = 0; // Initialize the length of the longest substring
    let visited = {}; // Create an object to keep track of visited characters
    let result = ''; // Initialize the result string

    for (let i = 0; i < str.length; i++) {
        // If the current character has been visited and its index is greater than or equal to the start index,
        if (visited[str[i]] >= start) {
            // update the start index to the next index of the visited character
            start = visited[str[i]] + 1;
        }

        visited[str[i]] = i; // Store the index of the current character in the visited object

        // If the length of the current substring is greater than the maxLength,
        if (i - start + 1 > maxLength) {
            // update the maxLength and store the current substring in the result variable
            maxLength = i - start + 1;
            result = str.slice(start, i + 1);
        }
    }

    return result; // Return the longest substring
}

console.log(longestSubstring('ABCDDDDDEFGHIJ')); // 'CDDDDDEFGHIJ'
console.log(longestSubstring('ABCD')); // 'ABCD'
console.log(longestSubstring('AAAA')); // 'A'

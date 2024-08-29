function quickSort(arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// examples

console.log(quickSort([3, 5, 1, 4, 2])); // Output: [1, 2, 3, 4, 5]
console.log(quickSort([8, 3, 7, 4, 9, 2, 6, 5])); // Output: [2, 3, 4, 5, 6, 7, 8, 9]
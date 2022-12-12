function mergeSort(array) {
    // Step 1. Check if base case (N = 0 or 1)
    if (array.length < 2) { // k
        return array;
    }
    // Step 2. Check if N = 2
    if (array.length == 2 ) { // k
        if (array[0] > array[1]) {
            return [array[1], array[0]];
        }
        return array;
    } else {
        // Step 3. Split array in half
        const halfIndex = Math.floor(array.length / 2); // k
        // Step 4. Recursively sort each half
        const leftHalf = mergeSort(array.slice(0, halfIndex)); // n/2 + n/4 + n/8 ...
        const rightHalf = mergeSort(array.slice(halfIndex)); // n/2 + n/4 + ...
        // Step 5. Merge the two sorted halves
        for (let i = 0; rightHalf.length > 0 && i < leftHalf.length; i++) { // n
            if (rightHalf[0] < leftHalf[i]) {
                const item = rightIndex.shift();
                leftHalf = leftHalf.slice(0, i) + [item] + leftHalf.slice(i);
            }
        }
        return leftHalf.concat(rightHalf);
    }
}

// mergeSort(N) -> O(n) + mergeSort(N/2) -> O(n) + O(n/2) + mergeSort(n/4) -> O(n) + O(n/2) + O(n/4) + mergeSort(n/8)
// The X Factor: number of recursive levels of mergeSort
// X factor of ~8 with N = 64
// X = log2(N)
// nlog(n)

// Example: X factor of 3 with N = 5
// [3, 7, 2, 6, 1]
// [3, 7]  [2, 6, 1]
// [3, 7]  [2]  [6, 1]
//         [2]  [1, 6]
//         [1, 2, 6]
// [1, 2, 3, 6, 7]

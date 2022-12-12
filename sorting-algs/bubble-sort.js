function bubbleSort(array) {
    const swap = function(i, j) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    for (let j = 0; j < array.length; j++) {
        for (let i = 0; i < array.length - j; i++) {
            if (array[i+1] < array[i]) {
                swap(i, i + 1);
            }
        }
    }
    return array;
}

// What is the time complexity of bubbleSort?
// [3, 7, 2, 6, 1]
// [3, 2, 7, 6, 1]
// [3, 2, 6, 7, 1]
// [3, 2, 6, 1, 7]
// [2, 3, 6, 1, 7]
// [2, 3, 1, 6, 7]
// [2, 1, 3, 6, 7]
// [1, 2, 3, 6, 7]


// If no x found (worst case), time to execute = k * N
// If x is first element (best case), time to execute = k
// Average case, time to execute = (k + k * N) / 2 = k * N / 2 = (1/2) k * N

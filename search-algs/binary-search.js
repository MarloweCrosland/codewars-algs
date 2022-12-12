// Assume array is sorted
// O(logn)
function binarySearch(array, x) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    while (minIndex <= maxIndex) {
        currentIndex = Math.round((minIndex + maxIndex) / 2);
        // if current = x, we're done
        if (array[currentIndex] == x) {
            return currentIndex;
        }
        // if current > x, check right half of remaining array
        if (array[currentIndex] > x) {
            maxIndex = currentIndex - 1;
        // if current < x, check left half of remaining array
        } else { // array[currentIndex] < x
            minIndex = currentIndex + 1;
        }
    }
    return undefined;
}
// Search algorithms
// How to find element X in array A?
// arraySearch(array, x)
//   for i in 0..array.length - 1
//     if array[i] = x
//       return i
//
//   return -1


// O(n)
function linearSearch(array, x) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == x) { // k time to complete
            return i; 
        }
    }
    return -1; // j time to complete
}
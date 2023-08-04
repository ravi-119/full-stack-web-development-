function removeDuplicates(array) {
    return new Set(array);
    
}

let arr = [1, 2, 3, 4, 2, 3, 5, 6, ]
const uniqueSet = removeDuplicates(arr);
console.log(uniqueSet);


// function removeDuplicates(arr) {
//     return new Set(arr);
// }


// let arr = [1, 2, 3, 2, 1, 4];
// let uniqueSet = removeDuplicates(arr);
// console.log(uniqueSet); // Output: Set { 1, 2, 3, 4 }
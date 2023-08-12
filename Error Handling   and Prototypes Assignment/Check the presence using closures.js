// Check the presence of using closures

function numberChecker(numbers) {
    return function (num) {
        return numbers.includes(num);
    };     
}


const arr = [1, 2, 3, 4, 5]
const checkNum = numberChecker(arr);

console.log(checkNum(1));
console.log(checkNum(6));





// function numberChecker(numbers) {
//     return function (num) {
//       return numbers.includes(num);
//     };
//   }
  
//   // Expected Result:
//   const arr = [1, 2, 3, 4, 5];
//   const checkNum = numberChecker(arr);

//   console.log(checkNum(3));
//   console.log(checkNum(6));
  
  
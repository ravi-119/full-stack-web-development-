function findMaxandMin(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return { min, max};    
}

let arr = [1, 2, 3, 4 ,5]
const ans = findMaxandMin(arr)
console.log(ans);
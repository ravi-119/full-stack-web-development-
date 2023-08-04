function wordCount(string) {
    
    // split the string into an array of words
   const words =  string.split(" ");

   // initilize an empty Map to store word count
   
   const countMap = new Map();

   // Loop through each word in the array 
   for (let i = 0; i < words.length; i++) {
      const word = words[i].toLowerCase() // conver words to lowercase

        // If word is already in the Map, Increment it's count by 1
      if (countMap.has(word)) {
          countMap.set(word, countMap.get(word) + 1);
        }else {
            countMap.set(word, 1);
        }
    
    }
    return countMap;

}

const string = "Hello everyone this is Ravi Kumar Yadav from Pw skills And my course is full stack web development";
const wordcounts = wordCount(string);
console.log(wordcounts);


// function wordCount(string) {
//     // Split the string into an array of words
//     const words = string.split(" ");

//     // Initialize an empty Map to store word counts
//     const countMap = new Map();

//     // Loop through each word in the array
//     for (let i = 0; i < words.length; i++) {
//         const word = words[i].toLowerCase(); // Convert word to lowercase

//         // If the word is already in the Map, increment its count by 1
//         if (countMap.has(word)) {
//             countMap.set(word, countMap.get(word) + 1);
//         }
//         // Otherwise, add the word to the Map with a count of 1
//         else {
//             countMap.set(word, 1);
//         }
//     }

//     return countMap;
// }

// const string = "The quick brown fox jumps over the lazy dog";
// const wordCounts = wordCount(string);
// console.log(wordCounts); // Map(9) { 'the' => 2, 'quick' => 1, 'brown' => 1, 'fox' => 1, 'jumps' => 1, 'over' => 1, 'lazy' => 1, 'dog' => 1 }

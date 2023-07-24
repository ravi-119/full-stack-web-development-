const books = [
  {
    tittle:" to kill a monkey",
    author: "ravi",
    year: 2015
  },

  {
    tittle:" famous english poet a chancellor",
    author: "ankita",
    year: 2009
  },

  {
    tittle:"falcon",
    author: "samay",
    year: 2010
  }
];

const filterBooks = books.filter((books) =>  books.year <= 2010);
// console.log(filterBooks);

const formatedBooks = filterBooks.map((books) => {
  capitalizedAuthor = books.author.toUpperCase()
  return {
    books: books.tittle,
    author: capitalizedAuthor,
    year: books.year
  }
})
console.log(formatedBooks);

// output



// [
//   {
//     books: ' famous english poet a chancellor',
//     author: 'ANKITA',
//     year: 2009
//   },
//   { books: 'falcon', author: 'SAMAY', year: 2010 }
// ]



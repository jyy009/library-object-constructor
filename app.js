const bookContainer = document.querySelector(".book-container");
const cardTitle = bookContainer.querySelector(".card-title");

const bookLibrary = [
  {
    name: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    year: 2001,
    genre: "Fantasy",
  },
  {
    name: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
    year: 2003,
    genre: "Fantasy",
  },
];

function Book(title, author, year, genre) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.genre = genre;
}

const addBookToLibrary = () => {
  const newBook = new Book(title, author, year, genre);
  bookLibrary.push(newBook);
  console.log(newBook);
};

addBookToLibrary();

const displayBooks = (bookLibrary) => {
  bookLibrary.map((book) => {
    cardTitle.textContent = book.title;
  });
};

displayBooks();

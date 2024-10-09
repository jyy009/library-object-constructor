const bookContainer = document.querySelector(".book-container");
// const cardTitle = document.querySelector(".card-title");
// const cardAuthor = document.querySelector(".card-author");
// const cardYear = document.querySelector(".card-year");
// const cardGenre = document.querySelector(".card-genre");
// const bookCard = document.querySelector(".book-card");

const bookLibrary = [
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    year: 2001,
    genre: "Fantasy",
  },
  {
    title: "Harry Potter and the Chamber of Secrets",
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

const addBookToLibrary = (title, author, year, genre) => {
  const newBook = new Book(title, author, year, genre);
  bookLibrary.push(newBook);
  console.log(bookLibrary);
};

addBookToLibrary();

const displayBooks = (bookArray) => {
  bookContainer.innerHTML = "";

  bookArray.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.toggle("book-card");

    const cardTitle = document.createElement("h4");
    cardTitle.classList.toggle("card-title");
    cardTitle.textContent = book.title;
    bookCard.appendChild(cardTitle);

    const cardAuthor = document.createElement("p");
    cardAuthor.classList.toggle("card-author");
    cardAuthor.textContent = book.author;

    const cardYear = document.createElement("p");
    cardYear.classList.toggle("card-year");
    cardYear.textContent = book.year;

    const cardGenre = document.createElement("p");
    cardGenre.classList.toggle("card-genre");
    cardGenre.textContent = book.genre;

    bookContainer.appendChild(bookCard);
  });
};

displayBooks(bookLibrary);

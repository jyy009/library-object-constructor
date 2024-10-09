const bookContainer = document.querySelector(".book-container");
const showButton = document.querySelector(".show-dialog-button");
const closeButton = document.querySelector(".close-button");
const bookDialog = document.querySelector(".book-dialog");
const submitButton = document.querySelector(".submit-button");
const bookForm = document.querySelector(".book-form");

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


const displayBooks = (bookArray) => {
  bookContainer.innerHTML = "";

  bookArray.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    const cardTitle = document.createElement("h4");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = book.title;
    bookCard.appendChild(cardTitle);

    const cardAuthor = document.createElement("p");
    cardAuthor.classList.add("card-author");
    cardAuthor.textContent = book.author;
    bookCard.appendChild(cardAuthor)

    const cardYear = document.createElement("p");
    cardYear.classList.add("card-year");
    cardYear.textContent = book.year;
    bookCard.appendChild(cardYear)

    const cardGenre = document.createElement("p");
    cardGenre.classList.add("card-genre");
    cardGenre.textContent = book.genre;
    bookCard.appendChild(cardGenre)


    bookContainer.appendChild(bookCard);
  });
};

showButton.addEventListener("click", () => {
  bookDialog.showModal()
})

closeButton.addEventListener("click", () => {
  bookDialog.close()
  bookForm.reset()

})

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = bookForm.querySelector('input[name="book-title"]').value
  const author = bookForm.querySelector('input[name="book-author"]').value
  const year = bookForm.querySelector('input[name="book-year"]').value
  const genre = bookForm.querySelector('input[name="book-genre"]').value

  addBookToLibrary(title, author, year, genre)
  displayBooks(bookLibrary);

  bookForm.reset()
  bookDialog.close()
})

displayBooks(bookLibrary);

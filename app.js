const bookContainer = document.querySelector(".book-container");
const showButton = document.querySelector(".show-dialog-button");
const closeButton = document.querySelector(".close-button");
const bookDialog = document.querySelector(".book-dialog");
const submitButton = document.querySelector(".submit-button");
const bookForm = document.querySelector(".book-form");


let bookLibrary = [
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
bookLibrary = bookLibrary.map(book => new Book(book.title, book.author, book.year, book.genre))

function Book(title, author, year, genre) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.genre = genre;
  this.isRead = false;
}

Book.prototype.toggleRead = function () {
  this.isRead = !this.isRead
  return this.isRead ? "Not Read" : "Read"
};

const addBookToLibrary = (title, author, year, genre) => {
  const newBook = new Book(title, author, year, genre);
  bookLibrary.push(newBook);
  console.log(newBook instanceof Book);
  console.log(bookLibrary);
};

const displayBooks = (bookArray) => {
  bookContainer.innerHTML = "";

  bookArray.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.setAttribute("data-index", index);

    const cardTitle = document.createElement("h4");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = book.title;
    bookCard.appendChild(cardTitle);

    const cardAuthor = document.createElement("p");
    cardAuthor.classList.add("card-author");
    cardAuthor.textContent = book.author;
    bookCard.appendChild(cardAuthor);

    const cardYear = document.createElement("p");
    cardYear.classList.add("card-year");
    cardYear.textContent = book.year;
    bookCard.appendChild(cardYear);

    const cardGenre = document.createElement("p");
    cardGenre.classList.add("card-genre");
    cardGenre.textContent = book.genre;
    bookCard.appendChild(cardGenre);

    const removeButton = document.createElement("button");
    removeButton.classList.toggle("remove-button");
    removeButton.textContent = "Delete";
    bookCard.appendChild(removeButton);

    
    const readButton = document.createElement("button");
    readButton.classList.toggle("read-button");
    readButton.textContent = book.isRead ? "Read" : "Not Read"; 
    bookCard.appendChild(readButton);
    
    bookContainer.appendChild(bookCard);
  });
};

bookContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-button")) {
    const card = e.target.closest(".book-card");
    const index = card.dataset.index;
    removeBook(index);
  }
});

bookContainer.addEventListener("click", (e, book) => {
  if (e.target.classList.contains("read-button")) {
   const bookCard = e.target.closest(".book-card")
   const index = parseInt(bookCard.dataset.index);
   const book = bookLibrary[index]
   console.log("is book obj a book instance:", book instanceof Book); // This should log 'true'
   console.log(Object.getPrototypeOf(book));
   e.target.textContent = book.toggleRead()
   console.log("book object:", book); // Log the book object
  }


  
})

  

const removeBook = (index) => {
  bookLibrary.splice(index, 1);
  displayBooks(bookLibrary);
};

showButton.addEventListener("click", () => {
  bookDialog.showModal();
});

closeButton.addEventListener("click", () => {
  bookDialog.close();
  bookForm.reset();
});

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = bookForm.querySelector('input[name="book-title"]').value;
  const author = bookForm.querySelector('input[name="book-author"]').value;
  const year = bookForm.querySelector('input[name="book-year"]').value;
  const genre = bookForm.querySelector('input[name="book-genre"]').value;

  addBookToLibrary(title, author, year, genre);
  displayBooks(bookLibrary);

  bookForm.reset();
  bookDialog.close();
});

displayBooks(bookLibrary);

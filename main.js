let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

//Display books on cards
function displayBooks() {
  const bookshelf = document.querySelector(".bookshelf");
//Loop over library array and display cards
    myLibrary.forEach(myLibrary => {
      const card = document.createElement("div")
      card.classList.add("card")
      bookshelf.appendChild(card);
      for (let key in myLibrary) {
        const para = document.createElement("p");
        para.textContent = (`${key}: ${myLibrary[key]}`);
        card.appendChild(para);
      }

    })
}

addBookToLibrary("a", "b", "c", "d")
addBookToLibrary("a", "b", "c", "d")
addBookToLibrary("a", "b", "c", "d")
addBookToLibrary("a", "b", "c", "d")
addBookToLibrary("a", "b", "c", "d")

displayBooks()



//console.log(addBookToLibrary("a", "b", "c", "d"))

/*
function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        return (title + " by " + author + ", " + pages + " pages, " + read)
    }
}

const book1 = new book('1985', 'George Orwell', '272', 'not read yet');
console.log(book1.info());
*/
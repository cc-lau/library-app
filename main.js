let myLibrary = [];

function Book(Title, Author, Pages, Read) {
  this.Title = Title;
  this.Author = Author;
  this.Pages = Pages;
  this.Read = Read;
}

function addBookToLibrary(Title, Author, Pages, Read) {
 /* const addBooksContainer = document.querySelector("add-books-container")
  const addBookButton = document.querySelector("add-book");
  addBookButton.addEventListener("click", function() {
    const bookForm = document.createElement("form")
    bookForm.classList.add("book-form")
    bookForm.appendChild(addBooksContainer)
    
  })
  
  */
  
  let book = new Book(Title, Author, Pages, Read);
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

addBookToLibrary("aaaaaaaaaaaaaaa", "bccccccccccc", "c", "dffffffffffffffffffff")
addBookToLibrary("a", "b", "c", "d")
addBookToLibrary("a", "b", "c", "d")
addBookToLibrary("a", "b", "c", "d")
addBookToLibrary("aaaaaaaaaaaaaaa", "bccccccccccc", "c", "dffffffffffffffffffff")
addBookToLibrary("a", "b", "c", "d")

displayBooks()





function myFunction() {
  let x = document.getElementById("test");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}






































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
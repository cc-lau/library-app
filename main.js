let myLibrary = [];

class Book {
  constructor(Title, Author, Pages, Read) {
    this.Title = Title;
    this.Author = Author;
    this.Pages = Pages;
    this.Read = Read;
  }
}

const exitButton = document.querySelector(".exit-button")
exitButton.addEventListener("click", function (){
  document.querySelector(".form-popup").style.display = "none";
})

const addBookButton = document.querySelector(".add-book")
addBookButton.addEventListener("click", function (){
  document.querySelector(".form-popup").style.display = "flex";
})


const submitButton = document.querySelector(".submit-button")
submitButton.addEventListener("click", formData)

function formData() {
  let Title = document.getElementById("Title").value;
  let Author = document.getElementById("Author").value;
  let Pages = document.getElementById("Pages").value;
  let Read = document.getElementById("Read").value;
  document.querySelector(".form-popup").style.display = "none";
  addBookToLibrary(Title, Author, Pages, Read);
}

function addBookToLibrary(Title, Author, Pages, Read) {
  let book = new Book(Title, Author, Pages, Read);
  myLibrary.push(book);
  displayBooks();
  console.log(Title, Author, PAges, Read);
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
      const removeButton = document.createElement("button")
      removeButton.textContent = (`Remove`);
      removeButton.classList.add("remove-button")
      card.appendChild(removeButton);
    })
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
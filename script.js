let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function addBookToLibrary(array) {
    let nextBook = new Book(array[0], array[1], array[2], array[3]);
    myLibrary.push(nextBook);
}

addBookToLibrary(['Deep Work','Cal Newport','304','reading']);
addBookToLibrary(["Harry Potter and the Sorcerer's Stone",'J.K. Rowling','223','unread']);
addBookToLibrary(['A Game of Thrones','George R.R. Martin','694','unread']);

const modal = document.getElementById("myModal");
const bookModal = document.getElementById('bookModal');
const btn = document.getElementById("addBook");
const span = document.getElementsByClassName("close")[0];
const span2 = document.getElementById("close");
const form = document.getElementById('userBook');
const bookshelf = document.getElementById('bookshelf');
const book = document.querySelectorAll('.book');
const bookText = document.getElementById('bookText');
const removeBook = document.getElementById('delete');
let currentBook;

form.addEventListener('submit', submitBook);

function submitBook(event) {
    let newArray = [];
    for (let i = 0; i < 3; i++){
        newArray.push(form.elements[i].value);
    }
    if (document.getElementById('read').checked) {
        newArray.push('read');
    } else {
        newArray.push('unread');
    }
    addBookToLibrary(newArray);
    const newBook = document.createElement('div');
    newBook.classList.add('book');
    newBook.dataset.indexNumber = myLibrary.length;
    newBook.textContent = newArray[0];
    bookshelf.appendChild(newBook);
    newBook.addEventListener('click', bookDetails);
    modal.style.display = "none";
    event.preventDefault();
}

book.forEach(book => book.addEventListener('click', bookDetails));
function bookDetails(e) {
    bookModal.style.display = "block";
    e.srcElement.id = e.srcElement.dataset.indexNumber;
    currentBook = e.srcElement.dataset.indexNumber;
    console.log(currentBook);
    console.log(e.srcElement.id);
    let thisBook = myLibrary[parseInt(e.srcElement.dataset.indexNumber) - 1];
    bookText.textContent = `Title: ${thisBook.title},
                             Author: ${thisBook.author},
                             Pages: ${thisBook.pages},
                              Read: ${thisBook.read}`


}

removeBook.onclick = function() {
    const removedBook = document.getElementById(`${currentBook}`);
    console.log(removedBook);
    console.log(currentBook);
    bookshelf.removeChild(removedBook);
    bookModal.style.display = "none";
 }

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

span2.onclick = function(){
    bookModal.style.display = "none";
    console.log("hello");
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
    if (event.target == bookModal) {
         bookModal.style.display = "none";
    }
}

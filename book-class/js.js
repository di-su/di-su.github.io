// Class refactor
let myLibrary = [];

function toggleReadStatus(index) {
  if (myLibrary[index].read === "read") {
    myLibrary[index].read = "not read"
  } else {
    myLibrary[index].read = "read"
  }
  displayBooks()
}

function displayBooks() {
  clearTable();
  var i = 0;
  do {
    book = document.getElementById('books-table').insertRow();
    book.setAttribute('data-index', [i])
    book.innerHTML = 
    `
    <td>`+myLibrary[i].title+`</td>
    <td>`+myLibrary[i].author+`</td>
    <td>`+myLibrary[i].pages+`</td>
    <td>`+myLibrary[i].read+`</td>
    <td><button onclick="toggleReadStatus(`+[i]+`)">read</button></td>
    <td><button onclick="deleteBook(`+[i]+`)">delete</button></td>
    `;
    i++
  } while (i < myLibrary.length)
}

function clearTable() {
  book = document.getElementById('books-table')
  book.innerHTML = `<tr><th>Title</th><th>Author</th><th>Pages</th><th>Read</th><th>Read</th><th>Delete</th></tr>`;
}

class Book {
  constructor(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
  }
  test() {
     console.log(this.title);
  }
  defaultBooks() {
    var i = 0;
    do {
      let defaultBooks = new Book(`title`+i+``, `author`+i+``, `pages`+i+``, `not read`)
      myLibrary.push(defaultBooks)
      console.log(myLibrary)
      i++ 
    } while (i < 4)
  }


}

let book = new Book("title", "author", "pages")
book.test();
book.defaultBooks();
displayBooks();
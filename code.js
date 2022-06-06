const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
const submitButton = document.getElementById('submit')



submitButton.addEventListener('click', () => {
  handleSubmitButton();
})

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary (newBook) {
  myLibrary.push(newBook)
}

// const newBook = new Book('The Hobbit', 'J.R.R Tolkien', '295 pages', 'not yet read')

// const newBook2 = new Book('1984', 'George Orwell', '330', 'read')

// addBookToLibrary(newBook)

// addBookToLibrary(newBook2)

function handleSubmitButton () {
  let bookTitle = document.getElementById('title');
  let title = bookTitle.value;
  let bookAuthor = document.getElementById('author')
  let author = bookAuthor.value
  let bookPages = document.getElementById('pages')
  let pages = bookPages.value;
  let bookRead = document.getElementById('read')
  let read = bookRead.value;
  let newbook = new Book(title, author, pages, read)
  addBookToLibrary(newbook);
  bookTitle.value = "";
  bookAuthor.value = "";
  bookPages.value = "";
  bookRead.checked = false;
  displayBooks();
}




function displayBooks() {
  let removeButton = document.createElement("button");
  removeButton.setAttribute("data-num", myLibrary.length - 1);
  removeButton.setAttribute("id", "removeButton");
  removeButton.innerHTML = "Remove";
  
// for (let i = 0; i < myLibrary.length; i++) {
   let table = document.getElementById('libraryList')
  let row = table.insertRow(0);
  row.setAttribute("data-num", myLibrary.length - 1);

  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  let cell5 = row.insertCell(4);

cell1.innerHTML = myLibrary[myLibrary.length - 1].title;
cell2.innerHTML = myLibrary[myLibrary.length - 1].author;
cell3.innerHTML = myLibrary[myLibrary.length - 1].pages;
cell4.innerHTML = myLibrary[myLibrary.length - 1].read;
cell5.appendChild(removeButton);



}

//  let removeButton = document.getElementById("removeButton");
//  removeButton.onclick = removeRow(this);
document.addEventListener('click', function(e){
  if(e.target && e.target.id == 'removeButton'){
    removeRow(e.target);
  }
})
function removeRow(element) {  
  let row = element.parentNode.parentNode;
  let table = row.parentNode;
  table.removeChild(row);


  // element.closest('tr').remove();
};



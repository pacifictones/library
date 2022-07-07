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

class Book {
    constructor (title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    }
}

function addBookToLibrary (newBook) {
  myLibrary.push(newBook)
}


function handleSubmitButton () {
  let bookTitle = document.getElementById('title');
  let title = bookTitle.value;

  //validate a title was entered
  if (title === '') {
    alert("Please enter a title!");
    return;
  }

  let bookAuthor = document.getElementById('author')
  let author = bookAuthor.value

  //validate author field was filled in
  if (author === '') {
    alert("Please enter an author!")
    return;
  }

  let bookPages = document.getElementById('pages')
  let pages = bookPages.value;

  //Validate pages were entered
  if (pages === '') {
    alert("Please enter the number of pages!")
    return;
  }

  let bookRead = document.querySelector('#read')
  let read = bookRead.checked;
  let newbook = new Book(title, author, pages, read)

  addBookToLibrary(newbook);

  //Reset form with empty strings
  bookTitle.value = "";
  bookAuthor.value = "";
  bookPages.value = "";
  bookRead.checked = false;
  displayBooks();
}

const resetButton = document.getElementById('reset');

resetButton.addEventListener('click', () => {
  let bookTitle = document.getElementById('title');
  let title = bookTitle.value;
  let bookAuthor = document.getElementById('author')
  let author = bookAuthor.value
  let bookPages = document.getElementById('pages')
  let pages = bookPages.value;
  let bookRead = document.querySelector('#read')
  let read = bookRead.checked;
  bookTitle.value = "";
  bookAuthor.value = "";
  bookPages.value = "";
  bookRead.checked = false;
} )



function displayBooks() {
  let readButton = document.createElement("button");
  readButton.setAttribute("class", "readButton");
  readButton.innerHTML = "Read";
  readButton.style.backgroundColor = "green"

  notReadButton = document.createElement("button");
  notReadButton.setAttribute("class", "readButton");
  notReadButton.innerHTML = "Not read";
  notReadButton.style.backgroundColor = "orange"; 

  let removeButton = document.createElement("button");
  removeButton.setAttribute("data-num", myLibrary.length - 1);
  removeButton.setAttribute("id", "removeButton");
  removeButton.innerHTML = "Remove";
  

   let table = document.getElementById('libraryList')
  let row = table.insertRow(1);
  row.setAttribute("data-num", myLibrary.length - 1);

  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  let cell5 = row.insertCell(4);

cell1.innerHTML = myLibrary[myLibrary.length - 1].title;
cell2.innerHTML = myLibrary[myLibrary.length - 1].author;
cell3.innerHTML = myLibrary[myLibrary.length - 1].pages;

if (myLibrary[myLibrary.length - 1].read == true) {
  cell4.appendChild(readButton) 
} else {
  cell4.appendChild(notReadButton)
};
cell5.appendChild(removeButton);
}

document.addEventListener('click', function(e){
  if(e.target && e.target.id == 'removeButton'){
    removeRow(e.target);
  }
})

function removeRow(element) {  
  let row = element.parentNode.parentNode;
  let table = row.parentNode;
  table.removeChild(row);
};

document.addEventListener('click', function(e) {
  if(e.target && e.target.classList == "readButton") {
    if(e.target.textContent === "Read"){
    e.target.textContent = "Not read"
    e.target.style.backgroundColor = "orange";
   } else if (e.target.textContent === "Not read"){
     e.target.textContent = "Read"
     e.target.style.backgroundColor = "green"
   } 
}
})

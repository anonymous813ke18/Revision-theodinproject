const myLibrary = [];
const bookGrid = document.querySelector('.book-grid');
const bookCard = document.querySelector('.book-card')

const addBook = document.querySelector('.add-book');
const bookDialog = document.querySelector('.book-dialog');
const closeDialog = document.querySelector('.close-btn');
const addBtn = document.querySelector('.add-btn');
const bookTitle = document.querySelector('#book-title');
const bookAuthor = document.querySelector('#book-author');
const bookPages = document.querySelector('#book-pages');
const bookStatus = document.querySelector('#book-status');
const errorMsg = document.querySelector('.error-msg');

function Book (id, title, author, pages, status) {
    if(!new.target)
        throw Error("You must use the 'new' operator to call the constructor");

    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status
}

function addBookToLibrary(title, author, pages, status) {
    myLibrary.push(new Book(crypto.randomUUID(), title, author, pages, status));
}

function displayLibrary() {
    bookGrid.replaceChildren();

    myLibrary.map(function (book) {
        const bookCard = document.createElement("div");
        bookCard.classList.add('book-card');

        if (book.status == 'read')
            bookCard.classList.add('read');

        const titleH4 = document.createElement("h4");
        titleH4.textContent = "Title:";
        const titlePara = document.createElement("p");
        titlePara.textContent = `${book.title}`;
        bookCard.appendChild(titleH4);
        bookCard.appendChild(titlePara);

        const authorH4 = document.createElement("h4");
        authorH4.textContent = "Author:";
        const authorPara = document.createElement("p");
        authorPara.textContent = `${book.author}`;
        bookCard.appendChild(authorH4);
        bookCard.appendChild(authorPara);

        const pagesH4 = document.createElement("h4");
        pagesH4.textContent = "Pages:";
        const pagesPara = document.createElement("p");
        pagesPara.textContent = book.pages;
        bookCard.appendChild(pagesH4);
        bookCard.appendChild(pagesPara);

        const statusH4 = document.createElement("h4");
        statusH4.textContent = "Status:"
        const statusPara = document.createElement("p");
        statusPara.textContent = book.status;
        bookCard.appendChild(statusH4);
        bookCard.appendChild(statusPara);

        const bookCardBtnContainer = document.createElement("div");
        bookCardBtnContainer.classList.add('book-card-btn-container');
        bookCardBtnContainer.dataset.customId = book.id;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add('delete-btn');
        const statusBtn = document.createElement('button');  
        statusBtn.textContent = "Toggle Status";
        statusBtn.classList.add('toggle-status');
        bookCardBtnContainer.appendChild(deleteBtn);
        bookCardBtnContainer.appendChild(statusBtn);
        bookCard.appendChild(bookCardBtnContainer);

        bookGrid.appendChild(bookCard);
    })  
}

addBook.addEventListener('click', () => {
    bookDialog.showModal();
    errorMsg.textContent = '';
    bookTitle.value = '';
    bookAuthor.value = '';
    bookPages.value = '';
})

closeDialog.addEventListener('click', () => bookDialog.close())

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(Number(bookPages.value))

    if (bookTitle.value == '') {
        errorMsg.textContent = 'Please enter the title!';
        bookTitle.focus();
        return;
    }
    else if (bookAuthor.value == '') {
        errorMsg.textContent = 'Please enter the author name!';
        bookAuthor.focus();
        return;
    }
    else if (bookPages.value == '' || Number(bookPages.value) == 0) {
        errorMsg.textContent = 'Please enter the page count of the book!';
        bookPages.focus();
        return;
    }

    addBookToLibrary(bookTitle.value, bookAuthor.value, bookPages.value, bookStatus.value);
    displayLibrary();
    bookTitle.focus();
    errorMsg.textContent = '';
    bookTitle.value = '';
    bookAuthor.value = '';
    bookPages.value = '';
})

bookGrid.addEventListener ('click', e => {
    if (e.target.classList.contains('delete-btn')) {
        const bookId = e.target.closest('div').dataset.customId;
        myLibrary.forEach((book, index) => {
            if (book.id == bookId) {
                myLibrary.splice(index, 1)
            }
        })
        displayLibrary();
    } else if(e.target.classList.contains('toggle-status')) {
        e.target.closest('div').parentElement.closest('div').classList.toggle('read');
    }
})
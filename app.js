// Book Class: represents a Book object
class Book {
	constructor(title, author, isbn) {
		this.title = title;
		this.author = author;
		this.isbn = isbn;
	}
}

// UI class: Represents everything on the UI
class UI {
	static displayBooks() {
		const books = Store.getBooks();

		books.forEach((book) => UI.addBooksTolist(book));
	}

	static addBooksTolist(book) {
		const list = document.querySelector('#book-list'); 

		const row = document.createElement('tr');

		row.innerHTML = `
			<td>${book.title}</td>
			<td>${book.author}</td>
			<td>${book.isbn}</td>
			<td>
				<a href="#" class="btn btn-danger btn-xs delete">x</a>
			</td>
		`;

		list.appendChild(row);


	}

	// delete Book
	static deleteBook(el) {
		if (el.classList.contains('delete')) {
			el.parentElement.parentElement.remove();
		}
	}

	// Show Alert messages
	static showAlert(msg, className) {
		const div = document.createElement('div');

		div.className = `alert alert-${className}`;
		div.appendChild(document.createTextNode(msg));
		const container = document.querySelector('.container');
		const form  = document.querySelector('#book-form');

		container.insertBefore(div, form);

		// set 3sec timeout for the display
		setTimeout(() => document.querySelector('.alert').remove(), 3000);
	}

	// Clear all input fields after submitting
	static clearFields () {
		document.querySelector('#title').value = '';
		document.querySelector('#author').value = '';
		document.querySelector('#isbn').value = '';
	}
}

// Store class: Handles data storage (Local Storage)
class Store {
	static getBooks() {
		let books;
		if (localStorage.getItem('books') === null) {
			books = [];
		}
		else {
			books = JSON.parse(localStorage.getItem('books'));
		}

		return books;
	}

	static addBook(book) {
		const books = Store.getBooks();
		books.push(book);
		localStorage.setItem('books', JSON.stringify(books));
	}

	static removeBook(isbn) {
		const books = Store.getBooks();

		books.forEach((book, index) => {
			if (books.isbn === isbn) {
				books.splice(index, 1);
			}
		});
		
		localStorage.setItem('books', JSON.stringify(books));
	}
}

// Events: Display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Events: Add book
document.querySelector('#book-form').addEventListener('submit', (e) => {
	e.preventDefault();
	// get form input values
	const title = document.querySelector('#title').value;
	const author = document.querySelector('#author').value;
	const isbn = document.querySelector('#isbn').value;

	// validate form input
	if (title === '' || author === '' || isbn === '') {
		UI.showAlert('All fields must be filled', 'danger');
	}
	else {
		// Instatiantiat Book Class
		const book = new Book(title, author, isbn);

		// Add new Book entry to UI
		UI.addBooksTolist(book);

		// add Boko to LocalStorage
		Store.addBook(book);

		// displpay success message
		UI.showAlert('Book succesfully added', 'success');

		//	clear input fields
		UI.clearFields(); 
	}

	
});

// Events: Remove book
document.querySelector('#book-list').addEventListener('click', (e) => {
	// delete book from UI
	UI.deleteBook(e.target);
 	
 	// delete book from localStorage
 	Store.removeBook(e.target.parentElement.previousElementSibling.value);
	
	// display success message
	UI.showAlert('Book succesfully deleted', 'success');
});
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
		const StoredBooks = [
			{
				title: 'Book 1',
				author: 'Ola Kehinde',
				isbn: '89364598734'
			},
			{
				title: 'Book 2',
				author: 'Olu Jembe',
				isbn: '9072572934'
			},
			{
				title: 'Book 3',
				author: 'Ade Kanmi',
				isbn: '2137846358234979'
			},
		];

		const books = StoredBooks;

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

	// Clear all input fields after submitting
	static clearFields () {
		document.querySelector('#title').value = '';
		document.querySelector('#author').value = '';
		document.querySelector('#isbn').value = '';
	}
}
// Store class: Handles data storage (Local Storage)

// Events: Display books
document.addEventListener('DOMContentLoaded', UI.displayBooks)

// Events: Add book
document.querySelector('#book-form').addEventListener('submit', (e) => {
	e.preventDefault();
	// get form input values
	const title = document.querySelector('#title').value;
	const author = document.querySelector('#author').value;
	const isbn = document.querySelector('#isbn').value;

	// Instatiantiat Book Class
	const book = new Book(title, author, isbn);

	// Add new Book entry to UI
	UI.addBooksTolist(book);

	//	clear input fields
	UI.clearFields(); 
});

// Events: Remove book
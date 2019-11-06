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

		
	}
}
// Store class: Handles data storage (Local Storage)

// Events: Display books


// Events: Add book


// Events: Remove book
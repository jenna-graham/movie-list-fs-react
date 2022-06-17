import React from 'react';
import Book from './Book.js';

export default function BookList({ books, deleteBook }) {
  return (
    <div className='book-list'>
      {
        books.map((book, i) => (
          <Book key={book.title + i} book={book} deleteBook={deleteBook} />

        )
        )
      }
    </div>
  );
}

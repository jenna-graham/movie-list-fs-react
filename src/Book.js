import React from 'react';

export default function Book({ book, deleteBook }) {
  return (
    <div className='book' style={{ backgroundColor: book.color }}
      onClick={() => deleteBook && deleteBook(book.name)}>
      <h3>{book.title}</h3>
      <p>written by {book.author}</p>
      <p>in {book.date}</p>
        
    </div>
  );
}

import React from 'react';

export default function Book({ book, deleteBook }) {
  return (
    <div className='book' style={{ color: book.color }}
      onClick={() => deleteBook && deleteBook(book.title)}>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>{book.date}</p>
        
    </div>
  );
}

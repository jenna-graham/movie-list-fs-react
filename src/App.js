import './App.css';
import { useState } from 'react';
import Book from './Book.js';
import BookForm from './BookForm.js';

function App() {
  const [bookTitle, setTitle] = useState('');
  const [bookDate, setDate] = useState('');
  const [bookAuthor, setAuthor] = useState('');
  const [bookColor, setColor] = useState('');
  const [allBooks, SetBooks] = useState([]);
  const [visibleBooks, setBooks] = useState('');
  const [filterString, setFilterString] = useState('');

  function submitBook(e) {
    e.preventDefault();
    const newBook = {
      title: bookTitle,
      author: bookAuthor,
      date: bookDate,
      color: bookColor,
    };
  }

  return (
    <div className="App">
      <BookForm 
        submitBook={submitBook}
        bookTitle={bookTitle}
        setTitle={setTitle}
        bookAuthor={bookAuthor}
        setAuthor={setAuthor}
        bookDate={bookDate}
        setDate={setDate}
        bookColor={bookColor}
        setColor={setColor}
      />
      <Book book={{
        title: bookTitle,
        date: bookDate,
        author: bookAuthor,
        color: bookColor,
      }}/>
    </div>
   
   
  );
}

export default App;

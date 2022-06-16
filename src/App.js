import './App.css';
import { useState, useEffect } from 'react';
import Book from './Book.js';
import BookForm from './BookForm.js';
import BookList from './BookList.js';

function App() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [author, setAuthor] = useState('');
  const [color, setColor] = useState('');
  const [allBooks, setBooks] = useState([
    {
      title: 'A New Earth',
      author: 'Eckhart Tolle',
      date: '2010',
      color: 'green'
    }
  ]);
  const [visibleBooks, setVisibleBooks] = useState('');
  const [filterString, setFilterString] = useState('');

  useEffect(() => {
    setVisibleBooks(allBooks);
    setFilterString('');
  }, [allBooks]);

  function submitBook(e) {
    e.preventDefault();
    const newBook = {
      title: title,
      author: author,
      date: date,
      color: color,
    };
    const updatedBooks = [...allBooks, newBook];
    setBooks(updatedBooks);
  }
  function deleteBook(title) {
    const bookIndex = allBooks.findIndex((book) => book.title === title);
    allBooks.splice(bookIndex, 1);
    setVisibleBooks([...allBooks]);
  }
  function filterBooks(filterString) {
    setFilterString(filterString);
    const updatedBooks = allBooks
      .filter(book => book.title.toLowerCase().includes(filterString.toLowerCase()));
    setVisibleBooks(updatedBooks);
  }

  return (
    <div className="App">
      <div>
        <BookForm 
          submitBook={submitBook}
          bookTitle={title}
          setTitle={setTitle}
          bookAuthor={author}
          setAuthor={setAuthor}
          bookDate={date}
          setDate={setDate}
          bookColor={color}
          setColor={setColor}
        />
      </div>
     
      <div className="book">
        <Book book={{
          title: title,
          date: date,
          author: author,
          color: color,
        }}/>
        <div className="book-filter">
          Filter books
          <input onChange={(e) => filterBooks(e.target.value)} />
        </div>
        <BookList 
          books={filterString ? visibleBooks : allBooks}
          deleteBook={deleteBook}/>
      </div>
    </div>
   
  );
}

export default App;

import './App.css';
import { useState, useEffect } from 'react';
import Book from './Book.js';
import BookForm from './BookForm.js';
import BookList from './BookList.js';
import RainMusic from './Sound.js';

function App() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [author, setAuthor] = useState('');
  const [color, setColor] = useState('rgb(86, 127, 127)');
  const [allBooks, setBooks] = useState([
    {
      title: 'A New Earth',
      author: 'Eckhart Tolle',
      date: '2010',
      color: 'rgb(35, 36, 50)'
    }, 
    {
      title: 'Grokking Algorithms',
      author: 'Aditya Bhargava',
      date: '2016',
      color: 'rgb(146, 107, 16)'
    },
    {
      title: 'Beloved',
      author: 'Toni Morrison',
      date: '1987',
      color: 'rgb(79, 81, 81)'
    }
  ]);
  const [visibleBooks, setVisibleBooks] = useState('');
  const [filterString, setFilterString] = useState('');

  useEffect(() => {
    setVisibleBooks(allBooks);
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
    setFilterString('');
  }
  function filterBooks(filterString) {
    setFilterString(filterString);
    const updatedBooks = allBooks
      .filter(book => book.title.toLowerCase().includes(filterString.toLowerCase()));
    setVisibleBooks(updatedBooks);
  }

  return (
   
    <div className="App">
      <header>
        <h1>RAINY DAY READING</h1>
        <div><RainMusic /></div>
        
      </header>
      
      <div className='form-preview'>
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
        <Book book={{
          title: title,
          date: date,
          author: author,
          color: color,
        }}/>
      </div>
      
      <div>
        
        <div className="book-filter">
          Filter books
          <input className="filter-input" value={filterString} onChange={(e) => filterBooks(e.target.value)} />
        </div>
        <BookList 
          books={filterString ? visibleBooks : allBooks}
          deleteBook={deleteBook}/>
      </div>
      
    </div>

   
  );
}

export default App;

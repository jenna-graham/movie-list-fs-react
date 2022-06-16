import React from 'react';

export default function BookForm({
  submitBook,
  title,
  setTitle,
  author,
  setAuthor,
  date,
  setDate,
  color,
  setColor,
}) {
  return (
    <div className="book-container">
      <form className="book-form" onSubmit={submitBook}>
        <label>
                Title
          <input required value={title} onChange={e => setTitle(e.target.value)} />
        </label>
        <label>
            Author
          <input required value={author} onChange={e => setAuthor(e.target.value)} />
        </label>
        <label>
            Date
          <input required value={date} onChange={e => setDate(e.target.value)} />
        </label>
        <label>
            Color
          <select required value={color} onChange={e => setColor(e.target.value)}>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="Green">Green</option>
            <option value="Blue">Blue</option>
          </select>
        </label>
        <button>Add Book</button>
      </form>
        
    </div>
  );
}

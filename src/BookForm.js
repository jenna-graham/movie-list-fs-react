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
        <h3>Add A Book</h3>
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
            <option value="rgb(86, 127, 127)">Rain</option>
            <option value="rgb(146, 107, 16)">NightLight</option>
            <option value="rgb(113, 115, 115)">Cloud</option>
            <option value="rgb(35, 36, 50)">Thunder</option>
          </select>
        </label>
        <button>Add Book</button>
      </form>
        
    </div>
  );
}

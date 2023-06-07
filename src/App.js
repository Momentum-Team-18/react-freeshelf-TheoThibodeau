import './App.css'
import bookData from './book-data.json'
import React from 'react';
import { useState } from 'react'

function App() {

  return (
    <div>
      <h1>Freeshelf</h1>
      <ul>
      {bookData.map((book) => (
        <ul>
        <h1 class="title">{book.title}</h1>
        <h3 class="author">{book.author}</h3>
        <h4 class="description">{book.shortDescription}</h4>
        <div><img src={book.coverImageUrl}></img></div>
        </ul>
      ))}
      </ul>
      {/* Use bookData to show books on the page*/}
    </div>
  )}

  function Dev(props) {
    const [expanded, setExpanded] = useState(false)

    return(
      <li>
        <p>{props.bookData}</p>
        <button onClick={() => setExpanded(!expanded)}>
          { expanded ? "Show Less" : "Show More"}
        </button>
        {expanded && (
          <div>
            <ul>
              {bookData.map((book) => (
              <h4>{book.url}</h4>
              ))}
            </ul>
          </div>
        )}
      </li>
    )
  }

  export default App
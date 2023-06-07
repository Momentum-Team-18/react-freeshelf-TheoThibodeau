import './App.css'
import bookData from './book-data.json'
import React from 'react';
import { useState } from 'react'

function App() {

  return (
    <div>
      <h1>Freeshelf</h1>
      <ul>
      {bookData.map((book) => <BookInfo bookObject={book} />)}    
      </ul>
      {/* Use bookData to show books on the page*/}
    </div>
  )}

  function BookInfo(props) {
    const [expanded, setExpanded] = useState(false)

    return(
      <ul class="card">
        <h1 class="title">{props.bookObject.title}</h1>
        <h3 class="author">{props.bookObject.author}</h3>
        <h4 class="description">{props.bookObject.shortDescription}</h4>
        <div><img class="image" src={props.bookObject.coverImageUrl}></img></div>
        <button onClick={() => setExpanded(!expanded)}>
          { expanded ? "Show Less" : "Show More"}
        </button>
        {expanded && (
          <div>
            <ul>
              <h4>{props.bookObject.url}</h4>
              <h4>{props.bookObject.publisher}</h4>
              <h4>{props.bookObject.publicationDate}</h4>
              <h4>{props.bookObject.detailedDescription}</h4>
            </ul>
          </div>
        )}
      </ul>
    )
  }


  export default App
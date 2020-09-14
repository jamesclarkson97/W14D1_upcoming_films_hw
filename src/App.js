import React from 'react';
import FilmData from './container/FilmData.js';
import './App.css';

function App() {
  return (
    <>
    <h1>Upcoming Films in the UK</h1>
    < FilmData />
    <form action="https://www.imdb.com/calendar/?region=gb">
         <button type="submit">View more upcoming releases</button>
      </form>
      </>
  )
}

export default App;

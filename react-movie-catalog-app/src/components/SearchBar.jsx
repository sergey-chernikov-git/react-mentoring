import React from 'react';
import { showElementById } from './../logic/elementOperations.js';

export const SearchBar = () => {
  return (
    <div className="search-bar-background">
      <div className="search-bar">
        <button onClick={() => showElementById('movie-add')}>+ Add Movie</button>
        <h1>Find your movie</h1>
        <div>
          <input></input>
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { searchMovieByTitle } from '../store/thunks';
import { useDispatch } from 'react-redux';
export const SearchBar = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="search-bar-background"></div>
      <div className="search-bar">
        <h1 className="search-title">Find your movie</h1>
        <div className="search-panel">
          <input className="search-input" id="search-input-value"></input>
          <button
            className="search-button"
            onClick={() =>
              dispatch(searchMovieByTitle(document.getElementById('search-input-value').value))
            }
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};

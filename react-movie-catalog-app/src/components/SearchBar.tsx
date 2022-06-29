import React, {Dispatch} from 'react';
import { fetchMovies } from '../store/thunks';
import { useDispatch } from 'react-redux';
export const SearchBar = () => {
  const dispatch :  Dispatch<any> = useDispatch();
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
              dispatch(fetchMovies({ title: (document.getElementById('search-input-value') as HTMLInputElement).value }))
            }
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};

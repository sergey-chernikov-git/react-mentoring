import React from 'react';

export const SearchBar = () => {
  return (
    <>
      <div className="search-bar-background"></div>
      <div className="search-bar">
        <h1 className="search-title">Find your movie</h1>
        <div className="search-panel">
          <input className="search-input"></input>
          <button className="search-button">Search</button>
        </div>
      </div>
    </>
  );
};

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

export const SearchBar = ({searchQuery} : {searchQuery: string}) => {
  const dispatch: Function = useDispatch();
  const navigate = useNavigate();
  const [searchVal, setSearchVal] = useState(searchQuery)
  
  return (
    <>
      <div className="search-bar-background"></div>
      <div className="search-bar">
        <h1 className="search-title">Find your movie</h1>
        <div className="search-panel">
          <input className="search-input" id="search-input-value" value={searchVal} onChange={ (e) =>  setSearchVal(e.target.value)}></input>
          <button
            className="search-button"
            onClick={() =>  navigate(`/search/${(document.getElementById('search-input-value') as HTMLInputElement).value}`)}>
            Search
          </button>
        </div>
      </div>
    </>
  );
};

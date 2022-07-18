import React, { EventHandler, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from "react-router-dom";

export const SearchBar = ({searchQuery} : {searchQuery: string}) => {
  const dispatch: Function = useDispatch();
  const navigate = useNavigate();
  const [searchVal, setSearchVal] = useState(searchQuery)
  const location = useLocation();
  useEffect(()=>{
    navigate(`${location.pathname}${location.search}`)
  },[])

  const handleKeyDown = (event: any) => {
    if(event.keyCode === 13) { 
      navigateToSearch()
    }
  }

  const navigateToSearch = () => {
    navigate(`/search/${(document.getElementById('search-input-value') as HTMLInputElement).value}${location.search}`)
  }
  
  return (
    <>
      <div className="search-bar-background"></div>
      <div className="search-bar">
        <h1 className="search-title">Find your movie</h1>
        <div className="search-panel">
          <input className="search-input" id="search-input-value" defaultValue={searchVal} onKeyDown={handleKeyDown} onChange={(e) =>  setSearchVal(e.target.value)}></input>
          <button
            className="search-button"
            onClick={() =>  navigateToSearch()}>
            Search
          </button>
        </div>
      </div>
    </>
  );
};

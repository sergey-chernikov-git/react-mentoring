import React, { Dispatch } from 'react';

import { useDispatch } from 'react-redux';

import { useNavigate } from "react-router-dom";

import { fetchMovies } from '../store/thunks';
import { TMenuPanelProps } from '../ts-types/props'; 
import { useSearchParams } from 'react-router-dom'; 

export const MenuPanel = ({ genres, sortList }: TMenuPanelProps) => {
  const [queryParams, setQueryParams] = useSearchParams();
  const  sortBy = queryParams.get('sortBy');
  const  genre = queryParams.get('genre');
  const dispatch: Function = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <div className="horisontal-line"></div>
      <div className="menu-panel">
        <div className="gender-menu-panel">
          <div id="menu-panel-genres">
            <select size={genres.length} defaultValue={genres[0].value} value={genre}>
              {genres.map((genre) => {
                return (
                  <React.Fragment key={genre.key}>
                    <option
                      className="menu-panel-gender"
                      onClick={(e) => navigate(`/search?genre=${(e.target as HTMLElement).innerHTML}`)}
                    >
                      {genre.value}
                    </option>
                  </React.Fragment>
                );
              })}
            </select>
          </div>
          <div className="menu-panel-sort">
            <div className="menu-panel-gender">Sort by</div>
            <div className="menu-panel-select">
              <select
                className="dropdown-content"
                id="dropdown-sorting-content"
                name="genres"
                onChange={(e) => {
                  navigate(`/search?sortBy=${e.target.value}`);
                }}
                value={sortBy}
              >
                {sortList.map((el) => {
                  return (
                    <option key={el.key} value={el.value}>
                      {el.value}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="menu-horisontal-splitter"></div>
    </>
  );
};

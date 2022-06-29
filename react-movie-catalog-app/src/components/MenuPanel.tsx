import React, { Dispatch } from 'react';
import PropTypes from 'prop-types';
import { keyValueType } from './type';
import { useDispatch } from 'react-redux';

import { fetchMovies } from '../store/thunks';
import { TKeyValue } from '../ts-types/types';

export const MenuPanel = ({ genres, sortList } : { genres : Array<TKeyValue>, sortList :  Array<TKeyValue>}) => {
  const dispatch : Dispatch<any> = useDispatch();
  return (
    <>
      <div className="horisontal-line"></div>
      <div className="menu-panel">
        <div className="gender-menu-panel">
          <div id="menu-panel-genres">
            <select size={genres.length} defaultValue={genres[0].value}>
              {genres.map((genre) => {
                return (
                  <React.Fragment key={genre.key}>
                    <option
                      className="menu-panel-gender"
                      onClick={(e) => dispatch(fetchMovies({ genre: (e.target as HTMLElement).innerHTML }))}
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
                  dispatch(fetchMovies({ sortRule: e.target.value }));
                }}
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

MenuPanel.propTypes = {
  genders: PropTypes.arrayOf(keyValueType),
  sortList: PropTypes.arrayOf(keyValueType),
  sortMovies: PropTypes.func,
  filterMovies: PropTypes.func
};

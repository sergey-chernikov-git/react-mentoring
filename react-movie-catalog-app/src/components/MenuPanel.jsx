import React from 'react';
import PropTypes from 'prop-types';
import { keyValueType } from './type';

export const MenuPanel = ({ genres, sortList, sortMovies, filterMovies }) => {
  return (
    <>
      <div className="horisontal-line"></div>
      <div className="gender-menu-panel">
        {genres.map((genre) => {
          return (
            <React.Fragment key={genre.id}>
              <div onClick={(e) => filterMovies(e)}>{genre.value}</div>
              <div className="menu-horisontal-splitter-selected"></div>
            </React.Fragment>
          );
        })}
        <div className="sorting-panel">
          <div>Sort by</div>
          <select
            className="dropdown-content"
            id="dropdown-sorting-content"
            name="genres"
            onChange={(e) => {
              sortMovies(e);
            }}
          >
            {sortList.map((el) => {
              return (
                <option key={el.id} value={el.value}>
                  {el.value}
                </option>
              );
            })}
          </select>
        </div>
        <div className="menu-horisontal-splitter"></div>
      </div>
    </>
  );
};

MenuPanel.propTypes = {
  genders: PropTypes.arrayOf(keyValueType),
  sortList: PropTypes.arrayOf(keyValueType)
};

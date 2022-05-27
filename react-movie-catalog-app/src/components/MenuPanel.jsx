import React from 'react';
import PropTypes from 'prop-types';
import { genreType } from './type';
import { Sort, Genres } from './../util/dictionary/dictionary.js';

export const MenuPanel = ({ genres, sort }) => {
  return (
    <>
      <div className="horisontal-line"></div>
      <div className="gender-menu-panel">
        {genres.map((genre) => {
          return (
            <>
              <div key={genre.id}>{genre.value} </div>
              <div className="menu-horisontal-splitter-selected"></div>
            </>
          );
        })}
        <div className="sorting-panel">
          <div>Sort by</div>
          <select class="dropdown-content" id="dropdown-sorting-content" name="genres">
            {sort.map((el) => {
              return <option value={el.id}>{el.value}</option>;
            })}
          </select>
        </div>
        <div className="menu-horisontal-splitter"></div>
      </div>
    </>
  );
};

MenuPanel.propTypes = {
  genders: PropTypes.arrayOf(genreType)
};

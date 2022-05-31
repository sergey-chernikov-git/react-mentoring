import React from 'react';
import PropTypes from 'prop-types';
import { keyValueType } from './type';

export const MenuPanel = ({ genres, sortList }) => {
  return (
    <>
      <div className="horisontal-line"></div>
      <div className="gender-menu-panel">
        {genres.map((genre) => {
          return (
            <React.Fragment key={genre.id}>
              <div >{genre.value}</div>
              <div className="menu-horisontal-splitter-selected"></div>
            </React.Fragment>
          );
        })}
        <div className="sorting-panel">
          <div>Sort by</div>
          <select className="dropdown-content" id="dropdown-sorting-content" name="genres">
            {sortList.map((el) => {
              return (
                <option key={el.id} value={el.id}>
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

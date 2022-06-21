import React from 'react';
import PropTypes from 'prop-types';
import { keyValueType } from './type';
import { useSelector, useDispatch } from 'react-redux';
import { sortMoviesAction, filterMoviesAction } from '../store/actions';

export const MenuPanel = ({ genres, sortList }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="horisontal-line"></div>
      <div className="menu-panel">
        <div className="gender-menu-panel">
          <div id="menu-panel-genres">
            <select size={genres.length} defaultValue={genres[0].value}>
              {genres.map((genre) => {
                return (
                  <React.Fragment key={genre.id}>
                    <option
                      className="menu-panel-gender"
                      onClick={(e) => dispatch(filterMoviesAction(e.target.innerHTML))}
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
                  dispatch(sortMoviesAction(e));
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

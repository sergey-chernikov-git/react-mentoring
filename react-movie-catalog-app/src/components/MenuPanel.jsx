import React from 'react';
import PropTypes from 'prop-types';
import { keyValueType } from './type';

export const MenuPanel = ({ genres, sortList, sortMovies, filterMovies }) => {
  return (
    <>
      <div className="horisontal-line"></div>
      <div className="menu-panel">
        <div className="gender-menu-panel">
          {/* {genres.map((genre) => {
            return (
              <React.Fragment key={genre.id}>
                <div className="menu-panel-gender" onClick={(e) => filterMovies(e)}>{genre.value}</div>                
              </React.Fragment>
            );
          })}  */}
          {/* <div id="menu-panel-genres">
            <select size="6">
                <option selected>Water</option>
                <option>Apple Juice</option>
                <option>Orange Juice</option>
                <option>Milk</option>
                <option>Coffee</option>
                <option>Sports Drink</option>
            </select>
          </div> */}
          <div id="menu-panel-genres">
          <select size={genres.length}>
            {genres.map((genre) => {
              return (
                <React.Fragment key={genre.id}>
                  <option className="menu-panel-gender" onClick={(e) => filterMovies(e)} selected>{genre.value}</option>                
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
          </div>            
        </div>             
      </div>
      {/* <div className="menu-horisontal-splitter-selected"></div> */}
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

import React from 'react';
import PropTypes from 'prop-types';
import { genreType } from '../genreMenu/type/genreType';
import { hideElementById } from './../../logic/elementOperations.js';

export const MovieAdd = ({ genres }) => {
  return (
    <div className="movie-add" id="movie-add">
      <div>
        <h1>Add Movie</h1>
      </div>
      <div>
        <div>
          <label className="uppercase-label">Title</label>
          <input className="wide-input"></input>
        </div>
        <div>
          <label className="uppercase-label">Release Date</label>
          <input className="tight-input" type="date" alt="Select Date"></input>
        </div>
      </div>
      <div>
        <div>
          <label className="uppercase-label">Movie URL</label>
          <input className="wide-input" type="url" placeholder="https://"></input>
        </div>
        <div>
          <label className="uppercase-label">Rating</label>
          <input className="tight-input" type="number" placeholder="7.8"></input>
        </div>
      </div>
      <div>
        <div>
          <label className="uppercase-label">Genre</label>
          <input className="wide-input" placeholder="Select genre"></input>
        </div>
        <div>
          <label className="uppercase-label">Runtime</label>
          <input className="tight-input" type="text" placeholder="minutes"></input>
        </div>
      </div>
      <div>
        <div className="movie-genre-select">
          {genres
            .filter(({ id, value }) => value != 'All')
            .map(({ id, value }) => {
              return (
                <div>
                  <label className="movie-genre-container">
                    {value}
                    <input type="checkbox" />
                    <span className="movie-genre-checkmark"></span>
                  </label>
                </div>
              );
            })}
        </div>
        <div className="tight-hiden-input" />
      </div>
      <div>
        <div>
          <label className="uppercase-label">Overview</label>
          <textarea
            name="Text1"
            cols="40"
            rows="5"
            className="text-box-input"
            type="text"
          ></textarea>
        </div>
      </div>

      <div>
        <input className="reset-button" type="submit" value="Reset"></input>
        <input
          className="submit-button"
          type="submit"
          value="Submit"
          onClick={() => hideElementById('movie-add')}
        ></input>
      </div>
    </div>
  );
};

MovieAdd.propTypes = {
  genres: PropTypes.arrayOf(genreType)
};

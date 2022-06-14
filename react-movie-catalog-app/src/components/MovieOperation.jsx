import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { movieType } from './type';
import { getID } from '../util/dictionary/dictionary';
import { getGenresList } from '../util/dictionary/dictionary';

export const MovieOperation = ({ movie = null, operationHandler, closeWindow }) => {
  const [contextMenu, setContextMenu] = useState(false);
  const [id, setID] = useState(movie ? movie.id : getID());
  const [title, setTitle] = useState(movie ? movie.title : '');
  const [year, setYear] = useState(movie ? movie.year : '');
  const [src, setSRC] = useState(movie ? movie.src : '');
  const [rating, setRating] = useState(movie ? movie.rating : '');
  const [genreList, setGenreList] = useState(movie ? movie.genres : []);
  const [runtime, setRuntime] = useState(movie ? movie.runtime : '');
  const [overview, setOverview] = useState(movie ? movie.overview : '');

  const [genres, setGenres] = useState(getGenresList());

  const onResetHandle = () => {
    setTitle(movie ? movie.title : '');
    setYear(movie ? movie.year : '');
    setSRC(movie ? movie.src : '');
    setRating(movie ? movie.rating : '');
    setGenreList(movie ? movie.genres : []);
    setRuntime(movie ? movie.runtime : '');
    setOverview(movie ? movie.overview : '');
  };

  const genreSelectorHandler = (e, value) => {
    console.log(e.target.className);
    if (e.target.className === 'movie-genre-checkmark-selected') {
      e.target.className = 'movie-genre-checkmark';
      const list = genreList;
      const inx = list.indexOf(e.target.getAttribute('genre'));
      list.splice(inx, 1);
      setGenreList([...list]);
    } else {
      console.log('I am here');
      e.target.className === 'movie-genre-checkmark-selected';
      console.log(e.target);
      if (genreList.indexOf(value) === -1) {
        const list = genreList;
        list.push(value);
        setGenreList([...list]);
      }
    }
  };

  const movieObj = {
    id: id,
    title: title,
    year: year,
    src: src,
    rating: rating,
    genres: genreList,
    runtime: runtime,
    overview: overview
  };

  const genreSelectorElem = (
    <div>
      <div className="movie-genre-select" id="movie-genre-select">
        <input
          className="close-x-button"
          type="button"
          onClick={() => setContextMenu(false)}
          value="X"
        />
        {genres
          .filter(({ id, value }) => value != 'All')
          .map(({ id, value }) => {
            return (
              <div key={id}>
                <label className="movie-genre-container">
                  {value}
                  {genreList.indexOf(value) != -1 ? (
                    <span
                      className="movie-genre-checkmark-selected"
                      onClick={(e) => genreSelectorHandler(e, value)}
                    />
                  ) : (
                    <span
                      className="movie-genre-checkmark"
                      onClick={(e) => genreSelectorHandler(e, value)}
                    />
                  )}
                </label>
              </div>
            );
          })}
      </div>
    </div>
  );

  return (
    <>
      <div className="movie-add" id="movie-add">
        <div className="movie-preview-context-menu-close" onClick={() => closeWindow()}>
          X
        </div>
        <div>
          <h1>{movie ? 'Edit ' : 'Add '}Movie</h1>
        </div>
        <div>
          <div>
            <label className="uppercase-label">Title</label>
            <input
              className="wide-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </div>
          <div>
            <label className="uppercase-label">Release Date</label>
            <input
              className="tight-input"
              type="date"
              alt="Select Date"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            ></input>
          </div>
        </div>
        <div>
          <div>
            <label className="uppercase-label">Movie URL</label>
            <input
              className="wide-input"
              type="url"
              placeholder="https://"
              value={src}
              onChange={(e) => setSRC(e.target.value)}
            ></input>
          </div>
          <div>
            <label className="uppercase-label">Rating</label>
            <input
              className="tight-input"
              type="number"
              placeholder="7.8"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            ></input>
          </div>
        </div>
        <div>
          <div>
            <label className="uppercase-label">Genre</label>
            <input
              className="wide-input"
              value={genreList.join(', ')}
              onClick={() => setContextMenu(!contextMenu)}
            ></input>
          </div>
          <div>
            <label className="uppercase-label">Runtime</label>
            <input
              className="tight-input"
              type="text"
              placeholder="minutes"
              value={runtime}
              onChange={(e) => setRuntime(e.target.value)}
            ></input>
          </div>
        </div>
        {contextMenu ? genreSelectorElem : null}
        <div>
          <div>
            <label className="uppercase-label">Overview</label>
            <textarea
              name="Text1"
              cols="40"
              rows="5"
              className="text-box-input"
              type="text"
              value={overview}
              onChange={(e) => setOverview(e.target.value)}
            ></textarea>
          </div>
        </div>

        <div>
          <input
            className="reset-button"
            type="submit"
            value="Reset"
            onClick={() => onResetHandle()}
          ></input>
          <input
            className="submit-button"
            type="submit"
            value="Submit"
            onClick={() => {
              operationHandler(movieObj);
              closeWindow();
            }}
          ></input>
        </div>
      </div>
    </>
  );
};

function Span() {
  return <span className="movie-genre-checkmark" selected="true" />;
}

MovieOperation.propTypes = {
  movie: movieType,
  operationHandler: PropTypes.func,
  closeDialog: PropTypes.func
};
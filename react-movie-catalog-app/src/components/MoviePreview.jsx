import React, { useState } from 'react';
import { useMovie } from './../hooks/useMovie';
import PropTypes from 'prop-types';
import { movieType } from './type';
import { MovieOperation } from './MovieOperation';

import { useSelector, useDispatch } from 'react-redux';
import { delMovieAction, editMovieAction } from '../store/actions';

export const MoviePreview = ({ movie, viewMovie }) => {
  const dispatch = useDispatch();
  const [contextMenu, setContextMenu] = useState(false);
  const [
    budget,
    genres,
    id,
    overview,
    poster_path,
    release_date,
    revenue,
    runtime,
    tagline,
    title,
    vote_average,
    vote_count
  ] = useMovie(movie);
  const [editModalWindow, setEditModalWindow] = useState(false);

  const contextMenuHandler = (e) => {
    e.preventDefault();
    setContextMenu(true);
  };

  const editModalWindowsHandler = () => {
    setEditModalWindow(true);
    setContextMenu(false);
  };

  const movieEditOperationElem = (
    <MovieOperation
      movie={movie}
      operationHandler={(movie) => dispatch(editMovieAction(movie))}
      closeWindow={() => setEditModalWindow(false)}
    />
  );

  const contextMenuElem = (
    <div className="movie-preview-context-menu">
      <div
        className="movie-preview-context-menu-close"
        onClick={() => {
          setContextMenu(false);
        }}
      >
        X
      </div>
      <div
        className="movie-preview-context-menu-item"
        onClick={() => editModalWindowsHandler(movie)}
      >
        Edit
      </div>
      <div
        className="movie-preview-context-menu-item"
        onClick={() => dispatch(delMovieAction(movie))}
      >
        Delete
      </div>
    </div>
  );

  return (
    <>
      <div className="movie-preview">
        {contextMenu ? contextMenuElem : null}
        <img
          src={poster_path}
          onContextMenu={(e) => contextMenuHandler(e)}
          onClick={() => viewMovie(movie)}
        ></img>
        <div>
          <div className="movie-preview-title">{title}</div>
          <div className="movie-preview-year">{release_date.split('-')[0]}</div>
          <div className="movie-preview-gender">{genres.join(' & ')}</div>
        </div>
      </div>
      {editModalWindow ? movieEditOperationElem : null}
    </>
  );
};

MoviePreview.propTypes = {
  movie: movieType,
  deleteMovie: PropTypes.func,
  editMovie: PropTypes.func
};

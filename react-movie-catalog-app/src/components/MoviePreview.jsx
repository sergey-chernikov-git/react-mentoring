import React, { useState } from 'react';
import { useMovie } from './../hooks/useMovie';
import PropTypes from 'prop-types';
import NotFoundImg from './../assets/img/404/404.jpg';
import { movieType } from './type';
import { MovieOperation } from './MovieOperation';

export const MoviePreview = ({ movie, deleteMovie, editMovie, viewMovie }) => {
  const [contextMenu, setContextMenu] = useState(false);
  const [id, src, title, year, runtime, overview, rating, genres] = useMovie(movie);
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
      operationHandler={editMovie}
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
      <div className="movie-preview-context-menu-item" onClick={() => deleteMovie(movie)}>
        Delete
      </div>
    </div>
  );

  return (
    <>
      <div className="movie-preview">
        {contextMenu ? contextMenuElem : null}
        <img
          src={src}
          onContextMenu={(e) => contextMenuHandler(e)}
          onClick={() => viewMovie(movie)}
        ></img>
        <div>
          <div className="movie-preview-title">{title}</div>
          <div className="movie-preview-year">{year.split('-')[0]}</div>
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

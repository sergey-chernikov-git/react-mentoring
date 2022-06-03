import React, { useState } from 'react';
import NotFoundImg from './../assets/img/404/404.jpg';
import { movieType } from './type';
import { MovieOperation } from './MovieOperation';

export const MovieItem = ({ movie, deleteMovie, editMovie }) => {
  const [contextMenu, setContextMenu] = useState(false);
  const [editMenu, setEditMenu] = useState(false);
  const { id, src = NotFoundImg, title, year, genres } = movie;

  const contextMenuHandler = (e) => {
    e.preventDefault();
    setContextMenu(!contextMenu);
  };

  const editMovieFun = (movie) => {
    setEditMenu(!editMenu);
  };

  return (
    <>
      {editMenu ? <MovieOperation movie={movie} genres={[]} /> : null}
      <div className="movie-preview">
        {contextMenu ? (
          <div className="movie-preview-context-menu">
            <div className="movie-preview-context-menu-close">X</div>
            <div
              className="movie-preview-context-menu-item"
              onClick={() => editMovieFun(movie)}
            >
              Edit
            </div>
            <div
              className="movie-preview-context-menu-item"
              onClick={() => deleteMovie(movie)}
            >
              Delete
            </div>
          </div>
        ) : null}
        <img src={src} onContextMenu={(e) => contextMenuHandler(e)}></img>
        <div>
          <div className="movie-preview-title">{title}</div>
          <div className="movie-preview-year">{year.split('-')[0]}</div>
          <div className="movie-preview-gender">{genres.join(' & ')}</div>
        </div>
      </div>
    </>
  );
};

MovieItem.propTypes = {
  movie: movieType
};

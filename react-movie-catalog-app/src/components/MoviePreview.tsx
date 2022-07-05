import React, { useState } from 'react';
import { useMovie } from '../hooks/useMovie';

import { MovieOperation } from './MovieOperation';

import { useDispatch } from 'react-redux';
import { operateMovie } from '../store/thunks';
import { TMovie } from '../ts-types/movie';
import { TMoviePreviewProps } from '../ts-types/props';

export const MoviePreview = ({ movie, viewMovie }: TMoviePreviewProps) => {
  const dispatch: Function = useDispatch();
  const [contextMenu, setContextMenu] = useState(false);
  const { genres, poster_path, release_date, title } = useMovie(movie);
  const [editModalWindow, setEditModalWindow] = useState(false);

  const contextMenuHandler = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
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
      operationHandler={(movie: TMovie) =>
        dispatch(operateMovie({ movie: movie, operation: 'update' }))
      }
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
      <div className="movie-preview-context-menu-item" onClick={() => editModalWindowsHandler()}>
        Edit
      </div>
      <div
        className="movie-preview-context-menu-item"
        onClick={() => dispatch(operateMovie({ movie: movie, operation: 'delete' }))}
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

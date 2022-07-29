import React, { useState, useContext } from 'react';
import { MoviePreview } from './MoviePreview';
import { MovieOperation } from './MovieOperation';
import { MoviesContext } from '../context/MoviesContext';
import { TMovie, TMovies } from '../ts-types/movie';
import { TMoviesPreviewProps } from '../ts-types/props';

export const MoviesPreview = ({ addMovie, viewMovie }: TMoviesPreviewProps) => {
  const [addModalWindow, setAddModalWindow] = useState(false);

  const movies: TMovies = useContext(MoviesContext);

  const addMovieHandler = (movie: TMovie) => {
    addMovie(movie);
    setAddModalWindow(false);
  };

  const movieAddOperationElem = (
    <MovieOperation
      operationHandler={addMovieHandler}
      closeWindow={() => setAddModalWindow(false)}
    />
  );
  return (
    <>
      {addModalWindow ? movieAddOperationElem : null}

      <button className="search-movie-add-button" onClick={() => setAddModalWindow(true)}>
        + Add Movie
      </button>
      <div className="movie-count-panel">
        <b className="movie-count">{movies.length}</b> movies found
      </div>
      <div className="movie-preview-panel">
        {movies.map((movie) => {
          return <MoviePreview key={movie.id} movie={movie} viewMovie={viewMovie} />;
        })}
      </div>
    </>
  );
};

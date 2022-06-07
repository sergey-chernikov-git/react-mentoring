import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MovieItem } from './MovieItem';
import { movieType } from './type';
import { MovieOperation } from './MovieOperation';

export const MoviesPanel = ({ movies, deleteMovie, editMovie, addMovie }) => {

  const [addModalWindow, setAddModalWindow] = useState(false);

  const addMovieHandler = (movie) => {   
    addMovie(movie);    
    setAddModalWindow(false);
  };
  
  const movieAddOperationElem = (
    <MovieOperation operationHandler={addMovieHandler} closeWindow={() => setAddModalWindow(false)} />
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
          return (
            <MovieItem
              id={movie.id}
              key={movie.id}
              movie={movie}
              deleteMovie={deleteMovie}
              editMovie={editMovie}
            />
          );
        })}
      </div>
    </>
  );
};

MoviesPanel.propTypes = {
  movies: PropTypes.arrayOf(movieType),
  deleteMovie: PropTypes.func,
  editMovie: PropTypes.func
};

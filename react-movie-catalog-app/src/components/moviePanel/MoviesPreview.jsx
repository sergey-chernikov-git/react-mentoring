import React from 'react';
import PropTypes from 'prop-types';
import { MovieItem } from './MovieItem';
import { movieType } from './type/movieType';

export const MoviesPanel = ({ movies }) => {
  return (
    <>
      <div>
        <b>{movies.length}</b> movies found
      </div>
      <div className="moviePreviewPanel">
        {movies.map((movie) => {
          return <MovieItem key={movie.id} movie={movie} />;
        })}
      </div>
    </>
  );
};

MoviesPanel.propTypes = {
  movies: PropTypes.arrayOf(movieType)
};

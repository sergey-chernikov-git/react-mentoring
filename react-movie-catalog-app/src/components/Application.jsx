import React from 'react';
import { MoviePreview } from './MoviePreview';
import { getTestMovieList } from '../util/dictionary/movies';
export const Application = () => {
    const movies  = getTestMovieList()
return (
    <>
      <div className="moviesSearchResultPanel">
        {movies.map((movie) => {
          return <MoviePreview key= {movie.id} movie={movie} />;
        })}
      </div>
    </>
  );
};

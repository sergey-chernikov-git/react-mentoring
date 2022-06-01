import { Sort } from './../util/dictionary/dictionary.js';
import { getInitMovieList } from './../util/dictionary/dictionary';

export const sortMovies = (movies, e) => {
  if (e.target.value === Sort.ReleaseDate) {
    movies.sort((movieA, movieB) => {
      if (movieA.year > movieB.year) {
        return 1;
      } else if (movieA.year < movieB.year) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  if (e.target.value === Sort.Title) {
    movies.sort((movieA, movieB) => {
      if (movieA.title > movieB.title) {
        return 1;
      } else if (movieA.title < movieB.title) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  return movies;
};

export const filterMovies = (genre, movies) => {
  let filtered = [];

  if (genre === 'All') {
    return getInitMovieList();
  }

  return movies.filter((movie) => {
    if (movie.genres.includes(genre)) {
      return movie;
    }
  });
};

import { Sort } from './../util/dictionary/dictionary.js';
import { getInitMovieList } from './../util/dictionary/dictionary';

export const addMovie = (movie, movies, setMovies) => {
  if (movie) {
    const list = movies;
    list.push(movie);
    setMovies([...list]);
  }
};

export const editMovie = (movie, movies, setMovies) => {
  try {
    const list = movies;
    let index = 0;
    list.forEach((el, idx) => (el.id === movie.id ? (index = idx) : ''));
    list.splice(index, 1);
    list.push(movie);
    setMovies([...list]);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const deleteMovie = (movie, movies, setMovies) => {
  const list = movies;
  let index = 0;
  list.forEach((el, idx) => (el.id === movie.id ? (index = idx) : ''));
  // if (confirm('Are you sure to delete this movie?\n') == true) {
  //   list.splice(index, 1);
  // } else {
  //   return;
  // }
  list.splice(index, 1);
  console.log(list);
  setMovies([...list]);
  return true;
};

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

export const filterMovies = (genre, movies = null) => {
  if (genre === 'All') {
    return getInitMovieList();
  }

  if (movies) {
    return movies.filter((movie) => {
      if (movie.genres.includes(genre)) {
        return movie;
      }
    });
  }

  return getInitMovieList().filter((movie) => {
    if (movie.genres.includes(genre)) {
      return movie;
    }
  });
};

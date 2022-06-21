import { Sort } from './../util/dictionary/dictionary.js';
import { getInitMovieList } from './../util/dictionary/dictionary';

export const editMovie = (movie, movies) => {
  try {
    let index = 0;
    movies.forEach((el, idx) => (el.id === movie.id ? (index = idx) : ''));
    movies.splice(index, 1);
    movies.push(movie);
    return movies;
  } catch (error) {
    console.log('Error: ', error);
    return movies;
  }
};

export const deleteMovie = (movie) => {
  
  async function deleteMovie(movie) {
    console.log("movie.id", movie.id)
    const response = await fetch(`http://localhost:4000/movies/${movie.id}`, {
      method: 'DELETE'
    });  
    const movies = await response.json(); 
    console.log("response", response)
  }

  deleteMovie()
};

export const sortMovies = (sortBy, movies) => {
  if (sortBy === Sort.ReleaseDate) {
    movies.sort((movieA, movieB) => {
      if (movieA.release_date > movieB.release_date) {
        return 1;
      } else if (movieA.release_date < movieB.release_date) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  if (sortBy === Sort.Title) {
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
  console.log(movies, genre);
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

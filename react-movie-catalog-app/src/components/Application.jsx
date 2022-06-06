import React, { useState, useEffect } from 'react';
import { MoviesPanel } from './MoviesPreview';
import { SearchBar } from './SearchBar';
import { MovieOperation } from './MovieOperation';
import { Notification } from './Notification';
import { MenuPanel } from './MenuPanel';
import { LoginForm } from './LoginForm';
import { getInitMovieList, getGenresList, getSortList } from '../util/dictionary/dictionary';
import { sortMovies, filterMovies } from './../logic/businessLogic';

export const Application = () => {
  const [addMenu, setAddMenu] = useState(false);
  const [movies, setMovies] = useState(getInitMovieList());
  const genres = getGenresList();
  const sortList = getSortList();

  const addMovieHandler = (movie) => {
    console.log(movie);
    if (movie) {
      const list = movies;
      list.push(movie);
      setMovies([...list]);
    }
    console.log(movies);
  };

  const sortMoviesHandler = (e) => {
    setMovies([...sortMovies(movies, e)]);
  };

  const filterMoviesHandler = (e) => {
    const genre = e.target.innerHTML;
    setMovies(filterMovies(genre));
  };

  const deleteMovieHandler = (movie) => {
    const list = movies;
    let index = 0;
    list.forEach((el, idx) => (el.id === movie.id ? (index = idx) : ''));
    if (confirm('Are you sure to delete this movie?\n') == true) {
      list.splice(index, 1);
    } else {
      return;
    }

    console.log(list);
    setMovies([...list]);
  };

  const editMovieHandler = (movie) => {
    try {
      const list = movies;
      let index = 0;
      list.forEach((el, idx) => (el.id === movie.id ? (index = idx) : ''));
      list.splice(index, 1);
      list.push(movie);
      setMovies([...list]);
      return true
    } catch (error) {
      console.log(error)
      return false      
    }    
  };

  const movieAddOperation = () => {
    return (
      <MovieOperation operationHandler={addMovieHandler} closeWindow={() => setAddMenu(false)} />
    );
  };

  return (
    <>
      <button className="search-movie-add-button" onClick={() => setAddMenu(true)}>
        + Add Movie
      </button>
      <SearchBar genres={genres} />
      <LoginForm />
      <Notification
        type="success"
        message="Congratulations!"
        description="The movie has been added to database succesfully"
      />
      <MenuPanel
        genres={genres}
        sortList={sortList}
        movies={movies}
        sortMovies={sortMoviesHandler}
        filterMovies={filterMoviesHandler}
      />
      <MoviesPanel movies={movies} deleteMovie={deleteMovieHandler} editMovie={editMovieHandler} />

      {addMenu ? movieAddOperation() : null}
    </>
  );
};

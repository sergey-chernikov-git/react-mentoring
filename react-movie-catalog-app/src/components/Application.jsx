import React, { useState, useEffect } from 'react';
import { MoviesPanel } from './MoviesPreview';
import { SearchBar } from './SearchBar';
import { MovieAdd } from './MovieAdd';
import { Notification } from './Notification';
import { MenuPanel } from './MenuPanel';
import { LoginForm } from './LoginForm';
import { getInitMovieList, getGenresList, getSortList } from '../util/dictionary/dictionary';
import { sortMovies, filterMovies } from './../logic/businessLogic';

export const Application = () => {
  const [movies, setMovies] = useState([]);
  const genres = getGenresList();
  const sortList = getSortList();

  const sortMoviesHandler = (e) => {
    setMovies([...sortMovies(movies, e)]);
  };

  const filterMoviesHandler = (e) => {
    const genre = e.target.innerHTML;
    setMovies(filterMovies(genre, movies));
  };

  useEffect(() => {
    setMovies(getInitMovieList());
  }, []);

  return (
    <>
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
      <MoviesPanel movies={movies} />;
      <MovieAdd genres={genres} />
    </>
  );
};

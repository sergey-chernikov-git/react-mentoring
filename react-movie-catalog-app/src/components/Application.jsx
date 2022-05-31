import React from 'react';
import { MoviesPanel } from './MoviesPreview';
import { SearchBar } from './SearchBar';
import { MovieAdd } from './MovieAdd';
import { Notification } from './Notification';
import { MenuPanel } from './MenuPanel';
import { LoginForm } from './LoginForm';
import { getTestMovieList, getGenresList, getSortList } from '../util/dictionary/dictionary';

export const Application = () => {
  const movies = getTestMovieList();
  const genres = getGenresList();
  const sortList = getSortList();
  return (
    <>
      <SearchBar genres={genres} />
      <LoginForm />
      <Notification
        type="success"
        message="Congratulations!"
        description="The movie has been added to database succesfully"
      />
      <MenuPanel genres={genres} sortList={sortList} />
      <MoviesPanel movies={movies} />;
      <MovieAdd genres={genres} />
    </>
  );
};

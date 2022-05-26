import React from 'react';
import { MoviesPanel } from './moviePanel/MoviesPreview';
import { GenreMenu } from './genreMenu/GenreMenu';
import { SearchBar } from './SearchBar';
import { MovieAdd } from './moviePanel/MovieAdd';
import { Notification } from './Notification';
import { LoginForm } from './LoginForm';
import { getTestMovieList } from '../util/dictionary/dictionary';
import { getGenresList } from '../util/dictionary/dictionary';

export const Application = () => {
  const movies = getTestMovieList();
  const genres = getGenresList();
  return (
    <>
      <SearchBar />
      <LoginForm />
      {/* <Notification
        type="success"
        message="Congratulations!"
        description="The movie has been added to database succesfully"
      /> */}
      <br></br>
      <GenreMenu genres={genres} />
      <MoviesPanel movies={movies} />;
      <MovieAdd genres={genres} />
    </>
  );
};

import React, { useState, useEffect } from 'react';
import { MoviesPanel } from './MoviesPreview';
import { SearchBar } from './SearchBar';
import { MenuPanel } from './MenuPanel';
import { LoginForm } from './LoginForm';
import { Notification } from './Notification';
import { getInitMovieList, getGenresList, getSortList } from '../util/dictionary/dictionary';
import {
  sortMovies,
  filterMovies,
  deleteMovie,
  editMovie,
  addMovie
} from './../logic/businessLogic';

export const Application = () => {
  const [movies, setMovies] = useState([]);

  const [deleteNotification, setDeleteNotification] = useState(false);
  const [addNotification, setAddNotification] = useState(false);
  const [editNotification, setEditNotification] = useState(false);

  const genres = getGenresList();
  const sortList = getSortList();

  useEffect(() => {
    setMovies(getInitMovieList());
  }, []);

  const addMovieHandler = (movie) => {
    addMovie(movie, movies, setMovies);
    setAddNotification(true);
  };

  const sortMoviesHandler = (e) => {
    setMovies([...sortMovies(movies, e)]);
  };

  const filterMoviesHandler = (e) => {
    const genre = e.target.innerHTML;
    setMovies(filterMovies(genre));
  };

  const deleteMovieHandler = (movie) => {
    deleteMovie(movie, movies, setMovies);
    setDeleteNotification(true);
  };

  const editMovieHandler = (movie) => {
    editMovie(movie, movies, setMovies);
    setEditNotification(true);
  };

  const movieDeleteNotificationElem = (
    <Notification
      type="success"
      message="Congratulations!"
      description="the movie has been succesfully deleted"
      onClose={() => setDeleteNotification(false)}
    />
  );
  const movieAddNotificationElem = (
    <Notification
      type="success"
      message="Congratulations!"
      description="the movie has been succesfully added"
      onClose={() => setAddNotification(false)}
    />
  );
  const movieEditNotificationElem = (
    <Notification
      type="success"
      message="Congratulations!"
      description="the movie has been succesfully updated"
      onClose={() => setEditNotification(false)}
    />
  );

  return (
    <>
      <SearchBar genres={genres} />
      {/* <LoginForm /> */}
      <MenuPanel
        genres={genres}
        sortList={sortList}
        movies={movies}
        sortMovies={sortMoviesHandler}
        filterMovies={filterMoviesHandler}
      />
      <MoviesPanel
        movies={movies}
        deleteMovie={deleteMovieHandler}
        editMovie={editMovieHandler}
        addMovie={addMovieHandler}
      />
      {deleteNotification ? movieDeleteNotificationElem : null}
      {addNotification ? movieAddNotificationElem : null}
      {editNotification ? movieEditNotificationElem : null}
      
    </>
  );
};

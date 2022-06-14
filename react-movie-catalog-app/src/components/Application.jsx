import React, { useState, useEffect, useCallback } from 'react';
import { MoviesPreview } from './MoviesPreview';
import { SearchBar } from './SearchBar';
import { MoviePreviewDetails } from './MoviePreviewDetails';
import { MenuPanel } from './MenuPanel';
import { Notification } from './Notification';
import { getInitMovieList, getGenresList, getSortList } from '../util/dictionary/dictionary';
import { MoviesContext } from '../context/MoviesContext';
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
  const [search, setSearch] = useState(true);
  const [preview, setPreview] = useState(false);
  const [movie, setMovie] = useState({});

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

  const deleteMovieHandler = useCallback((movie) => {
    deleteMovie(movie, movies, setMovies);
    setDeleteNotification(true);
  }, []);

  const editMovieHandler = useCallback((movie) => {
    editMovie(movie, movies, setMovies);
    setEditNotification(true);
  }, []);

  const previewMovieHandler = useCallback((movie) => {
    setMovie(movie);
    setPreview(true);
    setSearch(false);
    window.scrollTo(0, 0);
  }, []);

  const searchMovieHandler = () => {
    setPreview(false);
    setSearch(true);
    window.scrollTo(0, 0);
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
    <MoviesContext.Provider value={movies}>
      {/* <LoginForm /> */}
      {search ? <SearchBar /> : null}
      {preview ? <MoviePreviewDetails movie={movie} searchMovie={searchMovieHandler} /> : null}

      <div>
        <MenuPanel
          genres={genres}
          sortList={sortList}
          sortMovies={sortMoviesHandler}
          filterMovies={filterMoviesHandler}
        />
        <MoviesPreview
          deleteMovie={deleteMovieHandler}
          editMovie={editMovieHandler}
          addMovie={addMovieHandler}
          viewMovie={previewMovieHandler}
        />
        {deleteNotification ? movieDeleteNotificationElem : null}
        {addNotification ? movieAddNotificationElem : null}
        {editNotification ? movieEditNotificationElem : null}
      </div>
    </MoviesContext.Provider>
  );
};

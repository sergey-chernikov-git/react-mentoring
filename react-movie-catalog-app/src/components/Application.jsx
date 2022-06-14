import React, { useState, useEffect, useCallback } from 'react';
import { MoviesPanel } from './MoviesPreview';
import { SearchBar } from './SearchBar';
import { ViewMovieDetails } from './ViewMovieDetails';
import { MenuPanel } from './MenuPanel';
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

  const deleteMovieHandler = (movie) => {
    deleteMovie(movie, movies, setMovies);
    setDeleteNotification(true);
  };

  const editMovieHandler = (movie) => {
    editMovie(movie, movies, setMovies);
    setEditNotification(true);
  };

  const previewMovieHandler = (movie) => {
    setMovie(movie);
    setPreview(true);
    setSearch(false);
    window.scrollTo(0, 0);
  }

  const searchMovieHandler = () => {
    setPreview(false);
    setSearch(true);
    window.scrollTo(0, 0);
  }

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
    {/* <LoginForm /> */}
    {search ? <SearchBar genres={genres} /> : null}
    {preview ? <ViewMovieDetails movie={movie} searchMovie={searchMovieHandler}/> : null}
    { movies.length > 0 ? 
      <div> 
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
        viewMovie={previewMovieHandler}
      />
      {deleteNotification ? movieDeleteNotificationElem : null}
      {addNotification ? movieAddNotificationElem : null}
      {editNotification ? movieEditNotificationElem : null}
    </div>
    :
    <div></div>
    }
    </>

  );
};

import React, { useState, useEffect, useCallback } from 'react';
import { MoviesPreview } from './MoviesPreview';
import { SearchBar } from './SearchBar';
import { MoviePreviewDetails } from './MoviePreviewDetails';
import { MenuPanel } from './MenuPanel';
import { Notification } from './Notification';
import { MoviesContext } from '../context/MoviesContext';
import { useSelector, useDispatch } from 'react-redux';
import { getMovies, addMovie } from '../store/thunks';

export const Application = () => {
  const movies = useSelector((state) => state.movies);
  const genres = useSelector((state) => state.genres);
  const sortList = useSelector((state) => state.sortList);
  const dispatch = useDispatch();

  const [deleteNotification, setDeleteNotification] = useState(false);
  const [addNotification, setAddNotification] = useState(false);
  const [editNotification, setEditNotification] = useState(false);
  const [search, setSearch] = useState(true);
  const [preview, setPreview] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    dispatch(getMovies())
  }, []);

  const previewMovieHandler = useCallback((movie) => {
    setMovie(movie);
    setPreview(true);
    setSearch(false);
    window.scrollTo(0, 0);
  }, [dispatch]);

  const addMovieHandler = (movie) => {
    dispatch(addMovie(movie));
    setAddNotification(true)
  };

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
        <MenuPanel genres={genres} sortList={sortList} />
        <MoviesPreview addMovie={addMovieHandler} viewMovie={previewMovieHandler} />
        {deleteNotification ? movieDeleteNotificationElem : null}
        {addNotification ? movieAddNotificationElem : null}
        {editNotification ? movieEditNotificationElem : null}
      </div>
    </MoviesContext.Provider>
  );
};

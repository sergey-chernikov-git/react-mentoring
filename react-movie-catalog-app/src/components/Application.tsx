import React, { useState, useEffect, useCallback } from 'react';
import { MoviesPreview } from './MoviesPreview';
import { SearchBar } from './SearchBar';
import { MoviePreviewDetails } from './MoviePreviewDetails';
import { MenuPanel } from './MenuPanel';
import { Notification } from './Notification';
import { MoviesContext } from '../context/MoviesContext';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies, operateMovie } from '../store/thunks';
import { TMovie, TMoviesState, TMovies, TDictionary } from '../ts-types/movie';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { Spinner } from './Spinner';

export const Application = () => {
  const { searchQuery } = useParams();
  const [queryParams, setQueryParams] = useSearchParams();

  const navigate = useNavigate();

  const sortBy = queryParams.get('sortBy');
  const genre = queryParams.get('genre');
  const movieId = queryParams.get('movie');

  const { movies, movie, genres, sortList, error, errorDesc } = useSelector(
    (state: TMoviesState) => state
  );

  const dispatch: Function = useDispatch();

  const [deleteNotification, setDeleteNotification] = useState(false);
  const [addNotification, setAddNotification] = useState(false);
  const [editNotification, setEditNotification] = useState(false);
  const [errorNotification, setErrorNotification] = useState(false);
  const [search, setSearch] = useState(true);
  const [preview, setPreview] = useState(false);
  const [isLoaded, setLoaded] = useState(false);

  if (movieId && !isLoaded) {
    dispatch(fetchMovies({ movieId: movieId }));
    if (movie) {
      setLoaded(true);
      setPreview(true);
      setSearch(false);
    }
  }

  useEffect(() => {
    dispatch(
      fetchMovies({
        title: searchQuery,
        genre: genre,
        sortRule: sortBy
      })
    );
    setLoaded(true);
  }, [searchQuery, genre, sortBy]);

  useEffect(() => {
    setErrorNotification(error);
  }, [error]);

  const previewMovieHandler = useCallback(
    (movieId: string) => {
      dispatch(fetchMovies({ movieId: movieId }));
      setPreview(true);
      setSearch(false);
      window.scrollTo(0, 0);
    },
    [dispatch]
  );

  const addMovieHandler = (movie: TMovie) => {
    dispatch(operateMovie({ movie: movie, operation: 'add' }));
    setAddNotification(true);
  };

  const searchMovieHandler = () => {
    navigate(`/search`);
    setPreview(false);
    setSearch(true);
    window.scrollTo(0, 0);
  };

  const movieErrorNotificationElem = (
    <Notification
      type="error"
      message="Exception for the operation!"
      description={errorDesc}
      onClose={() => setErrorNotification(false)}
    />
  );

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
      {search ? <SearchBar searchQuery={searchQuery} /> : null}
      {preview && movie ? (
        <MoviePreviewDetails movie={movie as TMovie} searchMovie={searchMovieHandler} />
      ) : null}
      <div>
        <MenuPanel genres={genres} sortList={sortList} />
        {isLoaded ? (
          <MoviesPreview addMovie={addMovieHandler} viewMovie={previewMovieHandler} />
        ) : (
          <Spinner />
        )}
        {deleteNotification ? movieDeleteNotificationElem : null}
        {errorNotification ? movieErrorNotificationElem : null}
        {addNotification ? movieAddNotificationElem : null}
        {editNotification ? movieEditNotificationElem : null}
      </div>
    </MoviesContext.Provider>
  );
};

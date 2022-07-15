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

  

export const Application = () => {  
  const {searchQuery} = useParams();
  const [queryParams, setQueryParams] = useSearchParams();

  const navigate = useNavigate();

  const  sortBy = queryParams.get('sortBy');
  const  genre = queryParams.get('genre');
  const  movieId = queryParams.get('movie');

  const movies: TMovies = useSelector((state: TMoviesState) => state.movies);
  const movie: TMovie = useSelector((state: TMoviesState) => state.movie);
  const genres: TDictionary = useSelector((state: TMoviesState) => state.genres);
  const sortList: TDictionary = useSelector((state: TMoviesState) => state.sortList);
  const error: boolean = useSelector((state: TMoviesState) => state.error);
  const errorDesc: string = useSelector((state: TMoviesState) => state.errorDesc);
  const dispatch: Function = useDispatch();

  const [deleteNotification, setDeleteNotification] = useState(false);
  const [addNotification, setAddNotification] = useState(false);
  const [editNotification, setEditNotification] = useState(false);
  const [errorNotification, setErrorNotification] = useState(false);
  const [search, setSearch] = useState(true);
  const [preview, setPreview] = useState(false);
  const [isLoaded, setLoaded] = useState(false);

  if (searchQuery) {
    dispatch(
      fetchMovies({
        title: searchQuery
      })
    )
  }

  if(sortBy) {    
    dispatch(fetchMovies({ sortRule: sortBy }));
  }

  if(movieId && !isLoaded) {    
    dispatch(fetchMovies({ movieId: movieId }));
    
    if (movie) {
      setLoaded(true);
      setPreview(true);
      setSearch(false);
    }   
    
  }

  if(genre) {    
    dispatch(fetchMovies({ genre: genre }));
  }

  useEffect(() => {
    dispatch(fetchMovies({}));
  }, []);

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
    navigate(`/search`)
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
      {preview && movie? (
        <MoviePreviewDetails movie={movie as TMovie} searchMovie={searchMovieHandler} />
      ) : null}
      <div>
        <MenuPanel genres={genres} sortList={sortList} />
        <MoviesPreview addMovie={addMovieHandler} viewMovie={previewMovieHandler} />
        {deleteNotification ? movieDeleteNotificationElem : null}
        {errorNotification ? movieErrorNotificationElem : null}
        {addNotification ? movieAddNotificationElem : null}
        {editNotification ? movieEditNotificationElem : null}
      </div>
    </MoviesContext.Provider>
  );
};

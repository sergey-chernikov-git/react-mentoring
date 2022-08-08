import React, { ReactNode, useEffect } from 'react';
import searchIcon from './../assets/img/search/searchIcon.png';
import { useMovie } from '../hooks/useMovie';
import { TMoviePreviewDetailsProps } from '../ts-types/props';
import { TMovie } from '../ts-types/movie';
import { useNavigate, useLocation } from 'react-router-dom';

export const MoviePreviewDetails = ({ movie, searchMovie }: TMoviePreviewDetailsProps) => {
  const { genres, overview, poster_path, release_date, runtime, title, vote_average }: TMovie =
    useMovie(movie);
  const navigate = useNavigate();
  const location = useLocation();
  const runtimeToHours = (runtime: number): string => {
    let hours: number = Number((runtime / 60 + '').split('.')[0]);
    let minutes = runtime - hours * 60;
    return `${hours}h ${minutes}min`;
  };

  useEffect(() => {
    navigate(location.pathname + location.search);
  }, []);

  const extractYear = (val: string): string => {
    return val.split('-')[0];
  };
  return (
    <div className="view-movie-details">
      <div className="view-movie-details-search" onClick={() => searchMovie()}>
        <img src={searchIcon}></img>
      </div>
      <img src={poster_path}></img>
      <div>
        <div>
          <div className="view-movie-details-header">
            <div className="view-movie-details-title">{title}</div>
            <div className="view-movie-details-rating">{vote_average}</div>
          </div>
          <div className="movie-preview-gender">{genres.join(' & ')}</div>
        </div>
        <div className="view-movie-details-header view-movie-details-movie-info">
          <div>{extractYear(release_date)}</div>
          <div>{runtimeToHours(runtime as number)}</div>
        </div>
        <div className="view-movie-details-overview">{overview}</div>
      </div>
    </div>
  );
};

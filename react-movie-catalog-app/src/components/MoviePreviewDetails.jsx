import React from 'react';
import searchIcon from './../assets/img/search/searchIcon.png';
import {useMovie} from './../hooks/useMovie'

export const MoviePreviewDetails = ({ movie, searchMovie }) => {

  const [id, src, title, year, runtime, overview, rating, genres] = useMovie(movie);

  const runtimeToHours = (runtime) => {
    let hours = (runtime / 60 + '').split('.')[0];
    let minutes = runtime - hours * 60;
    return `${hours}h ${minutes}min`;
  };

  const extractYear = (val) => {
    return val.split('-')[0];
  };
  return (
    <div className="view-movie-details">
      <div className="view-movie-details-search" onClick={() => searchMovie()}>
        <img src={searchIcon}></img>
      </div>
      <img src={src} onContextMenu={(e) => contextMenuHandler(e)}></img>
      <div>
        <div>
          <div className="view-movie-details-header">
            <div className="view-movie-details-title">{title}</div>
            <div className="view-movie-details-rating">{rating}</div>
          </div>
          <div className="movie-preview-gender">{genres.join(' & ')}</div>
        </div>
        <div className="view-movie-details-header view-movie-details-movie-info">
          <div>{extractYear(year)}</div>
          <div>{runtimeToHours(runtime)}</div>
        </div>
        <div className="view-movie-details-overview">{overview}</div>
      </div>
    </div>
  );
};

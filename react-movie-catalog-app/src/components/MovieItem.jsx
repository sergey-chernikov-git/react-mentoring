import React from 'react';
import NotFoundImg from './../assets/img/404/404.jpg';
import { movieType } from './type';

export const MovieItem = ({ movie }) => {
  const { id, src = NotFoundImg, title, year, genders } = movie;
  return (
    <>
      <div className="movie-preview">
        <img src={src}></img>
        <div>
          <div className="movie-preview-title">{title}</div>
          <div className="movie-preview-year">{year}</div>
          <div className="movie-preview-gender">{genders.join(' & ')}</div>
        </div>
      </div>
    </>
  );
};

MovieItem.propTypes = {
  movie: movieType
};

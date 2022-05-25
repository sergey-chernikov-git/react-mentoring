import React from 'react';
import NotFoundImg from './../../assets/img/404/404.jpg';
import { movieType } from './type/movieType';

export const MovieItem = ({ movie }) => {
  const { id, src = NotFoundImg, title, year, genders } = movie;
  return (
    <>
      <div className="moviePreview">
        <img src={src}></img>
        <div>
          <div className="moviePreviewTitle">{title}</div>
          <div className="moviePreviewYear">{year}</div>
          <div className="moviePreviewGender">{genders.join(' & ')}</div>
        </div>
      </div>
    </>
  );
};

MovieItem.propTypes = {
  movie: movieType
};

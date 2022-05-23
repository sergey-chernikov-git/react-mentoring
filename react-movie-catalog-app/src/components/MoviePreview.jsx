import React from 'react';
import PropTypes from 'prop-types';

export const MoviePreview = ({ movie }) => {
  const { src, title, year, genders } = movie;
  return (
    <div className="moviePreview">
      <img src={src}></img>
      <div>
        <div className="moviePreviewTitle">{title}</div>
        <div className="moviePreviewYear">{year}</div>
        <div className="moviePreviewGender">{genders.join(' & ')}</div>
      </div>
    </div>
  );
};

MoviePreview.propTypes = {
  movies: PropTypes.exact({
    src: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string,
    genders: PropTypes.arrayOf(PropTypes.string)
  }
  )
};

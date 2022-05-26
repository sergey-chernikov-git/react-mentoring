import React from 'react';
import PropTypes from 'prop-types';
import { GenreItem } from './GenreItem';
import { genreType } from './type/genreType';

export const GenreMenu = ({ genres }) => {
  return (
    <div className="gender-menu-panel">
      {genres.map((genre) => (
        <GenreItem key={genre.id} genre={genre} />
      ))}
    </div>
  );
};

GenreMenu.propTypes = {
  genders: PropTypes.arrayOf(genreType)
};

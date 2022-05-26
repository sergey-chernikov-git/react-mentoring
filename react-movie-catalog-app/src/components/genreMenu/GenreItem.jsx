import React from 'react';
import { genreType } from './type/genreType';

export const GenreItem = ({ genre }) => {
  const { id, value } = genre;
  return <div>{value}</div>;
};

GenreItem.propTypes = {
  genre: genreType
};

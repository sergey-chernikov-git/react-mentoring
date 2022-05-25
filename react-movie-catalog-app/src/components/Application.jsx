import React from 'react';
import { MoviesPanel } from './moviePanel/MoviesPreview';
import { GenderMenu } from './genderMenu/GenderMenu';
import { SearchBar } from './SearchBar';
import { getTestMovieList } from '../util/dictionary/dictionary';
import { getGendersList } from '../util/dictionary/dictionary';

export const Application = () => {
  const movies = getTestMovieList();
  const genders = getGendersList();
  return (
    <>
      <SearchBar />
      <br></br>
      <GenderMenu genders={genders} />
      <MoviesPanel movies={movies} />;
    </>
  );
};

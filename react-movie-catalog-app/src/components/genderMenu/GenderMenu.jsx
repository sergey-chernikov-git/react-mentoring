import React from 'react';
import PropTypes from 'prop-types';
import { GenderItem } from './GenderItem';
import { genderType } from './type/genderType';

export const GenderMenu = ({ genders }) => {
  
  return (
    <div className="genderMenuPanel">
      {genders.map((gender) => (         
        <GenderItem key={gender.id} gender={gender} />
      ))}
    </div>
  );
};

GenderMenu.propTypes = {
  movies: PropTypes.arrayOf(genderType)
};

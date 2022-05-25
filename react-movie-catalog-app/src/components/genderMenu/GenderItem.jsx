import React from 'react';
import { genderType } from './type/genderType';

export const GenderItem = ({ gender }) => {
  const {id, value} = gender
  return (<div>{value}</div>);
};

GenderItem.propTypes = {
  gender: genderType
};

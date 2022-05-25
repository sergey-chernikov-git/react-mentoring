import PropTypes, { shape } from 'prop-types';

export const genderType = shape({
  id: PropTypes.string,
  gender: PropTypes.string
});

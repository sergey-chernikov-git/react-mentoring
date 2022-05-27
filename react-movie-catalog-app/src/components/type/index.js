import PropTypes, { shape } from 'prop-types';

export const keyValueType = shape({
  id: PropTypes.string,
  value: PropTypes.string
});

export const movieType = shape({
  id: PropTypes.number || PropTypes.string,
  src: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string,
  genders: PropTypes.arrayOf(PropTypes.string)
});

import { FETCH_MOVIES } from './../../util/consts/consts';

const apiUrl = 'https://api.github.com/users/KrunalLathiya';

export const fetchData = (data) => {
  return {
    type: FETCH_MOVIES,
    data
  }
};

export const fetchGithubData = () => {
  return (dispatch) => {
    return fetch(apiUrl)
      .then(response => {
        dispatch(fetchData(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};
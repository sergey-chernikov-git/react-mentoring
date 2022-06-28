import { GET_MOVIES, FETCH_ERROR, DEL_MOVIE, EDIT_MOVIE, ADD_MOVIE} from '../util/consts/consts';

import { Sort } from '../util/dictionary/dictionary';

const limit = 10;
const baseUrl = 'http://localhost:4000';

export const fetchMovies = ({ page, genre, sortRule, title }) => {

  let queryParams = [`limit=${limit}`];
  let fetchParams = {}  

  if (page) {
    queryParams.push(`offset=${page * limit}`);
  }

  if (genre && genre !== 'All'){ 
    queryParams.push(`filter=${genre}`);  
    fetchParams = {
      method : 'GET', 
    }
  }

  if (title){ 
    queryParams.push(`searchBy=title&search=${title}`);
    fetchParams = {
      method : 'GET', 
    }
  }

  if (sortRule) {
    let sortBy = sortRule === Sort.Title ? 'title' : 'release_date';
    let sortOrder = Sort.Title ? 'asc' : 'desc';
    queryParams.push(`sortBy=${sortBy}&sortOrder=${sortOrder}`);
    fetchParams = {
      method : 'GET', 
    }
  }

  return (dispatch) => {
    fetch(`${baseUrl}/movies?${queryParams.join('&')}`, fetchParams)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: GET_MOVIES,
          movies: json.data,
          total : json.totalAmount
        });
      })
      .catch((error) => _errorDispatch(dispatch, error));
  };
};


export const operateMovie = ({ movie, operation }) => { 


  console.log(movie, operation)

  if (!movie) throw "Empty movie"
  let fetchParams = {}
  let url = `${baseUrl}/movies`
  let type = ""

  if (operation === 'delete'){ 
    url = `${url}/${movie.id}`
    fetchParams = {
      method: 'DELETE'
    }
    type = DEL_MOVIE
  }

  if (operation === 'update'){ 
    fetchParams = {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movie)
    }
    type = EDIT_MOVIE
  }

  if (operation === 'add'){ 
    fetchParams = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movie)
    }
    type = ADD_MOVIE
  }

  return (dispatch) => {
    fetch(url, fetchParams)
      .then((response) => {
        console.log(response)
        dispatch({
          type: type,
          movie: movie
        });
      })
      .catch((error) => _errorDispatch(dispatch, error));
  }; 

}


function _errorDispatch(dispatchCallBack, error) {
  console.error('Error: ', error);
  dispatchCallBack({
    type: FETCH_ERROR,
    errorDesc: error.message
  });
}

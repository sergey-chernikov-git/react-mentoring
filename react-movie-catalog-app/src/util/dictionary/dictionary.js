const Genres = {
  All: 'All',
  Action: 'Action',
  Drama: 'Drama',
  Adventure: 'Adventure',
  Comedy: 'Comedy',
  Romance: 'Romance'
};

export const Sort = {
  ReleaseDate: 'Release Date',
  Title: 'Title'
};

const Notifications = {
  Success: 'Success',
  Exception: 'Exception'
};

export const getID = () => {
  return Math.floor(Math.random() * 100000);
};

export function getInitMovieList() {
  let movieList = [];

  async function fetchMovies() {
    const response = await fetch('http://localhost:4000/movies');
    const movies = await response.json(); 
    return movies.data
  }
  movieList = fetchMovies().then(movies => {return movies})
  console.log(movieList)
  return movieList;
}

export function getGenresList() {
  console.log('getGenresList');
  const genres = [];
  for (const [key, value] of Object.entries(Genres)) {
    genres.push({
      id: key,
      value: value
    });
  }
  return genres;
}

export function getSortList() {
  const sortList = [];
  for (const [key, value] of Object.entries(Sort)) {
    sortList.push({
      id: key,
      value: value
    });
  }
  return sortList;
}

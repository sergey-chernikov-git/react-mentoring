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
  const movies = [];
  movies.push({
    id: getID(),
    src: 'https://i.pinimg.com/originals/99/f8/70/99f8702093bd74454c4636a33f558c4a.png',
    title: 'Joker',
    year: '2014-04-04',
    runtime: 120,
    overview: 'Some movie overview',
    rating: 7.5,
    genres: [Genres.Drama, Genres.Adventure]
  });
  movies.push({
    id: getID(),
    src: 'https://i.pinimg.com/originals/bc/d5/c9/bcd5c9519581acc60bd60a429ab0c88f.jpg',
    title: 'The Hill',
    year: '2010-04-04',
    runtime: 120,
    overview: 'Some movie overview',
    rating: 7.5,
    genres: [Genres.Romance, Genres.Adventure]
  });
  movies.push({
    id: getID(),
    src: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-movie-poster-template-design-0f5fff6262fdefb855e3a9a3f0fdd361_screen.jpg',
    title: 'Freedom',
    year: '2013-04-04',
    runtime: 120,
    overview: 'Some movie overview',
    rating: 7.5,
    genres: [Genres.Comedy, Genres.Drama, Genres.Adventure]
  });
  movies.push({
    id: getID(),
    src: 'https://svirtus.cdnvideo.ru/VcjSMXf5eYBGfnfBIdLav-w4iXM=/0x0:1080x1350/filters:quality(100)/https://hb.bizmrg.com/cybersportru-media/8a/8a181c37dd4481f244d594d9205523ff.jpg?m=4b068984e9801401879986ad468bf32a',
    title: 'Uncharted',
    year: '2021-04-04',
    runtime: 120,
    overview: 'Some movie overview',
    rating: 7.5,
    genres: [Genres.Adventure, Genres.Drama]
  });
  movies.push({
    id: getID(),
    src: 'https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2019/02/jordan-peele-us-poster.jpg',
    title: 'Us',
    year: '2020-04-04',
    runtime: 120,
    overview: 'Some movie overview',
    rating: 7.5,
    genres: [Genres.Romance, Genres.Adventure]
  });
  return movies;
}

export function getGenresList() {
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

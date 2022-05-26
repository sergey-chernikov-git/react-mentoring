const Genres = {
  All: 'All',
  Action: 'Action',
  Drama: 'Drama',
  Adventure: 'Adventure'
};

export function getTestMovieList() {
  const movies = [];
  for (let i = 0; i < 10; i++) {
    movies.push({
      id: i,
      src: 'https://i.pinimg.com/originals/99/f8/70/99f8702093bd74454c4636a33f558c4a.png',
      title: 'Joker',
      year: '2014',
      genders: [Genres.Action, Genres.Drama, Genres.Adventure]
    });
  }
  return movies;
}

export function getGenresList() {
  const genders = [];
  for (const [key, value] of Object.entries(Genres)) {
    genders.push({
      id: key,
      value: value
    });
  }
  return genders;
}

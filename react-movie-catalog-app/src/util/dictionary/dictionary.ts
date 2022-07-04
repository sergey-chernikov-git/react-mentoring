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

export function getGenresList() {
  console.log('getGenresList');
  const genres = [];
  for (const [key, value] of Object.entries(Genres)) {
    genres.push({
      key: key,
      value: value
    });
  }
  return genres;
}

export function getSortList() {
  const sortList = [];
  for (const [key, value] of Object.entries(Sort)) {
    sortList.push({
      key: key,
      value: value
    });
  }
  return sortList;
}

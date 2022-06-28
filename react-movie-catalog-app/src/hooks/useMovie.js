import NotFoundImg from './../assets/img/404/404.jpg';
export const useMovie = (movie) => {
  const { poster_path = NotFoundImg } = movie;
  return {
    ...movie,
    poster_path
  };
};

export const useMovie = (movie) => {
  const { id, src = NotFoundImg, title, year, runtime, overview, rating, genres } = movie;
  return [id, src, title, year, runtime, overview, rating, genres];
};

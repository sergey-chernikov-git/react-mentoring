import NotFoundImg from './../assets/img/404/404.jpg';
export const useMovie = (movie) => {
  const {
    budget,
    genres,
    id,
    overview,
    poster_path = NotFoundImg,
    release_date,
    revenue,
    runtime,
    tagline,
    title,
    vote_average,
    vote_count
  } = movie;
  return [
    budget,
    genres,
    id,
    overview,
    poster_path,
    release_date,
    revenue,
    runtime,
    tagline,
    title,
    vote_average,
    vote_count
  ];
};

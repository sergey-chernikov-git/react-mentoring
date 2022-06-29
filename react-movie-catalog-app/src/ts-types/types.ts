export type TMovie = {
    budget: Number,
    genres: Array<String>, 
    id: Number,
    overview: string,
    poster_path: string,
    release_date: string,
    revenue: string,
    runtime: Number,
    tagline: string,
    title: string,
    vote_average: Number,
    vote_count: Number,

}

export type TMovieList = {
    movies : Array<TMovie>
}

export type TMoviesState = {
  sortList: Array<TKeyValue>,
  genres: Array<TKeyValue>,
  movies: Array<TMovie>,
  error: boolean,
  total: Number,
  errorDesc?: string
}

export type TMoviesAction = {
    type: string,
    movie?: TMovie,
    total?: number,
    movies?: TMovieList,
    errorDesc?: string,
  }

export type TKeyValue = {
    key : string, 
    value : string,
}
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getGenresList } from '../util/dictionary/dictionary';
import { TMovieOperationProps } from '../ts-types/props';
import { TMovie, TMovieBase } from '../ts-types/movie';

export const MovieOperation = ({
  movie = null,
  operationHandler,
  closeWindow
}: TMovieOperationProps) => {
  const [contextMenu, setContextMenu] = useState(false);
  const [id] = useState(movie ? movie.id : null);
  const [title, setTitle] = useState(movie ? movie.title : '');
  const [release_date, setReleaseDate] = useState(movie ? movie.release_date : '');
  const [poster_path, setPosterPath] = useState(movie ? movie.poster_path : '');
  const [vote_average, setVoteAverage] = useState(movie ? movie.vote_average : '');
  const [genreList, setGenreList] = useState(movie ? movie.genres : []);
  const [runtime, setRuntime] = useState(movie ? movie.runtime : '');
  const [overview, setOverview] = useState(movie ? movie.overview : '');

  const [genres] = useState(getGenresList());

  const onResetHandle = () => {
    setTitle(movie ? movie.title : '');
    setReleaseDate(movie ? movie.release_date : '');
    setPosterPath(movie ? movie.poster_path : '');
    setVoteAverage(movie ? movie.vote_average : '');
    setGenreList(movie ? movie.genres : []);
    setRuntime(movie ? movie.runtime : '');
    setOverview(movie ? movie.overview : '');
  };

  const genreSelectorHandler = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    value: string
  ) => {
    let className = (e.target as HTMLElement).className;
    if (className === 'movie-genre-checkmark-selected') {
      className = 'movie-genre-checkmark';
      const list = genreList;
      const inx = list.indexOf((e.target as HTMLHtmlElement).getAttribute('genre'));
      list.splice(inx, 1);
      setGenreList([...list]);
    } else {
      console.log('I am here');
      className === 'movie-genre-checkmark-selected';
      console.log(e.target);
      if (genreList.indexOf(value) === -1) {
        const list = genreList;
        list.push(value);
        setGenreList([...list]);
      }
    }
  };

  const movieObj : TMovieBase | TMovie = id
    ? {
        id: id,
        title: title,
        release_date: release_date,
        poster_path: poster_path,
        vote_average: Number(vote_average),
        genres: genreList,
        runtime: Number(runtime),
        overview: overview
      }
    : {
        title: title,
        release_date: release_date,
        poster_path: poster_path,
        vote_average: Number(vote_average),
        genres: genreList,
        runtime: Number(runtime),
        overview: overview
      };

  const genreSelectorElem = (
    <div>
      <div className="movie-genre-select" id="movie-genre-select">
        <input
          className="close-x-button"
          type="button"
          onClick={() => setContextMenu(false)}
          value="X"
        />
        {genres
          .filter(({ key, value }) => value != 'All')
          .map(({ key, value }) => {
            return (
              <div key={key}>
                <label className="movie-genre-container">
                  {value}
                  {genreList.indexOf(value) != -1 ? (
                    <span
                      className="movie-genre-checkmark-selected"
                      onClick={(e) => genreSelectorHandler(e, value)}
                    />
                  ) : (
                    <span
                      className="movie-genre-checkmark"
                      onClick={(e) => genreSelectorHandler(e, value)}
                    />
                  )}
                </label>
              </div>
            );
          })}
      </div>
    </div>
  );

  return (
    <>
      <div className="movie-add" id="movie-add">
        <div className="movie-preview-context-menu-close" onClick={() => closeWindow()}>
          X
        </div>
        <div>
          <h1>{movie ? 'Edit ' : 'Add '}Movie</h1>
        </div>
        <div>
          <div>
            <label className="uppercase-label">Title</label>
            <input
              className="wide-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </div>
          <div>
            <label className="uppercase-label">Release Date</label>
            <input
              className="tight-input"
              type="date"
              alt="Select Date"
              value={release_date}
              onChange={(e) => setReleaseDate(e.target.value)}
            ></input>
          </div>
        </div>
        <div>
          <div>
            <label className="uppercase-label">Movie URL</label>
            <input
              className="wide-input"
              type="url"
              placeholder="https://"
              value={poster_path}
              onChange={(e) => setPosterPath(e.target.value)}
            ></input>
          </div>
          <div>
            <label className="uppercase-label">Rating</label>
            <input
              className="tight-input"
              type="number"
              placeholder="7.8"
              value={vote_average as string}
              onChange={(e) => setVoteAverage(e.target.value)}
            ></input>
          </div>
        </div>
        <div>
          <div>
            <label className="uppercase-label">Genre</label>
            <input
              className="wide-input"
              value={genreList.join(', ')}
              onClick={() => setContextMenu(!contextMenu)}
            ></input>
          </div>
          <div>
            <label className="uppercase-label">Runtime</label>
            <input
              className="tight-input"
              type="text"
              placeholder="minutes"
              value={runtime as string}
              onChange={(e) => setRuntime(e.target.value)}
            ></input>
          </div>
        </div>
        {contextMenu ? genreSelectorElem : null}
        <div>
          <div>
            <label className="uppercase-label">Overview</label>
            <textarea
              name="Text1"
              cols={40}
              rows={5}
              className="text-box-input"
              value={overview}
              onChange={(e) => setOverview(e.target.value)}
            ></textarea>
          </div>
        </div>

        <div>
          <input
            className="reset-button"
            type="submit"
            value="Reset"
            onClick={() => onResetHandle()}
          ></input>
          <input
            className="submit-button"
            type="submit"
            value="Submit"
            onClick={() => {
              operationHandler(movieObj);
              closeWindow();
            }}
          ></input>
        </div>
      </div>
    </>
  );
};

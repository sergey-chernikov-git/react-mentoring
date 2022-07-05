import React, { useState } from 'react';
import { getGenresList } from '../util/dictionary/dictionary';
import { TMovieOperationProps } from '../ts-types/props';
import { TMovie, TMovieBase } from '../ts-types/movie';
import { Formik, Form, useFormik } from 'formik';
import { MovieSchema } from '../validation/MovieSchema';
import { FormField } from './FormField';

export const MovieOperation = ({
  movie = null,
  operationHandler,
  closeWindow
}: TMovieOperationProps) => {
  const [contextMenu, setContextMenu] = useState(false);
  const [id] = useState(movie ? movie.id : null);
  const [genreList, setGenreList] = useState(movie ? movie.genres : []);

  const [genres] = useState(getGenresList());

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

  let movieObj: TMovieBase | TMovie = id
    ? {
        id: movie.id,
        title: movie.title,
        release_date: movie.release_date,
        poster_path: movie.poster_path,
        vote_average: Number(movie.vote_average),
        genres: genreList,
        runtime: Number(movie.runtime),
        overview: movie.overview
      }
    : {
        title: '',
        release_date: '',
        poster_path: '',
        vote_average: Number(0),
        genres: genreList,
        runtime: Number(0),
        overview: ''
      };

  const formik = useFormik({
    initialValues: {
      ...movieObj,
      genreList: genreList
    },
    onSubmit: (values) => {
      operationHandler({
        ...movieObj,
        title: values.title,
        release_date: values.release_date,
        vote_average: Number(values.vote_average),
        poster_path: values.poster_path,
        genres: values.genreList,
        runtime: Number(values.runtime),
        overview: values.overview
      });
      closeWindow();
    }
  });

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
        <Formik
          initialValues={{
            ...movieObj,
            genreList: genreList
          }}
          validationSchema={MovieSchema}
          onSubmit={values => {
            operationHandler({
              ...movieObj,
              title: values.title,
              release_date: values.release_date,
              vote_average: Number(values.vote_average),
              poster_path: values.poster_path,
              genres: values.genreList,
              runtime: Number(values.runtime),
              overview: values.overview
            });
            closeWindow();
          }}
        >
          {({ resetForm }) => (
            <Form id="movie-form">
              <div className="movie-preview-context-menu-close" onClick={() => closeWindow()}>
                X
              </div>
              <div>
                <h1>{movie ? 'Edit ' : 'Add '}Movie</h1>
              </div>
              <div>
                <FormField name="title" type="text" className="wide-input" label="Title" />
                <FormField
                  name="release_date"
                  type="date"
                  className="tight-input"
                  label="Release Date"
                />
              </div>
              <div>
                <FormField
                  name="poster_path"
                  type="url"
                  placeholder="http://testhos.com/poster.jpg"
                  className="wide-input"
                  label="Movie URL"
                />
                <FormField
                  name="vote_average"
                  type="number"
                  placeholder="7.8"
                  className="tight-input"
                  label="Rating"
                />
              </div>
              <div>
                <FormField
                  name="genreList"
                  type="text"
                  className="wide-input"
                  label="Genres"
                  value={genreList.join(', ')}
                  onClick={() => setContextMenu(!contextMenu)}
                />
                <FormField
                  name="runtime"
                  type="number"
                  placeholder="120"
                  className="tight-input"
                  label="Runtime"
                />
              </div>
              {contextMenu ? genreSelectorElem : null}
              <div>
                <FormField
                  name="overview"
                  type="text"
                  className="text-box-input"
                  label="Overview"
                  cols={40}
                  rows={5}
                  as="textarea"
                />
              </div>
              <div>
                <input
                  className="reset-button"
                  type="reset"
                  value="Reset"
                  onClick={(e) => resetForm()}
                ></input>
                <input className="submit-button" type="submit" value="Submit"></input>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

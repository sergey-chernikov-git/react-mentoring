import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getGenresList } from '../util/dictionary/dictionary';
import { TMovieOperationProps } from '../ts-types/props';
import { TMovie, TMovieBase } from '../ts-types/movie';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { FormField } from './FormField';

const MovieSchema = Yup.object().shape({
  title: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  release_date: Yup.string().required('Required'),
  poster_path: Yup.string().url('Invalid url').required('Required'),
  vote_average: Yup.number()
    .min(0, 'must be > or = to 0')
    .max(10, 'must be < or = to 10')
    .required('Required'),
  genreList: Yup.array().required('Required'),
  runtime: Yup.number().integer().min(0, 'must be > 0').required('Required'),
  overview: Yup.string().required('Required')
});

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
            genreList: genreList,
          }}
          validationSchema={MovieSchema}
          onSubmit={(values, actions) => {
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
          {({ errors, touched, resetForm }) => (
            <Form id="movie-form">
              <div className="movie-preview-context-menu-close" onClick={() => closeWindow()}>
                X
              </div>
              <div>
                <h1>{movie ? 'Edit ' : 'Add '}Movie</h1>
              </div>
              <div>
                <FormField
                  name="title"
                  type="text"
                  className="wide-input"
                  label="Title"
                  errors={errors}
                  touched={touched}
                />
                <FormField
                  name="release_date"
                  type="date"
                  className="tight-input"
                  label="Release Date"
                  errors={errors}
                  touched={touched}
                />
              </div>
              <div>
                <FormField
                  name="poster_path"
                  type="url"
                  placeholder="http://testhos.com/poster.jpg"
                  className="wide-input"
                  label="Movie URL"
                  errors={errors}
                  touched={touched}
                />
                <FormField
                  name="vote_average"
                  type="number"
                  placeholder="7.8"
                  className="tight-input"
                  label="Rating"
                  errors={errors}
                  touched={touched}
                />
              </div>
              <div>
                <FormField
                  name="genreList"
                  type="text"
                  className="wide-input"
                  label="Genres"
                  errors={errors}
                  touched={touched}
                  value={genreList.join(', ')}
                  onClick={() => setContextMenu(!contextMenu)}
                />
                <FormField
                  name="runtime"
                  type="number"
                  placeholder="120"
                  className="tight-input"
                  label="Runtime"
                  errors={errors}
                  touched={touched}
                />
              </div>
              {contextMenu ? genreSelectorElem : null}
              <div>
                <FormField
                  name="overview"
                  type="text"
                  className="text-box-input"
                  label="Overview"
                  errors={errors}
                  touched={touched}
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

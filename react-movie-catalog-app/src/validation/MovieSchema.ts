import * as Yup from 'yup';

export const MovieSchema = Yup.object().shape({
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
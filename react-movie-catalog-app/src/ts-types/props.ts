import { MouseEventHandler } from 'react';
import { TMovie, TKeyValue } from './movie';

export type TMenuPanelProps = {
  genres: Array<TKeyValue>;
  sortList: Array<TKeyValue>;
};

export type TMovieOperationProps = {
  movie?: TMovie;
  operationHandler: Function;
  closeWindow: Function;
};

export type TMoviePreviewProps = {
  movie?: TMovie;
  viewMovie: Function;
};

export type TMoviePreviewDetailsProps = {
  movie: TMovie;
  searchMovie: Function;
};

export type TMoviesPreviewProps = {
  addMovie: Function;
  viewMovie: Function;
};

export type TNotificationProps = {
  type: string;
  message: string;
  description: string;
  onClose: Function;
};
export type TFallbackComponentProps = {
  error: Error;
  componentStack: any;
  resetErrorBoundary: MouseEventHandler;
};

import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { createRoot } from 'react-dom/client';
import { Application } from './components/Application';
import './assets/css/index.css';
import { ApplicationPageFallbackComponent } from './util/error/fallback';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { movieReducer } from './store/reducers';

const store = createStore(movieReducer, applyMiddleware(thunk));

const rootTag = document.getElementById('rootTag');
const root = createRoot(rootTag);
root.render(
  <Provider store={store}>
    <ErrorBoundary FallbackComponent={ApplicationPageFallbackComponent}>
      <Application />
    </ErrorBoundary>
  </Provider>
);

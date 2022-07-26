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

import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { PageNotFound } from './components/PageNotFound';

const store = createStore(movieReducer, applyMiddleware(thunk));

const rootTag = document.getElementById('rootTag');
const root = createRoot(rootTag);
root.render(
  <Provider store={store}>
    <ErrorBoundary FallbackComponent={ApplicationPageFallbackComponent}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Navigate to="/search" replace />} />
          <Route path="/search" element={<Application />} />
          <Route path="/search/:searchQuery" element={<Application />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  </Provider>
);

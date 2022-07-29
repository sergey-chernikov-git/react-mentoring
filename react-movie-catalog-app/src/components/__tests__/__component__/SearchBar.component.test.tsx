import React from 'react';
import { SearchBar } from '../../SearchBar';
import { render, cleanup, screen } from '@testing-library/react';
import { Provider } from "react-redux"
import {BrowserRouter, MemoryRouter} from 'react-router-dom'
import { expect } from '@jest/globals';
import configureStore from 'redux-mock-store';

import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

const mockStore = configureStore([]);

afterEach(cleanup);

describe('SearchBar Component Test Suit', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      myState: 'sample text',
    });
  });

  const searchText = 'Test Movie';
  
  
  test('Search Input Rendering ', () => {     
    const route = '/'
    render(
      <MemoryRouter initialEntries={[route]}>
        <Provider store={store}>
          <SearchBar searchQuery={searchText} />
        </Provider>
      </MemoryRouter>);
    const searchElement = screen.getByTestId("search-input-value");
    expect(searchElement).toBeInTheDocument()
  });

  test(`Search Input Text to be ${searchText} `, () => {
    const route = '/'
    render(
      <MemoryRouter initialEntries={[route]}>
        <Provider store={store}>
          <SearchBar searchQuery={searchText} />
        </Provider>
      </MemoryRouter>);
     const searchElement = screen.getByTestId("search-input-value");
     expect((searchElement as HTMLInputElement).value).toEqual(searchText)
   });
});

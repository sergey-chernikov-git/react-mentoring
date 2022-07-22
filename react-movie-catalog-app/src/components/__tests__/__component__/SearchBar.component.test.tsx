import React from 'react';
import { SearchBar } from '../../SearchBar';
import { render, cleanup, screen } from '@testing-library/react';
import { Provider } from "react-redux"
import {BrowserRouter, MemoryRouter} from 'react-router-dom'
import { expect } from '@jest/globals';
import configureStore from 'redux-mock-store';

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
  

  // const searchInput = screen.getByTestId("search-input-value");

  test('Search Input Rendering ', () => {
   const route = '/'
   render(
    <MemoryRouter initialEntries={[route]}>
      <Provider store={store}>
        <SearchBar searchQuery={searchText} />
      </Provider>
    </MemoryRouter>);
    expect(screen.getByTestId("search-input-value")).not.toBeNull()
  });
});

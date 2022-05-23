import './assets/css/Application.css';
import React, {Component} from 'react';
import {PageTitle} from './components/PageTitle'
import {SearchBar} from './components/SearchBar'
import {Counter} from './containers/Counter'

export class Application extends Component {
  render () {
    return (      
      <div className="App">
      <header className="App-header">
        <PageTitle></PageTitle>
        <SearchBar></SearchBar>
        <Counter></Counter>
      </header>
    </div>
    )
  }
}



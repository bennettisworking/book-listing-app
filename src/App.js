import React, { Component } from "react";
import SearchUI from './SearchUI.js';
import ResultsTable from './ResultsTable';
import logo from './bennett-logo.svg';
import './App.css';

const searchURLRoot = "https://goodreads-server-express--dotdash.repl.co/search/";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      results : []
    }
    this.URLRoot = searchURLRoot;
  }
  searchKeyword = (keyword) => {
    return fetch(searchURLRoot + keyword)
      .then(response => response.json())
      .then(data => {
        this.setState({results : data});
        console.log(data);
      })
  }
  render = () => {
    return (
      
      <div className="app">
        <header className="header">
          <img src={logo} className="header__logo" alt="logo"/>
        </header>
        <section className="section section__search-ui">
        <SearchUI searchBooks={this.searchKeyword}/>
        </section>
        <section className="section">
        <ResultsTable data={this.state.results}/>
        </section>
        <footer></footer>
      </div>
    );
  }
}

export default App;

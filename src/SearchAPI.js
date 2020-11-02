import React, { Component } from 'react';

const searchURLRoot = "https://goodreads-server-express--dotdash.repl.co/search/";

class SearchAPI extends Component {
  constructor(props) {
  super(props);
  this.URLRoot = searchURLRoot;
  this.searchKeyword(this.props.keyword);
  }
  searchKeyword = (keyword) => {
  	let kw = keyword.replace(/[^a-zA-Z ]/g, "").toLowercase();
  	return fetch(searchURLRoot + kw)
  		.then(response => response.json())
      .then(data => data)
  }
}

export default SearchAPI;
import React, { Component } from "react";

class SearchUI extends Component {
	constructor(props) {
		super(props);
		this.state = {
			keyword: ''
		}
	}
	onSearchSubmit = () => {
		this.props.searchBooks(this.state.keyword.replace(/[^a-zA-Z ]/g, "").toLowerCase());
	}
	onInputChange = (event) => {
    this.setState({keyword: event.target.value});
  }

	render = () => {
		return (
			<div className="search-field">
        <label>
          Find your book: 
          <input type="text" className="input" value={this.state.keyword} onChange={this.onInputChange}/>
        </label>
        <button className="button button__submit" onClick={this.onSearchSubmit}>Submit</button>
       </div>
		)
	}
}

export default SearchUI;

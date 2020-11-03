import React, { Component } from "react";

class ResultsTable extends Component {
  constructor(props) {
    super(props);
    this.keys = [' ', "Author", "Title"];
  }

  render = () => {
    let tbody = '',
      thead = '';
    let rows = [];
    if (this.props.data.list && this.props.data.list.length > 0) {
      thead = this.keys.map(key => {
      	return (<td className='results-table__cell results-table__header-cell'> {key} </td>);
      });
      console.log(this.props.data);
      tbody = this.props.data.list.map(row => {
        console.log(row);
        let td =
          <tr>
  					<td className='results-table__cell results-table__image-cell'>
  						<img className='results-table__image' src={row.imageUrl}/>
  					</td>
  					<td className='results-table__cell'>
  						{row.authorName}
  					</td>
  					<td className='results-table__cell'>
  						{row.title}
  					</td>
  				</tr>
        return td;
      });
      console.log(tbody);
    }
    return (
      <table className="results-table">
  		<thead>
  		<tr>
  		{thead}
  		</tr>
  		</thead>
  		<tbody>
  		{tbody}
  		</tbody>
  		</table>)
  }

};

export default ResultsTable;
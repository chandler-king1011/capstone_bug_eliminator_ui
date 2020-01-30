import React, { Component } from 'react';


class SearchBugBar extends Component {

  constructor(props) {
  super(props);

  this.state = {
      query: ""
  }

  this.onChange=this.onChange.bind(this);
}


  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
      e.preventDefault();
      this.props.searchAllBugs(this.state.query, this.props.token, this.props.orgId);
  }


  render() {
    return(
        <form className={`search-bug__searchbar ${this.props.className}`} onSubmit={this.onSubmit}>
            <input 
                className="searchbar__bar"
                type="text"
                name="query" 
                placeholder="Search All Bugs" 
                value={this.state.query} 
                onChange={this.onChange}
            />
        </form>
    )
}
}

export default SearchBugBar;
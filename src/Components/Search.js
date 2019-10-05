import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Search extends Component {
  state = {
    inp: ""
  };

  handleChange = e => {
    this.setState({
      inp: e.target.value
    });
  };

  handleSearch = inp => {
    this.props.handleSearch(inp);
  };

  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            className="input-group mt-2"
            style={{ width: "500px", margin: "auto" }}
            placeholder="Search Github Profile"
            onChange={this.handleChange}
          />
          <button
            className="btn btn-primary mt-2"
            onClick={() => this.handleSearch(this.state.inp)}
          >
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default Search;

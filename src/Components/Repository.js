import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import RenRepo from "../Components/RenRepo";
import { async } from "q";
import RenFollowers from "./RenFollowers";

class Repository extends Component {
  state = {
    elem: ``,
    repos: [],
    followers: []
  };

  getRepos = async () => {
    var repos = await this.props.getRepos();
    console.log("done");
    // console.log(repos);
    this.setState({ repos });
    console.log(this.state.repos);
  };

  getFollowers = async () => {
    var followers = await this.props.getFollowers();
    console.log("done");
    // console.log(followers);
    this.setState({ followers });
    console.log(this.state.followers);
  };

  render() {
    {
      console.log(this.props);
    }
    return (
      <div>
        <div style={{ visibility: this.props.style }}>
          <h1>Repositories</h1>
          <button className="btn btn-primary" onClick={this.getRepos}>
            Get Repos
          </button>
        </div>
        <RenRepo
          repo={this.state.repos}
          style={this.props.style}
          getFollowers={this.getFollowers}
        />
        <br />
        <RenFollowers
          followers={this.state.followers}
          style={this.props.style}
        />
      </div>
    );
  }
}

export default Repository;

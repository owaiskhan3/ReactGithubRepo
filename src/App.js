import React, { Component } from "react";
import "./App.css";
import Search from "./Components/Search";
import DisplayImage from "./Components/DisplayImage";
import UserInfo from "./Components/UserInfo";
import Repository from "./Components/Repository";

class App extends Component {
  state = {
    style: "hidden"
  };

  handleSearch = async inp => {
    console.log(inp);
    const githubRes = await fetch(`https://api.github.com/users/${inp}`);
    const data = await githubRes.json();
    console.log(data.repos_url);
    this.setState({
      data,
      repos_url: data.repos_url,
      followers_url: data.followers_url,
      style: "visible"
    });
    console.log(this.state.data);
  };

  getRepos = async () => {
    const repos = await fetch(this.state.repos_url);
    const data = await repos.json();
    // console.log(data);
    this.setState({
      repos: data
    });
    return data;
  };

  getFollowers = async () => {
    const repos = await fetch(this.state.followers_url);
    const data = await repos.json();
    console.log(data);
    this.setState({
      followers_url: data
    });
    return data;
  };

  render() {
    return (
      <div className="App">
        <h1>Github Profile Search</h1>

        <Search handleSearch={this.handleSearch} />

        <DisplayImage {...this.state.data} style={this.state.style} />
        <UserInfo {...this.state.data} style={this.state.style} />
        <Repository
          getRepos={this.getRepos}
          getFollowers={this.getFollowers}
          {...this.state.data}
          style={this.state.style}
        />
      </div>
    );
  }
}

export default App;

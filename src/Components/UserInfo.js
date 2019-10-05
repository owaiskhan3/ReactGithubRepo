import React, { Component } from "react";

class UserInfo extends Component {
  state = {};

  render() {
    {
      console.log(this.props);
    }
    return (
      <div style={{ visibility: this.props.style }}>
        <h1>Username: {this.props.login}</h1>

        <h1>Name: {this.props.name}</h1>
        <h1>Public Repos: {this.props.public_repos}</h1>
        <h1>Followers: {this.props.followers}</h1>
        <h1>Followings: {this.props.following}</h1>
        <h1>Bio: {this.props.bio}</h1>
      </div>
    );
  }
}

export default UserInfo;

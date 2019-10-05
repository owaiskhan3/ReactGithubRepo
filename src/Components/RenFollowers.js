import React, { Component } from "react";
import "../App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
class RenFollowers extends Component {
  state = {};

  render() {
    {
      console.log(this.props.followers);
    }
    return (
      <div style={{ visibility: this.props.style, alignContent: "center" }}>
        {this.props.followers.map(followers => {
          return (
            <div
              className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 centre"
              style={{ margin: "auto" }}
              key={followers.id}
            >
              <div
                className="card bg-light mb-3 col-sm-4 col-md-4 col-lg-4 col-xl-4"
                style={{ float: "left", height: "500px" }}
              >
                <div className="card-header">
                  <img
                    src={followers.avatar_url}
                    alt=""
                    style={{ width: "100%", height: "250px" }}
                  />
                  <a href={followers.html_url}>
                    <h5>{followers.name}</h5>
                  </a>
                </div>
                <div className="card-body">
                  <a href={followers.html_url}>
                    <h3>{followers.login}</h3>
                    <h6 className="card-title">{followers.html_url}</h6>
                  </a>
                  <p
                    className="card-text"
                    style={{ textOverflow: "ellipsis" }}
                  ></p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default RenFollowers;

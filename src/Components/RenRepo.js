import React, { Component } from "react";
import "../App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
class RenRepo extends Component {
  state = {};

  render() {
    {
      console.log(this.props.repo);
    }
    return (
      <div style={{ visibility: this.props.style, alignContent: "center" }}>
        {this.props.repo.map(repo => {
          return (
            <div
              className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 centre"
              style={{ margin: "auto" }}
              key={repo.id}
            >
              <div
                className="card bg-light mb-3 col-sm-4 col-md-4 col-lg-4 col-xl-4"
                style={{ float: "left", height: "340px" }}
              >
                <div className="card-header">
                  <a href={repo.html_url}>
                    <h5>{repo.name}</h5>
                  </a>
                </div>
                <div className="card-body">
                  <a href={repo.html_url}>
                    <h6 className="card-title">{repo.html_url}</h6>
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

        <button
          className="btn btn-primary"
          style={{ display: "block", margin: "auto", clear: "both" }}
          onClick={this.props.getFollowers}
        >
          Get Followers
        </button>
      </div>
    );
  }
}

export default RenRepo;

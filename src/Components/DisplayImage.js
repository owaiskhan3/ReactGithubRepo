import React, { Component } from "react";

class DisplayImage extends Component {
  state = {};

  render() {
    {
      console.log(this.props.avatar_url);
    }
    return (
      <div style={{ visibility: this.props.style, margin: "10px" }}>
        <img
          src={this.props.avatar_url}
          alt=""
          style={{ width: "100px", height: "100px", border: 0 }}
        />
      </div>
    );
  }
}

export default DisplayImage;

import React, { Component } from "react";

export default class NotFound extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title">
            <h1 className="display-3">404</h1>
            <h1>error</h1>
            <h2>page not found</h2>
            <h3>
              <span className="text-danger">
                {this.props.location.pathname}
              </span>
              is not found
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

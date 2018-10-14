import React, { Component } from "react";

import { connect } from "react-redux";
import * as actionCreators from "./actions";

class AuthorCard extends Component {
  render() {
    return (
      <div className="col-lg-4 col-md-6 col-12">
        <div className="card">
          <div className="image">
            <img
              className="card-img-top img-fluid"
              src={this.props.imageUrl}
              alt={this.props.first_name + " " + this.props.last_name}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <span>{this.props.first_name + " " + this.props.last_name}</span>
            </h5>
            <small className="card-text">{this.props.books.length} books</small>
          </div>
          <button
            className="btn btn-danger"
            onClick={() => {
              this.props.onDeleteAuthor(this.props.author);
            }}
          >
            DELETE
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDeleteAuthor: author => dispatch(actionCreators.delete_author(author))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AuthorCard);

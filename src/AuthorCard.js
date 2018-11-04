import React, { Component } from "react";

import * as actionCreators from "./store/actions";
import { connect } from "react-redux";

class AuthorCard extends Component {
  render() {
    return (
      <div className="col-lg-4 col-md-6 col-12">
        <div className="card">
          <div className="image">
            <img
              className="card-img-top img-fluid"
              src={this.props.author.imageUrl}
              alt={
                this.props.author.first_name + " " + this.props.author.last_name
              }
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <span>
                {this.props.author.first_name +
                  " " +
                  this.props.author.last_name}
              </span>
            </h5>
            <small className="card-text">
              {this.props.author.books.length} books
            </small>
          </div>
          <button
            className="btn btn-danger"
            onClick={() => this.props.deleteAuthor(this.props.author)}
          >
            {" "}
            DELETE
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authors: state.authors,
    id: state.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteAuthor: currAuth => dispatch(actionCreators.deleteAuthor(currAuth))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorCard);

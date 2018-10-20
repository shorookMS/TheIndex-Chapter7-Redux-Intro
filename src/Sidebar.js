import React, { Component } from "react";

import { connect } from "react-redux";
import * as actionCreators from "./actions";

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <img src="theindex.svg" className="logo" alt="the index logo" />
        <section>
          <h4 className="menu-item active">
            <button>AUTHORS</button>
          </h4>
          <h4 className="menu-item">
            <button
              onClick={() => this.props.onAddAuthor(this.props.newAuthId)}
            >
              + ADD AUTHOR
            </button>
          </h4>
        </section>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    newAuthId: state.newAuthorId
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onAddAuthor: author => dispatch(actionCreators.add_author(author))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);

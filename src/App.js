import React, { Component } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";

import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {  ** since we have a central state, we do not need this any more **
    //   authors: authors,
    //   newAuthorId: 1
    // };
  }
  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="content col-10">
            <AuthorsList authors={this.props.auths} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auths: state.authors,
    newAuthId: state.newAuthorId
  };
};

export default connect(mapStateToProps)(App);

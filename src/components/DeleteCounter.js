import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { deleteCounter } from "../redux/actions/counterAction";
import { connect } from "react-redux";

class DeleteCounter extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.dispatch(deleteCounter());
          }}
        >
          X
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(deleteCounter, dispatch) };
}

export default connect(mapDispatchToProps)(DeleteCounter);

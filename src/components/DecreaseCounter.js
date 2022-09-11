import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { decreaseCounter } from "../redux/actions/counterAction";
import { connect } from "react-redux";

class DecreaseCounter extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.dispatch(decreaseCounter());
          }}
        >
          -
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(decreaseCounter, dispatch) };
}

export default connect(mapDispatchToProps)(DecreaseCounter);

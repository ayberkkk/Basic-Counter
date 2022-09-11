import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { increaseCounter } from "../redux/actions/counterAction";
import { connect } from "react-redux";
import { Button } from "reactstrap";

class IncreaseCounter extends Component {
  render() {
    return (
      <div>
        <Button
          onClick={() => {
            this.props.dispatch(increaseCounter());
          }}
          color="success"
          outline
        >
          success
        </Button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(increaseCounter, dispatch) };
}

export default connect(mapDispatchToProps)(IncreaseCounter);

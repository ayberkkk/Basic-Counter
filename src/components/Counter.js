import React, { Component } from 'react'
import {connect} from "react-redux"

class Counter extends Component {
  render() {
    return (
      <div>
        <h2 style={{color: "red"}}>{this.props.counter}</h2>
        
      </div>
    )
  }
}

function mapStateToProps(state){
  return {counter:state.counterReducer}
}

export default connect(mapStateToProps)(Counter);

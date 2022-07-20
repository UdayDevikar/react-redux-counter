import React from "react";
import { connect } from "react-redux";
import {
  incrementCount,
  decrementCount,
  resetCount,
  toggle,
  noToggle,
} from "../actions/actions";

function Counter(props) {
  console.log(props);

  return (
    <div>
      {props.show && <h1> REDUX TOGGLE </h1>}

      <button onClick={props.incrementCount}>INCREMENT</button>
      <button onClick={props.decrementCount}>DECREMENT</button>
      <button onClick={props.resetCount}>RESET</button>

      <h1>{props.count}</h1>

      <button onClick={props.toggle}>Toggle</button>
      <button onClick={props.noToggle}>noToggle</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
    show: state.toggleReducer.show,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCount: () => dispatch(incrementCount()),
    decrementCount: () => dispatch(decrementCount()),
    resetCount: () => dispatch(resetCount()),
    toggle: () => dispatch(toggle()),
    noToggle: () => dispatch(noToggle()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

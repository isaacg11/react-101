import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { connect } from "react-redux";
import { Provider } from "react-redux";

const initialState = {
  count: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'RESET':
      return { ...state, count: state.count = 0 };
    default:
      return state;
  }
};

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch({type: 'INCREMENT'}),
    onDecrement: () => dispatch({type: 'DECREMENT'}),
    onReset: () => dispatch({type: 'RESET'})
  }
}

const Counter = ({ count, onIncrement, onDecrement, onReset }) => (
  <div>
    <h1>{ count }</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onReset}>Reset</button>
    <button onClick={onDecrement}>-</button>
  </div>
);

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedCounter/>
  </Provider>,
  document.getElementById('root')
);

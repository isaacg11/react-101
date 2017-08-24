import React from "react";
import { Component } from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import { tailsSelector, headsSelector} from "./selectors";
import { connect } from "react-redux";

const Results = (props) => (
  <div>
      <p>Heads: {props.heads}</p>
      <p>Tails: {props.tails}</p>
  </div>
);

const mapStateToProps = state => ({
  heads: headsSelector(state),
  tails: tailsSelector(state)
});

export default connect(mapStateToProps, null)(Results);

// render(<Results() />, document.getElementById('root'));

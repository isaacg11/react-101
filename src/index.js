import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';

let Heads = function(results) {
    return results.filter(face => face == "H").length;
}

let Tails = function(results) {
    return results.filter(face => face == "T").length;
}

class CoinFlip extends Component {
  state = {
    results: ["T", "H", "H", "T", "H", "T", "T"]
  }
  render() {
    return (
      <div>
        <p>Heads: {Heads(this.state.results)}</p>
        <p>Tails: {Tails(this.state.results)}</p>
      </div>
    )
  }
}


render(<CoinFlip />, document.getElementById('root'));

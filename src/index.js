import React from 'react';
import ReactDOM from 'react-dom';

class BankAccount extends React.Component {
  state = {
    accountBalance: 25.0,
    incrementValue: 0
  };

  increment() {
    console.log("executed!");
    this.setState(
      {
        ...this.state,
        accountBalance: this.state.accountBalance + this.state.incrementValue
      }
    );
  };

  render() {
    return (
      <div>
        <h3>Account Balance: ${this.state.accountBalance}</h3>
        <input
          type="number"
          onChange={event =>
            this.setState({ incrementValue: +event.target.value })}
          value={this.state.incrementValue}
        />
        <button onClick={this.increment.bind(this)}>
          Increase Amount
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <BankAccount />,
  document.getElementById('root')
)
